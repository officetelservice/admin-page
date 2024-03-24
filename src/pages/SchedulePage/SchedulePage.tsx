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
import { GetAxiosInstance, PostAxiosInstance } from '@/api/axios.method';
import { GetSchedulesResponse } from '@/types/request.types';
import { Schedule } from '@/types/common.types';
import moment from 'moment';
import InputModalComponent from '@/components/InputModal/InputModal';

const SchedulePage = () => {
	const [date, setDate] = useState<Date | null>(new Date());
	const [schedules, setSchedules] = useState<Schedule[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	const [inputModalOpen, setInputModalOpen] = useState<boolean>(false);
	const [deviceNumber, setDeviceNumber] = useState<string>('');
	const [clickedSchedule, setClickedSchedule] = useState<Schedule>();

	const getReserves = useCallback(async () => {
		const formmatedDate = moment(date).format('YYYY/MM/DD');

		const response = await GetAxiosInstance<GetSchedulesResponse>(
			`/users/me/reserves?date=${formmatedDate}`
		);

		setLoading(true);
		setSchedules(response.data.data);
		setLoading(false);
	}, [date]);

	const openInputModal = (schedule: Schedule) => {
		setClickedSchedule(schedule);
		setInputModalOpen(true);
	};

	const closeInputModal = async () => {
		setInputModalOpen(false);
	};

	const completeSchedule = async (schedule: Schedule): Promise<void> => {
		const { reserve } = schedule;

		await PostAxiosInstance(`/reserves/${reserve.id}/complete`, {
			deviceNumber: deviceNumber,
		});

		alert('일련번호가 입력되었습니다');

		await getReserves();

		closeInputModal();
	};

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
					{schedules.map((schedule: Schedule) => (
						<ScheduleComponent
							schedule={schedule}
							clickEvent={() => openInputModal(schedule)}
						/>
					))}
				</ScheduleContainer>
			)}

			{inputModalOpen && clickedSchedule && (
				<InputModalComponent
					schedule={clickedSchedule}
					inputValue={deviceNumber}
					setInputValue={setDeviceNumber}
					close={closeInputModal}
					completeSchedule={completeSchedule}
				/>
			)}
		</Container>
	);
};

export default SchedulePage;
