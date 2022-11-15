import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
	value: 0,
};

const mathOperation = createSlice({
	name: "reservation",
	initialState,
	reducers: {
		addNumbers: (state) => {
			state.value = ++state.value;
		},
		substractNumbers: (state) => {
			state.value = --state.value;
		},
	},
});

export const { addNumbers, substractNumbers } = mathOperation.actions;
export default mathOperation.reducer;
