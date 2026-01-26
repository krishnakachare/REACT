import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  //? Using Custom Hook
  const resInfo = useRestaurantMenu(resId);

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
        {itemCards.map((el) => {
          return (
            <li key={el?.card?.info?.id}>
              {el?.card?.info?.name}, {"Rs. "}{" "}
              {el?.card?.info?.price / 100 ||
                el?.card?.info?.defaultPrice / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
