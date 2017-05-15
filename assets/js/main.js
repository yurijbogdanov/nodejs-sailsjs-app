;(function (angular) {
  'use strict';

  /**
   * Init
   */
  angular.module('app', ['ngRoute', 'ngResource']);


  /**
   * Config
   */
  angular.module('app').config(AppConfig);
  AppConfig.$inject = ['$locationProvider', '$routeProvider'];
  function AppConfig($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider
      .when('/', {
        templateUrl : '/app/views/default.html',
        controller : 'DefaultController'
      })
      .otherwise({redirectTo: '/'});
  }


  /**
   * Controllers
   */
  angular.module('app').controller('DefaultController', DefaultController);
  DefaultController.$inject = ['$scope', '$log', 'Article', 'Category', 'Tag', 'Comment'];
  function DefaultController($scope, $log, Article, Category, Tag, Comment) {
    $scope.articles = [];
    Article.findAll(function (articles) {
      $scope.articles = articles;
    });

    $scope.categories = [];
    Category.findAll(function (categories) {
      $scope.categories = categories;
    });

    $scope.tags = [];
    Tag.findAll(function (tags) {
      $scope.tags = tags;
    });

    $scope.comments = [];
    Comment.findAll(function (comments) {
      $scope.comments = comments;
    });
  }


  /**
   * Factories, Services
   */
  angular.module('app').factory('User', UserFactory);
  UserFactory.$inject = ['$resource'];
  function UserFactory($resource) {
    return $resource('/user/:id', {id: '@id'}, {
      update: {
        method: 'PUT'
      },
      findAll: {
        method: 'GET',
        isArray: true
      }
    });
  }

  angular.module('app').factory('Article', ArticleFactory);
  ArticleFactory.$inject = ['$resource'];
  function ArticleFactory($resource) {
    return $resource('/article/:id', {id: '@id'}, {
      update: {
        method: 'PUT'
      },
      findAll: {
        method: 'GET',
        isArray: true
      }
    });
  }

  angular.module('app').factory('Category', CategoryFactory);
  CategoryFactory.$inject = ['$resource'];
  function CategoryFactory($resource) {
    return $resource('/category/:id', {id: '@id'}, {
      update: {
        method: 'PUT'
      },
      findAll: {
        method: 'GET',
        isArray: true
      }
    });
  }

  angular.module('app').factory('Tag', TagFactory);
  TagFactory.$inject = ['$resource'];
  function TagFactory($resource) {
    return $resource('/tag/:id', {id: '@id'}, {
      update: {
        method: 'PUT'
      },
      findAll: {
        method: 'GET',
        isArray: true
      }
    });
  }

  angular.module('app').factory('Comment', CommentFactory);
  CommentFactory.$inject = ['$resource'];
  function CommentFactory($resource) {
    return $resource('/comment/:id', {id: '@id'}, {
      update: {
        method: 'PUT'
      },
      findAll: {
        method: 'GET',
        isArray: true
      }
    });
  }
})(angular);
