import {
  XML_LOAD,
  VALIDATED
} from '../actions/types';

export const xmlLoad = (payload) =>
  ({ payload: payload, type: XML_LOAD })

export const onXmlLoad = (xml) => (dispatch, getState) => {
  dispatch(xmlLoad(xml));
}

export const validated = (payload) =>
  ({ payload: payload, type: VALIDATED });

export const onValidate = () => (dispatch, getState) => {
  const settings = getState().settings.settings;
  const xml = getState().xml.xml;
  let parsed = createChildren(xml, {});

  for (let k in parsed["policies"]) {
    if (typeof parsed["policies"][k] == "string") {
      parsed["policies"][k] = {};
    }
    parsed["policies"][k].value = settings[k].value;
    parsed["policies"][k].selected = settings[k].selected;

    for (let subKey in parsed["policies"][k]) {
      if (settings[k].subSettings.hasOwnProperty(subKey)) {
        parsed["policies"][k][subKey].value = settings[k].subSettings[subKey];
      }
    }
  }

  dispatch(validated(parsed));
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