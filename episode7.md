# Lets Explore the Path

# Part-1 - UseEffect Dependency Concept

- UseEffect is called on every render when there is no dependency array 
- If there is dependency array is empty useEffect will render initially
- If there is dependency like data of btnName , whenever btnName will change useEffect will render


# Part 2 - Disclaimer

- We should not use the state variables inside the condition or loop kind of things 

# Part 3 - Routing

- React Router DOM used to route in react

- To install npm i react-router-dom

- createBrowserRouter is used to maintain paths and aids in recognising diff components

- RouterProvider aids in naviagting to the respective components

- React will provide a default error page if something happens , reactDom took care of it , we can make use of it by useRouteError

-By using this useRouteError we can trace the errors quickly (ref : Error.js file)

 # Part 4 - Outlet Significance in Single Page Application (SPA)

- Make the children (its a key) for AppLayout based on the route given the respective component has to be loaded

 - <Link to> is the new way of routing to respective components without rendering the whole page (replacement for <a>)

 - import necessary Link and Outlet provided things in specific components which we needed to navigate

 # Part 5 - Dynamic Routing

 