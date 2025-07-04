import { useEffect, useState } from "react"
import { MENU_API_URL } from "./constant";

const useRestaurantMenu=(resId)=>{
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async()=>{
        const resData=await fetch(`${MENU_API_URL}${resId}`);
        const json= await resData.json()
        setResInfo(json.data)

    }

    return resInfo;
}

export default useRestaurantMenu;