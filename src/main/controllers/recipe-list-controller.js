(function() {
    'use strict';

    angular
        .module('recipeApp.main')
        .controller('recipeListController', recipeListController);

    function recipeListController(RecipesService, $stateParams) {
        try {
            this.recipeList = RecipesService.list();
        } catch(error) {
            if(error)
            this.error = error.message;
            else 
                this.error = 'Sorry, we currently have no recipes for you.'
        }
        this.searchText = $stateParams.filtered;
        this.orderedList = false;
        this.orderByTime = function() {
            if (this.orderedList === 'cookingTime') {
                this.orderedList = '-cookingTime'
            } else
                this.orderedList = 'cookingTime';
        };
        this.clearFilter = function() {
            this.searchText = "";
        }

    }
})();