import axios from "axios";

// const BASE_URL = process.env.BASE_URL;

export const addUser = async (userData) => {
  try {
    const response = await axios.post(`/api/users`, userData);
    return response.data;
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};
