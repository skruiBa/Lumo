'use client';
// app/page.tsx
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Page: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Redirect to /lab after 3 seconds

    pathname === '/lab' ? (window.location.href = '/') : (window.location.href = '/lab');
  }, [pathname]);

  return (
    <div>
      <h1>Main Page</h1>
      <p>Redirecting to lab...</p>
    </div>
  );
};

export default Page;
