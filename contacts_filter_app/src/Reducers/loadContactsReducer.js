import ActionTypes from './../Actions/ActionTypes';

const initialState = {
    //not supported by CSVReader ->loading : false ,
    arContacts : [],//each item in array is csv row array
    loaded : false,
    error : ''};

export default function loadContactsReducer (state = initialState,action){
    switch(action.type){

        case ActionTypes.loadContactsFinished:
        state = {   ...state ,  arContacts: action.payload,
                    loaded:true ,error:''};
        break;

        case ActionTypes.loadContactsError:
        state = {   ...state , arContacts: []  ,loaded : false, 
                    error:action.payload}
        break;

        /* not supported by CSVReader
       case ActionTypes.loadContactsStart:
        state = {loading:true ,loaded:false,error:'' ,...state};
        break;*/

        default://do nothing
    }

    return state;
}