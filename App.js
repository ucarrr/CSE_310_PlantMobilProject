import React from 'react'
import Route from './src/navigation/Route'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './src/Redux/Reducers/Reducer.js'


const App = () => {
    return (
        <Provider store={createStore(reducer)}>
            <Route />
        </Provider>
    )
}

export default App
