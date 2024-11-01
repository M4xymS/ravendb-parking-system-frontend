export const StatusDisplay = () => {
  const statuses = [
    {
      value: 12,
      label: "Filled",
    },
    {
      value: 36,
      label: "Empty",
    },
  ];

  return (
    <div className="bg-neutral-100 rounded-2xl p-3 space-x-4 m-0.5 flex">
      {statuses.map((status, index) => (
        <div
          key={index}
          className="space-x-2"
        >
          <b className="bg-white rounded-lg text-sm px-3 p-1.5 m-0.5">{status.value}</b>
          <span className="text-muted-foreground font-semibold">{status.label}</span>
        </div>
      ))}
    </div>
  );
};
