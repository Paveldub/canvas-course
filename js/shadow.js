// definition
window.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('hello-world-canvas')
  let context = canvas.getContext('2d')

  context.beginPath()
  context.strokeStyle = 'red'
  context.lineWidth = 20
  context.shadowColor = 'black'
  context.shadowOffsetX = 10
  context.shadowOffsetY = 10
  context.shadowBlur = 5
  context.moveTo(100, 60)
  context.lineTo(200, 60)
  context.stroke()

  context.beginPath()
  context.strokeStyle = 'yellow'
  context.lineWidth = 20
  context.shadowColor = 'black'
  context.shadowOffsetX = -10
  context.shadowOffsetY = -10
  context.shadowBlur = 5
  context.moveTo(150, 60)
  context.lineTo(250, 60)
  context.stroke()

  context.beginPath()
  context.strokeStyle = 'pink'
  context.lineWidth = 20
  context.shadowColor = 'black'
  context.shadowOffsetX = 15
  context.shadowOffsetY = 5
  context.shadowBlur = 5
  context.moveTo(200, 60)
  context.lineTo(250, 60)
  context.stroke()

  context.beginPath()
  context.strokeStyle = 'crimson'
  context.lineWidth = 20
  context.shadowColor = 'black'
  context.shadowOffsetX = 0
  context.shadowOffsetY = -15
  context.shadowBlur = 5
  context.moveTo(250, 60)
  context.lineTo(300, 60)
  context.stroke()
})

// shadow parameters
// 1. shadowColor
// 2. shadowOffsetX
// 3. shadowOffsetY
// 4. shadowBlur
