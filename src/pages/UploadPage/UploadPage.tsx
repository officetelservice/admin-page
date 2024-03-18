import { useState } from 'react';
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

	const [timeInterval, setTimeInterval] = useState<string>('');
	const [startTime, setStartTime] = useState<string>('');
	const [endTime, setEndTime] = useState<string>('');
	const [startDate, setStartDate] = useState<Date | null>(new Date());
	const [endDate, setEndDate] = useState<Date | null>(new Date());

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

	const toNext = () => {
		alert('오피스텔을 생성하겠습니까?');
		navigation('/officetels');
	};

	return (
		<Container>
			<Form>
				<InputContainer>
					<InputText>오피스텔 이름</InputText>
					<InputBox />
				</InputContainer>

				<InputContainer>
					<InputText>층수</InputText>
					<InputBox />
				</InputContainer>

				<InputContainer>
					<InputText>층당 호수</InputText>
					<InputBox />
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

				<ButtonComponent title={'완료'} color={'#ffa500'} onClick={toNext} />
			</Form>
		</Container>
	);
};

export default UploadPage;
