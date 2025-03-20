// services.js
import axios from 'axios';

const BASE_URL = 'https://668a-2c0f-4280-21-8ff4-78e7-e2d2-e1ae-1941.ngrok-free.app/SMU/auth';

 const authService = {
  signup: async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}/signup`, userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  login: async (credentials) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, credentials);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  
};

export default authService;
