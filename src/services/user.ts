import api from "../api";

export default {
  async getAllUsers() {
    const res = await api.get("/users?limit=5&offset=0");

    return res.data.users;
  },
};
