import axios from "axios";

const API_URL = "http://localhost:5000/api/todos";

export const getTodos = async () => await axios.get(API_URL);
export const addTodo = async (text) => await axios.post(API_URL, { text });
export const updateTodo = async (id, updatedData) => await axios.put(`${API_URL}/${id}`, updatedData);
export const deleteTodo = async (id) => await axios.delete(`${API_URL}/${id}`);
