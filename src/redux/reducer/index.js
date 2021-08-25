import { combineReducers } from 'redux'
import userReducer from '../reducer/userreducer'

export default   combineReducers({
  users: userReducer
})
