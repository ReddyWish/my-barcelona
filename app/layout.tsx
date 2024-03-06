import { ReactNode } from 'react';
import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'My Barcelona',
  description: 'Find your dream apartment',
  keywords: 'rental, nomands, apartment, room',
};

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
