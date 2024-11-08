export const productionUrl =
  process.env.NODE_ENV === "production"
    ? "https://p01--ravendb-parking-system--q85drc78fz2z.code.run"
    : "http://localhost:3000";
