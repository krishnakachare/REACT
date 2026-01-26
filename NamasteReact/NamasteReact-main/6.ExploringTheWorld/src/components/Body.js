import RestaurantCard from "../components/Restaurant";
// Dummy Data
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

//? Body Component
const Body = () => {
  console.log(
    "Body Component Rendered initially and Re-Rendered at every key press on Search Bar!!!"
  );

  // const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const topRestaurants = listOfRestaurants.filter((el) => {
    // return el.data.avgRating > 4;
    return el?.info?.avgRating > 4.5;
  });

  const searchRestaurants = listOfRestaurants.filter((el) => {
    return el?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase());
  });

  //? The two parameter in useEffect are first one is a callback function and a dependency array. The callback function is called after the component is rendered.
  useEffect(() => {
    //* This callback function is called after the component renders */
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://swiggy-api-4c740.web.app/swiggy-api.json"
    );
    // "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5743545&lng=88.3628734&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // https://corsproxy.io/? This can also be used to bypass CORS error
    const json = await data.json();
    // console.log("JSON", json);
    // console.log(
    //   json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    const restraunt =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    // To display data at initial load
    setListOfRestaurants(restraunt);
    // Updating the below so that the original list remains intact even if filter is applied.
    setFilteredRestaurant(restraunt);
  };

  //? Conditional Rendering: Rendering on the basis of condition.
  if (listOfRestaurants.length === 0) {
    // ! Using Loader/Spinner is not a good UX use Shimmer UI instead
    // return <h1>Loading... </h1>;
    return <Shimmer />;
  }

  // We can also implement conditional rendering using tenary operator
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search Restaurant..."
            value={searchText}
            //* The value of value (i.e., searchText) is not getting changed it is still "", that we initially defined. So any change is not going to work inside Component without using onChange and then to display on UI need to use useState so we are using it here to set the value as current value (whatever we type in search bar).*/
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // console.log("Search Text", searchText);
              // setListOfRestaurants(searchRestaurants);
              //* To get rid of a bug where if we search twice without refreshing we get empty, we need to maintain a seperate state and render from them, so above setListOfRestaurants(filteredRestaurant) won't work. Also need to change listOfRestaurants to filteredRestaurant while returning JSX.
              setFilteredRestaurant(searchRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // setListOfRestaurants(topRestaurants);
            setFilteredRestaurant(topRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* {listOfRestaurants.map((el) => { */}
        {filteredRestaurant.map((el) => {
          return (
            <RestaurantCard
              // key={el.data.id}
              key={el.info.id}
              resData={el}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;

//* Two ways of api call and render
//* 1. Loads --> api call --> render
//* 2. Loads --> render (the skeleton) --> api call --> re-render. This approach is always better as it gives better UX.

//? Whenever state variables updates, react triggers a reconciliation cycle(re-renders the whole component) but only updates the local state (by finding diffrence between older Virtual DOM and newer Virtual DOM) and re-renders the component.
