import {
	Schedule,
	ReserveData,
	OfficetelData,
	OfficetelName,
	OfficetelFloor,
	ReserveTime,
	CompleteButton,
} from './style';

interface ScheduleComponentProps {
	schedule: any;
}

const ScheduleComponent: React.FC<ScheduleComponentProps> = ({ schedule }) => {
	return (
		<Schedule>
			<ReserveData>
				<ReserveTime>{schedule.time}</ReserveTime>

				<OfficetelData>
					<OfficetelName>{schedule.officetel} -</OfficetelName>
					<OfficetelFloor>{schedule.floor}호</OfficetelFloor>
				</OfficetelData>
			</ReserveData>

			<CompleteButton>완료</CompleteButton>
		</Schedule>
	);
};

export default ScheduleComponent;
