!function(e,t){for(var n in t)e[n]=t[n]}(this,function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"CHECK_BOX",function(){return o}),n.d(r,"DROP_DOWN",function(){return u}),n.d(r,"RADIO_BUTTONS",function(){return c}),n.d(r,"NUMERIC_TEXT_BOX",function(){return a.a}),n.d(r,"STRING_TEXT_BOX",function(){return l}),n.d(r,"TEXT_BOX",function(){});var i=n(1);function o({width:e,height:t,label:n,value:r}){const i=NSButton.alloc().initWithFrame(NSMakeRect(0,0,e,t));return i.setButtonType(NSSwitchButton),i.setBezelStyle(0),i.setState(r?NSOnState:NSOffState),i.setTitle(n),{view:i,retrieveValue:function(){return"1"==i.stringValue()}}}function u({width:e,height:t,value:n,possibleValues:r}){const i=NSPopUpButton.alloc().initWithFrame(NSMakeRect(0,0,e,t));r.forEach(function(e){i.addItemWithTitle(e)});const o=void 0!==n?r.indexOf(n):0;return i.selectItemAtIndex(o),{view:i,retrieveValue:function(){const e=i.indexOfSelectedItem();return r[e]}}}function c({width:e,height:t,value:n,possibleValues:r}){const i=NSButtonCell.alloc().init();i.setButtonType(NSRadioButton);const o=r.length,u=NSMatrix.alloc().initWithFrame_mode_prototype_numberOfRows_numberOfColumns(NSMakeRect(0,0,e,t),NSRadioModeMatrix,i,1,o);u.setCellSize(CGSizeMake(Math.floor(e/o),t)),u.cells().forEach(function(e,t){e.setTitle(r[t])});const c=void 0!==n?r.indexOf(n):0;return u.selectCellAtRow_column(0,c),{view:u,retrieveValue:function(){const e=u.cells().indexOfObject(u.selectedCell());return r[e]}}}var a=n(3),s=n(2);const l=Object(s.a)(),f=20,d=12,p=20,h=6,b=300;function y({title:e,inputs:t}){const n=function(){const e={matchType:"Match layer content",regularExpression:"^Remark"};return e?Object.keys(e).reduce(function(t,n){const r=Object(i.sessionVariable)(n),o=Object(i.settingForKey)(n),u=void 0!==r?r:o,c=e[n];return t[n]=void 0!==u?u:c,t},{}):{}}(),{inputs:o,views:u,stackViewHeight:c}=function({inputsConfig:e,settings:t}){const n={},i=[];let o=0;return e.forEach(function({type:e,key:u,label:c,value:a,...s}){if(c&&"CHECK_BOX"!==e){const e=function({label:e,width:t,height:n}){const r=NSTextField.alloc().initWithFrame(NSMakeRect(0,0,t,n));return r.setBezeled(!1),r.setDrawsBackground(!1),r.setEditable(!1),r.setLineBreakMode(NSLineBreakByTruncatingTail),r.setSelectable(!1),r.setStringValue(e),r}({label:c,width:b,height:p});i.push({view:e,paddingBottom:h}),o+=p+h}const l=t[u],y=null!=a?a:l,{view:_,retrieveValue:g}=r[e]({label:c,value:y,width:b,height:f,...s});i.push({view:_,paddingBottom:d}),o+=f+d,n[u]=g}),{inputs:n,views:i,stackViewHeight:o-=d}}({inputsConfig:t,settings:n}),a=function({width:e,height:t,views:n}){const r=NSStackView.alloc().initWithFrame(NSMakeRect(0,0,e,t));return r.setAlignment(NSLayoutAttributeLeft),r.setOrientation(NSUserInterfaceLayoutOrientationVertical),r.setSpacing(0),r.setTranslatesAutoresizingMaskIntoConstraints(!0),r.updateConstraintsForSubtreeIfNeeded(),n.forEach(function({view:e,paddingBottom:t}){r.addView_inGravity_(e,NSStackViewGravityTop),r.setCustomSpacing_afterView_(t,e)}),r}({width:b,height:c,views:u}),s=function(e){const t=NSAlert.alloc().init();return t.window().setAutorecalculatesKeyViewLoop(!0),t.setMessageText(e),t.addButtonWithTitle("OK"),t.addButtonWithTitle("Cancel"),t}(e);return s.setAccessoryView(a),"1000"==s.runModal()?Object.keys(o).reduce(function(e,t){const n=o[t];return e[t]=n(),e},{}):null}var _=n(4),g=n.n(_);function S(e,t){g.a.message(t&&t.symbol?`${t.symbol} ${e}`:e)}function v(e){S(e,{symbol:"✔"})}function O(e){S(e,{symbol:"✘"})}function x(){const e={matchType:"Match layer content",regularExpression:"^Remark"};e&&(Object.keys(e).forEach(function(e){Object(i.setSettingForKey)(e,void 0),Object(i.setSessionVariable)(e,void 0)}),S("Reset settings"))}const m=w(i.setSettingForKey);w(i.setSessionVariable);function w(e){return function(t,n){if(void 0===t)return;Object.keys(t).forEach(function(n){const r=t[n];void 0!==r&&e(n,r)});const r=void 0!==n&&n.successMessage;r&&S(r)}}n(5),n(6);n(7);var T=n(8);function N(){const e=NSApplication.sharedApplication().orderedDocuments();return Object(T.fromNative)(e[0])}function k(){return N().selectedPage.layers}function j(){const e=[];return N().pages.forEach(function({layers:t}){t.forEach(function(t){e.push(t)})}),e}function E(){return N().selectedLayers.layers.reverse()}n.d(t,"g",function(){return y}),n.d(t,"h",function(){return x}),n.d(t,"i",function(){return m}),n.d(t,"a",function(){return"DROP_DOWN"}),n.d(t,"b",function(){return"RADIO_BUTTONS"}),n.d(t,"c",function(){return"STRING_TEXT_BOX"}),n.d(t,"e",function(){return k}),n.d(t,"d",function(){return j}),n.d(t,"f",function(){return E}),n.d(t,"k",function(){return S}),n.d(t,"l",function(){return v}),n.d(t,"j",function(){return O})},function(e,t){e.exports=require("sketch/settings")},function(e,t,n){"use strict";function r(e){return function({width:t,height:n,value:r,placeholder:i}){const o=NSTextField.alloc().initWithFrame(NSMakeRect(0,0,t,n)),u=null==r?"":`${r}`;return o.setStringValue(u),i&&o.setPlaceholderString(i),{view:o,retrieveValue:function(){const t=`${o.stringValue()}`;return e?e(t):t}}}}n.d(t,"a",function(){return r})},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return numericTextBox});var _text_box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2);const numericTextBox=Object(_text_box__WEBPACK_IMPORTED_MODULE_0__.a)(function(value){return parseFloat(eval(value))})},function(e,t){e.exports=require("sketch/ui")},function(e,t){e.exports=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}},function(e,t,n){"use strict";const r=async(e,t)=>{let n=0;for(const r of e)await t(await r,n++);return e};e.exports=r,e.exports.default=r},function(e,t){e.exports=require("sketch/dom")},function(e,t){e.exports=require("sketch")},function(e,t,n){e.exports=n(10)},function(e,t,n){e.exports={"extract-text":n(12).default,"reset-settings":n(11).default}},function(e,t,n){"use strict";n.r(t);var r=n(0);t.default=r.h},function(e,t,n){"use strict";n.r(t);var r=n(0);function i(e,t){return t=t||[],e.forEach(function(e){"Text"!==e.type?"Artboard"!==e.type&&"Group"!==e.type||i(e.layers,t):t.push(e)}),t}function o(){const e=Object(r.f)(),t=0!==e.length,n=Object(r.g)({title:"Extract Text",inputs:[{type:r.c,key:"regularExpression",label:"Regular Expression"},{type:r.b,key:"matchType",possibleValues:["Match layer content","Match layer name"]},{type:r.a,key:"scope",label:"Scope",possibleValues:[t&&"Selected layers","Current page","Entire document"].filter(Boolean),value:t?"Selected layers":null}]});if(!n)return;const{scope:o,...u}=n;let c=[];if("Selected layers"===o){if(Object(r.i)(u),0===(c=i(e)).length)return void Object(r.j)("No text layers in selection")}else if(Object(r.i)(n),0===(c=i("Current page"===o?Object(r.e)():Object(r.d)())).length)return void Object(r.j)(`No text layers ${"Current page"===o?"on the current page":"in the document"}`);const a=function({textLayers:e,regularExpression:t,shouldMatchLayerContent:n}){return e.filter(function(e){const r=e.text;return""!==r&&t.test(n?r:e.name)})}({textLayers:c,regularExpression:new RegExp(""===n.regularExpression?"^.+$":n.regularExpression),shouldMatchLayerContent:"Match layer content"===n.matchType}),s=a.length;0!==s?(!function(e){const t=NSPasteboard.generalPasteboard();t.clearContents(),t.setString_forType(function(e){return"\n"!==e.charAt(e.length-1)?e+"\n":e}(e),NSStringPboardType)}(a.map(function(e){return e.text}).reverse().join("\n")),Object(r.l)(`Copied ${s} match${1!==s?"es":""} to the clipboard`)):Object(r.k)("No matches")}n.d(t,"default",function(){return o})}]));