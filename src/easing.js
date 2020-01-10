// Credits:
// Gaëtan Renaudeau - https://gist.github.com/gre/1650294
// Jeremy Kahn - https://github.com/jeremyckahn/shifty/
// Johan Lindell - https://gist.github.com/gre/1650294#gistcomment-1806616

const { pow, abs, sin, cos, PI } = Math;

const EaseIn = power => x => pow( x, power );
const EaseOut = power => x => 1 - abs( pow( x - 1, power ) );
const EaseInOut = power => x => x < .5
	? EaseIn( power )( x * 2 ) / 2
	: EaseOut( power )( x * 2 - 1 ) / 2 + 0.5;

// Linear
export const linear = EaseInOut(1);

// Quad
export const easeInQuad = EaseIn(2);
export const easeOutQuad = EaseOut(2);
export const easeInOutQuad = EaseInOut(2);

// Cubic
export const easeInCubic = EaseIn(3);
export const easeOutCubic = EaseOut(3);
export const easeInOutCubic = EaseInOut(3);

// Quart
export const easeInQuart = EaseIn(4);
export const easeOutQuart = EaseOut(4);
export const easeInOutQuart = EaseInOut(4);

// Quint
export const easeInQuint = EaseIn(5);
export const easeOutQuint = EaseOut(5);
export const easeInOutQuint = EaseInOut(5);

// Sine
export const easeInSine = x => -1 * cos(x * PI / 2) + 1;
export const easeOutSine = x => sin(x * PI / 2);
export const easeInOutSine = x => -0.5 * (cos(PI * x) - 1);

// Expo
export const easeInExpo = x => (x === 0 ? 0 : pow(2, 10 * (x - 1)));
export const easeOutExpo = x => (x === 1 ? 1 : -pow(2, -10 * x) + 1);
export const easeInOutExpo = x => {

	if (x === 0 || x === 1) {
		return x;
	}

	if ((x /= 0.5) < 1) {
		return 0.5 * pow(2, 10 * (x - 1));
	}

	return 0.5 * (-pow(2, -10 * --x) + 2);
};

// Back
export const easeInBack = x => {
	const s = 1.70158;
	return pow(x, 2) * ((s + 1) * x - s);
};

export const easeOutBack = x => {
	const s = 1.70158;
	return (x = x - 1) * x * ((s + 1) * x + s) + 1;
};

export const easeInOutBack = x => {
	const s = 1.70158;
	return ((x /= 0.5) < 1)
		? 0.5 * (x * x * (((s *= 1.525) + 1) * x - s))
		: 0.5 * ((x -= 2) * x * (((s *= 1.525) + 1) * x + s) + 2);
};
