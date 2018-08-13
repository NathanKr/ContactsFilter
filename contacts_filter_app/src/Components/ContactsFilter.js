import React from 'react';
import {connect} from 'react-redux';
import ActionTypes from '../Actions/ActionTypes';


function ContactsFilter(props){
    return <div className='contacts-filter'>
        <p>Contacts Filter</p>
        <input onChange={
            evt => props.changeHandler(evt.target.value, props.arContacts)
        }
               type='text'/>
        </div>;
}

const mapDispatchToProps = (dispatch) =>{
    return {changeHandler : (filterValue,arContacts) => dispatch({
        type : ActionTypes.setFilter,
        payload : { 
            filterValue : filterValue ,
            arContacts : arContacts}
    })};
}

const mapStateToProps = (state) => {
    return {arContacts : state.arContacts}
};


export default connect(mapStateToProps,mapDispatchToProps)(ContactsFilter);