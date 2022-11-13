import axios from "axios";

const API = {
	createOne: async (endpoint: string, payload: any = {}) => {
		const { data } = await axios.post(`/api/${endpoint}`, payload);
		return data;
	},
	getAll: async (endpoint: string) => {
		const { data } = await axios.get(`/api/${endpoint}`);
		return data;
	},
	getOne: async (endpoint: string, id: string) => {
		const { data } = await axios.get(`/api/${endpoint}/${id}`);
		return data;
	},
	updateOne: async (endpoint: string, id: string, payload: any = {}) => {
		const { data } = await axios.patch(`/api/${endpoint}/${id}`, payload);
		return data;
	},
	eliminateOne: async (endpoint: string, id: string) => {
		const { data } = await axios.delete(`/api/${endpoint}/${id}`);
		return data;
	},
};

export default API;
