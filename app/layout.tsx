import '../styles/globals.css';
import { inter } from '../styles/fonts';
import Navbar from './components/Navbar';
import Head from 'next/head';
import Footer from './components/Footer';

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Your website description" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Your Website Title</title>
        </Head>

        <div
          className={`${inter.className} antialiased bg-gradient-to-r from-[#0d0d0d] via-[#161617] to-[#0d0d0f] h-screen flex flex-col`}
        >
          {/* Navbar */}
          <Navbar />

          {/* Content here */}
          <main className="flex-grow mb-32">{children}</main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
export default RootLayout;
