import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import RestaurantCard, {
  withPromotedLabel,
} from "../components/RestaurantCard";
import Shimmer from "./Shimmer";
import { RES_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

//? Body Component
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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

  const { loggedInUser, setUserName } = useContext(UserContext);

  //? Conditional Rendering: Rendering on the basis of condition.
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            data-testid = "searchInput"
            type="text"
            className="border border-solid border-black"
            placeholder="Search Restaurant..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              setFilteredRestaurant(searchRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              setFilteredRestaurant(topRestaurants);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>User Name: </label>
          <input
            className="border border-black p-2"
            placeholder="Update the User Name"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((el) => {
          return (
            <Link to={"/restaurants/" + el?.info?.id} key={el?.info?.id}>
              {/* If restaurant is promoted show label */}
              {el?.info?.isOpen ? (
                <RestaurantCardPromoted resData={el} />
              ) : (
                <RestaurantCard resData={el} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
