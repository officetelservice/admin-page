import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
	position: absolute;

	width: 100%;
	height: 100%;

	background-color: rgba(0, 0, 0, 0.7);

	display: flex;
	align-items: center;
	justify-content: center;

	opacity: 1;
	transition: opacity 0.3s ease-in-out;
	z-index: 999;
`;

export const Image = styled.img`
	width: 60px;
	height: 60px;
	animation: ${rotateAnimation} 3s linear infinite;
`;
