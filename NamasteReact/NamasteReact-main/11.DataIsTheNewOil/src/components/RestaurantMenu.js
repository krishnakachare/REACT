import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "../components/RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  //? Using Custom Hook
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;
  const header = resInfo?.cards[2]?.card?.card?.info;
  const { name, cuisines, costForTwoMessage } = header;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (el) => {
        return (
          el.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* Categories Accordion */}
      {categories.map((el, index) => {
        return (
          // Controlled Component
          <RestaurantCategory
            key={el?.card?.card?.title}
            data={el?.card?.card}
            //? To implement accordion expand-collapse feature by controlling Restautantcategory from here. This is done by lifting the state up.
            showItems={index === showIndex ? true : false}
            //? Collapses already expanded items only if clicked on other item.
            // setShowIndex={() => setShowIndex(index)}
            //? Can collapse already expanded items if clicked on itself too.
            setShowIndex={() =>
              setShowIndex(index === showIndex ? null : index)
            }
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
