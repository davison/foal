(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{180:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(259)),i={title:"Version 2.1 release notes",author:"Lo\xefc Poullain",author_title:"Fullstack developper and creator of FoalTS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",tags:["release"]},s={permalink:"/fr/blog/2021/02/03/version-2.1-release-notes",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2021-02-03-version-2.1-release-notes.md",source:"@site/blog/2021-02-03-version-2.1-release-notes.md",description:"Banner",date:"2021-02-03T00:00:00.000Z",tags:[{label:"release",permalink:"/fr/blog/tags/release"}],title:"Version 2.1 release notes",readingTime:1.495,truncated:!0,prevItem:{title:"What's new in version 2 (part 1/4)",permalink:"/fr/blog/2021/02/17/whats-new-in-version-2-part-1"}},l=[{value:"New Error Page Design",id:"new-error-page-design",children:[]},{value:"New Welcome Page",id:"new-welcome-page",children:[]},{value:"CLI exits with code 1 when a command fails",id:"cli-exits-with-code-1-when-a-command-fails",children:[]},{value:"New <code>@All</code> decorator",id:"new-all-decorator",children:[]},{value:"New CSRF option in <code>@UseSessions</code> and <code>@JWT</code>",id:"new-csrf-option-in-usesessions-and-jwt",children:[]},{value:"Support of <code>better-sqlite3</code>",id:"support-of-better-sqlite3",children:[]}],c={toc:l};function p(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",{alt:"Banner",src:n(289).default})),Object(a.b)("p",null,"Version 2.1 has been released! Here are the improvements that it brings."),Object(a.b)("h2",{id:"new-error-page-design"},"New Error Page Design"),Object(a.b)("p",null,"When an error is thrown or rejected in development, the server returns an error page with some debugging details. The UI of this page has been improved and it now provides more information."),Object(a.b)("p",null,Object(a.b)("img",{alt:"Error page",src:n(365).default})),Object(a.b)("h2",{id:"new-welcome-page"},"New Welcome Page"),Object(a.b)("p",null,"When creating a new project, the generated welcome page is also different."),Object(a.b)("p",null,Object(a.b)("img",{alt:"Welcome page",src:n(366).default})),Object(a.b)("h2",{id:"cli-exits-with-code-1-when-a-command-fails"},"CLI exits with code 1 when a command fails"),Object(a.b)("p",null,"This small improvement is useful when we want to stop a CI pipeline when one of its commands fails."),Object(a.b)("h2",{id:"new-all-decorator"},"New ",Object(a.b)("inlineCode",{parentName:"h2"},"@All")," decorator"),Object(a.b)("p",null,"This decorator handles all requests regardless of the HTTP verb (GET, POST, etc.)."),Object(a.b)("p",null,"It can be used for example to create a ",Object(a.b)("inlineCode",{parentName:"p"},"not found")," handler."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { All, HttpResponseNotFound } from '@foal/core';\n\nclass AppController {\n  subControllers = [ ViewController ];\n\n  @All('*')\n  notFound() {\n    return new HttpResponseNotFound('The route you are looking for does not exist.');\n  }\n}\n")),Object(a.b)("h2",{id:"new-csrf-option-in-usesessions-and-jwt"},"New CSRF option in ",Object(a.b)("inlineCode",{parentName:"h2"},"@UseSessions")," and ",Object(a.b)("inlineCode",{parentName:"h2"},"@JWT")),Object(a.b)("p",null,"This option allows you to override the behavior of the configuration specified globally with the key ",Object(a.b)("inlineCode",{parentName:"p"},"settings.session.csrf.enabled")," or the key ",Object(a.b)("inlineCode",{parentName:"p"},"settings.jwt.csrf.enabled"),"."),Object(a.b)("p",null,"It can be useful for example to disable the CSRF protection on a specific route."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { HttpResponseOK, Post, UseSessions } from '@foal/core';\n\nexport class ApiController {\n  @Post('/foo')\n  @UseSessions({ cookie: true })\n  foo() {\n    // This method has the CSRF protection enabled.\n    return new HttpResponseOK();\n  }\n\n  @Post('/bar')\n  @UseSessions({ cookie: true, csrf: false })\n  bar() {\n    // This method does not have the CSRF protection enabled.\n    return new HttpResponseOK();\n  }\n}\n\n")),Object(a.b)("h2",{id:"support-of-better-sqlite3"},"Support of ",Object(a.b)("inlineCode",{parentName:"h2"},"better-sqlite3")),Object(a.b)("p",null,"When using Foal with SQLite, you now have the choice between two drivers: ",Object(a.b)("inlineCode",{parentName:"p"},"sqlite3")," and ",Object(a.b)("inlineCode",{parentName:"p"},"better-sqlite3"),". The package ",Object(a.b)("inlineCode",{parentName:"p"},"better-sqlite3")," is used by default in new projects starting from this version on."))}p.isMDXComponent=!0},259:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(f,s(s({ref:t},c),{},{components:n})):o.a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},289:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/banner-64d50dc8df934fea97a407e6f47532de.png"},365:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/error-page-21d0ceed0c0839e2361e98f8c4145551.png"},366:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/welcome-page-e76abb3126e644b68ffddb46a38a8eb9.png"}}]);