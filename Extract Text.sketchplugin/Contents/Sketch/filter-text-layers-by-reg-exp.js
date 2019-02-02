/* eslint-disable eqeqeq */

function filterTextLayersByRegExp (
  textLayers,
  regExp,
  shouldMatchTextLayerContent
) {
  const result = []
  let i = -1
  const length = textLayers.length
  while (++i < length) {
    const textLayer = textLayers[i]
    const textLayerContent = textLayer.stringValue()
    const textLayerName = textLayer.name()
    if (
      textLayerContent != '' &&
      regExp.test(
        shouldMatchTextLayerContent ? textLayerContent : textLayerName
      )
    ) {
      result.push(textLayerContent)
    }
  }
  return result
}

module.exports = filterTextLayersByRegExp
