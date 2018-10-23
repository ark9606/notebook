/**
 * Created by ARK on 23.10.2018.
 */

// Actions
export const types = {
  SET_RECORDS : 'notebook/records/set'
};

// Reducer
const reducer = (state = [], action) => {

  switch (action.type) {
    case types.SET_RECORDS:
      state = action.payload;
      break;
  }
  return state;
};
export default reducer;

// Action Creators
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export function getRecords() {
  return dispatch => {
    fetch(`/api/records`, {
      method: 'get',
      headers: myHeaders
    })
      .then(res => res.json())
      .then(res => {
        if(res.status){
          dispatch({
            type: types.SET_RECORDS,
            payload: res.data
          })
        }
        else {
          alert(res.error);
        }
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export function putRecord(params) {
  return dispatch => {
    fetch(`/api/records`, {
      method: 'put',
      headers: myHeaders,
      body: JSON.stringify(params)
    })
      .then(res => res.json())
      .then(res => {
        if(res.status){
          dispatch({
            type: types.SET_RECORDS,
            payload: res.data
          })
        }
        else {
          alert(res.error);
        }
      })
      .catch(err => {
        console.log(err);
      })
  }
}

/***
 *  Edit record
 * @param params - {id, name, phone, email}
 * @returns {function(*)}
 */
export function editRecord(params) {
  return dispatch => {
    fetch(`/api/records`, {
      method: 'post',
      headers: myHeaders,
      body: JSON.stringify(params)
    })
      .then(res => res.json())
      .then(res => {
        if(res.status){
          dispatch({
            type: types.SET_RECORDS,
            payload: res.data
          })
        }
        else {
          alert(res.error);
        }
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export function deleteRecord(params) {

  return dispatch => {
    fetch(`/api/records`, {
      method: 'delete',
      headers: myHeaders,
      body: JSON.stringify(params)
    })
      .then(res => res.json())
      .then(res => {
        if(res.status){
          dispatch({
            type: types.SET_RECORDS,
            payload: res.data
          })
        }
        else {
          alert(res.error);
        }
      })
      .catch(err => {
        console.log(err);
      })
  }
}