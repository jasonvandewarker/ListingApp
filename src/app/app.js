
(function() {
    'use strict';

    angular
        .module('app', ['oitozero.ngSweetAlert', 'socialLogin', 'ui.router', 'socialLogin', 'ui.bootstrap', 'LocalStorageModule'])
        .value('localApi', 'http://localhost:59820/api/')
        .config(function($stateProvider, $urlRouterProvider, socialProvider) {

            $urlRouterProvider.otherwise("/main");

            $stateProvider
                .state('main', {
                    url: "/main",
                    templateUrl: "main.html",
                    controller: "HomeController",
                    controllerAs: "HomeCtrl"
                })

            
                .state('user', {
                    url: "/user",
                    templateUrl: "app/user/profile.html",
                    controller: "UserController",
                    controllerAs: "userCtrl"
                })


            
                .state('login', {
                    url: "/fblogin",
                    templateUrl: "app/home/fblogin.html",
                    controller: "UserController",
                    controllerAs: "UserCtrl"
                })

            
                .state('productfeed', {
                    url: "/productfeed",
                    templateUrl: "/app/products/product.feed.html",
                    controller: "ProductController",
                    controllerAs: "ProductCtrl"
                })

           
                .state('addproduct', {
                    url: "/addproduct",
                    templateUrl: "/app/products/product.add.html",
                    controller: "ProductController",
                    controllerAs: "ProductCtrl"
                });







            // $stateProvider
            //     .state('message', {
            //         url: "/app/message/message.html",
            //         templateUrl: "app/message/message.html",
            //         controller: "MessageController",
            //         controllerAs: "MessageCtrl"
            //     });

            // $stateProvider
            //     .state('favorites', {
            //         url: "/app/user/favorites.html",
            //         templateUrl: "app/user/favorites.html",
            //         controller: "UserController",
            //         controllerAs: "UserCtrl"
            //     });


            //socialProvider.setFbKey





        }); // end of angular module

})();
