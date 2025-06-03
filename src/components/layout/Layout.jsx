
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { TooltipProvider } from "@/components/ui/tooltip";

const Layout = ({ children, transparentHeader = false }) => {
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
