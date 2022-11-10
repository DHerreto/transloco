"use strict";(self.webpackChunktransloco_docs=self.webpackChunktransloco_docs||[]).push([[4933],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,h=m["".concat(i,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9560:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),s=["components"],l={id:"translation-api",title:"Translation API",description:"Translation API | Transloco Angular i18n"},i=void 0,c={unversionedId:"translation-api",id:"translation-api",title:"Translation API",description:"Translation API | Transloco Angular i18n",source:"@site/docs/translation-api.mdx",sourceDirName:".",slug:"/translation-api",permalink:"/transloco/docs/translation-api",draft:!1,editUrl:"https://github.com/ngneat/transloco/edit/master/docs/docs/translation-api.mdx",tags:[],version:"current",frontMatter:{id:"translation-api",title:"Translation API",description:"Translation API | Transloco Angular i18n"},sidebar:"docs",previous:{title:"Translation in The Template",permalink:"/transloco/docs/translation-in-the-template"},next:{title:"Language API",permalink:"/transloco/docs/language-api"}},p={},u=[{value:"<code>translate()</code>",id:"translate",level:3},{value:"<code>selectTranslate()</code>",id:"selecttranslate",level:3},{value:"<code>translateObject()</code>",id:"translateobject",level:3},{value:"<code>selectTranslateObject()</code>",id:"selecttranslateobject",level:3},{value:"<code>getTranslation()</code>",id:"gettranslation",level:3},{value:"<code>selectTranslation()</code>",id:"selecttranslation",level:3},{value:"<code>setTranslation()</code>",id:"settranslation",level:3},{value:"<code>setTranslationKey()</code>",id:"settranslationkey",level:3},{value:"<code>events$</code>",id:"events",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Below is a list of the ",(0,r.kt)("inlineCode",{parentName:"p"},"TranslocoService")," API and their usages:"),(0,r.kt)("h3",{id:"translate"},(0,r.kt)("inlineCode",{parentName:"h3"},"translate()")),(0,r.kt)("p",null,"Translate the given key. Sometimes you may need to translate a key in a component or a service. To do so, you can inject the ",(0,r.kt)("inlineCode",{parentName:"p"},"TranslocoService")," and use its ",(0,r.kt)("inlineCode",{parentName:"p"},"translate")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="app.component.ts"',title:'"app.component.ts"'},"export class AppComponent {\n  constructor(private translocoService: TranslocoService) {}\n\n  ngOnInit() {\n    this.translocoService.translate('hello');\n    this.translocoService.translate('hello', { value: 'world' });\n    this.translocoService.translate(['hello', 'key']);\n    this.translocoService.translate('hello', params, 'es');\n\n    // Translate a key from a specific scope\n    this.translocoService.translate('hello', params, 'todos/en');\n  }\n}\n")),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Note that in order to safely use this method, you are responsible for ensuring that the translation files have been successfully loaded by the time it's called.")),(0,r.kt)("p",null,"If you aren't sure, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"selectTranslate()")," method instead:"),(0,r.kt)("h3",{id:"selecttranslate"},(0,r.kt)("inlineCode",{parentName:"h3"},"selectTranslate()")),(0,r.kt)("p",null,"Returns an ",(0,r.kt)("inlineCode",{parentName:"p"},"observable")," that when subscribed loads the translation file and emits the translation of the given key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="app.component.ts"',title:'"app.component.ts"'},"export class AppComponent {\n  constructor(private translocoService: TranslocoService) {}\n\n  // Don't forget to unsubscribe\n  ngOnInit() {\n    this.translocoService.selectTranslate('hello')\n                         .subscribe(value => ...);\n\n    this.translocoService.selectTranslate('hello', params)\n                         .subscribe(value => ...);\n\n    this.translocoService.selectTranslate('hello', params, lang)\n                         .subscribe(value => ...);\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"selectTranslate")," will emit each time the active language is changed."),(0,r.kt)("p",null,"You can also select a translation from ",(0,r.kt)("inlineCode",{parentName:"p"},"scope"),", simply inject the scope using the ",(0,r.kt)("inlineCode",{parentName:"p"},"TRANSLOCO_SCOPE")," token\nand provide it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"selectTranslate")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="app.component.ts"',title:'"app.component.ts"'},"export class AppComponent {\n  constructor(private translocoService: TranslocoService,\n              @Inject(TRANSLOCO_SCOPE) private scope\n  ) {}\n\n  ngOnInit() {\n    this.translocoService.selectTranslate('title', params, this.scope)\n                          .subscribe(console.log);\n  }\n}\n")),(0,r.kt)("h3",{id:"translateobject"},(0,r.kt)("inlineCode",{parentName:"h3"},"translateObject()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="en.json"',title:'"en.json"'},'{\n  "home": "Home",\n  "hello": "Hello {{ name }}",\n  "some": {\n    "object": {\n      "hi": "Hi",\n      "hey": "Hey"\n    }\n  },\n  "path": {\n    "to": {\n      "object": {\n         "welcome": "Welcome {{ name }}",\n         "nested": {\n            "subscribe": "subscribe today for {{ price }}$"\n         }\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"The following code is based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"en.json")," above \u261d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Returns an ",(0,r.kt)("inlineCode",{parentName:"li"},"object")," based on the given path:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="app.component.ts"',title:'"app.component.ts"'},'export class AppComponent {\n  constructor(private translocoService: TranslocoService) {}\n\n  ngOnInit() {\n    let result = this.translocoService.translateObject(\'some.object\');\n    expect(result).toEqual({\n      hi: "Hi",\n      hey: "Hey"\n    });\n\n    /* When querying an object that should be transpiled */\n    result = this.translocoService.translateObject(\'path.to.object\', {\n      welcome: { value: \'John\' },\n      \'nested.subscribe\': { price: 100 }\n    });\n    expect(result).toEqual({\n      welcome: "Welcome John",\n      nested: {\n        "subscribe": "subscribe today for 100$"\n    }});\n  }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Given a ",(0,r.kt)("inlineCode",{parentName:"li"},"key: params")," map (",(0,r.kt)("inlineCode",{parentName:"li"},"object")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"Map"),"), returns an ",(0,r.kt)("inlineCode",{parentName:"li"},"array")," of translated values:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="app.component.ts"',title:'"app.component.ts"'},'export class AppComponent {\n  constructor(private translocoService: TranslocoService) {}\n\n  ngOnInit() {\n    /* If there are no parameters to transpile pass an empty `object` or `null` */\n    let keyParams = {\n      home: null, // {}\n    }\n    let result = this.translocoService.translateObject(keyParams);\n    expect(result).toEqual(["Home"]);\n\n    /* When querying an object that should be transpiled */\n    keyParams = {\n       home: null,\n       hello: { name: \'John\' },\n    }\n    result = this.translocoService.translateObject(keyParams);\n    expect(result).toEqual(["Home", "Hello John"]);\n\n    /* Works with object paths */\n    keyParams = {\n       hello: { name: \'John\' },\n       \'path.to.object.nested\': {subscribe: {price: 100}}\n    }\n    result = this.translocoService.translateObject(keyParams);\n    expect(result).toEqual([ "Home", { subscribe: "subscribe today for 100$" }]);\n\n    /* Works with `Map` */\n    keyParams = new Map();\n    keyParams.set(\'home\', null);\n    result = this.translocoService.translateObject(keyParams);\n    expect(result).toEqual(["Home"]);\n  }\n}\n')),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Note that in order to safely use this method, you are responsible for ensuring that the translation files have been successfully loaded by the time it's called.")),(0,r.kt)("p",null,"If you aren't sure, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"selectTranslateObject()")," method instead:"),(0,r.kt)("h3",{id:"selecttranslateobject"},(0,r.kt)("inlineCode",{parentName:"h3"},"selectTranslateObject()")),(0,r.kt)("p",null,"Load the translation file (if not loaded yet) and behaves the same as ",(0,r.kt)("inlineCode",{parentName:"p"},"translateObject"),".\nThe only difference is that this method returns an observable to which you can subscribe."),(0,r.kt)("p",null,"The following code is based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"en.json")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"translateObject")," \u261d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="app.component.ts"',title:'"app.component.ts"'},"export class AppComponent {\n  constructor(private translocoService: TranslocoService) {}\n\n  ngOnInit() {\n    this.translocoService.selectTranslateObject('path.to.object', {\n      welcome: { value: 'John' },\n      'nested.subscribe': { price: 100 }\n    }).subscribe(result => {\n      expect(result).toEqual({\n        welcome: \"Welcome John\",\n        nested: {\n          \"subscribe\": \"subscribe today for 100$\"\n        }\n      });\n    });\n\n    keyParams = {\n      hello: { name: 'John' },\n      'path.to.object.nested': {subscribe: {price: 100}}\n    }\n    this.translocoService.selectTranslateObject(keyParams)\n    .subscribe(result => {\n       expect(result).toEqual([\"Home\", { subscribe: \"subscribe today for 100$\" }]);\n    });\n  }\n}\n")),(0,r.kt)("h3",{id:"gettranslation"},(0,r.kt)("inlineCode",{parentName:"h3"},"getTranslation()")),(0,r.kt)("p",null,"Returns the selected language translation or a scope translation, if a language isn't passed, the method will return the entire translation map:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="app.component.ts"',title:'"app.component.ts"'},"export class AppComponent {\n  constructor(private translocoService: TranslocoService) {}\n\n  ngOnInit() {\n    this.translocoService.getTranslation();\n    this.translocoService.getTranslation('es');\n    this.translocoService.getTranslation('todos/es');\n  }\n}\n")),(0,r.kt)("h3",{id:"selecttranslation"},(0,r.kt)("inlineCode",{parentName:"h3"},"selectTranslation()")),(0,r.kt)("p",null,"Returns an ",(0,r.kt)("inlineCode",{parentName:"p"},"observable")," that when subscribed loads and emits the given language translation object, if no language is passed the active language will be used.",(0,r.kt)("br",{parentName:"p"}),"\n","This method can also be used to retrieve a scope translation object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="app.component.ts"',title:'"app.component.ts"'},"export class AppComponent {\n  constructor(private translocoService: TranslocoService) {}\n\n  // Don't forget to unsubscribe\n  ngOnInit() {\n    this.translocoService.selectTranslation('es')\n                         .subscribe(console.log);\n                         \n    this.translocoService.selectTranslation('todos/es')\n                         .subscribe(console.log);\n                                                                    \n    // Will emit a new value on language changes.                     \n    this.translocoService.selectTranslation()\n                         .subscribe(console.log);\n                                                         \n    this.translocoService.selectTranslation('todos')\n                         .subscribe(console.log);   \n  }\n}\n")),(0,r.kt)("h3",{id:"settranslation"},(0,r.kt)("inlineCode",{parentName:"h3"},"setTranslation()")),(0,r.kt)("p",null,"Manually sets a translations object to be used for a given language, set merge to true if you want to append the translations instead of replacing them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="app.component.ts"',title:'"app.component.ts"'},"export class AppComponent {\n  constructor(private translocoService: TranslocoService) {}\n\n  ngOnInit() {\n   this.translocoService.setTranslation({ key: value });\n   this.translocoService.setTranslation({ ... }, 'es');\n   this.translocoService.setTranslation({ ... }, 'en', { merge: false } );\n\n   // Set a scope\n   this.translocoService.setTranslation({ ... }, 'todos/en');\n  }\n}\n")),(0,r.kt)("h3",{id:"settranslationkey"},(0,r.kt)("inlineCode",{parentName:"h3"},"setTranslationKey()")),(0,r.kt)("p",null,"Sets the translated value of a key. If a language isn't specified in the third parameter, it sets the key value for the current active language:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="app.component.ts"',title:'"app.component.ts"'},"export class AppComponent {\n  constructor(private translocoService: TranslocoService) {}\n\n  ngOnInit() {\n    this.translocoService.setTranslationKey('key', 'value');\n    this.translocoService.setTranslationKey('key.nested', 'value');\n    this.translocoService.setTranslationKey('key', 'value', 'en');\n    this.translocoService.setTranslationKey('key', 'value', 'en', { emitChange: false });\n  }\n}\n")),(0,r.kt)("h3",{id:"events"},(0,r.kt)("inlineCode",{parentName:"h3"},"events$")),(0,r.kt)("p",null,"Subscribe to the translation loading events:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="app.component.ts"',title:'"app.component.ts"'},"export class AppComponent {\n  constructor(private translocoService: TranslocoService) {}\n\n  ngOnInit() {\n    this.translocoService.events$.pipe(\n      filter(e => e.type === 'translationLoadSuccess'),\n      pluck('payload')\n    ).subscribe(({ langName, scope }) => ...);\n\n    this.translocoService.events$.pipe(\n      filter(e => e.type === 'translationLoadFailure'),\n      pluck('payload')\n    ).subscribe(({ langName, scope }) => ...);\n    \n    this.translocoService.events$.pipe(\n      filter(e => e.type === 'langChanged'),\n      pluck('payload')\n    ).subscribe(({ langName, scope }) => ...);\n}\n")),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Note that these events will only fire when the translation is loaded from the server, meaning that when switching from a given lang and back won't trigger the events again since the language is loaded from the cache. ")))}d.isMDXComponent=!0}}]);