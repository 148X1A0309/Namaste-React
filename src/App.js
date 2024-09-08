import React from "react";
import ReactDOM from "react-dom/client";
import Header  from "./components/Header";
import Body from "./components/Body"
import { createBrowserRouter ,Outlet,RouterProvider ,Outlet, Link } from "react-router-dom";
import AboutUs from "./components/about";
import ContactUs from "./components/contact"
import ErrorJs from "./components/Error"
import RestaurantMenu from "./components/Restaurants";

//React Element

// Different ways of writing

// const Title1 = <h1>I am h1 from normal variable</h1>

//To embed more content(means one component into another ) it is component composition

// const Title = () =>(
//     <div>
//     <h1>I am h1 from react Element!</h1>
//     </div>
//   );

//Functional Component

// const test = 10;
// const Heading = () => (
//   <div className="container">
//   <Title/>
//   {test}
//   <h1>I am h1 from functional Component</h1>
//   </div>
// )

// Other form of writing css





// const StyleCard ={
//   backgroundColor:'#f0f0f0',
// }j

// const RestaurantCard =() =>{
//   return(
//     <div class="res-card" style={StyleCard}>
//       <h3>Meghana Foods</h3>
//     </div>
//   )
// }

const AppLayout = () =>{
  return (
  <div className="app">
    <Header></Header>
    <Outlet/>
  </div>
)}

const appRouter = createBrowserRouter([
  {
     path:"/",
     element:<AppLayout/>,
     children :[ 
      {
        path:"/",
        element:<Body/>
     }, 
    {
      path:"/about",
      element:<AboutUs></AboutUs>
   },
   {
     path:"/contact",
     element:<ContactUs/>
  },
    {
    path:"/restaurant/:resId",
    element:<RestaurantMenu/>
    },
   ],
     errorElement : <ErrorJs/>  
  }, 
])
  

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}></RouterProvider>);




