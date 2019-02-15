'use strict';

function derpify(str) {
	return str.toLowerCase().split('').map(
		c => (Math.random() < 0.3) ? c : c.toUpperCase()
	).join('');
};

module.exports = derpify;
