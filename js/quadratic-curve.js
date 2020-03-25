// definition
window.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('hello-world-canvas')
  let context = canvas.getContext('2d')

  context.beginPath()
  context.strokeStyle = 'red'
  context.lineWidth = 5
  context.moveTo(50, 50)
  context.quadraticCurveTo(200, 0, 0, 100)
  context.stroke()
})

// function gets 4 params quadraticCurveTo
// context.quadraticCurveTo(controlX, controlY, endX, endY)
