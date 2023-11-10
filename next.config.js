/** @type {import('next').NextConfig} */
const nextConfig = {
    env : {
        source: 'https://fakestoreapi.com'
    },
    images: {
        remotePatterns: [
            {
                protocol : "https",
                hostname : "fakestoreapi.com"
            }
        ],
    },
}

module.exports = nextConfig
