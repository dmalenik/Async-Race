import { setGarageTable } from './index.js'
import { setCar } from './index.js'
/*
    ** update a car --> get car, set new values, send data to the server (place near each car row)
    ** delete a car --> get specific data from the server, remove it (place near each car row, but after the update car feature)
    
    ** after each operation
    ** get arr objs
    ** assign it to a global arr
    ** assign to tbody the latest state of a global variable 
*/

const setGarage = () => {
    const garage = document.createElement('section')

    garage.setAttribute('id', 'garage')

    garage.classList.add('garage', 'f-col')

    const name = document.createElement('h2')

    name.classList.add('name')

    name.innerText = 'Garage'

    const carsTable = setGarageTable()
    const createCar = setCar()
    const pages = document.createElement('p')

    pages.classList.add('pages')

    pages.innerText = '122'

    garage.appendChild(name)
    garage.appendChild(carsTable)
    garage.appendChild(createCar)
    garage.appendChild(pages)

    return garage
}

export { setGarage }
