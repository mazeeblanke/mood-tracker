import rootReducer from 'store/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// INITAL STATE OF STORE
const INITIAL_STATE = {};

export default function initStore(initialState = INITIAL_STATE) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware()),
  );
}
