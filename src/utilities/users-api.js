import sendRequest from './send-request'


export async function signUp(userData){
    const res = await fetch('/api/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
    })

    if(res.ok) {
        return res.json()
    } else {
        throw new Error('Invalid Sign Up')
    }
}

export function login(credentials) {
    return sendRequest('/api/users/login', 'POST'. credentials)
}