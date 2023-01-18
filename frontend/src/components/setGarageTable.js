import getFetch from '../logic/getFetch.js'

const setGarageTable = () => {
    const table = document.createElement('table')

    table.classList.add('items-amount')

    const thead = document.createElement('thead')
    const thead_row = document.createElement('tr')
    const name = document.createElement('th')

    name.innerText = 'name'

    const color = document.createElement('th')

    color.innerText = 'color'

    thead_row.appendChild(name)
    thead_row.appendChild(color)

    thead.appendChild(thead_row)

    table.appendChild(thead)

    const tbody = document.createElement('tbody')

    getFetch('http://127.0.0.1:3000/garage').then((data) => {
        data.map((obj) => {
            let tr = document.createElement('tr')
            let name = document.createElement('td')

            name.innerText = obj.name

            let color = document.createElement('td')

            color.innerText = obj.color

            tr.appendChild(name)
            tr.appendChild(color)

            tbody.appendChild(tr)
        })
    })

    table.appendChild(tbody)

    return table
}

export default setGarageTable
