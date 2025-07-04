import Itemlist from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowAccordion }) => {
    const handleToggle=()=>{
        setShowAccordion()
    }
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleToggle}
        >
          <span className="font-semibold  text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>↓</span>
        </div>
        {showItems && <Itemlist items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
