(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{146:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return d}));var o=t(3),a=t(7),r=(t(0),t(171)),i=t(175),c=t(176),l={title:"New Configuration System"},s={unversionedId:"upgrade-to-v2/config-system",id:"upgrade-to-v2/config-system",isDocsHomePage:!1,title:"New Configuration System",description:"The Config.get Method",source:"@site/docs/upgrade-to-v2/config-system.md",slug:"/upgrade-to-v2/config-system",permalink:"/foal/docs/upgrade-to-v2/config-system",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/upgrade-to-v2/config-system.md",version:"current"},b=[{value:"The <code>Config.get</code> Method",id:"the-configget-method",children:[]},{value:"Environment Variables",id:"environment-variables",children:[]},{value:"The <code>Config</code> and <code>ConfigMock</code> services",id:"the-config-and-configmock-services",children:[]},{value:"New features",id:"new-features",children:[{value:"Multiple <code>.env</code> files for each environment",id:"multiple-env-files-for-each-environment",children:[]},{value:"Read an environment variable from <code>.env</code>",id:"read-an-environment-variable-from-env",children:[]},{value:"Comments and quotes in <code>.env</code> files",id:"comments-and-quotes-in-env-files",children:[]},{value:"JS configuration files",id:"js-configuration-files",children:[]},{value:"Cloud PaaS providers",id:"cloud-paas-providers",children:[]}]}],u={rightToc:b};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"the-configget-method"},"The ",Object(r.b)("inlineCode",{parentName:"h2"},"Config.get")," Method"),Object(r.b)("p",null,"The legacy ",Object(r.b)("inlineCode",{parentName:"p"},"Config.get")," method has been removed and the ",Object(r.b)("inlineCode",{parentName:"p"},"Config.get2")," method has been renamed to ",Object(r.b)("inlineCode",{parentName:"p"},"Config.get"),"."),Object(r.b)("p",null,"If you were still using the old method, update your code as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"// Version 1\nconst foobar = Config.get('hello.world');\nconst debug = Config.get<boolean>('settings.debug');\nconst port = Config.get('port', 3001);\nconst port = Config.get<number>('port', 3001);\n\n// Version 2\nconst foobar = Config.get('hello.world');\nconst debug = Config.getOrThrow('settings.debug', 'boolean');\nconst port = Config.get('port', 'number', 3001);\nconst port = Config.get('port', 'number', 3001);\n")),Object(r.b)("p",null,"More details can be found ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/foal/docs/deployment-and-environments/configuration"}),"here"),"."),Object(r.b)("h2",{id:"environment-variables"},"Environment Variables"),Object(r.b)("p",null,"Environment variables are no longer loaded by default. You must specify them explicitly."),Object(r.b)("p",null,"For example, ",Object(r.b)("inlineCode",{parentName:"p"},"Config.get('settings.jwt.secret')")," will not return the environment variable ",Object(r.b)("inlineCode",{parentName:"p"},"SETTINGS_JWT_SECRET")," by default. To do this, you must specify it explicitly in a configuration file:"),Object(r.b)(i.a,{groupId:"config",defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"yaml",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  jwt:\n    secret: env(SETTINGS_JWT_SECRET)\n"))),Object(r.b)(c.a,{value:"json",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "jwt": {\n      "secret": "env(SETTINGS_JWT_SECRET)",\n    }\n  }\n}\n'))),Object(r.b)(c.a,{value:"js",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"const { Env } = require('@foal/core');\n\nmodule.exports = {\n  settings: {\n    jwt: {\n      secret: Env.get('SETTINGS_JWT_SECRET')\n    }\n  }\n}\n")))),Object(r.b)("h2",{id:"the-config-and-configmock-services"},"The ",Object(r.b)("inlineCode",{parentName:"h2"},"Config")," and ",Object(r.b)("inlineCode",{parentName:"h2"},"ConfigMock")," services"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"Config")," class can no longer be used as a service. You must use its static methods instead. Therefore, the ",Object(r.b)("inlineCode",{parentName:"p"},"ConfigMock")," class has also been removed."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"// Before\nexport class Controller {\n  @dependency\n  config: Config;\n\n  foo() {\n    const foobar = this.config.get('foobar');\n  }\n}\n\n// After\nexport class Controller {\n  foo() {\n    const foobar = Config.get('foobar');\n  }\n}\n\n")),Object(r.b)("h2",{id:"new-features"},"New features"),Object(r.b)("h3",{id:"multiple-env-files-for-each-environment"},"Multiple ",Object(r.b)("inlineCode",{parentName:"h3"},".env")," files for each environment"),Object(r.b)("p",null,"Just like the JSON and YAML configuration files, it is now possible to have a separate ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file for each environment: ",Object(r.b)("inlineCode",{parentName:"p"},".env.test"),", ",Object(r.b)("inlineCode",{parentName:"p"},".env.production"),", etc."),Object(r.b)("p",null,"The values provided in a ",Object(r.b)("inlineCode",{parentName:"p"},".env.{environment}")," file override those defined in the default ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file."),Object(r.b)("h3",{id:"read-an-environment-variable-from-env"},"Read an environment variable from ",Object(r.b)("inlineCode",{parentName:"h3"},".env")),Object(r.b)("p",null,"Environment variables defined in the ",Object(r.b)("inlineCode",{parentName:"p"},".env")," file can be accessed through the ",Object(r.b)("inlineCode",{parentName:"p"},"Env.get")," method."),Object(r.b)("h3",{id:"comments-and-quotes-in-env-files"},"Comments and quotes in ",Object(r.b)("inlineCode",{parentName:"h3"},".env")," files"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},".env")," files now support the use of comments and quotes."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"# This a comment\nHELLO=\"hello world\"\nHELLO='hello world'\n")),Object(r.b)("h3",{id:"js-configuration-files"},"JS configuration files"),Object(r.b)("p",null,"In addition to the JSON and YAML formats, configuration files can now also be written in JS."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"const { Env } = require('@foal/core');\n\nmodule.exports = {\n  settings: {\n    debug: false,\n    jwt: {\n      secret: Env.get('SETTINGS_JWT_SECRET')\n    }\n  }\n}\n")),Object(r.b)("h3",{id:"cloud-paas-providers"},"Cloud PaaS providers"),Object(r.b)("p",null,"Since the configuration keys are no longer linked to a specific environment variable, deployment with PaaS providers is facilitated."),Object(r.b)("p",null,"For example, in version 1, the URI of MongoDB had to be passed with the environment variable ",Object(r.b)("inlineCode",{parentName:"p"},"MONGODB_URI"),". If the cloud provider were giving the URI using the name ",Object(r.b)("inlineCode",{parentName:"p"},"MONGO_URI"),", things were becoming more difficult. This problem is now solved with the ",Object(r.b)("inlineCode",{parentName:"p"},"env(*)")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Env.get")," features."))}d.isMDXComponent=!0},171:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var o=t(0),a=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),b=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=b(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(t),p=o,f=u["".concat(i,".").concat(p)]||u[p]||d[p]||r;return t?a.a.createElement(f,c(c({ref:n},s),{},{components:t})):a.a.createElement(f,c({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},172:function(e,n,t){"use strict";function o(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=o(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=o(e))&&(a&&(a+=" "),a+=n);return a}},173:function(e,n,t){"use strict";var o=t(0),a=t(174);n.a=function(){const e=Object(o.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},174:function(e,n,t){"use strict";var o=t(0);const a=Object(o.createContext)(void 0);n.a=a},175:function(e,n,t){"use strict";var o=t(0),a=t.n(o),r=t(173),i=t(172),c=t(53),l=t.n(c);const s=37,b=39;n.a=function(e){const{lazy:n,block:t,children:c,defaultValue:u,values:d,groupId:p,className:f}=e,{tabGroupChoices:m,setTabGroupChoices:g}=Object(r.a)(),[v,O]=Object(o.useState)(u);if(null!=p){const e=m[p];null!=e&&e!==v&&d.some((n=>n.value===e))&&O(e)}const h=e=>{O(e),null!=p&&g(p,e)},j=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},f)},d.map((({value:e,label:n})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===e,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":v===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>{((e,n,t)=>{switch(t.keyCode){case b:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case s:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(j,e.target,e)},onFocus:()=>h(e),onClick:()=>{h(e)}},n)))),n?Object(o.cloneElement)(c.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},c.map(((e,n)=>Object(o.cloneElement)(e,{key:n,hidden:e.props.value!==v})))))}},176:function(e,n,t){"use strict";var o=t(3),a=t(0),r=t.n(a);n.a=function({children:e,hidden:n,className:t}){return r.a.createElement("div",Object(o.a)({role:"tabpanel"},{hidden:n,className:t}),e)}}}]);