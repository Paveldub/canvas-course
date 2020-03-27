document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('hello-world-canvas')
  let context = canvas.getContext('2d')

  let text = 'This text will be styled'

  context.font = 'normal bolder xx-large monospace' // font-style, font-weight, font-size, font-family
  context.fillText(text, 100, 150, 600)

  context.font = 'italic 700 45px fantasy' // font-style, font-weight, font-size, font-family
  context.strokeText(text, 100, 250, 600)
})
