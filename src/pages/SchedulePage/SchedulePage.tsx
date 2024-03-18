import { useEffect, useState } from 'react';
import DatePickerComponent from '@/components/DatePicker/DatePicker';
import ScheduleComponent from '@/components/Schedule/Schedule';
import { Container, ScheduleContainer } from './style';

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

const SchedulePage = () => {
	const [date, setDate] = useState<Date | null>(new Date());

	useEffect(() => {}, [date]);

	return (
		<Container>
			<DatePickerComponent date={date} setDate={setDate} />

			<ScheduleContainer>
				{schedules.map((schedule) => (
					<ScheduleComponent schedule={schedule} />
				))}
			</ScheduleContainer>
		</Container>
	);
};

export default SchedulePage;
