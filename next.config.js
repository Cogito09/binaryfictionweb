/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true ,
    images: {
        unoptimized : true,
        remotePatterns: [
            {
                hostname: 'cdn.discordapp.com',
            },
        ],
    },
}

module.exports = nextConfig