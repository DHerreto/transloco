"use strict";(self.webpackChunktransloco_docs=self.webpackChunktransloco_docs||[]).push([[5961],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(s,".").concat(d)]||u[d]||p[d]||l;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4681:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={title:"Angular",description:"Angular Migration | Transloco Angular i18n"},s=void 0,c={unversionedId:"migration/angular",id:"migration/angular",title:"Angular",description:"Angular Migration | Transloco Angular i18n",source:"@site/docs/migration/angular.mdx",sourceDirName:"migration",slug:"/migration/angular",permalink:"/transloco/docs/migration/angular",draft:!1,editUrl:"https://github.com/ngneat/transloco/edit/master/docs/docs/migration/angular.mdx",tags:[],version:"current",frontMatter:{title:"Angular",description:"Angular Migration | Transloco Angular i18n"},sidebar:"docs",previous:{title:"ngx-translate",permalink:"/transloco/docs/migration/ngx"},next:{title:"Prefetch the User Language",permalink:"/transloco/docs/recipes/prefetch"}},m={},p=[{value:"Command",id:"command",level:3},{value:"The Translation file",id:"the-translation-file",level:3},{value:"Directives",id:"directives",level:3}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"some manual changes might still be needed after the script ran.")),(0,l.kt)("p",null,"The script will iterate over all your HTML files, build a  translation file and will execute the replacements described below."),(0,l.kt)("h3",{id:"command"},"Command"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ng g @ngneat/transloco:migrate")),(0,l.kt)("h3",{id:"the-translation-file"},"The Translation file"),(0,l.kt)("p",null,"The script will extract all the translations from the HTML files and will construct a translations JSON file.\nThe script will use the translation string as the key by making the entire string kebab case (",(0,l.kt)("inlineCode",{parentName:"p"},"My sample string")," => ",(0,l.kt)("inlineCode",{parentName:"p"},"my-sample-string"),") example for the output JSON:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="en.json"',title:'"en.json"'},'{\n  "my-sample-string": "My sample string",\n  "my-title": "My title"\n}\n')),(0,l.kt)("p",null,"Here is an example of an ",(0,l.kt)("inlineCode",{parentName:"p"},"HTML")," section and the matching ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON")," output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<h1 i18n>translation value</h1>\n<h1 i18n="site header|value 1 sample">Val1</h1>\n<h1 i18n="site header|value 2 sample">Val2</h1>\n<h1 i18n="other context|another comment@@myId">Val3</h1>\n')),(0,l.kt)("p",null,"Will output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="en.json"',title:'"en.json"'},'{\n  "translation-value": "translation value",\n  "site header": {\n     "val1": "Val1",\n     "val1.comment": "value 1 sample",\n     "val2": "Val2",\n     "val2.comment": "value 2 sample",\n  },\n  "other context": {\n     "myId": "Val3",\n     "myId.comment": "another comment"\n  }\n}\n')),(0,l.kt)("p",null,"Note: the ",(0,l.kt)("inlineCode",{parentName:"p"},".comment")," is the way we support ",(0,l.kt)("a",{parentName:"p",href:"../tools/comments"},"comments")," in Transloco."),(0,l.kt)("h3",{id:"directives"},"Directives"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"i18n")," & ",(0,l.kt)("inlineCode",{parentName:"p"},"i18n-<attribute>")," directives will be replaced with the ",(0,l.kt)("inlineCode",{parentName:"p"},"transloco")," pipe:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="before.html"',title:'"before.html"'},'<h1 i18n>Hello World</h1>\n<h1 i18n="other context|another comment@@myId">Some value</h1>\n<img src="..." i18n i18n-title="Wow image">\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="after.html"',title:'"after.html"'},"<h1>{{ 'hello-world' | transloco }}</h1>\n<h1>{{ 'some-value' | transloco }}</h1>\n<img src=\"...\" title=\"{{ 'wow-image' | transloco }}\">\n")),(0,l.kt)("p",null,"If you encounter any issues with the migration script please open a Github issue so we can resolve them and make a better experience for all."))}d.isMDXComponent=!0}}]);