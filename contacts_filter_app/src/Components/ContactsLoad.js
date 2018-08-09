import React from 'react';
import CSVReader from "react-csv-reader";
import ActionTypes from '../Actions/ActionTypes';
import {connect} from 'react-redux' ;


function ContactsLoad(props){
    return <CSVReader
          cssClass="csv-input"
          label="Select contacts CSV file"
          onFileLoaded={props.handleFileLoaded}
          onError= {props.handleFileError}
        />;
}

const mapDispatchToProps = dispatch => {
    const contactsHandler = contacts => dispatch({
        type:ActionTypes.loadContactsFinished , 
        payload:contacts});

    const errorHandler = error => dispatch({
        type:ActionTypes.loadContactsError ,
        payload : error
    });

    return {
      // --- props.handleFileLoaded is mapped to dispatch (redux)
      handleFileLoaded :    contactsHandler,

      // --- props.handleFileError is mapped to dispatch (redux)
      handleFileError  :    errorHandler  
    };
  };

export default connect(null,mapDispatchToProps)(ContactsLoad);