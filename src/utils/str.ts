const sliceLongStr = (str: string) => {
	const new_str = str.slice(0, 32) + '...';

	console.log(new_str);

	return new_str;
};

export { sliceLongStr };
