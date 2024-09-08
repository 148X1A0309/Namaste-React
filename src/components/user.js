import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    console.log('1st child constructor is called')
    this.state={
      name  : 'Poorna'
     }

  }

 async componentDidMount(){
  console.log('1st child didMount is called')

  const data = await fetch("https://github.com/148X1A0309")
   const testData = data.json();
   console.log(testData)

   this.setState ={
    name : data.name
   }

  }

  componentDidMount(){
    console.log('Component Did Mount is called')
  }

  componentDidUpdate(){
    console.log('Component Did Update is called')
  }  


  render() {
    console.log('1st child renderer is called')
    const {name ,age } = this.props
  return <div>
      <h1>Name : {name}</h1>
      <h3>Age :{age}</h3>
      <h3>Email:2nd@gmail.com</h3>
    </div>;
  }
}

//passing props to the function
// const User = ({ name, age }) => {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h3>{age}</h3>
//       <h3>Software Developer</h3>
//       <h3>Email:tandava0987@gmail.com</h3>
//     </div>
//   );
// };

export default User;
