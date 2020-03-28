document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('hello-world-canvas')
  let context = canvas.getContext('2d')

  draw3DText(
    'This text will be in 3D',
    100,
    300,
    'normal 600 54px monospace',
    'violet',
    5
  )

  function draw3DText (text, x, y, style, color, size) {
    context.font = style
    context.fillStyle = 'black'

    for (let i = 0; i < size; i++) {
      context.fillText(text, x - i, y - i)
    }

    context.fillStyle = color
    context.fillText(text, x, y)
  }
})
