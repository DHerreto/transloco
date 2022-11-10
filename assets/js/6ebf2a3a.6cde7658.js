"use strict";(self.webpackChunktransloco_docs=self.webpackChunktransloco_docs||[]).push([[8245],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3158:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Ng Add",description:"Schematics - Ng Add | Transloco Angular i18n"},p=void 0,d={unversionedId:"schematics/ng-add",id:"schematics/ng-add",title:"Ng Add",description:"Schematics - Ng Add | Transloco Angular i18n",source:"@site/docs/schematics/ng-add.mdx",sourceDirName:"schematics",slug:"/schematics/ng-add",permalink:"/transloco/docs/schematics/ng-add",draft:!1,editUrl:"https://github.com/ngneat/transloco/edit/master/docs/docs/schematics/ng-add.mdx",tags:[],version:"current",frontMatter:{title:"Ng Add",description:"Schematics - Ng Add | Transloco Angular i18n"},sidebar:"docs",previous:{title:"3rd Party",permalink:"/transloco/docs/plugins/third-party"},next:{title:"Scope",permalink:"/transloco/docs/schematics/scope"}},s={},c=[{value:"Ng-add",id:"ng-add",level:2},{value:"Overview",id:"overview",level:3},{value:"Command",id:"command",level:3},{value:"Options",id:"options",level:3},{value:"Create the translation files along with the required configuration.",id:"create-the-translation-files-along-with-the-required-configuration",level:4},{value:"Provide the translation files loader.",id:"provide-the-translation-files-loader",level:4},{value:"Provide the configuration that is needed for a project using server side rendering.",id:"provide-the-configuration-that-is-needed-for-a-project-using-server-side-rendering",level:4},{value:"Define the location of the translation files.",id:"define-the-location-of-the-translation-files",level:4},{value:"Provide the name of the project where Transloco should be installed to.",id:"provide-the-name-of-the-project-where-transloco-should-be-installed-to",level:4},{value:"Provide the path to a root <code>Module</code> and import <code>TranslocoModule</code> along with the module&#39;s required configuration defined by previous flags.",id:"provide-the-path-to-a-root-module-and-import-translocomodule-along-with-the-modules-required-configuration-defined-by-previous-flags",level:4}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ng-add"},"Ng-add"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Creates boilerplate translation files for the given languages, and adds Transloco configuration for the project's root module."),(0,i.kt)("h3",{id:"command"},"Command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  ng add @ngneat/transloco\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("h4",{id:"create-the-translation-files-along-with-the-required-configuration"},"Create the translation files along with the required configuration."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--langs")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"default"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"en, es")))),(0,i.kt)("h4",{id:"provide-the-translation-files-loader"},"Provide the translation files loader."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--loader")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"default"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Http")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"options"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Http"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Webpack")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"alias"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"lo")))),(0,i.kt)("h4",{id:"provide-the-configuration-that-is-needed-for-a-project-using-server-side-rendering"},"Provide the configuration that is needed for a project using server side rendering."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--ssr")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),","),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"default"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"false")))),(0,i.kt)("h4",{id:"define-the-location-of-the-translation-files"},"Define the location of the translation files."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--path")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"default"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"assets/i18n/")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"alias"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"p")))),(0,i.kt)("h4",{id:"provide-the-name-of-the-project-where-transloco-should-be-installed-to"},"Provide the name of the project where Transloco should be installed to."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--project")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")))),(0,i.kt)("h4",{id:"provide-the-path-to-a-root-module-and-import-translocomodule-along-with-the-modules-required-configuration-defined-by-previous-flags"},"Provide the path to a root ",(0,i.kt)("inlineCode",{parentName:"h4"},"Module")," and import ",(0,i.kt)("inlineCode",{parentName:"h4"},"TranslocoModule")," along with the module's required configuration defined by previous flags."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--module")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"default"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"app")))))}m.isMDXComponent=!0}}]);