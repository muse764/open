import api from "../api";

export default {
  async getAllAlbums() {
    const res = await api.get("/albums?limit=5&offset=0");

    return res.data.albums;
  },
};
