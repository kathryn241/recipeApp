describe("The recipe detail page", function() {

    beforeEach(module('recipeApp.main'));
    
    var controller, fakeRecipeInfoService;
    describe("when given a valid recipe ID", function() {
        beforeEach(inject(function($controller) {
            fakeRecipeInfoService = {
                getRecipe: jasmine.createSpy().and.callFake(function() {
                    return {
                        title: 'Banana cake'};
                })
            };
            var fakeStateParams = {
                id: 1
            };
            controller = $controller('recipeDetailController', {
                RecipeInfoService: fakeRecipeInfoService,
                $stateParams: fakeStateParams
            })
        }));
    
    
        it('should display details on that recipe', function () {
            expect(fakeRecipeInfoService.getRecipe).toHaveBeenCalledWith(1);
            expect(controller.recipe.title).toEqual('Banana cake');
            
        });

    });
    describe("when given an invalid recipe ID", function() {
        beforeEach(inject(function($controller) {
            fakeRecipeInfoService = {
                getRecipe: jasmine.createSpy().and.callFake(function() {
                    throw Error('no recipes here');
                })
            };
            var fakeStateParams = {
                id: 1
            };
            controller = $controller('recipeDetailController', {
                RecipeInfoService: fakeRecipeInfoService,
                $stateParams: fakeStateParams
            })
        }));

        it('should display an error message', function () {
            expect(fakeRecipeInfoService.getRecipe).toHaveBeenCalledWith(1);
            expect(controller.error).toEqual('no recipes here');
        });

    });

});