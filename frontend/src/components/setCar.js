const setCar = () => {
    const form = document.createElement('form')

    form.setAttribute('id', 'car-new')

    const nameInput = document.createElement('input')

    nameInput.setAttribute('id', 'car-name')
    nameInput.setAttribute('type', 'text')
    nameInput.setAttribute('form', 'car-new')
    nameInput.setAttribute('name', 'name')
    nameInput.setAttribute('value', '')
    nameInput.setAttribute('required', 'true')

    nameInput.addEventListener('change', (event) => {
        document
            .querySelector('#car-name')
            .setAttribute('value', event.target.value)
    })

    const nameLabel = document.createElement('label')

    nameLabel.setAttribute('for', 'car-name')

    const colorInput = document.createElement('input')

    colorInput.setAttribute('id', 'car-color')
    colorInput.setAttribute('type', 'text')
    colorInput.setAttribute('form', 'car-new')
    colorInput.setAttribute('name', 'color')
    colorInput.setAttribute('value', '')
    colorInput.setAttribute('required', 'true')

    colorInput.addEventListener('change', (event) => {
        document
            .querySelector('#car-color')
            .setAttribute('value', event.target.value)
    })

    const colorLabel = document.createElement('label')

    colorLabel.setAttribute('for', 'car-color')

    const btn = document.createElement('button')

    btn.setAttribute('form', 'car-new')
    btn.setAttribute('type', 'button')

    btn.innerText = 'Create a car'

    btn.addEventListener('click', (event) => {
        const form = document.querySelector('#car-new')
        const formData = new FormData(form)
        const postObj = {}

        for (let pair of formData.entries()) {
            postObj[pair[0]] = pair[1]
        }

        fetch('http://127.0.0.1:3000/garage', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postObj),
        })
    })

    form.appendChild(nameLabel)
    form.appendChild(nameInput)
    form.appendChild(colorLabel)
    form.appendChild(colorInput)
    form.appendChild(btn)

    return form
}

export { setCar }
