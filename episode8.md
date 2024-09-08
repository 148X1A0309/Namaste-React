# Part-1 - Differences between classBased and Function Based Components

- Class Based  Components use render and super functions

- render is used to process data in react

- super is used to tell that the component which we created is the child of the parent class ie React.Component

- this refers to the instance of the class ,in order to access properties and methods in class we need 'this' keyword


# Part-2 - Using this.state to maintain the state 

- this.state in class provides an object where we can utilise the variable and update it similar to useState in the functionalComponent

# Part-3 - Using SetState to update the state of the varaible

- Never update state variable directly , like setState function we used to write in the useState , we need to use setState to update the state variable when an action occurs/any other business logic


# Part 4 - ComponentDidMount Significance

-  ComponnetDidMount as the name significes that it will be called when the component DOM is loaded fully

- Genrally it is used to make api calls after the DOM is loaded in browser , so that there will be no conflicts 


# Part 5 - Updating multiple Components 

- As we load multiple Components in the parent using class based Components 

- The heirarchy is as below 

- constructor , render , componentDidInstance 

- suppose in the parent we have 2 childs for Eg :

- Parent Constructor 
- Parent render 
- 1st Child Constructor 
- 1st child render 
- 2nd child constructor 
- 2nd child render

- The above calls are in the react phase 

- In Order to load the dom takes a lot of time and its expensive so , after loading the childs 

- 1st child componentDidMount

- 2nd child componntDidMount 

- The above calls are in commit phase

- Parent DidMount will be called

- Refer https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ for better understanding


# Part -6 - Dive Deeper of Life Cycle Hooks

- The order of react updating the dom in the components is as follows :

- Constructor

- Rendering

- DOM updation

- Component Did Mount

- setState

- DOM updation

- Component DidUpdate

- Whenever leaving the page unmounting is necessary as setTimeout or setIntervals make the application gets stuck . As React is a single page application , previously in the class based components everything has to be written in the life cycle hooks based on the logic . 

- In order to remove unsubsribe like in the angular in the Component WillMount 

- In Functional Components we know that useEffect will be called based on the empty array or any other variable 

- In order to clear the data we need to use we need to use return 

Eg : In Functional Components 

//Body Component

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

  //For Class Based Components



  In ComponentWillMounting 

  - We have to unsubscribe I mean we need to clearInterval









