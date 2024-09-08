import { Fragment } from "react";
import User from "./user";
import UserClass from "./UserClass";
import { Component } from "react";


class AboutUs extends Component{

constructor(){
    super ()
    console.log('Parent Constructor is called')
}

componentDidMount(){
    console.log('Parent Did Mount is called')
}

render(){
    console.log('Parent Render is called')
    return <Fragment>
        <h1>About Us</h1>
        <User name={'Chandu'} age={'27'}/>
        <UserClass name={'Poorna'} age={"28"}/>
        </Fragment>
}
}

export default AboutUs;