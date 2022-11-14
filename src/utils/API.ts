import axios from "axios";
const API = {
	// Creates one document
	createOne: async (endpoint: string, payload: any = {}) => {
		const { data } = await axios.post(`${process.env.REACT_APP_BACK_END_SERVER}/${endpoint}`, payload);
		return data;
	},
	// Get all mathcing documents
	getAll: async (endpoint: string) => {
		const { data } = await axios.get(`${process.env.REACT_APP_BACK_END_SERVER}/${endpoint}`);
		return data;
	},
	// Get mathcing document
	getOne: async (endpoint: string, id: string) => {
		const { data } = await axios.get(`${process.env.REACT_APP_BACK_END_SERVER}/${endpoint}/${id}`);
		return data;
	},
	// Updates mathcing document
	updateOne: async (endpoint: string, id: string, payload: any = {}) => {
		const { data } = await axios.patch(`${process.env.REACT_APP_BACK_END_SERVER}/${endpoint}/${id}`, payload);
		return data;
	},
	// Eliminates mathcing document
	eliminateOne: async (endpoint: string, id: string) => {
		const { data } = await axios.delete(`${process.env.REACT_APP_BACK_END_SERVER}/${endpoint}/${id}`);
		return data;
	},
};

export default API;
