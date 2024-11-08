import { Skeleton } from "@/core/components/ui/skeleton.tsx";

export const ParkingAreaCardSkeleton = () => (
  <>
    {Array.from({ length: 3 }).map((_, index) => (
      <div
        key={index}
        className="border mb-4 rounded-lg"
      >
        <div className="flex flex-col space-y-1.5 p-4">
          <h3 className="leading-none tracking-tight flex justify-between items-center">
            <Skeleton className="h-3 w-20 max-w-full" />
            <div className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full"></span>
              <span className="relative inline-flex size-2"></span>
            </div>
          </h3>
          <Skeleton className="h-3 w-[112px] max-w-full" />
        </div>
        <div className="p-4">
          <div className="flex flex-col space-y-2 justify-between">
            <div className="relative flex space-x-4 justify-between">
              <Skeleton className="h-3 w-1/2 " />
              <Skeleton className="h-3 w-1/6" />
            </div>
            <div className="relative flex space-x-4 justify-between">
              <Skeleton className="h-3 w-1/2 " />
              <Skeleton className="h-3 w-1/6" />
            </div>
          </div>
        </div>
        <div className="items-center p-4 gap-2 flex flex-col">
          <div className="w-full flex justify-between items-center">
            <label className="leading-none w-full">
              <Skeleton className="h-3 w-[48px] max-w-full" />
            </label>
            <b className="text-right">
              <Skeleton className="h-3 w-[14px] max-w-full" />
            </b>
          </div>
          <div className="w-full flex justify-between items-center">
            <label className="leading-none w-full">
              <Skeleton className="h-3 w-[120px] max-w-full" />
            </label>
            <Skeleton className="h-3 w-[14px] max-w-full" />
          </div>
        </div>
      </div>
    ))}
  </>
);
