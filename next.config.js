/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: 'loose',
    serverComponentsExternalPackages: ['mongoose'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.**',
        port: '',
        pathname: '/**/**',
      },
      {
        protocol: 'https',
        hostname: '**.**',
        port: '',
        pathname: '/**/**/**/**/**',
      },
      {
        protocol: 'https',
        hostname: '**.**',
        port: '',
        pathname: '/**/**/**/**',
      },
    ],
  },
};

module.exports = nextConfig;
