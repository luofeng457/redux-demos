import axios from 'axios';
export const ADD_ITEM = 'addItem';
export const REMOVE_ITEM = 'removeItem';
export const CHANGE_INPUT = 'changeInput';
export const GET_LIST = 'getList';
export const GET_MY_LIST = 'getMyList';

export const getListAction = (data) => {
  return {
    type: GET_LIST,
    data
  }
}

// redux-thunk
export const getTodoList = () => {
  return (dispatch) => {
    axios.get('http://mock-api.com/rg1WrEKY.mock/list')
		.then((res) => {
      dispatch(getListAction(res))
		})
  }
}

// redux-saga
export const getMyListAction = () => {
  return {
    type: GET_MY_LIST,
  }
}

export const addItemAction = (text) => {
  return {
    type: ADD_ITEM,
    text
  }
}

export const removeItemAction = (index) => {
  return {
    type: REMOVE_ITEM,
    index
  }
}

export const changeInputAction = (text) => {
  return {
    type: CHANGE_INPUT,
    text
  }
}
