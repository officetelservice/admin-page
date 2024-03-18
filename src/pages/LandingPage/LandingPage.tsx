import ButtonComponent from '@/components/Button/Button';
import ScheduleComponent from '@/components/Schedule/Schedule';
import { Container, ScheduleContainer, ReserveTime } from './style';
import { useNavigate } from 'react-router-dom';

const schedules = [
	{
		time: '15:30',
		officetel: 'A오피스텔',
		floor: 101,
		complete: true,
	},
	{
		time: '16:30',
		officetel: 'B오피스텔',
		floor: 102,
		complete: false,
	},
	{
		time: '16:30',
		officetel: 'B오피스텔',
		floor: 102,
		complete: false,
	},
	{
		time: '16:30',
		officetel: 'B오피스텔',
		floor: 102,
		complete: false,
	},
	{
		time: '16:30',
		officetel: 'B오피스텔',
		floor: 102,
		complete: false,
	},
	{
		time: '16:30',
		officetel: 'B오피스텔',
		floor: 102,
		complete: false,
	},
	{
		time: '16:30',
		officetel: 'B오피스텔',
		floor: 102,
		complete: false,
	},
	{
		time: '16:30',
		officetel: 'B오피스텔',
		floor: 102,
		complete: false,
	},
	{
		time: '16:30',
		officetel: 'B오피스텔',
		floor: 102,
		complete: false,
	},
	{
		time: '16:30',
		officetel: 'B오피스텔',
		floor: 102,
		complete: false,
	},
	{
		time: '16:30',
		officetel: 'B오피스텔',
		floor: 102,
		complete: false,
	},
	{
		time: '16:30',
		officetel: 'B오피스텔',
		floor: 102,
		complete: false,
	},
	{
		time: '16:30',
		officetel: 'B오피스텔',
		floor: 102,
		complete: false,
	},
];

const LandingPage = () => {
	const navigation = useNavigate();

	const toNext = () => {
		navigation('/officetels');
	};

	return (
		<Container>
			<ReserveTime>날짜 넣기</ReserveTime>

			<ScheduleContainer>
				{schedules.map((schedule) => (
					<ScheduleComponent schedule={schedule} />
				))}
			</ScheduleContainer>

			<ButtonComponent
				title={'오피스텔 관리'}
				color={'#ffa500'}
				onClick={toNext}
			/>
		</Container>
	);
};

export default LandingPage;
