import axios from "axios";

const instance = axios.create({
  baseUrl: "http://localhost:5001/aliexpress-clone-73a90/us-central1/api", // the api url
});

export default instance;
