import { createStore,combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
//all the reducers to combine them into one
import blogReducer from './reducers/blogreducer'
import errorReducer from './reducers/errorReducer'
import loginFormReducer from './reducers/loginFormReducer'
import usersReducer from './reducers/usersReducer';
// import notificationReducer from './reducers/notificationReducer'
// import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
   blogs:blogReducer,
   error:errorReducer,
   loginForm:loginFormReducer,
   users:usersReducer
  })

//creating a store aka shop
//thunk lets us call async dispatch from the action creator itself
const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  )

export default store;