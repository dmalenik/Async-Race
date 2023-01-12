const setWinners = () => {
    const winners = document.createElement('section')

    winners.setAttribute('id', 'winners')

    winners.classList.add('winners', 'd-hidden')

    const name = document.createElement('h2')

    name.classList.add('name')

    name.innerText = 'Winners'

    const items = document.createElement('p')

    items.classList.add('items-amount')

    items.innerText = '5'

    const pages = document.createElement('p')

    pages.classList.add('pages')

    pages.innerText = '12'

    winners.appendChild(name)
    winners.appendChild(items)
    winners.appendChild(pages)

    return winners
}

export default setWinners
