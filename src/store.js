import { createStore } from 'redux';

const initialState = {
    user : {
        username: '',
        isLoggedIn: false
    }
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: {
                    username: action.payload.username,
                    isLoggedIn: true
                }
            }
        case 'LOGOUT':
            return {
                ...state,
                user: {
                    username: '',
                    isLoggedIn: false
                }
            }
        default:
            return state
    }
}

const store = createStore(reducer)

export default store
