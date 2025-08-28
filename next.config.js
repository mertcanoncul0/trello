/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { 
                protocol: "https",
                hostname: "img.clerk.com"
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com"
            }
        ]
    },
    env: {
        PORT: process.env.PORT || '3001'
    }
}

module.exports = nextConfig;
