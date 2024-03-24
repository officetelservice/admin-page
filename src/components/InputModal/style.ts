import styled from 'styled-components';

export const ModalOverlay = styled.div`
	position: absolute;
	background-color: rgba(0, 0, 0, 0.5);
	width: 100vw;
	height: 100vh;
	z-index: 999;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ModalContent = styled.div`
	background-color: white;
	display: flex;
	border: 2px solid #ffa500;
	border-radius: 16px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px 40px;
	position: relative;
`;

export const CloseButton = styled.div`
	position: absolute;
	top: 1px;
	right: 10px;
	font-size: x-large;
	font-weight: bold;

	cursor: pointer;
`;

export const ModalText = styled.div`
	font-weight: 600;
`;

export const InputWrapper = styled.div`
	background-color: #e2e2e2;
	width: 100%;
	display: flex;
	padding: 10px 5px;
	margin-top: 20px;
	align-items: center;
	border-radius: 4px;
`;

export const InputField = styled.input`
	width: 100%;
	background-color: transparent;
	color: black;
	border: none;
	outline: none;
`;

export const ConfirmButton = styled.div`
	width: 100%;
	background-color: #ffa500;
	padding: 10px 5px;
	border-radius: 8px;
	text-align: center;
	margin-top: 20px;
	cursor: pointer;
	color: white;
	font-weight: bold;
`;
