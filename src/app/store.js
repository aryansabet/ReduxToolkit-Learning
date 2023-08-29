//store.js
import {configureStore } from '@reduxjs/toolkit'

import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer  from '../features/icecream/icecreamSlice'
import userReducer from '../features/user/userSlice'

import reduxLogger , { createLogger} from 'redux-logger'
const logger = createLogger()

const store = configureStore({
	reducer: {
		cake: cakeReducer, // like combine reducers in Redux
		icecream : icecreamReducer,
		user: userReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

})

export default store