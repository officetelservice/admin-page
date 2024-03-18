import { useNavigate } from 'react-router-dom';
import { Container, Menu, MenuText, MiddleLine } from './style';

const Header = () => {
	const navigation = useNavigate();

	const toSchedulePage = () => {
		navigation('/schedule');
	};

	const toOfficetelsPage = () => {
		navigation('/officetels');
	};

	return (
		<Container>
			<Menu onClick={toSchedulePage}>
				<MenuText>일정</MenuText>
			</Menu>
			<MiddleLine></MiddleLine>
			<Menu onClick={toOfficetelsPage}>
				<MenuText>오피스텔 관리</MenuText>
			</Menu>
		</Container>
	);
};

export default Header;
