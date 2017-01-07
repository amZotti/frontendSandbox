window.React = require('react');
window.Redux = require('redux');
window.ReactDOM = require('react-dom');

const INCREMENT = Symbol('increment');
const DECREMENT = Symbol('decrement');


function reducer(state = 0, action) {
  switch (action.type) {
  case INCREMENT:
    return state + 1
  case DECREMENT:
    return state - 1
  default:
    return state
  }
}

window.store = Redux.createStore(reducer);

window.Counter = React.createClass({

    getDefaultProps: function() {
        return { count: 0 };
    },

    increment: function() {
        store.dispatch({type: INCREMENT});
    },

    decrement: function() {
        store.dispatch({type: DECREMENT});
    },

    render: function() {
        return (
                <div>
                    <h1> Count: { this.props.count }</h1>
                    <button onClick={this.increment}>Increment</button>
                    <button onClick={this.decrement}>Decrement</button>
                </div>
               );

    }

});

var root = document.getElementById('root');
ReactDOM.render(<Counter />, root);

store.subscribe(function() {
    var state = store.getState();
    ReactDOM.render(<Counter count={state}/>, root);
});
