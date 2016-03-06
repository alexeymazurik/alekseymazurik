class: center, middle

# HTML/CSS Advanced
## Lection 1
---
# NodeJS

## Installing
### Linux
```bash
$ sudo apt-get install nodejs
```
### OS X
#### Download and install NodeJS package:
[https://nodejs.org/en/download/](https://nodejs.org/en/download/)
---
# NodeJS
## Check for installed NodeJS
### Linux
```bash
$ nodejs
> 2 + 2
4
>
```
### OS X
```bash
$ node
> 2 + 2
4
>
```
---
class: center, middle

# NPM
## Node Package Manager

<p class="center">
  <img width="100%" src="/images/npm.png" />
</p>
---
# NPM
## Install
### Linux
```bash
$ sudo apt-get update
$ sudo apt-get install npm
```
### Check
``` bash
$ npm --version
1.3.10
```
---
class: center, middle

# Bower

<p class="center">
  <img width="100%" src="/images/bower.jpg" />
</p>
---
# Bower
### Install
```bash
$ [sudo] npm install -g bower
```
### Problems?
```bash
$ ln -s /usr/bin/nodejs /usr/bin/node
$ hash -r
```
### Check
```bash
$ bower --version
1.7.7
```
---
# First App
```bash
$ mkdir first_app
$ cd first_app
$ git init
$ npm init
$ bower init
$ ls
```
File structure:
```bash
../
package.json
bower.json
```
---
# First App
## package.json
```json
{
  "name": "first_app",
  "version": "0.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "BSD-2-Clause"
}
```
---
# First App
## bower.json
```json
{
  "name": "first_app",
  "description": "",
  "main": "index.js",
  "moduleType": [],
  "license": "MIT",
  "homepage": "",
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components",
    "test",
    "tests"
  ]
}
```
---
# First App
## Build folder
Create html file called **`index.html`**:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>First App</title>
  </head>
  <body>
    <h1>Hello world</h1>
    I'm great front-end developer
  </body>
</html>
```
Help Commands: `html` or `html:5` + press `TAB`
---
# First App
### Connect Styles
```html
<link rel="stylesheet" href="../bower_components/bootstrap/dist/css/bootstrap.min.css">
```
### Check results >>>
---
# First App
## .red[INCORRECT RESULT:]
![](/images/incorrect_html.png)
---
# First App
## .green[CORRECT RESULT:]
![](/images/correct_html.png)
---
# Looks good?
![](/images/long_css_include.png)
---
class: center, middle

<p class="center">
  <img width="100%" src="/images/gulp.png" />
</p>
---
# Gulp
## Install
```bash
$ npm install -g gulp-cli
$ npm install gulp --save
```
## gulpfile.js
```js
var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});
```
