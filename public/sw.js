if(!self.define){let e,a={};const s=(s,c)=>(s=new URL(s+".js",c).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(a[t])return;let n={};const r=e=>s(e,t),d={module:{uri:t},exports:n,require:r};a[t]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(i(...e),n)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"da09bcfa541e940d1eaec2527cffbe46"},{url:"/_next/static/chunks/2443530c-97ef2f07ab87d47c.js",revision:"zYC8MTKEGrd1GoANk2caa"},{url:"/_next/static/chunks/619-5ad9e7c7388d4ff1.js",revision:"zYC8MTKEGrd1GoANk2caa"},{url:"/_next/static/chunks/632-9c8fc1c3f5002a53.js",revision:"zYC8MTKEGrd1GoANk2caa"},{url:"/_next/static/chunks/916-5e7c2e119f6a3017.js",revision:"zYC8MTKEGrd1GoANk2caa"},{url:"/_next/static/chunks/931-4bea622fc2e36720.js",revision:"zYC8MTKEGrd1GoANk2caa"},{url:"/_next/static/chunks/956-011e6bd0cdc87ca9.js",revision:"zYC8MTKEGrd1GoANk2caa"},{url:"/_next/static/chunks/961-3facf0bb58005666.js",revision:"zYC8MTKEGrd1GoANk2caa"},{url:"/_next/static/chunks/978-c14b1b74daebcd8a.js",revision:"zYC8MTKEGrd1GoANk2caa"},{url:"/_next/static/chunks/app/(auth)/sign-in/page-0225ff272ac21fe8.js",revision:"zYC8MTKEGrd1GoANk2caa"},{url:"/_next/static/chunks/app/(auth)/sign-up/page-511da64aa9abe268.js",revision:"zYC8MTKEGrd1GoANk2caa"},{url:"/_next/static/chunks/app/(auth)/sms-verification/page-4899ab63ca81c4a9.js",revision:"zYC8MTKEGrd1GoANk2caa"},{url:"/_next/static/chunks/app/(stack)/FAQs/page-ea29c0e40190a8ba.js",revision:"zYC8MTKEGrd1GoANk2caa"},{url:"/_next/static/chunks/app/(stack)/about/page-47ef121b8f2abc5d.js",revision:"zYC8MTKEGrd1GoANk2caa"},{url:"/_next/static/chunks/app/(stack)/blog/page-25d27bde588609e2.js",revision:"zYC8MTKEGrd1GoANk2caa"},{url:"/_next/static/chunks/app/(stack)/contact/page-2aeed7fab6e56613.js",revision:"zYC8MTKEGrd1GoANk2caa"},{url:"/_next/static/chunks/app/(stack)/cookies/page-7b3b105f18b3a590.js",revision:"zYC8MTKEGrd1GoANk2caa"},{url:"/_next/static/chunks/app/(stack)/layout-0895fe1b0535ab97.js",revision:"zYC8MTKEGrd1GoANk2caa"},{url:"/_next/static/chunks/app/(stack)/privacy/page-724ac4db325fd26c.js",revision:"zYC8MTKEGrd1GoANk2caa"},{url:"/_next/static/chunks/app/(stack)/product-details/%5BproductId%5D/page-f144be1a3d0389e2.js",revision:"zYC8MTKEGrd1GoANk2caa"},{url:"/_next/static/chunks/app/(stack)/terms/page-0d1668d75fd7e881.js",revision:"zYC8MTKEGrd1GoANk2caa"},{url:"/_next/static/chunks/app/(tab)/cart/page-bc983c9b792102df.js",revision:"zYC8MTKEGrd1GoANk2caa"},{url:"/_next/static/chunks/app/(tab)/layout-44049bd90b1d2e85.js",revision:"zYC8MTKEGrd1GoANk2caa"},{url:"/_next/static/chunks/app/(tab)/page-5fe52ed089b6f325.js",revision:"zYC8MTKEGrd1GoANk2caa"},{url:"/_next/static/chunks/app/(tab)/profile/page-72ff527ec9998f25.js",revision:"zYC8MTKEGrd1GoANk2caa"},{url:"/_next/static/chunks/app/(tab)/store/page-a817749d06b55b0d.js",revision:"zYC8MTKEGrd1GoANk2caa"},{url:"/_next/static/chunks/app/layout-c9e918c0829346e6.js",revision:"zYC8MTKEGrd1GoANk2caa"},{url:"/_next/static/chunks/app/loading-abb8cb65e009059f.js",revision:"zYC8MTKEGrd1GoANk2caa"},{url:"/_next/static/chunks/main-04e6879bcccf86af.js",revision:"zYC8MTKEGrd1GoANk2caa"},{url:"/_next/static/chunks/main-app-34642af007cf7984.js",revision:"zYC8MTKEGrd1GoANk2caa"},{url:"/_next/static/chunks/pages/_app-c544d6df833bfd4a.js",revision:"zYC8MTKEGrd1GoANk2caa"},{url:"/_next/static/chunks/pages/_error-e6359318fe16f140.js",revision:"zYC8MTKEGrd1GoANk2caa"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-49819e5e9fb3024d.js",revision:"zYC8MTKEGrd1GoANk2caa"},{url:"/_next/static/css/3c994adc84d50fa0.css",revision:"3c994adc84d50fa0"},{url:"/_next/static/media/00e5370106e0a421-s.p.woff2",revision:"27dbd60a5c2fc807adb376eddfdffae7"},{url:"/_next/static/media/0db193b854b405b4-s.woff2",revision:"6972569eb76f56e63e3437282109ae08"},{url:"/_next/static/media/1c57ca6f5208a29b-s.woff2",revision:"491a7a9678c3cfd4f86c092c68480f23"},{url:"/_next/static/media/3dbd163d3bb09d47-s.woff2",revision:"93dcb0c222437699e9dd591d8b5a6b85"},{url:"/_next/static/media/42d52f46a26971a3-s.woff2",revision:"b44d0dd122f9146504d444f290252d88"},{url:"/_next/static/media/5647e4c23315a2d2-s.woff2",revision:"e64969a373d0acf2586d1fd4224abb90"},{url:"/_next/static/media/627622453ef56b0d-s.p.woff2",revision:"e7df3d0942815909add8f9d0c40d00d9"},{url:"/_next/static/media/7be645d133f3ee22-s.woff2",revision:"3ba6fb27a0ea92c2f1513add6dbddf37"},{url:"/_next/static/media/7c53f7419436e04b-s.woff2",revision:"fd4ff709e3581e3f62e40e90260a1ad7"},{url:"/_next/static/media/934c4b7cb736f2a3-s.p.woff2",revision:"1f6d3cf6d38f25d83d95f5a800b8cac3"},{url:"/_next/static/media/a5b77b63ef20339c-s.woff2",revision:"96e992d510ed36aa573ab75df8698b42"},{url:"/_next/static/media/a6d330d7873e7320-s.woff2",revision:"f7ec4e2d6c9f82076c56a871d1d23a2d"},{url:"/_next/static/media/cff529cd86cc0276-s.woff2",revision:"c2b2c28b98016afb2cb7e029c23f1f9f"},{url:"/_next/static/media/d117eea74e01de14-s.woff2",revision:"4d1e5298f2c7e19ba39a6ac8d88e91bd"},{url:"/_next/static/media/dfa8b99978df7bbc-s.woff2",revision:"7a500aa24dccfcf0cc60f781072614f5"},{url:"/_next/static/media/e2d3d7e4351318b4-s.p.woff2",revision:"249ce9e730095efcd8fcd428dc00cef6"},{url:"/_next/static/media/eb52b768f62eeeb4-s.woff2",revision:"90687dc5a4b6b6271c9f1c1d4986ca10"},{url:"/_next/static/media/fa36017761e8d6a1-s.woff2",revision:"c42cd9975b3a859fbafc7d7288213028"},{url:"/_next/static/zYC8MTKEGrd1GoANk2caa/_buildManifest.js",revision:"ef1b6d4b3e4b1fa82658d5ac3ed63f02"},{url:"/_next/static/zYC8MTKEGrd1GoANk2caa/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/images/coming-soon.svg",revision:"b063086b0a01a881e9d1235ab70f5daf"},{url:"/images/empty-cart.svg",revision:"16d81bdfbda0326865e1ae0e17ab42a2"},{url:"/images/loading.svg",revision:"e362e6318f517143e1190e39fdb80992"},{url:"/images/logo.svg",revision:"0802bc6caeeb72259a9414e68ca43b59"},{url:"/images/no-result.svg",revision:"4fdbdd878ee9f8e0b87e561e9bacc019"},{url:"/images/pwa-logo.png",revision:"3edab5d9bcea0edb3f03228ce484d4a2"},{url:"/images/pwa-logo.svg",revision:"1e690ea9cc24108818c6233b39f32365"},{url:"/manifest.json",revision:"f9b183b7bb6869267f15b200690456f6"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/service-worker.js",revision:"9f04a84756b3e7a9d614284e6f48f557"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:c})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
