// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
  'ionic','starter.controllers',
  'thank.controllers','thank.services'
])
.constant('apiBase',"THANK")
.run(function($ionicPlatform,$timeout,$rootScope,$ionicHistory,$state) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
    }

    //INIT LOG CONSOLE
    if (window.cordova && window.cordova.logger) {
            window.cordova.logger.__onDeviceReady();
    }
    //INIT NOTIFICATION
    if (window.plugin && window.plugin.notification) {

        window.plugin.notification.local.setDefaults({
            autoCancel: true
        });
        if (window.device && window.device.platform === 'iOS') {
            window.plugin.notification.local.registerPermission();
        }
        window.plugin.notification.local.on('click', function (notification) {
            console.log("click "+notification.id);
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            $state.go('app.todoList', {}, {location:'replace'});
            console.log("click 2 "+notification.id);
            //$timeout(function () {
            //  $rootScope.$broadcast('cordovaLocalNotification:click', notification);
            //});
        });

        window.plugin.notification.local.on('trigger', function (notification) {
            $timeout(function () {
                $rootScope.$broadcast('cordovaLocalNotification:trigger', notification);
            });
        });
        console.log("init notification plugin");
    
    }

    
   

  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.deviceCheck', {
    url: "/deviceCheck",
    views: {
      'menuContent': {
        templateUrl: "templates/deviceCheck.html",
        controller: 'deviceCheckCtrl'
      }
    }
  })
    .state('app.todoList', {
      url: "/todoList",
      views: {
        'menuContent': {
          templateUrl: "templates/todoList.html",
          controller: 'todoCtrl'
        }
      }
    })

  .state('app.todoDetail', {
    url: "/todoDetail/:todoId",
    views: {
      'menuContent': {
          templateUrl: "templates/todoPage.html",
          controller: 'todoDetailCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/todoList');
});