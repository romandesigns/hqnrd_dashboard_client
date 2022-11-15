import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reservations from "./slices/reservation";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["reservation"],
	blaclist: ["ui"],
};

const reducer = combineReducers({
	reservations,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
