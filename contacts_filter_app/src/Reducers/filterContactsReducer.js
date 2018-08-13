import ActionTypes from '../Actions/ActionTypes';

const initialState = {
    value : '', // value of filter inserted
    arContactsFiltered : [] // contacts after filter
};

function getFilteredContacts(filterValue , arContacts){
    return arContacts ? 
            arContacts.filter(eval(filterValue)) :
            arContacts;
}

export default function filterContactsReducer 
// --- true will filter none i.e. show all 
 (state = initialState, action) {

    switch(action.type){
        case ActionTypes.setFilter:
        state = {
            ...state , 
            value : action.payload.filterValue,
            arContactsFiltered : getFilteredContacts(
                action.payload.filterValue,
                action.payload.arContacts)
        };
        break;

        default://do nothing
    }

    return state;
}

 