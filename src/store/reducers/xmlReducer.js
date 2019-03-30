import {
    XML_LOAD
} from '../actions/types';

export const initialState = {
   xml: {},
};

export default function(state = initialState, action) {
    switch(action.type){

        case XML_LOAD:
            return {
                ...state,
                xml: action.payload,
            };

        default: 
            return state;
    }
}