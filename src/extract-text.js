/* eslint-disable eqeqeq */

const dom = require('sketch/dom')
const ui = require('sketch/ui')
const { openSettingsDialog, saveSettings } = require('sketch-plugin-helper')

const filterTextLayersByRegularExpression = require('./filter-text-layers-by-regular-expression')
const findAllTextLayers = require('./find-all-text-layers')
const saveToClipboard = require('./save-to-clipboard')
const settingsConfig = require('./settings-config')

export default function () {
  const settings = openSettingsDialog(settingsConfig)
  if (settings) {
    saveSettings({ settings })
  }
  const document = dom.getSelectedDocument()
  const selectedLayers = document.selectedLayers
  let textLayers = []
  if (selectedLayers.isEmpty) {
    const page = document.selectedPage
    textLayers = findAllTextLayers(page.layers)
    if (textLayers.length == 0) {
      ui.message('No text layers on the page')
      return
    }
  } else {
    textLayers = findAllTextLayers(selectedLayers.layers)
    if (textLayers.length == 0) {
      ui.message('No text layers in selection')
      return
    }
  }
  const settingsRegularExpression = settings.regularExpression
  const regularExpression = new RegExp(
    settingsRegularExpression == '' ? '^.+$' : settingsRegularExpression
  )
  const matches = filterTextLayersByRegularExpression({
    textLayers,
    regularExpression,
    shouldMatchTextLayerContent: settings.matchType == 'Match layer content'
  })
  const matchesLength = matches.length
  if (matchesLength == 0) {
    ui.message('No matches')
    return
  }
  const string = matches
    .map(function (textLayer) {
      return textLayer.text
    })
    .reverse()
    .join('\n')
  saveToClipboard(string)
  ui.message(
    `Copied ${matchesLength} match${
      matchesLength != 1 ? 'es' : ''
    } to clipboard`
  )
}
