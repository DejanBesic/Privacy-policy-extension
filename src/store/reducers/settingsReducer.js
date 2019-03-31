import {
    UPDATE_SETTINGS
} from '../actions/types';

export const initialState = {
   settings: {
    cookies: {
            value: 1,
            selected: true,
            subSettings: {
                session: 1,
                persistent: 1,
                third_party: 1,
            }
        },
        personal_data: {
            value: 1,
            selected: true,
            subSettings: {
                email: 1,
                address: 1,
                credentials: 1,
                contact_info: 1,
                payment_info: 1,
            }
        },
        location: {
            value: 1,
            selected: true,
            subSettings: {
                gps: 1,
                ip: 1,
                sensor_data: 1,
                nearby_info: 1,
            }
        },
        camera: {
            value: 1,
            selected: true,
            subSettings: {}
        },
        ssl: {
            value: 1,
            selected: true,
            subSettings: {}
        },
        microphone: {
            value: 1,
            selected: true,
            subSettings: {}
        },
        track_activity: {
            value: 1,
            selected: true,
            subSettings: {
                searching_terms: 1,
                content: 1,
                purchase_activity: 1,
                people: 1,
            }
        },
        javascript: {
            value: 1,
            selected: true,
            subSettings: {}
        },
        downloads: {
            value: 1,
            selected: true,
            subSettings: {}
        },
        plug_ins: {
            value: 1,
            selected: true,
            subSettings: {}
        },
    }
};

export default function(state = initialState, action) {
    switch(action.type){

        case UPDATE_SETTINGS:
            return {
                ...state,
                settings: action.payload,
            };

        default: 
            return state;
    }
}