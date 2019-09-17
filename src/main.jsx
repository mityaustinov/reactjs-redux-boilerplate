import React from 'react'
import { render } from 'react-dom'
import thunk from 'redux-thunk'
import { applyMiddleware, compose, combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import productsReducer from './reducers/productsReducer'
import userReducer from './reducers/userReducer'

import App from './app/App'
import './assets/styles/main.scss'

const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer,
})

const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

const store = createStore(
    allReducers,
    {
        products: [{ name: 'iPhone' }],
        user: 'Heisenberg',
    },
    allStoreEnhancers,
)

render(
    <Provider store={store}>
        <App aRandomProps="whatever" />
    </Provider>,
    document.getElementById('app'),
)
