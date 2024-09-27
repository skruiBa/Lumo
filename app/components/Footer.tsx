'use client';

import { useState, useEffect } from 'react';

// ui/Footer.tsx

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <p className="text-sm">
          Follow us on{' '}
          <a href="#" className="text-blue-400 hover:underline">
            Twitter
          </a>{' '}
          |{' '}
          <a href="#" className="text-blue-400 hover:underline">
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
