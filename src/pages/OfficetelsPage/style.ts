import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	overflow-y: scroll;
`;

export const Title = styled.h2``;

export const OfficetelContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;

	margin: 20px 0;
`;

export const AlertContainer = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const AlertText = styled.h2``;
