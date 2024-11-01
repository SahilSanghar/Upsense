/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',         // Optimize for Vercel deployment
    reactStrictMode: true,         // Enable React strict mode for highlighting potential issues
    swcMinify: true, 
};

export default nextConfig;
