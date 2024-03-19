import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Container,
	Form,
	InputContainer,
	InputText,
	InputBox,
	TimeIntervalContainer,
	TimeIntervalSelect,
	OptionText,
	SelectOptionText,
	DatePickerContainer,
	FlowText,
} from './style';
import DatePickerComponent from '@/components/DatePicker/DatePicker';
import ButtonComponent from '@/components/Button/Button';
import { PostAxiosInstance } from '@/api/axios.method';
import moment from 'moment';

const timeIntervals = [10, 20, 30, 40, 50, 60];

const workTimes = [
	'00:00',
	'01:00',
	'02:00',
	'03:00',
	'04:00',
	'05:00',
	'06:00',
	'07:00',
	'08:00',
	'09:00',
	'10:00',
	'11:00',
	'12:00',
	'13:00',
	'14:00',
	'15:00',
	'16:00',
	'17:00',
	'18:00',
	'19:00',
	'20:00',
	'21:00',
	'22:00',
	'23:00',
];

const UploadPage = () => {
	const navigation = useNavigate();

	const [officetelName, setOfficetelName] = useState<string>('');
	const [floorNum, setFloorNum] = useState<string>('');
	const [roomNum, setRoomNum] = useState<string>('');
	const [timeInterval, setTimeInterval] = useState<string>('');
	const [startTime, setStartTime] = useState<string>('');
	const [endTime, setEndTime] = useState<string>('');
	const [startDate, setStartDate] = useState<Date | null>(new Date());
	const [endDate, setEndDate] = useState<Date | null>(new Date());

	const createOfficetel = useCallback(async () => {
		if (
			!officetelName &&
			!floorNum &&
			!roomNum &&
			!timeInterval &&
			!startTime &&
			!endTime &&
			!startDate &&
			!endDate
		) {
			return alert('항목을 모두 입력해주세요!');
		}

		const formattedStartDay = moment(startDate).format('YYYY/MM/DD');
		const formattedEndDay = moment(endDate).format('YYYY/MM/DD');

		// 시간 비교
		if (formattedStartDay > formattedEndDay) {
			return alert('시작기간은 마감기간보다 빨라야 합니다!');
		}

		const data = {
			name: officetelName,
			floorNum: parseInt(floorNum),
			roomNum: parseInt(roomNum),
			timeInterval: parseInt(timeInterval),
			startTime: startTime,
			endTime: endTime,
			startDay: formattedStartDay,
			endDay: formattedEndDay,
		};

		await PostAxiosInstance('/officetels', data);

		alert('오피스텔을 생성하겠습니까?');

		navigation('/officetels');
	}, [
		officetelName,
		floorNum,
		roomNum,
		timeInterval,
		startTime,
		endTime,
		startDate,
		endDate,
		navigation,
	]);

	const handleOfficetelNameChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setOfficetelName(e.target.value);
	};

	const handleFloorNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFloorNum(e.target.value);
	};

	const handleRoomNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRoomNum(e.target.value);
	};

	const handleTimeIntervalChange = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		setTimeInterval(e.target.value);
	};

	const handleStartTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setStartTime(e.target.value);
	};

	const handleEndTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setEndTime(e.target.value);
	};

	return (
		<Container>
			<Form>
				<InputContainer>
					<InputText>오피스텔 이름</InputText>
					<InputBox
						value={officetelName}
						onChange={handleOfficetelNameChange}
					/>
				</InputContainer>

				<InputContainer>
					<InputText>층수</InputText>
					<InputBox value={floorNum} onChange={handleFloorNumChange} />
				</InputContainer>

				<InputContainer>
					<InputText>층당 호수</InputText>
					<InputBox value={roomNum} onChange={handleRoomNumChange} />
				</InputContainer>

				<InputContainer>
					<InputText>작업 시간 간격</InputText>
					<TimeIntervalSelect
						id="hour"
						onChange={handleTimeIntervalChange}
						value={timeInterval}
					>
						<OptionText value="">시간</OptionText>
						{timeIntervals.map((time) => (
							<SelectOptionText key={time} value={time}>
								{time}분
							</SelectOptionText>
						))}
					</TimeIntervalSelect>
				</InputContainer>

				<InputContainer>
					<InputText>작업 시간</InputText>

					<TimeIntervalContainer>
						<TimeIntervalSelect
							id="hour"
							onChange={handleStartTimeChange}
							value={startTime}
						>
							<OptionText value="">업무 시작 시간</OptionText>
							{workTimes.map((workTime) => (
								<SelectOptionText key={workTime} value={workTime}>
									{workTime}
								</SelectOptionText>
							))}
						</TimeIntervalSelect>
						<FlowText>~</FlowText>
						<TimeIntervalSelect
							id="hour"
							onChange={handleEndTimeChange}
							value={endTime}
						>
							<OptionText value="">업무 종료 시간</OptionText>
							{workTimes.map((workTime) => (
								<SelectOptionText key={workTime} value={workTime}>
									{workTime}
								</SelectOptionText>
							))}
						</TimeIntervalSelect>
					</TimeIntervalContainer>
				</InputContainer>

				<InputContainer>
					<InputText>작업 기간</InputText>

					<DatePickerContainer>
						<DatePickerComponent date={startDate} setDate={setStartDate} />
						<FlowText>~</FlowText>
						<DatePickerComponent date={endDate} setDate={setEndDate} />
					</DatePickerContainer>
				</InputContainer>

				<ButtonComponent
					title={'완료'}
					color={'#ffa500'}
					onClick={createOfficetel}
				/>
			</Form>
		</Container>
	);
};

export default UploadPage;
