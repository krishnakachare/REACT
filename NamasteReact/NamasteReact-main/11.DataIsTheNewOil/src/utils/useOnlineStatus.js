import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  // Update UI
  const [onlineStatus, setOnlineStatus] = useState(true);

  // Check if user is online
  useEffect(() => {
    checkStatus();
  }, []);

  const checkStatus = () => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  };

  // Boolean value
  return onlineStatus;
};

export default useOnlineStatus;
