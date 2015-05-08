"use strict";
angular.module("warhammer40k", ["ngAnimate", "ngCookies", "ngTouch", "ngSanitize", "ngResource", "ngRoute", "ngMaterial"]).config(["$routeProvider", function (t) {
    t.when("/", {
        templateUrl: "app/main/main.html",
        controller: "MainRuleCtrl"
    }).when("/rule/:id", {
        templateUrl: "app/rule/ruleDetails.html",
        controller: "RuleDetailsCtrl"
    }).otherwise({redirectTo: "/"})
}]), angular.module("warhammer40k").controller("NavbarCtrl", ["$scope", function (t) {
    t.date = new Date
}]), angular.module("warhammer40k").controller("RuleDetailsCtrl", ["$scope", "$http", function (t, e) {
    t.rule = null, e.get("/rule/rest/:id").success(function (e) {
        t.rule = e
    })
}]), angular.module("warhammer40k").controller("MainRuleCtrl", ["$scope", "$http", "$location", function (t, e, r) {
    t.rules = [], e.get("/rule/rest/all").success(function (e) {
        t.rules = e
    }), t.showRule = function (t) {
        r.path("/rule/" + t)
    }
}]), angular.module("warhammer40k").run(["$templateCache", function (t) {
    t.put("app/main/main.html", '<div layout="vertical" layout-fill=""><md-content><header ng-include="\'app/components/navbar/navbar.html\'"></header><div class="techs" layout-align="center"><md-card ng-repeat="rule in rules | orderBy:\'id\'" ng-click="showRule(rule.id)"><div class="thumbnail"><div class="caption"><h3>{{rule.name}}</h3><p>{{rule.description}}</p></div></div></md-card></div><footer><md-toolbar layout="row" layout-align="center center"><p>With ♥ from <a href="https://twitter.com/Swiip">@Swiip</a></p></md-toolbar></footer></md-content></div>'), t.put("app/rule/ruleDetails.html", '<div class="techs" layout-align="center"><md-card><div class="thumbnail"><div class="caption"><h3>{{rule.name}}</h3><p>{{rule.description}}</p></div></div></md-card></div>'), t.put("app/components/navbar/navbar.html", '<md-toolbar layout="row" layout-align="center center" ng-controller="NavbarCtrl"><md-button href="https://github.com/Swiip/generator-gulp-angular">Gulp Angular</md-button><section flex="" layout="row" layout-align="left center"><md-button href="#" class="md-raised">Home</md-button><md-button href="#" class="md-raised">About</md-button><md-button href="#" class="md-raised">Contact</md-button></section><md-button href="#">Current date: {{ date | date:\'dd-MM-yyyy\' }}</md-button></md-toolbar>')
}]);