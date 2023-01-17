const getFetch = (url, config = {}) => {
    return fetch(url, config).then((resp) => {
        return resp.json()
    })
}

export default getFetch
