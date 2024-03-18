import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SchedulePage from '@/pages/SchedulePage/SchedulePage';
import LoginPage from '@/pages/LoginPage/LoginPage';
import OfficetelDetailPage from '@/pages/OfficetelDetailPage/OfficetelDetailPage';
import OfficetelsPage from '@/pages/OfficetelsPage/OfficetelsPage';
import UploadPage from '@/pages/UploadPage/UploadPage';
import KakaoLoginPage from '@/pages/KakaologinPage/KakaoLoginPage';

import Header from '@/layout/Header/Header';
// import Footer from '@/layout/Footer/Footer';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/login" element={<LoginPage />}></Route>
				<Route path="/kakaoLogin" element={<KakaoLoginPage />}></Route>
				<Route path="/schedule" element={<SchedulePage />}></Route>
				<Route
					path="/officetel/:officetelId"
					element={<OfficetelDetailPage />}
				></Route>
				<Route path="/officetels" element={<OfficetelsPage />}></Route>
				<Route path="/upload" element={<UploadPage />}></Route>
			</Routes>
			{/* <Footer /> */}
		</BrowserRouter>
	);
}

export default App;
