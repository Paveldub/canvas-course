// definition
document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('hello-world-canvas')
  let context = canvas.getContext('2d')

  //   1. context.rect(xCoord, yCoord, width, height)
  context.fillStyle = 'red'
  context.lineWidth = 5
  context.lineJoin = 'round'
  context.strokeStyle = 'blue'
  context.rect(50, 25, 100, 50)
  context.stroke()
  context.fill()

  //   2. context.fillRect(xCoord, yCoord, width, height)
  context.fillStyle = 'red'
  context.fillRect(200, 25, 100, 50)

  //   3. context.strokeRect(xCoord, yCoord, width, height)
  context.lineWidth = 4
  context.strokeStyle = 'yellow'
  context.lineJoin = 'square'
  context.strokeRect(350, 25, 100, 50)

  // 4. context.clearRect(xCoord, yCoord, width, height)
  context.clearRect(15, 5, 100, 50)
})
