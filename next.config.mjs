
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com', // Ejemplo, ajusta según tus necesidades
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com', // Ejemplo, ajusta según tus necesidades
      },
    ],
  },
};

export default nextConfig;