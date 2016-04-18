(function() {
    'use strict';

    angular
        .module('recipeApp.main')
        .controller('recipeDetailController', recipeDetailController);
    
    function recipeDetailController(RecipeInfoService, $stateParams) {

        this.filteredCriteria = $stateParams.filtered;

        try {
            this.recipe = RecipeInfoService.getRecipe($stateParams.id);
        } catch(error) {
            if (error) {
                this.error = error.message; }
            else 
                this.error = 'Sorry, there was an unexpected error.';
        }
    }
})();