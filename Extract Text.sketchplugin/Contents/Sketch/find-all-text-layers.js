/* eslint-disable eqeqeq */

function findAllTextLayers (layers, result) {
  result = result || []
  const length = layers.length
  let i = -1
  while (++i < length) {
    const layer = layers[i]
    const className = layer.className()
    if (className == 'MSTextLayer') {
      result.push(layer)
      continue
    }
    if (className == 'MSArtboardGroup' || className == 'MSLayerGroup') {
      findAllTextLayers(layer.layers(), result)
    }
  }
  return result
}

module.exports = findAllTextLayers
