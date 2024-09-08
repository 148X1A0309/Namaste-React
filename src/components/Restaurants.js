import { useEffect, useState } from "react";
import { restaurantDetails } from "./utils/constants";
import { useParams } from "react-router-dom";
import useResList from "./utils/useResList";
import useOnelineStatus from "./utils/useOnelineStatus";
const RestaurantMenu = () =>{

// const [resList ,setresList] = useState(null);

const {resId} = useParams();

// console.log(resId)

// useEffect(()=>{
//     fetchData()
// },[])
// const fetchData= async ()=>{
//     const data = await fetch(restaurantDetails + resId)

//     const testData = await data.json();
//     console.log(testData);

//     setresList(testData?.data)
// }

const resInfo = useResList(resId)

const onlineStatus = useOnelineStatus();

if(onlineStatus === false){
    return <h1>Looks like you are disconnected !</h1> 
} 

if(resInfo === null ) {
    return <h1>Loading ....</h1>
}
 const {name ,cuisines ,costForTwo } =  resInfo?.cards[2]?.card?.card?.info;

//  const {itemsList} = 
return resInfo === null ? (<h1>Loading.....</h1>):(
     <div>
       <h1>{name}</h1>
       <h3>{cuisines.join(',')}</h3> <span>{costForTwo}</span>
        <h3>Menu</h3>
        <ul>
            <li>Burger</li> 
            <li>Biryani</li>
            <li>Chocos</li>
        </ul>
    </div>
)
}

export default RestaurantMenu;