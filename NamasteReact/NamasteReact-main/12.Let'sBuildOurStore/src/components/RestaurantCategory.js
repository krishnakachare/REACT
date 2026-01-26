import { useState } from "react";
import ItemList from "./ItemList";

//! Controlled Component - showItems and setShowIndex as props
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //? To handle toggle UI
  // const [showItems, setShowItems] = useState(false);

  //? To handle toggle feature
  const handleClick = () => {
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
