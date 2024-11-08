import { useParams } from "react-router-dom";

export const FloatingLegend = () => {
  const { areaId, floorId } = useParams();

  if (!areaId || !floorId) {
    return null;
  }

  return (
    <div className="fixed space-y-4 bottom-4 right-4">
      <h2 className="font-semibold text-right text-lg">Legend</h2>
      <div className="flex items-center justify-end gap-4">
        <span className="font-semibold text-sm">
          parking slot will be available in less than 15 minutes
        </span>
        <span className="block size-4 p-1 shadow rounded-full bg-red-200 text-white" />
      </div>
      <div className="flex items-center justify-end gap-4">
        <span className="font-semibold text-sm">
          parking slot will be available in 15-30 minutes
        </span>
        <span className="block size-4 p-1 shadow rounded-full bg-yellow-200 text-white" />
      </div>
    </div>
  );
};
