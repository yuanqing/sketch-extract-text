export default function filterTextLayersByRegularExpression ({
  textLayers,
  regularExpression,
  shouldMatchLayerContent
}) {
  return textLayers.filter(function (textLayer) {
    const layerContent = textLayer.text
    return (
      layerContent !== '' &&
      regularExpression.test(
        shouldMatchLayerContent ? layerContent : textLayer.name
      )
    )
  })
}
