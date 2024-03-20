import { useCallback, useEffect, useState } from 'react';
import DatePickerComponent from '@/components/DatePicker/DatePicker';
import ScheduleComponent from '@/components/Schedule/Schedule';
import LoadingModalComponent from '@/components/Loading/Loading';
import {
	Container,
	ScheduleContainer,
	AlertContainer,
	AlertText,
} from './style';
import { GetAxiosInstance } from '@/api/axios.method';
import { GetSchedulesResponse } from '@/types/request.types';
import { Schedule } from '@/types/common.types';
import moment from 'moment';

const SchedulePage = () => {
	const [date, setDate] = useState<Date | null>(new Date());
	const [schedules, setSchedules] = useState<Schedule[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	const getReserves = useCallback(async () => {
		const formmatedDate = moment(date).format('YYYY/MM/DD');

		const response = await GetAxiosInstance<GetSchedulesResponse>(
			`/users/me/reserves?date=${formmatedDate}`
		);

		setLoading(true);
		setSchedules(response.data.data);
		setLoading(false);
	}, [date]);

	useEffect(() => {
		getReserves();
	}, [date]);

	return (
		<Container>
			{loading && <LoadingModalComponent />}

			<div style={{ marginTop: '20px' }}>
				<DatePickerComponent date={date} setDate={setDate} />
			</div>

			{!loading && schedules.length === 0 ? (
				<AlertContainer>
					<AlertText>일정이 없습니다</AlertText>
				</AlertContainer>
			) : (
				<ScheduleContainer>
					{schedules.map((schedule) => (
						<ScheduleComponent schedule={schedule} />
					))}
				</ScheduleContainer>
			)}
		</Container>
	);
};

export default SchedulePage;
