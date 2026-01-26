import RestaurantCard from "../components/Restaurant";
import resList from "../utils/mockData";
import { useState } from "react"; //* Named import

//? Body Component
const Body = () => {
  //? State Variable: Maintains the state of the component
  const [listOfRestaurants, setListOfRestaurants] = useState(resList); //* resList here is the default value.

  // * State variable can also be written as below, as useState at the end of the day returns an array!
  // ? const arr = useState(resList); 
  // ? const [listOfRestaurants, setListOfRestaurants] = arr;
  // * OR
  // ? const arr = useState(resList);
  // ? const listOfRestaurants = arr[0];
  // ? const setListOfRestaurants = arr[1];

  const topRestaurants = listOfRestaurants.filter((el) => {
    return el.data.avgRating > 4;
  });

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // console.log("Button Clicked");
            // console.log(topRestaurants);
            setListOfRestaurants(topRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((el) => {
          return <RestaurantCard key={el.data.id} resData={el} />;
        })}
      </div>
    </div>
  );
};

export default Body;

//* Whenever a state variable updates/changes, React re-renders the component.
//* Finding diff between two HTML code is tough while finding out diff between two object is fast, so virtual dom (dom) in react makes it fast.
