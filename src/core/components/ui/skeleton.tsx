import { cn } from "@/core/helpers";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-live="polite"
      aria-busy="true"
      className={cn("h-2", className)}
      {...props}
    >
      <span className="inline-flex w-full h-full animate-pulse select-none rounded-md bg-gray-300 leading-none" />
      <br />
    </div>
  );
}

function SVGSkeleton({ className, ...props }: React.HTMLAttributes<SVGElement>) {
  return (
    <svg
      aria-live="polite"
      aria-busy="true"
      className={className}
      {...props}
    >
      <span className="inline-flex w-full size-2 animate-pulse select-none rounded-md bg-gray-300 leading-none" />
      <br />
    </svg>
  );
}

export { Skeleton, SVGSkeleton };
