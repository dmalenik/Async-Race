const setViewToggler = () => {
    const toggler = document.createElement('button')

    toggler.setAttribute('id', 'toggler')
    toggler.setAttribute('type', 'button')

    toggler.innerText = 'Switch'

    toggler.addEventListener('click', (event) => {
        if (document.querySelector('#garage').classList.contains('f-col')) {
            document
                .querySelector('#garage')
                .classList.replace('f-col', 'd-hidden')
            document
                .querySelector('#winners')
                .classList.replace('d-hidden', 'f-col')
        } else {
            document
                .querySelector('#winners')
                .classList.replace('f-col', 'd-hidden')
            document
                .querySelector('#garage')
                .classList.replace('d-hidden', 'f-col')
        }
    })

    return toggler
}

export { setViewToggler }
