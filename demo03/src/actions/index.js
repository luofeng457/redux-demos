export const CHANGE_INPUT = 'changeInput';
export const ADD_ITEM = 'add_item';
export const REMOVE_ITEM = 'remove_item';

export const changeInputAction = text => ({
  type: CHANGE_INPUT,
  text
 })

 export const addItem = () => ({
   type: ADD_ITEM,
 })

 export const removeItem = index => ({
   type: REMOVE_ITEM,
   index
 })