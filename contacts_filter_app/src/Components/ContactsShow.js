import React from 'react';
import {connect} from 'react-redux';

function ContactsShow(props){
    if(props.arContacts.length == 0){
        return <h3>No contacts loaded yet</h3>
    }

    if(props.error){
        return <p>Load CSV Error : {props.error}</p>;
    }

    const firstRow = props.arContacts[0].map(col => <th>{col}</th>);    

    const mapFunctionElements = 
        row => <tr>{row.map(item =><td>{item}</td>)}</tr>;

    const elements= props.arContacts.slice(1).map(mapFunctionElements);

    return <table>
        <tr>{firstRow}</tr>
        {elements}
    </table>;
}

// --- props.arContacts is mapped to dispatch (redux)
const mapStateToProps = (state) => {
    return {
        arContacts : state.contacts.arContacts,
        error : state.contacts.error    
    };
}
export default connect(mapStateToProps)(ContactsShow);