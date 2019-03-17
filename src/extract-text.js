const {
  getAllLayers,
  getSelectedLayers,
  openUserInputDialog,
  saveUserInput,
  showErrorMessage,
  showSuccessMessage,
  showWarningMessage,
  TEXT_BOX,
  RADIO_BUTTONS
} = require('sketch-plugin-helper')

const filterTextLayersByRegularExpression = require('./filter-text-layers-by-regular-expression')
const findAllTextLayers = require('./find-all-text-layers')
const saveToClipboard = require('./save-to-clipboard')

const userInputConfig = {
  title: 'Extract Text',
  inputs: [
    {
      key: 'regularExpression',
      label: 'Regular Expression',
      type: TEXT_BOX
    },
    {
      key: 'matchType',
      type: RADIO_BUTTONS,
      possibleValues: ['Match layer content', 'Match layer name']
    }
  ]
}

function extractText () {
  const userInput = openUserInputDialog(userInputConfig)
  if (userInput) {
    saveUserInput(userInput)
  }
  const selectedLayers = getSelectedLayers()
  let textLayers = []
  if (selectedLayers.length == 0) {
    textLayers = findAllTextLayers(getAllLayers())
    if (textLayers.length == 0) {
      showErrorMessage('No text layers on the page')
      return
    }
  } else {
    textLayers = findAllTextLayers(selectedLayers)
    if (textLayers.length == 0) {
      showErrorMessage('No text layers in selection')
      return
    }
  }
  const regularExpression = new RegExp(
    userInput.regularExpression == '' ? '^.+$' : userInput.regularExpression
  )
  const matches = filterTextLayersByRegularExpression({
    textLayers,
    regularExpression,
    shouldMatchTextLayerContent: userInput.matchType == 'Match layer content'
  })
  const matchesLength = matches.length
  if (matchesLength == 0) {
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
      matchesLength != 1 ? 'es' : ''
    } to clipboard`
  )
}

module.exports = extractText
