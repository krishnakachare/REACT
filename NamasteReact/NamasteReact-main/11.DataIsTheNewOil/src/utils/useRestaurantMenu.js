import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";

//? Creating Custom Hook
// Taking resId as param because we need resId from the caller i.e., RestuarantMenu.js
const useRestaurantMenu = (resId) => {
  // Update UI
  const [resInfo, setResInfo] = useState(null);

  // Fetch data
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    const info = json?.data;
    setResInfo(info);
  };
  return resInfo;
};

export default useRestaurantMenu;
