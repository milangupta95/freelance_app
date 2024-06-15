/** @type {import('next').NextConfig} */
export default {
    reactStrictMode: true,
    images: {
        loader: 'custom',
        loaderFile: './customloader.js',
    },
};
