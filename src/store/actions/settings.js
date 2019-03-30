import { UPDATE_SETTINGS } from './types';

export const updateSettings = (payload) =>
    ({ payload: payload, type: UPDATE_SETTINGS })

export const onUpdateSettings = (option, value) => (dispatch, getState) => {
    let settings = Object.assign({}, getState().settings.settings);
    settings[option].value = value;
    settings[option].selected = true;
    for (let k in settings[option].subSettings){
        settings[option].subSettings[k] = value;
    }
    dispatch(updateSettings(settings));
}

export const onUpdateSubSettings = (parent, option, value) => (dispatch, getState) => {
    let settings = Object.assign({}, getState().settings.settings);
    settings[parent].selected = false;
    settings[parent].subSettings[option] = value;
    dispatch(updateSettings(settings));
}