import React from 'react';
import { connect } from 'react-redux';
import { changeInputAction, addItem, removeItem } from '../actions';

const TodoList = (props) => {
  let { inputValue, list, handleChange, handleAddItem, handleRemoveItem} = props;
  return (
    <div>
      <div>
        <input
          placeholder="something to be done"
          value={inputValue}
          onChange={handleChange}
        />
        <button onClick={handleAddItem}>增加</button>
      </div>
      <ul>
        {
          list.map((item, index) => (<li key={index} onClick={handleRemoveItem.bind(null, index)}>{item}</li>))
        }
      </ul>
    </div>
  );
}
 
const mapStateToProps = (state, ownProps) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToprops = (dispatch) => {
  return {
    handleChange(e) {
      dispatch(changeInputAction(e.target.value));
    },
    handleAddItem(e) {
      dispatch(addItem())
    },
    handleRemoveItem(index, e) {
      dispatch(removeItem(index));
    }
  }
}

// const mapDispatchToprops = {
//   changeInputAction,
//   addItem,
//   removeItem
// }
 
export default connect(mapStateToProps, mapDispatchToprops)(TodoList);