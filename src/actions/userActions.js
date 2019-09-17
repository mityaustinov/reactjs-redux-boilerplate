import $ from 'jquery'

export const API_REQUEST_SUCCESS = 'users:updateUser'
export const API_REQUEST_ERROR = 'users:showError'

export function updateUser(newUser) {
    return {
        type: API_REQUEST_SUCCESS,
        payload: {
            user: newUser,
        },
    }
}

export function showError() {
    return {
        type: API_REQUEST_ERROR,
        payload: {
            user: 'API request Error!',
        }
    }
}

export function apiRequest() {
    return (dispatch) => {

        $.ajax({
            url: 'http://google.com',
            success() {
                console.log('Success!')
            },
            error() {
                dispatch(showError())
            },
        })
    }
}
