import RestaurantCard from "./RestaurantCard";
import {resList} from "./utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Body = () =>{

//Local State Variable - Super Powerful Variable 
  const [listofresList,setListOfRestaurants] = useState(resList)
  const [filteredRestaurants, setfilteredRestaurants] = useState([])
  const [searchText , setSearchText] = useState('');


//   - UseEffect is called on every render when there is no dependency array 
// - If there is dependency array is empty useEffect will render initially
// - If there is dependency like data of btnName , whenever btnName will change useEffect will render

  useEffect(()=>{
    console.log('UI is rendered')
    fetchData();
  const timer = setInterval(()=>{
      console.log('Use State')
    })

    return(()=>{
     clearInterval(timer)
     console.log('ClearTimer Prevented the timeInterval')
    })
  },[])

  console.log('Body is rendered');

  const fetchData = async () =>{
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // )

    // const json = data.json();

    // console.log(json)
    setfilteredRestaurants(resList)
  }
    return (listofresList === 0 ) ? <h1>Loading...</h1> : (
      <div className="body">
        <div className="search">
        </div>
        <div className="filter">
          <div className="search">
              <input type="search" value={searchText} onChange={(e)=>{
                setSearchText(e.target.value)
              }}></input>
              <button type="submit" onClick={()=>{
                const filteredRestaurants = listofresList.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setfilteredRestaurants(filteredRestaurants)
              }}>Search</button>
          </div>
          <button className="filter-btn" onClick={()=>{
             const filterLogic = listofresList.filter((res)=>{
              return  res.info && res.info.avgRating > 4.2
             })
             console.log(filterLogic)
             setListOfRestaurants(filterLogic)
          }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
       {filteredRestaurants.map((res)=>(
        <Link key={res.info.id}>
        <RestaurantCard resData={res} />  </Link>))}
        </div>
      </div>
    )
  }

  export default Body;