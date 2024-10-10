import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode; // Define the type of children as ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', width: '100%', backgroundColor: '#f9f9f9' }}>
      {children}
    </div>
  );
};

export default Layout;
