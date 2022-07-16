"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[971],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return m}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(o),m=r,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return o?n.createElement(f,i(i({ref:t},d),{},{components:o})):n.createElement(f,i({ref:t},d))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},1269:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l}});var n=o(3117),r=(o(7294),o(3905));const a={sidebar_label:"Home",hide_table_of_contents:!0},i="Welcome to Niomon Developer Docs",s={unversionedId:"index",id:"index",title:"Welcome to Niomon Developer Docs",description:"We are happy to see you here! This developer website contains technical references for our products",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/niomon/niomon-docs/blob/main/docs/index.md",tags:[],version:"current",frontMatter:{sidebar_label:"Home",hide_table_of_contents:!0},sidebar:"docs",next:{title:"Security",permalink:"/docs/security"}},c={},l=[{value:"What is Niomon",id:"what-is-niomon",level:2},{value:"Closed beta",id:"closed-beta",level:2},{value:"Product suite",id:"product-suite",level:2},{value:"Where to find us",id:"where-to-find-us",level:2},{value:"Getting Started",id:"getting-started",level:2}],d={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"welcome-to-niomon-developer-docs"},"Welcome to Niomon Developer Docs"),(0,r.kt)("p",null,"We are happy to see you here! This developer website contains technical references for our products\nand instructions to get started."),(0,r.kt)("h2",{id:"what-is-niomon"},"What is Niomon"),(0,r.kt)("p",null,"Niomon is a secure authentication infrastructure for Web3. We want to make it incredibly easy for\neveryday users to use Web3 decentralized identities and crypto. Developers can use our suite of\nAPIs and SDKs to integrate wallet-based logins and self-custodial crypto wallet functions into any\napplication (both centralized or decentralized architecture). With Niomon, you can easily onboard\nusers new to crypto in seconds."),(0,r.kt)("h2",{id:"closed-beta"},"Closed beta"),(0,r.kt)("p",null,"Niomon is in closed beta. While Niomon is ready for production deployment, we want to focus our\nresources on supporting a targeted group of customers. Hence, sign-up is currently limited. As we\nare constantly improving our products, your comments and criticisms are very important to us.\nPlease ",(0,r.kt)("a",{parentName:"p",href:"/docs/support"},"reach out to us")," at any time to provide your feedback."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://niomon.io/signup"},"Sign up for closed beta")),(0,r.kt)("h2",{id:"product-suite"},"Product suite"),(0,r.kt)("section",{class:"row"},(0,r.kt)("div",{class:"col col--6 margin-bottom--lg"},(0,r.kt)("div",{class:"card-demo"},(0,r.kt)("div",{class:"card padding--lg"},(0,r.kt)("div",{class:"card__header"},(0,r.kt)("h3",null,"Auth")),(0,r.kt)("div",{class:"card__body"},(0,r.kt)("p",{class:"text--center"},(0,r.kt)("img",{src:o(1387).Z,style:{maxHeight:"250px"}})),(0,r.kt)("p",null,"Niomon Auth allows you to build frictionless and secure authentication flows supporting Email/SMS passcodes, social logins, and Web3 wallets. Supports Sign in with Ethereum (",(0,r.kt)("a",{href:"https://eips.ethereum.org/EIPS/eip-4361"},"EIP-4361"),") and gating access by NFT ownership.")),(0,r.kt)("div",{class:"card__footer"},(0,r.kt)("a",{class:"/docs/auth"},"Learn more"))))),(0,r.kt)("div",{class:"col col--6 margin-bottom--lg"},(0,r.kt)("div",{class:"card-demo"},(0,r.kt)("div",{class:"card padding--lg"},(0,r.kt)("div",{class:"card__header"},(0,r.kt)("h3",null,"Auth")),(0,r.kt)("div",{class:"card__body"},(0,r.kt)("p",{class:"text--center"},(0,r.kt)("img",{src:o(9432).Z,style:{maxHeight:"250px"}})),(0,r.kt)("p",null,"Wallet Kit is a crypto wallet infrastructure consisting of a non-custodial key management system, adapters supporting most blockchains, and a customizable wallet UI SDKs.  With Wallet Kit, you can build an app with an internal wallet or a complete wallet app with a few lines of code.")),(0,r.kt)("div",{class:"card__footer"},(0,r.kt)("a",{class:"/docs/auth"},"Learn more"))))),(0,r.kt)("div",{class:"col col--6 margin-bottom--lg"},(0,r.kt)("div",{class:"card-demo"},(0,r.kt)("div",{class:"card padding--lg"},(0,r.kt)("div",{class:"card__header"},(0,r.kt)("h3",null,"Ditto")),(0,r.kt)("div",{class:"card__body"},(0,r.kt)("p",{class:"text--center"},(0,r.kt)("img",{src:o(6450).Z,style:{maxHeight:"250px"}})),(0,r.kt)("p",null,"Ditto is a fun multi-chain crypto wallet built on top of Wallet Kit. It focuses on everyday users and Web3 gaming, helping apps and games developers onboard users new to crypto. Also, Ditto Wallet allows users to buy tokens and NFTs using Apple Pay or debit cards.")),(0,r.kt)("div",{class:"card__footer"},(0,r.kt)("a",{class:"/docs/walletkit"},"Learn more"))))),(0,r.kt)("div",{class:"col col--6 margin-bottom--lg"},(0,r.kt)("div",{class:"card-demo"},(0,r.kt)("div",{class:"card padding--lg"},(0,r.kt)("div",{class:"card__header"},(0,r.kt)("h3",null,"NFT Checkout")),(0,r.kt)("div",{class:"card__body"},(0,r.kt)("p",{class:"text--center"},(0,r.kt)("img",{src:o(5190).Z,style:{maxHeight:"250px"}})),(0,r.kt)("p",null,"NFT checkout with Apple Pay or cards. Make NFTs accessible to mainstream audiences with a fast & simple checkout solution.")),(0,r.kt)("div",{class:"card__footer"},(0,r.kt)("span",{class:"badge badge--secondary"},"Coming soon in Q4'22")))))),(0,r.kt)("h2",{id:"where-to-find-us"},"Where to find us"),(0,r.kt)("p",null,"We are here to help! Reach out to us at any time for support, questions, issues, or product ideas."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mention us in tweets or DM us at ",(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/niomon_io"},"@niomon_io")),(0,r.kt)("li",{parentName:"ul"},"Email us at ",(0,r.kt)("a",{parentName:"li",href:"mailto:hello@niomonid.com"},"hello@niomonid.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/security#security-contact"},"Security contact"))),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/quickstarts/ditto-ethereum"},"Connecting Ditto with your Ethereum dApps"))))}u.isMDXComponent=!0},6450:function(e,t,o){t.Z=o.p+"assets/images/ditto_app-f3a9b3f2967379a870fa8a78aa7f8047.png"},5190:function(e,t,o){t.Z=o.p+"assets/images/nft_checkout-983dec470b82e9252e147bb3ae41fd70.png"},9432:function(e,t,o){t.Z=o.p+"assets/images/wallet_kit-10519da0062df5fee9c30e79cdbac1c2.png"},1387:function(e,t,o){t.Z=o.p+"assets/images/web3_login-0395c6f9c1e7aab446384a34e275db65.png"}}]);