/** @type {import('next').NextConfig} */
const nextConfig = {
    env : {
        source: 'https://fakestoreapi.com',
        ga4: 'G-12312312'
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
