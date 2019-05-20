import {
  getLayersOnAllPages,
  getLayersOnCurrentPage,
  getSelectedLayers,
  openSettingsDialog,
  saveSettings,
  showErrorMessage,
  showMessage,
  showSuccessMessage,
  DROP_DOWN,
  RADIO_BUTTONS,
  TEXT_BOX
} from 'sketch-plugin-helper'

import filterTextLayersByRegularExpression from './filter-text-layers-by-regular-expression'
import findAllTextLayers from './find-all-text-layers'
import saveToClipboard from './save-to-clipboard'

export default function extractText () {
  const selectedLayers = getSelectedLayers()
  const hasSelection = selectedLayers.length !== 0
  const settings = openSettingsDialog({
    title: 'Extract Text',
    formFields: [
      {
        type: TEXT_BOX,
        key: 'regularExpression',
        label: 'Regular Expression'
      },
      {
        type: RADIO_BUTTONS,
        key: 'matchType',
        possibleValues: ['Match layer content', 'Match layer name']
      },
      {
        type: DROP_DOWN,
        key: 'scope',
        label: 'Scope',
        possibleValues: [
          hasSelection && 'Selected layers',
          'Current page',
          'Entire document'
        ].filter(Boolean),
        value: hasSelection ? 'Selected layers' : null
      }
    ]
  })
  if (!settings) {
    return
  }
  const { scope, ...settingsWithoutScope } = settings
  let textLayers = []
  if (scope === 'Selected layers') {
    saveSettings(settingsWithoutScope)
    textLayers = findAllTextLayers(selectedLayers)
    if (textLayers.length === 0) {
      showErrorMessage('No text layers in selection')
      return
    }
  } else {
    saveSettings(settings)
    textLayers = findAllTextLayers(
      scope === 'Current page'
        ? getLayersOnCurrentPage()
        : getLayersOnAllPages()
    )
    if (textLayers.length === 0) {
      showErrorMessage(
        `No text layers ${
          scope === 'Current page' ? 'on the current page' : 'in the document'
        }`
      )
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
  showSuccessMessage(
    `Copied ${matchesLength} match${
      matchesLength !== 1 ? 'es' : ''
    } to the clipboard`
  )
}
