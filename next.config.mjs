/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        remotePatterns: [],
        dangerouslyAllowSVG: true,
        unoptimized: true,
    }
};

export default nextConfig;
