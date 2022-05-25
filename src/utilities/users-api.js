import sendRequest from './send-request'
const BASE_URL = '/users'


export async function signUp(userData) {
    const res = await fetch('/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    })

    if (res.ok) {
        return res.json()
    } else {
        throw new Error('Invalid Sign Up')
    }
}

export function login(credentials) {
    return sendRequest('/users/signin', 'POST', credentials)
}

export function getUserFavorites(id) {
    return sendRequest(`${BASE_URL}/${id}/favorites`)
}

export function toggleFavorite(userId, favoriteToAdd) {
    return sendRequest(`${BASE_URL}/${userId}/favorite`, 'PUT', favoriteToAdd)
}

export function newRecent(userId, recentToAdd) {
    return sendRequest(`${BASE_URL}/${userId}/recent`, 'PUT', recentToAdd)
}