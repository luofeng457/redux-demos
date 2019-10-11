import { CHANGE_INPUT, ADD_ITEM, REMOVE_ITEM } from '../actions';

const defaultState = {
  inputValue: '',
  list: ['hhh', 'xxx']
}

export default (state=defaultState, action) => {
  let newState;
  switch (action.type) {
    case CHANGE_INPUT:
      newState = JSON.parse(JSON.stringify(state));
      newState.inputValue = action.text;
      break;
    case ADD_ITEM:
      newState = JSON.parse(JSON.stringify(state));
      newState.list.push(newState.inputValue);
      newState.inputValue = '';
      break;
    case REMOVE_ITEM:
      newState = JSON.parse(JSON.stringify(state));
      newState.list.splice(action.index, 1);
      break;
    default:
      newState = state;
      break;
  }
  return newState;
}
