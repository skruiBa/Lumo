'use client';
// ui/footer.tsx
import Image from 'next/image';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Define the links array
const links = [
  { name: 'AI Lab', href: '/lab' }

  // Add more links here as needed
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 p-2 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}

        <Image src="/lumo-logo-512x512.png" alt="Logo" width={50} height={50} />

        {/* Navigation Links */}
        <div className="flex-1 flex justify-center space-x-4 -ml-[50px]">
          {links.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`w-[120px] h-[50px] text-center text-[#fbeadc]/90 text-[22px] rounded-[12px]
                 flex justify-center items-center leading-loose p-3 transition duration-150
                 hover:bg-[#d9d9d9]/15 hover:shadow-lg antialiased
                 ${pathname === link.href ? 'border-2 border-[#fbeadc]/20 bg-[#d9d9d9]/10' : ''}`}
              >
                <p className="hidden md:block">{link.name}</p>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none">
            {/* Mobile Menu Icon (Use Heroicons or Font Awesome) */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
