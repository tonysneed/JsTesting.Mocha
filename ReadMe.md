# Basic ES6 Application

## Prerequisites

1. Install Node from [nodejs.org](http://nodejs.org).

	- Also verify that **Git** is installed.
	
2. Install **Definitely Typed**.

	```shell
	npm install tsd -g
	```

3. Install **gulp**.

	```shell
	npm install gulp -g
	```

4. Download `.gitignore` file.

	```shell
	curl https://raw.githubusercontent.com/github/gitignore/master/Node.gitignore -o .gitignore
	```

5. Add a `license.md` file.

	- Paste license text: `http://choosealicense.com/licenses/mit`

## Enable gulp with mocha

1. Install `gulp`.

	```shell
	npm install gulp --save-dev
	```
	
2. Repeat: `gulp-mocha`, `mocha`, `chai`.

3. Add type defintions for `mocha`, `chai`, `gulp`, `gulp-mocha`.

	```shell
	tsd install mocha chai gulp gulp-mocha
	```

4. Add `gulpfile.js` to the project with the following content:

	```js
	'use strict';
	
	var gulp = require('gulp');
	var mocha = require('gulp-mocha');
	
	// Execute all tests.
	gulp.task('run-tests', function () {
	return gulp.src('test/**/*.js', { read: false })
		.pipe(mocha({ reporter: 'spec' }));
	});
	```
	
## Write tests

1. Call `describe` to write test code.
	- Use chai.expect to write assertions
	
2. Press Cmd+Shift+T to run the tests

