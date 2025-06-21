/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add HTTP headers to allow framing by your own origin and any Vercel subdomain
  async headers() {
    return [
      {
        // Match all routes in your app (change source if you only need specific paths)
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; frame-ancestors 'self' https://*.vercel.app",
          },
          // Ensure you are NOT also sending an X-Frame-Options header that would override this
        ],
      },
    ]
  },
}

export default nextConfig
