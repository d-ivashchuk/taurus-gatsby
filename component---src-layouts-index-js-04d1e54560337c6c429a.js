webpackJsonp([0x67ef26645b2a,60335399758886],{112:function(e,t){e.exports={layoutContext:{}}},207:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(2),l=o(r),u=n(212),c=o(u),i=n(112),f=o(i);t.default=function(e){return l.default.createElement(c.default,a({},e,f.default))},e.exports=t.default},349:function(e,t){},78:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),c=o(u),i=function(e){function t(){return a(this,t),r(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return c.default.createElement("section",{id:"footer"},c.default.createElement("ul",{className:"icons"},c.default.createElement("li",null,c.default.createElement("a",{href:"mailto:taurus@gmail.com",className:"icon alt fa-envelope"},c.default.createElement("span",{className:"label"},"Email")),c.default.createElement("a",{href:"tel:+380991982788",className:"icon alt fa-mobile"},c.default.createElement("span",{className:"label"},"Email")))),c.default.createElement("ul",{className:"copyright"},c.default.createElement("li",null,"©Taurus logistics")))},t}(c.default.Component);t.default=i,e.exports=t.default},211:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),c=o(u),i=n(35),f=o(i),s=function(e){function t(){return a(this,t),r(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return c.default.createElement("div",{className:"toolbar"},c.default.createElement(f.default,{activClassName:"active",exact:!0,to:"/"},"Home"),c.default.createElement(f.default,{activClassName:"active",exact:!0,to:"/legal"},"Legal"),c.default.createElement(f.default,{activClassName:"active",exact:!0,to:"/news"},"News"),c.default.createElement(f.default,{activClassName:"active",exact:!0,to:"/photos"},"Photos"))},t}(c.default.Component);t.default=s,e.exports=t.default},212:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),c=o(u),i=n(35);o(i);n(349);var f=n(211),s=o(f),p=n(78),d=o(p),m=function(e){function t(n){a(this,t);var o=r(this,e.call(this,n));return o.state={loading:"is-loading"},o}return l(t,e),t.prototype.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},t.prototype.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},t.prototype.render=function(){var e=this.props.children;return c.default.createElement("div",{className:"body "+this.state.loading},c.default.createElement(s.default,null),e(),c.default.createElement(d.default,null))},t}(c.default.Component);m.propTypes={children:c.default.PropTypes.func},t.default=m,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-index-js-04d1e54560337c6c429a.js.map