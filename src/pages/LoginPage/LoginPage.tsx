import ButtonComponent from '../../components/Button/Button';
import { Container } from './style';

const LoginPage = () => {
	const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${
		import.meta.env.VITE_KAKAO_REST_API_KEY
	}&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}&response_type=code`;

	const kakaoLogin = async () => {};

	return (
		<Container>
			<a href={kakaoLoginUrl}>이거 눌러서 로그인</a>
			<ButtonComponent
				title={'카카오 로그인'}
				color={'#ffe812'}
				onClick={kakaoLogin}
			/>
		</Container>
	);
};

export default LoginPage;
