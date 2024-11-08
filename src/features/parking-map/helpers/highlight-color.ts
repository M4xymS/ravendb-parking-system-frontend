export const getHighlightColor = (secondsLeft: number) => {
  if (secondsLeft <= 0) return "";

  if (secondsLeft < 900) return "bg-red-200"; // Less than 15 minutes

  if (secondsLeft >= 900 && secondsLeft < 1800) return "bg-yellow-200"; // 15-30 minutes

  return "";
};
