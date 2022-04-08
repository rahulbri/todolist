import { applyMiddleware, createStore } from "redux";

import thunk from "redux-thunk";



import rootReducer from "./root-reducer";

import { composeWithDevTools } from 'redux-devtools-extension';

// const  middleware =[thunk];
// if (process.env){
//     middleware.push(logger)
// }

// //thunk middleware is used to intercept actions so as to make API call before dispatching result to reducer
// const store = createStore(rootReducer, applyMiddleware(...middleware)  + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// // + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()





const middlewares = [thunk];
 
if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
 
  middlewares.push(logger);
}
 
// const store = createStore(rootReducer,applyMiddleware(...middlewares));
const store = createStore(rootReducer, /* preloadedState, */ composeWithDevTools(
    applyMiddleware(...middlewares)
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  ));

export default store;