// definition
document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('hello-world-canvas')
  let context = canvas.getContext('2d')

  //colors
  const lightCellColor = '#ddb180'
  const darkCellColor = '#7c330c'

  // frame
  context.strokeStyle = 'black'
  context.strokeRect(250, 100, 400, 400)

  // first row
  for (let i = 1; i <= 8; i++) {
    if (i % 2 == 0) {
      context.fillStyle = darkCellColor
    } else {
      context.fillStyle = lightCellColor
    }
    context.strokeRect(200 + i * 50, 100, 50, 50)
    context.fillRect(200 + i * 50, 100, 50, 50)
  }

  // second row
  for (let i = 1; i <= 8; i++) {
    if (i % 2 == 0) {
      context.fillStyle = lightCellColor
    } else {
      context.fillStyle = darkCellColor
    }
    context.strokeRect(200 + i * 50, 150, 50, 50)
    context.fillRect(200 + i * 50, 150, 50, 50)
  }

  // third row
  for (let i = 1; i <= 8; i++) {
    if (i % 2 == 0) {
      context.fillStyle = darkCellColor
    } else {
      context.fillStyle = lightCellColor
    }
    context.strokeRect(200 + i * 50, 200, 50, 50)
    context.fillRect(200 + i * 50, 200, 50, 50)
  }

  // fourth row
  for (let i = 1; i <= 8; i++) {
    if (i % 2 == 0) {
      context.fillStyle = lightCellColor
    } else {
      context.fillStyle = darkCellColor
    }
    context.strokeRect(200 + i * 50, 250, 50, 50)
    context.fillRect(200 + i * 50, 250, 50, 50)
  }

  // fifth row
  for (let i = 1; i <= 8; i++) {
    if (i % 2 == 0) {
      context.fillStyle = darkCellColor
    } else {
      context.fillStyle = lightCellColor
    }
    context.strokeRect(200 + i * 50, 300, 50, 50)
    context.fillRect(200 + i * 50, 300, 50, 50)
  }

  // sixth row
  for (let i = 1; i <= 8; i++) {
    if (i % 2 == 0) {
      context.fillStyle = lightCellColor
    } else {
      context.fillStyle = darkCellColor
    }
    context.strokeRect(200 + i * 50, 350, 50, 50)
    context.fillRect(200 + i * 50, 350, 50, 50)
  }

  // sevent row
  for (let i = 1; i <= 8; i++) {
    if (i % 2 == 0) {
      context.fillStyle = darkCellColor
    } else {
      context.fillStyle = lightCellColor
    }
    context.strokeRect(200 + i * 50, 400, 50, 50)
    context.fillRect(200 + i * 50, 400, 50, 50)
  }

  // sixth row
  for (let i = 1; i <= 8; i++) {
    if (i % 2 == 0) {
      context.fillStyle = lightCellColor
    } else {
      context.fillStyle = darkCellColor
    }
    context.strokeRect(200 + i * 50, 450, 50, 50)
    context.fillRect(200 + i * 50, 450, 50, 50)
  }
})
