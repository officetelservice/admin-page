import { Container, Image } from './style';
import LoadingImage from '/images/Loading.png';

interface LoadingModalComponentProps {}

const LoadingModalComponent: React.FC<LoadingModalComponentProps> = () => {
	return (
		<Container>
			<Image src={LoadingImage} />
		</Container>
	);
};

export default LoadingModalComponent;
