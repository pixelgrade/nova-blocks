export const linear = function(t) {
	return t;
};

export const easeInQuad = function(t) {
	return t*t;
};

export const easeOutQuad = function(t) {
	return t*(2-t);
};

export const easeInOutQuad = function(t) {
	return t<.5 ? 2*t*t : -1+(4-2*t)*t;
};

export const easeInCubic = function(t) {
	return t*t*t;
};

export const easeOutCubic = function(t) {
	return (--t)*t*t+1;
};

export const easeInOutCubic = function(t) {
	return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1;
};

export const easeInQuart = function(t) {
	return t*t*t*t;
};

export const easeOutQuart = function(t) {
	return 1-(--t)*t*t*t;
};

export const easeInSine = pos => -Math.cos(pos * (Math.PI / 2)) + 1;
export const easeOutSine = pos => Math.sin(pos * (Math.PI / 2));
export const easeInOutSine = pos => -0.5 * (Math.cos(Math.PI * pos) - 1);
export const easeInExpo = pos => (pos === 0 ? 0 : Math.pow(2, 10 * (pos - 1)));
export const easeOutExpo = pos => (pos === 1 ? 1 : -Math.pow(2, -10 * pos) + 1);
export const easeInOutExpo = pos => {
	if (pos === 0) {
		return 0;
	}
	if (pos === 1) {
		return 1;
	}
	if ((pos /= 0.5) < 1) {
		return 0.5 * Math.pow(2, 10 * (pos - 1));
	}
	return 0.5 * (-Math.pow(2, -10 * --pos) + 2);
};

export const easeInBack = function(t) {
	var s = 1.70158;
	return (t)*t*((s+1)*t - s);
};

export const easeOutBack = function(t) {
	var s = 1.70158;
	return (t=t-1)*t*((s+1)*t + s) + 1;
};

export const easeInOutBack = function(t) {
	var s = 1.70158;
	if((t/=0.5) < 1) return 0.5*(t*t*(((s*=(1.525))+1)*t -s));
	return 0.5*((t-=2)*t*(((s*=(1.525))+1)*t +s) +2);
};

export const easeInOutQuart = function(t) {
	return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t;
};

export const easeInQuint = function(t) {
	return t*t*t*t*t;
};

export const easeOutQuint = function(t) {
	return 1+(--t)*t*t*t*t;
};

export const easeInOutQuint = function(t) {
	return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t;
};

export const elastic = pos =>
	-1 * Math.pow(4, -8 * pos) * Math.sin(((pos * 6 - 1) * (2 * Math.PI)) / 2) + 1;

export const swingFromTo = pos => {
	let s = 1.70158;
	return (pos /= 0.5) < 1
		? 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s))
		: 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
};

export const swingFrom = pos => {
	const s = 1.70158;
	return pos * pos * ((s + 1) * pos - s);
};

export const swingTo = pos => {
	const s = 1.70158;
	return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
};

export const bounce = pos => {
	if (pos < 1 / 2.75) {
		return 7.5625 * pos * pos;
	} else if (pos < 2 / 2.75) {
		return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
	} else if (pos < 2.5 / 2.75) {
		return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
	} else {
		return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
	}
};
export const bouncePast = pos => {
	if (pos < 1 / 2.75) {
		return 7.5625 * pos * pos;
	} else if (pos < 2 / 2.75) {
		return 2 - (7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75);
	} else if (pos < 2.5 / 2.75) {
		return 2 - (7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375);
	} else {
		return 2 - (7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375);
	}
};
export const easeInOut = pos =>
	(pos /= 0.5) < 1
		? 0.5 * Math.pow(pos, 4)
		: -0.5 * ((pos -= 2) * Math.pow(pos, 3) - 2);

export const easeIn = pos => Math.pow(pos, 4);

export const easeOut = pos => Math.pow(pos, 0.25);
