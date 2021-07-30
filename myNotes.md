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

