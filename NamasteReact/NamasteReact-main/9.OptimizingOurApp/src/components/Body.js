import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "../components/Restaurant";
import Shimmer from "./Shimmer";
import { RES_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

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
    const data = await fetch(RES_URL);

    const json = await data.json();

    const restraunt =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurants(restraunt);
    setFilteredRestaurant(restraunt);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline, please check your internet connection</h1>
    );

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
