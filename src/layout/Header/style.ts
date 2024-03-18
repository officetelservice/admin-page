import styled from 'styled-components';

export const Container = styled.div`
	background-color: black;
	width: 100%;
	max-width: 500px;
	height: 50px;
	margin: 0 auto;

	display: flex;
	justify-content: center;
`;

export const Menu = styled.div`
	cursor: pointer;
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;

	background-color: black;
`;

export const MenuText = styled.div`
	color: white;
	background-color: black;
`;

export const MiddleLine = styled.div`
	width: 1px;
`;
