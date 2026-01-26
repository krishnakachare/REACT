import { CDN_URL } from "../utils/constants";

// ? Restraurant Component
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;
  return (
    // To use something for which class is not present we can use the value inside [], eg.,w-[250px].
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg  hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

//? Higher order component
// Input - RestaurantCard component, Output - RestaurantCardPromoted component
export const withPromotedLabel = (RestaurantCard) => {
  // Returning a new component
  return (props) => {
    // Returning some JSX (as a component returns some JSX)
    return (
      <div>
        <label className="absolute bg-green-100 text-black m-2 p-2 rounded-lg">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
