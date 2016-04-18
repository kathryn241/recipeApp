Dear Project Manager,

Here's the recipe app you requested.

I've created a prototype, it's available here to view: http://kathryn241.github.io/recipeApp

Nearly all the functional requirements are covered off (17/19), so it will be great to get some feedback before the next iteration of development.

It does need some further work though to get "production ready" (tasks listed below). It's currently using stubbed data, so a part of the work will be integrating with (existing/ new?) backend services. I'm also keen to get some requirements from you on browers/ devices supported, and the wider technical context (existing tech stack, where/ how will the app be deployed etc).

Let me know if you have any issues viewing the app, will be happy to take you through it.

Best wishes,
Kathryn


## Tech details:
This app sounds like it would be a component in an existing website/ application - so it would probably be most efficient to use the existing tech stack, and house-styles. For now it's made with the use of AngularJS, so it can be easily tested and picked up by new developers.

Tech | Description
------------ | -------------
AngularJS | Javascript Framework
Gulp | Task Runner
NPM | Node Package Manager (Dev dependancies)
Bower | Package Manager (External Dependancies)
Karma | Test Runner (Unit Tests)
Jasmine | Test Framework
Protractor | Test Framework (Browser Based Tests)

### To run the app locally:
**Software Prerequisites:** Node (v.4.2.6), NPM (v.3.8.1), Karma (v0.13.22), Gulp (v3.9.1). Versions in brackets have been tested, other versions may work too. To run the integration tests you'll also need Protractor (v0.3.22) - instructions [here](http://angular.github.io/protractor/#/).
  1. Checkout the code, and from the directory 'recipeApp', run 'npm install' and then 'bower install'
  2. Run the app locally by running 'gulp run'. You should now be able to access it in your browser from http://localhost:8888
  3. To see other available gulp tasks, run 'gulp help' or take a look in the gulpfile.js.

### Browsing the code:
  * **/src** --> source code. Nice and readable. 
  * **/dist** --> production, 'built' code. Minified so less readable.
  * **/test** --> test cases. The directory structure should match with /src so you can easily find the tests for each js file.
  * **gulpfile.js** --> have a look at the different gulp tasks you can run.

## Scenarios completed:
AS A user I WANT to find recipes SO THAT I can get inspiration for cooking
- [x] Scenario: No recipes available
- [x] Scenario: One recipe available
- [x] Scenario: Multiple recipes
- [x] Scenario: Select a recipe
- [ ] Scenario: Multiple pages of recipes
- [ ] Scenario: Navigating multiple pages of recipes

AS A user I WANT details on an individual recipe SO THAT I am able to cook it
- [x]  Scenario: Recipe doesn't exist
- [x]  Scenario: Recipe cooking time
- [x]  Scenario: Recipe image
- [x]  Scenario: Recipe ingredients
- [x]  Scenario: Recipe ingredient group
- [x]  Scenario: Recipe preparation method
- [x]   Scenario: Go back to recipe list

AS A user I WANT to filter through recipes SO THAT I can quickly get to the ones I am looking for
- [x] Scenario: No results
- [x] Scenario: Filter results by name
- [x] Scenario: Filter results by ingredient

AS A user I WANT to order recipes by cooking time SO THAT I can see quick recipes first
- [x] Scenario: Order by cooking time
- [x] Scenario: Order by cooking time descending
- [x] Scenario: Order by cooking time ascending


## To-Dos before Live Deployment:
Technical:
- [ ] instead of using stubbed data in recipe-info-service and recipes-service, use promises and RESTful APIs to get data.
- [ ] allow for errors being returned from the service, or unexpected/ missing data e.g. invalid url for image
- [ ] ensure support for all necessary browsers & devices (awaiting business requirements)

Testing:
- [ ] add static analysis for html, js, css (use house styles)
- [ ] higher test coverage (have done examples of unit & integration tests), add multi browser coverage
- [ ] UAT testing
- [ ] creation of test reports
- [ ] Performance testing
- [ ] SEO testing (as required)

Functionality:
- [ ] pagination of results if more than 10 on page (suggest use ui bootstrap)

User Experience
- [ ] polish css (especially layout + removing unnecessary divs)
- [ ] enhance experience for mobile
- [ ] accessibility - need to add ARIA attributes, image alts, plus any further business requirements

Development tasks:
- [ ] add run-sequence + livereload to Gulp tasks and tidy up.
- [ ] concatenate + minify external Bower dependancies so all loaded together. Don't need all the files under /dist/bower_components... need a clear out so only taking core dependancy files.
- [ ] create change log and readme for new developers
