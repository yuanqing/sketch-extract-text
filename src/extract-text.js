/* eslint-disable eqeqeq */

const { getAllLayers, getSelectedLayers, openSettingsDialog, saveSettings, showMessage } = require('sketch-plugin-helper')

const filterTextLayersByRegularExpression = require('./filter-text-layers-by-regular-expression')
const findAllTextLayers = require('./find-all-text-layers')
const saveToClipboard = require('./save-to-clipboard')
const settingsConfig = require('./settings-config')

export default function () {
  const settings = openSettingsDialog(settingsConfig)
  if (settings) {
    saveSettings({ settings })
  }
  const selectedLayers = getSelectedLayers()
  let textLayers = []
  if (selectedLayers.length == 0) {
    textLayers = findAllTextLayers(getAllLayers())
    if (textLayers.length == 0) {
      showMessage('No text layers on the page')
      return
    }
  } else {
    textLayers = findAllTextLayers(selectedLayers)
    if (textLayers.length == 0) {
      showMessage('No text layers in selection')
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
    showMessage('No matches')
    return
  }
  const string = matches
    .map(function (textLayer) {
      return textLayer.text
    })
    .reverse()
    .join('\n')
  saveToClipboard(string)
  showMessage(
    `Copied ${matchesLength} match${
      matchesLength != 1 ? 'es' : ''
    } to clipboard`
  )
}
