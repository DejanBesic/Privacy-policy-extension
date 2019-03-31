import {
    XML_LOAD,
    VALIDATED
} from '../actions/types';

export const initialState = {
   xml: {},
   validated: {},
};

export default function(state = initialState, action) {
    switch(action.type){

        case XML_LOAD:
            return {
                ...state,
                xml: action.payload,
            };

        case VALIDATED:
            return {
                ...state,
                validated: action.payload
            };

        default: 
            return state;
    }
}