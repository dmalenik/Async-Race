import getFetch from '../logic/getFetch.js'

const setGarageTable = () => {
    const table = document.createElement('table')

    table.classList.add('items-amount')

    const head = document.createElement('thead')
    const head_row = document.createElement('tr')
    const name = document.createElement('th')

    name.innerText = 'name'

    const color = document.createElement('th')

    color.innerText = 'color'

    head_row.appendChild(name)
    head_row.appendChild(color)

    head.appendChild(head_row)

    table.appendChild(head)

    const body = document.createElement('tbody')

    getFetch('http://127.0.0.1:3000/garage').then((data) => {
        data.map((obj) => {
            let tr = document.createElement('tr')
            let name = document.createElement('td')

            name.innerText = obj.name

            let color = document.createElement('td')

            color.innerText = obj.color

            tr.appendChild(name)
            tr.appendChild(color)

            body.appendChild(tr)
        })
    })

    table.appendChild(body)

    return table
}

export { setGarageTable }
