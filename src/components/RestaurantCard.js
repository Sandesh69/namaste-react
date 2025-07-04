import { CDN_URL } from "../Utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;

  return (
    <div
      data-testid="res-card"
      className="m-4 p-4 w-[250px] bg-gray-100 rounded-xl shadow-lg hover:bg-gray-200 h-120"
    >
      <img
        alt="res-logo"
        className="rounded-md"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating} Stars</h5>
      <h5>{costForTwo}</h5>
      <h5>{sla.deliveryTime}- minutes</h5>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-balck text-white m-2 p-2 rounded-lg">
          {" "}
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
