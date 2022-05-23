import sendRequest from './send-request'

const BASE_URL = '/reviews'

// Create Review
export function createReview(newReview) {
    return sendRequest(`${BASE_URL}/`, "POST", newReview)
}