test:
	@./node_modules/.bin/mocha --require should -R spec --ui bdd

.PHONY: test
