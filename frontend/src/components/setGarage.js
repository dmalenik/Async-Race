import getFetch from '../logic/getFetch.js'

const setGarage = () => {
    const garage = document.createElement('section')

    garage.setAttribute('id', 'garage')

    garage.classList.add('garage', 'f-col')

    const name = document.createElement('h2')

    name.classList.add('name')

    name.innerText = 'Garage'

    const items = document.createElement('p')

    items.classList.add('items-amount')

    getFetch('http://127.0.0.1:3000/garage').then((data) => {
        let str = JSON.stringify(data)

        items.innerText = str
    })

    const pages = document.createElement('p')

    pages.classList.add('pages')

    pages.innerText = '122'

    garage.appendChild(name)
    garage.appendChild(items)
    garage.appendChild(pages)

    return garage
}

export { setGarage }
