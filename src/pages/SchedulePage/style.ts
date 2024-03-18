import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow-y: scroll;
	padding: 20px;
`;

export const ScheduleContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;

	margin: 20px 0;
`;

export const Schedule = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	max-width: 500px;
	height: 80px;

	margin-bottom: 10px;
	padding: 5px 10px;

	border: 2px solid #ffa500;
	border-radius: 12px;
`;

export const ReserveData = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ReserveTime = styled.div`
	font-weight: bold;
`;

export const OfficetelData = styled.div`
	display: flex;
`;

export const OfficetelName = styled.div`
	font-weight: bold;
	margin-right: 5px;
`;

export const OfficetelFloor = styled.div`
	font-weight: bold;
`;

export const CompleteButton = styled.div`
	cursor: pointer;
	padding: 5px 10px;
	border: 2px solid #ffa500;
	border-radius: 12px;
`;
