// store.js
import { createStore } from 'redux';
import globalReducer from './globalReducer'; // Import your rootReducer (combineReducers if you have multiple reducers)

const store = createStore(globalReducer); // Create your Redux store

export default store; // Export the store for use in the application
