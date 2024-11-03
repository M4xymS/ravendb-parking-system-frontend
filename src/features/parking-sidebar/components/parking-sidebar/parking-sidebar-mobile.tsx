import { useState } from "react";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/core/components/ui/sheet.tsx";

import { ParkingSidebar } from "@/features/parking-sidebar/components/parking-sidebar/parking-sidebar.tsx";

export const ParkingSidebarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={"sm:hidden"}>
      <Sheet
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <SheetTrigger className="mt-2">
          <Menu />
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="w-[300px] sm:w-[340px]"
        >
          <SheetDescription>
            <ParkingSidebar
              open={isOpen}
              setIsOpen={setIsOpen}
            />
          </SheetDescription>{" "}
        </SheetContent>
      </Sheet>
    </div>
  );
};
