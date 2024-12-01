import axios from "axios"

const BASE_URL = "https://674ca20554e1fca9290d2451.mockapi.io/properties/properties"

export const fetchProperties = () => axios.get(BASE_URL);
export const fetchPropertyById = (id) => axios.get(`${BASE_URL}/${id}`);
export const createProperty = (data) => axios.post(BASE_URL, data);
export const updateProperty = (id, data) => axios.put(`${BASE_URL}/${id}`, data);
export const deleteProperty = (id) => axios.delete(`${BASE_URL}/${id}`); 