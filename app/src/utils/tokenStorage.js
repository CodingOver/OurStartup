const tokenStorage = {
    save({token} = {}) {
        token && localStorage.setItem('token', JSON.stringify(token))
    },
    get() {
        return JSON.parse(localStorage.getItem('token'))
    },
    remove() {
        localStorage.removeItem('token')
        window.location.reload()
    }
}

export default tokenStorage