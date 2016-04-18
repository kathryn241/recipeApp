/*
Example of integration test.
Would need to include red and green path scenarios.
Plus stub the data, otherwise testing for a "chocolate cake" response is pretty flaky!
 */

describe('Recipe List page', function() {

    beforeEach(function () {
        browser.get('http://localhost:8888/#/recipes');
    });
    
    it('should display filtered recipes if the user enters a filter term', function() {
        element(by.model('main.searchText')).sendKeys('choc');
        element.all(by.css('.recipeName')).then(function(recipes) {
            expect(recipes.length).toBe(1);
            expect(recipes[0].getText()).toBe('Easy chocolate cake');
        });
    });
});