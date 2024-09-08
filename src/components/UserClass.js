import React from "react"

class User extends React.Component{

    constructor(props){
        super(props)
        console.log(props)

        this.state = {
            count :0
        }
        console.log("2nd Child Constructor")
    }


componentDidMount(){
console.log('2nd Child DidMount is called')
}

render(){
    console.log("2nd Child Renderer")
    const {name , age} = this.props;
    const {count} = this.state;
    return <div>
        <h1>Count : {count}</h1>
        <button type="submit" onClick={()=>{
            this.setState({count : this.state.count + 1})
        }}>Increment</button>
        <h1>Name : {name}</h1>
        <h2>Designation : Software Developer</h2>
        <h3>age: {age}</h3>
    </div>
}

}

export default User;