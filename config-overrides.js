const path = require('path');

module.exports = function override(config) {
	config.resolve.alias = {
		...config.resolve.alias,
		'@components': path.resolve(__dirname, 'src/components'),
		'@assets': path.resolve(__dirname, 'src/assets')
	};
	return config;
};