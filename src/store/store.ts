import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reservations from "./slices/reservation";
import mathOperation from "./slices/mathOperation";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
	key: "root",
	storage,
};

const state = combineReducers({
	reservations,
	mathOperation,
});

const persistedReducer = persistReducer(persistConfig, state);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk],
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
