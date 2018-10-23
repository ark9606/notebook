import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// this will import only needed functions, but '* as recordsActions' - also default func, types...
import {getRecords, putRecord, deleteRecord, editRecord} from '../../state/duck/records';
import {arrangeName, arrangePhone} from '../../state/duck/arrange';
import {input, reset, set} from '../../state/duck/form';

import Record from '../components/Record';
import RecordContainer from '../components/RecordContainer';
import Header from '../components/Header';

import '../assets/styles.sass';

class App extends Component {
  constructor(props){
    super(props);

    // returns Action Creators, wrapped id 'dispatch'
    this.boundActionCreators = bindActionCreators({ input, reset, set,
                                                    getRecords, putRecord, deleteRecord, editRecord,
                                                    arrangeName, arrangePhone }, props.dispatch);
  }

  componentDidMount(){

    this.boundActionCreators.getRecords();

    // this.props.dispatch(getRecords());

    // this.props.getRecords();
  }

  render(){
    const { records, form, arrange,
      /* input, reset, set,
      arrangeName, arrangePhone,
      putRecord, deleteRecord, editRecord */ } = this.props;

    const { input, reset, set,
       arrangeName, arrangePhone,
       putRecord, deleteRecord, editRecord } = this.boundActionCreators;

    return(
      <div>
        <Header {...form}
                input={input} reset={reset}
                putRecord={putRecord} editRecord={editRecord}/>

        <RecordContainer arrangeName={arrangeName} arrangePhone={arrangePhone} arrange={arrange}>
          {
            records.map((record, index) => <Record {...record} key={record.id}
                                                   even={(index +1) % 2 === 0}
                                                   onDelete={deleteRecord}
                                                   onEdit={set}/>)
          }
        </RecordContainer>
      </div>
    )
  }
}

const mapStateToProps = state  => (state);

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // Form
//     input: (params) => {
//       dispatch(input(params));
//     },
//     set: (params) => {
//       dispatch(set(params));
//     },
//     reset: () => {
//       dispatch(reset());
//     },
//
//     // Records
//     getRecords: () => {
//       dispatch(getRecords());
//     },
//     putRecord: (params) => {
//       dispatch(putRecord(params));
//     },
//     editRecord: (params) => {
//       dispatch(editRecord(params));
//     },
//     deleteRecord: (params) => {
//       dispatch(deleteRecord(params));
//     },
//     // Arrangement of records
//     arrangeName: () => {
//       dispatch(arrangeName());
//     },
//     arrangePhone: () => {
//       dispatch(arrangePhone());
//     },
//   };
// };

export default connect(mapStateToProps)(App);