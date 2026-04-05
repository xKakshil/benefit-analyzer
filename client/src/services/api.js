import axios from 'axios';

const API = axios.create({
  baseURL: 'https://benefit-analyzer.onrender.com'
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
