import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./ItemList";
import { clearCart } from "../Utils/cartSlice";

const Cart=()=>{

    const cartItems=useSelector((store)=>store.cart.items)
    const dispatch=useDispatch()
    const handleClearCart=()=>{
        dispatch(clearCart())
    }

    return(
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-2xl"> Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="m-1 p-2 bg-gray-500 text-white hover:bg-black hover:text-white rounded-md" onClick={handleClearCart}>Clear Cart</button>
                <Itemlist items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;