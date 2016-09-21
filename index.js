'use strict';
module.exports = () => (/(<script\b[a-z0-9]*\b[^>]*>([^]*?)<\/script>)/ig);
