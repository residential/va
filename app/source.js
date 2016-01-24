export default class Source {

  constructor(fftSize = 4096) {
    const context = this.context = new AudioContext()
    const analyser = this.analyser = context.createAnalyser()

    analyser.fftSize = fftSize

    this.state = { data: new Uint8Array(fftSize) }
    this._canceled = false
  }

  get data() {
    return this.state.data
  }

  loop(callback) {
    if (this._canceled) {
      this.canceled = false

      return
    }

    const { analyser, data } = this

    analyser.getByteTimeDomainData(data)
    callback(data)
    requestAnimationFrame(() => this.loop(callback))
  }

  listen(callback) {
    const media = this.media = navigator.webkitGetUserMedia(
      { audio: true },
      media => {
        const { context, analyser, data } = this
        const stream = this.stream = context.createMediaStreamSource(media)

        stream.connect(analyser)

        callback(data)

        this.loop(callback)
      },
      error => { throw error }
    )
  }

  unlisten() {
    this._canceled = true
  }

}
