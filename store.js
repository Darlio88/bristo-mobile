import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/CartSlice'

import {persistReducer, persistStore} from 'redux-persist'
import ExpoFileSystemStorage from "redux-persist-expo-filesystem"
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1'
import thunk  from'redux-thunk'

const persistConfig = {
    key: 'root',
    storage: ExpoFileSystemStorage,
    startReconciler:autoMergeLevel1,
}

const persistedReducer = persistReducer(persistConfig,cartReducer)


export const store = configureStore({
    reducer:{
        cart: persistedReducer
    },
    middleware:[thunk]
})

export const persistor = persistStore(store)

