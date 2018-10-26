import { createStore } from 'redux'

//reducer
import reducer from './reducers.jsx'
//store
let store = createStore(reducer)
export default store