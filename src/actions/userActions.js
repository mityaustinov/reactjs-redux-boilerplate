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
            user: 'API request Error!!!',
        },
    }
}

export function apiRequest() {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                if (response.ok) {
                    console.log('Success!')
                    return response.json()
                }
                console.log('Fetch failed')
            })
            // .then(json => console.log(json[0].name))
            .then((json) => {
                const newUser = json[1].name
                dispatch(updateUser(newUser))
            })
            .catch(
                dispatch(showError()),
            )
    }
}
