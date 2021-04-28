import { configureStore} from '@reduxjs/toolkit';

import rootReducers from './modules/rootReducers'

const store = configureStore({reducer: rootReducers});

export default store;