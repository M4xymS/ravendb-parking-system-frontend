import { Skeleton } from "@/core/components/ui/skeleton.tsx";
import { cn } from "@/core/helpers";

const FLOOR_TABS_LENGTH = 5;

export const FloorTabsSkeleton = () => (
  <div className="flex items-center">
    <span className="font-semibold hidden md:block text-xl mr-6">Floor</span>
    <div className="relative">
      <div className="inline-flex w-full items-center justify-start p-2">
        {Array.from({ length: FLOOR_TABS_LENGTH }).map((_, index) => (
          <div
            className={cn("relative inline-flex items-center justify-center px-3 py-1.5 border", {
              "rounded-l-lg": index === 0,
              "rounded-r-lg": index === FLOOR_TABS_LENGTH - 1,
            })}
          >
            <Skeleton className="w-4 h-5" />
          </div>
        ))}
      </div>
    </div>
  </div>
);
