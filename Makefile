build:
	browserify lib/index.js -o dribbble.js

build-test:
	browserify lib/index.js test/index.test.js -o test/bundle.js

test:
	@./node_modules/.bin/mocha --reporter spec ./test/*.test.js

.PHONY: test
