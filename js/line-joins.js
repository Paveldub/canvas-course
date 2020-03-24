// definition
window.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('hello-world-canvas')
  let context = canvas.getContext('2d')

  // first line bevel
  context.beginPath()
  context.strokeStyle = 'red'
  context.lineJoin = 'miter'
  context.lineWidth = 15
  context.moveTo(30, 30)
  context.lineTo(130, 30)
  context.lineTo(130, 130)
  context.lineTo(30, 130)
  context.lineTo(30, 230)
  context.stroke()

  // second line bevel
  context.beginPath()
  context.strokeStyle = 'blue'
  context.lineJoin = 'bevel'
  context.lineWidth = 15
  context.moveTo(60, 60)
  context.lineTo(160, 60)
  context.lineTo(160, 160)
  context.lineTo(60, 160)
  context.lineTo(60, 260)
  context.stroke()

  // third line round
  context.beginPath()
  context.strokeStyle = 'yellow'
  context.lineJoin = 'round'
  context.lineWidth = 15
  context.moveTo(90, 90)
  context.lineTo(190, 90)
  context.lineTo(190, 190)
  context.lineTo(90, 190)
  context.lineTo(90, 290)
  context.stroke()
})
