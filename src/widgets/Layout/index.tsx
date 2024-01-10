'use client'
import React, { ReactNode } from "react";
import Sidebar from "../Sidebar";
import useSession from "@/shared/session/useSession";
import Login from "../Login";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isAuthorized,user } = useSession();
  
  return (
    <div className="flex">
      {isAuthorized ? (
        <>
          <Sidebar />
          <main className="px-14 py-8 content">{children}</main>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
  
};

export default Layout;
