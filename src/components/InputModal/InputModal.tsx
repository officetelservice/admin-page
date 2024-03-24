import { Schedule } from '@/types/common.types';
import {
	ModalOverlay,
	ModalContent,
	CloseButton,
	ModalText,
	InputWrapper,
	InputField,
	ConfirmButton,
} from './style';

interface InputModalComponentProps {
	schedule: Schedule;
	inputValue: string;
	setInputValue: React.Dispatch<React.SetStateAction<string>>;
	close: () => Promise<void>;
	completeSchedule: (schedule: Schedule) => Promise<void>;
}

const InputModalComponent: React.FC<InputModalComponentProps> = ({
	schedule,
	inputValue,
	setInputValue,
	close,
	completeSchedule,
}) => {
	return (
		<ModalOverlay>
			<ModalContent>
				<CloseButton onClick={close}>x</CloseButton>
				<ModalText style={{ fontWeight: 'bold' }}>
					기기 일련번호를 입력해주세요
				</ModalText>

				<InputWrapper>
					<InputField
						value={inputValue}
						onChange={(e) => {
							setInputValue(e.target.value);
						}}
					/>
				</InputWrapper>

				<ConfirmButton onClick={() => completeSchedule(schedule)}>
					확인
				</ConfirmButton>
			</ModalContent>
		</ModalOverlay>
	);
};

export default InputModalComponent;
