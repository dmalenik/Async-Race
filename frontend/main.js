import setGarage from './setGarage.js'
import setWinners from './setWinners.js'
import setViewToggler from './setViewToggler.js'

import normalize from './assets/styles/normalize.css' assert { type: 'css' }
import global from './assets/styles/global.css' assert { type: 'css' }
import container from './assets/styles/container.css' assert { type: 'css' }
import utilities from './assets/styles/utilities.css' assert { type: 'css' }

// | SECTIONS

document.querySelector('.container').appendChild(setGarage())
document.querySelector('.container').appendChild(setWinners())
document.querySelector('.container').appendChild(setViewToggler())

// | STYLES

document.adoptedStyleSheets = [normalize, global, container, utilities]
