import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {};

const Reservations = createSlice({
	name: "reservation",
	initialState,
	reducers: {
		setReservationsState: (state, action: PayloadAction<any>) => {
			return { ...state, ...action.payload };
		},
	},
});

export const { setReservationsState } = Reservations.actions;
export default Reservations.reducer;
