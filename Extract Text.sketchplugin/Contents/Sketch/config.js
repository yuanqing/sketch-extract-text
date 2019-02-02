const matchTypes = require('./settings/match-types')

module.exports = {
  defaultSettings: {
    matchType: matchTypes[0],
    regularExpression: ''
  },
  identifier: 'yuanqing.extract-text'
}
