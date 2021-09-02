import axios from "axios";
export default {
  async post(url, data) {
    return await axios
      .post(url, data)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return { status: err.response.status };
      });
  },
  async getById(url, headers) {
    return await axios.get(url, headers);
  },
  get: async (url, headers) => {
    return await axios.get(url, headers);
  },
  deleteById: async (url, headers) => {
    return await axios.delete(url, headers);
  },
  updateById: async (url, headers, data) => {
    return await axios.put(url, headers, data);
  },
};
