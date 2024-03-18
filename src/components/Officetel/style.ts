import styled from 'styled-components';
import { IoCopyOutline } from 'react-icons/io5';

export const Officetel = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	max-width: 500px;
	height: 120px;

	margin-bottom: 10px;
	padding: 5px 10px;

	border: 2px solid #ffa500;
	border-radius: 12px;

	cursor: pointer;
`;

export const OfficetelName = styled.div`
	font-weight: bold;
`;

export const DayContainer = styled.div`
	display: flex;
	margin: 5px 0;
`;

export const DayText = styled.div`
	font-weight: bold;
	margin-right: 5px;
`;

export const DayData = styled.div``;

export const LinkContainer = styled.div`
	display: flex;
	align-items: center;

	cursor: pointer;

	&:hover {
		transform: scale(1.01);
	}
`;

export const LinkText = styled.div``;

export const CopyButton = styled(IoCopyOutline)`
	margin-right: 5px;
`;
