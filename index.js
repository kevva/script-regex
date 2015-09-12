'use strict';
module.exports = function () {
	return /(<script\b[a-z0-9]*\b[^>]*>([^]*?)<\/script>)/ig;
};
