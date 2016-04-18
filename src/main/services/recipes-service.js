/* For the purpose of this prototype, this Service returns data directly to the Controller.
 Normally this would not happen - it would return a promise to the Controller, and make a request to a Proxy to call the REST service.
 */

(function() {
    'use strict';

    angular
        .module('recipeApp.main')
        .factory('RecipesService', RecipesService);
    
    function RecipesService() {
        var recipes = [
            {
                "id": 1,
                "cookingTime": 90,
                "name": "Sapphire's stir-fry",
                "image": "http://ichef.bbci.co.uk/food/ic/food_16x9_88/recipes/sachas_stir-fry_17077_16x9.jpg",
                "ingredients": [
                    "sunflower oil",
                    "spring onion",
                    "garlic clove",
                    "fresh root ginger",
                    "carrot",
                    "red pepper",
                    "baby sweetcorn",
                    "courgette",
                    "sugar-snap peas",
                    "mangetout",
                    "hoisin sauce",
                    "soy sauce"
                ]
            },
            {
                "id": 2,
                "cookingTime": 60,
                "name": "Easy chocolate cake",
                "image": "http://ichef.bbci.co.uk/food/ic/food_16x9_88/recipes/easy_chocolate_cake_31070_16x9.jpg",
                "ingredients": [
                    "plain flour",
                    "caster sugar",
                    "cocoa powder",
                    "baking powder",
                    "bicarbonate of soda",
                    "free-range eggs",
                    "milk",
                    "vegetable oil",
                    "vanilla extract",
                    "boiling water",
                    "plain chocolate",
                    "double cream"
                ]
            },
            {
                "id": 3,
                "cookingTime": 840,
                "name": "Chicken Kiev",
                "image": "http://ichef.bbci.co.uk/food/ic/food_16x9_88/recipes/chickenkievwithmashe_83483_16x9.jpg",
                "ingredients": [
                    "fresh parsley",
                    "butter",
                    "garlic cloves",
                    "salt",
                    "black pepper",
                    "Dijon mustard",
                    "plain flour",
                    "egg",
                    "milk",
                    "white bread",
                    "olive oil"
                ]
            }
        ];
        return {
            list: function() {
                if(recipes)
                    return recipes;
                else
                    throw Error('Sorry, we currently have no recipes for you.')
            }
        }
    }
})();