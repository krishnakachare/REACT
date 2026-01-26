import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  //? Modifying Cart slice using dispatch and action
  const handleAddItem = (item) => {
    // dispatch an action
    //? Steps: dispatch --> dispatches an action (addItem) --> it takes the payload as argument (we used in cartSlice while creating this action)
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((el) => {
        return (
          <div
            key={el?.card?.info?.id}
            className="p-2 m-2 border-b-1 border-gray-200 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{el?.card?.info?.name}</span>
                <span>
                  {" - ₹ "}
                  {el?.card?.info?.price / 100 ||
                    el?.card?.info?.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{el?.card?.info?.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button
                  className="p-2 bg-black text-white shadow-lg mx-16 rounded-lg"
                  onClick={() => handleAddItem(el)}
                >
                  Add +
                </button>
              </div>
              <img src={CDN_URL + el?.card?.info?.imageId} className="w-full" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;

//! Difference between the below
// ? onClick={() => handleAddItem(el)} // Ensures handleAddItem(el) runs only on click, not during rendering.
//? onClick={handleAddItem} // handleAddItem will be called when the button is clicked, and it automatically receives the event object (event).
// ? onClick={handleAddItem(el)} // handleAddItem(el) executes immediately when the component renders, not when the button is clicked.
