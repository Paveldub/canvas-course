document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('hello-world-canvas')
  let context = canvas.getContext('2d')

  let radian = Math.PI / 180

  // body
  context.beginPath()
  context.strokeStyle = 'orange'
  context.lineWidth = 10
  context.fillStyle = 'orange'
  context.moveTo(250, 250)
  context.lineTo(330, 310)
  context.arc(250, 250, 100, 37 * radian, 323 * radian, false)
  context.lineTo(250, 250)
  context.stroke()
  context.fill()

  // eye
  context.beginPath()
  context.fillStyle = 'black'
  context.lineWidth = 10
  context.arc(250, 200, 10, 0 * radian, 360 * radian, false)
  context.stroke()
  context.fill()
})
