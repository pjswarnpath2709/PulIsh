import axios from "axios";
const pulishServerBaseUrl = import.meta.env.VITE_PULISH_SERVER_URL;
const pulishServer = axios.create({
  baseURL: pulishServerBaseUrl,
});
export default pulishServer;
