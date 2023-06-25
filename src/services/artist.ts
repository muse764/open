import api from "../api";

export default {
  async getAllArtists() {
    const res = await api.get("/artists?limit=5&offset=0");

    return res.data.artists;
  },
};
