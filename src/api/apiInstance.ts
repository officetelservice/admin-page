import { getAccessToken, getRefreshToken } from '@/utils/token';
import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
	baseURL: 'https://api.officetel-backend.shop/',
});

axiosInstance.interceptors.request.use(
	(config) => {
		const accessToken = getAccessToken();

		if (accessToken) {
			config.headers['Authorization'] = `Bearer ${accessToken}`;
		}

		return config;
	},
	(err) => {
		return Promise.reject(err);
	}
);

export default axiosInstance;
