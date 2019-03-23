!function(e,t){for(var n in t)e[n]=t[n]}(this,function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t){e.exports=require("sketch/dom")},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return getSavedUserInput});var sketch_settings__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),sketch_settings__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(sketch_settings__WEBPACK_IMPORTED_MODULE_0__),_common_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_common_get_package_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),_is_number__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3);function getSavedUserInput(){const{defaults:defaults}=Object(_common_get_package_json__WEBPACK_IMPORTED_MODULE_2__.a)()[_common_constants__WEBPACK_IMPORTED_MODULE_1__.a];return void 0===defaults?{}:Object.keys(defaults).reduce(function(results,key){const savedSetting=sketch_settings__WEBPACK_IMPORTED_MODULE_0___default.a.settingForKey(key),defaultValue=defaults[key],value=void 0===savedSetting?defaultValue:savedSetting;return results[key]=Object(_is_number__WEBPACK_IMPORTED_MODULE_3__.a)(defaultValue)?eval(value):value,results},{})}},function(e,t){e.exports=require("sketch/settings")},function(e,t,n){"use strict";function r(e){return"number"==typeof e&&isFinite(e)}n.d(t,"a",function(){return r})},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return textBox});var _is_number__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3);function textBox({width:width,height:height,value:value,placeholder:placeholder}){const textField=NSTextField.alloc().initWithFrame(NSMakeRect(0,0,width,height));textField.setStringValue(`${value}`),placeholder&&textField.setPlaceholderString(placeholder);const shouldEvaluateExpression=Object(_is_number__WEBPACK_IMPORTED_MODULE_0__.a)(value);return{view:textField,retrieveValue:function(){const string=textField.stringValue();return shouldEvaluateExpression?eval(string):string}}}},function(e,t,n){"use strict";n.d(t,"a",function(){return r});const r="sketch-plugin-helper"},function(e,t,n){"use strict";function r(){return JSON.parse('{\n  "private": true,\n  "version": "0.3.0",\n  "devDependencies": {\n    "sketch-plugin-helper": "*"\n  },\n  "scripts": {\n    "build": "sph build",\n    "fix": "sph lint --fix",\n    "lint": "sph lint",\n    "symlink": "sph symlink",\n    "unlink": "sph symlink --delete",\n    "version": "sph version",\n    "watch": "sph build --watch"\n  },\n  "sketch-plugin-helper": {\n    "pluginName": "Extract Text",\n    "pluginDescription": "A Sketch plugin to extract text from layers that match a regular expression",\n    "authorName": "Lim Yuan Qing",\n    "githubUserName": "yuanqing",\n    "githubRepositoryName": "sketch-extract-text",\n    "menu": [\n      {\n        "handler": "extract-text",\n        "label": "Extract Text",\n        "shortcut": "ctrl option cmd e"\n      }\n    ],\n    "defaults": {\n      "matchType": "Match layer content",\n      "regularExpression": "^Remark"\n    }\n  }\n}\n')}n.d(t,"a",function(){return r})},function(e,t){e.exports=require("sketch/ui")},function(e,t,n){e.exports={"extract-text":n(9).default}},function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"CHECK_BOX",function(){return o}),n.d(r,"DROP_DOWN",function(){return u}),n.d(r,"RADIO_BUTTONS",function(){return s}),n.d(r,"TEXT_BOX",function(){return a.a});var i=n(1);function o({width:e,height:t,label:n,value:r}){const i=NSButton.alloc().initWithFrame(NSMakeRect(0,0,e,t));return i.setButtonType(NSSwitchButton),i.setBezelStyle(0),i.setState(r?NSOnState:NSOffState),i.setTitle(n),{view:i,retrieveValue:function(){return"1"===i.stringValue()}}}function u({width:e,height:t,value:n,possibleValues:r}){const i=NSPopUpButton.alloc().initWithFrame(NSMakeRect(0,0,e,t));r.forEach(function(e){i.addItemWithTitle(e)});const o=r.indexOf(n);return i.selectItemAtIndex(o),{view:i,retrieveValue:function(){const e=i.indexOfSelectedItem();return r[e]}}}function s({width:e,height:t,value:n,possibleValues:r}){const i=NSButtonCell.alloc().init();i.setButtonType(NSRadioButton);const o=r.length,u=NSMatrix.alloc().initWithFrame_mode_prototype_numberOfRows_numberOfColumns(NSMakeRect(0,0,e,t),NSRadioModeMatrix,i,1,o);u.setCellSize(CGSizeMake(Math.floor(e/o),t)),u.cells().forEach(function(e,t){e.setTitle(r[t])});const s=r.indexOf(n);return u.selectCellAtRow_column(0,s),{view:u,retrieveValue:function(){const e=u.cells().indexOfObject(u.selectedCell());return r[e]}}}var a=n(4);const c=20,l=12,_=20,d=6,f=300;function p({title:e,inputs:t}){const n=Object(i.a)(),{inputs:o,views:u,stackViewHeight:s}=function({inputsConfig:e,savedUserInput:t}){const n={},i=[];let o=0;return e.forEach(function({type:e,key:u,label:s,...a}){if(s&&"CHECK_BOX"!==e){const e=function({label:e,width:t,height:n}){const r=NSTextField.alloc().initWithFrame(NSMakeRect(0,0,t,n));return r.setBezeled(!1),r.setDrawsBackground(!1),r.setEditable(!1),r.setLineBreakMode(NSLineBreakByTruncatingTail),r.setSelectable(!1),r.setStringValue(e),r}({label:s,width:f,height:_});i.push({view:e,paddingBottom:d}),o+=_+d}const p=t[u],{view:h,retrieveValue:g}=r[e]({label:s,value:p,width:f,height:c,...a});i.push({view:h,paddingBottom:l}),o+=c+l,n[u]=g}),{inputs:n,views:i,stackViewHeight:o-=l}}({inputsConfig:t,savedUserInput:n}),a=function({width:e,height:t,views:n}){const r=NSStackView.alloc().initWithFrame(NSMakeRect(0,0,e,t));return r.setAlignment(NSLayoutAttributeLeft),r.setOrientation(NSUserInterfaceLayoutOrientationVertical),r.setSpacing(0),r.setTranslatesAutoresizingMaskIntoConstraints(!0),r.updateConstraintsForSubtreeIfNeeded(),n.forEach(function({view:e,paddingBottom:t}){r.addView_inGravity_(e,NSStackViewGravityTop),r.setCustomSpacing_afterView_(t,e)}),r}({width:f,height:s,views:u}),p=function(e){const t=NSAlert.alloc().init();return t.window().setAutorecalculatesKeyViewLoop(!0),t.setMessageText(e),t.addButtonWithTitle("OK"),t.addButtonWithTitle("Cancel"),t}(e);return p.setAccessoryView(a),"1000"==p.runModal()?Object.keys(o).reduce(function(e,t){const n=o[t];return e[t]=n(),e},{}):null}var h=n(2),g=n(7),b=n.n(g);function y(e,t){b.a.message(t&&t.symbol?`${t.symbol} ${e}`:e)}function m(e){y(e,{symbol:"🔴"})}var v=n(0);function x(){return Object(v.getSelectedDocument)().selectedPage.layers}function O(){return Object(v.getSelectedDocument)().selectedLayers.layers}function E(e,t){return t=t||[],e.forEach(function(e){"Text"!==e.type?"Artboard"!==e.type&&"Group"!==e.type||E(e.layers,t):t.push(e)}),t}n.d(t,"default",function(){return k});const S={title:"Extract Text",inputs:[{key:"regularExpression",label:"Regular Expression",type:"TEXT_BOX"},{key:"matchType",type:"RADIO_BUTTONS",possibleValues:["Match layer content","Match layer name"]}]};function k(){const e=p(S);if(!e)return;!function(e,t){void 0!==e&&(Object.keys(e).forEach(function(t){const n=e[t];void 0!==n&&Object(h.setSettingForKey)(t,n)}),t&&t.successMessage&&y(t.successMessage))}(e);const t=O();let n=[];if(0===t.length){if(0===(n=E(x())).length)return void m("No text layers on the page")}else if(0===(n=E(t)).length)return void m("No text layers in selection");const r=function({textLayers:e,regularExpression:t,shouldMatchTextLayerContent:n}){return e.filter(function(e){const r=e.text,i=e.name;return!(""===r||!t.test(n?r:i))})}({textLayers:n,regularExpression:new RegExp(""===e.regularExpression?"^.+$":e.regularExpression),shouldMatchTextLayerContent:"Match layer content"===e.matchType}),i=r.length;if(0===i)return void y("No matches",{symbol:"⚠️"});!function(e){const t=NSPasteboard.generalPasteboard();t.clearContents(),t.setString_forType(function(e){return"\n"!==e.charAt(e.length-1)?e+"\n":e}(e),NSStringPboardType)}(r.map(function(e){return e.text}).reverse().join("\n")),function(e){y(e,{symbol:"✅"})}(`Copied ${i} match${1!==i?"es":""} to clipboard`)}}]));