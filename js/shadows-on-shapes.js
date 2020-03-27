document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('hello-world-canvas')
  let context = canvas.getContext('2d')

  let radian = Math.PI / 180

  // rectangle
  context.beginPath()
  context.strokeStyle = 'green'
  context.fillStyle = 'green'
  context.shadowColor = 'black'
  context.shadowOffsetX = 10
  context.shadowOffsetY = 10
  context.shadowBlur = 5
  context.fillRect(150, 100, 150, 400)
  context.fill()

  //circle
  context.beginPath()
  context.fillStyle = 'red'
  context.shadowColor = 'black'
  context.shadowOffsetX = -10
  context.shadowOffsetY = -10
  context.shadowBlur = 5
  context.lineWidth = 10
  context.arc(650, 300, 100, 0 * radian, 360 * radian, false)
  context.stroke()
  context.fill()
})
