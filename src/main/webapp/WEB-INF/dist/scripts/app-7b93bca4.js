"use strict";
angular.module("warhammer40k", ["ngAnimate", "ngCookies", "ngTouch", "ngSanitize", "ngResource", "ngRoute", "ngMaterial"]).config(["$routeProvider", function (e) {
    e.when("/rule", {
        templateUrl: "app/main/main.html",
        controller: "MainRuleCtrl"
    }).when("/rule/:id", {
        templateUrl: "app/rule/ruleDetails.html",
        controller: "RuleDetailsCtrl"
    }).otherwise({redirectTo: "/rule"})
}]), angular.module("warhammer40k").config(["$mdThemingProvider", function (e) {
    e.theme("default").primaryPalette("grey").accentPalette("grey")
}]), angular.module("warhammer40k").controller("NavbarCtrl", ["$scope", "$location", function (e, l) {
    e.showRules = function () {
        l.path("/rule/")
    }
}]), angular.module("warhammer40k").controller("RuleDetailsCtrl", ["$scope", "$http", "$routeParams", function (e, l, a) {
    e.rule = null;
    var r = a.id;
    l.get("/rule/rest/" + r).success(function (l) {
        e.rule = l, e.rule.reference = rule.codex + ", page" + rule.page
    })
}]), angular.module("warhammer40k").controller("MainRuleCtrl", ["$scope", "$http", "$location", function (e, l, a) {
    e.rules = [], l.get("/rule/rest/all").success(function (l) {
        e.rules = l
    }), e.showRule = function (e) {
        a.path("/rule/" + e)
    }
}]), angular.module("warhammer40k").run(["$templateCache", function (e) {
    e.put("app/main/main.html", '<div layout="column" layout-fill=""><md-content><header ng-include="\'app/components/navbar/navbar.html\'"></header><h1 layout="row" layout-align="center start">Règles</h1><div layout="row" layout-sm="column" layout-wrap=""><md-card class="rule-card" flex=\'33"\' ng-repeat="rule in rules | orderBy:\'id\'" ng-click="showRule(rule.id)"><md-card-content><h3 layout="column" layout-align="start center">{{rule.name}}</h3><p>{{rule.description}}</p><p>{{rule.codex}}</p></md-card-content></md-card></div></md-content></div>'), e.put("app/rule/ruleDetails.html", '<div layout="column" layout-fill=""><md-content><header ng-include="\'app/components/navbar/navbar.html\'"></header><div class="techs" layout-align="center"><md-whiteframe class="md-whiteframe-z5" layout="" layout-align="center center"><div class="caption"><h3>{{rule.name}}</h3><p>{{rule.description}}</p></div><p>{{rule.reference}}</p></md-whiteframe></div></md-content></div>'), e.put("app/components/navbar/navbar.html", '<md-toolbar layout="row" layout-align="start center" ng-controller="NavbarCtrl"><md-button class="md-toolbar-tools md-accent" href="/"><img src="/assets/images/Warhammer40000Logo.gif" alt="Warhammer 40000" class="navbar-image"></md-button><md-select flex="" layout-margin="" placeholder="Rules" ng-model="dropdownModel"><md-option ng-value="readAllRules" ng-click="showRules()">Read All</md-option></md-select><md-select flex="" layout-margin="" placeholder="Equipments" ng-model="dropdownModel"><md-option ng-value="readAllRules" ng-click="showRules()">Read All</md-option></md-select></md-toolbar>')
}]);