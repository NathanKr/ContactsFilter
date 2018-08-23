import ActionTypes from '../Actions/ActionTypes';
import _ from 'lodash'


const initialState = {
    value : '', // value of filter inserted
    arContacts : [] // contacts after filter
};


export function getFilteredContacts(value , arContacts){
    let arFilteredContacts = [];
    
    const isInRowCaseNotSensitive =  (value,row) => {
        for (const col of row) {
            if(col.toLowerCase().indexOf(value.toLowerCase()) >= 0){
                return true;
            }
          }
        return false;          
    }

    try{
        // --- ignore the header
        arFilteredContacts = arContacts.slice(1).filter(row =>
             isInRowCaseNotSensitive(value,row));
    }
    catch (err) {
        arFilteredContacts=[];
    }

    // --- add the header
    arFilteredContacts.unshift(arContacts[0]);

    return arFilteredContacts;
}

export default function filterContactsReducer 
// --- true will filter none i.e. show all 
 (state = initialState, action) {

    switch(action.type){
        case ActionTypes.setFilter:
        state = {
            ...state , 
            value : action.payload.value,
            arContacts : getFilteredContacts(
                action.payload.value,
                action.payload.arContacts)
        };
        break;

        case ActionTypes.loadContactsFinished:
        state = {
            ...state , 
            arContacts : getFilteredContacts(
                state.value,
                action.payload)
        }
        break;

        default://do nothing
    }

    return state;
}

 