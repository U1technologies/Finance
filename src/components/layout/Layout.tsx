
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { TooltipProvider } from "@/components/ui/tooltip";

interface LayoutProps {
  children: React.ReactNode;
  transparentHeader?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, transparentHeader = false }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <TooltipProvider>
        <main className="flex-grow">{children}</main>
      </TooltipProvider>
      <Footer />
    </div>
  );
};

export default Layout;
