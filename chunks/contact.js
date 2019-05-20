require("source-map-support").install(),exports.ids=[3],exports.modules={120:function(e,n,t){var i=t(121),o=t(33),r="string"==typeof i?[[e.i,i,""]]:i;(n=e.exports=i.locals||{})._getContent=function(){return r},n._getCss=function(){return""+i},n._insertCss=function(e){return o(r,e)}},121:function(e,n,t){(n=e.exports=t(32)(!1)).push([e.i,"._35_9r{display:none}.iYbjJ:first-of-type{margin-top:4em;margin-bottom:6em}.iYbjJ:last-of-type{margin-top:6em;margin-bottom:9em}",""]),n.locals={title:"_35_9r",content:"iYbjJ"}},152:function(e,n,t){"use strict";t.r(n);var i,o=t(6),r=t.n(o),a=t(51),l=t(9),s=t(19),c=(t(34),t(18)),d=t.n(c),f=t(120),u=t.n(f),m=t(54);function p(e,n,t,o){i||(i="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={children:void 0}),n&&r)for(var l in r)void 0===n[l]&&(n[l]=r[l]);else n||(n=r||{});if(1===a)n.children=o;else if(a>1){for(var s=new Array(a),c=0;c<a;c++)s[c]=arguments[c+3];n.children=s}return{$$typeof:i,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}var v,y=d()(u.a)(class extends r.a.Component{render(){const e=l.a,{title:n}=this.props;return p("article",{},void 0,p("h1",{className:u.a.title},void 0,n),p("div",{className:u.a.content},void 0,p(m.a,{className:u.a.content,keyContent:e.KEY.CONTACT_ADDRESS})),p("div",{className:u.a.content},void 0,p(m.a,{keyContent:e.KEY.CONTACT_PHONE})),p("div",{className:u.a.content},void 0,p(m.a,{keyContent:e.KEY.CONTACT_EMAIL})))}});function h(e,n,t,i){v||(v="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,r=arguments.length-3;if(n||0===r||(n={children:void 0}),n&&o)for(var a in o)void 0===n[a]&&(n[a]=o[a]);else n||(n=o||{});if(1===r)n.children=i;else if(r>1){for(var l=new Array(r),s=0;s<r;s++)l[s]=arguments[s+3];n.children=l}return{$$typeof:v,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}n.default=function(){const e=l.a.TITLE.CONTACT;return{title:e,description:s.a.META_DESCRIPTION.CONTACT,chunks:["contact"],component:h(a.a,{},void 0,h(y,{title:e}))}}},53:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getContent"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"keyContent"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"getContent"},arguments:[{kind:"Argument",name:{kind:"Name",value:"keyContent"},value:{kind:"Variable",name:{kind:"Name",value:"keyContent"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"text"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:96}};t.loc.source={body:"query getContent($keyContent: String!) {\n  getContent(keyContent: $keyContent) {\n    text\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};function o(e,n){for(var t=0;t<e.definitions.length;t++){var i=e.definitions[t];if(i.name&&i.name.value==n)return i}}t.definitions.forEach(function(e){if(e.name){var n=new Set;!function e(n,t){if("FragmentSpread"===n.kind)t.add(n.name.value);else if("VariableDefinition"===n.kind){var i=n.type;"NamedType"===i.kind&&t.add(i.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,t)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,t)}),n.definitions&&n.definitions.forEach(function(n){e(n,t)})}(e,n),i[e.name.value]=n}}),e.exports=t,e.exports.getContent=function(e,n){var t={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=i[n]||new Set,a=new Set,l=new Set;for(r.forEach(function(e){l.add(e)});l.size>0;){var s=l;l=new Set,s.forEach(function(e){a.has(e)||(a.add(e),(i[e]||new Set).forEach(function(e){l.add(e)}))})}return a.forEach(function(n){var i=o(e,n);i&&t.definitions.push(i)}),t}(t,"getContent")},54:function(e,n,t){"use strict";var i,o=t(6),r=t.n(o),a=t(8),l=(t(34),t(18)),s=t.n(l),c=t(53),d=t.n(c),f=t(55),u=t.n(f);function m(e,n,t,o){i||(i="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={children:void 0}),n&&r)for(var l in r)void 0===n[l]&&(n[l]=r[l]);else n||(n=r||{});if(1===a)n.children=o;else if(a>1){for(var s=new Array(a),c=0;c<a;c++)s[c]=arguments[c+3];n.children=s}return{$$typeof:i,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}var p=m("p",{},void 0,"Chargement...");n.a=s()(u.a)(class extends r.a.Component{render(){const{keyContent:e}=this.props;return m(a.Query,{query:d.a,variables:{keyContent:e},ssr:!0},void 0,({loading:e,data:n})=>e?p:m(o.Fragment,{},void 0,n.getContent&&m("p",{className:u.a.content},void 0,n.getContent.text)))}})},55:function(e,n,t){var i=t(56),o=t(33),r="string"==typeof i?[[e.i,i,""]]:i;(n=e.exports=i.locals||{})._getContent=function(){return r},n._getCss=function(){return""+i},n._insertCss=function(e){return o(r,e)}},56:function(e,n,t){(n=e.exports=t(32)(!1)).push([e.i,":root{--font-family-base:Montserrat,Ubuntu,sans-serif;--font-weight:100;--max-content-width:1000px;--max-content-form:25em;--aside-width-md:28%;--aside-width-lg:28%;--aside-width:20%;--color-xxlight:#fafafa;--color-xlight:#eee;--color-light:#ccc;--color-medium:#aaa;--color-dark:#777;--color-xdark:#555;--color-xxdark:#333;--link-color:#ab8b8b;--link-color-dark:#a86363;--link-color-xdark:#754b49;--font-size-header-sm-mobile:1.3em;--font-size-header-md-mobile:1.8em;--font-size-header:2em;--font-size-nav:17px;--font-size-tab:20px;--font-size-current-title:15px;--font-size-current-plus-plus:14px;--font-size-current-plus:13px;--font-size-current:12px;--font-size-minus:11px}.RXvNG{white-space:pre-line;line-height:1.8}@media (min-width:1200px){.RXvNG{padding:0 5em}}@media (min-width:1600px){.RXvNG{padding:0 15em}}",""]),n.locals={content:"RXvNG"}}};
//# sourceMappingURL=contact.js.map