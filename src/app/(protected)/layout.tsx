'use client';

import Header from '@/components/SideBar/Header';
import Sidebar from '@/components/SideBar/Sidebar';
import ProtectedPage from '@/components/ProtectedPage';

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedPage>
      <div className="h-screen flex flex-col">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <div className="flex-1 overflow-y-auto bg-gray-100 p-4">
            {children}
          </div>
        </div>
      </div>
    </ProtectedPage>
  );
}
