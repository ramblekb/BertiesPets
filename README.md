Bertie’s Pets

Berties Pets is a full stack app that loads, deletes and updates a list of pets in a database. It is a mock petstore manager allowing staff to change the status of their pets from ‘available’ ‘pending’ and ‘sold’ then saving that data in the database. This is a MERN full stack that executes CRUD operations. I built this application to be a fast and secure method of updating status and displaying data. The app simplifies updating status. It is quick, easy and does not rely on page reload. The app is a centralized record for all the pets that have been accepted into the petstore database. Building the app I learned how to use unique attributes to update an objects state. I also learned material ui’s pagination styles. This application is successful in achieving its goal with very little navigation or ui. It is also lightweight and a single component therefore easily added to other applications if you wanted. 

The app is built on Reactjs with node modules mongoose, express, react router, axios, material ui and bootstrap. When the server starts the app listens to mongodb on port 3001 and port 3000 compiles the components and displays the app. 

STEPS
Step 1) clone GitHub repository 
Step 2) npm install node modules, create package.Json locked
Step 3) start mongodb by running mongod in terminal and connect to mongodb (leave running in background)
Step 4) npm start in root directory: and you should successfully be listening to the API server running on 3001 & client should compile and display on your https localhost 3000
Step 5) click the colored button to update pet status 

---------------------------------------------
NOTES: here are some personal notes and references I compiled as I built this app. Some beginning developers may find useful. 

Components and Props
Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

Function and Class Components
The simplest way to define a component is to write a JavaScript function:
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions
You can also use an ES6 class to define a component:
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}



NamedNodeMap.getNamedItem()

The getNamedItem() method of the NamedNodeMap interface returns the Attr corresponding to the given name, or null if there is no corresponding attribute.
Syntax
myAttr = attrs.getNamedItem(name)
Copy to Clipboard
Parameters
name is the name of the desired attribute

NamedNodeMap

The NamedNodeMap interface represents a collection of Attr objects. Objects inside a NamedNodeMap are not in any particular order, unlike NodeList, although they may be accessed by an index as in an array.
A NamedNodeMap object is live and will thus be auto-updated if changes are made to its contents internally or elsewhere.
Although called NamedNodeMap, this interface doesn't deal with Node objects but with Attr objects, which were originally a specialized class of Node, and still are in some implementations.
Properties
This interface doesn't inherit any property.
NamedNodeMap.length Read only
Returns the amount of objects in the map.
Methods
This interface doesn't inherit any method.
NamedNodeMap.getNamedItem()
Returns a Attr, corresponding to the given name.
NamedNodeMap.setNamedItem()
Replaces, or adds, the Attr identified in the map by the given name.
NamedNodeMap.removeNamedItem()
Removes the Attr identified by the given map.


https://stackoverflow.com/questions/20377837/how-to-access-custom-attributes-from-event-object-in-react