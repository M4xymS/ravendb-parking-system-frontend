import { useEffect, useState } from "react";

export const useQueryParams = () => {
  const [queryParams, setQueryParams] = useState(() => {
    const search = window.location.search;
    const urlSearchParams = new URLSearchParams(search);

    return Object.fromEntries(urlSearchParams.entries());
  });

  useEffect(() => {
    const handleUrlChange = () => {
      const search = window.location.search;
      const urlSearchParams = new URLSearchParams(search);

      setQueryParams(Object.fromEntries(urlSearchParams.entries()));
    };

    window.addEventListener("popstate", handleUrlChange);
    window.addEventListener("pushstate", handleUrlChange);
    window.addEventListener("replacestate", handleUrlChange);

    return () => {
      window.removeEventListener("popstate", handleUrlChange);
      window.removeEventListener("pushstate", handleUrlChange);
      window.removeEventListener("replacestate", handleUrlChange);
    };
  }, []);

  return queryParams;
};
