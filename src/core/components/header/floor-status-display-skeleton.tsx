import { Skeleton } from "@/core/components/ui/skeleton.tsx";

export const FloorStatusDisplaySkeleton = () => (
  <>
    <div className="flex items-center gap-4">
      <div className="bg-neutral-100 items-center rounded-2xl py-1.5 px-3 space-x-4 m-0.5 flex">
        {["Filled", "Total"].map((status, index) => (
          <div
            key={index}
            className="space-x-2 flex items-center"
          >
            <b className="bg-white flex rounded-lg text-sm px-3 p-1.5 m-0.5">
              <Skeleton className="w-4 h-4" />
            </b>
            <span className="text-muted-foreground font-semibold">{status}</span>
          </div>
        ))}
      </div>
    </div>
  </>
);
