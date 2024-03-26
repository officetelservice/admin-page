import React, { useEffect, useState } from 'react';
import { Container, Title } from './style';
import { useParams } from 'react-router-dom';
import { GetAxiosInstance } from '@/api/axios.method';
import { GetOfficetelDetailReponse } from '@/types/request.types';
import { Officetel, Reserve } from '@/types/common.types';

const OfficetelDetailPage = () => {
	const params = useParams();

	const [officetel, setOfficetel] = useState<Officetel>();
	const [reserves, setReserves] = useState<Reserve[]>([]);

	const { officetelId } = params;

	const getOfficetelDetail = async () => {
		const response = await GetAxiosInstance<GetOfficetelDetailReponse>(
			`/officetels/${officetelId}/detail`
		);

		const { officetel, reserves } = response.data.data;

		setOfficetel(officetel);
		setReserves(reserves);
	};

	const Box = ({ row, col }) => {
		const OfficetelArr = Array.from({ length: row * col }, (_, index) => {
			let isReserved = false;
			let isCompleted = false;

			reserves.forEach((reserve) => {
				if (reserve.floor === index + 100) {
					isReserved = reserve.reservation;
					isCompleted = reserve.complete;
				}
			});

			return {
				num: index + 100,
				reserved: isReserved,
				completed: isCompleted,
			};
		});

		// 네모상자 스타일을 생성하는 함수
		const generateBoxStyle = () => {
			return {
				display: 'grid',
				gridTemplateRows: `repeat(${row}, 1fr)`, // 행의 개수를 설정합니다.
				gridTemplateColumns: `repeat(${col}, 1fr)`, // 열의 개수를 설정합니다.
				gap: '5px', // 셀 사이의 간격을 설정합니다.
				backgroundColor: 'lightblue', // 배경색을 설정합니다.
				width: '100%',
				height: '100%',
				padding: '10px', // 내부 여백을 설정합니다.
				border: '1px solid black', // 테두리를 설정합니다.
				overflow: 'auto',
			};
		};

		return (
			<div style={generateBoxStyle()}>
				{OfficetelArr.map((officetel) => {
					const backgroundColor = officetel.completed
						? 'blue'
						: officetel.reserved
						? 'green'
						: 'white';
					return (
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								width: '40px',
								height: '40px',
								border: '1px solid black',
								backgroundColor: backgroundColor,
								fontSize: 'small',
							}}
							key={officetel.num}
						>
							{officetel.num}
						</div>
					);
				})}
			</div>
		);
	};

	useEffect(() => {
		getOfficetelDetail();
	}, []);

	return (
		<Container>
			<Title>오피스텔 A</Title>

			<Box row={officetel?.floorNum} col={officetel?.roomNum} />
		</Container>
	);
};

export default OfficetelDetailPage;
