import { Container, Title, KakaoLoginButton } from './style';

const LoginPage = () => {
	const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${
		import.meta.env.VITE_KAKAO_REST_API_KEY
	}&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}&response_type=code`;

	return (
		<Container>
			<Title>오피스텔 관리자 페이지</Title>
			<KakaoLoginButton href={kakaoLoginUrl}>카카오 로그인</KakaoLoginButton>
		</Container>
	);
};

export default LoginPage;
