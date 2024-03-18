import { useNavigate } from 'react-router-dom';
import OfficetelComponent from '@/components/Officetel/Officetel';
import ButtonComponent from '@/components/Button/Button';
import { Container, OfficetelContainer } from './style';

const officetels = [
	{
		id: 'asdfasdf',
		name: 'A오피스텔',
		startDay: '2024.03.01',
		endDay: '2024.03.01',
		link: 'www.naver.com',
	},
	{
		id: 'asdfasssdf',
		name: 'A오피스텔',
		startDay: '2024.03.01',
		endDay: '2024.03.01',
		link: 'www.naver.com',
	},

	{
		id: 'asdfasddsdf',
		name: 'A오피스텔',
		startDay: '2024.03.01',
		endDay: '2024.03.01',
		link: 'www.naver.com',
	},
];

const OfficetelsPage = () => {
	const navigation = useNavigate();

	const toNext = () => {
		navigation('/upload');
	};

	return (
		<Container>
			{/* <Title>오피스텔 관리</Title> */}

			<OfficetelContainer>
				{officetels.map((officetel) => (
					<OfficetelComponent officetel={officetel} />
				))}
			</OfficetelContainer>

			<ButtonComponent
				title={'오피스텔 추가'}
				color={'#ffa500'}
				onClick={toNext}
			/>
		</Container>
	);
};

export default OfficetelsPage;
