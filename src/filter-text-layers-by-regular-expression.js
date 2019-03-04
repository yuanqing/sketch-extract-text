/* eslint-disable eqeqeq */

function filterTextLayersByRegularExpression ({
  textLayers,
  regularExpression,
  shouldMatchTextLayerContent
}) {
  return textLayers.filter(function (textLayer) {
    const textLayerContent = textLayer.text
    const textLayerName = textLayer.name
    if (
      textLayerContent != '' &&
      regularExpression.test(
        shouldMatchTextLayerContent ? textLayerContent : textLayerName
      )
    ) {
      return true
    }
    return false
  })
}

module.exports = filterTextLayersByRegularExpression
