type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export const makeHttpRequest = async <T = undefined, K = unknown>(
  url: string,
  method: HttpMethod = "GET",
  body?: T
): Promise<K> => {
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Error making ${method} request to ${url}`);
  }

  return response.json();
};
