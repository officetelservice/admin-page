import { Schedule } from '@/types/common.types';
import {
	ScheduleContainer,
	ReserveData,
	OfficetelData,
	OfficetelName,
	OfficetelFloor,
	ReserveTime,
	CompleteButton,
	Completed,
} from './style';

interface ScheduleComponentProps {
	schedule: Schedule;
	clickEvent: () => void;
}

const ScheduleComponent: React.FC<ScheduleComponentProps> = ({
	schedule,
	clickEvent,
}) => {
	return (
		<ScheduleContainer>
			<ReserveData>
				<ReserveTime>{schedule.reserve.reservationTime}</ReserveTime>

				<OfficetelData>
					<OfficetelName>{schedule.officetel.name} -</OfficetelName>
					<OfficetelFloor>{schedule.reserve.floor}호</OfficetelFloor>
				</OfficetelData>
			</ReserveData>

			{schedule.reserve.complete ? (
				<Completed onClick={clickEvent}>완료</Completed>
			) : (
				<CompleteButton onClick={clickEvent}>완료하기</CompleteButton>
			)}
		</ScheduleContainer>
	);
};

export default ScheduleComponent;
