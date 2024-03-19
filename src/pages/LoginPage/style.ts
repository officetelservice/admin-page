import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding: 0 20px;
`;

export const Title = styled.h2``;

export const KakaoLoginButton = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;

	border-radius: 10px;
	width: 100%;
	height: 60px;
	max-width: 500px;
	margin: 5px auto;

	background-color: #ffe812;
	color: black;
	font-size: large;

	text-decoration: none;
	cursor: pointer;
`;
