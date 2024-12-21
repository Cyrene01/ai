import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000/api/users" });

export const createUser = (user) => API.post("/", user);
export const fetchUsers = () => API.get("/");
