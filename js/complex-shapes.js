// definition
document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('hello-world-canvas')
  let context = canvas.getContext('2d')

  // first object
  context.beginPath()
  context.strokeStyle = 'red'
  context.lineWidth = 10
  context.lineCap = 'round'
  context.lineJoin = 'round'
  context.shadowColor = 'yellow'
  context.shadowOffsetX = 10
  context.shadowOffsetX = 10
  context.shadowBlur = 5
  context.moveTo(60, 80)
  context.lineTo(160, 80)
  context.lineTo(80, 150)
  context.lineTo(150, 150)
  context.stroke()

  // second object
  context.beginPath()
  context.strokeStyle = 'blue'
  context.lineWidth = 10
  context.lineCap = 'round'
  context.lineJoin = 'round'
  context.shadowColor = 'red'
  context.shadowOffsetX = 10
  context.shadowOffsetX = 10
  context.shadowBlur = 5
  context.moveTo(340, 80)
  context.lineTo(240, 80)
  context.lineTo(340, 180)
  context.lineTo(240, 180)
  context.stroke()
})
