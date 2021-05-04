(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{176:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return c}));var n=r(3),o=r(7),i=(r(0),r(271)),a={title:"Introduction"},s={unversionedId:"tutorials/multi-user-todo-list/1-Introduction",id:"tutorials/multi-user-todo-list/1-Introduction",isDocsHomePage:!1,title:"Introduction",description:"Dans ce tutoriel, vous apprendrez comment g\xe9rer les utilisateurs, l'authentification et l'autorisation dans FoalTS. Vous aurez \xe9galement un aper\xe7u rapide des tests de bout en bout.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/multi-user-todo-list/1-Introduction.md",slug:"/tutorials/multi-user-todo-list/1-Introduction",permalink:"/fr/docs/tutorials/multi-user-todo-list/1-Introduction",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/fr/docusaurus-plugin-content-docs/current/tutorials/multi-user-todo-list/1-Introduction.md",version:"current",sidebar:"someSidebar",previous:{title:"Tests Unitaires",permalink:"/fr/docs/tutorials/simple-todo-list/7-unit-testing"},next:{title:"Les Mod\xe8les User & Todo",permalink:"/fr/docs/tutorials/multi-user-todo-list/2-the-user-and-todo-models"}},u=[],l={toc:u};function c(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Dans ce tutoriel, vous apprendrez comment g\xe9rer les utilisateurs, l'authentification et l'autorisation dans FoalTS. Vous aurez \xe9galement un aper\xe7u rapide des tests de bout en bout."),Object(i.b)("p",null,"Pour cela, vous allez cr\xe9er une liste de t\xe2ches multi-utilisateurs. Elle prolongera l'application cr\xe9\xe9e dans le tutoriel pr\xe9c\xe9dent ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/fr/docs/tutorials/simple-todo-list/1-installation"}),"To-Do Liste Simple")," que vous devez suivre avant de passer \xe0 celui-ci."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Le code source du premier tutoriel est disponible ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://foalts.org/simple-todo-list-source-code-v2.zip"}),"ici"),".")),Object(i.b)("p",null,"L'application aura trois pages :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"une page d'inscription o\xf9 les utilisateurs peuvent cr\xe9er un nouveau compte avec une adresse email et un mot de passe,"),Object(i.b)("li",{parentName:"ul"},"une page de connexion qui attend une adresse email et un mot de passe pour s'identifier,"),Object(i.b)("li",{parentName:"ul"},"et la page todo-list o\xf9 les t\xe2ches sont list\xe9es, cr\xe9\xe9es et supprim\xe9es.")),Object(i.b)("p",null,"Chaque utilisateur aura ses propres todos et ne pourra pas visualiser, cr\xe9er ou supprimer les todos d'autres personnes."),Object(i.b)("p",null,"Les pages ressemblent \xe0 ceci :"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Sign up page",src:r(376).default}),"\n",Object(i.b)("img",{alt:"Login page",src:r(377).default}),"\n",Object(i.b)("img",{alt:"To-do list page",src:r(378).default})),Object(i.b)("p",null,"Commen\xe7ons !"))}c.isMDXComponent=!0},271:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),c=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(r),b=n,m=p["".concat(a,".").concat(b)]||p[b]||d[b]||i;return r?o.a.createElement(m,s(s({ref:t},l),{},{components:r})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},376:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/signup-24e5a30a94173658dc445232caddae9b.png"},377:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/signin-d9b7a51ae39f660381153f16f7735a7f.png"},378:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/todo-list-f4c43484fae484238862186d723f3934.png"}}]);