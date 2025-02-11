'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent text-white w-full   py-4  justify-items-center items-center justify-center text-sm ">
      <div className="container mx-auto text-center">
        <p className="text-sm">© {new Date().getFullYear()} Lumo. All rights reserved</p>
        <p className="text-sm">Made by skruiBa</p>
        <p className="text-sm">
          Follow me on{' '}
          <Link
            href="https://x.com/Skruiba"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e69d37] hover:underline"
          >
            X
          </Link>{' '}
          or check out my{' '}
          <Link
            href="https://github.com/skruiBa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e69d37] hover:underline"
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
