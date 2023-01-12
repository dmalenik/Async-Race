import * as components from './components/index.js'

import normalize from '../assets/styles/normalize.css' assert { type: 'css' }
import global from '../assets/styles/global.css' assert { type: 'css' }
import container from '../assets/styles/container.css' assert { type: 'css' }
import utilities from '../assets/styles/utilities.css' assert { type: 'css' }

const { setGarage, setWinners, setViewToggler } = components

// | SECTIONS

document.querySelector('.container').appendChild(setGarage())
document.querySelector('.container').appendChild(setWinners())
document.querySelector('.container').appendChild(setViewToggler())

// | STYLES

document.adoptedStyleSheets = [normalize, global, container, utilities]
