"use strict";
angular.module("warhammer40k", ["ngAnimate", "ngCookies", "ngTouch", "ngSanitize", "ngResource", "ngRoute", "ngMaterial"]).config(["$routeProvider", function (e) {
    e.when("/", {templateUrl: "app/main/main.html", controller: "MainRuleCtrl"}).otherwise({redirectTo: "/"})
}]), angular.module("warhammer40k").controller("NavbarCtrl", ["$scope", function (e) {
    e.date = new Date
}]), angular.module("warhammer40k").controller("MainRuleCtrl", ["$scope", "$http", function (e, a) {
    e.rules = [], a.get("/rule/rest/all").success(function (a) {
        e.rules = a
    })
}]), angular.module("warhammer40k").run(["$templateCache", function (e) {
    e.put("app/main/main.html", '<div layout="vertical" layout-fill=""><md-content><header ng-include="\'app/components/navbar/navbar.html\'"></header><div class="centerCards"><md-card><md-input-container><label>Name</label> <input ng-model="user.name"></md-input-container></md-card></div><section class="jumbotron"><h1>\'Allo, \'Allo! {{user.name}}</h1><p ng-if="user.name == \'Aimad\'">Nice to see you again!</p><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p><a class="btn" ng-href="#">Splendid!</a></p></section><div class="techs" layout-align="center"><md-card ng-repeat="rule in rules | orderBy:\'id\'"><div class="thumbnail"><div class="caption"><h3>{{rule.name}}</h3><p>{{rule.description}}</p></div></div></md-card></div><footer><md-toolbar layout="row" layout-align="center center"><p>With ♥ from <a href="https://twitter.com/Swiip">@Swiip</a></p></md-toolbar></footer></md-content></div>'), e.put("app/components/navbar/navbar.html", '<md-toolbar layout="row" layout-align="center center" ng-controller="NavbarCtrl"><md-button href="https://github.com/Swiip/generator-gulp-angular">Gulp Angular</md-button><section flex="" layout="row" layout-align="left center"><md-button href="#" class="md-raised">Home</md-button><md-button href="#" class="md-raised">About</md-button><md-button href="#" class="md-raised">Contact</md-button></section><md-button href="#">Current date: {{ date | date:\'dd-MM-yyyy\' }}</md-button></md-toolbar>')
}]);