import axios from './axios';

export default {
  getRepo(params) {
    return axios.get(`search/repositories`, {params}).then(response => response);
	}   
}


