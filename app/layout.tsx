import '../styles/globals.css';
import Navbar from './components/Navbar';
import Head from 'next/head';
import Footer from './components/Footer';
import localFont from 'next/font/local';

// Font
const nunitoSans = localFont({
  src: './fonts/NunitoSans.ttf', // Adjust the path relative to this file
  variable: '--font-jua',
  weight: '100 900' // If it's a variable font covering weights 100 to 900
});

export const metadata = {
  title: 'Lumo',
  description: 'Create images with AI, no limitations!',
  icons: {
    icon: '/logo.svg' // Automatically handles favicon
  }
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.className} antialiased h-screen flex flex-col bg-no-repeat bg-cover bg-center`}
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/background2.svg')"
        }}
      >
        <div>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
export default RootLayout;
