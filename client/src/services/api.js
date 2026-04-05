import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000/api'
});

export const uploadClosingDisclosure = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await API.post('/extract/benefits', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });

  return response.data;
};