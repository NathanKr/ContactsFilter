import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import ActionTypes from '../Actions/ActionTypes';

function ContactsFilter(props){
    return <div className='contacts-filter'>
        <h4>Contacts Filter (case not sensitive)</h4>
        <input onChange={
            evt => props.changeHandler(evt.target.value, props.arContacts)
        }
               type='text' defaultValue={props.value}/>
        </div>;
}

const mapDispatchToProps = dispatch =>{
    const funcToDebounce =  (value,arContacts) => 
    dispatch({
        type : ActionTypes.setFilter,
        payload : { 
            value : value ,
            arContacts : arContacts}
    });

    return {changeHandler : _.debounce(funcToDebounce,700)};
}

const mapStateToProps = (state) => {
    return {
        arContacts : state.contacts.arContacts,
        value : state.filter.value
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(ContactsFilter);