!function(e){function t(t){for(var a,o,l=t[0],c=t[1],u=t[2],p=0,d=[];p<l.length;p++)o=l[p],r[o]&&d.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(s&&s(t);d.length;)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={2:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=c;i.push([50,0]),n()}({19:function(e,t,n){},20:function(e,t,n){"use strict";var a=n(3),r=n(4),i=n(7),o=n(5),l=n(6),c=n(0),u=n.n(c),s=(n(24),n(8)),p=n(9),d=n(21),f=n(17),m=n(22),b=n.n(m),v=n(12),g={settings:{cookies:{value:1,selected:!0,subSettings:{session:1,persistent:1,third_party:1}},personal_data:{value:1,selected:!0,subSettings:{email:1,address:1,credentials:1,contact_info:1,payment_info:1}},location:{value:1,selected:!0,subSettings:{gps:1,ip:1,sensor_data:1,nearby_info:1}},camera:{value:1,selected:!0,subSettings:{}},ssl:{value:1,selected:!0,subSettings:{}},microphone:{value:1,selected:!0,subSettings:{}},track_activity:{value:1,selected:!0,subSettings:{searching_terms:1,content:1,purchase_activity:1,people:1}},javascript:{value:1,selected:!0,subSettings:{}},downloads:{value:1,selected:!0,subSettings:{}},plug_ins:{value:1,selected:!0,subSettings:{}}}},h={xml:{},validated:{}},E=Object(p.c)({settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_SETTINGS":return Object(v.a)({},e,{settings:t.payload});default:return e}},xml:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"XML_LOAD":return Object(v.a)({},e,{xml:t.payload});case"VALIDATED":return Object(v.a)({},e,{validated:t.payload});default:return e}}}),O={key:"root",storage:b.a},y=Object(f.a)(O,E),j=Object(p.d)(y,{},Object(p.a)(d.a)),S=Object(f.b)(j),x=n(23),w=n(11),N=n(1),_=n(2),k=n(10),P=n.n(k),C=(n(19),function(e){return{payload:e,type:"UPDATE_SETTINGS"}}),T=function(e,t){return function(n,a){var r=Object.assign({},a().settings.settings);for(var i in r[e].value=t,r[e].selected=!0,r[e].subSettings)r[e].subSettings[i]=t;n(C(r))}},M=function(e,t,n){return function(a,r){var i=Object.assign({},r().settings.settings);i[e].selected=!1,i[e].subSettings[t]=n,a(C(i))}};function A(){var e=Object(N.a)(["\n  border-right: 0px;\n  border-left: 0px;  \n"]);return A=function(){return e},e}function L(){var e=Object(N.a)(["\n  padding: 8px;\n  border: 1px solid #eeeeee;\n  margin: auto;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  position: absolute;\n  cursor: pointer;\n  background-color: #e8e8e8;\n  text-align: center;\n"]);return L=function(){return e},e}function U(){var e=Object(N.a)(["\n  width: 100%;\n  margin: auto;\n  padding-bottom: 50px;\n  position: relative;\n  margin-top: 10px;\n"]);return U=function(){return e},e}function z(){var e=Object(N.a)(["\n  font-size: 16px;\n  padding-top: 20px;\n"]);return z=function(){return e},e}function D(){var e=Object(N.a)(["\n  width: 100%;\n  font-size: 16px;\n  margin-top: 10px;\n  border: 1px solid #eeeeee;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  border-left: 0px;\n  border-right: 0px;\n"]);return D=function(){return e},e}function G(){var e=Object(N.a)(["\n  width: 100%;\n  height: fit-content;\n"]);return G=function(){return e},e}var V=_.a.div(G()),I=_.a.input(D()),B=_.a.label(z()),X=_.a.div(U()),J=_.a.a(L()),K=Object(_.a)(P.a)(A()),R=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).onGroupSizeSelect=function(e){n.setState({refresh:!n.state.refresh}),n.props.onUpdateSettings(n.props.option,e)},n.viewMorePressed=function(){n.setState({showMoreToggled:!n.state.showMoreToggled})},n.state={showMoreToggled:!1,refresh:!1},n.onGroupSizeSelect=n.onGroupSizeSelect.bind(Object(w.a)(Object(w.a)(n))),n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state.showMoreToggled,n=this.props,a=n.LabelText,r=n.Name,i=n.ViewMoreContent,o=n.settings,l=n.option,c=[{displayName:"Allow",value:1},{displayName:"Block",value:2},{displayName:"Ask",value:3}];return o[l].selected||(c[o[l].value-1].optionClass="myClass"),u.a.createElement(V,null,u.a.createElement(X,{className:"card card-3"},u.a.createElement(K,{options:c,selectedOption:o[l].value,onSelectOption:this.onGroupSizeSelect,label:r}),a?u.a.createElement("div",null,u.a.createElement(B,null,a),u.a.createElement(I,null)):null,i?u.a.createElement("div",null,t?u.a.createElement("div",null,u.a.createElement("h4",null,r," subsettings:"),i):null,u.a.createElement(J,{onClick:function(){return e.viewMorePressed()}},t?"Show less":"Show more")):null))}}]),t}(c.Component),W=Object(s.b)(function(e){return{settings:e.settings.settings}},function(e){return{onUpdateSettings:function(t,n){return e(T(t,n))}}})(R);function q(){var e=Object(N.a)(["\n  border-right: 0px;\n  border-left: 0px;\n"]);return q=function(){return e},e}function F(){var e=Object(N.a)(["\n  font-size: 14px;\n  padding-top: 20px;\n"]);return F=function(){return e},e}function H(){var e=Object(N.a)(["\n  width: 100%;\n  font-size: 14px;\n  margin-top: 10px;\n  border: 1px solid #eeeeee;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  border-left: 0px;\n  border-right: 0px;\n"]);return H=function(){return e},e}function Q(){var e=Object(N.a)(["\n  width: 100%;\n  height: fit-content;\n"]);return Q=function(){return e},e}var Y=_.a.div(Q()),Z=_.a.input(H()),$=_.a.label(F()),ee=Object(_.a)(P.a)(q()),te=[{displayName:"Allow",value:1},{displayName:"Block",value:2},{displayName:"Ask",value:3}],ne=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).onGroupSizeSelect=function(e){n.props.onUpdateSubSettings(n.props.parent,n.props.option,e),n.setState({refresh:!n.state.refresh})},n.state={refresh:!1},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.LabelText,n=e.Name,a=e.settings,r=e.parent,i=e.option;return u.a.createElement(Y,null,u.a.createElement(ee,{options:te,selectedOption:a[r].subSettings[i],onSelectOption:this.onGroupSizeSelect,label:n}),t?u.a.createElement("div",null,u.a.createElement($,null,t),u.a.createElement(Z,null)):null)}}]),t}(c.Component),ae=Object(s.b)(function(e){return{settings:e.settings.settings}},function(e){return{onUpdateSubSettings:function(t,n,a){return e(M(t,n,a))}}})(ne),re=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{style:{width:500}},u.a.createElement(W,{Name:"Cookies",ViewMoreContent:u.a.createElement("div",null,u.a.createElement(ae,{parent:"cookies",option:"session",Name:"Session"}),u.a.createElement(ae,{parent:"cookies",option:"persistent",Name:"Persistent"}),u.a.createElement(ae,{parent:"cookies",option:"third_party",Name:"Third party"})),option:"cookies"}),u.a.createElement(W,{Name:"Personal data",ViewMoreContent:u.a.createElement("div",null,u.a.createElement(ae,{parent:"personal_data",option:"email",Name:"Email"}),u.a.createElement(ae,{parent:"personal_data",option:"address",Name:"Address"}),u.a.createElement(ae,{parent:"personal_data",option:"credentials",Name:"Credentials"}),u.a.createElement(ae,{parent:"personal_data",option:"contact_info",Name:"Contact info"}),u.a.createElement(ae,{parent:"personal_data",option:"payment_info",Name:"Payment info"})),option:"personal_data"}),u.a.createElement(W,{Name:"Location",ViewMoreContent:u.a.createElement("div",null,u.a.createElement(ae,{parent:"location",option:"gps",Name:"GPS"}),u.a.createElement(ae,{parent:"location",option:"ip",Name:"IP address"}),u.a.createElement(ae,{parent:"location",option:"sensor_data",Name:"Sensor data"}),u.a.createElement(ae,{parent:"location",option:"nearby_info",Name:"Nearby info"})),option:"location"}),u.a.createElement(W,{Name:"Camera",option:"camera"}),u.a.createElement(W,{Name:"Microphone",option:"microphone"}),u.a.createElement(W,{Name:"Tracking activity",ViewMoreContent:u.a.createElement("div",null,u.a.createElement(ae,{parent:"tracking_activity",option:"searching_terms",Name:"Tearms you search for"}),u.a.createElement(ae,{parent:"tracking_activity",option:"content",Name:"Videos, interactions with ads, audio"}),u.a.createElement(ae,{parent:"tracking_activity",option:"purchase_activity",Name:"Purchasing history"}),u.a.createElement(ae,{parent:"tracking_activity",option:"people",Name:"People"})),option:"track_activity"}),u.a.createElement(W,{Name:"Downloads",option:"downloads"}),u.a.createElement(W,{Name:"SSL",option:"ssl"}),u.a.createElement(W,{Name:"Javascript",option:"javascript"}),u.a.createElement(W,{Name:"Plug-ins",option:"plug_ins"}))}}]),t}(c.Component),ie=n(16),oe=function(){return function(e,t){var n=t().settings.settings,a=t().xml.xml,r=le(a,{});for(var i in r.policies)for(var o in"string"==typeof r.policies[i]&&(r.policies[i]={}),r.policies[i].value=n[i].value,r.policies[i].selected=n[i].selected,r.policies[i])n[i].subSettings.hasOwnProperty(o)&&(r.policies[i][o].value=n[i].subSettings[o]);e({payload:r,type:"VALIDATED"})}},le=function e(t,n){if(0===t.children.length)return t.value;var a={};return t.children.map(function(t){a[t.name]=e(t,Object.assign({},a))}),a};function ce(){var e=Object(N.a)(["\n  float: right;\n"]);return ce=function(){return e},e}function ue(){var e=Object(N.a)(["\n  padding: 2px;\n  background-color: ","\n  color: white;\n  cursor: pointer;\n  margin: 10px;\n  border-radius: 5px;\n"]);return ue=function(){return e},e}function se(){var e=Object(N.a)(["\n  color: ","\n  padding-top: 20px;\n"]);return se=function(){return e},e}function pe(){var e=Object(N.a)(["\n  color: ","\n  padding-top: 20px;\n"]);return pe=function(){return e},e}function de(){var e=Object(N.a)(["\n  padding-left: 23px;'\n"]);return de=function(){return e},e}function fe(){var e=Object(N.a)(["\n  \n"]);return fe=function(){return e},e}function me(){var e=Object(N.a)([""]);return me=function(){return e},e}var be=_.a.div(me()),ve=_.a.div(fe()),ge=_.a.div(de()),he=_.a.li(pe(),function(e){return!1===e.selected?"#807b77":1===e.value?"#18922c":2===e.value?"red":"orange"}),Ee=_.a.li(se(),function(e){return 1===e.value?"#18922c":2===e.value?"red":"orange"}),Oe=_.a.a(ue(),function(e){return 1===e.value?"#18922c":"red"}),ye=_.a.span(ce());var je=n(31),Se=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).fetchPolicies=function(e){var t=new URL(e).hostname,a=new URL(e).port;fetch("http://".concat(t,":").concat(a,"/dmpolicies/policy.xml"),{headers:{"Content-Type":"text/xml"}}).then(function(e){return e.text()}).then(function(e){var t=(new je).parseFromString(e);n.props.onXmlLoad(t),n.props.validatePolicies()}).catch(function(e){return console.log(e)})},n.findKeys=function(e){var t=[];return Object.keys(e).forEach(function(e,n){t.push(e)}),t},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){var e;e=this.fetchPolicies,chrome.tabs.query({currentWindow:!0,active:!0},function(t){e(t[0].url)})}},{key:"render",value:function(){var e=this,t=this.props.xml.validated;if(!t||t.html)return null;if(!Object.keys(t).length)return null;var n=this.findKeys(t.policies);return u.a.createElement(be,null,u.a.createElement(ve,null,u.a.createElement("ul",null,u.a.createElement("li",null,t.publisher.name?"Publisher: ".concat(t.publisher.name):null," ",u.a.createElement("br",null)),u.a.createElement("li",null,t.publisher.email?"Email: ".concat(t.publisher.email):null,u.a.createElement("br",null)),u.a.createElement("li",null,t.publisher.contact?"Contact: ".concat(t.publisher.contact):null,u.a.createElement("br",null)),u.a.createElement("li",null,t.publisher.creation_date?"Creation date: ".concat(t.publisher.creation_date):null,u.a.createElement("br",null)))),u.a.createElement(ge,null,n.map(function(n){return u.a.createElement(he,{key:n,value:t.policies[n].value,selected:t.policies[n].selected},"Name: ",t.policies[n].name," ",u.a.createElement("br",null),u.a.createElement("span",{style:{paddingLeft:23}},"Description: ",t.policies[n].description),3===t.policies[n].value?u.a.createElement(ye,null,u.a.createElement(Oe,{value:1,onClick:function(){e.props.onUpdateSettings(n,1),e.props.validatePolicies()}},"Allow"),u.a.createElement(Oe,{value:2,onClick:function(){e.props.onUpdateSettings(n,2),e.props.validatePolicies()}},"Block")):null,u.a.createElement("ul",null,e.findKeys(t.policies[n]).map(function(a){return t.policies[n][a].name?u.a.createElement(Ee,{key:a,value:t.policies[n][a].value},t.policies[n][a].name," ",u.a.createElement("br",null),u.a.createElement("span",{style:{paddingLeft:23}},t.policies[n][a].description),3===t.policies[n][a].value?u.a.createElement(ye,null,u.a.createElement(Oe,{onClick:function(){e.props.onUpdateSubSettings(n,a,1),e.props.validatePolicies()},value:1},"Allow"),u.a.createElement(Oe,{value:2,onClick:function(){e.props.onUpdateSubSettings(n,a,2),e.props.validatePolicies()}},"Block")):null):null})))})))}}]),t}(c.Component),xe=Object(s.b)(function(e){return{settings:e.settings.settings,xml:e.xml}},function(e){return Object(ie.a)({onXmlLoad:function(t){return e((n=t,function(e,t){e({payload:n,type:"XML_LOAD"})}));var n},validatePolicies:function(){return e(oe())},onUpdateSubSettings:function(t,n,a){return e(M(t,n,a))},onUpdateSettings:function(t,n){return e(T(t,n))}},"validatePolicies",function(){return e(oe())})})(Se),we=[{displayName:"Validation",value:1},{displayName:"Settings",value:2}],Ne=function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(i.a)(this,Object(o.a)(t).call(this))).state={selected:1},e}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement(s.a,{store:j},u.a.createElement(x.a,{persistor:S,loading:null},u.a.createElement("div",{style:{width:500}},u.a.createElement(P.a,{options:we,selectedOption:this.state.selected,onSelectOption:function(t){return e.setState({selected:t})}}),1===this.state.selected?u.a.createElement(xe,null):u.a.createElement(re,null))))}}]),t}(c.Component);t.a=Ne},24:function(e,t,n){},50:function(e,t,n){e.exports=n(51)},51:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(4),i=n(7),o=n(5),l=n(6),c=n(0),u=n.n(c),s=n(14),p=n.n(s),d=(n(52),n(20)),f=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement(d.a,null)}}]),t}(u.a.Component),m=document.createElement("div");p.a.render(u.a.createElement(f,null),m)},52:function(e,t,n){}});
//# sourceMappingURL=content.js.map