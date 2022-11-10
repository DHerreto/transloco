"use strict";(self.webpackChunktransloco_docs=self.webpackChunktransloco_docs||[]).push([[1483],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=o.createContext({}),c=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||r;return t?o.createElement(g,l(l({ref:n},p),{},{components:t})):o.createElement(g,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<r;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7317:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=t(7462),a=t(3366),r=(t(7294),t(3905)),l=["components"],s={title:"Scope Configuration",description:"Scope Configuration | Transloco Angular i18n"},i=void 0,c={unversionedId:"lazy-load/scope-configuration",id:"lazy-load/scope-configuration",title:"Scope Configuration",description:"Scope Configuration | Transloco Angular i18n",source:"@site/docs/lazy-load/scope-configuration.mdx",sourceDirName:"lazy-load",slug:"/lazy-load/scope-configuration",permalink:"/transloco/docs/lazy-load/scope-configuration",draft:!1,editUrl:"https://github.com/ngneat/transloco/edit/master/docs/docs/lazy-load/scope-configuration.mdx",tags:[],version:"current",frontMatter:{title:"Scope Configuration",description:"Scope Configuration | Transloco Angular i18n"},sidebar:"docs",previous:{title:"Language API",permalink:"/transloco/docs/language-api"},next:{title:"Inline Loaders",permalink:"/transloco/docs/lazy-load/inline-loaders"}},p={},u=[{value:"Lazy Module Providers",id:"lazy-module-providers",level:2},{value:"Component&#39;s Providers",id:"components-providers",level:2},{value:"Inline Input",id:"inline-input",level:2},{value:"Scope&#39;s namespace",id:"scopes-namespace",level:2}],d={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Note that scopes follow ",(0,r.kt)("strong",{parentName:"p"},"Angular DI rules"),". They only work when declared in a lazy load module, or a component's providers.")),(0,r.kt)("p",null,"Let's say we have a todos page and we want to create separate translation files for this page, and load them only when the user navigates there.\nFirst, we need to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"todos")," folder (or whatever name you choose); In it, we create a translation file for each language we want to support:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500 i18n/\n   \u251c\u2500 en.json\n   \u251c\u2500 es.json\n   \u251c\u2500 todos/\n      \u251c\u2500 en.json\n      \u251c\u2500 es.json\n")),(0,r.kt)("p",null,"There are 3 levels of setting the translation scope:"),(0,r.kt)("h2",{id:"lazy-module-providers"},"Lazy Module Providers"),(0,r.kt)("p",null,"We can set it inside the ",(0,r.kt)("em",{parentName:"p"},"lazy module")," providers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todos.module.ts"',title:'"todos.module.ts"'},"const routes: Routes = [\n  {\n    path: '',\n    component: TodosComponent\n  }\n];\n\n@NgModule({\n  declarations: [TodosComponent],\n  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'todos' }],\n  imports: [RouterModule.forChild(routes), TranslocoModule]\n})\nexport class TodosModule {}\n")),(0,r.kt)("h2",{id:"components-providers"},"Component's Providers"),(0,r.kt)("p",null,"We can set it in a ",(0,r.kt)("em",{parentName:"p"},"component's providers"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todos.component.ts"',title:'"todos.component.ts"'},"@Component({\n  selector: 'my-comp',\n  templateUrl: './my-comp.component.html',\n  providers: [\n    {\n      provide: TRANSLOCO_SCOPE,\n      useValue: 'todos'\n    }\n  ]\n})\nexport class MyComponent {}\n")),(0,r.kt)("h2",{id:"inline-input"},"Inline Input"),(0,r.kt)("p",null,"We can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"scope")," input in the ",(0,r.kt)("inlineCode",{parentName:"p"},"transloco")," structural directive:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'{1} title="todos.component.html"',"{1}":!0,title:'"todos.component.html"'},"<ng-container *transloco=\"let t; scope: 'todos';\">\n  <h1>{{ t('todos.keyFromTodos') }}</h1>\n</ng-container>\n")),(0,r.kt)("p",null,"Each one of these options tells Transloco to load the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"scope")," based on the active language and merge it under the scope namespace into the active language translation object."),(0,r.kt)("p",null,"For example, if the active language is ",(0,r.kt)("inlineCode",{parentName:"p"},"en"),", it will load the ",(0,r.kt)("inlineCode",{parentName:"p"},"todos/en.json")," file, and will set the translation to be the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "header": "",\n  "login": "",\n  "todos": {\n    "submit": "",\n    "title": ""\n  }\n}\n')),(0,r.kt)("p",null,"Now we can access each one of the ",(0,r.kt)("inlineCode",{parentName:"p"},"todos")," keys by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"todos")," namespace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="todos.component.html"',title:'"todos.component.html"'},"<ng-container *transloco=\"let t\">\n  <h1>{{ t('todos.title') }}</h1>\n</ng-container>\n\n{{ 'todos.title' | transloco }}\n\n<span transloco=\"todos.submit\"></span>\n")),(0,r.kt)("h2",{id:"scopes-namespace"},"Scope's namespace"),(0,r.kt)("p",null,"By default, the namespace will be the ",(0,r.kt)("inlineCode",{parentName:"p"},"scope")," name (camel cased), but we can override it by providing custom ",(0,r.kt)("inlineCode",{parentName:"p"},"alias")," name in the module/component ",(0,r.kt)("inlineCode",{parentName:"p"},"scope")," provider:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'{6} title="todos.module.ts"',"{6}":!0,title:'"todos.module.ts"'},"@NgModule({\n  declarations: [TodosComponent],\n  providers: [\n    {\n      provide: TRANSLOCO_SCOPE,\n      useValue: { scope: 'todos', alias: 'customName'  }\n    }\n  ],\n  imports: [RouterModule.forChild(routes), TranslocoModule]\n})\nexport class TodosModule {}\n")),(0,r.kt)("p",null,"Now we can access it through ",(0,r.kt)("inlineCode",{parentName:"p"},"customName")," instead of the original scope name (",(0,r.kt)("inlineCode",{parentName:"p"},"todos")," in our case):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="todos.component.html"',title:'"todos.component.html"'},"<ng-container *transloco=\"let t\">\n  <h1>{{ t('customName.title') }}</h1>\n</ng-container>\n\n{{ 'customName.title' | transloco }}\n\n<span transloco=\"customName.submit\"></span>\n")))}m.isMDXComponent=!0}}]);