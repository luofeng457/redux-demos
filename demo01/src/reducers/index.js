import { ADD_ITEM, REMOVE_ITEM, CHANGE_INPUT, GET_LIST } from '../actions';

const defaultState = {
  inputValue: '',
  list: []
};
export default (state=defaultState, action) => {
  let newState;
  switch (action.type) {
    case GET_LIST:
      newState = JSON.parse(JSON.stringify(state));
      newState.list = action.data.data.list;
      break;
    case ADD_ITEM:
      newState = JSON.parse(JSON.stringify(state));
      newState.list.push(action.text);
      newState.inputValue = '';
      break;
    case REMOVE_ITEM:
      newState= JSON.parse(JSON.stringify(state));
      newState.list.splice(action.index, 1);
      break;
    case CHANGE_INPUT:
      newState = JSON.parse(JSON.stringify(state));
      newState.inputValue = action.text;
      break;
    default:
      newState = state;
      break;
  }
  return newState;
}