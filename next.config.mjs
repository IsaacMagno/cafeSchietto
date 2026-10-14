const isDev = process.env.NODE_ENV === "development";

function buildCsp() {
  const clarityScript =
    "https://www.clarity.ms https://scripts.clarity.ms https://*.clarity.ms";
  const clarityConnect = "https://*.clarity.ms https://c.bing.com";

  const scriptSrc = isDev
    ? `script-src 'self' 'unsafe-inline' 'unsafe-eval' ${clarityScript}`
    : `script-src 'self' 'unsafe-inline' ${clarityScript}`;

  const connectSrc = isDev
    ? `connect-src 'self' ws: wss: ${clarityConnect}`
    : `connect-src 'self' ${clarityConnect}`;

  const directives = [
    "default-src 'self'",
    scriptSrc,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https://images.unsplash.com https://visitesocorrosp.com.br https://*.clarity.ms https://c.bing.com",
    "font-src 'self'",
    "frame-src https://www.google.com",
    connectSrc,
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
  ];

  if (!isDev) {
    directives.push("upgrade-insecure-requests");
  }

  return directives.join("; ");
}

const securityHeaders = [
  { key: "Content-Security-Policy", value: buildCsp() },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  ...(isDev
    ? []
    : [
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
      ]),
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "visitesocorrosp.com.br",
        pathname: "/content/images/**",
      },
    ],
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
