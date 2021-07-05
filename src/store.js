import { createStore, combineReducers } from 'redux'
import {reducer} from './store/reducers'
import { registrationLoginReducer, registrationPasswordReducer, registrationRepeatPasswordReducer } from './store/registration/reducers'
import { authLoginReducer, authPasswordReducer } from './store/auth/reducers'

import inputReducer from './store/input/inputReducer'
import mainReducer from './store/main/mainReducer'

const store = createStore(combineReducers({
  reducer: reducer,

  registrationLogin: registrationLoginReducer,
  registrationPassword: registrationPasswordReducer,
  registrationRepeatPassword: registrationRepeatPasswordReducer,

  authLogin: authLoginReducer,
  authPassword: authPasswordReducer,

  input:inputReducer,
  main:mainReducer
}))
export default store