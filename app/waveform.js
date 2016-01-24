export default class Waveform {

  constructor(
    id,
    height = 100,
    width = null
  ) {
    const canvas = this.canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    canvas.id = id
    canvas.height = height

    if (width === null) {
      this.onResize()
      window.addEventListener('resize', e => this.onResize(e), false)
    } else {
      canvas.width = width
    }
  }

  listenTo(source) {
    this.source = source

    source.listen(data => this.render(data))
  }

  unlisten() {
    this.source.unlisten()
    this.source = null
  }

  render(data) {
    const { canvas } = this
    const { height, width } = canvas
    const context = canvas.getContext('2d')
    const sliceWidth = width * 1.0 / data.length
    const mid = height / 2
    let x = 0
    let i = 0
    let len = data.length

    context.lineWidth = 1
    context.clearRect(0, 0, width, height)
    context.beginPath()

    for (; i++ < len;) {
      let y = mid - (data[i] - 128.0) * mid / 128.0

      context[`${i === 0 ? 'move' : 'line' }To`](x, y)

      x += sliceWidth
    }

    for (; i-- > 0;) {
      let y = mid + (data[i] - 128.0) * mid / 128.0

      context.lineTo(x, y)

      x -= sliceWidth
    }

    context.lineTo(0, mid)
    context.closePath()
    context.stroke()
    context.fill()
  }

  appendTo(target) {
    target.appendChild(this.canvas)
  }

  remove() {
    window.removeEventListener('resize', this.onResize, false)
    this.unlisten()
    this.canvas.parentNode.removeChild(this.canvas)
  }

  onResize() {
    this.canvas.width = window.innerWidth
  }

}
