import Cookies from 'js-cookie'
const KEY = process.env.VUE_APP_TOKEN
export function getToken() {
    return Cookies.get(KEY)
}

export function setToken(token) {
    localStorage.setItem('token',token)
    if (window.location.protocol === 'https:') {
        return Cookies.set(KEY, token, { sameSite: 'none', secure: true })
    }
    return Cookies.set(KEY, token)
}

export function removeToken() {
    localStorage.removeItem('token')
    return Cookies.remove(KEY)
}
