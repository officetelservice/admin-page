import { useNavigate } from 'react-router-dom';
import OfficetelComponent from '@/components/Officetel/Officetel';
import ButtonComponent from '@/components/Button/Button';
import LoadingModalComponent from '@/components/Loading/Loading';
import { GetAxiosInstance } from '@/api/axios.method';
import { useEffect, useState } from 'react';
import { GetOfficetelsResponse } from '@/types/request.types';
import { Officetel } from '@/types/common.types';
import {
	Container,
	OfficetelContainer,
	AlertContainer,
	AlertText,
} from './style';

const OfficetelsPage = () => {
	const navigation = useNavigate();

	const [officetels, setOfficetels] = useState<Officetel[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	const toNext = () => {
		navigation('/upload');
	};

	const getOffcetels = async () => {
		const response = await GetAxiosInstance<GetOfficetelsResponse>(
			'/users/me/officetels'
		);

		setLoading(true);
		setOfficetels(response.data.data);
		setLoading(false);
	};

	useEffect(() => {
		getOffcetels();
	}, []);

	return (
		<Container>
			{loading && <LoadingModalComponent />}

			{!loading && officetels.length === 0 ? (
				<AlertContainer>
					<AlertText>오피스텔이 없습니다</AlertText>
				</AlertContainer>
			) : (
				<OfficetelContainer>
					{officetels.map((officetel) => (
						<OfficetelComponent officetel={officetel} />
					))}
				</OfficetelContainer>
			)}

			<ButtonComponent
				title={'오피스텔 추가'}
				color={'#ffa500'}
				onClick={toNext}
			/>
		</Container>
	);
};

export default OfficetelsPage;
