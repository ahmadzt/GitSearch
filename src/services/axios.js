import Axios from "axios";

const http = Axios.create({
	baseURL: 'https://api.github.com/',
});

export default http;