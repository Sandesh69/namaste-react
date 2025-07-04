import { useState } from "react";
import { LOGO_URL } from "../Utils/constant";
import { Link } from "react-router";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [login, setLogin] = useState("Login");
  const isOnline = useOnlineStatus();

  //subscribing to store using a selector
  const cartItems =useSelector((store)=>store.cart.items)

  return (
    <div className="flex justify-between bg-gray-300 shadow-lg h-40">
      <div className=" ">
        <img className="h-40 w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">isOnline: {isOnline ? "✅" : "❌"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>{" "}
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us </Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>

          <li className="px-4  font-semibold cursor-pointer"><Link to='/cart'>Cart-({cartItems.length} Items)</Link></li>
          <button
            className="login-btn"
            onClick={() => {
              login === "Login" ? setLogin("Logout") : setLogin("Login");
            }}
          >
            {" "}
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
