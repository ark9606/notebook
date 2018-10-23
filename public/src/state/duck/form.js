/**
 * Created by ARK on 23.10.2018.
 */

// Actions
export const types = {
  FORM_INPUT  : 'notebook/form/input',
  FORM_RESET  : 'notebook/form/reset',
  FORM_SET    : 'notebook/form/set'
};

// Reducer
const initialState = {
  id: -1,
  name: '',
  phone: '',
  email: ''
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case types.FORM_INPUT:
      state = {
        ...state,
        [action.payload.name]: action.payload.value
      };
      break;

    case types.FORM_SET:
      state = action.payload;
      break;

    case types.FORM_RESET:
      state = initialState;
      break;
  }
  return state;
};
export default reducer;

// Action Creators
export const input = (params) =>({
  type: types.FORM_INPUT,
  payload: params
});

export const set = (params) =>({
  type: types.FORM_SET,
  payload: params
});

export const reset = () =>({
  type: types.FORM_RESET,
});


