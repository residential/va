import './index.css'

import 'p5'
import Source from './source'
import Waveform from './waveform'

const source = new Source()
const waveform = new Waveform('waveform-1')

waveform.appendTo(document.body)
waveform.listenTo(source)
