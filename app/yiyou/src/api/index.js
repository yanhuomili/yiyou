import axios from './axios.js';
export function getData(data){
	return axios({
		url:'/getData',
		method:'post',
		...data
	})
}
