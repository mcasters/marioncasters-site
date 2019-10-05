require("source-map-support").install(),exports.ids=[8],exports.modules={120:function(e,n,i){var t=i(121),o=i(36),a="string"==typeof t?[[e.i,t,""]]:t;(n=e.exports=t.locals||{})._getContent=function(){return a},n._getCss=function(){return""+t},n._insertCss=function(e){return o(a,e)}},121:function(e,n,i){(n=e.exports=i(35)(!1)).push([e.i,":root{--font-family-base:Montserrat,sans-serif;--font-weight:100;--max-content-width:1000px;--max-content-form:25em;--aside-width-md:28%;--aside-width:20%;--side-padding:4em;--main-top-padding-mobile:3em;--main-top-padding:12em;--main-bottom-padding:6em;--main-side-padding-mobile:1em;--main-side-padding:5em;--main-side-padding-large:6em;--mainHome-side-padding:3em;--mainHome-bottom-padding:2em;--color-xxlight:#fafafa;--color-xlight:#eee;--color-light:#ccc;--color-medium:#aaa;--color-dark:#777;--color-xdark:#555;--color-xxdark:#333;--link-color:#ab8b8b;--link-color-dark:#a86363;--link-color-xdark:#754b49;--color-light-brown:#7b6a58;--color-dark-brown:#574530;--color-xdark-brown:#453322;--font-size-header-sm-mobile:1.3em;--font-size-header-md-mobile:1.8em;--font-size-header:2em;--font-size-nav:17px;--font-size-tab:20px;--font-size-current-title:15px;--font-size-current-plus-plus:14px;--font-size-current-plus:13px;--font-size-current:12px;--font-size-minus:11px}._3Zwcd{font-variant:none;letter-spacing:.12em}._365VS{display:none}._1M4oC{max-width:100%;max-height:40vh}@media (min-width:765px){._1M4oC{max-width:50vw}}@media (min-width:1200px){._3Zwcd{padding:0 5em}}@media (min-width:1600px){._3Zwcd{padding:0 15em}}",""]),n.locals={presentationContainer:"_3Zwcd",title:"_365VS",image:"_1M4oC"}},157:function(e,n,i){"use strict";i.r(n);var t,o=i(6),a=i.n(o),r=i(9),d=i(19),l=(i(34),i(18)),s=i.n(l),c=i(120),m=i.n(c),f=i(57);function u(e,n,i,o){t||(t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,r=arguments.length-3;if(n||0===r||(n={children:void 0}),1===r)n.children=o;else if(r>1){for(var d=new Array(r),l=0;l<r;l++)d[l]=arguments[l+3];n.children=d}if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s]);else n||(n=a||{});return{$$typeof:t,type:e,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}class p extends a.a.Component{render(){const{title:e}=this.props;return u("div",{className:m.a.presentationContainer},void 0,u("h1",{className:m.a.title},void 0,e),u("img",{className:m.a.image,src:`${r.a.CONTENT_IMAGE_PATH}/${r.a.PRESENTATION_IMAGE_TITLE}.jpg`,alt:r.a.PRESENTATION_IMAGE_ALT}),u(f.a,{keyContent:r.a.KEY.PRESENTATION}))}}var v,g=s()(m.a)(p),h=i(52);function k(e,n,i,t){v||(v="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={children:void 0}),1===a)n.children=t;else if(a>1){for(var r=new Array(a),d=0;d<a;d++)r[d]=arguments[d+3];n.children=r}if(n&&o)for(var l in o)void 0===n[l]&&(n[l]=o[l]);else n||(n=o||{});return{$$typeof:v,type:e,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}n.default=function(){const e=r.a.TITLE.PRESENTATION;return{title:e,description:d.a.META_DESCRIPTION.PRESENTATION,chunks:["presentation"],component:k(h.a,{},void 0,k(g,{title:e}))}}},55:function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getContent"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"key"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"getContent"},arguments:[{kind:"Argument",name:{kind:"Name",value:"key"},value:{kind:"Variable",name:{kind:"Name",value:"key"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"text"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:75}};i.loc.source={body:"query getContent($key: String!) {\n  getContent(key: $key) {\n    text\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var t={};function o(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}i.definitions.forEach((function(e){if(e.name){var n=new Set;!function e(n,i){if("FragmentSpread"===n.kind)i.add(n.name.value);else if("VariableDefinition"===n.kind){var t=n.type;"NamedType"===t.kind&&i.add(t.name.value)}n.selectionSet&&n.selectionSet.selections.forEach((function(n){e(n,i)})),n.variableDefinitions&&n.variableDefinitions.forEach((function(n){e(n,i)})),n.definitions&&n.definitions.forEach((function(n){e(n,i)}))}(e,n),t[e.name.value]=n}})),e.exports=i,e.exports.getContent=function(e,n){var i={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var a=t[n]||new Set,r=new Set,d=new Set;for(a.forEach((function(e){d.add(e)}));d.size>0;){var l=d;d=new Set,l.forEach((function(e){r.has(e)||(r.add(e),(t[e]||new Set).forEach((function(e){d.add(e)})))}))}return r.forEach((function(n){var t=o(e,n);t&&i.definitions.push(t)})),i}(i,"getContent")},57:function(e,n,i){"use strict";var t,o=i(6),a=i.n(o),r=i(8),d=(i(34),i(18)),l=i.n(d),s=i(55),c=i.n(s),m=i(58),f=i.n(m);function u(e,n,i,o){t||(t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,r=arguments.length-3;if(n||0===r||(n={children:void 0}),1===r)n.children=o;else if(r>1){for(var d=new Array(r),l=0;l<r;l++)d[l]=arguments[l+3];n.children=d}if(n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s]);else n||(n=a||{});return{$$typeof:t,type:e,key:void 0===i?null:""+i,ref:null,props:n,_owner:null}}var p=u("p",{},void 0,"Chargement...");n.a=l()(f.a)((function(e){const{data:n,loading:i}=Object(r.useQuery)(c.a,{variables:{key:e.keyContent},ssr:!0});return i?p:a.a.createElement(a.a.Fragment,null,n.getContent&&u("p",{className:f.a.content},void 0,n.getContent.text))}))},58:function(e,n,i){var t=i(59),o=i(36),a="string"==typeof t?[[e.i,t,""]]:t;(n=e.exports=t.locals||{})._getContent=function(){return a},n._getCss=function(){return""+t},n._insertCss=function(e){return o(a,e)}},59:function(e,n,i){(n=e.exports=i(35)(!1)).push([e.i,":root{--font-family-base:Montserrat,sans-serif;--font-weight:100;--max-content-width:1000px;--max-content-form:25em;--aside-width-md:28%;--aside-width:20%;--side-padding:4em;--main-top-padding-mobile:3em;--main-top-padding:12em;--main-bottom-padding:6em;--main-side-padding-mobile:1em;--main-side-padding:5em;--main-side-padding-large:6em;--mainHome-side-padding:3em;--mainHome-bottom-padding:2em;--color-xxlight:#fafafa;--color-xlight:#eee;--color-light:#ccc;--color-medium:#aaa;--color-dark:#777;--color-xdark:#555;--color-xxdark:#333;--link-color:#ab8b8b;--link-color-dark:#a86363;--link-color-xdark:#754b49;--color-light-brown:#7b6a58;--color-dark-brown:#574530;--color-xdark-brown:#453322;--font-size-header-sm-mobile:1.3em;--font-size-header-md-mobile:1.8em;--font-size-header:2em;--font-size-nav:17px;--font-size-tab:20px;--font-size-current-title:15px;--font-size-current-plus-plus:14px;--font-size-current-plus:13px;--font-size-current:12px;--font-size-minus:11px}.RXvNG{white-space:pre-line;line-height:1.8}",""]),n.locals={content:"RXvNG"}}};
//# sourceMappingURL=presentation.js.map