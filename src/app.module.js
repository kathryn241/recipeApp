(function() {
    'use strict';

    angular.module('recipeApp', [
        'ui.router',
        'recipeApp.main',
        'recipeApp.templates'
    ])
    .run(function($templateCache, $compile, $rootScope){
        var templatesHTML = $templateCache.get('recipeApp.templates');
        $compile(templatesHTML)($rootScope);
    })

    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/recipes');

        $stateProvider
            .state('recipes', {
                url: '/recipes?filtered',
                views: {
                    'content': {
                        templateUrl: 'main/assets/content.html',
                        controller: 'recipeListController',
                        controllerAs: 'main'
                    },
                    'footer': {
                        templateUrl: 'shared/assets/footer.html'
                    }
                }
            })

            .state('recipes.detail', {
                url: '/recipeDetail?id&filtered',
                views: {
                    'content@': {
                        templateUrl: 'main/assets/detail.html',
                        controller: 'recipeDetailController',
                        controllerAs: 'detail'
                    }
                }

            })
    });
})();