import { Header } from "@/core/components/header";
import { Toaster } from "@/core/components/ui/toaster.tsx";

import { ParkingMap } from "@/features/parking-map/components/parking-map/parking-map.tsx";
import { ParkingSidebar } from "@/features/parking-sidebar/components/parking-sidebar/parking-sidebar.tsx";

function App() {
  return (
    <div className="min-h-screen flex">
      <ParkingSidebar />
      <div className="sm:ml-64 py-8 w-full">
        <div className="container relative px-4 sm:px-8">
          <Header />
          <main className="flex flex-col items-center mt-16 space-y-4 w-full">
            <ParkingMap />
          </main>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
