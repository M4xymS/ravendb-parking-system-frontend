import { useOutlet } from "react-router-dom";

import { Header } from "@/core/components/header";

export const ContentOverlay = () => {
  const outlet = useOutlet();

  return (
    <div className="sm:ml-64 min-h-screen py-8 w-full">
      <div className="m-4 relative px-4 sm:px-8">
        <Header />
        <main className="flex flex-col items-center mt-16 space-y-4 w-full">
          {outlet || (
            <div className="items-center justify-center flex flex-col">
              <img
                src="/assets/no-parking-slot-placeholder.svg"
                className="size-48"
              />
              <h1 className="text-2xl text-center font-semibold">
                Select a floor to view parking slots
              </h1>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
