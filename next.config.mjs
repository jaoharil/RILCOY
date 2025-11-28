const isProd = process.env.NODE_ENV === 'production';
const isVercel = process.env.VERCEL === '1';

const nextConfig = {
  ...(isVercel
    ? {
        output: 'standalone',
        images: { unoptimized: false },
      }
    : {
        basePath: '/rilcoy',
        assetPrefix: '/rilcoy/',
        output: 'export',
        images: { unoptimized: true },
      }),
};

export default nextConfig;
