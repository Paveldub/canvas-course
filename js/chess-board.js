// definition
document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('hello-world-canvas')
  let context = canvas.getContext('2d')

  // colors
  const lightCellColor = '#ddb180'
  const darkCellColor = '#7c330c'

  // frame
  context.strokeStyle = 'black'
  context.strokeRect(250, 100, 400, 400)

  for (let x = 1; x <= 8; x++) {
    for (let y = 1; y <= 8; y++) {
      if ((x + y) % 2 == 0) {
        context.fillStyle = darkCellColor
      } else {
        context.fillStyle = lightCellColor
      }
      context.strokeRect(200 + x * 50, 50 + y * 50, 50, 50)
      context.fillRect(200 + x * 50, 50 + y * 50, 50, 50)
    }
  }
})
