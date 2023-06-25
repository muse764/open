import api from "../api";

export default {
  async getAllPlaylists() {
    const res = await api.get("/playlists?limit=5&offset=0");

    return res.data.playlists;
  },
};
