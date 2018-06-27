var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={['Cucumber', 'Kale']}/>
  </div>
);
/*
var TodoList = (props) => {

  // This function will be called when the first `<li>` below is clicked on
  // Notice that event handling functions receive an `event` object
  // We want to define it where it has access to `props`

  var onListItemClick = (event) => {
    console.log('I got clicked');
  };

  // Because we used curly braces with this arrow function
  // we have to write an explicit `return` statement
  return (
    <ul>
      <li onClick={onListItemClick}>{props.todos[0]}</li>
      <li>{props.todos[1]}</li>
      <li>{props.todos[2]}</li>
    </ul>
  );
}
*/

var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }
  onListItemEnter() {
    this.setState({
      done: !this.state.done
    });
  }
 
    render() {
      var style = {
        fontWeight: this.state.done? 'bold' : 'normal'
      };
      return (
        <li style={style} onMouseEnter={this.onListItemEnter.bind(this)} onMouseLeave={this.onListItemEnter.bind(this)}>{this.props.item}</li>
        
      );
    }
}
ReactDOM.render(<App />, document.getElementById("app"))





