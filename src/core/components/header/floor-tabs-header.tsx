import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Tabs, TabsList, TabsTrigger } from "@/core/components/ui/tabs.tsx";
import { ContextMenu, ContextMenuTrigger } from "@/core/components/ui/context-menu.tsx";
import { FloorTabsHeaderContentMenu } from "@/core/components/header/floor-tabs-header-content-menu.tsx";
import { FloorTabsSkeleton } from "@/core/components/header/floor-tabs-skeleton.tsx";

import { useGetParkingFloorsQuery } from "@/features/parking-map/services/hooks";

export const FloorTabsHeader = () => {
  const { areaId, floorId } = useParams();

  const { data: parkingFloors, isLoading } = useGetParkingFloorsQuery(areaId);
  const [value, setValue] = useState(floorId);

  if (isLoading) {
    return <FloorTabsSkeleton />;
  }

  return (
    <div className="flex items-center">
      <span className="font-semibold hidden md:block text-xl mr-6">Floor</span>
      <Tabs
        value={value || ""}
        onValueChange={setValue}
      >
        <TabsList>
          {parkingFloors?.map(tab => (
            <ContextMenu>
              <ContextMenuTrigger asChild>
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  asChild
                >
                  <Link to={encodeURIComponent(tab.id)}>{tab.letter + tab.number}</Link>
                </TabsTrigger>
              </ContextMenuTrigger>
              <FloorTabsHeaderContentMenu parkingFloor={tab} />
            </ContextMenu>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};
