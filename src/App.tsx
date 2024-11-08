import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "react-router-dom";

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
  return (
    <TooltipProvider delayDuration={50}>
      <QueryClientProvider client={queryClient}>
        <div
          vaul-drawer-wrapper=""
          className="min-h-screen bg-background flex"
        >
          <ParkingSidebar />
          <Outlet />
          <FloatingLegend />
          <Toaster />
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </TooltipProvider>
  );
}

export default App;
