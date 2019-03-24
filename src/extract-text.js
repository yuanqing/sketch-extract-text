import {
  getAllLayers,
  getSelectedLayers,
  openSettingsDialog,
  saveSettings,
  showErrorMessage,
  showSuccessMessage,
  showWarningMessage,
  RADIO_BUTTONS,
  TEXT_BOX
} from 'sketch-plugin-helper'

import filterTextLayersByRegularExpression from './filter-text-layers-by-regular-expression'
import findAllTextLayers from './find-all-text-layers'
import saveToClipboard from './save-to-clipboard'

const settingsConfig = {
  title: 'Extract Text',
  inputs: [
    {
      type: TEXT_BOX,
      key: 'regularExpression',
      label: 'Regular Expression'
    },
    {
      type: RADIO_BUTTONS,
      key: 'matchType',
      possibleValues: ['Match layer content', 'Match layer name']
    }
  ]
}

export default function extractText () {
  const settings = openSettingsDialog(settingsConfig)
  if (!settings) {
    return
  }
  saveSettings(settings)
  const selectedLayers = getSelectedLayers()
  let textLayers = []
  if (selectedLayers.length === 0) {
    textLayers = findAllTextLayers(getAllLayers())
    if (textLayers.length === 0) {
      showErrorMessage('No text layers on the page')
      return
    }
  } else {
    textLayers = findAllTextLayers(selectedLayers)
    if (textLayers.length === 0) {
      showErrorMessage('No text layers in selection')
      return
    }
  }
  const regularExpression = new RegExp(
    settings.regularExpression === '' ? '^.+$' : settings.regularExpression
  )
  const matches = filterTextLayersByRegularExpression({
    textLayers,
    regularExpression,
    shouldMatchLayerContent: settings.matchType === 'Match layer content'
  })
  const matchesLength = matches.length
  if (matchesLength === 0) {
    showWarningMessage('No matches')
    return
  }
  const string = matches
    .map(function (textLayer) {
      return textLayer.text
    })
    .reverse()
    .join('\n')
  saveToClipboard(string)
  showSuccessMessage(
    `Copied ${matchesLength} match${
      matchesLength !== 1 ? 'es' : ''
    } to clipboard`
  )
}
