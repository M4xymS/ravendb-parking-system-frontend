import { Header } from "@/core/components/header";

import { ParkingMap } from "@/features/parking-map/components/parking-map/parking-map.tsx";

function App() {
  return (
    <div className="container mx-auto min-h-screen py-12">
      <Header />
      <main className="flex flex-col items-center mt-16 space-y-4 w-full">
        <ParkingMap />
      </main>
    </div>
  );
}

export default App;
