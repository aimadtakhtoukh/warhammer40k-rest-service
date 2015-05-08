"use strict";
angular.module("warhammer40k", ["ngAnimate", "ngCookies", "ngTouch", "ngSanitize", "ngResource", "ngRoute", "ngMaterial"]).config(["$routeProvider", function (e) {
    e.when("/rule", {
        templateUrl: "app/main/main.html",
        controller: "MainRuleCtrl"
    }).when("/rule/:id", {
        templateUrl: "app/rule/ruleDetails.html",
        controller: "RuleDetailsCtrl"
    }).otherwise({redirectTo: "/rule"})
}]), angular.module("warhammer40k").controller("NavbarCtrl", ["$scope", function (e) {
    e.date = new Date
}]), angular.module("warhammer40k").controller("RuleDetailsCtrl", ["$scope", "$http", "$routeParams", function (e, t, a) {
    e.rule = null;
    var l = a.id;
    t.get("/rule/rest/" + l).success(function (t) {
        e.rule = t
    })
}]), angular.module("warhammer40k").controller("MainRuleCtrl", ["$scope", "$http", "$location", function (e, t, a) {
    e.rules = [], t.get("/rule/rest/all").success(function (t) {
        e.rules = t
    }), e.showRule = function (e) {
        a.path("/rule/" + e)
    }
}]), angular.module("warhammer40k").run(["$templateCache", function (e) {
    e.put("app/main/main.html", '<div layout="vertical" layout-fill=""><md-content><header ng-include="\'app/components/navbar/navbar.html\'"></header><div class="techs" layout-align="center"><md-card ng-repeat="rule in rules | orderBy:\'id\'" ng-click="showRule(rule.id)"><div class="thumbnail"><div class="caption"><h3>{{rule.name}}</h3><p>{{rule.description}}</p></div></div></md-card></div></md-content></div>'), e.put("app/rule/ruleDetails.html", '<div class="techs" layout-align="center"><md-card><div class="thumbnail"><div class="caption"><h3>{{rule.name}}</h3><p>{{rule.description}}</p></div><p>{{rule.codex}}, page {{rule.page}}</p></div></md-card></div>'), e.put("app/components/navbar/navbar.html", '<md-toolbar layout="row" layout-align="center center" ng-controller="NavbarCtrl"><md-button href="https://github.com/Swiip/generator-gulp-angular">Gulp Angular</md-button><section flex="" layout="row" layout-align="left center"><md-button href="#" class="md-raised">Home</md-button><md-button href="#" class="md-raised">About</md-button><md-button href="#" class="md-raised">Contact</md-button></section><md-button href="#">Current date: {{ date | date:\'dd-MM-yyyy\' }}</md-button></md-toolbar>')
}]);