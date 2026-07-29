export const navItems = [
  {
    name: 'Projects',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Contact',
    path: 'mailto:kmtna@proton.me',
  },
];

export const isExternalPath = (path: string) =>
  path.startsWith('mailto:') || path.startsWith('http');
