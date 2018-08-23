import React , {Component} from 'react';
import {connect} from 'react-redux';


class ContactsShow extends Component {
    /*state = {updating : false};
    
    getSnapshotBeforeUpdate() {
       // this.setState({...this.state , updating:true});
       console.log('getSnapshotBeforeUpdate');
        return null;
      }

    componentDidUpdate(){
        console.log('componentDidUpdate');
      //  this.setState({...this.state , updating:false});
    }*/      
    
    render(){
        /*if(this.state.updating){
            return <h3>Updating contacts on the UI</h3> 
        }*/

        if(this.props.arContacts.length === 0){
            return <h3>No contacts loaded yet</h3>
        }
    
        if(this.props.error){
            return <p>Load CSV Error : {this.props.error}</p>;
        }
    
        const firstRow = this.props.arContacts[0].map((col,index) => <th key={index}>{col}</th>);    
    
        const mapFunctionElements = 
            (row,index) => <tr key={index}>
                {row.map((item,index) =><td key={index}>{item}</td>)}
            </tr>;
    
        const elements= this.props.arContacts.slice(1).map(mapFunctionElements);
    
        return <div>
        <h4>Contacts : {this.props.arContacts.length - 1}</h4>
        <table>
            <thead>
                <tr key={0}>{firstRow}</tr>
            </thead>
            <tbody>
            {elements}
            </tbody>
        </table>
        </div>;
    }
}

// --- this.props.arContacts is mapped to dispatch (redux)
const mapStateToProps = (state) => {
    return {
        arContacts : state.filter.arContacts,
        error : state.contacts.error    
    };
}
export default connect(mapStateToProps)(ContactsShow);