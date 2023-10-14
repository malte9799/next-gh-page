/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: 'export',
	basePath: '/next-gh-page',
	images: {
		unoptimized: true,
	},
};

module.exports = nextConfig;
