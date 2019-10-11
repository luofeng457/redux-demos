import { CHANGE_INPUT, ADD_ITEM, REMOVE_ITEM } from '../actions';

const defaultState = {
  inputValue: '',
  list: [
    '8点起床',
    '9点工作',
    '6点下班'
  ]
}
export default (state=defaultState, action) => {
  let newState;
  switch (action.type) {
    case CHANGE_INPUT:
      newState = JSON.parse(JSON.stringify(state));
      newState.inputValue = action.text;
      break;
  
    default:
      break;
  }
  return newState;
}