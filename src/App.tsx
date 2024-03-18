import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import LandingPage from '@/pages/LandingPage/LandingPage';
import LoginPage from '@/pages/LoginPage/LoginPage';
import OfficetelDetailPage from '@/pages/OfficetelDetailPage/OfficetelDetailPage';
import OfficetelsPage from '@/pages/OfficetelsPage/OfficetelsPage';
import UploadPage from '@/pages/UploadPage/UploadPage';
import KakaoLoginPage from '@/pages/KakaologinPage/KakaoLoginPage';

import 'react-datepicker/dist/react-datepicker.css';

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route>
				<Route path="/login" element={<LoginPage />}></Route>
				<Route path="/kakaoLogin" element={<KakaoLoginPage />}></Route>
				<Route path="/" element={<LandingPage />}></Route>
				<Route
					path="/officetel/:officetelId"
					element={<OfficetelDetailPage />}
				></Route>
				<Route path="/officetels" element={<OfficetelsPage />}></Route>
				<Route path="/upload" element={<UploadPage />}></Route>
			</Route>
		)
	);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
