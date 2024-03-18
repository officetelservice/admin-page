import React, { forwardRef } from 'react';
import { ko } from 'date-fns/locale/ko';
import { DatePickerContainer, CustomInput } from './style';

interface DatePickerComponentProps {
	setDate: React.Dispatch<React.SetStateAction<Date | null>>;
	date: Date | null;
}

interface ExampleCustomInputProps {
	value?: string;
	onClick?: () => void;
}

const ExampleCustomInput = forwardRef<HTMLDivElement, ExampleCustomInputProps>(
	({ value, onClick }, ref) => (
		<CustomInput onClick={onClick} ref={ref}>
			{value}
		</CustomInput>
	)
);

const DatePickerComponent: React.FC<DatePickerComponentProps> = ({
	date,
	setDate,
}) => {
	return (
		<DatePickerContainer
			locale={ko}
			selected={date}
			onChange={(date: Date | null) => setDate(date)}
			dateFormat="yyyy년 MM월 dd일"
			customInput={<ExampleCustomInput />}
		/>
	);
};

export default DatePickerComponent;
