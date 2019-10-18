require("source-map-support").install(),exports.ids=[3],exports.modules={123:function(e,n,t){var i=t(124),o=t(37),a="string"==typeof i?[[e.i,i,""]]:i;(n=e.exports=i.locals||{})._getContent=function(){return a},n._getCss=function(){return""+i},n._insertCss=function(e){return o(a,e)}},124:function(e,n,t){(n=e.exports=t(36)(!1)).push([e.i,"._35_9r{display:none}.Xkb5Q{font-size:var(--font-size-current-plus-plus)}.Xkb5Q:first-of-type{margin-top:4em;margin-bottom:6em}.Xkb5Q:last-of-type{margin-top:6em;margin-bottom:6em}",""]),n.locals={title:"_35_9r",contactContent:"Xkb5Q"}},154:function(e,n,t){"use strict";t.r(n);t(6);var i,o=t(54),a=t(19),r=(t(35),t(17)),l=t.n(r),s=t(8),c=t(123),d=t.n(c),f=t(57);function u(e,n,t,o){i||(i="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,r=arguments.length-3;if(n||0===r||(n={children:void 0}),1===r)n.children=o;else if(r>1){for(var l=new Array(r),s=0;s<r;s++)l[s]=arguments[s+3];n.children=l}if(n&&a)for(var c in a)void 0===n[c]&&(n[c]=a[c]);else n||(n=a||{});return{$$typeof:i,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}var m,p=l()(d.a)((function({title:e}){return u("article",{},void 0,u("h1",{className:d.a.title},void 0,e),u("div",{className:d.a.contactContent},void 0,u(f.a,{keyContent:s.a.KEY.CONTACT_ADDRESS})),u("div",{className:d.a.contactContent},void 0,u(f.a,{keyContent:s.a.KEY.CONTACT_PHONE})),u("div",{className:d.a.contactContent},void 0,u(f.a,{keyContent:s.a.KEY.CONTACT_EMAIL})))})),v=t(53);function k(e,n,t,i){m||(m="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={children:void 0}),1===a)n.children=i;else if(a>1){for(var r=new Array(a),l=0;l<a;l++)r[l]=arguments[l+3];n.children=r}if(n&&o)for(var s in o)void 0===n[s]&&(n[s]=o[s]);else n||(n=o||{});return{$$typeof:m,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}n.default=function(){const e=o.a.CONTACT;return{title:e,description:a.a.CONTACT,chunks:["contact"],component:k(v.a,{},void 0,k(p,{title:e}))}}},54:function(e,n,t){"use strict";n.a={HOME:"Bienvenue",PRESENTATION:"Présentation",CONTACT:"Contact",ADMINISTRATION:"Administration"}},55:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getContent"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"key"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"getContent"},arguments:[{kind:"Argument",name:{kind:"Name",value:"key"},value:{kind:"Variable",name:{kind:"Name",value:"key"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"text"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:75}};t.loc.source={body:"query getContent($key: String!) {\n  getContent(key: $key) {\n    text\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};function o(e,n){for(var t=0;t<e.definitions.length;t++){var i=e.definitions[t];if(i.name&&i.name.value==n)return i}}t.definitions.forEach((function(e){if(e.name){var n=new Set;!function e(n,t){if("FragmentSpread"===n.kind)t.add(n.name.value);else if("VariableDefinition"===n.kind){var i=n.type;"NamedType"===i.kind&&t.add(i.name.value)}n.selectionSet&&n.selectionSet.selections.forEach((function(n){e(n,t)})),n.variableDefinitions&&n.variableDefinitions.forEach((function(n){e(n,t)})),n.definitions&&n.definitions.forEach((function(n){e(n,t)}))}(e,n),i[e.name.value]=n}})),e.exports=t,e.exports.getContent=function(e,n){var t={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var a=i[n]||new Set,r=new Set,l=new Set;for(a.forEach((function(e){l.add(e)}));l.size>0;){var s=l;l=new Set,s.forEach((function(e){r.has(e)||(r.add(e),(i[e]||new Set).forEach((function(e){l.add(e)})))}))}return r.forEach((function(n){var i=o(e,n);i&&t.definitions.push(i)})),t}(t,"getContent")},57:function(e,n,t){"use strict";var i,o=t(6),a=t.n(o),r=t(18),l=(t(35),t(17)),s=t.n(l),c=t(55),d=t.n(c),f=t(58),u=t.n(f);function m(e,n,t,o){i||(i="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,r=arguments.length-3;if(n||0===r||(n={children:void 0}),1===r)n.children=o;else if(r>1){for(var l=new Array(r),s=0;s<r;s++)l[s]=arguments[s+3];n.children=l}if(n&&a)for(var c in a)void 0===n[c]&&(n[c]=a[c]);else n||(n=a||{});return{$$typeof:i,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}var p=m("p",{},void 0,"Chargement...");n.a=s()(u.a)((function({keyContent:e}){const{data:n,loading:t}=Object(r.useQuery)(d.a,{variables:{key:e},ssr:!0});return t?p:a.a.createElement(a.a.Fragment,null,n.getContent&&m("p",{className:u.a.content},void 0,n.getContent.text))}))},58:function(e,n,t){var i=t(59),o=t(37),a="string"==typeof i?[[e.i,i,""]]:i;(n=e.exports=i.locals||{})._getContent=function(){return a},n._getCss=function(){return""+i},n._insertCss=function(e){return o(a,e)}},59:function(e,n,t){(n=e.exports=t(36)(!1)).push([e.i,":root{--font-family-base:Montserrat,sans-serif;--font-weight:100;--max-content-width:1000px;--max-content-form:25em;--aside-width-md:28%;--aside-width:20%;--side-padding:4em;--main-top-padding-mobile:3em;--main-top-padding:12em;--main-bottom-padding:6em;--main-side-padding-mobile:1em;--main-side-padding:5em;--main-side-padding-large:6em;--mainHome-side-padding:3em;--mainHome-bottom-padding:2em;--color-xxlight:#fafafa;--color-xlight:#eee;--color-light:#ccc;--color-medium:#aaa;--color-dark:#777;--color-xdark:#555;--color-xxdark:#333;--link-color:#ab8b8b;--link-color-dark:#a86363;--link-color-xdark:#754b49;--color-light-brown:#7b6a58;--color-dark-brown:#574530;--color-xdark-brown:#453322;--font-size-header-sm-mobile:1.3em;--font-size-header-md-mobile:1.8em;--font-size-header:2em;--font-size-nav:17px;--font-size-tab:20px;--font-size-current-title:15px;--font-size-current-plus-plus:14px;--font-size-current-plus:13px;--font-size-current:12px;--font-size-minus:11px}.RXvNG{white-space:pre-line;line-height:1.8}",""]),n.locals={content:"RXvNG"}}};
//# sourceMappingURL=contact.js.map