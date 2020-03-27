document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('hello-world-canvas')
  let context = canvas.getContext('2d')

  context.font = '45px Verdana'

  // context.fillText(text, xCoord, yCoord, maxWidth)
  let fillText = 'Fill Text on Canvas'
  context.fillText(fillText, 80, 100, 250)

  // context.strokeText(text, xCoord, yCoord, maxWidth)
  let strokeText = 'Stroke Text on Canvas'
  context.strokeText(strokeText, 80, 200, 400)
})
