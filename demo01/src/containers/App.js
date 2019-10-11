import React, { Component } from 'react';
import { getMyListAction, addItemAction, removeItemAction, changeInputAction } from '../actions'; 
import store from '../stores';
import TodoList from '../components/todoList';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = store.getState();
		this.handleInputChange = this.handleInputChange.bind(this);
		this.updateUI = this.updateUI.bind(this);
		this.handleAddItem = this.handleAddItem.bind(this);
		this.handleRmItem = this.handleRmItem.bind(this);
		store.subscribe(this.updateUI);
	}
	componentDidMount() {
		store.dispatch(getMyListAction())
	}
	handleInputChange(e) {
		store.dispatch(changeInputAction(e.target.value))
	}
	handleAddItem(e) {
		if (this.state.inputValue !== '') {
			store.dispatch(addItemAction(this.state.inputValue));
		}
	}
	handleRmItem(index, e) {
		store.dispatch(removeItemAction(index));
	}
	updateUI(e) {
		this.setState(store.getState());
	}
  render() {
    return(
      <TodoList
         inputValue={this.state.inputValue}
         handleInputChange={this.handleInputChange}
         handleAddItem={this.handleAddItem}
         list={this.state.list}
         handleRmItem={this.handleRmItem}
      />
    );
  }
}

export default App;
