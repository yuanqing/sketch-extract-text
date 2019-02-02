/* eslint-disable eqeqeq */

function retrieveValue (field) {
  if (field.className() == 'NSMatrix') {
    return field.cells().indexOfObject(field.selectedCell())
  }
  return field.stringValue()
}

function saveSettings (userDefaults, fields) {
  const keys = Object.keys(fields)
  const length = keys.length
  let i = -1
  while (++i < length) {
    const key = keys[i]
    userDefaults.setObject_forKey(retrieveValue(fields[key]), key)
  }
  userDefaults.synchronize()
}

module.exports = saveSettings
