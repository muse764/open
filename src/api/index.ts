import axios from "axios";

export default axios.create({
  baseURL: "http://api.muse.com/v1",
});
