import sendRequest from './send-request'

const BASE_URL = '/api/foodTruck'


// All the food trucks
export function getAll() {
    return sendRequest(BASE_URL)
}

//Individual Food trucks
export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}

//Update food truck
export function getByIdAndUpdate(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'PUT', payload)
}

//Delete food truck
export function getByIdAndDelete(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}