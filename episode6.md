# Monolith Approach

- In the project all kind of things like UI , Auth , DB etc ----> It is nothing but the microservice architecture

- These services need to communicate with other microservices

- Each microservice will work on different ports and it is about to deploy then they all-together will share the same domain name 

- React follows client side rendering

- As soon as the application opens we will show the UI of whatever we have and then call api and then rerender the UI 


# Hooks 

- Hook is a normal js function given by react 


- useEffect

- syntax : 

- useEffect(()=>{
//piece of logic
},[])

- useEffect will be called whenever the UI rerender


- CORS Policy is nothing but browsers dint allow one api to call from one origin to another (swiggy to localhost)

- whenever state variables updates react triggers a reconcilation cycle (rerenders the component)

- who will code slow will get less time for debugging viceversa