import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Marcello De Feo Portfolio',
    short_name: 'marcello.de.feo',
    description: 'The personal portfolio of Marcello De Feo showcasing projects, skills, and contact information.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F5F2E9',
    theme_color: '#F5F2E9',
    icons: [
      {
        "src": "/favicons/web-app-manifest-192x192.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "maskable"
      },
      {
        "src": "/favicons/web-app-manifest-512x512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "maskable"
      },
      {
        src: '/favicon.ico',
        sizes: '16x16',
        type: 'image/x-icon',
      },
    ],
  }
}