import { useState } from "react";
import ItemList from "./ItemList";

//! Controlled Component - showItems and setShowIndex as props
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //? To handle toggle UI
  // const [showItems, setShowItems] = useState(false);

  //? To handle toggle feature
  const handleClick = () => {
    //   //? For expanding
    //   // setShowItems(true);
    //   //? For expanding and closing
    //   setShowItems(!showItems);
    //? For expanding another item and mean while collapsing the existing expanded list in one click the above solution won't work. We need to give this power to the parent of RestaurantCategory a.k.a RestaurantMenu to control the expand-collapse toggle of multiple items in one click. For this we take showItems as props in RestaurantCategory, and not have it's own state to control the UI from
    // ! This is the concept of controlled component!!!
    setShowIndex();
  };
  
  return (
    <div>
      {/* Header Accordion  */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data?.title}({data?.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* Accordion Body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
