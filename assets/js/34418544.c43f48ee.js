"use strict";(self.webpackChunktransloco_docs=self.webpackChunktransloco_docs||[]).push([[1369],{3905:function(n,e,t){t.d(e,{Zo:function(){return f},kt:function(){return m}});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var s=r.createContext({}),c=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},f=function(n){var e=c(n.components);return r.createElement(s.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,s=n.parentName,f=l(n,["components","mdxType","originalType","parentName"]),u=c(t),m=o,d=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(d,i(i({ref:e},f),{},{components:t})):r.createElement(d,i({ref:e},f))}));function m(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l.mdxType="string"==typeof n?n:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3984:function(n,e,t){t.r(e),t.d(e,{assets:function(){return f},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={title:"Using xliff",description:"Recipe - Using xliff | Transloco Angular i18n"},s=void 0,c={unversionedId:"recipes/xliff",id:"recipes/xliff",title:"Using xliff",description:"Recipe - Using xliff | Transloco Angular i18n",source:"@site/docs/recipes/xliff.mdx",sourceDirName:"recipes",slug:"/recipes/xliff",permalink:"/transloco/docs/recipes/xliff",draft:!1,editUrl:"https://github.com/ngneat/transloco/edit/master/docs/docs/recipes/xliff.mdx",tags:[],version:"current",frontMatter:{title:"Using xliff",description:"Recipe - Using xliff | Transloco Angular i18n"},sidebar:"docs",previous:{title:"Prefetch the User Language",permalink:"/transloco/docs/recipes/prefetch"},next:{title:"Generate Locale Files using Google Translate",permalink:"/transloco/docs/recipes/google-translate-integration"}},f={},p=[],u={toc:p};function m(n){var e=n.components,t=(0,o.Z)(n,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Install the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/xliff"},(0,a.kt)("inlineCode",{parentName:"a"},"xliff"))," package:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i xliff\nyarn add xliff\n")),(0,a.kt)("p",null,"Replace the default http loader with the following loader implementation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="transloco-root.module.ts"',title:'"transloco-root.module.ts"'},"import { HttpClient } from '@angular/common/http';\nimport {\n  TRANSLOCO_LOADER,\n  Translation,\n  TranslocoLoader,\n  TRANSLOCO_CONFIG,\n  translocoConfig,\n  TranslocoModule\n} from '@ngneat/transloco';\nimport { Injectable, NgModule } from '@angular/core';\nimport { environment } from '../environments/environment';\nimport { from } from 'rxjs';\nimport { switchMap, map } from 'rxjs/operators';\n// xliff v1.2\nimport xliff from \"xliff/esm/xliff12ToJs\";\n// xliff v2\n//import xliff from \"xliff/esm/xliff2js\";\n\nfunction toTranslationFormat(json) {\n  const obj = json.resources.transloco;\n  return Object.keys(obj).reduce((acc, key) => {\n    acc[key] = obj[key].target;\n    return acc;\n  }, {});\n}\n\n@Injectable({ providedIn: 'root' })\nexport class TranslocoXliffHttpLoader implements TranslocoLoader {\n  constructor(private http: HttpClient) {}\n\n  getTranslation(lang: string) {\n    return this.http.get<Translation>(`/assets/i18n/${lang}.xlf`, { responseType: 'text' })\n      .pipe(\n        switchMap((translation) => from(xliff(translation))), \n        map(toTranslationFormat)\n      );\n  }\n}\n\n@NgModule({\n  exports: [ TranslocoModule ],\n  providers: [\n    {\n      provide: TRANSLOCO_CONFIG,\n      useValue: translocoConfig({\n        availableLangs: ['en', 'es'],\n        defaultLang: 'en',\n        // Remove this option if your application\n        // doesn't support changing language in runtime.\n        reRenderOnLangChange: true,\n        prodMode: environment.production,\n      })\n    },\n    { provide: TRANSLOCO_LOADER, useClass: TranslocoXliffHttpLoader }\n  ]\n})\nexport class TranslocoRootModule {}\n")),(0,a.kt)("p",null,"The translation file (xliff v1.2):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8" ?>\n<xliff version="1.2" xmlns="urn:oasis:names:tc:xliff:document:1.2">\n  <file source-language="en" datatype="plaintext" original="transloco">\n    <body>\n      <trans-unit id="title">\n        <source>Hello Transloco!</source>\n        <target>Bonjour Transloco!</target>\n      </trans-unit>\n    </body>\n  </file>\n</xliff>\n')))}m.isMDXComponent=!0}}]);