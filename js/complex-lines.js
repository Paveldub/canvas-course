// definition
window.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('hello-world-canvas')
  let context = canvas.getContext('2d')

  // draw complex lines

  context.beginPath() //reset the context state
  context.strokeStyle = 'red'
  context.lineWidth = 5 // thickness of the line
  context.moveTo(30, 30) // moveTo(x, y), starting point of the line
  context.lineTo(80, 80) //lineTo(x, y), ending point of the line
  context.lineTo(130, 40) //lineTo(x, y), ending point of the line
  context.lineTo(180, 90) //lineTo(x, y), ending point of the line
  context.lineTo(250, 40) //lineTo(x, y), ending point of the line
  context.stroke() // draws the line
})
