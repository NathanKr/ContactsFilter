import React from 'react';
import {connect} from 'react-redux';

/* 

*/

function ContactsShow(props){
    if(props.arContacts.length === 0){
        return <h3>No contacts loaded yet</h3>
    }

    if(props.error){
        return <p>Load CSV Error : {props.error}</p>;
    }

    const firstRow = props.arContacts[0].map((col,index) => <th key={index}>{col}</th>);    

    const mapFunctionElements = 
        (row,index) => <tr key={index}>
            {row.map((item,index) =><td key={index}>{item}</td>)}
        </tr>;

    const elements= props.arContacts.slice(1).map(mapFunctionElements);

    return <table>
        <thead>
            <tr key={0}>{firstRow}</tr>
        </thead>
        <tbody>
        {elements}
        </tbody>
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