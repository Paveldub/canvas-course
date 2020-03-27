document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('hello-world-canvas')
  let context = canvas.getContext('2d')

  let radian = Math.PI / 180

  context.stokeStyle = 'black'

  context.beginPath()
  context.strokeStyle = 'orange'
  context.fillStyle = 'orange'
  context.lineWidth = 15
  context.arc(450, 300, 150, 135 * radian, 360 * radian, false)
  context.fill()
  context.stroke()
})
