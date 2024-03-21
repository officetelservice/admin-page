const getAccessToken = (): string | null => {
	const accessToken = localStorage.getItem('accessToken');

	return accessToken;
};

const getRefreshToken = (): string | null => {
	const refreshToken = localStorage.getItem('refreshToken');

	return refreshToken;
};

const deleteToken = (): void => {
	localStorage.clear();
};

export { getAccessToken, getRefreshToken, deleteToken };
