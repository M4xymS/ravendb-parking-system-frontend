import { Outlet } from "react-router-dom";

import { Header } from "@/core/components/header";

export const ContentOverlay = () => {
  return (
    <div className="sm:ml-64 min-h-screen py-8 w-full">
      <div className="m-4 relative px-4 sm:px-8">
        <Header />
        <main className="flex flex-col items-center mt-16 space-y-4 w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
