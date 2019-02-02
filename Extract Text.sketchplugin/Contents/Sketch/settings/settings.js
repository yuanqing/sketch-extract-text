/* eslint-disable eqeqeq */

const config = require('../config')
const matchTypes = require('./match-types')
const readSettings = require('./read-settings')
const saveSettings = require('./save-settings')
const createTextInput = require('../form/create-text-input')
const createLabel = require('../form/create-label')
const createRadioButtons = require('../form/create-radio-buttons')

function createDialog (values) {
  const alert = COSAlertWindow.new()
  alert.setMessageText('Extract Text')
  alert.addButtonWithTitle('OK')
  alert.addButtonWithTitle('Cancel')
  const viewWidth = 300
  const viewHeight = 70
  const view = NSView.alloc().initWithFrame(
    NSMakeRect(0, 0, viewWidth, viewHeight)
  )
  alert.addAccessoryView(view)
  const rowHeight = 20
  const padding = 10
  const regularExpressionLabel = createLabel(
    'Regular Expression',
    0,
    viewHeight - 1 * rowHeight,
    viewWidth,
    rowHeight
  )
  const regularExpressionTextField = createTextInput(
    values.regularExpression,
    0,
    viewHeight - 2 * rowHeight,
    viewWidth,
    rowHeight
  )
  const matchTypeRadioButtons = createRadioButtons(
    matchTypes,
    values.matchType,
    0,
    viewHeight - 3 * rowHeight - 1 * padding,
    viewWidth,
    rowHeight
  )
  view.addSubview(regularExpressionLabel)
  view.addSubview(regularExpressionTextField)
  view.addSubview(matchTypeRadioButtons)
  regularExpressionTextField.setNextKeyView(matchTypeRadioButtons)
  return {
    run: alert.runModal,
    fields: {
      regularExpression: regularExpressionTextField,
      matchType: matchTypeRadioButtons
    }
  }
}

function onRun (context) {
  const settings = readSettings(config.identifier, config.defaultSettings)
  const dialog = createDialog(settings.values)
  if (dialog.run() == '1000') {
    // the first button ('OK') was clicked
    saveSettings(settings.userDefaults, dialog.fields)
  }
}

module.exports = onRun
