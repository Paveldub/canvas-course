document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('hello-world-canvas')
  let context = canvas.getContext('2d')

  // Polygon variables
  let sides = 6
  let radius = 100
  let centerX = 400
  let centerY = 300
  let startAngle = 200
  let angle = (2 * Math.PI) / sides

  // start drawing
  context.beginPath()
  context.strokeStyle = 'red'
  context.lineWidth = 10
  context.lineJoin = 'round'

  // beggining point coordinates
  let beginX = centerX + radius * Math.cos(startAngle)
  let beginY = centerY - radius * Math.sin(startAngle)

  context.moveTo(beginX, beginY)

  // draw lines
  for (let i = 1; i <= sides; i++) {
    // current points coords
    let currentAngle = startAngle + i * angle
    let currentPointX = centerX + radius * Math.cos(currentAngle)
    let currentPointY = centerY - radius * Math.sin(currentAngle)

    // draw the line
    context.lineTo(currentPointX, currentPointY)
  }

  context.closePath() // to close paths manually
  context.stroke()
})
