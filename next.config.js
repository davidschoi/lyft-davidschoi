// next.config.js
const withImages = require('next-images');
module.exports = withImages({
	images: {
		domains: ['images.ctfassets.net'],
	},
});
