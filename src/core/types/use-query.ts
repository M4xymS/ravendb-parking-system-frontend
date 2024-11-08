import { DefinedInitialDataOptions, QueryKey } from "@tanstack/react-query";

export type useQueryOptions<TData = unknown, TError = Error> = Omit<
  DefinedInitialDataOptions<TData, TError, TData, QueryKey>,
  "queryFn" | "queryKey"
>;
