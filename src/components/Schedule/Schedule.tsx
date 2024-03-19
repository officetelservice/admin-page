import { Schedule } from '@/types/common.types';
import {
	ScheduleContainer,
	ReserveData,
	OfficetelData,
	OfficetelName,
	OfficetelFloor,
	ReserveTime,
	CompleteButton,
} from './style';

interface ScheduleComponentProps {
	schedule: Schedule;
}

const ScheduleComponent: React.FC<ScheduleComponentProps> = ({ schedule }) => {
	return (
		<ScheduleContainer>
			<ReserveData>
				<ReserveTime>{schedule.reserve.reservationTime}</ReserveTime>

				<OfficetelData>
					<OfficetelName>{schedule.officetel.name} -</OfficetelName>
					<OfficetelFloor>{schedule.reserve.floor}호</OfficetelFloor>
				</OfficetelData>
			</ReserveData>

			<CompleteButton>완료</CompleteButton>
		</ScheduleContainer>
	);
};

export default ScheduleComponent;
