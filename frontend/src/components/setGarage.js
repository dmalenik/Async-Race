const setGarage = () => {
    const garage = document.createElement('section')

    garage.setAttribute('id', 'garage')

    garage.classList.add('garage', 'f-col')

    const name = document.createElement('h2')

    name.classList.add('name')

    name.innerText = 'Garage'

    const items = document.createElement('p')

    items.classList.add('items-amount')

    items.innerText = '133'

    const pages = document.createElement('p')

    pages.classList.add('pages')

    pages.innerText = '122'

    garage.appendChild(name)
    garage.appendChild(items)
    garage.appendChild(pages)

    return garage
}

export { setGarage }
