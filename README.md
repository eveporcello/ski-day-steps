02_04: Static Transpiling
============

* NPM init
* npm install --save-dev babel-cli
* create a folder inside of dist called assets
* link index.html to bundle.js 
* type text/babel
* rename original file as index.js in src
* babel ./src/index.js --out-file ./dist/bundle.js
* Install presets
* create .babelrc
* install presets from npm
* httpster -d ./dist -p 3000 in package.json
* run