const RestaurantCard =(props) =>{
    //     console.log(props.info)
    //   const {cloudinaryImageId , badges ,name , cuisines , avgRating , sla} = props.info; 
    const { info } = props.resData || {};
    console.log(props.resData);
    const {
      cloudinaryImageId,
      badges,
      name,
      cuisines,
      avgRating,
      sla
    } = info || {};
     
    if (!info) {
      return <div>Loading...</div>;
    }
      return(
        <div className="res-card" style={{backgroundColor: '#f0f0f0'}}>
        {/* <p>{badges}</p> */}
        <img className="res-logo" alt="res-logo" src={`${cloudinaryImageId}${badges.imageBadges && badges?.imageBadges[0]?.imageId}`} />
          <h3 className="res-name">{name}</h3>
          <h4>{cuisines.join(',')}</h4>
          <p>{avgRating}</p>
          <p>{sla.deliveryTime}</p>
        </div>
      )
    }




    
// const fetchData= async ()=>{
//   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

//   const testData = await data.json();
//   console.log(testData);

//   setresList(testData?.data)
// }

// if(resList === null ) {
//   return <h1>Loading ....</h1>
// }
// const {name ,cuisines ,costForTwo } =  resList?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0].info
// return resList === null ? (<h1>Loading.....</h1>):(
//    <div>
//      <h1>{name}</h1>
//      <h3>{cuisines.join(',')}</h3> <span>{costForTwo}</span>
//       <h3>Menu</h3>
//       <ul>
//           <li>Burger</li> 
//           <li>Biryani</li>
//           <li>Chocos</li>
//       </ul>
//   </div>
// )
// }

  export default RestaurantCard;