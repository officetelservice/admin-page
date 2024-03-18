import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
`;

export const Title = styled.h3``;

export const RoomContainer = styled.div`
	border: 2px solid #ffa500;
	border-radius: 4px;
	margin: 5px;
	padding: 2px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 40px;
`;

export const OfficetelContainer = styled.div`
	width: 100%;
	height: 100%;
	border: 2px solid #ffa500;
	border-radius: 12px;
	padding: 15px 5px;

	overflow-y: scroll;
`;

export const OfficetelColContainer = styled.div``;

export const OfficetelRowContainer = styled.div`
	display: flex;
	overflow-x: scroll;
	margin: 5px 0;

	&::-webkit-scrollbar {
		display: none; /* Chrome, Safari, Opera */
	}
`;
