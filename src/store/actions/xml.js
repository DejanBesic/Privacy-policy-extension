import {
    XML_LOAD
} from '../actions/types';

export const xmlLoad = (payload) =>
    ({ payload: payload, type: XML_LOAD })

export const onXmlLoad = (xml) => (dispatch, getState) => {
    dispatch(xmlLoad(xml));
}

export const onValidate = () => (dispatch, getState) => {
    const settings = getState().settings.settings;
    const xml = getState().xml.xml;
    let parsed = createChildren(xml, {});
    console.log({THISISSPARTA: parsed});
}

export const createChildren = (xml, parsedXML) => {
    if (xml.children.length === 0) {
        return xml.value;
    }
    let parsed = {};
    xml.children.map((child) => {
        parsed[child.name] = createChildren(child, Object.assign({}, parsed));
    });

    return parsed;
}