import { FC } from "react";
import { Loader2 } from "lucide-react";

import { cn } from "@/core/helpers";

interface LoadingSpinnerProps {
  className?: string;
}

export const LoadingSpinner: FC<LoadingSpinnerProps> = ({ className }) => {
  return <Loader2 className={cn("animate-spin", className)} />;
};
