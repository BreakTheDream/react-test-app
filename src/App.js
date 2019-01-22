import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import List from './List';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// class GroceryList extends Component {
//   render() {
//     return (
//       <ul>
//         <ListItem quantity="1" name="Bread" />
//         <ListItem quantity="6" name="Eggs" />
//         <ListItem quantity="2" name="Milk" />
//       </ul>
//     )
//   }
// }

// class ListItem extends Component {
//   render() {
//     return(
//       <li>
//         {this.props.quantity} * {this.props.name}
//       </li>
//     )
//   }
// }

// export default GroceryList;

// export default App;

class App extends Component {
    render() {
        return (
            <div className="app">
                <List taskCallbacks={this.props.taskCallbacks} id='todo' title="To Do" cards={this.props.cards.filter((card) => card.status === "todo")} />
                <List taskCallbacks={this.props.taskCallbacks} id='in-progress' title="In Progress" cards={this.props.cards.filter((card) => card.status === "in-progress")} />
                <List taskCallbacks={this.props.taskCallbacks} id='done' title="Done" cards={this.props.cards.filter((card) => card.status === "done")} />
            </div>
        );
    }
}

App.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object)
};

export default App;