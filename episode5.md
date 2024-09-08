# Structure to maintain

# Maintain Components

All should be in the src folder


# Main page is as it is index.html 

# Then the App.js 

# The files which are dependent on each other using export and import 

# There are two types of exports --> named and default

--> Eg: import {cdn_url} from 'path'

Default 

Eg : import RestaurantCard from 'path'

# React Hooks

# These are normal javascript utility functions

//These are pre-built functions by react itself

- Developed by Facebook developers

//Mainly there are two hooks :

//use State and use Effect 

- useState() - superState variable 

- useEffect()

- whenever the state variable changes react rerenders the component



# How react re-renders the UI ?

- In react 16 , a new algorithm came called react fibre/react reconcilation alogirthm

- Assume when a button is clicked it will find out the differences between old virtual dom and new updated virtual dom and rerender the component

- It is like finding out the differences between the two objects (It is nothing but DOM (tree))

- The reconciler does the work of computing which parts of a tree have changed; the renderer then uses that information to actually update the rendered app.







