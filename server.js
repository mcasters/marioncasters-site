require("source-map-support").install(),module.exports=function(e){var t={},n={11:0};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.e=function(t){if(0!==n[t]){var r=require("./chunks/"+({0:"admin~contact~drawings~home~not-found~paintings~presentation~privacy~sculptures",1:"drawings~paintings~sculptures",2:"admin",3:"contact",4:"drawings",5:"home",6:"not-found",7:"paintings",8:"presentation",9:"privacy",10:"sculptures"}[t]||t)+".js"),i=r.modules,a=r.ids;for(var o in i)e[o]=i[o];for(var s=0;s<a.length;s++)n[a[s]]=0}return Promise.all([])},r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/assets/",r.oe=function(e){process.nextTick(function(){throw e})},r(r.s=35)}([function(e,t){e.exports=require("sequelize")},function(e,t,n){"use strict";t.a={PAINTING_FOLDER:"paintings",SCULPTURE_FOLDER:"sculptures",DRAWING_FOLDER:"drawings",PAINTING_PATH:"/images/paintings",SCULPTURE_PATH:"/images/sculptures",DRAWING_PATH:"/images/drawings",SM_SIZE:"sm",MD_SIZE:"md",TYPE:{PAINTING:"painting",SCULPTURE:"sculpture",DRAWING:"drawing"},TITLE:{PAINTING:"Peintures",SCULPTURE:"Sculptures",DRAWING:"Dessins"},ALT_IMAGE_PAINTING:"Peinture de Marion Casters",ALT_IMAGE_SCULPTURE:"Sculpture de Marion Casters",ALT_IMAGE_DRAWING:"Dessin de Marion Casters",FORMAT_DATE:"DD/MM/YYYY"}},function(e,t,n){e.exports={port:process.env.PORT||3e3,trustProxy:process.env.TRUST_PROXY||"loopback",api:{clientUrl:process.env.API_CLIENT_URL||"",serverUrl:process.env.API_SERVER_URL||`http://localhost:${process.env.PORT||3e3}`},databaseUrl:process.env.DATABASE_URL||"mysql:database.mysql",databaseName:process.env.DATABASE_NAME||"develop",databaseUsername:process.env.DATABASE_USERNAME||"root",databasePassword:process.env.DATABASE_PASSWORD||"root",databaseHost:process.env.DATABASE_HOST||"localhost",libraryPath:`${process.env.PHOTOS_PATH}`,paintingsPath:`${process.env.PHOTOS_PATH}/paintings`,sculpturesPath:`${process.env.PHOTOS_PATH}/sculptures`,drawingsPath:`${process.env.PHOTOS_PATH}/drawings`,miscellaneousPath:`${process.env.PHOTOS_PATH}/miscellaneous`,analytics:{googleTrackingId:process.env.GOOGLE_TRACKING_ID},auth:{jwt:{name:process.env.JWT_NAME||"auth-token",secret:process.env.JWT_SECRET||"15htDn-7uU-620Ghhwz"}}}},function(e,t){e.exports=require("lodash")},function(e,t,n){"use strict";t.a={TITLE:{ACCUEIL:"Accueil",ADMINISTRATION:"Administration"},ROUTER:{HOME:"/home",PEINTURES:"/peintures",SCULPTURES:"/sculptures",DESSINS:"/dessins",CONTACT:"/contact",PRESENTATION:"/presentation",CONFIDENTIALITE:"/politique-de-confidentialite",REGISTER:"/register",ADMIN:"/admin"}}},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("react-apollo")},function(e,t,n){"use strict";t.a={TYPE:"content",TITLE:{HOME:"Bienvenue",PRESENTATION:"Présentation",CONTACT:"Contact"},KEY:{HOME1:"Home 1",HOME2:"Home 2",HOME3:"Home 3",PRESENTATION:"Présentation",CONTACT_ADDRESS:"Adresse",CONTACT_PHONE:"Téléphone",CONTACT_EMAIL:"Email"},PRESENTATION_IMAGE_PATH:"/images/miscellaneous",PRESENTATION_IMAGE_TITLE:"portrait",PRESENTATION_IMAGE_ALT:"Portrait de Marion Casters"}},function(e,t,n){var r=n(37),i=n(33),a="string"==typeof r?[[e.i,r,""]]:r;(t=e.exports=r.locals||{})._getContent=function(){return a},t._getCss=function(){return""+r},t._insertCss=function(e){return i(a,e)}},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("apollo-cache-inmemory")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("apollo-server-express")},function(e,t){e.exports=require("bcrypt")},function(e,t){e.exports=require("./chunk-manifest.json")},function(e,t){e.exports=require("isomorphic-style-loader/withStyles")},function(e,t,n){"use strict";t.a={KEYWORDS:"Marion Casters Artiste Peintre Peinture Sculpture Dessin Bordeaux France",META_DESCRIPTION:{PAINTING:"Images et descriptions des peintures de Marion Casters",SCULPTURE:"Images et descriptions des sculptures de Marion Casters",DRAWING:"Images et descriptions des dessins de Marion Casters",HOME:"Bienvenue sur le site de présentation des oeuvres de Marion Casters",PRESENTATION:"Démarche artistique de Marion Casters",CONTACT:"Contacter Marion Casters pour obtenir des renseignements sur ses oeuvres",PRIVACY:"Détail de la politique de confidentialité du site",ADMIN:"Administration du site"}}},function(e,t){e.exports=require("pretty-error")},function(e,t){e.exports=require("cors")},function(e,t){e.exports=require("express-session")},function(e,t){e.exports=require("isomorphic-style-loader/StyleContext")},function(e,t){e.exports=require("serialize-javascript")},function(e,t){e.exports=require("universal-router")},function(e,t){e.exports=require("apollo-client")},function(e,t){e.exports=require("apollo-link")},function(e,t){e.exports=require("apollo-link-error")},function(e,t){e.exports=require("apollo-link-schema")},function(e,t){e.exports=require("graphql-tag")},function(e,t){e.exports=require("promises-all")},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(o=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),a=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(a).concat([i]).join("\n")}var o;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(i=0;i<e.length;i++){var o=e[i];null!=o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){"use strict";
/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */var r={};e.exports=function(e,t){for(var n,i=void 0===t?{}:t,a=i.replace,o=void 0!==a&&a,s=i.prepend,u=void 0!==s&&s,l=i.prefix,c=void 0===l?"s":l,d=[],p=0;p<e.length;p++){var f=e[p],h=f[0],y=f[1],m=f[2],g=f[3],v=""+c+h+"-"+p;if(d.push(v),!r[v]||o){r[v]=1;var w=document.getElementById(v),E=!1;w||(E=!0,(w=document.createElement("style")).setAttribute("type","text/css"),w.id=v,m&&w.setAttribute("media",m));var T=y;g&&"function"==typeof btoa&&(T+="\n/*# sourceMappingURL=data:application/json;base64,"+(n=JSON.stringify(g),btoa(encodeURIComponent(n).replace(/%([0-9A-F]{2})/g,function(e,t){return String.fromCharCode("0x"+t)})))+"*/",T+="\n/*# sourceURL="+g.file+"?"+v+"*/"),"textContent"in w?w.textContent=T:w.styleSheet.cssText=T,E&&(u?document.head.insertBefore(w,document.head.childNodes[0]):document.head.appendChild(w))}else r[v]++}return function(e){e.forEach(function(e){if(--r[e]<=0){var t=document.getElementById(e);t&&t.parentNode.removeChild(t)}})}.bind(null,d)}},function(e,t){e.exports=require("prop-types")},function(e,t,n){n(36),e.exports=n(38)},function(e,t){e.exports=require("@babel/polyfill")},function(e,t,n){(e.exports=n(32)(!1)).push([e.i,"html{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding:0 2rem;height:100%;font-family:sans-serif;text-align:center;color:#888}body{margin:0}h1{font-weight:400;color:#555}pre{white-space:pre-wrap;text-align:left}",""])},function(e,t,n){"use strict";n.r(t);var r=n(13),i=n.n(r),a=n(11),o=n.n(a),s=n(14),u=n.n(s),l=n(6),c=n.n(l),d=n(7),p=n.n(d),f=n(20),h=n.n(f),y=n(8),m=n(15),g=n(21),v=n.n(g),w=n(22),E=n.n(w),T=n(23),I=n.n(T);var P,S=Object(l.createContext)({pathname:"",query:{},client:{}});function b(e,t,n,r){P||(P="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&i)for(var o in i)void 0===t[o]&&(t[o]=i[o]);else t||(t=i||{});if(1===a)t.children=r;else if(a>1){for(var s=new Array(a),u=0;u<a;u++)s[u]=arguments[u+3];t.children=s}return{$$typeof:P,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var A,N=({client:e,insertCss:t,context:n,children:r})=>b(y.ApolloProvider,{client:e},void 0,b(S.Provider,{value:n},void 0,b(I.a.Provider,{value:{insertCss:t}},void 0,r))),O=n(24),D=n.n(O),R=n(2),x=n.n(R);function U(e,t,n,r){A||(A="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&i)for(var o in i)void 0===t[o]&&(t[o]=i[o]);else t||(t=i||{});if(1===a)t.children=r;else if(a>1){for(var s=new Array(a),u=0;u<a;u++)s[u]=arguments[u+3];t.children=s}return{$$typeof:A,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var C=U("meta",{charSet:"utf-8"}),q=U("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),j=U("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),_=U("meta",{name:"theme-color",content:"#555555"}),k=U("link",{rel:"manifest",href:"/site.webmanifest"}),G=U("link",{rel:"apple-touch-icon",sizes:"192x192",href:"/icon-192.png"}),M=U("link",{rel:"icon",sizes:"192x192",href:"/icon-192.png"}),V=U("link",{rel:"icon",sizes:"512x512",href:"/icon-512.png"}),$=U("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Montserrat"}),L=U("script",{src:"https://www.google-analytics.com/analytics.js",async:!0,defer:!0});var Y,H=({title:e,description:t,keywords:n,styles:r=[],scripts:i=[],app:a,children:o})=>U("html",{className:"no-js",lang:"en"},void 0,U("head",{},void 0,C,q,U("title",{},void 0,e),U("meta",{name:"description",content:t}),U("meta",{name:"keywords",content:n}),j,_,i.map(e=>U("link",{rel:"preload",href:e,as:"script"},e)),k,G,M,V,$,r.map(e=>U("style",{id:e.id,dangerouslySetInnerHTML:{__html:e.cssText}},e.id))),U("body",{},void 0,U("div",{id:"app",dangerouslySetInnerHTML:{__html:o}}),U("script",{dangerouslySetInnerHTML:{__html:`window.App=${D()(a)}`}}),i.map(e=>U("script",{src:e},e)),x.a.analytics.googleTrackingId&&U("script",{dangerouslySetInnerHTML:{__html:"window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;"+`ga('create','${x.a.analytics.googleTrackingId}','auto');ga('send','pageview')`}}),x.a.analytics.googleTrackingId&&L)),B=(n(34),n(18)),W=n.n(B),z=n(10),F=n.n(z);function K(e,t,n,r){Y||(Y="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&i)for(var o in i)void 0===t[o]&&(t[o]=i[o]);else t||(t=i||{});if(1===a)t.children=r;else if(a>1){for(var s=new Array(a),u=0;u<a;u++)s[u]=arguments[u+3];t.children=s}return{$$typeof:Y,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var Q,J,X,Z=K("div",{},void 0,K("h1",{},void 0,"Error"),K("p",{},void 0,"Sorry, a critical error occurred on this page."));class ee extends c.a.Component{render(){return Z}}X={error:null},(J="defaultProps")in(Q=ee)?Object.defineProperty(Q,J,{value:X,enumerable:!0,configurable:!0,writable:!0}):Q[J]=X;W()(F.a)(ee);var te=n(25),ne=n.n(te),re=n(19),ie=n(4);function ae(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}var oe={path:"",children:[{path:"",load:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,153))},{path:ie.a.ROUTER.HOME,load:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,153))},{path:ie.a.ROUTER.PEINTURES,load:()=>Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,150))},{path:ie.a.ROUTER.SCULPTURES,load:()=>Promise.all([n.e(0),n.e(1),n.e(10)]).then(n.bind(null,155))},{path:ie.a.ROUTER.DESSINS,load:()=>Promise.all([n.e(0),n.e(1),n.e(4)]).then(n.bind(null,154))},{path:ie.a.ROUTER.PRESENTATION,load:()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,157))},{path:ie.a.ROUTER.CONTACT,load:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,152))},{path:ie.a.ROUTER.CONFIDENTIALITE,load:()=>Promise.all([n.e(0),n.e(9)]).then(n.bind(null,151))},{path:ie.a.ROUTER.ADMIN,load:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,149))},{path:"(.*)",load:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,156))}],action({next:e}){return(t=function*(){const t=yield e();return t.title=`${t.title||"Page sans titre"} - Marion Casters`,t.description=t.description||"-",t.keywords=re.a.KEYWORDS,t},function(){var e=this,n=arguments;return new Promise(function(r,i){var a=t.apply(e,n);function o(e){ae(a,r,i,o,s,"next",e)}function s(e){ae(a,r,i,o,s,"throw",e)}o(void 0)})})();var t}},se=new ne.a(oe,{resolveRoute:(e,t)=>"function"==typeof e.route.load?e.route.load().then(n=>n.default(e,t)):"function"==typeof e.route.action?e.route.action(e,t):void 0}),ue=n(26),le=n(27),ce=n(28),de=n(29),pe=n(30),fe=n.n(pe),he=n(12);function ye(e){switch(e.__typename){case"NewsItem":return e.link?`NewsItem:${e.link}`:Object(he.defaultDataIdFromObject)(e);default:return Object(he.defaultDataIdFromObject)(e)}}var me=n(3);const ge=["\n  adminStatus: AdminStatus!\n"],ve=[...["\n  type AdminStatus {\n    isConnected: Boolean!\n  }\n"]],we=n.n(me)()({}),Ee=[...ge],Te=[];function Ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){Pe(e,t,n[t])})}return e}function Pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Se(e){const t=new he.InMemoryCache({dataIdFromObject:ye});t.writeData({data:{adminStatus:{__typename:"AdminStatus",isConnected:!1}}});const n=Object(le.from)([Object(ce.onError)(({graphQLErrors:e,networkError:t})=>{e&&e.map(({message:e,locations:t,path:n})=>console.warn(`[GraphQL error]: Message: ${e}, Location: ${t}, Path: ${n}`)),t&&console.warn(`[Network error]: ${t}`)}),new de.SchemaLink(Ie({},e))]);return new ue.ApolloClient({link:n,cache:t,typeDefs:fe()(ve),resolvers:we,ssrMode:!0,queryDeduplication:!0})}var be=n(0),Ae=n.n(be);var Ne=new Ae.a(x.a.databaseName,x.a.databaseUsername,x.a.databasePassword,{host:x.a.databaseHost,dialect:"mysql",operatorsAliases:be.Op,define:{freezeTableName:!0,timestamps:!1}});var Oe=Ne.define("User",{id:{type:Ae.a.UUID,defaultValue:Ae.a.UUIDV1,primaryKey:!0},username:{type:Ae.a.STRING(50),unique:!0},email:{type:Ae.a.STRING(50),validate:{isEmail:!0},unique:!0},emailConfirmed:{type:Ae.a.BOOLEAN,defaultValue:!1},password:Ae.a.STRING(255)},{indexes:[{fields:["username"]}]});var De=Ne.define("Painting",{id:{type:Ae.a.UUID,defaultValue:Ae.a.UUIDV1,primaryKey:!0,get(){return this.getDataValue("id")}},title:{type:Ae.a.STRING(50),allowNull:!1,get(){return this.getDataValue("title")},set(e){this.setDataValue("title",e)}},date:{type:Ae.a.DATEONLY,allowNull:!1,get(){return this.getDataValue("date")},set(e){this.setDataValue("date",e)}},technique:{type:Ae.a.STRING(255),allowNull:!1,get(){return this.getDataValue("technique")},set(e){this.setDataValue("technique",e)}},description:{type:Ae.a.STRING(255),allowNull:!0,get(){return this.getDataValue("description")},set(e){this.setDataValue("description",e)}},height:{type:Ae.a.INTEGER,allowNull:!1,get(){return this.getDataValue("height")},set(e){this.setDataValue("height",e)}},width:{type:Ae.a.INTEGER,allowNull:!1,get(){return this.getDataValue("width")},set(e){this.setDataValue("width",e)}}},{timestamps:!0});var Re=Ne.define("Sculpture",{id:{type:Ae.a.UUID,defaultValue:Ae.a.UUIDV1,primaryKey:!0,get(){return this.getDataValue("id")}},title:{type:Ae.a.STRING(50),allowNull:!1,get(){return this.getDataValue("title")},set(e){this.setDataValue("title",e)}},date:{type:Ae.a.DATEONLY(10),allowNull:!1,get(){return this.getDataValue("date")},set(e){this.setDataValue("date",e)}},technique:{type:Ae.a.STRING(255),allowNull:!1,get(){return this.getDataValue("technique")},set(e){this.setDataValue("technique",e)}},description:{type:Ae.a.STRING(255),allowNull:!0,get(){return this.getDataValue("description")},set(e){this.setDataValue("description",e)}},height:{type:Ae.a.INTEGER,allowNull:!1,get(){return this.getDataValue("height")},set(e){this.setDataValue("height",e)}},width:{type:Ae.a.INTEGER,allowNull:!1,get(){return this.getDataValue("width")},set(e){this.setDataValue("width",e)}},length:{type:Ae.a.INTEGER,allowNull:!1,get(){return this.getDataValue("length")},set(e){this.setDataValue("length",e)}}},{timestamps:!0});var xe=Ne.define("Drawing",{id:{type:Ae.a.UUID,defaultValue:Ae.a.UUIDV1,primaryKey:!0,get(){return this.getDataValue("id")}},title:{type:Ae.a.STRING(50),allowNull:!1,get(){return this.getDataValue("title")},set(e){this.setDataValue("title",e)}},date:{type:Ae.a.DATEONLY(10),allowNull:!1,get(){return this.getDataValue("date")},set(e){this.setDataValue("date",e)}},technique:{type:Ae.a.STRING(255),allowNull:!1,get(){return this.getDataValue("technique")},set(e){this.setDataValue("technique",e)}},description:{type:Ae.a.STRING(255),allowNull:!0,get(){return this.getDataValue("description")},set(e){this.setDataValue("description",e)}},height:{type:Ae.a.INTEGER,allowNull:!1,get(){return this.getDataValue("height")},set(e){this.setDataValue("height",e)}},width:{type:Ae.a.INTEGER,allowNull:!1,get(){return this.getDataValue("width")},set(e){this.setDataValue("width",e)}}},{timestamps:!0});var Ue=Ne.define("Content",{id:{type:Ae.a.UUID,defaultValue:Ae.a.UUIDV1,primaryKey:!0,get(){return this.getDataValue("id")}},key:{type:Ae.a.STRING(50),allowNull:!1,get(){return this.getDataValue("key")},set(e){this.setDataValue("key",e)}},text:{type:Ae.a.TEXT,allowNull:!1,get(){return this.getDataValue("text")},set(e){this.setDataValue("text",e)}}});var Ce={sync:function(...e){return Ne.sync(...e)}},qe=n(1);function je(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}function _e(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(e){je(a,r,i,o,s,"next",e)}function s(e){je(a,r,i,o,s,"throw",e)}o(void 0)})}}const ke=["\n  type Item {\n    id: ID!\n    title: String!\n    date: String!\n    technique: String!\n    description: String\n    length: Int\n    height: Int!\n    width: Int!\n  }\n"],Ge=["\n  getAllItems(\n     type: String!\n  ): [Item]\n  \n  getItemsByYear(\n    year: Int!\n    type: String!\n  ): [Item]\n  \n  getItemsByHalfYear(\n    year: Int!\n    type: String!\n    half: Int!\n  ): [Item]\n"],Me={RootQuery:{getAllItems:(e,{type:t})=>_e(function*(){if(t===qe.a.TYPE.SCULPTURE)return Re.findAll({order:be.Sequelize.col("date")});if(t===qe.a.TYPE.DRAWING)return xe.findAll({order:be.Sequelize.col("date")});return yield De.findAll({order:be.Sequelize.col("date")})})(),getItemsByYear:(e,{type:t,year:n})=>_e(function*(){const e=new Date(n,0,1),r=new Date(n,11,31);let i;return t===qe.a.TYPE.SCULPTURE&&(i=Re.findAll({where:{date:{gte:e,lte:r}},order:be.Sequelize.col("date")})),t===qe.a.TYPE.DRAWING&&(i=yield De.findAll({where:{date:{gte:e,lte:r}},order:be.Sequelize.col("date")})),i=yield De.findAll({where:{date:{gte:e,lte:r}},order:be.Sequelize.col("date")})})(),getItemsByHalfYear:(e,{type:t,year:n,half:r})=>_e(function*(){let e,i,a;return 1===r?(e=new Date(n,0,1),i=new Date(n,5,31)):(e=new Date(n,6,1),i=new Date(n,11,31)),t===qe.a.TYPE.SCULPTURE&&(a=Re.findAll({where:{date:{gte:e,lte:i}},order:be.Sequelize.col("date")})),t===qe.a.TYPE.DRAWING&&(a=yield De.findAll({where:{date:{gte:e,lte:i}},order:be.Sequelize.col("date")})),a=yield De.findAll({where:{date:{gte:e,lte:i}},order:be.Sequelize.col("date")})})()}};var Ve=n(5),$e=n.n(Ve),Le=n(31),Ye=n.n(Le),He=n(9);function Be(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}function We(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(e){Be(a,r,i,o,s,"next",e)}function s(e){Be(a,r,i,o,s,"throw",e)}o(void 0)})}}const ze=function(){var e=We(function*({stream:e},t){return new Promise((n,r)=>e.on("error",n=>{e.truncated&&$e.a.unlinkSync(t),r(n)}).pipe($e.a.createWriteStream(t)).on("error",e=>r(e)).on("finish",()=>n(!0)))});return function(t,n){return e.apply(this,arguments)}}(),Fe=function(){var e=We(function*(e,t){const n=function(){var e=We(function*(e,n){const{stream:r}=yield e,i=`${x.a.sculpturesPath}/${t}_${n+1}.jpg`;return ze({stream:r},i)});return function(t,n){return e.apply(this,arguments)}}();return Ye.a.all(e.map(n))});return function(t,n){return e.apply(this,arguments)}}(),Ke=function(){var e=We(function*(e,t,n){const{stream:r}=yield e;let i;return n===qe.a.TYPE.DRAWING?i=`${x.a.drawingsPath}/${t}.jpg`:n===qe.a.TYPE.PAINTING?i=`${x.a.paintingsPath}/${t}.jpg`:n===He.a.TYPE&&(i=`${x.a.miscellaneousPath}/${t}.jpg`),ze({stream:r},i)});return function(t,n,r){return e.apply(this,arguments)}}(),Qe=function(){var e=We(function*(e,t){let n=1;const r=[],i=[];let a=!0;for(;n<5;){const t=`${x.a.sculpturesPath}/${e}_${n}.jpg`;$e.a.existsSync(t)&&i.push(t),n++}return 4===i.length&&(i.forEach((e,n)=>{r.push($e.a.rename(e,`${x.a.sculpturesPath}/${t}_${n+1}.jpg`,e=>{e&&(a=!1)}))}),yield Promise.all(r),a)});return function(t,n){return e.apply(this,arguments)}}(),Je=function(){var e=We(function*(e,t,n){let r,i=!0;if(n===qe.a.TYPE.SCULPTURE)return i=yield Qe(e,t);n===qe.a.TYPE.DRAWING?r=`${x.a.drawingsPath}`:n===qe.a.TYPE.PAINTING&&(r=`${x.a.paintingsPath}`);const a=`${r}/${e}.jpg`;return $e.a.existsSync(a)?yield $e.a.rename(a,`${r}/${t}.jpg`,e=>{e&&(i=!1)}):i=!1,i});return function(t,n,r){return e.apply(this,arguments)}}(),Xe=function(){var e=We(function*(e){$e.a.unlink(`${e}`,e=>!e)});return function(t){return e.apply(this,arguments)}}(),Ze=function(){var e=We(function*(e,t){const n=x.a.libraryPath,r=[];let i;switch(t){case qe.a.TYPE.SCULPTURE:for(i=1;i<5;i++)r.push(`${n}/${qe.a.SCULPTURE_FOLDER}/${e}_${i}.jpg`);break;case qe.a.TYPE.PAINTING:r.push(`${n}/${qe.a.PAINTING_FOLDER}/${e}.jpg`);break;case qe.a.TYPE.DRAWING:r.push(`${n}/${qe.a.DRAWING_FOLDER}/${e}.jpg`);break;default:return!1}return yield r.every(Xe)});return function(t,n){return e.apply(this,arguments)}}();function et(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}var tt=function(){var e,t=(e=function*(e){return!!e.session.userId&&!!(yield Oe.findOne({where:{id:e.session.userId}}))},function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(e){et(a,r,i,o,s,"next",e)}function s(e){et(a,r,i,o,s,"throw",e)}o(void 0)})});return function(e){return t.apply(this,arguments)}}();function nt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){rt(e,t,n[t])})}return e}function rt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function it(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}function at(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(e){it(a,r,i,o,s,"next",e)}function s(e){it(a,r,i,o,s,"throw",e)}o(void 0)})}}const ot=function(){var e=at(function*(e,t){return t===qe.a.TYPE.PAINTING?De.findOne({where:{title:e}}):t===qe.a.TYPE.DRAWING?xe.findOne({where:{title:e}}):Re.findOne({where:{title:e}})});return function(t,n){return e.apply(this,arguments)}}(),st=function(){var e=at(function*(e,t){return t===qe.a.TYPE.PAINTING?De.findOne({where:{id:e}}):t===qe.a.TYPE.DRAWING?xe.findOne({where:{id:e}}):Re.findOne({where:{id:e}})});return function(t,n){return e.apply(this,arguments)}}(),ut=function(){var e=at(function*(e,t){return t===qe.a.TYPE.PAINTING?De.create(e):t===qe.a.TYPE.DRAWING?xe.create(e):Re.create(e)});return function(t,n){return e.apply(this,arguments)}}(),lt=function(){var e=at(function*(e,t,n){let r;return n===qe.a.TYPE.PAINTING?(yield De.update(nt({id:e},t),{where:{id:e}}),r=yield De.findOne({where:{id:e}})):n===qe.a.TYPE.DRAWING?(yield xe.update(nt({id:e},t),{returning:!0,where:{id:e}}),r=yield xe.findOne({where:{id:e}})):(yield Re.update(nt({id:e},t),{where:{id:e}}),r=yield Re.findOne({where:{id:e}}))});return function(t,n,r){return e.apply(this,arguments)}}(),ct=function(){var e=at(function*(e,t){return t===qe.a.TYPE.PAINTING?De.destroy({where:{id:e}}):t===qe.a.TYPE.DRAWING?xe.destroy({where:{id:e}}):Re.destroy({where:{id:e}})});return function(t,n){return e.apply(this,arguments)}}();function dt(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function pt(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}function ft(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(e){pt(a,r,i,o,s,"next",e)}function s(e){pt(a,r,i,o,s,"throw",e)}o(void 0)})}}const ht={Mutation:{addItem(e,t,{req:n}){let{input:{pictures:r,type:i}}=t,a=dt(t.input,["pictures","type"]);return ft(function*(){if(!(yield tt(n)))throw new Error("Erreur d'authentification");const{title:e}=a;if(yield ot(e,i))throw new Error("Nom de l'item déjà existant en Bdd");let t;if(!(t=i===qe.a.TYPE.SCULPTURE?yield Fe(r,e):yield Ke(r[0],e,i)))throw new Error("Erreur à l'écriture des fichiers");const o=yield ut(a,i);if(!o)throw new Error("Erreur à l'enregistrement en base de donnée");return o})()},updateItem(e,t,{req:n}){let{id:r,input:{pictures:i,type:a}}=t,o=dt(t.input,["pictures","type"]);return ft(function*(){if(!(yield tt(n)))throw new Error("Erreur d'authentification");const e=yield st(r,a);if(!e)throw new Error("Item à modifier introuvable en BDD");const{title:t}=o,s=yield ot(t,a);if(s&&s.id!==r)throw new Error("Nom d'item déjà existant en Bdd");const u=e.title;if(i.length>0){if(!(yield Ze(u,a)))throw new Error("Echec de la suppression des anciennes images");let e;if(!(e=a===qe.a.TYPE.SCULPTURE?yield Fe(i,t):yield Ke(i[0],t,a)))throw new Error("Erreur à l'écriture des nouveaux fichiers")}else if(u!==t){if(!(yield Je(u,t,a)))throw new Error("Erreur à l'écriture des nouveaux fichiers")}const l=yield lt(r,o,a);if(!l)throw new Error("Erreur à l'enregistrement en base de donnée");return l})()},deleteItem:(e,{id:t,type:n},{req:r})=>ft(function*(){if(!(yield tt(r)))throw new Error("Erreur d'authentification");const e=yield st(t,n);if(!e)throw new Error("Item absent en BDD");if(!(yield Ze(e.title,n)))throw new Error("Echec de la suppression des images");return ct(t,n).then(e=>e).catch(()=>{throw new Error("Echec de la suppression en Bdd")}),t})()}},yt=[...ke,...["\n  input ItemInput {\n    pictures: [Upload]!\n    type: String!\n    title: String!\n    date: String!\n    technique: String!\n    description: String\n    length: Int\n    height: Int!\n    width: Int!\n  }\n  "]],mt=[...Ge],gt=[...["\n  addItem (\n    input: ItemInput!\n  ): Item!\n  \n  updateItem (\n    id: ID!\n    input: ItemInput!\n  ): Item!\n  \n  deleteItem(\n     id: ID!\n     type: String!\n  ): ID!\n"]],vt=Object(me.merge)(Me,ht);function wt(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}function Et(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(e){wt(a,r,i,o,s,"next",e)}function s(e){wt(a,r,i,o,s,"throw",e)}o(void 0)})}}const Tt=["\n  type DatabaseUser {\n    id: String\n    username: String\n    email: String\n    password: String\n  }\n"],It=["\n  getAllUsers: [DatabaseUser]\n\n  getUser(\n    username: String!\n  ): DatabaseUser\n  \n  checkIsAdmin: Boolean!\n"],Pt={RootQuery:{getAllUsers:()=>Et(function*(){return Oe.findAll()})(),getUser:(e,{username:t})=>Et(function*(){return Oe.findOne({where:{username:t}})})(),checkIsAdmin:(e,t,{req:n})=>Et(function*(){return n.session.isAdmin})()}};var St=n(16),bt=n.n(St);function At(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}function Nt(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(e){At(a,r,i,o,s,"next",e)}function s(e){At(a,r,i,o,s,"throw",e)}o(void 0)})}}const Ot=["\n  input SignupInput {\n    username: String!\n    email: String!\n    password: String!\n  }\n  \n  input LoginInput {\n    username: String!\n    password: String!\n  }\n"],Dt=["\n  signup(\n    input: SignupInput!\n  ): Boolean\n  \n  login(\n    input: LoginInput!\n  ): Boolean\n  \n  logout: Boolean\n"],Rt={Mutation:{signup:(Ct=Nt(function*(e,{input:t},{req:n}){if(yield Oe.findOne({where:{username:t.username}}))throw new Error("Utilisateur déjà existant");const r=yield bt.a.hash(t.password,10);if(!r)throw new Error("Erreur de hashing du mot de passe");const i=yield Oe.create({username:t.username,email:t.email,password:r});if(!i)throw new Error("Erreur à la création du user en BDD");return n.session.userId=i.id,!0}),function(e,t,n){return Ct.apply(this,arguments)}),login:(Ut=Nt(function*(e,{input:{username:t,password:n}},{req:r}){const i=yield Oe.findOne({where:{username:t}});return!!i&&(!!(yield bt.a.compare(n,i.password))&&(r.session.userId=i.id,!0))}),function(e,t,n){return Ut.apply(this,arguments)}),logout:(xt=Nt(function*(e,t,{req:n,res:r}){return n.session.destroy(()=>!1),r.clearCookie(x.a.auth.jwt.name),!0}),function(e,t,n){return xt.apply(this,arguments)})}};var xt,Ut,Ct;const qt=[...Tt,...Ot],jt=[...It],_t=[...Dt],kt=Object(me.merge)(Pt,Rt);function Gt(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}function Mt(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(e){Gt(a,r,i,o,s,"next",e)}function s(e){Gt(a,r,i,o,s,"throw",e)}o(void 0)})}}const Vt=["\n  type Content {\n    id: ID!\n    key: String!\n    text: String!\n  }\n"],$t=["\n  getAllContent: [Content]\n  \n  getContent(keyContent: String!): Content\n"],Lt={RootQuery:{getAllContent:()=>Mt(function*(){return yield Ue.findAll()})(),getContent:(e,{keyContent:t})=>Mt(function*(){return yield Ue.findOne({where:{key:t}})})()}};function Yt(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}function Ht(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(e){Yt(a,r,i,o,s,"next",e)}function s(e){Yt(a,r,i,o,s,"throw",e)}o(void 0)})}}const Bt=["\n  input ContentInput {\n    key: String!\n    text: String!\n  }\n  "],Wt=["\n  addContent(input: ContentInput!): Content!\n  \n  addPicture(picture: Upload!, title: String!): Boolean!\n"],zt={Mutation:{addContent:function(){var e=Ht(function*(e,{input:t},{req:n}){yield tt(n);const{key:r}=t;let i=yield Ue.findOne({where:{key:r}});return i?(yield i.update({text:t.text}),i=yield Ue.findOne({where:{key:r}})):i=yield Ue.create(t),i});return function(t,n,r){return e.apply(this,arguments)}}(),addPicture:(e,{picture:t,title:n},{req:r})=>Ht(function*(){if(!(yield tt(r)))throw new Error("Erreur d'authentification");const e=He.a.TYPE;if(!(yield Ke(t,n,e)))throw new Error("Erreur à l'écriture des fichiers");return!0})()}},Ft=[...Vt,...Bt],Kt=[...$t],Qt=[...Wt],Jt=Object(me.merge)(Lt,zt);function Xt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Zt,en=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){Xt(e,t,n[t])})}return e}({typeDefs:[...[" \n  schema { \n    query: RootQuery \n    mutation: Mutation \n  } \n"],...[` \n  type RootQuery { \n    ${[...mt,...jt,...Kt,...Ee]} \n  } \n`],...[` \n  type Mutation { \n    ${[...gt,..._t,...Qt,...Te]} \n  } \n`],...[...Ft,...yt,...qt,...ve]],resolvers:Object(me.merge)(vt,kt,Jt)},{}),tn=n(17),nn=n.n(tn);function rn(e,t,n,r){Zt||(Zt="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&i)for(var o in i)void 0===t[o]&&(t[o]=i[o]);else t||(t=i||{});if(1===a)t.children=r;else if(a>1){for(var s=new Array(a),u=0;u<a;u++)s[u]=arguments[u+3];t.children=s}return{$$typeof:Zt,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function an(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}function on(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){sn(e,t,n[t])})}return e}function sn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}process.on("unhandledRejection",(e,t)=>{console.error("Unhandled Rejection at:",t,"reason:",e),process.exit(1)}),global.navigator=global.navigator||{},global.navigator.userAgent=global.navigator.userAgent||"all";const un=o()();un.set("trust proxy",x.a.trustProxy),un.use(o.a.static(i.a.resolve(__dirname,"public"))),un.use("/images",o.a.static(i.a.resolve(x.a.libraryPath))),un.use(u.a.urlencoded({extended:!0})),un.use(u.a.json()),un.use(v()({credentials:!0,origin:"http://localhost:3000"})),un.use(E()({name:x.a.auth.jwt.name,secret:x.a.auth.jwt.secret,resave:!0,saveUninitialized:!0,cookie:{httpOnly:!0,secure:!0,maxAge:864e5}})),new m.ApolloServer(on({},en,{context:({req:e,res:t})=>({req:e,res:t}),uploads:!0,introspection:!1,playground:!1,debug:!1,pretty:!1})).applyMiddleware({app:un}),un.get("*",function(){var e,t=(e=function*(e,t,n){try{const r=new Set,i=(...e)=>{e.forEach(e=>r.add(e._getCss()))},a=Se({schema:Object(m.makeExecutableSchema)(en),context:{req:e}}),o={pathname:e.path,query:e.query,client:a},s=yield se.resolve(o);if(s.redirect)return void t.redirect(s.status||302,s.redirect);const u=on({},s),l=rn(N,{context:o,client:a,insertCss:i},void 0,s.component);yield Object(y.getDataFromTree)(l),u.children=yield p.a.renderToString(l),u.styles=[{id:"css",cssText:[...r].join("")}];const d=new Set,f=e=>{nn.a[e]&&nn.a[e].forEach(e=>d.add(e))};f("client"),s.chunk&&f(s.chunk),s.chunks&&s.chunks.forEach(f),u.scripts=Array.from(d),u.app={apiUrl:x.a.api.clientUrl,cache:a.extract()};const h=p.a.renderToStaticMarkup(c.a.createElement(H,u));t.status(s.status||200),t.send(`<!doctype html>${h}`)}catch(e){n(e)}},function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(e){an(a,r,i,o,s,"next",e)}function s(e){an(a,r,i,o,s,"throw",e)}o(void 0)})});return function(e,n,r){return t.apply(this,arguments)}}());const ln=new h.a;ln.skipNodeFiles(),ln.skipPackage("express"),un.use((e,t,n,r)=>{console.error(ln.render(e));const i=p.a.renderToStaticMarkup(rn(H,{title:"Internal Server Error",description:e.message,keywords:"Error",styles:[{id:"css",cssText:F.a._getCss()}]},void 0,p.a.renderToString(rn(ee,{error:e}))));n.status(e.status||500),n.send(`<!doctype html>${i}`)}),Ce.sync().catch(e=>console.error(e.stack)).then(()=>{un.listen(x.a.port,()=>{console.info(`The server is running at http://localhost:${x.a.port}/`)})});t.default=un},function(e,t){e.exports=require("react-modal")},function(e,t){e.exports=require("react-apollo/index")},function(e,t){e.exports=require("react-tabs")},function(e,t){e.exports=require("react-day-picker/DayPickerInput")},function(e,t){e.exports=require("react-day-picker/moment")},function(e,t){e.exports=require("history")},function(e,t){e.exports=require("react-burger-menu")},function(e,t){e.exports=require("fbjs/lib/ExecutionEnvironment")},function(e,t){e.exports=require("moment")},function(e,t){e.exports=require("react-icons/fa/index")},function(e,t){e.exports=require("react-icons/fa")}]);
//# sourceMappingURL=server.js.map