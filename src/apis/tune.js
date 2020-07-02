import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const tuneModel = ({ markedData }) => {
  return axios.post(`http://localhost:8081/tune`, markedData);
};
