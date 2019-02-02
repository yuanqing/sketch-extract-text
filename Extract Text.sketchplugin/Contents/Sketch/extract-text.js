/* eslint-disable eqeqeq */

const config = require('./config')
const findAllTextLayers = require('./find-all-text-layers')
const filterTextLayersByRegExp = require('./filter-text-layers-by-reg-exp')
const readSettings = require('./settings/read-settings')
const saveToClipboard = require('./save-to-clipboard')

function onRun (context) {
  const document = context.document
  const page = document.currentPage()
  const selectedLayers = context.selection
  let textLayers = []
  if (selectedLayers.length > 0) {
    textLayers = findAllTextLayers(selectedLayers)
    if (textLayers.length == 0) {
      document.showMessage('No text layers in selection')
      return
    }
  } else {
    textLayers = findAllTextLayers(page.layers())
    if (textLayers.length == 0) {
      document.showMessage('No text layers on the page')
      return
    }
  }
  const settings = readSettings(config.identifier, config.defaultSettings)
  const settingsRegularExpression = settings.values.regularExpression
  const regExp = new RegExp(
    settingsRegularExpression == '' ? '^.+$' : settingsRegularExpression
  )
  const matches = filterTextLayersByRegExp(
    textLayers,
    regExp,
    settings.values.matchType == 0
  )
  if (matches.length == 0) {
    document.showMessage('No matches')
    return
  }
  saveToClipboard(matches.join('\n'))
  const length = matches.length
  document.showMessage(
    `Copied ${length} match${length > 1 ? 'es' : ''} to clipboard`
  )
}

module.exports = onRun
