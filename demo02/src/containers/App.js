import React, { Component } from 'react';
import TodoList from '../components/TodoList';
import store from '../store';
import { CHANGE_INPUT, ADD_ITEM, REMOVE_ITEM } from '../actions';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = store.getState();
		this.handleChange = this.handleChange.bind(this);
		this.updateUI = this.updateUI.bind(this);
		store.subscribe(this.updateUI);
	}
	handleChange(e) {
		store.dispatch({type: CHANGE_INPUT, text: e.target.value})
	}
	updateUI(e) {
		this.setState(store.getState());
	}
  render() {
    return(
      <TodoList
         inputValue={this.state.inputValue}
         handleChange={this.handleChange}
         list={this.state.list}
      />
    );
  }
}

export default App;