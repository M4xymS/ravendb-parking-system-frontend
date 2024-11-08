import { differenceInSeconds } from "date-fns";
import { useEffect, useState } from "react";

export const useCountdown = (endTime: Date | null) => {
  const [secondsLeft, setSecondsLeft] = useState(() =>
    endTime ? differenceInSeconds(endTime, new Date()) : 0
  );

  useEffect(() => {
    if (!endTime) return;

    const initialSeconds = differenceInSeconds(endTime, new Date());

    setSecondsLeft(Math.max(initialSeconds, 0));

    const interval = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 0) {
          clearInterval(interval);

          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  return secondsLeft;
};
