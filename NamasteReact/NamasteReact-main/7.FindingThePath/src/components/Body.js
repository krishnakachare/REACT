import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "../components/Restaurant";
import Shimmer from "./Shimmer";

//? Body Component
const Body = () => {
  console.log(
    "Body Component Rendered initially and Re-Rendered at every key press on Search Bar!!!"
  );

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const topRestaurants = listOfRestaurants.filter((el) => {
    return el?.info?.avgRating > 4.5;
  });

  const searchRestaurants = listOfRestaurants.filter((el) => {
    return el?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase());
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://swiggy-api-4c740.web.app/swiggy-api.json"
      // "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5743545&lng=88.3628734&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    const restraunt =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurants(restraunt);
    setFilteredRestaurant(restraunt);
  };

  //? Conditional Rendering: Rendering on the basis of condition.
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
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setFilteredRestaurant(searchRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredRestaurant(topRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((el) => {
          return (
            <Link to={"/restaurants/" + el?.info?.id} key={el?.info?.id}>
              <RestaurantCard resData={el} />;
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
