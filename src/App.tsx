import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useOutlet } from "react-router-dom";

import { Toaster } from "@/core/components/ui/toaster.tsx";
import { FloatingLegend } from "@/core/components/floating-legend/floating-legend.tsx";

import { ParkingSidebar } from "@/features/parking-sidebar/components/parking-sidebar/parking-sidebar.tsx";

import { TooltipProvider } from "./core/components/ui/tooltip";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

function App() {
  const outlet = useOutlet();

  return (
    <TooltipProvider delayDuration={50}>
      <QueryClientProvider client={queryClient}>
        <div
          vaul-drawer-wrapper=""
          className="min-h-screen bg-background flex"
        >
          <ParkingSidebar />
          {outlet || (
            <div className="sm:ml-64 flex justify-center flex-col text-center items-center min-h-screen py-8 px-8 w-full">
              <img
                src="/assets/no-parking-area-placeholder.svg"
                className="size-48"
              />
              <p className="text-2xl font-semibold">
                Hello! Welcome to the parking lot! App where you can reserve parking slots. Choose
                one of the areas on the left to get started.
              </p>
            </div>
          )}
          <FloatingLegend />
          <Toaster />
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </TooltipProvider>
  );
}

export default App;
