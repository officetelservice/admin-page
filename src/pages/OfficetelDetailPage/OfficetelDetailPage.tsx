import React from 'react';
import {
	Container,
	Title,
	OfficetelContainer,
	RoomContainer,
	OfficetelColContainer,
	OfficetelRowContainer,
} from './style';

interface OfficetelData {
	id: string;
	name: string;
	startDay: string;
	endDay: string;
	link: string;
	start: number;
	roomNum: number;
	floorNum: number;
}

interface OffictelRowProps {
	officetel: OfficetelData;
}

interface OfficetelColProps {
	officetel: OfficetelData;
}

const OffictelRowComponent: React.FC<OffictelRowProps> = ({ officetel }) => {
	const array = new Array(officetel.roomNum)
		.fill(null)
		.map((_, index) => index + 1);

	return (
		<OfficetelRowContainer>
			{array.map((_, index) => (
				<RoomContainer key={index}>{officetel.start + 100}</RoomContainer>
			))}
		</OfficetelRowContainer>
	);
};

const OfficetelColComponent: React.FC<OfficetelColProps> = ({ officetel }) => {
	const array = new Array(officetel.floorNum)
		.fill(null)
		.map((_, index) => index + 1);

	return (
		<OfficetelColContainer>
			{array.map((_, index) => (
				<OffictelRowComponent key={index} officetel={officetel} />
			))}
		</OfficetelColContainer>
	);
};

const OfficetelDetailPage: React.FC = () => {
	const officetel: OfficetelData = {
		id: 'asdfasddsdf',
		name: 'A오피스텔',
		startDay: '2024.03.01',
		endDay: '2024.03.01',
		link: 'www.naver.com',
		start: 1000,
		roomNum: 40,
		floorNum: 20,
	};

	return (
		<Container>
			<Title>오피스텔 A</Title>

			<OfficetelContainer>
				<OfficetelColComponent officetel={officetel} />
			</OfficetelContainer>
		</Container>
	);
};

export default OfficetelDetailPage;
