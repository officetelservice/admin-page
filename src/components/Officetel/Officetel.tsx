import { useNavigate } from 'react-router-dom';
import {
	Officetel,
	OfficetelName,
	DayContainer,
	DayText,
	DayData,
	LinkContainer,
	LinkText,
	CopyButton,
} from './style';

interface OfficetelComponentProps {
	officetel: any;
}

const OfficetelComponent: React.FC<OfficetelComponentProps> = ({
	officetel,
}) => {
	const navigation = useNavigate();

	const toOffictelDetail = () => {
		navigation(`/officetel/${officetel.id}`);
	};

	const copyTextToClipboard = (e, link: string) => {
		e.stopPropagation();

		navigator.clipboard
			.writeText(link)
			.then(() => alert('링크가 복사되었습니다.'))
			.catch((error) => console.error('텍스트 복사 실패: ', error));
	};

	return (
		<Officetel onClick={toOffictelDetail}>
			<OfficetelName>{officetel.name}</OfficetelName>

			<DayContainer>
				<DayText>작업기간:</DayText>
				<DayData>
					{officetel.startDay} ~ {officetel.endDay}
				</DayData>
			</DayContainer>

			<LinkContainer onClick={(e) => copyTextToClipboard(e, officetel.link)}>
				<CopyButton size={20} />
				<LinkText>{officetel.link}</LinkText>
			</LinkContainer>
		</Officetel>
	);
};

export default OfficetelComponent;
