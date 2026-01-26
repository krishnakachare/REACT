import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  //   console.log(useParams());

  useEffect(() => {
    fetchMenu();
  }, []);
  console.log(MENU_URL + resId);
  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    console.log("data", data);
    const json = await data.json();
    // console.log("json", json);
    const info = json?.data;
    // console.log("menu", menu);
    setResInfo(info);
  };

  if (resInfo === null) return <Shimmer />;
  const header = resInfo?.cards[2]?.card?.card?.info;
  const { name, cuisines, costForTwoMessage } = header;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {/* <li>{itemCards[0]?.card?.info?.name}</li> */}
        {itemCards.map((el) => {
          return (
            <li key={el?.card?.info?.id}>
              {el?.card?.info?.name}, {"Rs. "} {el?.card?.info?.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
