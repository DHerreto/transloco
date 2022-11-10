"use strict";(self.webpackChunktransloco_docs=self.webpackChunktransloco_docs||[]).push([[961],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),u=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),g=a,d=m["".concat(i,".").concat(g)]||m[g]||p[g]||r;return n?o.createElement(d,l(l({ref:t},c),{},{components:n})):o.createElement(d,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<r;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9553:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),l=["components"],s={title:"Message Format",description:"Plugins - Message Format | Transloco Angular i18n"},i=void 0,u={unversionedId:"plugins/message-format",id:"plugins/message-format",title:"Message Format",description:"Plugins - Message Format | Transloco Angular i18n",source:"@site/docs/plugins/message-format.mdx",sourceDirName:"plugins",slug:"/plugins/message-format",permalink:"/transloco/docs/plugins/message-format",draft:!1,editUrl:"https://github.com/ngneat/transloco/edit/master/docs/docs/plugins/message-format.mdx",tags:[],version:"current",frontMatter:{title:"Message Format",description:"Plugins - Message Format | Transloco Angular i18n"},sidebar:"docs",previous:{title:"Scoped Library Extractor",permalink:"/transloco/docs/tools/scope-lib-extractor"},next:{title:"Persist Translations",permalink:"/transloco/docs/plugins/persist-translations"}},c={},p=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Locale initialization",id:"locale-initialization",level:2},{value:"Advanced configuration",id:"advanced-configuration",level:2},{value:"Caching (from v3)",id:"caching-from-v3",level:2}],m={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Transpiler for ",(0,r.kt)("inlineCode",{parentName:"p"},"@ngneat/transloco")," that uses ",(0,r.kt)("inlineCode",{parentName:"p"},"@messageformat/core")," to compile translations using ICU syntax for handling pluralization and gender."),(0,r.kt)("p",null,"Messageformat is a mechanism for handling both pluralization and gender in your app."),(0,r.kt)("p",null,"You can see its format guide ",(0,r.kt)("a",{parentName:"p",href:"https://messageformat.github.io/messageformat/guide/"},"here"),"."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i messageformat @ngneat/transloco-messageformat\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"MessageFormatTranspiler")," is compatible with the ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultTranspiler")," and therefore you can switch without worry that it will break your current translations."),(0,r.kt)("p",null,"It then enables support for the following within your i18n translation files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="en.json"',title:'"en.json"'},'{\n  "mySelectRule": "{myVar, select, val1 {Value 1} val2 {Value 2} other {Other Value}}",\n  "myPluralRule": "{myCount, plural, =0 {no results} one {1 result} other {# results}}"\n}\n')),(0,r.kt)("p",null,"To enable this plugin, add the following import in your ",(0,r.kt)("inlineCode",{parentName:"p"},"TranslocoRootModule"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="transloco-root.module.ts"',title:'"transloco-root.module.ts"'},"import { TranslocoMessageFormatModule } from '@ngneat/transloco-messageformat';\n\n@NgModule({\n  imports: [\n    TranslocoMessageFormatModule.forRoot()\n  ]\n  ...\n})\nexport class TranslocoRootModule {}\n")),(0,r.kt)("h2",{id:"locale-initialization"},"Locale initialization"),(0,r.kt)("p",null,"By default, messageformat initializes ",(0,r.kt)("em",{parentName:"p"},"all")," locales. You could also provide the locales you will need:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="transloco-root.module.ts"',title:'"transloco-root.module.ts"'},"@NgModule({\n  imports: [\n    TranslocoMessageFormatModule.forRoot({\n        locales: 'en-GB'\n    })\n  ],\n  ...\n})\nexport class TranslocoRootModule {}\n")),(0,r.kt)("p",null,"The value for ",(0,r.kt)("inlineCode",{parentName:"p"},"locales")," is either a string or an array of strings. The first locale is used as the default locale by messageformat. More info ",(0,r.kt)("a",{parentName:"p",href:"https://messageformat.github.io/messageformat/api/core.messageformat._constructor_/"},"here"),"."),(0,r.kt)("h2",{id:"advanced-configuration"},"Advanced configuration"),(0,r.kt)("p",null,"MessageFormat instances provides some options to influence its behaviour, among them ",(0,r.kt)("inlineCode",{parentName:"p"},"customFormatters"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"biDiSupport"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"strictNumberSign"),". Learn about their meaning ",(0,r.kt)("a",{parentName:"p",href:"https://messageformat.github.io/messageformat/api/core.messageformatoptions/"},"here")),(0,r.kt)("p",null,"This is how you would enable bi-directional support and add a custom formatter, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="transloco-root.module.ts"',title:'"transloco-root.module.ts"'}," @NgModule({\n   imports: [\n     TranslocoMessageFormatModule.forRoot({\n         biDiSupport: true,\n         customFormatters: { upcase: v => v.toUpperCase() }\n     })\n   ],\n   ...\n })\n export class TranslocoRootModule {}\n")),(0,r.kt)("h2",{id:"caching-from-v3"},"Caching (from v3)"),(0,r.kt)("p",null," By default the messageformat compile output is cached to reduce computing times, you can disable caching by passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"enableCache")," option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="transloco-root.module.ts"',title:'"transloco-root.module.ts"'},"@NgModule({\n  imports: [\n    TranslocoMessageFormatModule.forRoot({\n        enableCache: false,\n    })\n  ],\n  ...\n})\nexport class TranslocoRootModule {}\n")))}g.isMDXComponent=!0}}]);