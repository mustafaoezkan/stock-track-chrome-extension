import axios from "axios";

const BASE_URL = "https://api.collectapi.com/";

export default axios.create({
  baseURL: BASE_URL
});
