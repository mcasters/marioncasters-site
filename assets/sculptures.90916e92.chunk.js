(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{386:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getAllItems"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"type"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"getAllItems"},arguments:[{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"Variable",name:{kind:"Name",value:"type"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"date"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"technique"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"width"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"length"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:159}};t.loc.source={body:"query getAllItems($type: String!) {\n  getAllItems(type: $type) {\n    id\n    title\n    date\n    technique\n    description\n    height\n    width\n    length\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};function r(e,n){for(var t=0;t<e.definitions.length;t++){var i=e.definitions[t];if(i.name&&i.name.value==n)return i}}t.definitions.forEach(function(e){if(e.name){var n=new Set;!function e(n,t){if("FragmentSpread"===n.kind)t.add(n.name.value);else if("VariableDefinition"===n.kind){var i=n.type;"NamedType"===i.kind&&t.add(i.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,t)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,t)}),n.definitions&&n.definitions.forEach(function(n){e(n,t)})}(e,n),i[e.name.value]=n}}),e.exports=t,e.exports.getAllItems=function(e,n){var t={kind:e.kind,definitions:[r(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var o=i[n]||new Set,a=new Set,l=new Set;for(o.forEach(function(e){l.add(e)});l.size>0;){var u=l;l=new Set,u.forEach(function(e){a.has(e)||(a.add(e),(i[e]||new Set).forEach(function(e){l.add(e)}))})}return a.forEach(function(n){var i=r(e,n);i&&t.definitions.push(i)}),t}(t,"getAllItems")},634:function(e,n,t){var i=t(635),r=t(379),o="string"==typeof i?[[e.i,i,""]]:i;(n=e.exports=i.locals||{})._getContent=function(){return o},n._getCss=function(){return""+i},n._insertCss=function(e){return r(o,e)}},635:function(e,n,t){(n=e.exports=t(378)(!1)).push([e.i,"._20th3{height:600px}._jzyv{display:none}",""]),n.locals={loading:"_20th3",title:"_jzyv"}},688:function(e,n,t){"use strict";t.r(n);var i,r=t(5),o=t.n(r),a=t(117),l=t(380),u=t.n(l),c=(t(3),t(412)),f=t(381),d=t(634),s=t.n(d),p=t(386),v=t.n(p);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,n,t,r){i||(i="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={children:void 0}),n&&o)for(var l in o)void 0===n[l]&&(n[l]=o[l]);else n||(n=o||{});if(1===a)n.children=r;else if(a>1){for(var u=new Array(a),c=0;c<a;c++)u[c]=arguments[c+3];n.children=u}return{$$typeof:i,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}function h(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e,n){return(k=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var w,S=function(e){function n(){var e,t,i,r,o,a,l;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var u=arguments.length,c=new Array(u),d=0;d<u;d++)c[d]=arguments[d];return i=this,t=!(r=(e=g(n)).call.apply(e,[this].concat(c)))||"object"!==m(r)&&"function"!=typeof r?b(i):r,o=b(t),l=function(e){for(var n=[],t=1;t<5;)n.push("".concat(f.a.SCULPTURE_PATH,"/").concat(e,"_").concat(t,".jpg")),t++;return n},(a="getUrlImages")in o?Object.defineProperty(o,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):o[a]=l,t}var t,i,l;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&k(e,n)}(n,o.a.Component),t=n,(i=[{key:"render",value:function(){var e=this,n=f.a.TYPE.SCULPTURE;return y(a.c,{query:v.a,variables:{type:n},ssr:!0},void 0,function(t){var i=t.loading,o=t.error,a=t.data;return i?y("div",{className:s.a.loading},void 0,"Chargement..."):o?y("p",{},void 0,"Erreur de chargement : ",o):y(r.Fragment,{},void 0,y("h1",{className:s.a.title},void 0,e.props.title),a.getAllItems.map(function(e){return y(c.a,{item:e,type:n},e.id)}))})}}])&&h(t.prototype,i),l&&h(t,l),n}(),N=u()(s.a)(S),E=t(385),_=t(118);function P(e,n,t,i){w||(w="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,o=arguments.length-3;if(n||0===o||(n={children:void 0}),n&&r)for(var a in r)void 0===n[a]&&(n[a]=r[a]);else n||(n=r||{});if(1===o)n.children=i;else if(o>1){for(var l=new Array(o),u=0;u<o;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:w,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}function O(e,n,t,i,r,o,a){try{var l=e[o](a),u=l.value}catch(e){return void t(e)}l.done?n(u):Promise.resolve(u).then(i,r)}function T(){var e;return e=regeneratorRuntime.mark(function e(){var n,t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=f.a.TITLE.SCULPTURE,t=_.a.META_DESCRIPTION.SCULPTURE,e.abrupt("return",{title:n,description:t,chunks:["drawings"],component:P(E.a,{},void 0,P(N,{title:n}))});case 3:case"end":return e.stop()}},e)}),(T=function(){var n=this,t=arguments;return new Promise(function(i,r){var o=e.apply(n,t);function a(e){O(o,i,r,a,l,"next",e)}function l(e){O(o,i,r,a,l,"throw",e)}a(void 0)})}).apply(this,arguments)}n.default=function(){return T.apply(this,arguments)}}}]);
//# sourceMappingURL=sculptures.90916e92.chunk.js.map