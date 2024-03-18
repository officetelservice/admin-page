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

export const Form = styled.form`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	overflow-y: scroll;
`;

export const InputContainer = styled.div`
	width: 100%;
	max-width: 500px;
	padding: 20px 0;
`;

export const InputText = styled.div`
	font-weight: 500;
	margin-bottom: 5px;
`;

export const InputBox = styled.input`
	box-sizing: border-box;
	width: 100%;
	height: 40px;

	padding: 0 5px;

	border: 2px solid #ffa500;
	border-radius: 12px;
	background-color: white;
	color: black;
`;

export const TimeIntervalContainer = styled.div`
	width: 100%;
	display: flex;
`;

export const TimeIntervalSelect = styled.select`
	cursor: pointer;

	background-color: white;
	color: black;

	flex: 1;

	width: 100%;
	height: 40px;
	max-width: 500px;
	border-radius: 12px;
	border: 2px solid #ffa500;
`;

export const OptionText = styled.option`
	text-align: center;
`;

export const SelectOptionText = styled.option`
	text-align: center;
`;

export const DatePickerContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const FlowText = styled.h3`
	margin: 0 20px;
`;
