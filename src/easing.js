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
