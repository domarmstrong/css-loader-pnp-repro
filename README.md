# css-loader-pnp-repro
Reproduce css-loader double compile when using yarn pnp

## Install
`$ yarn`

## Reproduction
`$ yarn start`

```
➜  $ yarn start
<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:8080/
<i> [webpack-dev-server] On Your Network (IPv4): http://192.168.1.209:8080/
<i> [webpack-dev-server] On Your Network (IPv6): http://[fe80::1]:8080/
<i> [webpack-dev-server] Content not from webpack is served from '/../public' directory
asset main.js 290 KiB [emitted] (name: main)
runtime modules 27.3 KiB 13 modules
modules by path ./.yarn/ 168 KiB
  modules by path ./.yarn/__virtual__/ 68.4 KiB
    modules by path ./.yarn/__virtual__/webpack-dev-server-virtual-85cdfb49d1/0/cache/webpack-dev-server-npm-4.11.1-12e4e9dfc1-b7601a39ee.zip/node_modules/webpack-dev-server/client/ 55.8 KiB 12 modules
    modules by path ./.yarn/__virtual__/style-loader-virtual-3c160da6ee/0/cache/style-loader-npm-3.3.1-4bbb6ec77f-470feef680.zip/node_modules/style-loader/dist/runtime/*.js 5.75 KiB 6 modules
    modules by path ./.yarn/__virtual__/webpack-virtual-b71f2cd5d4/0/cache/webpack-npm-5.75.0-ebca50e2e7-2bcc5f3c19.zip/node_modules/webpack/hot/*.js 4.59 KiB 4 modules
    modules by path ./.yarn/__virtual__/css-loader-virtual-33f84c0390/0/cache/css-loader-npm-6.7.3-63aa933400-473cc32b6c.zip/node_modules/css-loader/dist/runtime/*.js 2.31 KiB 2 modules
  modules by path ./.yarn/cache/ 100 KiB
    modules by path ./.yarn/cache/html-entities-npm-2.3.3-e0aac656af-92521501da.zip/node_modules/html-entities/lib/*.js 81.3 KiB 4 modules
    ./.yarn/cache/ansi-html-community-npm-0.0.8-5eaef55f1b-04c568e834.zip/node_modules/ansi-html-community/index.js 4.16 KiB [built] [code generated]
    ./.yarn/cache/events-npm-3.3.0-c280bc7e48-f6f487ad21.zip/node_modules/events/events.js 14.5 KiB [built] [code generated]
modules by path ./src/ 3.85 KiB
  ./src/app.js 30 bytes [built] [code generated]
  ./src/app.css 3.17 KiB [built] [code generated]
  ./.yarn/__virtual__/css-loader-virtual-33f84c0390/0/cache/css-loader-npm-6.7.3-63aa933400-473cc32b6c.zip/node_modules/css-loader/dist/cjs.js!./src/app.css 673 bytes [built] [code generated]
webpack 5.75.0 compiled successfully in 587 ms
assets by status 290 KiB [cached] 1 asset
cached modules 172 KiB (javascript) 27.3 KiB (runtime) [cached] 46 modules
webpack 5.75.0 compiled successfully in 25 ms
```

Note webpack `compiled` twice.

However, if you unplug the css-loader, it will only compile once as expected.

`$ yarn unplug css-loader`

`$ yarn start`

```
➜  $ yarn start
<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:8080/
<i> [webpack-dev-server] On Your Network (IPv4): http://192.168.1.209:8080/
<i> [webpack-dev-server] On Your Network (IPv6): http://[fe80::1]:8080/
<i> [webpack-dev-server] Content not from webpack is served from '/../public' directory
asset main.js 287 KiB [emitted] (name: main)
runtime modules 27.3 KiB 13 modules
modules by path ./.yarn/ 168 KiB
  modules by path ./.yarn/__virtual__/ 66.1 KiB 22 modules
  modules by path ./.yarn/cache/ 100 KiB
    modules by path ./.yarn/cache/html-entities-npm-2.3.3-e0aac656af-92521501da.zip/node_modules/html-entities/lib/*.js 81.3 KiB 4 modules
    ./.yarn/cache/ansi-html-community-npm-0.0.8-5eaef55f1b-04c568e834.zip/node_modules/ansi-html-community/index.js 4.16 KiB [built] [code generated]
    ./.yarn/cache/events-npm-3.3.0-c280bc7e48-f6f487ad21.zip/node_modules/events/events.js 14.5 KiB [built] [code generated]
  modules by path ./.yarn/unplugged/css-loader-virtual-33f84c0390/node_modules/css-loader/dist/runtime/*.js 2.31 KiB
    ./.yarn/unplugged/css-loader-virtual-33f84c0390/node_modules/css-loader/dist/runtime/noSourceMaps.js 64 bytes [built] [code generated]
    ./.yarn/unplugged/css-loader-virtual-33f84c0390/node_modules/css-loader/dist/runtime/api.js 2.25 KiB [built] [code generated]
modules by path ./src/ 3.58 KiB
  ./src/app.js 30 bytes [built] [code generated]
  ./src/app.css 3 KiB [built] [code generated]
  ./.yarn/unplugged/css-loader-virtual-33f84c0390/node_modules/css-loader/dist/cjs.js!./src/app.css 559 bytes [built] [code generated]
webpack 5.75.0 compiled successfully in 508 ms
```