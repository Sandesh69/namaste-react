import { useDispatch } from "react-redux";
import { CDN_URL } from "../Utils/constant";
import { addItem } from "../Utils/cartSlice";

const Itemlist = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items?.map((item) => (
        <div
          data-testid="item-card"
          key={item?.card?.info?.id}
          className="p-2 m-2 border-b-2 border-b-gray-200 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span> ₹ {item?.card?.info?.price / 100}</span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute ">
              <button
                className="bg-white rounded-md p-2 mx-10  my-25 text-green-500 shadow-lg cursor-pointer hover:bg-green-500 hover:text-white"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              className="w-full h-30"
              src={CDN_URL + item?.card?.info?.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itemlist;
