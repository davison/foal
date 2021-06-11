(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{109:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),a=(t(0),t(290)),i={title:"gRPC"},c={unversionedId:"api-section/gRPC",id:"api-section/gRPC",isDocsHomePage:!1,title:"gRPC",description:"gRPC is a Remote Procedure Call (RPC) framework that can run in any environment. It can connect services in and across data centers with pluggable support for load balancing, tracing, health checking and authentication. It is also applicable in last mile of distributed computing to connect devices, mobile applications and browsers to backend services.",source:"@site/docs/api-section/gRPC.md",slug:"/api-section/gRPC",permalink:"/docs/api-section/gRPC",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/api-section/gRPC.md",version:"current",sidebar:"someSidebar",previous:{title:"GraphQL",permalink:"/docs/api-section/graphql"},next:{title:"Single Page Applications (SPA)",permalink:"/docs/frontend-integration/single-page-applications"}},s=[{value:"Installation &amp; Configuration",id:"installation--configuration",children:[]},{value:"The <code>gRPC</code> Service",id:"the-grpc-service",children:[]},{value:"Using Promises",id:"using-promises",children:[]},{value:"Limitations",id:"limitations",children:[]}],l={toc:s};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"gRPC is a Remote Procedure Call (RPC) framework that can run in any environment. It can connect services in and across data centers with pluggable support for load balancing, tracing, health checking and authentication. It is also applicable in last mile of distributed computing to connect devices, mobile applications and browsers to backend services."),Object(a.b)("p",null,"This page shows how to use gRPC in Foal. It is based on the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://grpc.io/docs/languages/node/basics/"}),"official gRPC tutorial"),"."),Object(a.b)("h2",{id:"installation--configuration"},"Installation & Configuration"),Object(a.b)("p",null,"First you need to install some additional dependencies."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install @grpc/grpc-js @grpc/proto-loader\nnpm install cpx2 --save-dev\n")),Object(a.b)("p",null,"Then update your ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," so that your build scripts will correctly copy your ",Object(a.b)("inlineCode",{parentName:"p"},".proto")," files into the ",Object(a.b)("inlineCode",{parentName:"p"},"build/")," directory."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "build": "foal rmdir build && cpx \\"src/**/*.proto\\" build && tsc -p tsconfig.app.json",\n  "develop": "npm run build && concurrently \\"cpx \\\\\\"src/**/*.proto\\\\\\" build -w\\" \\"tsc -p tsconfig.app.json -w\\" \\"supervisor -w ./build,./config -e js,json,yml,proto --no-restart-on error ./build/index.js\\"",\n  "build:test": "foal rmdir build && cpx \\"src/**/*.proto\\" build && tsc -p tsconfig.test.json",\n  "test": "npm run build:test && concurrently \\"cpx \\\\\\"src/**/*.proto\\\\\\" build -w\\" \\"tsc -p tsconfig.test.json -w\\" \\"mocha --file ./build/test.js -w --watch-files build \\\\\\"./build/**/*.spec.js\\\\\\"\\"",\n  "build:e2e": "foal rmdir build && cpx \\"src/**/*.proto\\" build && tsc -p tsconfig.e2e.json",\n  "e2e": "npm run build:e2e && concurrently \\"cpx \\\\\\"src/**/*.proto\\\\\\" build -w\\" \\"tsc -p tsconfig.e2e.json -w\\" \\"mocha --file ./build/e2e.js -w --watch-files build \\\\\\"./build/e2e/**/*.js\\\\\\"\\"",\n    ...\n}\n')),Object(a.b)("h2",{id:"the-grpc-service"},"The ",Object(a.b)("inlineCode",{parentName:"h2"},"gRPC")," Service"),Object(a.b)("p",null,"Create your ",Object(a.b)("inlineCode",{parentName:"p"},"spec.proto")," file and save it to ",Object(a.b)("inlineCode",{parentName:"p"},"src/app"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-proto"}),'syntax = "proto3";\n\npackage helloworld;\n\n// The greeting service definition.\nservice Greeter {\n  // Sends a greeting\n  rpc SayHello (HelloRequest) returns (HelloReply) {}\n}\n\n// The request message containing the user\'s name.\nmessage HelloRequest {\n  string name = 1;\n}\n\n// The response message containing the greetings\nmessage HelloReply {\n  string message = 1;\n}\n')),Object(a.b)("p",null,"Add the ",Object(a.b)("inlineCode",{parentName:"p"},"Greeter")," service."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"services/greeter.service.ts")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"export class Greeter {\n\n  sayHello(call, callback) {\n    callback(null, {message: 'Hello ' + call.request.name});\n  }\n\n}\n\n")),Object(a.b)("p",null,"The next step is to create a service that will instantiate the gRPC server."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"services/grpc.service.ts")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"// std\nimport { join } from 'path';\n\n// 3p\nimport { dependency } from '@foal/core';\nimport * as grpc from '@grpc/grpc-js';\nimport * as protoLoader  from '@grpc/proto-loader';\n\n// App\nimport { Greeter } from './greeter.service';\n\nexport class Grpc {\n  @dependency\n  greeter: Greeter;\n\n  boot(): Promise<void> {\n    const PROTO_PATH = join(__dirname, '../spec.proto');\n    const packageDefinition = protoLoader.loadSync(\n      PROTO_PATH,\n      {\n        keepCase: true,\n        longs: String,\n        enums: String,\n        defaults: true,\n        oneofs: true\n      }\n    );\n\n    const helloProto: any = grpc.loadPackageDefinition(packageDefinition).helloworld;\n    const server = new grpc.Server();\n    server.addService(helloProto.Greeter.service, this.greeter as any);\n    // OR\n    // server.addService(helloProto.Greeter.service, {\n    //   sayHello: this.greeter.sayHello.bind(this.greeter)\n    // } as any);\n\n    return new Promise((resolve, reject) => {\n      server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), error => {\n        if (error) {\n          return reject(error);\n        }\n        server.start();\n        return resolve();\n      });\n    })\n  }\n\n}\n\n")),Object(a.b)("p",null,"Finally, inject the service in the application."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"export class AppController {\n  @dependency\n  grpc: Grpc;\n\n  // ...\n}\n\n")),Object(a.b)("h2",{id:"using-promises"},"Using Promises"),Object(a.b)("p",null,"Using callbacks in the grpc services can be quite tedious. To convert methods into functions that use promises, you can use the decorator below."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { callbackify } from 'util';\n\nfunction async (target: any, propertyKey: string, descriptor: PropertyDescriptor) {\n  descriptor.value = callbackify(descriptor.value);\n};\n\nexport class Greeter {\n\n  @async\n  async sayHello(call) {\n    return { message: 'Hello ' + call.request.name };\n  }\n\n}\n\n")),Object(a.b)("h2",{id:"limitations"},"Limitations"),Object(a.b)("p",null,"The implementation above do not use Foal regular controllers. This has two consequences:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"hooks cannot be used,"),Object(a.b)("li",{parentName:"ul"},"and error-handling is entirely managed by the gRPC server. The ",Object(a.b)("inlineCode",{parentName:"li"},"AppController.handleError")," cannot be used.")))}p.isMDXComponent=!0},290:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return g}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,g=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return t?o.a.createElement(g,c(c({ref:n},l),{},{components:t})):o.a.createElement(g,c({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);