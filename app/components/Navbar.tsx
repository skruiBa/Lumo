'use client';
// ui/footer.tsx
import Image from 'next/image';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 p-2 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}

        <Image src="/logo.svg" alt="Logo" width={50} height={50} />

        {/* Navigation Links */}
        <div className="flex-1 flex justify-center space-x-4 -ml-[50px]">{/* not needed rn */}</div>

        {/* Mobile Menu Button */}
      </div>
    </nav>
  );
};

export default Navbar;
