/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'black-forest-labs-flux-1-schnell.hf.space',
        port: '',
        pathname: '/file=/tmp/gradio/**' // Adjust this to match the path pattern
      }
    ]
  }
};

export default nextConfig;
