import { useEffect, useState } from "react";

export function useOnlineStatus() {
  const [isOnline, setIsOnilne] = useState(true);

  useEffect(() => {
    function handleOnline() {
      setIsOnilne(true);
    }
    function handleOffline() {
      setIsOnilne(false);
    }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return function () {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
}
