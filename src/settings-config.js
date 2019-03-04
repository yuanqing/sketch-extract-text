const { TEXT_BOX, RADIO_BUTTONS } = require('sketch-plugin-helper')

module.exports = {
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
