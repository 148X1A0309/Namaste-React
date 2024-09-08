import { useEffect, useState } from "react";

const useResList = (resId) =>{

 const [resList , setResList] = useState(null) ;


 useEffect(()=>{
    // const data 
    fetchData()
 },[])


 const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
     
    const data2 = data.json();
    setResList(data2.data)
 }

 return resList;
}

export default useResList;