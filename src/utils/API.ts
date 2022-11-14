import axios from "axios";
const API = {
	createOne: async (endpoint: string, payload: any = {}) => {
		const { data } = await axios.post(`${process.env.REACT_APP_BACK_END_SERVER}/${endpoint}`, payload);
		return data;
	},
	getAll: async (endpoint: string) => {
		const { data } = await axios.get(`${process.env.REACT_APP_BACK_END_SERVER}/${endpoint}`);
		return data;
	},
	getOne: async (endpoint: string, id: string) => {
		const { data } = await axios.get(`${process.env.REACT_APP_BACK_END_SERVER}/${endpoint}/${id}`);
		return data;
	},
	updateOne: async (endpoint: string, id: string, payload: any = {}) => {
		const { data } = await axios.patch(`${process.env.REACT_APP_BACK_END_SERVER}/${endpoint}/${id}`, payload);
		return data;
	},
	eliminateOne: async (endpoint: string, id: string) => {
		const { data } = await axios.delete(`${process.env.REACT_APP_BACK_END_SERVER}/${endpoint}/${id}`);
		return data;
	},
};

export default API;
