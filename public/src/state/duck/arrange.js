/**
 * Created by ARK on 23.10.2018.
 */

import {types as recordsTypes} from './records';

// Actions
const ARRANGE_NAME_ASC = 'notebook/arrange/name/asc';
const ARRANGE_PHONE_ASC = 'notebook/arrange/phone/asc';
const ARRANGE_NAME_DESC = 'notebook/arrange/name/desc';
const ARRANGE_PHONE_DESC = 'notebook/arrange/phone/desc';
const ARRANGE_NAME_CLEAR = 'notebook/arrange/name/clear';
const ARRANGE_PHONE_CLEAR = 'notebook/arrange/phone/clear';

// Reducer
const initialState = {
  name: null,
  phone: null,
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ARRANGE_NAME_ASC:
      state = {
        ...state,
        name: 'asc'
      };
      break;

    case ARRANGE_PHONE_ASC:
      state = {
        ...state,
        phone: 'asc'
      };
      break;

    case ARRANGE_NAME_DESC:
      state = {
        ...state,
        name: 'desc'
      };
      break;

    case ARRANGE_PHONE_DESC:
      state = {
        ...state,
        phone: 'desc'
      };
      break;


    case ARRANGE_PHONE_CLEAR:
      state = {
        ...state,
        phone: null
      };
      break;

    case ARRANGE_NAME_CLEAR:
      state = {
        ...state,
        name: null
      };
      break;
  }
  return state;
};
export default reducer;

// Action Creators
export const arrangeName = () => (dispatch, getState) => {
  const { records, arrange } = getState();

  let sorted = [];
  if(!arrange.name || arrange.name === 'desc') {
    dispatch({type: ARRANGE_NAME_ASC});
    sorted = [...records.sort((a, b) => ('' + a.name).localeCompare(b.name))];
  }
  else {
    dispatch({type: ARRANGE_NAME_DESC});
    sorted = [...records.sort((a, b) => ('' + b.name).localeCompare(a.name))];
  }

  dispatch({type: ARRANGE_PHONE_CLEAR});

  return {
    type: recordsTypes.SET_RECORDS,
    payload: sorted
  }
};

export const arrangePhone = () => (dispatch, getState) => {
  const { records, arrange } = getState();

  let sorted = [];
  if(!arrange.phone || arrange.phone === 'desc') {
    dispatch({type: ARRANGE_PHONE_ASC});
    sorted = [...records.sort((a, b) => parseInt(a.phone) - parseInt(b.phone))];
  }
  else {
    dispatch({type: ARRANGE_PHONE_DESC});
    sorted = [...records.sort((a, b) => parseInt(b.phone) - parseInt(a.phone))];
  }

  dispatch({type: ARRANGE_NAME_CLEAR});

  return{
    type: recordsTypes.SET_RECORDS,
    payload: sorted
  }
};
