(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{185:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return u}));var a=t(3),r=t(7),i=(t(0),t(259)),o=t(263),l=t(264),c={title:"What's new in version 2 (part 1/4)",author:"Lo\xefc Poullain",author_title:"Fullstack developper and creator of FoalTS",author_url:"https://github.com/LoicPoullain",author_image_url:"https://avatars1.githubusercontent.com/u/13604533?v=4",tags:["release"]},s={permalink:"/fr/blog/2021/02/17/whats-new-in-version-2-part-1",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/blog/2021-02-17-whats-new-in-version-2-part-1.md",source:"@site/blog/2021-02-17-whats-new-in-version-2-part-1.md",description:"Banner",date:"2021-02-17T00:00:00.000Z",tags:[{label:"release",permalink:"/fr/blog/tags/release"}],title:"What's new in version 2 (part 1/4)",readingTime:4.5,truncated:!0,nextItem:{title:"Version 2.1 release notes",permalink:"/fr/blog/2021/02/03/version-2.1-release-notes"}},b=[{value:"New CLI commands",id:"new-cli-commands",children:[{value:"Generating migrations",id:"generating-migrations",children:[]},{value:"Running migrations",id:"running-migrations",children:[]},{value:"Build and run scripts in watch mode (development)",id:"build-and-run-scripts-in-watch-mode-development",children:[]},{value:"Revert one migration",id:"revert-one-migration",children:[]},{value:"Build migrations, scripts and the app",id:"build-migrations-scripts-and-the-app",children:[]}]},{value:"Service and Application Initialization",id:"service-and-application-initialization",children:[]},{value:"The <code>AppController</code> interface",id:"the-appcontroller-interface",children:[]},{value:"Custom Error-Handling &amp; Hook Post Functions",id:"custom-error-handling--hook-post-functions",children:[]},{value:"Accessing File Metadata during Uploads",id:"accessing-file-metadata-during-uploads",children:[]}],p={toc:b};function u(e){var n=e.components,c=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,c,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",{alt:"Banner",src:t(290).default})),Object(i.b)("p",null,"Version 2 of Foal has been released in December 2020 \ud83c\udf89. This series of four articles presents the major new features."),Object(i.b)("p",null,"Let's get started!"),Object(i.b)("h2",{id:"new-cli-commands"},"New CLI commands"),Object(i.b)("p",null,"In version 1, there were many commands to use, and this, in a specific order. Running and generating migrations from model changes required four commands and building the whole application needed three."),Object(i.b)("p",null,"In version 2, the number of CLI commands has been reduced and they have been simplified so that one action matches one command."),Object(i.b)("h3",{id:"generating-migrations"},"Generating migrations"),Object(i.b)("p",null,"This command generates migrations by comparing the current database schema and the latest changes in your models."),Object(i.b)(o.a,{defaultValue:"v2",values:[{label:"Version 2",value:"v2"},{label:"Version 1",value:"v1"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"v2",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm run makemigrations\n"))),Object(i.b)(l.a,{value:"v1",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm run build:app\nnpm run migration:generate -- -n my_migration\n")))),Object(i.b)("h3",{id:"running-migrations"},"Running migrations"),Object(i.b)("p",null,"This command builds and runs all migrations."),Object(i.b)(o.a,{defaultValue:"v2",values:[{label:"Version 2",value:"v2"},{label:"Version 1",value:"v1"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"v2",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm run migrations\n"))),Object(i.b)(l.a,{value:"v1",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm run build:migrations\nnpm run migration:run\n")))),Object(i.b)("h3",{id:"build-and-run-scripts-in-watch-mode-development"},"Build and run scripts in watch mode (development)"),Object(i.b)("p",null,"If you want to re-build your scripts each time a file is change, you can execute ",Object(i.b)("inlineCode",{parentName:"p"},"npm run develop")," in a separate terminal."),Object(i.b)(o.a,{defaultValue:"v2",values:[{label:"Version 2",value:"v2"},{label:"Version 1",value:"v1"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"v2",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# In one terminal:\nnpm run develop\n\n# In another terminal:\nfoal run my-script\n"))),Object(i.b)(l.a,{value:"v1",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# In one terminal:\nnpm run build:scripts:w\n\n# In another terminal:\nfoal run my-script\n")))),Object(i.b)("h3",{id:"revert-one-migration"},"Revert one migration"),Object(i.b)("p",null,"This command reverts the last executed migration."),Object(i.b)(o.a,{defaultValue:"v2",values:[{label:"Version 2",value:"v2"},{label:"Version 1",value:"v1"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"v2",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm run revertmigration\n"))),Object(i.b)(l.a,{value:"v1",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm run migration:revert\n")))),Object(i.b)("h3",{id:"build-migrations-scripts-and-the-app"},"Build migrations, scripts and the app"),Object(i.b)("p",null,"This command builds the application, the scripts and the migrations. Unit and e2e tests are not included."),Object(i.b)(o.a,{defaultValue:"v2",values:[{label:"Version 2",value:"v2"},{label:"Version 1",value:"v1"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"v2",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm run build\n"))),Object(i.b)(l.a,{value:"v1",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm run build:app\nnpm run build:scripts\nnpm run build:migrations\n")))),Object(i.b)("h2",{id:"service-and-application-initialization"},"Service and Application Initialization"),Object(i.b)("p",null,"In version 1, it was possible to add an ",Object(i.b)("inlineCode",{parentName:"p"},"init")," method to the ",Object(i.b)("inlineCode",{parentName:"p"},"AppController")," class and ",Object(i.b)("inlineCode",{parentName:"p"},"boot")," methods in the services to initialize the application. These features needed special options in order to be activated."),Object(i.b)("p",null,"Starting from version 2, they are enabled by default."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export class AppController {\n  // ...\n\n  init() {\n    // Execute some code.\n  }\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export class MyService {\n  // ...\n\n  boot() {\n    // Execute some code.\n  }\n}\n")),Object(i.b)("h2",{id:"the-appcontroller-interface"},"The ",Object(i.b)("inlineCode",{parentName:"h2"},"AppController")," interface"),Object(i.b)("p",null,"This optional interface allows you to check that the ",Object(i.b)("inlineCode",{parentName:"p"},"subControllers")," property has the correct type as well as the ",Object(i.b)("inlineCode",{parentName:"p"},"init")," and ",Object(i.b)("inlineCode",{parentName:"p"},"handleError")," methods."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export class AppController implements IAppController {\n  subControllers = [\n    controller('/api', ApiController)\n  ];\n\n  init() {\n    // ...\n  }\n\n  handleError(error, ctx) {\n    // ...\n  }\n}\n")),Object(i.b)("h2",{id:"custom-error-handling--hook-post-functions"},"Custom Error-Handling & Hook Post Functions"),Object(i.b)("p",null,"In version 1, when an error was thrown or rejected in a hook or a controller method, the remaining hook post functions were not executed."),Object(i.b)("p",null,"Starting from version 2, the error is directly converted to an ",Object(i.b)("inlineCode",{parentName:"p"},"HttpResponseInternalServerError")," and passed to the next post hook functions."),Object(i.b)("p",null,"This can be useful in case we want to use exceptions as HTTP responses without breaking the hook post functions."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Example")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"class PermissionError extends Error {}\n\nclass UserService {\n\n  async listUsers(applicant: User): Promise<User[]> {\n    if (!ctx.user.isAdmin) {\n      // Use exception here.\n      throw new PermissionError();\n    }\n\n    return User.find({ org: user.org });\n  }\n\n}\n\n// This hook measures the execution time and the controller method and hooks.\n@Hook(() => {\n  const time = process.hrtime();\n\n  // This post function will still be executed\n  // even if an error is thrown in listUsers.\n  return () => {\n    const seconds = process.hrtime(time)[0];\n    console.log(`Executed in ${seconds} seconds`);\n  };\n})\nexport class AppController {\n\n  @dependency\n  users: UserService;\n\n  @Get('/users')\n  @UseSessions({ user: fetchUser(User) })\n  @UserRequired()\n  listUsers(ctx: Context<User>) {\n    return new HttpResponseOK(\n      await users.listUsers(ctx.user)\n    );\n  }\n\n  handleError(error: Error, ctx: Context) {\n    // Converts the exception to an HTTP response.\n    // The error can have been thrown in a service used by the controller.\n    if (error instanceof PermissionError) {\n      return new HttpResponseForbidden();\n    }\n\n    // Returns an HttpResponseInternalServerError.\n    return renderError(error, response);\n  }\n}\n")),Object(i.b)("h2",{id:"accessing-file-metadata-during-uploads"},"Accessing File Metadata during Uploads"),Object(i.b)("p",null,"When using the ",Object(i.b)("inlineCode",{parentName:"p"},"@ValidateMultipartFormDataBody")," hook to handle file upload, it is now possible to access the file metadata."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Example")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export class UserController {\n\n  @Post('/profile')\n  @ValidateMultipartFormDataBody({\n    files: {\n      profile: { required: true },\n    }\n  })\n  uploadProfilePhoto(ctx: Context) {\n    const file = ctx.request.body.files.profile;\n    // file.mimeType, file.buffer\n  }\n\n}\n")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"encoding")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Encoding type of the file")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"filename")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"string\\|undefined")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Name of the file on the user's computer")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"mimeType")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Mime type of the file")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"path")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Path where the file has been saved. If the ",Object(i.b)("inlineCode",{parentName:"td"},"saveTo")," option was not provided, the value is an empty string.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"buffer")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"Buffer")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Buffer containing the entire file. If the ",Object(i.b)("inlineCode",{parentName:"td"},"saveTo")," option was provided, the value is an empty buffer.")))))}u.isMDXComponent=!0},259:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),b=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=b(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(t),d=a,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return t?r.a.createElement(m,l(l({ref:n},s),{},{components:t})):r.a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},260:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},261:function(e,n,t){"use strict";var a=t(0),r=t(262);n.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},262:function(e,n,t){"use strict";var a=t(0),r=Object(a.createContext)(void 0);n.a=r},263:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(261),o=t(260),l=t(56),c=t.n(l),s=37,b=39;n.a=function(e){var n=e.lazy,t=e.block,l=e.defaultValue,p=e.values,u=e.groupId,d=e.className,m=Object(i.a)(),O=m.tabGroupChoices,h=m.setTabGroupChoices,j=Object(a.useState)(l),f=j[0],g=j[1],v=a.Children.toArray(e.children);if(null!=u){var y=O[u];null!=y&&y!==f&&p.some((function(e){return e.value===y}))&&g(y)}var N=function(e){g(e),null!=u&&h(u,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},d)},p.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===n,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case b:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case s:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(w,e.target,e)},onFocus:function(){return N(n)},onClick:function(){N(n)}},t)}))),n?Object(a.cloneElement)(v.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==f})}))))}},264:function(e,n,t){"use strict";var a=t(3),r=t(0),i=t.n(r);n.a=function(e){var n=e.children,t=e.hidden,r=e.className;return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:r}),n)}},290:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/banner-1062d67acd6a063e9c6cc005928e2062.png"}}]);