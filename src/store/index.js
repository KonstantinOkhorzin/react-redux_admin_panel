import { configureStore } from '@reduxjs/toolkit';
import filters from '../reducers/filters';
import heroes from '../reducers/heroes';

//кастомный middleware
const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
}

const store = configureStore({
    reducer: {heroes: heroes, filters},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;

