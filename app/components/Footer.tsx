'use client';

import { useState, useEffect } from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">© {new Date().getFullYear()} Lumo. All rights reserved.</p>
        <p className="text-sm">Built by skruiBa.</p>
        <p className="text-sm">
          Follow us on{' '}
          <a
            href="https://x.com/Skruiba"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e69d37] hover:underline"
          >
            X
          </a>{' '}
          or check out my{' '}
          <a
            href="https://github.com/skruiBa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e69d37] hover:underline"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
