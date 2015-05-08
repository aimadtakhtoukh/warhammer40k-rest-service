"use strict";
angular.module("warhammer40k", ["ngAnimate", "ngCookies", "ngTouch", "ngSanitize", "ngResource", "ngRoute", "ngMaterial"]).config(["$routeProvider", function (e) {
    e.when("/", {templateUrl: "app/main/main.html", controller: "MainCtrl"}).otherwise({redirectTo: "/"})
}]), angular.module("warhammer40k").controller("NavbarCtrl", ["$scope", function (e) {
    e.date = new Date
}]), angular.module("warhammer40k").controller("MainCtrl", ["$scope", function (e) {
    e.awesomeThings = [{
        title: "AngularJS",
        url: "https://angularjs.org/",
        description: "HTML enhanced for web apps!",
        logo: "angular.png"
    }, {
        title: "BrowserSync",
        url: "http://browsersync.io/",
        description: "Time-saving synchronised browser testing.",
        logo: "browsersync.png"
    }, {
        title: "GulpJS",
        url: "http://gulpjs.com/",
        description: "The streaming build system.",
        logo: "gulp.png"
    }, {
        title: "Jasmine",
        url: "http://jasmine.github.io/",
        description: "Behavior-Driven JavaScript.",
        logo: "jasmine.png"
    }, {
        title: "Karma",
        url: "http://karma-runner.github.io/",
        description: "Spectacular Test Runner for JavaScript.",
        logo: "karma.png"
    }, {
        title: "Protractor",
        url: "https://github.com/angular/protractor",
        description: "End to end test framework for AngularJS applications built on top of WebDriverJS.",
        logo: "protractor.png"
    }, {
        title: "Angular Material Design",
        url: "https://material.angularjs.org/#/",
        description: "The Angular reference implementation of the Google's Material Design specification.",
        logo: "angular-material.png"
    }, {
        title: "Sass (Ruby)",
        url: "http://sass-lang.com/",
        description: "Original Syntactically Awesome StyleSheets implemented in Ruby",
        logo: "ruby-sass.png"
    }], angular.forEach(e.awesomeThings, function (e) {
        e.rank = Math.random()
    })
}]), angular.module("warhammer40k").run(["$templateCache", function (e) {
    e.put("app/main/main.html", '<div layout="vertical" layout-fill=""><md-content><header ng-include="\'app/components/navbar/navbar.html\'"></header><div class="centerCards"><md-card><md-input-container><label>Name</label> <input ng-model="user.name"></md-input-container></md-card></div><section class="jumbotron"><h1>\'Allo, \'Allo! {{user.name}}</h1><p ng-if="user.name == \'Aimad\'">Nice to see you again!</p><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p><a class="btn" ng-href="#">Splendid!</a></p></section><div class="techs" layout-align="center"><md-card ng-repeat="awesomeThing in awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{awesomeThing.logo}}" alt="{{awesomeThing.title}}"><div class="caption"><h3>{{awesomeThing.title}}</h3><p>{{awesomeThing.description}}</p><p><a ng-href="{{awesomeThing.url}}">{{awesomeThing.url}}</a></p></div></div></md-card></div><footer><md-toolbar layout="row" layout-align="center center"><p>With ♥ from <a href="https://twitter.com/Swiip">@Swiip</a></p></md-toolbar></footer></md-content></div>'), e.put("app/components/navbar/navbar.html", '<md-toolbar layout="row" layout-align="center center" ng-controller="NavbarCtrl"><md-button href="https://github.com/Swiip/generator-gulp-angular">Gulp Angular</md-button><section flex="" layout="row" layout-align="left center"><md-button href="#" class="md-raised">Home</md-button><md-button href="#" class="md-raised">About</md-button><md-button href="#" class="md-raised">Contact</md-button></section><md-button href="#">Current date: {{ date | date:\'dd-MM-yyyy\' }}</md-button></md-toolbar>')
}]);