import sendRequest from './send-request'

const BASE_URL = '/foodtrucks'


// All the food trucks
export function getAll() {
    return sendRequest(BASE_URL)
}

// //Individual Food trucks
// export function getById(id) {
//     return sendRequest(`${BASE_URL}/${id}`)
// }

//Update food truck
export function getByIdAndUpdate(id, payload) {
    return sendRequest(`${BASE_URL}/${id}`, 'PUT', payload)
}

//Search result
export function getResultTruck(){
    return sendRequest(`${BASE_URL}/search`)
}

// //Delete food truck
// export function getByIdAndDelete(id) {
//     return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
// }