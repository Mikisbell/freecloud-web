
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co', // Ejemplo, ajusta según tus necesidades
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com', // Ejemplo, ajusta según tus necesidades
      },
    ],
  },
};

export default nextConfig;