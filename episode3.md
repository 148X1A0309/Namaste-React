
# In the view of human's readability , JSX was introduced

- simple format in terms of React Element

- const heading = <h1>I am h1 </h1>;

- or 

- const heading = (
    <div>
    <h1>I am h2 </h1>
    </div>
)

- root.render(heading)

In order to make it more understable to the user , the syntax was changed ,internally in the way of creating paranthesis() , babel was used to make it more understandle to the react (by converting in react way)


# Component Composition
- Component composition is embedding one component into another 

# Functional and Class Based Composition

# Functional Compositon

- React Functional Component
- const Title = () =>(
    <div>
    <h1>I am h2 </h1>
    </div>
)

- Another Functional Component
- const Heading = () =>(
    <div>
    <Title/>
    <h1>I am h2 </h1>
    </div>
)

- const root = ReactDOM.createRoot(document.getElementById('root'))
 - root.render(<Heading/>);






<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Basics</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <!-- Using Html -->
    <div id="root">
    </div>

    <!-- <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
   <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script> -->
   <script type="module" src="App.js"></script>


   <!-- Using Javascript

   <script>
    var test = document.createElement('h1');
    test.innerHTML="I am test of Javascript!";

    var accessid = document.getElementById('root');
    accessid.appendChild(test);

   </script> -->

   <!-- Task1:

   create h1 only from react

   create child1 from parent

    <div class ="parent">
    <div class="child1">
        <h1>I am h1 from child div</h1>
        <h3>I am h1 from child div</h3>
    </div>
     </div>

   create child 2 from parent -->

   <!-- <div class ="parent">
    <div class="child1">
        <h1>I am h1 from child div</h1>
        <h3>I am h1 from child div</h3>
    </div>
    <div class="child2">
        <h1>I am h1 from child div</h1>
        <h3>I am h1 from child div</h3>
    </div>
   </div> -->


<!-- In React we can write like -->
   
   <!-- //Task 1
//    const heading = React.createElement('h1',{id:'heading'},'I am h1 from react');
//    const test = ReactDOM.createRoot(document.getElementById('root'));
//    test.render(heading);


   //Task 2

//    const parent = React.createElement('div',{class:'parent'},
//     React.createElement('div',{class:'child1'},
//     React.createElement('h1',{},'I am h1 from child1'),
//     React.createElement('h1',{},'I am h1 from child1')
// ))


//Task 3

// const parent = React.createElement('div',{class:'parent'},[
//     React.createElement('div',{class:'child1'},
//     React.createElement('h1',{},'I am h1 , I am back!'),
//     React.createElement('h3',{},'I am h3 , I am back!')
// ),
//      React.createElement('div',{class:'child2'},
//     React.createElement('h1',{},'I am h1 in child2!'),
//     React.createElement('h3',{},'I am h3 in child2!')
// )])

// const test = ReactDOM.createRoot(document.getElementById('root'));
// test.render(parent);



//Class 3 -->
</body>
</html>



