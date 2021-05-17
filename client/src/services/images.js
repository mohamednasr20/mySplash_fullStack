import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/images';

const imagesServices = {
  getAll: () => {
    return axios.get(baseUrl);
  },

  deleteImage: (id) => {
    return axios.delete(`${baseUrl}/${id}`);
  },

  createImage: (newObj) => {
    return axios.post(baseUrl, newObj);
  },
};

export default imagesServices;
