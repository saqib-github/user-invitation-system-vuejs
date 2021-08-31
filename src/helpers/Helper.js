import axios from "axios";
export default {
  async post(url, data) {
    return await axios
      .post(url, data)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return ({status: err.response.status}); 
      });
  },
  async getById(url) {
    return await axios
      .get(url)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
  get: async (url, headers) => {
    return await axios
      .get(url, headers)
      .then((res) => {
        console.log('res123', res);
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
   deleteById: async (url, headers) => {
    return await axios
      .delete(url, headers)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
  async updateById(url, data) {
    return await axios
      .put(url, data)
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return err.json();
      });
  },
   isNotLogedin : () => {
    if (this.$localStorage.get("token") == 1) {
      return true;
    } else {
      return false;
    }
  }
};
