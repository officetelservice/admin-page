import { useNavigate } from 'react-router-dom';
import { sliceLongStr } from '@/utils/str';
import {
	OfficetelContainer,
	OfficetelName,
	DayContainer,
	DayText,
	DayData,
	LinkContainer,
	LinkText,
	CopyButton,
} from './style';
import { Officetel } from '@/types/common.types';

interface OfficetelComponentProps {
	officetel: Officetel;
}

const OfficetelComponent: React.FC<OfficetelComponentProps> = ({
	officetel,
}) => {
	const navigation = useNavigate();

	const toOffictelDetail = () => {
		navigation(`/officetel/${officetel.id}`);
	};

	const copyTextToClipboard = (e: any, link: string) => {
		e.stopPropagation();

		navigator.clipboard
			.writeText(link)
			.then(() => alert('링크가 복사되었습니다.'))
			.catch((error) => console.error('텍스트 복사 실패: ', error));
	};

	return (
		<OfficetelContainer onClick={toOffictelDetail}>
			<OfficetelName>{officetel.name}</OfficetelName>

			<DayContainer>
				<DayText>작업기간:</DayText>
				<DayData>
					{officetel.startDay} ~ {officetel.endDay}
				</DayData>
			</DayContainer>

			<LinkContainer onClick={(e) => copyTextToClipboard(e, officetel.link)}>
				<CopyButton size={20} />
				<LinkText>{sliceLongStr(officetel.link)}</LinkText>
			</LinkContainer>
		</OfficetelContainer>
	);
};

export default OfficetelComponent;
