!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){e.exports=r(3)},,function(e,t){e.exports=React},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function(e,t,r){for(var n=!0;n;){var o=e,a=t,i=r;u=l=s=void 0,n=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,a);if(void 0!==u){if("value"in u)return u.value;var s=u.get;return void 0===s?void 0:s.call(i)}var l=Object.getPrototypeOf(o);if(null===l)return void 0;e=l,t=a,r=i,n=!0}},s=r(2),l=n(s),c=function(e){function t(){o(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return a(t,e),i(t,[{key:"componentWillMount",value:function(){var e=document.createElement("canvas"),t=document.createDocumentFragment();t.appendChild(e),this.canvas=e.getContext("2d")}},{key:"componentDidMount",value:function(){var e=this;this.scope=l["default"].findDOMNode(this.refs.scope);var t=window.getComputedStyle(this.scope),r=[];r.push(t["font-weight"]),r.push(t["font-style"]),r.push(t["font-size"]),r.push(t["font-family"]),this.canvas.font=r.join(" "),this.forceUpdate(),window.addEventListener("resize",function(){e.forceUpdate()})}},{key:"measureWidth",value:function(e){return this.canvas.measureText(e).width}},{key:"getRenderText",value:function(){var e=this.measureWidth(this.props.text),t=(this.measureWidth(this.props.truncateText),this.scope.offsetWidth);if(t>=e)return this.props.text;for(var r=0,n=this.props.text.length,o="",a=0,i=0,u=this.props.line;u--;){for(var s=u?"":this.props.truncateText;n>=r;)if(r++,o=this.props.text.substr(i,r),this.measureWidth(o+s)>t){a=o.lastIndexOf(" "),-1===a&&(a=r-1),i+=a;break}if(r>=n){i=n;break}r=0}return i===n?this.props.text:this.props.text.substr(0,i-1)+this.props.truncateText}},{key:"render",value:function(){var e="";this.refs.scope&&(e=this.getRenderText());var t={ref:"scope"};return this.props.title&&(t.title=this.props.text),l["default"].createElement("div",t,e)}}],[{key:"propTypes",value:{text:l["default"].PropTypes.string,truncateText:l["default"].PropTypes.string,line:l["default"].PropTypes.number,title:l["default"].PropTypes.bool},enumerable:!0},{key:"defaultProps",value:{text:"",truncateText:"...",line:1,title:!0},enumerable:!0}]),t}(l["default"].Component);t["default"]=c,e.exports=t["default"]}]);
//# sourceMappingURL=truncate-text.js.map