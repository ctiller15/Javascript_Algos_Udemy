const digitCount = (num) => {
	return (num !== 0 ? (num |> Math.abs |> Math.log10 |> Math.floor) : num) +1;
};

module.exports = digitCount;
