/**
 * @license AngularJS v1.3.15
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
!function (e, t, n) {
    "use strict";
    function r(e, t) {
        return t = t || Error, function () {
            var n, r, i = arguments[0], o = "[" + (e ? e + ":" : "") + i + "] ", a = arguments[1], c = arguments;
            for (n = o + a.replace(/\{\d+\}/g, function (e) {
                var t = +e.slice(1, -1);
                return t + 2 < c.length ? ft(c[t + 2]) : e
            }), n = n + "\nhttp://errors.angularjs.org/1.3.15/" + (e ? e + "/" : "") + i, r = 2; r < arguments.length; r++)n = n + (2 == r ? "?" : "&") + "p" + (r - 2) + "=" + encodeURIComponent(ft(arguments[r]));
            return new t(n)
        }
    }

    function i(e) {
        if (null == e || M(e))return !1;
        var t = e.length;
        return e.nodeType === bi && t ? !0 : E(e) || fi(e) || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function o(e, t, n) {
        var r, a;
        if (e)if (x(e))for (r in e)"prototype" == r || "length" == r || "name" == r || e.hasOwnProperty && !e.hasOwnProperty(r) || t.call(n, e[r], r, e); else if (fi(e) || i(e)) {
            var c = "object" != typeof e;
            for (r = 0, a = e.length; a > r; r++)(c || r in e) && t.call(n, e[r], r, e)
        } else if (e.forEach && e.forEach !== o)e.forEach(t, n, e); else for (r in e)e.hasOwnProperty(r) && t.call(n, e[r], r, e);
        return e
    }

    function a(e) {
        return Object.keys(e).sort()
    }

    function c(e, t, n) {
        for (var r = a(e), i = 0; i < r.length; i++)t.call(n, e[r[i]], r[i]);
        return r
    }

    function s(e) {
        return function (t, n) {
            e(n, t)
        }
    }

    function l() {
        return ++ui
    }

    function u(e, t) {
        t ? e.$$hashKey = t : delete e.$$hashKey
    }

    function d(e) {
        for (var t = e.$$hashKey, n = 1, r = arguments.length; r > n; n++) {
            var i = arguments[n];
            if (i)for (var o = Object.keys(i), a = 0, c = o.length; c > a; a++) {
                var s = o[a];
                e[s] = i[s]
            }
        }
        return u(e, t), e
    }

    function f(e) {
        return parseInt(e, 10)
    }

    function m(e, t) {
        return d(Object.create(e), t)
    }

    function p() {
    }

    function h(e) {
        return e
    }

    function g(e) {
        return function () {
            return e
        }
    }

    function $(e) {
        return "undefined" == typeof e
    }

    function v(e) {
        return "undefined" != typeof e
    }

    function b(e) {
        return null !== e && "object" == typeof e
    }

    function E(e) {
        return "string" == typeof e
    }

    function y(e) {
        return "number" == typeof e
    }

    function w(e) {
        return "[object Date]" === ci.call(e)
    }

    function x(e) {
        return "function" == typeof e
    }

    function A(e) {
        return "[object RegExp]" === ci.call(e)
    }

    function M(e) {
        return e && e.window === e
    }

    function k(e) {
        return e && e.$evalAsync && e.$watch
    }

    function C(e) {
        return "[object File]" === ci.call(e)
    }

    function T(e) {
        return "[object FormData]" === ci.call(e)
    }

    function S(e) {
        return "[object Blob]" === ci.call(e)
    }

    function N(e) {
        return "boolean" == typeof e
    }

    function _(e) {
        return e && x(e.then)
    }

    function D(e) {
        return !(!e || !(e.nodeName || e.prop && e.attr && e.find))
    }

    function O(e) {
        var t, n = {}, r = e.split(",");
        for (t = 0; t < r.length; t++)n[r[t]] = !0;
        return n
    }

    function H(e) {
        return Kr(e.nodeName || e[0] && e[0].nodeName)
    }

    function R(e, t) {
        var n = e.indexOf(t);
        return n >= 0 && e.splice(n, 1), t
    }

    function I(e, t, n, r) {
        if (M(e) || k(e))throw si("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
        if (t) {
            if (e === t)throw si("cpi", "Can't copy! Source and destination are identical.");
            if (n = n || [], r = r || [], b(e)) {
                var i = n.indexOf(e);
                if (-1 !== i)return r[i];
                n.push(e), r.push(t)
            }
            var a;
            if (fi(e)) {
                t.length = 0;
                for (var c = 0; c < e.length; c++)a = I(e[c], null, n, r), b(e[c]) && (n.push(e[c]), r.push(a)), t.push(a)
            } else {
                var s = t.$$hashKey;
                fi(t) ? t.length = 0 : o(t, function (e, n) {
                    delete t[n]
                });
                for (var l in e)e.hasOwnProperty(l) && (a = I(e[l], null, n, r), b(e[l]) && (n.push(e[l]), r.push(a)), t[l] = a);
                u(t, s)
            }
        } else if (t = e, e)if (fi(e))t = I(e, [], n, r); else if (w(e))t = new Date(e.getTime()); else if (A(e))t = new RegExp(e.source, e.toString().match(/[^\/]*$/)[0]), t.lastIndex = e.lastIndex; else if (b(e)) {
            var d = Object.create(Object.getPrototypeOf(e));
            t = I(e, d, n, r)
        }
        return t
    }

    function P(e, t) {
        if (fi(e)) {
            t = t || [];
            for (var n = 0, r = e.length; r > n; n++)t[n] = e[n]
        } else if (b(e)) {
            t = t || {};
            for (var i in e)("$" !== i.charAt(0) || "$" !== i.charAt(1)) && (t[i] = e[i])
        }
        return t || e
    }

    function j(e, t) {
        if (e === t)return !0;
        if (null === e || null === t)return !1;
        if (e !== e && t !== t)return !0;
        var r, i, o, a = typeof e, c = typeof t;
        if (a == c && "object" == a) {
            if (!fi(e)) {
                if (w(e))return w(t) ? j(e.getTime(), t.getTime()) : !1;
                if (A(e))return A(t) ? e.toString() == t.toString() : !1;
                if (k(e) || k(t) || M(e) || M(t) || fi(t) || w(t) || A(t))return !1;
                o = {};
                for (i in e)if ("$" !== i.charAt(0) && !x(e[i])) {
                    if (!j(e[i], t[i]))return !1;
                    o[i] = !0
                }
                for (i in t)if (!o.hasOwnProperty(i) && "$" !== i.charAt(0) && t[i] !== n && !x(t[i]))return !1;
                return !0
            }
            if (!fi(t))return !1;
            if ((r = e.length) == t.length) {
                for (i = 0; r > i; i++)if (!j(e[i], t[i]))return !1;
                return !0
            }
        }
        return !1
    }

    function V(e, t, n) {
        return e.concat(ii.call(t, n))
    }

    function F(e, t) {
        return ii.call(e, t || 0)
    }

    function q(e, t) {
        var n = arguments.length > 2 ? F(arguments, 2) : [];
        return !x(t) || t instanceof RegExp ? t : n.length ? function () {
            return arguments.length ? t.apply(e, V(n, arguments, 0)) : t.apply(e, n)
        } : function () {
            return arguments.length ? t.apply(e, arguments) : t.call(e)
        }
    }

    function L(e, r) {
        var i = r;
        return "string" == typeof e && "$" === e.charAt(0) && "$" === e.charAt(1) ? i = n : M(r) ? i = "$WINDOW" : r && t === r ? i = "$DOCUMENT" : k(r) && (i = "$SCOPE"), i
    }

    function U(e, t) {
        return "undefined" == typeof e ? n : (y(t) || (t = t ? 2 : null), JSON.stringify(e, L, t))
    }

    function B(e) {
        return E(e) ? JSON.parse(e) : e
    }

    function z(e) {
        e = ti(e).clone();
        try {
            e.empty()
        } catch (t) {
        }
        var n = ti("<div>").append(e).html();
        try {
            return e[0].nodeType === Ei ? Kr(n) : n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (e, t) {
                return "<" + Kr(t)
            })
        } catch (t) {
            return Kr(n)
        }
    }

    function G(e) {
        try {
            return decodeURIComponent(e)
        } catch (t) {
        }
    }

    function Y(e) {
        var t, n, r = {};
        return o((e || "").split("&"), function (e) {
            if (e && (t = e.replace(/\+/g, "%20").split("="), n = G(t[0]), v(n))) {
                var i = v(t[1]) ? G(t[1]) : !0;
                Xr.call(r, n) ? fi(r[n]) ? r[n].push(i) : r[n] = [r[n], i] : r[n] = i
            }
        }), r
    }

    function W(e) {
        var t = [];
        return o(e, function (e, n) {
            fi(e) ? o(e, function (e) {
                t.push(X(n, !0) + (e === !0 ? "" : "=" + X(e, !0)))
            }) : t.push(X(n, !0) + (e === !0 ? "" : "=" + X(e, !0)))
        }), t.length ? t.join("&") : ""
    }

    function K(e) {
        return X(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function X(e, t) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, t ? "%20" : "+")
    }

    function Z(e, t) {
        var n, r, i = gi.length;
        for (e = ti(e), r = 0; i > r; ++r)if (n = gi[r] + t, E(n = e.attr(n)))return n;
        return null
    }

    function J(e, t) {
        var n, r, i = {};
        o(gi, function (t) {
            var i = t + "app";
            !n && e.hasAttribute && e.hasAttribute(i) && (n = e, r = e.getAttribute(i))
        }), o(gi, function (t) {
            var i, o = t + "app";
            !n && (i = e.querySelector("[" + o.replace(":", "\\:") + "]")) && (n = i, r = i.getAttribute(o))
        }), n && (i.strictDi = null !== Z(n, "strict-di"), t(n, r ? [r] : [], i))
    }

    function Q(n, r, i) {
        b(i) || (i = {});
        var a = {strictDi: !1};
        i = d(a, i);
        var c = function () {
            if (n = ti(n), n.injector()) {
                var e = n[0] === t ? "document" : z(n);
                throw si("btstrpd", "App Already Bootstrapped with this Element '{0}'", e.replace(/</, "&lt;").replace(/>/, "&gt;"))
            }
            r = r || [], r.unshift(["$provide", function (e) {
                e.value("$rootElement", n)
            }]), i.debugInfoEnabled && r.push(["$compileProvider", function (e) {
                e.debugInfoEnabled(!0)
            }]), r.unshift("ng");
            var o = Bt(r, i.strictDi);
            return o.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (e, t, n, r) {
                e.$apply(function () {
                    t.data("$injector", r), n(t)(e)
                })
            }]), o
        }, s = /^NG_ENABLE_DEBUG_INFO!/, l = /^NG_DEFER_BOOTSTRAP!/;
        return e && s.test(e.name) && (i.debugInfoEnabled = !0, e.name = e.name.replace(s, "")), e && !l.test(e.name) ? c() : (e.name = e.name.replace(l, ""), li.resumeBootstrap = function (e) {
            return o(e, function (e) {
                r.push(e)
            }), c()
        }, void(x(li.resumeDeferredBootstrap) && li.resumeDeferredBootstrap()))
    }

    function et() {
        e.name = "NG_ENABLE_DEBUG_INFO!" + e.name, e.location.reload()
    }

    function tt(e) {
        var t = li.element(e).injector();
        if (!t)throw si("test", "no injector found for element argument to getTestability");
        return t.get("$$testability")
    }

    function nt(e, t) {
        return t = t || "_", e.replace($i, function (e, n) {
            return (n ? t : "") + e.toLowerCase()
        })
    }

    function rt() {
        var t;
        vi || (ni = e.jQuery, ni && ni.fn.on ? (ti = ni, d(ni.fn, {
            scope: ji.scope,
            isolateScope: ji.isolateScope,
            controller: ji.controller,
            injector: ji.injector,
            inheritedData: ji.inheritedData
        }), t = ni.cleanData, ni.cleanData = function (e) {
            var n;
            if (di)di = !1; else for (var r, i = 0; null != (r = e[i]); i++)n = ni._data(r, "events"), n && n.$destroy && ni(r).triggerHandler("$destroy");
            t(e)
        }) : ti = Et, li.element = ti, vi = !0)
    }

    function it(e, t, n) {
        if (!e)throw si("areq", "Argument '{0}' is {1}", t || "?", n || "required");
        return e
    }

    function ot(e, t, n) {
        return n && fi(e) && (e = e[e.length - 1]), it(x(e), t, "not a function, got " + (e && "object" == typeof e ? e.constructor.name || "Object" : typeof e)), e
    }

    function at(e, t) {
        if ("hasOwnProperty" === e)throw si("badname", "hasOwnProperty is not a valid {0} name", t)
    }

    function ct(e, t, n) {
        if (!t)return e;
        for (var r, i = t.split("."), o = e, a = i.length, c = 0; a > c; c++)r = i[c], e && (e = (o = e)[r]);
        return !n && x(e) ? q(o, e) : e
    }

    function st(e) {
        var t = e[0], n = e[e.length - 1], r = [t];
        do {
            if (t = t.nextSibling, !t)break;
            r.push(t)
        } while (t !== n);
        return ti(r)
    }

    function lt() {
        return Object.create(null)
    }

    function ut(e) {
        function t(e, t, n) {
            return e[t] || (e[t] = n())
        }

        var n = r("$injector"), i = r("ng"), o = t(e, "angular", Object);
        return o.$$minErr = o.$$minErr || r, t(o, "module", function () {
            var e = {};
            return function (r, o, a) {
                var c = function (e, t) {
                    if ("hasOwnProperty" === e)throw i("badname", "hasOwnProperty is not a valid {0} name", t)
                };
                return c(r, "module"), o && e.hasOwnProperty(r) && (e[r] = null), t(e, r, function () {
                    function e(e, n, r, i) {
                        return i || (i = t), function () {
                            return i[r || "push"]([e, n, arguments]), l
                        }
                    }

                    if (!o)throw n("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", r);
                    var t = [], i = [], c = [], s = e("$injector", "invoke", "push", i), l = {
                        _invokeQueue: t,
                        _configBlocks: i,
                        _runBlocks: c,
                        requires: o,
                        name: r,
                        provider: e("$provide", "provider"),
                        factory: e("$provide", "factory"),
                        service: e("$provide", "service"),
                        value: e("$provide", "value"),
                        constant: e("$provide", "constant", "unshift"),
                        animation: e("$animateProvider", "register"),
                        filter: e("$filterProvider", "register"),
                        controller: e("$controllerProvider", "register"),
                        directive: e("$compileProvider", "directive"),
                        config: s,
                        run: function (e) {
                            return c.push(e), this
                        }
                    };
                    return a && s(a), l
                })
            }
        })
    }

    function dt(e) {
        var t = [];
        return JSON.stringify(e, function (e, n) {
            if (n = L(e, n), b(n)) {
                if (t.indexOf(n) >= 0)return "<<already seen>>";
                t.push(n)
            }
            return n
        })
    }

    function ft(e) {
        return "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? dt(e) : e
    }

    function mt(t) {
        d(t, {
            bootstrap: Q,
            copy: I,
            extend: d,
            equals: j,
            element: ti,
            forEach: o,
            injector: Bt,
            noop: p,
            bind: q,
            toJson: U,
            fromJson: B,
            identity: h,
            isUndefined: $,
            isDefined: v,
            isString: E,
            isFunction: x,
            isObject: b,
            isNumber: y,
            isElement: D,
            isArray: fi,
            version: Ai,
            isDate: w,
            lowercase: Kr,
            uppercase: Zr,
            callbacks: {counter: 0},
            getTestability: tt,
            $$minErr: r,
            $$csp: hi,
            reloadWithDebugInfo: et
        }), ri = ut(e);
        try {
            ri("ngLocale")
        } catch (n) {
            ri("ngLocale", []).provider("$locale", $n)
        }
        ri("ng", ["ngLocale"], ["$provide", function (e) {
            e.provider({$$sanitizeUri: Kn}), e.provider("$compile", Zt).directive({
                a: _o,
                input: Wo,
                textarea: Wo,
                form: Io,
                script: Pa,
                select: Fa,
                style: La,
                option: qa,
                ngBind: Zo,
                ngBindHtml: Qo,
                ngBindTemplate: Jo,
                ngClass: ta,
                ngClassEven: ra,
                ngClassOdd: na,
                ngCloak: ia,
                ngController: oa,
                ngForm: Po,
                ngHide: _a,
                ngIf: sa,
                ngInclude: la,
                ngInit: da,
                ngNonBindable: Ma,
                ngPluralize: ka,
                ngRepeat: Ca,
                ngShow: Na,
                ngStyle: Da,
                ngSwitch: Oa,
                ngSwitchWhen: Ha,
                ngSwitchDefault: Ra,
                ngOptions: Va,
                ngTransclude: Ia,
                ngModel: wa,
                ngList: fa,
                ngChange: ea,
                pattern: Ba,
                ngPattern: Ba,
                required: Ua,
                ngRequired: Ua,
                minlength: Ga,
                ngMinlength: Ga,
                maxlength: za,
                ngMaxlength: za,
                ngValue: Xo,
                ngModelOptions: Aa
            }).directive({ngInclude: ua}).directive(Do).directive(aa), e.provider({
                $anchorScroll: zt,
                $animate: Wi,
                $browser: Wt,
                $cacheFactory: Kt,
                $controller: tn,
                $document: nn,
                $exceptionHandler: rn,
                $filter: cr,
                $interpolate: hn,
                $interval: gn,
                $http: dn,
                $httpBackend: mn,
                $location: _n,
                $log: Dn,
                $parse: Un,
                $rootScope: Wn,
                $q: Bn,
                $$q: zn,
                $sce: Qn,
                $sceDelegate: Jn,
                $sniffer: er,
                $templateCache: Xt,
                $templateRequest: tr,
                $$testability: nr,
                $timeout: rr,
                $window: ar,
                $$rAF: Yn,
                $$asyncCallback: Gt,
                $$jqLite: Vt
            })
        }])
    }

    function pt() {
        return ++ki
    }

    function ht(e) {
        return e.replace(Si, function (e, t, n, r) {
            return r ? n.toUpperCase() : n
        }).replace(Ni, "Moz$1")
    }

    function gt(e) {
        return !Hi.test(e)
    }

    function $t(e) {
        var t = e.nodeType;
        return t === bi || !t || t === wi
    }

    function vt(e, t) {
        var n, r, i, a, c = t.createDocumentFragment(), s = [];
        if (gt(e))s.push(t.createTextNode(e)); else {
            for (n = n || c.appendChild(t.createElement("div")), r = (Ri.exec(e) || ["", ""])[1].toLowerCase(), i = Pi[r] || Pi._default, n.innerHTML = i[1] + e.replace(Ii, "<$1></$2>") + i[2], a = i[0]; a--;)n = n.lastChild;
            s = V(s, n.childNodes), n = c.firstChild, n.textContent = ""
        }
        return c.textContent = "", c.innerHTML = "", o(s, function (e) {
            c.appendChild(e)
        }), c
    }

    function bt(e, n) {
        n = n || t;
        var r;
        return (r = Oi.exec(e)) ? [n.createElement(r[1])] : (r = vt(e, n)) ? r.childNodes : []
    }

    function Et(e) {
        if (e instanceof Et)return e;
        var t;
        if (E(e) && (e = mi(e), t = !0), !(this instanceof Et)) {
            if (t && "<" != e.charAt(0))throw Di("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
            return new Et(e)
        }
        t ? Nt(this, bt(e)) : Nt(this, e)
    }

    function yt(e) {
        return e.cloneNode(!0)
    }

    function wt(e, t) {
        if (t || At(e), e.querySelectorAll)for (var n = e.querySelectorAll("*"), r = 0, i = n.length; i > r; r++)At(n[r])
    }

    function xt(e, t, n, r) {
        if (v(r))throw Di("offargs", "jqLite#off() does not support the `selector` argument");
        var i = Mt(e), a = i && i.events, c = i && i.handle;
        if (c)if (t)o(t.split(" "), function (t) {
            if (v(n)) {
                var r = a[t];
                if (R(r || [], n), r && r.length > 0)return
            }
            Ti(e, t, c), delete a[t]
        }); else for (t in a)"$destroy" !== t && Ti(e, t, c), delete a[t]
    }

    function At(e, t) {
        var r = e.ng339, i = r && Mi[r];
        if (i) {
            if (t)return void delete i.data[t];
            i.handle && (i.events.$destroy && i.handle({}, "$destroy"), xt(e)), delete Mi[r], e.ng339 = n
        }
    }

    function Mt(e, t) {
        var r = e.ng339, i = r && Mi[r];
        return t && !i && (e.ng339 = r = pt(), i = Mi[r] = {events: {}, data: {}, handle: n}), i
    }

    function kt(e, t, n) {
        if ($t(e)) {
            var r = v(n), i = !r && t && !b(t), o = !t, a = Mt(e, !i), c = a && a.data;
            if (r)c[t] = n; else {
                if (o)return c;
                if (i)return c && c[t];
                d(c, t)
            }
        }
    }

    function Ct(e, t) {
        return e.getAttribute ? (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ") > -1 : !1
    }

    function Tt(e, t) {
        t && e.setAttribute && o(t.split(" "), function (t) {
            e.setAttribute("class", mi((" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + mi(t) + " ", " ")))
        })
    }

    function St(e, t) {
        if (t && e.setAttribute) {
            var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            o(t.split(" "), function (e) {
                e = mi(e), -1 === n.indexOf(" " + e + " ") && (n += e + " ")
            }), e.setAttribute("class", mi(n))
        }
    }

    function Nt(e, t) {
        if (t)if (t.nodeType)e[e.length++] = t; else {
            var n = t.length;
            if ("number" == typeof n && t.window !== t) {
                if (n)for (var r = 0; n > r; r++)e[e.length++] = t[r]
            } else e[e.length++] = t
        }
    }

    function _t(e, t) {
        return Dt(e, "$" + (t || "ngController") + "Controller")
    }

    function Dt(e, t, r) {
        e.nodeType == wi && (e = e.documentElement);
        for (var i = fi(t) ? t : [t]; e;) {
            for (var o = 0, a = i.length; a > o; o++)if ((r = ti.data(e, i[o])) !== n)return r;
            e = e.parentNode || e.nodeType === xi && e.host
        }
    }

    function Ot(e) {
        for (wt(e, !0); e.firstChild;)e.removeChild(e.firstChild)
    }

    function Ht(e, t) {
        t || wt(e);
        var n = e.parentNode;
        n && n.removeChild(e)
    }

    function Rt(t, n) {
        n = n || e, "complete" === n.document.readyState ? n.setTimeout(t) : ti(n).on("load", t)
    }

    function It(e, t) {
        var n = Vi[t.toLowerCase()];
        return n && Fi[H(e)] && n
    }

    function Pt(e, t) {
        var n = e.nodeName;
        return ("INPUT" === n || "TEXTAREA" === n) && qi[t]
    }

    function jt(e, t) {
        var n = function (n, r) {
            n.isDefaultPrevented = function () {
                return n.defaultPrevented
            };
            var i = t[r || n.type], o = i ? i.length : 0;
            if (o) {
                if ($(n.immediatePropagationStopped)) {
                    var a = n.stopImmediatePropagation;
                    n.stopImmediatePropagation = function () {
                        n.immediatePropagationStopped = !0, n.stopPropagation && n.stopPropagation(), a && a.call(n)
                    }
                }
                n.isImmediatePropagationStopped = function () {
                    return n.immediatePropagationStopped === !0
                }, o > 1 && (i = P(i));
                for (var c = 0; o > c; c++)n.isImmediatePropagationStopped() || i[c].call(e, n)
            }
        };
        return n.elem = e, n
    }

    function Vt() {
        this.$get = function () {
            return d(Et, {
                hasClass: function (e, t) {
                    return e.attr && (e = e[0]), Ct(e, t)
                }, addClass: function (e, t) {
                    return e.attr && (e = e[0]), St(e, t)
                }, removeClass: function (e, t) {
                    return e.attr && (e = e[0]), Tt(e, t)
                }
            })
        }
    }

    function Ft(e, t) {
        var n = e && e.$$hashKey;
        if (n)return "function" == typeof n && (n = e.$$hashKey()), n;
        var r = typeof e;
        return n = "function" == r || "object" == r && null !== e ? e.$$hashKey = r + ":" + (t || l)() : r + ":" + e
    }

    function qt(e, t) {
        if (t) {
            var n = 0;
            this.nextUid = function () {
                return ++n
            }
        }
        o(e, this.put, this)
    }

    function Lt(e) {
        var t = e.toString().replace(zi, ""), n = t.match(Li);
        return n ? "function(" + (n[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function Ut(e, t, n) {
        var r, i, a, c;
        if ("function" == typeof e) {
            if (!(r = e.$inject)) {
                if (r = [], e.length) {
                    if (t)throw E(n) && n || (n = e.name || Lt(e)), Gi("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", n);
                    i = e.toString().replace(zi, ""), a = i.match(Li), o(a[1].split(Ui), function (e) {
                        e.replace(Bi, function (e, t, n) {
                            r.push(n)
                        })
                    })
                }
                e.$inject = r
            }
        } else fi(e) ? (c = e.length - 1, ot(e[c], "fn"), r = e.slice(0, c)) : ot(e, "fn", !0);
        return r
    }

    function Bt(e, t) {
        function r(e) {
            return function (t, n) {
                return b(t) ? void o(t, s(e)) : e(t, n)
            }
        }

        function i(e, t) {
            if (at(e, "service"), (x(t) || fi(t)) && (t = k.instantiate(t)), !t.$get)throw Gi("pget", "Provider '{0}' must define $get factory method.", e);
            return M[e + y] = t
        }

        function a(e, t) {
            return function () {
                var n = T.invoke(t, this);
                if ($(n))throw Gi("undef", "Provider '{0}' must return a value from $get factory method.", e);
                return n
            }
        }

        function c(e, t, n) {
            return i(e, {$get: n !== !1 ? a(e, t) : t})
        }

        function l(e, t) {
            return c(e, ["$injector", function (e) {
                return e.instantiate(t)
            }])
        }

        function u(e, t) {
            return c(e, g(t), !1)
        }

        function d(e, t) {
            at(e, "constant"), M[e] = t, C[e] = t
        }

        function f(e, t) {
            var n = k.get(e + y), r = n.$get;
            n.$get = function () {
                var e = T.invoke(r, n);
                return T.invoke(t, null, {$delegate: e})
            }
        }

        function m(e) {
            var t, n = [];
            return o(e, function (e) {
                function r(e) {
                    var t, n;
                    for (t = 0, n = e.length; n > t; t++) {
                        var r = e[t], i = k.get(r[0]);
                        i[r[1]].apply(i, r[2])
                    }
                }

                if (!A.get(e)) {
                    A.put(e, !0);
                    try {
                        E(e) ? (t = ri(e), n = n.concat(m(t.requires)).concat(t._runBlocks), r(t._invokeQueue), r(t._configBlocks)) : x(e) ? n.push(k.invoke(e)) : fi(e) ? n.push(k.invoke(e)) : ot(e, "module")
                    } catch (i) {
                        throw fi(e) && (e = e[e.length - 1]), i.message && i.stack && -1 == i.stack.indexOf(i.message) && (i = i.message + "\n" + i.stack), Gi("modulerr", "Failed to instantiate module {0} due to:\n{1}", e, i.stack || i.message || i)
                    }
                }
            }), n
        }

        function h(e, n) {
            function r(t, r) {
                if (e.hasOwnProperty(t)) {
                    if (e[t] === v)throw Gi("cdep", "Circular dependency found: {0}", t + " <- " + w.join(" <- "));
                    return e[t]
                }
                try {
                    return w.unshift(t), e[t] = v, e[t] = n(t, r)
                } catch (i) {
                    throw e[t] === v && delete e[t], i
                } finally {
                    w.shift()
                }
            }

            function i(e, n, i, o) {
                "string" == typeof i && (o = i, i = null);
                var a, c, s, l = [], u = Bt.$$annotate(e, t, o);
                for (c = 0, a = u.length; a > c; c++) {
                    if (s = u[c], "string" != typeof s)throw Gi("itkn", "Incorrect injection token! Expected service name as string, got {0}", s);
                    l.push(i && i.hasOwnProperty(s) ? i[s] : r(s, o))
                }
                return fi(e) && (e = e[a]), e.apply(n, l)
            }

            function o(e, t, n) {
                var r = Object.create((fi(e) ? e[e.length - 1] : e).prototype || null), o = i(e, r, t, n);
                return b(o) || x(o) ? o : r
            }

            return {
                invoke: i, instantiate: o, get: r, annotate: Bt.$$annotate, has: function (t) {
                    return M.hasOwnProperty(t + y) || e.hasOwnProperty(t)
                }
            }
        }

        t = t === !0;
        var v = {}, y = "Provider", w = [], A = new qt([], !0), M = {
            $provide: {
                provider: r(i),
                factory: r(c),
                service: r(l),
                value: r(u),
                constant: r(d),
                decorator: f
            }
        }, k = M.$injector = h(M, function (e, t) {
            throw li.isString(t) && w.push(t), Gi("unpr", "Unknown provider: {0}", w.join(" <- "))
        }), C = {}, T = C.$injector = h(C, function (e, t) {
            var r = k.get(e + y, t);
            return T.invoke(r.$get, r, n, e)
        });
        return o(m(e), function (e) {
            T.invoke(e || p)
        }), T
    }

    function zt() {
        var e = !0;
        this.disableAutoScrolling = function () {
            e = !1
        }, this.$get = ["$window", "$location", "$rootScope", function (t, n, r) {
            function i(e) {
                var t = null;
                return Array.prototype.some.call(e, function (e) {
                    return "a" === H(e) ? (t = e, !0) : void 0
                }), t
            }

            function o() {
                var e = c.yOffset;
                if (x(e))e = e(); else if (D(e)) {
                    var n = e[0], r = t.getComputedStyle(n);
                    e = "fixed" !== r.position ? 0 : n.getBoundingClientRect().bottom
                } else y(e) || (e = 0);
                return e
            }

            function a(e) {
                if (e) {
                    e.scrollIntoView();
                    var n = o();
                    if (n) {
                        var r = e.getBoundingClientRect().top;
                        t.scrollBy(0, r - n)
                    }
                } else t.scrollTo(0, 0)
            }

            function c() {
                var e, t = n.hash();
                t ? (e = s.getElementById(t)) ? a(e) : (e = i(s.getElementsByName(t))) ? a(e) : "top" === t && a(null) : a(null)
            }

            var s = t.document;
            return e && r.$watch(function () {
                return n.hash()
            }, function (e, t) {
                (e !== t || "" !== e) && Rt(function () {
                    r.$evalAsync(c)
                })
            }), c
        }]
    }

    function Gt() {
        this.$get = ["$$rAF", "$timeout", function (e, t) {
            return e.supported ? function (t) {
                return e(t)
            } : function (e) {
                return t(e, 0, !1)
            }
        }]
    }

    function Yt(e, t, r, i) {
        function a(e) {
            try {
                e.apply(null, F(arguments, 1))
            } finally {
                if (A--, 0 === A)for (; M.length;)try {
                    M.pop()()
                } catch (t) {
                    r.error(t)
                }
            }
        }

        function c(e) {
            var t = e.indexOf("#");
            return -1 === t ? "" : e.substr(t + 1)
        }

        function s(e, t) {
            !function n() {
                o(C, function (e) {
                    e()
                }), k = t(n, e)
            }()
        }

        function l() {
            d(), f()
        }

        function u() {
            try {
                return b.state
            } catch (e) {
            }
        }

        function d() {
            T = u(), T = $(T) ? null : T, j(T, R) && (T = R), R = T
        }

        function f() {
            (N !== h.url() || S !== T) && (N = h.url(), S = T, o(O, function (e) {
                e(h.url(), T)
            }))
        }

        function m(e) {
            try {
                return decodeURIComponent(e)
            } catch (t) {
                return e
            }
        }

        var h = this, g = t[0], v = e.location, b = e.history, y = e.setTimeout, w = e.clearTimeout, x = {};
        h.isMock = !1;
        var A = 0, M = [];
        h.$$completeOutstandingRequest = a, h.$$incOutstandingRequestCount = function () {
            A++
        }, h.notifyWhenNoOutstandingRequests = function (e) {
            o(C, function (e) {
                e()
            }), 0 === A ? e() : M.push(e)
        };
        var k, C = [];
        h.addPollFn = function (e) {
            return $(k) && s(100, y), C.push(e), e
        };
        var T, S, N = v.href, _ = t.find("base"), D = null;
        d(), S = T, h.url = function (t, n, r) {
            if ($(r) && (r = null), v !== e.location && (v = e.location), b !== e.history && (b = e.history), t) {
                var o = S === r;
                if (N === t && (!i.history || o))return h;
                var a = N && wn(N) === wn(t);
                return N = t, S = r, !i.history || a && o ? (a || (D = t), n ? v.replace(t) : a ? v.hash = c(t) : v.href = t) : (b[n ? "replaceState" : "pushState"](r, "", t), d(), S = T), h
            }
            return D || v.href.replace(/%27/g, "'")
        }, h.state = function () {
            return T
        };
        var O = [], H = !1, R = null;
        h.onUrlChange = function (t) {
            return H || (i.history && ti(e).on("popstate", l), ti(e).on("hashchange", l), H = !0), O.push(t), t
        }, h.$$checkUrlChange = f, h.baseHref = function () {
            var e = _.attr("href");
            return e ? e.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        };
        var I = {}, P = "", V = h.baseHref();
        h.cookies = function (e, t) {
            var i, o, a, c, s;
            if (!e) {
                if (g.cookie !== P)for (P = g.cookie, o = P.split("; "), I = {}, c = 0; c < o.length; c++)a = o[c], s = a.indexOf("="), s > 0 && (e = m(a.substring(0, s)), I[e] === n && (I[e] = m(a.substring(s + 1))));
                return I
            }
            t === n ? g.cookie = encodeURIComponent(e) + "=;path=" + V + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : E(t) && (i = (g.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + ";path=" + V).length + 1, i > 4096 && r.warn("Cookie '" + e + "' possibly not set or overflowed because it was too large (" + i + " > 4096 bytes)!"))
        }, h.defer = function (e, t) {
            var n;
            return A++, n = y(function () {
                delete x[n], a(e)
            }, t || 0), x[n] = !0, n
        }, h.defer.cancel = function (e) {
            return x[e] ? (delete x[e], w(e), a(p), !0) : !1
        }
    }

    function Wt() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function (e, t, n, r) {
            return new Yt(e, r, t, n)
        }]
    }

    function Kt() {
        this.$get = function () {
            function e(e, n) {
                function i(e) {
                    e != f && (m ? m == e && (m = e.n) : m = e, o(e.n, e.p), o(e, f), f = e, f.n = null)
                }

                function o(e, t) {
                    e != t && (e && (e.p = t), t && (t.n = e))
                }

                if (e in t)throw r("$cacheFactory")("iid", "CacheId '{0}' is already taken!", e);
                var a = 0, c = d({}, n, {id: e}), s = {}, l = n && n.capacity || Number.MAX_VALUE, u = {}, f = null, m = null;
                return t[e] = {
                    put: function (e, t) {
                        if (l < Number.MAX_VALUE) {
                            var n = u[e] || (u[e] = {key: e});
                            i(n)
                        }
                        if (!$(t))return e in s || a++, s[e] = t, a > l && this.remove(m.key), t
                    }, get: function (e) {
                        if (l < Number.MAX_VALUE) {
                            var t = u[e];
                            if (!t)return;
                            i(t)
                        }
                        return s[e]
                    }, remove: function (e) {
                        if (l < Number.MAX_VALUE) {
                            var t = u[e];
                            if (!t)return;
                            t == f && (f = t.p), t == m && (m = t.n), o(t.n, t.p), delete u[e]
                        }
                        delete s[e], a--
                    }, removeAll: function () {
                        s = {}, a = 0, u = {}, f = m = null
                    }, destroy: function () {
                        s = null, c = null, u = null, delete t[e]
                    }, info: function () {
                        return d({}, c, {size: a})
                    }
                }
            }

            var t = {};
            return e.info = function () {
                var e = {};
                return o(t, function (t, n) {
                    e[n] = t.info()
                }), e
            }, e.get = function (e) {
                return t[e]
            }, e
        }
    }

    function Xt() {
        this.$get = ["$cacheFactory", function (e) {
            return e("templates")
        }]
    }

    function Zt(e, r) {
        function i(e, t) {
            var n = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/, r = {};
            return o(e, function (e, i) {
                var o = e.match(n);
                if (!o)throw Ki("iscp", "Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}", t, i, e);
                r[i] = {mode: o[1][0], collection: "*" === o[2], optional: "?" === o[3], attrName: o[4] || i}
            }), r
        }

        var a = {}, c = "Directive", l = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, u = /(([\w\-]+)(?:\:([^;]+))?;?)/, f = O("ngSrc,ngSrcset,src,srcset"), $ = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, y = /^(on[a-z]+|formaction)$/;
        this.directive = function A(t, n) {
            return at(t, "directive"), E(t) ? (it(n, "directiveFactory"), a.hasOwnProperty(t) || (a[t] = [], e.factory(t + c, ["$injector", "$exceptionHandler", function (e, n) {
                var r = [];
                return o(a[t], function (o, a) {
                    try {
                        var c = e.invoke(o);
                        x(c) ? c = {compile: g(c)} : !c.compile && c.link && (c.compile = g(c.link)), c.priority = c.priority || 0, c.index = a, c.name = c.name || t, c.require = c.require || c.controller && c.name, c.restrict = c.restrict || "EA", b(c.scope) && (c.$$isolateBindings = i(c.scope, c.name)), r.push(c)
                    } catch (s) {
                        n(s)
                    }
                }), r
            }])), a[t].push(n)) : o(t, s(A)), this
        }, this.aHrefSanitizationWhitelist = function (e) {
            return v(e) ? (r.aHrefSanitizationWhitelist(e), this) : r.aHrefSanitizationWhitelist()
        }, this.imgSrcSanitizationWhitelist = function (e) {
            return v(e) ? (r.imgSrcSanitizationWhitelist(e), this) : r.imgSrcSanitizationWhitelist()
        };
        var w = !0;
        this.debugInfoEnabled = function (e) {
            return v(e) ? (w = e, this) : w
        }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function (e, r, i, s, g, v, A, M, C, T, S) {
            function N(e, t) {
                try {
                    e.addClass(t)
                } catch (n) {
                }
            }

            function _(e, t, n, r, i) {
                e instanceof ti || (e = ti(e)), o(e, function (t, n) {
                    t.nodeType == Ei && t.nodeValue.match(/\S+/) && (e[n] = ti(t).wrap("<span></span>").parent()[0])
                });
                var a = O(e, t, e, n, r, i);
                _.$$addScopeClass(e);
                var c = null;
                return function (t, n, r) {
                    it(t, "scope"), r = r || {};
                    var i = r.parentBoundTranscludeFn, o = r.transcludeControllers, s = r.futureParentElement;
                    i && i.$$boundTransclude && (i = i.$$boundTransclude), c || (c = D(s));
                    var l;
                    if (l = "html" !== c ? ti(J(c, ti("<div>").append(e).html())) : n ? ji.clone.call(e) : e, o)for (var u in o)l.data("$" + u + "Controller", o[u].instance);
                    return _.$$addScopeInfo(l, t), n && n(l, t), a && a(t, l, l, i), l
                }
            }

            function D(e) {
                var t = e && e[0];
                return t && "foreignobject" !== H(t) && t.toString().match(/SVG/) ? "svg" : "html"
            }

            function O(e, t, r, i, o, a) {
                function c(e, r, i, o) {
                    var a, c, s, l, u, d, f, m, g;
                    if (p) {
                        var $ = r.length;
                        for (g = new Array($), u = 0; u < h.length; u += 3)f = h[u], g[f] = r[f]
                    } else g = r;
                    for (u = 0, d = h.length; d > u;)s = g[h[u++]], a = h[u++], c = h[u++], a ? (a.scope ? (l = e.$new(), _.$$addScopeInfo(ti(s), l)) : l = e, m = a.transcludeOnThisElement ? I(e, a.transclude, o, a.elementTranscludeOnThisElement) : !a.templateOnThisElement && o ? o : !o && t ? I(e, t) : null, a(c, l, s, i, m)) : c && c(e, s.childNodes, n, o)
                }

                for (var s, l, u, d, f, m, p, h = [], g = 0; g < e.length; g++)s = new at, l = P(e[g], [], s, 0 === g ? i : n, o), u = l.length ? L(l, e[g], s, t, r, null, [], [], a) : null, u && u.scope && _.$$addScopeClass(s.$$element), f = u && u.terminal || !(d = e[g].childNodes) || !d.length ? null : O(d, u ? (u.transcludeOnThisElement || !u.templateOnThisElement) && u.transclude : t), (u || f) && (h.push(g, u, f), m = !0, p = p || u), a = null;
                return m ? c : null
            }

            function I(e, t, n) {
                var r = function (r, i, o, a, c) {
                    return r || (r = e.$new(!1, c), r.$$transcluded = !0), t(r, i, {
                        parentBoundTranscludeFn: n,
                        transcludeControllers: o,
                        futureParentElement: a
                    })
                };
                return r
            }

            function P(e, t, n, r, i) {
                var o, a, c = e.nodeType, s = n.$attr;
                switch (c) {
                    case bi:
                        B(t, Jt(H(e)), "E", r, i);
                        for (var d, f, m, p, h, g, $ = e.attributes, v = 0, y = $ && $.length; y > v; v++) {
                            var w = !1, x = !1;
                            d = $[v], f = d.name, h = mi(d.value), p = Jt(f), (g = dt.test(p)) && (f = f.replace(Xi, "").substr(8).replace(/_(.)/g, function (e, t) {
                                return t.toUpperCase()
                            }));
                            var A = p.replace(/(Start|End)$/, "");
                            G(A) && p === A + "Start" && (w = f, x = f.substr(0, f.length - 5) + "end", f = f.substr(0, f.length - 6)), m = Jt(f.toLowerCase()), s[m] = f, (g || !n.hasOwnProperty(m)) && (n[m] = h, It(e, m) && (n[m] = !0)), et(e, t, h, m, g), B(t, m, "A", r, i, w, x)
                        }
                        if (a = e.className, b(a) && (a = a.animVal), E(a) && "" !== a)for (; o = u.exec(a);)m = Jt(o[2]), B(t, m, "C", r, i) && (n[m] = mi(o[3])), a = a.substr(o.index + o[0].length);
                        break;
                    case Ei:
                        Z(t, e.nodeValue);
                        break;
                    case yi:
                        try {
                            o = l.exec(e.nodeValue), o && (m = Jt(o[1]), B(t, m, "M", r, i) && (n[m] = mi(o[2])))
                        } catch (M) {
                        }
                }
                return t.sort(K), t
            }

            function V(e, t, n) {
                var r = [], i = 0;
                if (t && e.hasAttribute && e.hasAttribute(t)) {
                    do {
                        if (!e)throw Ki("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", t, n);
                        e.nodeType == bi && (e.hasAttribute(t) && i++, e.hasAttribute(n) && i--), r.push(e), e = e.nextSibling
                    } while (i > 0)
                } else r.push(e);
                return ti(r)
            }

            function q(e, t, n) {
                return function (r, i, o, a, c) {
                    return i = V(i[0], t, n), e(r, i, o, a, c)
                }
            }

            function L(e, a, c, s, l, u, d, f, m) {
                function p(e, t, n, r) {
                    e && (n && (e = q(e, n, r)), e.require = M.require, e.directiveName = C, (H === M || M.$$isolateScope) && (e = rt(e, {isolateScope: !0})), d.push(e)), t && (n && (t = q(t, n, r)), t.require = M.require, t.directiveName = C, (H === M || M.$$isolateScope) && (t = rt(t, {isolateScope: !0})), f.push(t))
                }

                function h(e, t, n, r) {
                    var i, a, c = "data", s = !1, l = n;
                    if (E(t)) {
                        if (a = t.match($), t = t.substring(a[0].length), a[3] && (a[1] ? a[3] = null : a[1] = a[3]), "^" === a[1] ? c = "inheritedData" : "^^" === a[1] && (c = "inheritedData", l = n.parent()), "?" === a[2] && (s = !0), i = null, r && "data" === c && (i = r[t]) && (i = i.instance), i = i || l[c]("$" + t + "Controller"), !i && !s)throw Ki("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", t, e);
                        return i || null
                    }
                    return fi(t) && (i = [], o(t, function (t) {
                        i.push(h(e, t, n, r))
                    })), i
                }

                function y(e, t, i, s, l) {
                    function u(e, t, r) {
                        var i;
                        return k(e) || (r = t, t = e, e = n), G && (i = y), r || (r = G ? x.parent() : x), l(e, t, i, r, S)
                    }

                    var m, p, $, b, E, y, w, x, M;
                    if (a === i ? (M = c, x = c.$$element) : (x = ti(i), M = new at(x, c)), H && (E = t.$new(!0)), l && (w = u, w.$$boundTransclude = l), O && (A = {}, y = {}, o(O, function (e) {
                            var n, r = {
                                $scope: e === H || e.$$isolateScope ? E : t,
                                $element: x,
                                $attrs: M,
                                $transclude: w
                            };
                            b = e.controller, "@" == b && (b = M[e.name]), n = v(b, r, !0, e.controllerAs), y[e.name] = n, G || x.data("$" + e.name + "Controller", n.instance), A[e.name] = n
                        })), H) {
                        _.$$addScopeInfo(x, E, !0, !(R && (R === H || R === H.$$originalDirective))), _.$$addScopeClass(x, !0);
                        var C = A && A[H.name], T = E;
                        C && C.identifier && H.bindToController === !0 && (T = C.instance), o(E.$$isolateBindings = H.$$isolateBindings, function (e, n) {
                            var i, o, a, c, s = e.attrName, l = e.optional, u = e.mode;
                            switch (u) {
                                case"@":
                                    M.$observe(s, function (e) {
                                        T[n] = e
                                    }), M.$$observers[s].$$scope = t, M[s] && (T[n] = r(M[s])(t));
                                    break;
                                case"=":
                                    if (l && !M[s])return;
                                    o = g(M[s]), c = o.literal ? j : function (e, t) {
                                        return e === t || e !== e && t !== t
                                    }, a = o.assign || function () {
                                        throw i = T[n] = o(t), Ki("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", M[s], H.name)
                                    }, i = T[n] = o(t);
                                    var d = function (e) {
                                        return c(e, T[n]) || (c(e, i) ? a(t, e = T[n]) : T[n] = e), i = e
                                    };
                                    d.$stateful = !0;
                                    var f;
                                    f = e.collection ? t.$watchCollection(M[s], d) : t.$watch(g(M[s], d), null, o.literal), E.$on("$destroy", f);
                                    break;
                                case"&":
                                    o = g(M[s]), T[n] = function (e) {
                                        return o(t, e)
                                    }
                            }
                        })
                    }
                    for (A && (o(A, function (e) {
                        e()
                    }), A = null), m = 0, p = d.length; p > m; m++)$ = d[m], ot($, $.isolateScope ? E : t, x, M, $.require && h($.directiveName, $.require, x, y), w);
                    var S = t;
                    for (H && (H.template || null === H.templateUrl) && (S = E), e && e(S, i.childNodes, n, l), m = f.length - 1; m >= 0; m--)$ = f[m], ot($, $.isolateScope ? E : t, x, M, $.require && h($.directiveName, $.require, x, y), w)
                }

                m = m || {};
                for (var w, A, M, C, T, S, N, D = -Number.MAX_VALUE, O = m.controllerDirectives, H = m.newIsolateScopeDirective, R = m.templateDirective, I = m.nonTlbTranscludeDirective, L = !1, B = !1, G = m.hasElementTranscludeDirective, K = c.$$element = ti(a), Z = u, Q = s, et = 0, nt = e.length; nt > et; et++) {
                    M = e[et];
                    var it = M.$$start, ct = M.$$end;
                    if (it && (K = V(a, it, ct)), T = n, D > M.priority)break;
                    if ((N = M.scope) && (M.templateUrl || (b(N) ? (X("new/isolated scope", H || w, M, K), H = M) : X("new/isolated scope", H, M, K)), w = w || M), C = M.name, !M.templateUrl && M.controller && (N = M.controller, O = O || {}, X("'" + C + "' controller", O[C], M, K), O[C] = M), (N = M.transclude) && (L = !0, M.$$tlb || (X("transclusion", I, M, K), I = M), "element" == N ? (G = !0, D = M.priority, T = K, K = c.$$element = ti(t.createComment(" " + C + ": " + c[C] + " ")), a = K[0], tt(l, F(T), a), Q = _(T, s, D, Z && Z.name, {nonTlbTranscludeDirective: I})) : (T = ti(yt(a)).contents(), K.empty(), Q = _(T, s))), M.template)if (B = !0, X("template", R, M, K), R = M, N = x(M.template) ? M.template(K, c) : M.template, N = ut(N), M.replace) {
                        if (Z = M, T = gt(N) ? [] : en(J(M.templateNamespace, mi(N))), a = T[0], 1 != T.length || a.nodeType !== bi)throw Ki("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", C, "");
                        tt(l, K, a);
                        var st = {$attr: {}}, lt = P(a, [], st), dt = e.splice(et + 1, e.length - (et + 1));
                        H && U(lt), e = e.concat(lt).concat(dt), Y(c, st), nt = e.length
                    } else K.html(N);
                    if (M.templateUrl)B = !0, X("template", R, M, K), R = M, M.replace && (Z = M), y = W(e.splice(et, e.length - et), K, c, l, L && Q, d, f, {
                        controllerDirectives: O,
                        newIsolateScopeDirective: H,
                        templateDirective: R,
                        nonTlbTranscludeDirective: I
                    }), nt = e.length; else if (M.compile)try {
                        S = M.compile(K, c, Q), x(S) ? p(null, S, it, ct) : S && p(S.pre, S.post, it, ct)
                    } catch (ft) {
                        i(ft, z(K))
                    }
                    M.terminal && (y.terminal = !0, D = Math.max(D, M.priority))
                }
                return y.scope = w && w.scope === !0, y.transcludeOnThisElement = L, y.elementTranscludeOnThisElement = G, y.templateOnThisElement = B, y.transclude = Q, m.hasElementTranscludeDirective = G, y
            }

            function U(e) {
                for (var t = 0, n = e.length; n > t; t++)e[t] = m(e[t], {$$isolateScope: !0})
            }

            function B(t, r, o, s, l, u, d) {
                if (r === l)return null;
                var f = null;
                if (a.hasOwnProperty(r))for (var p, h = e.get(r + c), g = 0, $ = h.length; $ > g; g++)try {
                    p = h[g], (s === n || s > p.priority) && -1 != p.restrict.indexOf(o) && (u && (p = m(p, {
                        $$start: u,
                        $$end: d
                    })), t.push(p), f = p)
                } catch (v) {
                    i(v)
                }
                return f
            }

            function G(t) {
                if (a.hasOwnProperty(t))for (var n, r = e.get(t + c), i = 0, o = r.length; o > i; i++)if (n = r[i], n.multiElement)return !0;
                return !1
            }

            function Y(e, t) {
                var n = t.$attr, r = e.$attr, i = e.$$element;
                o(e, function (r, i) {
                    "$" != i.charAt(0) && (t[i] && t[i] !== r && (r += ("style" === i ? ";" : " ") + t[i]), e.$set(i, r, !0, n[i]))
                }), o(t, function (t, o) {
                    "class" == o ? (N(i, t), e["class"] = (e["class"] ? e["class"] + " " : "") + t) : "style" == o ? (i.attr("style", i.attr("style") + ";" + t), e.style = (e.style ? e.style + ";" : "") + t) : "$" == o.charAt(0) || e.hasOwnProperty(o) || (e[o] = t, r[o] = n[o])
                })
            }

            function W(e, t, n, r, i, a, c, l) {
                var u, d, f = [], p = t[0], h = e.shift(), g = m(h, {
                    templateUrl: null,
                    transclude: null,
                    replace: null,
                    $$originalDirective: h
                }), $ = x(h.templateUrl) ? h.templateUrl(t, n) : h.templateUrl, v = h.templateNamespace;
                return t.empty(), s(C.getTrustedResourceUrl($)).then(function (s) {
                    var m, E, y, w;
                    if (s = ut(s), h.replace) {
                        if (y = gt(s) ? [] : en(J(v, mi(s))), m = y[0], 1 != y.length || m.nodeType !== bi)throw Ki("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", h.name, $);
                        E = {$attr: {}}, tt(r, t, m);
                        var x = P(m, [], E);
                        b(h.scope) && U(x), e = x.concat(e), Y(n, E)
                    } else m = p, t.html(s);
                    for (e.unshift(g), u = L(e, m, n, i, t, h, a, c, l), o(r, function (e, n) {
                        e == m && (r[n] = t[0])
                    }), d = O(t[0].childNodes, i); f.length;) {
                        var A = f.shift(), M = f.shift(), k = f.shift(), C = f.shift(), T = t[0];
                        if (!A.$$destroyed) {
                            if (M !== p) {
                                var S = M.className;
                                l.hasElementTranscludeDirective && h.replace || (T = yt(m)), tt(k, ti(M), T), N(ti(T), S)
                            }
                            w = u.transcludeOnThisElement ? I(A, u.transclude, C) : C, u(d, A, T, r, w)
                        }
                    }
                    f = null
                }), function (e, t, n, r, i) {
                    var o = i;
                    t.$$destroyed || (f ? f.push(t, n, r, o) : (u.transcludeOnThisElement && (o = I(t, u.transclude, i)), u(d, t, n, r, o)))
                }
            }

            function K(e, t) {
                var n = t.priority - e.priority;
                return 0 !== n ? n : e.name !== t.name ? e.name < t.name ? -1 : 1 : e.index - t.index
            }

            function X(e, t, n, r) {
                if (t)throw Ki("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", t.name, n.name, e, z(r))
            }

            function Z(e, t) {
                var n = r(t, !0);
                n && e.push({
                    priority: 0, compile: function (e) {
                        var t = e.parent(), r = !!t.length;
                        return r && _.$$addBindingClass(t), function (e, t) {
                            var i = t.parent();
                            r || _.$$addBindingClass(i), _.$$addBindingInfo(i, n.expressions), e.$watch(n, function (e) {
                                t[0].nodeValue = e
                            })
                        }
                    }
                })
            }

            function J(e, n) {
                switch (e = Kr(e || "html")) {
                    case"svg":
                    case"math":
                        var r = t.createElement("div");
                        return r.innerHTML = "<" + e + ">" + n + "</" + e + ">", r.childNodes[0].childNodes;
                    default:
                        return n
                }
            }

            function Q(e, t) {
                if ("srcdoc" == t)return C.HTML;
                var n = H(e);
                return "xlinkHref" == t || "form" == n && "action" == t || "img" != n && ("src" == t || "ngSrc" == t) ? C.RESOURCE_URL : void 0
            }

            function et(e, t, n, i, o) {
                var a = Q(e, i);
                o = f[i] || o;
                var c = r(n, !0, a, o);
                if (c) {
                    if ("multiple" === i && "select" === H(e))throw Ki("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", z(e));
                    t.push({
                        priority: 100, compile: function () {
                            return {
                                pre: function (e, t, s) {
                                    var l = s.$$observers || (s.$$observers = {});
                                    if (y.test(i))throw Ki("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                    var u = s[i];
                                    u !== n && (c = u && r(u, !0, a, o), n = u), c && (s[i] = c(e), (l[i] || (l[i] = [])).$$inter = !0, (s.$$observers && s.$$observers[i].$$scope || e).$watch(c, function (e, t) {
                                        "class" === i && e != t ? s.$updateClass(e, t) : s.$set(i, e)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function tt(e, n, r) {
                var i, o, a = n[0], c = n.length, s = a.parentNode;
                if (e)for (i = 0, o = e.length; o > i; i++)if (e[i] == a) {
                    e[i++] = r;
                    for (var l = i, u = l + c - 1, d = e.length; d > l; l++, u++)d > u ? e[l] = e[u] : delete e[l];
                    e.length -= c - 1, e.context === a && (e.context = r);
                    break
                }
                s && s.replaceChild(r, a);
                var f = t.createDocumentFragment();
                f.appendChild(a), ti(r).data(ti(a).data()), ni ? (di = !0, ni.cleanData([a])) : delete ti.cache[a[ti.expando]];
                for (var m = 1, p = n.length; p > m; m++) {
                    var h = n[m];
                    ti(h).remove(), f.appendChild(h), delete n[m]
                }
                n[0] = r, n.length = 1
            }

            function rt(e, t) {
                return d(function () {
                    return e.apply(null, arguments)
                }, e, t)
            }

            function ot(e, t, n, r, o, a) {
                try {
                    e(t, n, r, o, a)
                } catch (c) {
                    i(c, z(n))
                }
            }

            var at = function (e, t) {
                if (t) {
                    var n, r, i, o = Object.keys(t);
                    for (n = 0, r = o.length; r > n; n++)i = o[n], this[i] = t[i]
                } else this.$attr = {};
                this.$$element = e
            };
            at.prototype = {
                $normalize: Jt, $addClass: function (e) {
                    e && e.length > 0 && T.addClass(this.$$element, e)
                }, $removeClass: function (e) {
                    e && e.length > 0 && T.removeClass(this.$$element, e)
                }, $updateClass: function (e, t) {
                    var n = Qt(e, t);
                    n && n.length && T.addClass(this.$$element, n);
                    var r = Qt(t, e);
                    r && r.length && T.removeClass(this.$$element, r)
                }, $set: function (e, t, r, a) {
                    var c, s = this.$$element[0], l = It(s, e), u = Pt(s, e), d = e;
                    if (l ? (this.$$element.prop(e, t), a = l) : u && (this[u] = t, d = u), this[e] = t, a ? this.$attr[e] = a : (a = this.$attr[e], a || (this.$attr[e] = a = nt(e, "-"))), c = H(this.$$element), "a" === c && "href" === e || "img" === c && "src" === e)this[e] = t = S(t, "src" === e); else if ("img" === c && "srcset" === e) {
                        for (var f = "", m = mi(t), p = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, h = /\s/.test(m) ? p : /(,)/, g = m.split(h), $ = Math.floor(g.length / 2), v = 0; $ > v; v++) {
                            var b = 2 * v;
                            f += S(mi(g[b]), !0), f += " " + mi(g[b + 1])
                        }
                        var E = mi(g[2 * v]).split(/\s/);
                        f += S(mi(E[0]), !0), 2 === E.length && (f += " " + mi(E[1])), this[e] = t = f
                    }
                    r !== !1 && (null === t || t === n ? this.$$element.removeAttr(a) : this.$$element.attr(a, t));
                    var y = this.$$observers;
                    y && o(y[d], function (e) {
                        try {
                            e(t)
                        } catch (n) {
                            i(n)
                        }
                    })
                }, $observe: function (e, t) {
                    var n = this, r = n.$$observers || (n.$$observers = lt()), i = r[e] || (r[e] = []);
                    return i.push(t), A.$evalAsync(function () {
                        !i.$$inter && n.hasOwnProperty(e) && t(n[e])
                    }), function () {
                        R(i, t)
                    }
                }
            };
            var ct = r.startSymbol(), st = r.endSymbol(), ut = "{{" == ct || "}}" == st ? h : function (e) {
                return e.replace(/\{\{/g, ct).replace(/}}/g, st)
            }, dt = /^ngAttr[A-Z]/;
            return _.$$addBindingInfo = w ? function (e, t) {
                var n = e.data("$binding") || [];
                fi(t) ? n = n.concat(t) : n.push(t), e.data("$binding", n)
            } : p, _.$$addBindingClass = w ? function (e) {
                N(e, "ng-binding")
            } : p, _.$$addScopeInfo = w ? function (e, t, n, r) {
                var i = n ? r ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                e.data(i, t)
            } : p, _.$$addScopeClass = w ? function (e, t) {
                N(e, t ? "ng-isolate-scope" : "ng-scope")
            } : p, _
        }]
    }

    function Jt(e) {
        return ht(e.replace(Xi, ""))
    }

    function Qt(e, t) {
        var n = "", r = e.split(/\s+/), i = t.split(/\s+/);
        e:for (var o = 0; o < r.length; o++) {
            for (var a = r[o], c = 0; c < i.length; c++)if (a == i[c])continue e;
            n += (n.length > 0 ? " " : "") + a
        }
        return n
    }

    function en(e) {
        e = ti(e);
        var t = e.length;
        if (1 >= t)return e;
        for (; t--;) {
            var n = e[t];
            n.nodeType === yi && oi.call(e, t, 1)
        }
        return e
    }

    function tn() {
        var e = {}, t = !1, i = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function (t, n) {
            at(t, "controller"), b(t) ? d(e, t) : e[t] = n
        }, this.allowGlobals = function () {
            t = !0
        }, this.$get = ["$injector", "$window", function (o, a) {
            function c(e, t, n, i) {
                if (!e || !b(e.$scope))throw r("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", i, t);
                e.$scope[t] = n
            }

            return function (r, s, l, u) {
                var f, m, p, h;
                if (l = l === !0, u && E(u) && (h = u), E(r)) {
                    if (m = r.match(i), !m)throw Zi("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", r);
                    p = m[1], h = h || m[3], r = e.hasOwnProperty(p) ? e[p] : ct(s.$scope, p, !0) || (t ? ct(a, p, !0) : n), ot(r, p, !0)
                }
                if (l) {
                    var g = (fi(r) ? r[r.length - 1] : r).prototype;
                    return f = Object.create(g || null), h && c(s, h, f, p || r.name), d(function () {
                        return o.invoke(r, f, s, p), f
                    }, {instance: f, identifier: h})
                }
                return f = o.instantiate(r, s, p), h && c(s, h, f, p || r.name), f
            }
        }]
    }

    function nn() {
        this.$get = ["$window", function (e) {
            return ti(e.document)
        }]
    }

    function rn() {
        this.$get = ["$log", function (e) {
            return function () {
                e.error.apply(e, arguments)
            }
        }]
    }

    function on(e, t) {
        if (E(e)) {
            var n = e.replace(no, "").trim();
            if (n) {
                var r = t("Content-Type");
                (r && 0 === r.indexOf(Ji) || an(n)) && (e = B(n))
            }
        }
        return e
    }

    function an(e) {
        var t = e.match(eo);
        return t && to[t[0]].test(e)
    }

    function cn(e) {
        var t, n, r, i = lt();
        return e ? (o(e.split("\n"), function (e) {
            r = e.indexOf(":"), t = Kr(mi(e.substr(0, r))), n = mi(e.substr(r + 1)), t && (i[t] = i[t] ? i[t] + ", " + n : n)
        }), i) : i
    }

    function sn(e) {
        var t = b(e) ? e : n;
        return function (n) {
            if (t || (t = cn(e)), n) {
                var r = t[Kr(n)];
                return void 0 === r && (r = null), r
            }
            return t
        }
    }

    function ln(e, t, n, r) {
        return x(r) ? r(e, t, n) : (o(r, function (r) {
            e = r(e, t, n)
        }), e)
    }

    function un(e) {
        return e >= 200 && 300 > e
    }

    function dn() {
        var e = this.defaults = {
            transformResponse: [on],
            transformRequest: [function (e) {
                return !b(e) || C(e) || S(e) || T(e) ? e : U(e)
            }],
            headers: {common: {Accept: "application/json, text/plain, */*"}, post: P(Qi), put: P(Qi), patch: P(Qi)},
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN"
        }, t = !1;
        this.useApplyAsync = function (e) {
            return v(e) ? (t = !!e, this) : t
        };
        var i = this.interceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function (a, s, l, u, f, m) {
            function p(t) {
                function i(e) {
                    var t = d({}, e);
                    return t.data = e.data ? ln(e.data, e.headers, e.status, s.transformResponse) : e.data, un(e.status) ? t : f.reject(t)
                }

                function a(e) {
                    var t, n = {};
                    return o(e, function (e, r) {
                        x(e) ? (t = e(), null != t && (n[r] = t)) : n[r] = e
                    }), n
                }

                function c(t) {
                    var n, r, i, o = e.headers, c = d({}, t.headers);
                    o = d({}, o.common, o[Kr(t.method)]);
                    e:for (n in o) {
                        r = Kr(n);
                        for (i in c)if (Kr(i) === r)continue e;
                        c[n] = o[n]
                    }
                    return a(c)
                }

                if (!li.isObject(t))throw r("$http")("badreq", "Http request configuration must be an object.  Received: {0}", t);
                var s = d({
                    method: "get",
                    transformRequest: e.transformRequest,
                    transformResponse: e.transformResponse
                }, t);
                s.headers = c(t), s.method = Zr(s.method);
                var l = function (t) {
                    var r = t.headers, a = ln(t.data, sn(r), n, t.transformRequest);
                    return $(a) && o(r, function (e, t) {
                        "content-type" === Kr(t) && delete r[t]
                    }), $(t.withCredentials) && !$(e.withCredentials) && (t.withCredentials = e.withCredentials), y(t, a).then(i, i)
                }, u = [l, n], m = f.when(s);
                for (o(k, function (e) {
                    (e.request || e.requestError) && u.unshift(e.request, e.requestError), (e.response || e.responseError) && u.push(e.response, e.responseError)
                }); u.length;) {
                    var p = u.shift(), h = u.shift();
                    m = m.then(p, h)
                }
                return m.success = function (e) {
                    return m.then(function (t) {
                        e(t.data, t.status, t.headers, s)
                    }), m
                }, m.error = function (e) {
                    return m.then(null, function (t) {
                        e(t.data, t.status, t.headers, s)
                    }), m
                }, m
            }

            function h() {
                o(arguments, function (e) {
                    p[e] = function (t, n) {
                        return p(d(n || {}, {method: e, url: t}))
                    }
                })
            }

            function g() {
                o(arguments, function (e) {
                    p[e] = function (t, n, r) {
                        return p(d(r || {}, {method: e, url: t, data: n}))
                    }
                })
            }

            function y(r, i) {
                function o(e, n, r, i) {
                    function o() {
                        c(n, e, r, i)
                    }

                    m && (un(e) ? m.put(w, [e, n, cn(r), i]) : m.remove(w)), t ? u.$applyAsync(o) : (o(), u.$$phase || u.$apply())
                }

                function c(e, t, n, i) {
                    t = Math.max(t, 0), (un(t) ? g.resolve : g.reject)({
                        data: e,
                        status: t,
                        headers: sn(n),
                        config: r,
                        statusText: i
                    })
                }

                function l(e) {
                    c(e.data, e.status, P(e.headers()), e.statusText)
                }

                function d() {
                    var e = p.pendingRequests.indexOf(r);
                    -1 !== e && p.pendingRequests.splice(e, 1)
                }

                var m, h, g = f.defer(), E = g.promise, y = r.headers, w = A(r.url, r.params);
                if (p.pendingRequests.push(r), E.then(d, d), !r.cache && !e.cache || r.cache === !1 || "GET" !== r.method && "JSONP" !== r.method || (m = b(r.cache) ? r.cache : b(e.cache) ? e.cache : M), m && (h = m.get(w), v(h) ? _(h) ? h.then(l, l) : fi(h) ? c(h[1], h[0], P(h[2]), h[3]) : c(h, 200, {}, "OK") : m.put(w, E)), $(h)) {
                    var x = or(r.url) ? s.cookies()[r.xsrfCookieName || e.xsrfCookieName] : n;
                    x && (y[r.xsrfHeaderName || e.xsrfHeaderName] = x), a(r.method, w, i, o, y, r.timeout, r.withCredentials, r.responseType)
                }
                return E
            }

            function A(e, t) {
                if (!t)return e;
                var n = [];
                return c(t, function (e, t) {
                    null === e || $(e) || (fi(e) || (e = [e]), o(e, function (e) {
                        b(e) && (e = w(e) ? e.toISOString() : U(e)), n.push(X(t) + "=" + X(e))
                    }))
                }), n.length > 0 && (e += (-1 == e.indexOf("?") ? "?" : "&") + n.join("&")), e
            }

            var M = l("$http"), k = [];
            return o(i, function (e) {
                k.unshift(E(e) ? m.get(e) : m.invoke(e))
            }), p.pendingRequests = [], h("get", "delete", "head", "jsonp"), g("post", "put", "patch"), p.defaults = e, p
        }]
    }

    function fn() {
        return new e.XMLHttpRequest
    }

    function mn() {
        this.$get = ["$browser", "$window", "$document", function (e, t, n) {
            return pn(e, fn, e.defer, t.angular.callbacks, n[0])
        }]
    }

    function pn(e, t, r, i, a) {
        function c(e, t, n) {
            var r = a.createElement("script"), o = null;
            return r.type = "text/javascript", r.src = e, r.async = !0, o = function (e) {
                Ti(r, "load", o), Ti(r, "error", o), a.body.removeChild(r), r = null;
                var c = -1, s = "unknown";
                e && ("load" !== e.type || i[t].called || (e = {type: "error"}), s = e.type, c = "error" === e.type ? 404 : 200), n && n(c, s)
            }, Ci(r, "load", o), Ci(r, "error", o), a.body.appendChild(r), o
        }

        return function (a, s, l, u, d, f, m, h) {
            function g() {
                E && E(), y && y.abort()
            }

            function $(t, i, o, a, c) {
                A !== n && r.cancel(A), E = y = null, t(i, o, a, c), e.$$completeOutstandingRequest(p)
            }

            if (e.$$incOutstandingRequestCount(), s = s || e.url(), "jsonp" == Kr(a)) {
                var b = "_" + (i.counter++).toString(36);
                i[b] = function (e) {
                    i[b].data = e, i[b].called = !0
                };
                var E = c(s.replace("JSON_CALLBACK", "angular.callbacks." + b), b, function (e, t) {
                    $(u, e, i[b].data, "", t), i[b] = p
                })
            } else {
                var y = t();
                y.open(a, s, !0), o(d, function (e, t) {
                    v(e) && y.setRequestHeader(t, e)
                }), y.onload = function () {
                    var e = y.statusText || "", t = "response"in y ? y.response : y.responseText, n = 1223 === y.status ? 204 : y.status;
                    0 === n && (n = t ? 200 : "file" == ir(s).protocol ? 404 : 0), $(u, n, t, y.getAllResponseHeaders(), e)
                };
                var w = function () {
                    $(u, -1, null, null, "")
                };
                if (y.onerror = w, y.onabort = w, m && (y.withCredentials = !0), h)try {
                    y.responseType = h
                } catch (x) {
                    if ("json" !== h)throw x
                }
                y.send(l || null)
            }
            if (f > 0)var A = r(g, f); else _(f) && f.then(g)
        }
    }

    function hn() {
        var e = "{{", t = "}}";
        this.startSymbol = function (t) {
            return t ? (e = t, this) : e
        }, this.endSymbol = function (e) {
            return e ? (t = e, this) : t
        }, this.$get = ["$parse", "$exceptionHandler", "$sce", function (n, r, i) {
            function o(e) {
                return "\\\\\\" + e
            }

            function a(o, a, f, m) {
                function p(n) {
                    return n.replace(l, e).replace(u, t)
                }

                function h(e) {
                    try {
                        return e = S(e), m && !v(e) ? e : N(e)
                    } catch (t) {
                        var n = ro("interr", "Can't interpolate: {0}\n{1}", o, t.toString());
                        r(n)
                    }
                }

                m = !!m;
                for (var g, b, E, y = 0, w = [], A = [], M = o.length, k = [], C = []; M > y;) {
                    if (-1 == (g = o.indexOf(e, y)) || -1 == (b = o.indexOf(t, g + c))) {
                        y !== M && k.push(p(o.substring(y)));
                        break
                    }
                    y !== g && k.push(p(o.substring(y, g))), E = o.substring(g + c, b), w.push(E), A.push(n(E, h)), y = b + s, C.push(k.length), k.push("")
                }
                if (f && k.length > 1)throw ro("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", o);
                if (!a || w.length) {
                    var T = function (e) {
                        for (var t = 0, n = w.length; n > t; t++) {
                            if (m && $(e[t]))return;
                            k[C[t]] = e[t]
                        }
                        return k.join("")
                    }, S = function (e) {
                        return f ? i.getTrusted(f, e) : i.valueOf(e)
                    }, N = function (e) {
                        if (null == e)return "";
                        switch (typeof e) {
                            case"string":
                                break;
                            case"number":
                                e = "" + e;
                                break;
                            default:
                                e = U(e)
                        }
                        return e
                    };
                    return d(function (e) {
                        var t = 0, n = w.length, i = new Array(n);
                        try {
                            for (; n > t; t++)i[t] = A[t](e);
                            return T(i)
                        } catch (a) {
                            var c = ro("interr", "Can't interpolate: {0}\n{1}", o, a.toString());
                            r(c)
                        }
                    }, {
                        exp: o, expressions: w, $$watchDelegate: function (e, t, n) {
                            var r;
                            return e.$watchGroup(A, function (n, i) {
                                var o = T(n);
                                x(t) && t.call(this, o, n !== i ? r : o, e), r = o
                            }, n)
                        }
                    })
                }
            }

            var c = e.length, s = t.length, l = new RegExp(e.replace(/./g, o), "g"), u = new RegExp(t.replace(/./g, o), "g");
            return a.startSymbol = function () {
                return e
            }, a.endSymbol = function () {
                return t
            }, a
        }]
    }

    function gn() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", function (e, t, n, r) {
            function i(i, a, c, s) {
                var l = t.setInterval, u = t.clearInterval, d = 0, f = v(s) && !s, m = (f ? r : n).defer(), p = m.promise;
                return c = v(c) ? c : 0, p.then(null, null, i), p.$$intervalId = l(function () {
                    m.notify(d++), c > 0 && d >= c && (m.resolve(d), u(p.$$intervalId), delete o[p.$$intervalId]), f || e.$apply()
                }, a), o[p.$$intervalId] = m, p
            }

            var o = {};
            return i.cancel = function (e) {
                return e && e.$$intervalId in o ? (o[e.$$intervalId].reject("canceled"), t.clearInterval(e.$$intervalId), delete o[e.$$intervalId], !0) : !1
            }, i
        }]
    }

    function $n() {
        this.$get = function () {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "¤",
                        posSuf: "",
                        negPre: "(¤",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    }],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                    SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                    DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                    SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                    AMPMS: ["AM", "PM"],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a",
                    ERANAMES: ["Before Christ", "Anno Domini"],
                    ERAS: ["BC", "AD"]
                },
                pluralCat: function (e) {
                    return 1 === e ? "one" : "other"
                }
            }
        }
    }

    function vn(e) {
        for (var t = e.split("/"), n = t.length; n--;)t[n] = K(t[n]);
        return t.join("/")
    }

    function bn(e, t) {
        var n = ir(e);
        t.$$protocol = n.protocol, t.$$host = n.hostname, t.$$port = f(n.port) || oo[n.protocol] || null
    }

    function En(e, t) {
        var n = "/" !== e.charAt(0);
        n && (e = "/" + e);
        var r = ir(e);
        t.$$path = decodeURIComponent(n && "/" === r.pathname.charAt(0) ? r.pathname.substring(1) : r.pathname), t.$$search = Y(r.search), t.$$hash = decodeURIComponent(r.hash), t.$$path && "/" != t.$$path.charAt(0) && (t.$$path = "/" + t.$$path)
    }

    function yn(e, t) {
        return 0 === t.indexOf(e) ? t.substr(e.length) : void 0
    }

    function wn(e) {
        var t = e.indexOf("#");
        return -1 == t ? e : e.substr(0, t)
    }

    function xn(e) {
        return e.replace(/(#.+)|#$/, "$1")
    }

    function An(e) {
        return e.substr(0, wn(e).lastIndexOf("/") + 1)
    }

    function Mn(e) {
        return e.substring(0, e.indexOf("/", e.indexOf("//") + 2))
    }

    function kn(e, t) {
        this.$$html5 = !0, t = t || "";
        var r = An(e);
        bn(e, this), this.$$parse = function (e) {
            var t = yn(r, e);
            if (!E(t))throw ao("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', e, r);
            En(t, this), this.$$path || (this.$$path = "/"), this.$$compose()
        }, this.$$compose = function () {
            var e = W(this.$$search), t = this.$$hash ? "#" + K(this.$$hash) : "";
            this.$$url = vn(this.$$path) + (e ? "?" + e : "") + t, this.$$absUrl = r + this.$$url.substr(1)
        }, this.$$parseLinkUrl = function (i, o) {
            if (o && "#" === o[0])return this.hash(o.slice(1)), !0;
            var a, c, s;
            return (a = yn(e, i)) !== n ? (c = a, s = (a = yn(t, a)) !== n ? r + (yn("/", a) || a) : e + c) : (a = yn(r, i)) !== n ? s = r + a : r == i + "/" && (s = r), s && this.$$parse(s), !!s
        }
    }

    function Cn(e, t) {
        var n = An(e);
        bn(e, this), this.$$parse = function (r) {
            function i(e, t, n) {
                var r, i = /^\/[A-Z]:(\/.*)/;
                return 0 === t.indexOf(n) && (t = t.replace(n, "")), i.exec(t) ? e : (r = i.exec(e), r ? r[1] : e)
            }

            var o, a = yn(e, r) || yn(n, r);
            "#" === a.charAt(0) ? (o = yn(t, a), $(o) && (o = a)) : o = this.$$html5 ? a : "", En(o, this), this.$$path = i(this.$$path, o, e), this.$$compose()
        }, this.$$compose = function () {
            var n = W(this.$$search), r = this.$$hash ? "#" + K(this.$$hash) : "";
            this.$$url = vn(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = e + (this.$$url ? t + this.$$url : "")
        }, this.$$parseLinkUrl = function (t) {
            return wn(e) == wn(t) ? (this.$$parse(t), !0) : !1
        }
    }

    function Tn(e, t) {
        this.$$html5 = !0, Cn.apply(this, arguments);
        var n = An(e);
        this.$$parseLinkUrl = function (r, i) {
            if (i && "#" === i[0])return this.hash(i.slice(1)), !0;
            var o, a;
            return e == wn(r) ? o = r : (a = yn(n, r)) ? o = e + t + a : n === r + "/" && (o = n), o && this.$$parse(o), !!o
        }, this.$$compose = function () {
            var n = W(this.$$search), r = this.$$hash ? "#" + K(this.$$hash) : "";
            this.$$url = vn(this.$$path) + (n ? "?" + n : "") + r, this.$$absUrl = e + t + this.$$url
        }
    }

    function Sn(e) {
        return function () {
            return this[e]
        }
    }

    function Nn(e, t) {
        return function (n) {
            return $(n) ? this[e] : (this[e] = t(n), this.$$compose(), this)
        }
    }

    function _n() {
        var e = "", t = {enabled: !1, requireBase: !0, rewriteLinks: !0};
        this.hashPrefix = function (t) {
            return v(t) ? (e = t, this) : e
        }, this.html5Mode = function (e) {
            return N(e) ? (t.enabled = e, this) : b(e) ? (N(e.enabled) && (t.enabled = e.enabled), N(e.requireBase) && (t.requireBase = e.requireBase), N(e.rewriteLinks) && (t.rewriteLinks = e.rewriteLinks), this) : t
        }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (n, r, i, o, a) {
            function c(e, t, n) {
                var i = l.url(), o = l.$$state;
                try {
                    r.url(e, t, n), l.$$state = r.state()
                } catch (a) {
                    throw l.url(i), l.$$state = o, a
                }
            }

            function s(e, t) {
                n.$broadcast("$locationChangeSuccess", l.absUrl(), e, l.$$state, t)
            }

            var l, u, d, f = r.baseHref(), m = r.url();
            if (t.enabled) {
                if (!f && t.requireBase)throw ao("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                d = Mn(m) + (f || "/"), u = i.history ? kn : Tn
            } else d = wn(m), u = Cn;
            l = new u(d, "#" + e), l.$$parseLinkUrl(m, m), l.$$state = r.state();
            var p = /^\s*(javascript|mailto):/i;
            o.on("click", function (e) {
                if (t.rewriteLinks && !e.ctrlKey && !e.metaKey && !e.shiftKey && 2 != e.which && 2 != e.button) {
                    for (var i = ti(e.target); "a" !== H(i[0]);)if (i[0] === o[0] || !(i = i.parent())[0])return;
                    var c = i.prop("href"), s = i.attr("href") || i.attr("xlink:href");
                    b(c) && "[object SVGAnimatedString]" === c.toString() && (c = ir(c.animVal).href), p.test(c) || !c || i.attr("target") || e.isDefaultPrevented() || l.$$parseLinkUrl(c, s) && (e.preventDefault(), l.absUrl() != r.url() && (n.$apply(), a.angular["ff-684208-preventDefault"] = !0))
                }
            }), xn(l.absUrl()) != xn(m) && r.url(l.absUrl(), !0);
            var h = !0;
            return r.onUrlChange(function (e, t) {
                n.$evalAsync(function () {
                    var r, i = l.absUrl(), o = l.$$state;
                    l.$$parse(e), l.$$state = t, r = n.$broadcast("$locationChangeStart", e, i, t, o).defaultPrevented, l.absUrl() === e && (r ? (l.$$parse(i), l.$$state = o, c(i, !1, o)) : (h = !1, s(i, o)))
                }), n.$$phase || n.$digest()
            }), n.$watch(function () {
                var e = xn(r.url()), t = xn(l.absUrl()), o = r.state(), a = l.$$replace, u = e !== t || l.$$html5 && i.history && o !== l.$$state;
                (h || u) && (h = !1, n.$evalAsync(function () {
                    var t = l.absUrl(), r = n.$broadcast("$locationChangeStart", t, e, l.$$state, o).defaultPrevented;
                    l.absUrl() === t && (r ? (l.$$parse(e), l.$$state = o) : (u && c(t, a, o === l.$$state ? null : l.$$state), s(e, o)))
                })), l.$$replace = !1
            }), l
        }]
    }

    function Dn() {
        var e = !0, t = this;
        this.debugEnabled = function (t) {
            return v(t) ? (e = t, this) : e
        }, this.$get = ["$window", function (n) {
            function r(e) {
                return e instanceof Error && (e.stack ? e = e.message && -1 === e.stack.indexOf(e.message) ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL && (e = e.message + "\n" + e.sourceURL + ":" + e.line)), e
            }

            function i(e) {
                var t = n.console || {}, i = t[e] || t.log || p, a = !1;
                try {
                    a = !!i.apply
                } catch (c) {
                }
                return a ? function () {
                    var e = [];
                    return o(arguments, function (t) {
                        e.push(r(t))
                    }), i.apply(t, e)
                } : function (e, t) {
                    i(e, null == t ? "" : t)
                }
            }

            return {
                log: i("log"), info: i("info"), warn: i("warn"), error: i("error"), debug: function () {
                    var n = i("debug");
                    return function () {
                        e && n.apply(t, arguments)
                    }
                }()
            }
        }]
    }

    function On(e, t) {
        if ("__defineGetter__" === e || "__defineSetter__" === e || "__lookupGetter__" === e || "__lookupSetter__" === e || "__proto__" === e)throw so("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", t);
        return e
    }

    function Hn(e, t) {
        if (e) {
            if (e.constructor === e)throw so("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", t);
            if (e.window === e)throw so("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", t);
            if (e.children && (e.nodeName || e.prop && e.attr && e.find))throw so("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", t);
            if (e === Object)throw so("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", t)
        }
        return e
    }

    function Rn(e, t) {
        if (e) {
            if (e.constructor === e)throw so("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", t);
            if (e === lo || e === uo || e === fo)throw so("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", t)
        }
    }

    function In(e) {
        return e.constant
    }

    function Pn(e, t, n, r, i) {
        Hn(e, i), Hn(t, i);
        for (var o, a = n.split("."), c = 0; a.length > 1; c++) {
            o = On(a.shift(), i);
            var s = 0 === c && t && t[o] || e[o];
            s || (s = {}, e[o] = s), e = Hn(s, i)
        }
        return o = On(a.shift(), i), Hn(e[o], i), e[o] = r, r
    }

    function jn(e) {
        return "constructor" == e
    }

    function Vn(e, t, r, i, o, a, c) {
        On(e, a), On(t, a), On(r, a), On(i, a), On(o, a);
        var s = function (e) {
            return Hn(e, a)
        }, l = c || jn(e) ? s : h, u = c || jn(t) ? s : h, d = c || jn(r) ? s : h, f = c || jn(i) ? s : h, m = c || jn(o) ? s : h;
        return function (a, c) {
            var s = c && c.hasOwnProperty(e) ? c : a;
            return null == s ? s : (s = l(s[e]), t ? null == s ? n : (s = u(s[t]), r ? null == s ? n : (s = d(s[r]), i ? null == s ? n : (s = f(s[i]), o ? null == s ? n : s = m(s[o]) : s) : s) : s) : s)
        }
    }

    function Fn(e, t) {
        return function (n, r) {
            return e(n, r, Hn, t)
        }
    }

    function qn(e, t, r) {
        var i = t.expensiveChecks, a = i ? bo : vo, c = a[e];
        if (c)return c;
        var s = e.split("."), l = s.length;
        if (t.csp)c = 6 > l ? Vn(s[0], s[1], s[2], s[3], s[4], r, i) : function (e, t) {
            var o, a = 0;
            do o = Vn(s[a++], s[a++], s[a++], s[a++], s[a++], r, i)(e, t), t = n, e = o; while (l > a);
            return o
        }; else {
            var u = "";
            i && (u += "s = eso(s, fe);\nl = eso(l, fe);\n");
            var d = i;
            o(s, function (e, t) {
                On(e, r);
                var n = (t ? "s" : '((l&&l.hasOwnProperty("' + e + '"))?l:s)') + "." + e;
                (i || jn(e)) && (n = "eso(" + n + ", fe)", d = !0), u += "if(s == null) return undefined;\ns=" + n + ";\n"
            }), u += "return s;";
            var f = new Function("s", "l", "eso", "fe", u);
            f.toString = g(u), d && (f = Fn(f, r)), c = f
        }
        return c.sharedGetter = !0, c.assign = function (t, n, r) {
            return Pn(t, r, e, n, e)
        }, a[e] = c, c
    }

    function Ln(e) {
        return x(e.valueOf) ? e.valueOf() : Eo.call(e)
    }

    function Un() {
        var e = lt(), t = lt();
        this.$get = ["$filter", "$sniffer", function (n, r) {
            function i(e) {
                var t = e;
                return e.sharedGetter && (t = function (t, n) {
                    return e(t, n)
                }, t.literal = e.literal, t.constant = e.constant, t.assign = e.assign), t
            }

            function a(e, t) {
                for (var n = 0, r = e.length; r > n; n++) {
                    var i = e[n];
                    i.constant || (i.inputs ? a(i.inputs, t) : -1 === t.indexOf(i) && t.push(i))
                }
                return t
            }

            function c(e, t) {
                return null == e || null == t ? e === t : "object" == typeof e && (e = Ln(e), "object" == typeof e) ? !1 : e === t || e !== e && t !== t
            }

            function s(e, t, n, r) {
                var i, o = r.$$inputs || (r.$$inputs = a(r.inputs, []));
                if (1 === o.length) {
                    var s = c;
                    return o = o[0], e.$watch(function (e) {
                        var t = o(e);
                        return c(t, s) || (i = r(e), s = t && Ln(t)), i
                    }, t, n)
                }
                for (var l = [], u = 0, d = o.length; d > u; u++)l[u] = c;
                return e.$watch(function (e) {
                    for (var t = !1, n = 0, a = o.length; a > n; n++) {
                        var s = o[n](e);
                        (t || (t = !c(s, l[n]))) && (l[n] = s && Ln(s))
                    }
                    return t && (i = r(e)), i
                }, t, n)
            }

            function l(e, t, n, r) {
                var i, o;
                return i = e.$watch(function (e) {
                    return r(e)
                }, function (e, n, r) {
                    o = e, x(t) && t.apply(this, arguments), v(e) && r.$$postDigest(function () {
                        v(o) && i()
                    })
                }, n)
            }

            function u(e, t, n, r) {
                function i(e) {
                    var t = !0;
                    return o(e, function (e) {
                        v(e) || (t = !1)
                    }), t
                }

                var a, c;
                return a = e.$watch(function (e) {
                    return r(e)
                }, function (e, n, r) {
                    c = e, x(t) && t.call(this, e, n, r), i(e) && r.$$postDigest(function () {
                        i(c) && a()
                    })
                }, n)
            }

            function d(e, t, n, r) {
                var i;
                return i = e.$watch(function (e) {
                    return r(e)
                }, function () {
                    x(t) && t.apply(this, arguments), i()
                }, n)
            }

            function f(e, t) {
                if (!t)return e;
                var n = e.$$watchDelegate, r = n !== u && n !== l, i = r ? function (n, r) {
                    var i = e(n, r);
                    return t(i, n, r)
                } : function (n, r) {
                    var i = e(n, r), o = t(i, n, r);
                    return v(i) ? o : i
                };
                return e.$$watchDelegate && e.$$watchDelegate !== s ? i.$$watchDelegate = e.$$watchDelegate : t.$stateful || (i.$$watchDelegate = s, i.inputs = [e]), i
            }

            var m = {csp: r.csp, expensiveChecks: !1}, h = {csp: r.csp, expensiveChecks: !0};
            return function (r, o, a) {
                var c, g, $;
                switch (typeof r) {
                    case"string":
                        $ = r = r.trim();
                        var v = a ? t : e;
                        if (c = v[$], !c) {
                            ":" === r.charAt(0) && ":" === r.charAt(1) && (g = !0, r = r.substring(2));
                            var b = a ? h : m, E = new go(b), y = new $o(E, n, b);
                            c = y.parse(r), c.constant ? c.$$watchDelegate = d : g ? (c = i(c), c.$$watchDelegate = c.literal ? u : l) : c.inputs && (c.$$watchDelegate = s), v[$] = c
                        }
                        return f(c, o);
                    case"function":
                        return f(r, o);
                    default:
                        return f(p, o)
                }
            }
        }]
    }

    function Bn() {
        this.$get = ["$rootScope", "$exceptionHandler", function (e, t) {
            return Gn(function (t) {
                e.$evalAsync(t)
            }, t)
        }]
    }

    function zn() {
        this.$get = ["$browser", "$exceptionHandler", function (e, t) {
            return Gn(function (t) {
                e.defer(t)
            }, t)
        }]
    }

    function Gn(e, t) {
        function i(e, t, n) {
            function r(t) {
                return function (n) {
                    i || (i = !0, t.call(e, n))
                }
            }

            var i = !1;
            return [r(t), r(n)]
        }

        function a() {
            this.$$state = {status: 0}
        }

        function c(e, t) {
            return function (n) {
                t.call(e, n)
            }
        }

        function s(e) {
            var r, i, o;
            o = e.pending, e.processScheduled = !1, e.pending = n;
            for (var a = 0, c = o.length; c > a; ++a) {
                i = o[a][0], r = o[a][e.status];
                try {
                    x(r) ? i.resolve(r(e.value)) : 1 === e.status ? i.resolve(e.value) : i.reject(e.value)
                } catch (s) {
                    i.reject(s), t(s)
                }
            }
        }

        function l(t) {
            !t.processScheduled && t.pending && (t.processScheduled = !0, e(function () {
                s(t)
            }))
        }

        function u() {
            this.promise = new a, this.resolve = c(this, this.resolve), this.reject = c(this, this.reject), this.notify = c(this, this.notify)
        }

        function d(e) {
            var t = new u, n = 0, r = fi(e) ? [] : {};
            return o(e, function (e, i) {
                n++, $(e).then(function (e) {
                    r.hasOwnProperty(i) || (r[i] = e, --n || t.resolve(r))
                }, function (e) {
                    r.hasOwnProperty(i) || t.reject(e)
                })
            }), 0 === n && t.resolve(r), t.promise
        }

        var f = r("$q", TypeError), m = function () {
            return new u
        };
        a.prototype = {
            then: function (e, t, n) {
                var r = new u;
                return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([r, e, t, n]), this.$$state.status > 0 && l(this.$$state), r.promise
            }, "catch": function (e) {
                return this.then(null, e)
            }, "finally": function (e, t) {
                return this.then(function (t) {
                    return g(t, !0, e)
                }, function (t) {
                    return g(t, !1, e)
                }, t)
            }
        }, u.prototype = {
            resolve: function (e) {
                this.promise.$$state.status || (e === this.promise ? this.$$reject(f("qcycle", "Expected promise to be resolved with value other than itself '{0}'", e)) : this.$$resolve(e))
            }, $$resolve: function (e) {
                var n, r;
                r = i(this, this.$$resolve, this.$$reject);
                try {
                    (b(e) || x(e)) && (n = e && e.then), x(n) ? (this.promise.$$state.status = -1, n.call(e, r[0], r[1], this.notify)) : (this.promise.$$state.value = e, this.promise.$$state.status = 1, l(this.promise.$$state))
                } catch (o) {
                    r[1](o), t(o)
                }
            }, reject: function (e) {
                this.promise.$$state.status || this.$$reject(e)
            }, $$reject: function (e) {
                this.promise.$$state.value = e, this.promise.$$state.status = 2, l(this.promise.$$state)
            }, notify: function (n) {
                var r = this.promise.$$state.pending;
                this.promise.$$state.status <= 0 && r && r.length && e(function () {
                    for (var e, i, o = 0, a = r.length; a > o; o++) {
                        i = r[o][0], e = r[o][3];
                        try {
                            i.notify(x(e) ? e(n) : n)
                        } catch (c) {
                            t(c)
                        }
                    }
                })
            }
        };
        var p = function (e) {
            var t = new u;
            return t.reject(e), t.promise
        }, h = function (e, t) {
            var n = new u;
            return t ? n.resolve(e) : n.reject(e), n.promise
        }, g = function (e, t, n) {
            var r = null;
            try {
                x(n) && (r = n())
            } catch (i) {
                return h(i, !1)
            }
            return _(r) ? r.then(function () {
                return h(e, t)
            }, function (e) {
                return h(e, !1)
            }) : h(e, t)
        }, $ = function (e, t, n, r) {
            var i = new u;
            return i.resolve(e), i.promise.then(t, n, r)
        }, v = function E(e) {
            function t(e) {
                r.resolve(e)
            }

            function n(e) {
                r.reject(e)
            }

            if (!x(e))throw f("norslvr", "Expected resolverFn, got '{0}'", e);
            if (!(this instanceof E))return new E(e);
            var r = new u;
            return e(t, n), r.promise
        };
        return v.defer = m, v.reject = p, v.when = $, v.all = d, v
    }

    function Yn() {
        this.$get = ["$window", "$timeout", function (e, t) {
            var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame, r = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.webkitCancelRequestAnimationFrame, i = !!n, o = i ? function (e) {
                var t = n(e);
                return function () {
                    r(t)
                }
            } : function (e) {
                var n = t(e, 16.66, !1);
                return function () {
                    t.cancel(n)
                }
            };
            return o.supported = i, o
        }]
    }

    function Wn() {
        function e(e) {
            function t() {
                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = l(), this.$$ChildScope = null
            }

            return t.prototype = e, t
        }

        var t = 10, n = r("$rootScope"), a = null, c = null;
        this.digestTtl = function (e) {
            return arguments.length && (t = e), t
        }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function (r, s, u, d) {
            function f(e) {
                e.currentScope.$$destroyed = !0
            }

            function m() {
                this.$id = l(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = null
            }

            function h(e) {
                if (A.$$phase)throw n("inprog", "{0} already in progress", A.$$phase);
                A.$$phase = e
            }

            function g() {
                A.$$phase = null
            }

            function v(e, t, n) {
                do e.$$listenerCount[n] -= t, 0 === e.$$listenerCount[n] && delete e.$$listenerCount[n]; while (e = e.$parent)
            }

            function E() {
            }

            function y() {
                for (; C.length;)try {
                    C.shift()()
                } catch (e) {
                    s(e)
                }
                c = null
            }

            function w() {
                null === c && (c = d.defer(function () {
                    A.$apply(y)
                }))
            }

            m.prototype = {
                constructor: m, $new: function (t, n) {
                    var r;
                    return n = n || this, t ? (r = new m, r.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = e(this)), r = new this.$$ChildScope), r.$parent = n, r.$$prevSibling = n.$$childTail, n.$$childHead ? (n.$$childTail.$$nextSibling = r, n.$$childTail = r) : n.$$childHead = n.$$childTail = r, (t || n != this) && r.$on("$destroy", f), r
                }, $watch: function (e, t, n) {
                    var r = u(e);
                    if (r.$$watchDelegate)return r.$$watchDelegate(this, t, n, r);
                    var i = this, o = i.$$watchers, c = {fn: t, last: E, get: r, exp: e, eq: !!n};
                    return a = null, x(t) || (c.fn = p), o || (o = i.$$watchers = []), o.unshift(c), function () {
                        R(o, c), a = null
                    }
                }, $watchGroup: function (e, t) {
                    function n() {
                        s = !1, l ? (l = !1, t(i, i, c)) : t(i, r, c)
                    }

                    var r = new Array(e.length), i = new Array(e.length), a = [], c = this, s = !1, l = !0;
                    if (!e.length) {
                        var u = !0;
                        return c.$evalAsync(function () {
                            u && t(i, i, c)
                        }), function () {
                            u = !1
                        }
                    }
                    return 1 === e.length ? this.$watch(e[0], function (e, n, o) {
                        i[0] = e, r[0] = n, t(i, e === n ? i : r, o)
                    }) : (o(e, function (e, t) {
                        var o = c.$watch(e, function (e, o) {
                            i[t] = e, r[t] = o, s || (s = !0, c.$evalAsync(n))
                        });
                        a.push(o)
                    }), function () {
                        for (; a.length;)a.shift()()
                    })
                }, $watchCollection: function (e, t) {
                    function n(e) {
                        o = e;
                        var t, n, r, c, s;
                        if (!$(o)) {
                            if (b(o))if (i(o)) {
                                a !== m && (a = m, g = a.length = 0, d++), t = o.length, g !== t && (d++, a.length = g = t);
                                for (var l = 0; t > l; l++)s = a[l], c = o[l], r = s !== s && c !== c, r || s === c || (d++, a[l] = c)
                            } else {
                                a !== p && (a = p = {}, g = 0, d++), t = 0;
                                for (n in o)o.hasOwnProperty(n) && (t++, c = o[n], s = a[n], n in a ? (r = s !== s && c !== c, r || s === c || (d++, a[n] = c)) : (g++, a[n] = c, d++));
                                if (g > t) {
                                    d++;
                                    for (n in a)o.hasOwnProperty(n) || (g--, delete a[n])
                                }
                            } else a !== o && (a = o, d++);
                            return d
                        }
                    }

                    function r() {
                        if (h ? (h = !1, t(o, o, s)) : t(o, c, s), l)if (b(o))if (i(o)) {
                            c = new Array(o.length);
                            for (var e = 0; e < o.length; e++)c[e] = o[e]
                        } else {
                            c = {};
                            for (var n in o)Xr.call(o, n) && (c[n] = o[n])
                        } else c = o
                    }

                    n.$stateful = !0;
                    var o, a, c, s = this, l = t.length > 1, d = 0, f = u(e, n), m = [], p = {}, h = !0, g = 0;
                    return this.$watch(f, r)
                }, $digest: function () {
                    var e, r, i, o, l, u, f, m, p, $, v = t, b = this, w = [];
                    h("$digest"), d.$$checkUrlChange(), this === A && null !== c && (d.defer.cancel(c), y()), a = null;
                    do {
                        for (u = !1, m = b; M.length;) {
                            try {
                                $ = M.shift(), $.scope.$eval($.expression, $.locals)
                            } catch (C) {
                                s(C)
                            }
                            a = null
                        }
                        e:do {
                            if (o = m.$$watchers)for (l = o.length; l--;)try {
                                if (e = o[l])if ((r = e.get(m)) === (i = e.last) || (e.eq ? j(r, i) : "number" == typeof r && "number" == typeof i && isNaN(r) && isNaN(i))) {
                                    if (e === a) {
                                        u = !1;
                                        break e
                                    }
                                } else u = !0, a = e, e.last = e.eq ? I(r, null) : r, e.fn(r, i === E ? r : i, m), 5 > v && (p = 4 - v, w[p] || (w[p] = []), w[p].push({
                                    msg: x(e.exp) ? "fn: " + (e.exp.name || e.exp.toString()) : e.exp,
                                    newVal: r,
                                    oldVal: i
                                }))
                            } catch (C) {
                                s(C)
                            }
                            if (!(f = m.$$childHead || m !== b && m.$$nextSibling))for (; m !== b && !(f = m.$$nextSibling);)m = m.$parent
                        } while (m = f);
                        if ((u || M.length) && !v--)throw g(), n("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", t, w)
                    } while (u || M.length);
                    for (g(); k.length;)try {
                        k.shift()()
                    } catch (C) {
                        s(C)
                    }
                }, $destroy: function () {
                    if (!this.$$destroyed) {
                        var e = this.$parent;
                        if (this.$broadcast("$destroy"), this.$$destroyed = !0, this !== A) {
                            for (var t in this.$$listenerCount)v(this, this.$$listenerCount[t], t);
                            e.$$childHead == this && (e.$$childHead = this.$$nextSibling), e.$$childTail == this && (e.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = p, this.$on = this.$watch = this.$watchGroup = function () {
                                return p
                            }, this.$$listeners = {}, this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
                        }
                    }
                }, $eval: function (e, t) {
                    return u(e)(this, t)
                }, $evalAsync: function (e, t) {
                    A.$$phase || M.length || d.defer(function () {
                        M.length && A.$digest()
                    }), M.push({scope: this, expression: e, locals: t})
                }, $$postDigest: function (e) {
                    k.push(e)
                }, $apply: function (e) {
                    try {
                        return h("$apply"), this.$eval(e)
                    } catch (t) {
                        s(t)
                    } finally {
                        g();
                        try {
                            A.$digest()
                        } catch (t) {
                            throw s(t), t
                        }
                    }
                }, $applyAsync: function (e) {
                    function t() {
                        n.$eval(e)
                    }

                    var n = this;
                    e && C.push(t), w()
                }, $on: function (e, t) {
                    var n = this.$$listeners[e];
                    n || (this.$$listeners[e] = n = []), n.push(t);
                    var r = this;
                    do r.$$listenerCount[e] || (r.$$listenerCount[e] = 0), r.$$listenerCount[e]++; while (r = r.$parent);
                    var i = this;
                    return function () {
                        var r = n.indexOf(t);
                        -1 !== r && (n[r] = null, v(i, 1, e))
                    }
                }, $emit: function (e) {
                    var t, n, r, i = [], o = this, a = !1, c = {
                        name: e, targetScope: o, stopPropagation: function () {
                            a = !0
                        }, preventDefault: function () {
                            c.defaultPrevented = !0
                        }, defaultPrevented: !1
                    }, l = V([c], arguments, 1);
                    do {
                        for (t = o.$$listeners[e] || i, c.currentScope = o, n = 0, r = t.length; r > n; n++)if (t[n])try {
                            t[n].apply(null, l)
                        } catch (u) {
                            s(u)
                        } else t.splice(n, 1), n--, r--;
                        if (a)return c.currentScope = null, c;
                        o = o.$parent
                    } while (o);
                    return c.currentScope = null, c
                }, $broadcast: function (e) {
                    var t = this, n = t, r = t, i = {
                        name: e, targetScope: t, preventDefault: function () {
                            i.defaultPrevented = !0
                        }, defaultPrevented: !1
                    };
                    if (!t.$$listenerCount[e])return i;
                    for (var o, a, c, l = V([i], arguments, 1); n = r;) {
                        for (i.currentScope = n, o = n.$$listeners[e] || [], a = 0, c = o.length; c > a; a++)if (o[a])try {
                            o[a].apply(null, l)
                        } catch (u) {
                            s(u)
                        } else o.splice(a, 1), a--, c--;
                        if (!(r = n.$$listenerCount[e] && n.$$childHead || n !== t && n.$$nextSibling))for (; n !== t && !(r = n.$$nextSibling);)n = n.$parent
                    }
                    return i.currentScope = null, i
                }
            };
            var A = new m, M = A.$$asyncQueue = [], k = A.$$postDigestQueue = [], C = A.$$applyAsyncQueue = [];
            return A
        }]
    }

    function Kn() {
        var e = /^\s*(https?|ftp|mailto|tel|file):/, t = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function (t) {
            return v(t) ? (e = t, this) : e
        }, this.imgSrcSanitizationWhitelist = function (e) {
            return v(e) ? (t = e, this) : t
        }, this.$get = function () {
            return function (n, r) {
                var i, o = r ? t : e;
                return i = ir(n).href, "" === i || i.match(o) ? n : "unsafe:" + i
            }
        }
    }

    function Xn(e) {
        if ("self" === e)return e;
        if (E(e)) {
            if (e.indexOf("***") > -1)throw yo("iwcard", "Illegal sequence *** in string matcher.  String: {0}", e);
            return e = pi(e).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + e + "$")
        }
        if (A(e))return new RegExp("^" + e.source + "$");
        throw yo("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
    }

    function Zn(e) {
        var t = [];
        return v(e) && o(e, function (e) {
            t.push(Xn(e))
        }), t
    }

    function Jn() {
        this.SCE_CONTEXTS = wo;
        var e = ["self"], t = [];
        this.resourceUrlWhitelist = function (t) {
            return arguments.length && (e = Zn(t)), e
        }, this.resourceUrlBlacklist = function (e) {
            return arguments.length && (t = Zn(e)), t
        }, this.$get = ["$injector", function (r) {
            function i(e, t) {
                return "self" === e ? or(t) : !!e.exec(t.href)
            }

            function o(n) {
                var r, o, a = ir(n.toString()), c = !1;
                for (r = 0, o = e.length; o > r; r++)if (i(e[r], a)) {
                    c = !0;
                    break
                }
                if (c)for (r = 0, o = t.length; o > r; r++)if (i(t[r], a)) {
                    c = !1;
                    break
                }
                return c
            }

            function a(e) {
                var t = function (e) {
                    this.$$unwrapTrustedValue = function () {
                        return e
                    }
                };
                return e && (t.prototype = new e), t.prototype.valueOf = function () {
                    return this.$$unwrapTrustedValue()
                }, t.prototype.toString = function () {
                    return this.$$unwrapTrustedValue().toString()
                }, t
            }

            function c(e, t) {
                var r = f.hasOwnProperty(e) ? f[e] : null;
                if (!r)throw yo("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", e, t);
                if (null === t || t === n || "" === t)return t;
                if ("string" != typeof t)throw yo("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", e);
                return new r(t)
            }

            function s(e) {
                return e instanceof d ? e.$$unwrapTrustedValue() : e
            }

            function l(e, t) {
                if (null === t || t === n || "" === t)return t;
                var r = f.hasOwnProperty(e) ? f[e] : null;
                if (r && t instanceof r)return t.$$unwrapTrustedValue();
                if (e === wo.RESOURCE_URL) {
                    if (o(t))return t;
                    throw yo("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", t.toString())
                }
                if (e === wo.HTML)return u(t);
                throw yo("unsafe", "Attempting to use an unsafe value in a safe context.")
            }

            var u = function () {
                throw yo("unsafe", "Attempting to use an unsafe value in a safe context.")
            };
            r.has("$sanitize") && (u = r.get("$sanitize"));
            var d = a(), f = {};
            return f[wo.HTML] = a(d), f[wo.CSS] = a(d), f[wo.URL] = a(d), f[wo.JS] = a(d), f[wo.RESOURCE_URL] = a(f[wo.URL]), {
                trustAs: c,
                getTrusted: l,
                valueOf: s
            }
        }]
    }

    function Qn() {
        var e = !0;
        this.enabled = function (t) {
            return arguments.length && (e = !!t), e
        }, this.$get = ["$parse", "$sceDelegate", function (t, n) {
            if (e && 8 > ei)throw yo("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
            var r = P(wo);
            r.isEnabled = function () {
                return e
            }, r.trustAs = n.trustAs, r.getTrusted = n.getTrusted, r.valueOf = n.valueOf, e || (r.trustAs = r.getTrusted = function (e, t) {
                return t
            }, r.valueOf = h), r.parseAs = function (e, n) {
                var i = t(n);
                return i.literal && i.constant ? i : t(n, function (t) {
                    return r.getTrusted(e, t)
                })
            };
            var i = r.parseAs, a = r.getTrusted, c = r.trustAs;
            return o(wo, function (e, t) {
                var n = Kr(t);
                r[ht("parse_as_" + n)] = function (t) {
                    return i(e, t)
                }, r[ht("get_trusted_" + n)] = function (t) {
                    return a(e, t)
                }, r[ht("trust_as_" + n)] = function (t) {
                    return c(e, t)
                }
            }), r
        }]
    }

    function er() {
        this.$get = ["$window", "$document", function (e, t) {
            var n, r, i = {}, o = f((/android (\d+)/.exec(Kr((e.navigator || {}).userAgent)) || [])[1]), a = /Boxee/i.test((e.navigator || {}).userAgent), c = t[0] || {}, s = /^(Moz|webkit|ms)(?=[A-Z])/, l = c.body && c.body.style, u = !1, d = !1;
            if (l) {
                for (var m in l)if (r = s.exec(m)) {
                    n = r[0], n = n.substr(0, 1).toUpperCase() + n.substr(1);
                    break
                }
                n || (n = "WebkitOpacity"in l && "webkit"), u = !!("transition"in l || n + "Transition"in l), d = !!("animation"in l || n + "Animation"in l), !o || u && d || (u = E(c.body.style.webkitTransition), d = E(c.body.style.webkitAnimation))
            }
            return {
                history: !(!e.history || !e.history.pushState || 4 > o || a), hasEvent: function (e) {
                    if ("input" === e && 11 >= ei)return !1;
                    if ($(i[e])) {
                        var t = c.createElement("div");
                        i[e] = "on" + e in t
                    }
                    return i[e]
                }, csp: hi(), vendorPrefix: n, transitions: u, animations: d, android: o
            }
        }]
    }

    function tr() {
        this.$get = ["$templateCache", "$http", "$q", function (e, t, n) {
            function r(i, o) {
                function a(e) {
                    if (!o)throw Ki("tpload", "Failed to load template: {0}", i);
                    return n.reject(e)
                }

                r.totalPendingRequests++;
                var c = t.defaults && t.defaults.transformResponse;
                fi(c) ? c = c.filter(function (e) {
                    return e !== on
                }) : c === on && (c = null);
                var s = {cache: e, transformResponse: c};
                return t.get(i, s)["finally"](function () {
                    r.totalPendingRequests--
                }).then(function (e) {
                    return e.data
                }, a)
            }

            return r.totalPendingRequests = 0, r
        }]
    }

    function nr() {
        this.$get = ["$rootScope", "$browser", "$location", function (e, t, n) {
            var r = {};
            return r.findBindings = function (e, t, n) {
                var r = e.getElementsByClassName("ng-binding"), i = [];
                return o(r, function (e) {
                    var r = li.element(e).data("$binding");
                    r && o(r, function (r) {
                        if (n) {
                            var o = new RegExp("(^|\\s)" + pi(t) + "(\\s|\\||$)");
                            o.test(r) && i.push(e)
                        } else-1 != r.indexOf(t) && i.push(e)
                    })
                }), i
            }, r.findModels = function (e, t, n) {
                for (var r = ["ng-", "data-ng-", "ng\\:"], i = 0; i < r.length; ++i) {
                    var o = n ? "=" : "*=", a = "[" + r[i] + "model" + o + '"' + t + '"]', c = e.querySelectorAll(a);
                    if (c.length)return c
                }
            }, r.getLocation = function () {
                return n.url()
            }, r.setLocation = function (t) {
                t !== n.url() && (n.url(t), e.$digest())
            }, r.whenStable = function (e) {
                t.notifyWhenNoOutstandingRequests(e)
            }, r
        }]
    }

    function rr() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (e, t, n, r, i) {
            function o(o, c, s) {
                var l, u = v(s) && !s, d = (u ? r : n).defer(), f = d.promise;
                return l = t.defer(function () {
                    try {
                        d.resolve(o())
                    } catch (t) {
                        d.reject(t), i(t)
                    } finally {
                        delete a[f.$$timeoutId]
                    }
                    u || e.$apply()
                }, c), f.$$timeoutId = l, a[l] = d, f
            }

            var a = {};
            return o.cancel = function (e) {
                return e && e.$$timeoutId in a ? (a[e.$$timeoutId].reject("canceled"), delete a[e.$$timeoutId], t.defer.cancel(e.$$timeoutId)) : !1
            }, o
        }]
    }

    function ir(e) {
        var t = e;
        return ei && (xo.setAttribute("href", t), t = xo.href), xo.setAttribute("href", t), {
            href: xo.href,
            protocol: xo.protocol ? xo.protocol.replace(/:$/, "") : "",
            host: xo.host,
            search: xo.search ? xo.search.replace(/^\?/, "") : "",
            hash: xo.hash ? xo.hash.replace(/^#/, "") : "",
            hostname: xo.hostname,
            port: xo.port,
            pathname: "/" === xo.pathname.charAt(0) ? xo.pathname : "/" + xo.pathname
        }
    }

    function or(e) {
        var t = E(e) ? ir(e) : e;
        return t.protocol === Ao.protocol && t.host === Ao.host
    }

    function ar() {
        this.$get = g(e)
    }

    function cr(e) {
        function t(r, i) {
            if (b(r)) {
                var a = {};
                return o(r, function (e, n) {
                    a[n] = t(n, e)
                }), a
            }
            return e.factory(r + n, i)
        }

        var n = "Filter";
        this.register = t, this.$get = ["$injector", function (e) {
            return function (t) {
                return e.get(t + n)
            }
        }], t("currency", dr), t("date", Ar), t("filter", sr), t("json", Mr), t("limitTo", kr), t("lowercase", So), t("number", fr), t("orderBy", Cr), t("uppercase", No)
    }

    function sr() {
        return function (e, t, n) {
            if (!fi(e))return e;
            var r, i;
            switch (typeof t) {
                case"function":
                    r = t;
                    break;
                case"boolean":
                case"number":
                case"string":
                    i = !0;
                case"object":
                    r = lr(t, n, i);
                    break;
                default:
                    return e
            }
            return e.filter(r)
        }
    }

    function lr(e, t, n) {
        var r, i = b(e) && "$"in e;
        return t === !0 ? t = j : x(t) || (t = function (e, t) {
            return b(e) || b(t) ? !1 : (e = Kr("" + e), t = Kr("" + t), -1 !== e.indexOf(t))
        }), r = function (r) {
            return i && !b(r) ? ur(r, e.$, t, !1) : ur(r, e, t, n)
        }
    }

    function ur(e, t, n, r, i) {
        var o = null !== e ? typeof e : "null", a = null !== t ? typeof t : "null";
        if ("string" === a && "!" === t.charAt(0))return !ur(e, t.substring(1), n, r);
        if (fi(e))return e.some(function (e) {
            return ur(e, t, n, r)
        });
        switch (o) {
            case"object":
                var c;
                if (r) {
                    for (c in e)if ("$" !== c.charAt(0) && ur(e[c], t, n, !0))return !0;
                    return i ? !1 : ur(e, t, n, !1)
                }
                if ("object" === a) {
                    for (c in t) {
                        var s = t[c];
                        if (!x(s) && !$(s)) {
                            var l = "$" === c, u = l ? e : e[c];
                            if (!ur(u, s, n, l, l))return !1
                        }
                    }
                    return !0
                }
                return n(e, t);
            case"function":
                return !1;
            default:
                return n(e, t)
        }
    }

    function dr(e) {
        var t = e.NUMBER_FORMATS;
        return function (e, n, r) {
            return $(n) && (n = t.CURRENCY_SYM), $(r) && (r = t.PATTERNS[1].maxFrac), null == e ? e : mr(e, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, r).replace(/\u00A4/g, n)
        }
    }

    function fr(e) {
        var t = e.NUMBER_FORMATS;
        return function (e, n) {
            return null == e ? e : mr(e, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, n)
        }
    }

    function mr(e, t, n, r, i) {
        if (!isFinite(e) || b(e))return "";
        var o = 0 > e;
        e = Math.abs(e);
        var a = e + "", c = "", s = [], l = !1;
        if (-1 !== a.indexOf("e")) {
            var u = a.match(/([\d\.]+)e(-?)(\d+)/);
            u && "-" == u[2] && u[3] > i + 1 ? e = 0 : (c = a, l = !0)
        }
        if (l)i > 0 && 1 > e && (c = e.toFixed(i), e = parseFloat(c)); else {
            var d = (a.split(Mo)[1] || "").length;
            $(i) && (i = Math.min(Math.max(t.minFrac, d), t.maxFrac)), e = +(Math.round(+(e.toString() + "e" + i)).toString() + "e" + -i);
            var f = ("" + e).split(Mo), m = f[0];
            f = f[1] || "";
            var p, h = 0, g = t.lgSize, v = t.gSize;
            if (m.length >= g + v)for (h = m.length - g, p = 0; h > p; p++)(h - p) % v === 0 && 0 !== p && (c += n), c += m.charAt(p);
            for (p = h; p < m.length; p++)(m.length - p) % g === 0 && 0 !== p && (c += n), c += m.charAt(p);
            for (; f.length < i;)f += "0";
            i && "0" !== i && (c += r + f.substr(0, i))
        }
        return 0 === e && (o = !1), s.push(o ? t.negPre : t.posPre, c, o ? t.negSuf : t.posSuf), s.join("")
    }

    function pr(e, t, n) {
        var r = "";
        for (0 > e && (r = "-", e = -e), e = "" + e; e.length < t;)e = "0" + e;
        return n && (e = e.substr(e.length - t)), r + e
    }

    function hr(e, t, n, r) {
        return n = n || 0, function (i) {
            var o = i["get" + e]();
            return (n > 0 || o > -n) && (o += n), 0 === o && -12 == n && (o = 12), pr(o, t, r)
        }
    }

    function gr(e, t) {
        return function (n, r) {
            var i = n["get" + e](), o = Zr(t ? "SHORT" + e : e);
            return r[o][i]
        }
    }

    function $r(e) {
        var t = -1 * e.getTimezoneOffset(), n = t >= 0 ? "+" : "";
        return n += pr(Math[t > 0 ? "floor" : "ceil"](t / 60), 2) + pr(Math.abs(t % 60), 2)
    }

    function vr(e) {
        var t = new Date(e, 0, 1).getDay();
        return new Date(e, 0, (4 >= t ? 5 : 12) - t)
    }

    function br(e) {
        return new Date(e.getFullYear(), e.getMonth(), e.getDate() + (4 - e.getDay()))
    }

    function Er(e) {
        return function (t) {
            var n = vr(t.getFullYear()), r = br(t), i = +r - +n, o = 1 + Math.round(i / 6048e5);
            return pr(o, e)
        }
    }

    function yr(e, t) {
        return e.getHours() < 12 ? t.AMPMS[0] : t.AMPMS[1]
    }

    function wr(e, t) {
        return e.getFullYear() <= 0 ? t.ERAS[0] : t.ERAS[1]
    }

    function xr(e, t) {
        return e.getFullYear() <= 0 ? t.ERANAMES[0] : t.ERANAMES[1]
    }

    function Ar(e) {
        function t(e) {
            var t;
            if (t = e.match(n)) {
                var r = new Date(0), i = 0, o = 0, a = t[8] ? r.setUTCFullYear : r.setFullYear, c = t[8] ? r.setUTCHours : r.setHours;
                t[9] && (i = f(t[9] + t[10]), o = f(t[9] + t[11])), a.call(r, f(t[1]), f(t[2]) - 1, f(t[3]));
                var s = f(t[4] || 0) - i, l = f(t[5] || 0) - o, u = f(t[6] || 0), d = Math.round(1e3 * parseFloat("0." + (t[7] || 0)));
                return c.call(r, s, l, u, d), r
            }
            return e
        }

        var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (n, r, i) {
            var a, c, s = "", l = [];
            if (r = r || "mediumDate", r = e.DATETIME_FORMATS[r] || r, E(n) && (n = To.test(n) ? f(n) : t(n)), y(n) && (n = new Date(n)), !w(n))return n;
            for (; r;)c = Co.exec(r), c ? (l = V(l, c, 1), r = l.pop()) : (l.push(r), r = null);
            return i && "UTC" === i && (n = new Date(n.getTime()), n.setMinutes(n.getMinutes() + n.getTimezoneOffset())), o(l, function (t) {
                a = ko[t], s += a ? a(n, e.DATETIME_FORMATS) : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), s
        }
    }

    function Mr() {
        return function (e, t) {
            return $(t) && (t = 2), U(e, t)
        }
    }

    function kr() {
        return function (e, t) {
            return y(e) && (e = e.toString()), fi(e) || E(e) ? (t = 1 / 0 === Math.abs(Number(t)) ? Number(t) : f(t), t ? t > 0 ? e.slice(0, t) : e.slice(t) : E(e) ? "" : []) : e
        }
    }

    function Cr(e) {
        return function (t, n, r) {
            function o(e, t) {
                for (var r = 0; r < n.length; r++) {
                    var i = n[r](e, t);
                    if (0 !== i)return i
                }
                return 0
            }

            function a(e, t) {
                return t ? function (t, n) {
                    return e(n, t)
                } : e
            }

            function c(e) {
                switch (typeof e) {
                    case"number":
                    case"boolean":
                    case"string":
                        return !0;
                    default:
                        return !1
                }
            }

            function s(e) {
                return null === e ? "null" : "function" == typeof e.valueOf && (e = e.valueOf(), c(e)) ? e : "function" == typeof e.toString && (e = e.toString(), c(e)) ? e : ""
            }

            function l(e, t) {
                var n = typeof e, r = typeof t;
                return n === r && "object" === n && (e = s(e), t = s(t)), n === r ? ("string" === n && (e = e.toLowerCase(), t = t.toLowerCase()), e === t ? 0 : t > e ? -1 : 1) : r > n ? -1 : 1
            }

            return i(t) ? (n = fi(n) ? n : [n], 0 === n.length && (n = ["+"]), n = n.map(function (t) {
                var n = !1, r = t || h;
                if (E(t)) {
                    if (("+" == t.charAt(0) || "-" == t.charAt(0)) && (n = "-" == t.charAt(0), t = t.substring(1)), "" === t)return a(l, n);
                    if (r = e(t), r.constant) {
                        var i = r();
                        return a(function (e, t) {
                            return l(e[i], t[i])
                        }, n)
                    }
                }
                return a(function (e, t) {
                    return l(r(e), r(t))
                }, n)
            }), ii.call(t).sort(a(o, r))) : t
        }
    }

    function Tr(e) {
        return x(e) && (e = {link: e}), e.restrict = e.restrict || "AC", g(e)
    }

    function Sr(e, t) {
        e.$name = t
    }

    function Nr(e, t, r, i, a) {
        var c = this, s = [], l = c.$$parentForm = e.parent().controller("form") || Oo;
        c.$error = {}, c.$$success = {}, c.$pending = n, c.$name = a(t.name || t.ngForm || "")(r), c.$dirty = !1, c.$pristine = !0, c.$valid = !0, c.$invalid = !1, c.$submitted = !1, l.$addControl(c), c.$rollbackViewValue = function () {
            o(s, function (e) {
                e.$rollbackViewValue()
            })
        }, c.$commitViewValue = function () {
            o(s, function (e) {
                e.$commitViewValue()
            })
        }, c.$addControl = function (e) {
            at(e.$name, "input"), s.push(e), e.$name && (c[e.$name] = e)
        }, c.$$renameControl = function (e, t) {
            var n = e.$name;
            c[n] === e && delete c[n], c[t] = e, e.$name = t
        }, c.$removeControl = function (e) {
            e.$name && c[e.$name] === e && delete c[e.$name], o(c.$pending, function (t, n) {
                c.$setValidity(n, null, e)
            }), o(c.$error, function (t, n) {
                c.$setValidity(n, null, e)
            }), o(c.$$success, function (t, n) {
                c.$setValidity(n, null, e)
            }), R(s, e)
        }, zr({
            ctrl: this, $element: e, set: function (e, t, n) {
                var r = e[t];
                if (r) {
                    var i = r.indexOf(n);
                    -1 === i && r.push(n)
                } else e[t] = [n]
            }, unset: function (e, t, n) {
                var r = e[t];
                r && (R(r, n), 0 === r.length && delete e[t])
            }, parentForm: l, $animate: i
        }), c.$setDirty = function () {
            i.removeClass(e, ha), i.addClass(e, ga), c.$dirty = !0, c.$pristine = !1, l.$setDirty()
        }, c.$setPristine = function () {
            i.setClass(e, ha, ga + " " + Ho), c.$dirty = !1, c.$pristine = !0, c.$submitted = !1, o(s, function (e) {
                e.$setPristine()
            })
        }, c.$setUntouched = function () {
            o(s, function (e) {
                e.$setUntouched()
            })
        }, c.$setSubmitted = function () {
            i.addClass(e, Ho), c.$submitted = !0, l.$setSubmitted()
        }
    }

    function _r(e) {
        e.$formatters.push(function (t) {
            return e.$isEmpty(t) ? t : t.toString()
        })
    }

    function Dr(e, t, n, r, i, o) {
        Or(e, t, n, r, i, o), _r(r)
    }

    function Or(e, t, n, r, i, o) {
        var a = Kr(t[0].type);
        if (!i.android) {
            var c = !1;
            t.on("compositionstart", function () {
                c = !0
            }), t.on("compositionend", function () {
                c = !1, s()
            })
        }
        var s = function (e) {
            if (l && (o.defer.cancel(l), l = null), !c) {
                var i = t.val(), s = e && e.type;
                "password" === a || n.ngTrim && "false" === n.ngTrim || (i = mi(i)), (r.$viewValue !== i || "" === i && r.$$hasNativeValidators) && r.$setViewValue(i, s)
            }
        };
        if (i.hasEvent("input"))t.on("input", s); else {
            var l, u = function (e, t, n) {
                l || (l = o.defer(function () {
                    l = null, t && t.value === n || s(e)
                }))
            };
            t.on("keydown", function (e) {
                var t = e.keyCode;
                91 === t || t > 15 && 19 > t || t >= 37 && 40 >= t || u(e, this, this.value)
            }), i.hasEvent("paste") && t.on("paste cut", u)
        }
        t.on("change", s), r.$render = function () {
            t.val(r.$isEmpty(r.$viewValue) ? "" : r.$viewValue)
        }
    }

    function Hr(e, t) {
        if (w(e))return e;
        if (E(e)) {
            Bo.lastIndex = 0;
            var n = Bo.exec(e);
            if (n) {
                var r = +n[1], i = +n[2], o = 0, a = 0, c = 0, s = 0, l = vr(r), u = 7 * (i - 1);
                return t && (o = t.getHours(), a = t.getMinutes(), c = t.getSeconds(), s = t.getMilliseconds()), new Date(r, 0, l.getDate() + u, o, a, c, s)
            }
        }
        return 0 / 0
    }

    function Rr(e, t) {
        return function (n, r) {
            var i, a;
            if (w(n))return n;
            if (E(n)) {
                if ('"' == n.charAt(0) && '"' == n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), jo.test(n))return new Date(n);
                if (e.lastIndex = 0, i = e.exec(n))return i.shift(), a = r ? {
                    yyyy: r.getFullYear(),
                    MM: r.getMonth() + 1,
                    dd: r.getDate(),
                    HH: r.getHours(),
                    mm: r.getMinutes(),
                    ss: r.getSeconds(),
                    sss: r.getMilliseconds() / 1e3
                } : {yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0}, o(i, function (e, n) {
                    n < t.length && (a[t[n]] = +e)
                }), new Date(a.yyyy, a.MM - 1, a.dd, a.HH, a.mm, a.ss || 0, 1e3 * a.sss || 0)
            }
            return 0 / 0
        }
    }

    function Ir(e, t, r, i) {
        return function (o, a, c, s, l, u, d) {
            function f(e) {
                return e && !(e.getTime && e.getTime() !== e.getTime())
            }

            function m(e) {
                return v(e) ? w(e) ? e : r(e) : n
            }

            Pr(o, a, c, s), Or(o, a, c, s, l, u);
            var p, h = s && s.$options && s.$options.timezone;
            if (s.$$parserName = e, s.$parsers.push(function (e) {
                    if (s.$isEmpty(e))return null;
                    if (t.test(e)) {
                        var i = r(e, p);
                        return "UTC" === h && i.setMinutes(i.getMinutes() - i.getTimezoneOffset()), i
                    }
                    return n
                }), s.$formatters.push(function (e) {
                    if (e && !w(e))throw Ea("datefmt", "Expected `{0}` to be a date", e);
                    if (f(e)) {
                        if (p = e, p && "UTC" === h) {
                            var t = 6e4 * p.getTimezoneOffset();
                            p = new Date(p.getTime() + t)
                        }
                        return d("date")(e, i, h)
                    }
                    return p = null, ""
                }), v(c.min) || c.ngMin) {
                var g;
                s.$validators.min = function (e) {
                    return !f(e) || $(g) || r(e) >= g
                }, c.$observe("min", function (e) {
                    g = m(e), s.$validate()
                })
            }
            if (v(c.max) || c.ngMax) {
                var b;
                s.$validators.max = function (e) {
                    return !f(e) || $(b) || r(e) <= b
                }, c.$observe("max", function (e) {
                    b = m(e), s.$validate()
                })
            }
        }
    }

    function Pr(e, t, r, i) {
        var o = t[0], a = i.$$hasNativeValidators = b(o.validity);
        a && i.$parsers.push(function (e) {
            var r = t.prop(Wr) || {};
            return r.badInput && !r.typeMismatch ? n : e
        })
    }

    function jr(e, t, r, i, o, a) {
        if (Pr(e, t, r, i), Or(e, t, r, i, o, a), i.$$parserName = "number", i.$parsers.push(function (e) {
                return i.$isEmpty(e) ? null : qo.test(e) ? parseFloat(e) : n
            }), i.$formatters.push(function (e) {
                if (!i.$isEmpty(e)) {
                    if (!y(e))throw Ea("numfmt", "Expected `{0}` to be a number", e);
                    e = e.toString()
                }
                return e
            }), v(r.min) || r.ngMin) {
            var c;
            i.$validators.min = function (e) {
                return i.$isEmpty(e) || $(c) || e >= c
            }, r.$observe("min", function (e) {
                v(e) && !y(e) && (e = parseFloat(e, 10)), c = y(e) && !isNaN(e) ? e : n, i.$validate()
            })
        }
        if (v(r.max) || r.ngMax) {
            var s;
            i.$validators.max = function (e) {
                return i.$isEmpty(e) || $(s) || s >= e
            }, r.$observe("max", function (e) {
                v(e) && !y(e) && (e = parseFloat(e, 10)), s = y(e) && !isNaN(e) ? e : n, i.$validate()
            })
        }
    }

    function Vr(e, t, n, r, i, o) {
        Or(e, t, n, r, i, o), _r(r), r.$$parserName = "url", r.$validators.url = function (e, t) {
            var n = e || t;
            return r.$isEmpty(n) || Vo.test(n)
        }
    }

    function Fr(e, t, n, r, i, o) {
        Or(e, t, n, r, i, o), _r(r), r.$$parserName = "email", r.$validators.email = function (e, t) {
            var n = e || t;
            return r.$isEmpty(n) || Fo.test(n)
        }
    }

    function qr(e, t, n, r) {
        $(n.name) && t.attr("name", l());
        var i = function (e) {
            t[0].checked && r.$setViewValue(n.value, e && e.type)
        };
        t.on("click", i), r.$render = function () {
            var e = n.value;
            t[0].checked = e == r.$viewValue
        }, n.$observe("value", r.$render)
    }

    function Lr(e, t, n, i, o) {
        var a;
        if (v(i)) {
            if (a = e(i), !a.constant)throw r("ngModel")("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", n, i);
            return a(t)
        }
        return o
    }

    function Ur(e, t, n, r, i, o, a, c) {
        var s = Lr(c, e, "ngTrueValue", n.ngTrueValue, !0), l = Lr(c, e, "ngFalseValue", n.ngFalseValue, !1), u = function (e) {
            r.$setViewValue(t[0].checked, e && e.type)
        };
        t.on("click", u), r.$render = function () {
            t[0].checked = r.$viewValue
        }, r.$isEmpty = function (e) {
            return e === !1
        }, r.$formatters.push(function (e) {
            return j(e, s)
        }), r.$parsers.push(function (e) {
            return e ? s : l
        })
    }

    function Br(e, t) {
        return e = "ngClass" + e, ["$animate", function (n) {
            function r(e, t) {
                var n = [];
                e:for (var r = 0; r < e.length; r++) {
                    for (var i = e[r], o = 0; o < t.length; o++)if (i == t[o])continue e;
                    n.push(i)
                }
                return n
            }

            function i(e) {
                if (fi(e))return e;
                if (E(e))return e.split(" ");
                if (b(e)) {
                    var t = [];
                    return o(e, function (e, n) {
                        e && (t = t.concat(n.split(" ")))
                    }), t
                }
                return e
            }

            return {
                restrict: "AC", link: function (a, c, s) {
                    function l(e) {
                        var t = d(e, 1);
                        s.$addClass(t)
                    }

                    function u(e) {
                        var t = d(e, -1);
                        s.$removeClass(t)
                    }

                    function d(e, t) {
                        var n = c.data("$classCounts") || {}, r = [];
                        return o(e, function (e) {
                            (t > 0 || n[e]) && (n[e] = (n[e] || 0) + t, n[e] === +(t > 0) && r.push(e))
                        }), c.data("$classCounts", n), r.join(" ")
                    }

                    function f(e, t) {
                        var i = r(t, e), o = r(e, t);
                        i = d(i, 1), o = d(o, -1), i && i.length && n.addClass(c, i), o && o.length && n.removeClass(c, o)
                    }

                    function m(e) {
                        if (t === !0 || a.$index % 2 === t) {
                            var n = i(e || []);
                            if (p) {
                                if (!j(e, p)) {
                                    var r = i(p);
                                    f(r, n)
                                }
                            } else l(n)
                        }
                        p = P(e)
                    }

                    var p;
                    a.$watch(s[e], m, !0), s.$observe("class", function () {
                        m(a.$eval(s[e]))
                    }), "ngClass" !== e && a.$watch("$index", function (n, r) {
                        var o = 1 & n;
                        if (o !== (1 & r)) {
                            var c = i(a.$eval(s[e]));
                            o === t ? l(c) : u(c)
                        }
                    })
                }
            }
        }]
    }

    function zr(e) {
        function t(e, t, s) {
            t === n ? r("$pending", e, s) : i("$pending", e, s), N(t) ? t ? (d(c.$error, e, s), u(c.$$success, e, s)) : (u(c.$error, e, s), d(c.$$success, e, s)) : (d(c.$error, e, s), d(c.$$success, e, s)), c.$pending ? (o(ba, !0), c.$valid = c.$invalid = n, a("", null)) : (o(ba, !1), c.$valid = Gr(c.$error), c.$invalid = !c.$valid, a("", c.$valid));
            var l;
            l = c.$pending && c.$pending[e] ? n : c.$error[e] ? !1 : c.$$success[e] ? !0 : null, a(e, l), f.$setValidity(e, l, c)
        }

        function r(e, t, n) {
            c[e] || (c[e] = {}), u(c[e], t, n)
        }

        function i(e, t, r) {
            c[e] && d(c[e], t, r), Gr(c[e]) && (c[e] = n)
        }

        function o(e, t) {
            t && !l[e] ? (m.addClass(s, e), l[e] = !0) : !t && l[e] && (m.removeClass(s, e), l[e] = !1)
        }

        function a(e, t) {
            e = e ? "-" + nt(e, "-") : "", o(ma + e, t === !0), o(pa + e, t === !1)
        }

        var c = e.ctrl, s = e.$element, l = {}, u = e.set, d = e.unset, f = e.parentForm, m = e.$animate;
        l[pa] = !(l[ma] = s.hasClass(ma)), c.$setValidity = t
    }

    function Gr(e) {
        if (e)for (var t in e)return !1;
        return !0
    }

    var Yr = /^\/(.+)\/([a-z]*)$/, Wr = "validity", Kr = function (e) {
        return E(e) ? e.toLowerCase() : e
    }, Xr = Object.prototype.hasOwnProperty, Zr = function (e) {
        return E(e) ? e.toUpperCase() : e
    }, Jr = function (e) {
        return E(e) ? e.replace(/[A-Z]/g, function (e) {
            return String.fromCharCode(32 | e.charCodeAt(0))
        }) : e
    }, Qr = function (e) {
        return E(e) ? e.replace(/[a-z]/g, function (e) {
            return String.fromCharCode(-33 & e.charCodeAt(0))
        }) : e
    };
    "i" !== "I".toLowerCase() && (Kr = Jr, Zr = Qr);
    var ei, ti, ni, ri, ii = [].slice, oi = [].splice, ai = [].push, ci = Object.prototype.toString, si = r("ng"), li = e.angular || (e.angular = {}), ui = 0;
    ei = t.documentMode, p.$inject = [], h.$inject = [];
    var di, fi = Array.isArray, mi = function (e) {
        return E(e) ? e.trim() : e
    }, pi = function (e) {
        return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    }, hi = function () {
        if (v(hi.isActive_))return hi.isActive_;
        var e = !(!t.querySelector("[ng-csp]") && !t.querySelector("[data-ng-csp]"));
        if (!e)try {
            new Function("")
        } catch (n) {
            e = !0
        }
        return hi.isActive_ = e
    }, gi = ["ng-", "data-ng-", "ng:", "x-ng-"], $i = /[A-Z]/g, vi = !1, bi = 1, Ei = 3, yi = 8, wi = 9, xi = 11, Ai = {
        full: "1.3.15",
        major: 1,
        minor: 3,
        dot: 15,
        codeName: "locality-filtration"
    };
    Et.expando = "ng339";
    var Mi = Et.cache = {}, ki = 1, Ci = function (e, t, n) {
        e.addEventListener(t, n, !1)
    }, Ti = function (e, t, n) {
        e.removeEventListener(t, n, !1)
    };
    Et._data = function (e) {
        return this.cache[e[this.expando]] || {}
    };
    var Si = /([\:\-\_]+(.))/g, Ni = /^moz([A-Z])/, _i = {
        mouseleave: "mouseout",
        mouseenter: "mouseover"
    }, Di = r("jqLite"), Oi = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Hi = /<|&#?\w+;/, Ri = /<([\w:]+)/, Ii = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Pi = {
        option: [1, '<select multiple="multiple">', "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Pi.optgroup = Pi.option, Pi.tbody = Pi.tfoot = Pi.colgroup = Pi.caption = Pi.thead, Pi.th = Pi.td;
    var ji = Et.prototype = {
        ready: function (n) {
            function r() {
                i || (i = !0, n())
            }

            var i = !1;
            "complete" === t.readyState ? setTimeout(r) : (this.on("DOMContentLoaded", r), Et(e).on("load", r))
        }, toString: function () {
            var e = [];
            return o(this, function (t) {
                e.push("" + t)
            }), "[" + e.join(", ") + "]"
        }, eq: function (e) {
            return ti(e >= 0 ? this[e] : this[this.length + e])
        }, length: 0, push: ai, sort: [].sort, splice: [].splice
    }, Vi = {};
    o("multiple,selected,checked,disabled,readOnly,required,open".split(","), function (e) {
        Vi[Kr(e)] = e
    });
    var Fi = {};
    o("input,select,option,textarea,button,form,details".split(","), function (e) {
        Fi[e] = !0
    });
    var qi = {ngMinlength: "minlength", ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern"};
    o({data: kt, removeData: At}, function (e, t) {
        Et[t] = e
    }), o({
        data: kt, inheritedData: Dt, scope: function (e) {
            return ti.data(e, "$scope") || Dt(e.parentNode || e, ["$isolateScope", "$scope"])
        }, isolateScope: function (e) {
            return ti.data(e, "$isolateScope") || ti.data(e, "$isolateScopeNoTemplate")
        }, controller: _t, injector: function (e) {
            return Dt(e, "$injector")
        }, removeAttr: function (e, t) {
            e.removeAttribute(t)
        }, hasClass: Ct, css: function (e, t, n) {
            return t = ht(t), v(n) ? void(e.style[t] = n) : e.style[t]
        }, attr: function (e, t, r) {
            var i = Kr(t);
            if (Vi[i]) {
                if (!v(r))return e[t] || (e.attributes.getNamedItem(t) || p).specified ? i : n;
                r ? (e[t] = !0, e.setAttribute(t, i)) : (e[t] = !1, e.removeAttribute(i))
            } else if (v(r))e.setAttribute(t, r); else if (e.getAttribute) {
                var o = e.getAttribute(t, 2);
                return null === o ? n : o
            }
        }, prop: function (e, t, n) {
            return v(n) ? void(e[t] = n) : e[t]
        }, text: function () {
            function e(e, t) {
                if ($(t)) {
                    var n = e.nodeType;
                    return n === bi || n === Ei ? e.textContent : ""
                }
                e.textContent = t
            }

            return e.$dv = "", e
        }(), val: function (e, t) {
            if ($(t)) {
                if (e.multiple && "select" === H(e)) {
                    var n = [];
                    return o(e.options, function (e) {
                        e.selected && n.push(e.value || e.text)
                    }), 0 === n.length ? null : n
                }
                return e.value
            }
            e.value = t
        }, html: function (e, t) {
            return $(t) ? e.innerHTML : (wt(e, !0), void(e.innerHTML = t))
        }, empty: Ot
    }, function (e, t) {
        Et.prototype[t] = function (t, r) {
            var i, o, a = this.length;
            if (e !== Ot && (2 == e.length && e !== Ct && e !== _t ? t : r) === n) {
                if (b(t)) {
                    for (i = 0; a > i; i++)if (e === kt)e(this[i], t); else for (o in t)e(this[i], o, t[o]);
                    return this
                }
                for (var c = e.$dv, s = c === n ? Math.min(a, 1) : a, l = 0; s > l; l++) {
                    var u = e(this[l], t, r);
                    c = c ? c + u : u
                }
                return c
            }
            for (i = 0; a > i; i++)e(this[i], t, r);
            return this
        }
    }), o({
        removeData: At, on: function Ya(e, t, n, r) {
            if (v(r))throw Di("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
            if ($t(e)) {
                var i = Mt(e, !0), o = i.events, a = i.handle;
                a || (a = i.handle = jt(e, o));
                for (var c = t.indexOf(" ") >= 0 ? t.split(" ") : [t], s = c.length; s--;) {
                    t = c[s];
                    var l = o[t];
                    l || (o[t] = [], "mouseenter" === t || "mouseleave" === t ? Ya(e, _i[t], function (e) {
                        var n = this, r = e.relatedTarget;
                        (!r || r !== n && !n.contains(r)) && a(e, t)
                    }) : "$destroy" !== t && Ci(e, t, a), l = o[t]), l.push(n)
                }
            }
        }, off: xt, one: function (e, t, n) {
            e = ti(e), e.on(t, function r() {
                e.off(t, n), e.off(t, r)
            }), e.on(t, n)
        }, replaceWith: function (e, t) {
            var n, r = e.parentNode;
            wt(e), o(new Et(t), function (t) {
                n ? r.insertBefore(t, n.nextSibling) : r.replaceChild(t, e), n = t
            })
        }, children: function (e) {
            var t = [];
            return o(e.childNodes, function (e) {
                e.nodeType === bi && t.push(e)
            }), t
        }, contents: function (e) {
            return e.contentDocument || e.childNodes || []
        }, append: function (e, t) {
            var n = e.nodeType;
            if (n === bi || n === xi) {
                t = new Et(t);
                for (var r = 0, i = t.length; i > r; r++) {
                    var o = t[r];
                    e.appendChild(o)
                }
            }
        }, prepend: function (e, t) {
            if (e.nodeType === bi) {
                var n = e.firstChild;
                o(new Et(t), function (t) {
                    e.insertBefore(t, n)
                })
            }
        }, wrap: function (e, t) {
            t = ti(t).eq(0).clone()[0];
            var n = e.parentNode;
            n && n.replaceChild(t, e), t.appendChild(e)
        }, remove: Ht, detach: function (e) {
            Ht(e, !0)
        }, after: function (e, t) {
            var n = e, r = e.parentNode;
            t = new Et(t);
            for (var i = 0, o = t.length; o > i; i++) {
                var a = t[i];
                r.insertBefore(a, n.nextSibling), n = a
            }
        }, addClass: St, removeClass: Tt, toggleClass: function (e, t, n) {
            t && o(t.split(" "), function (t) {
                var r = n;
                $(r) && (r = !Ct(e, t)), (r ? St : Tt)(e, t)
            })
        }, parent: function (e) {
            var t = e.parentNode;
            return t && t.nodeType !== xi ? t : null
        }, next: function (e) {
            return e.nextElementSibling
        }, find: function (e, t) {
            return e.getElementsByTagName ? e.getElementsByTagName(t) : []
        }, clone: yt, triggerHandler: function (e, t, n) {
            var r, i, a, c = t.type || t, s = Mt(e), l = s && s.events, u = l && l[c];
            u && (r = {
                preventDefault: function () {
                    this.defaultPrevented = !0
                }, isDefaultPrevented: function () {
                    return this.defaultPrevented === !0
                }, stopImmediatePropagation: function () {
                    this.immediatePropagationStopped = !0
                }, isImmediatePropagationStopped: function () {
                    return this.immediatePropagationStopped === !0
                }, stopPropagation: p, type: c, target: e
            }, t.type && (r = d(r, t)), i = P(u), a = n ? [r].concat(n) : [r], o(i, function (t) {
                r.isImmediatePropagationStopped() || t.apply(e, a)
            }))
        }
    }, function (e, t) {
        Et.prototype[t] = function (t, n, r) {
            for (var i, o = 0, a = this.length; a > o; o++)$(i) ? (i = e(this[o], t, n, r), v(i) && (i = ti(i))) : Nt(i, e(this[o], t, n, r));
            return v(i) ? i : this
        }, Et.prototype.bind = Et.prototype.on, Et.prototype.unbind = Et.prototype.off
    }), qt.prototype = {
        put: function (e, t) {
            this[Ft(e, this.nextUid)] = t
        }, get: function (e) {
            return this[Ft(e, this.nextUid)]
        }, remove: function (e) {
            var t = this[e = Ft(e, this.nextUid)];
            return delete this[e], t
        }
    };
    var Li = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, Ui = /,/, Bi = /^\s*(_?)(\S+?)\1\s*$/, zi = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Gi = r("$injector");
    Bt.$$annotate = Ut;
    var Yi = r("$animate"), Wi = ["$provide", function (e) {
        this.$$selectors = {}, this.register = function (t, n) {
            var r = t + "-animation";
            if (t && "." != t.charAt(0))throw Yi("notcsel", "Expecting class selector starting with '.' got '{0}'.", t);
            this.$$selectors[t.substr(1)] = r, e.factory(r, n)
        }, this.classNameFilter = function (e) {
            return 1 === arguments.length && (this.$$classNameFilter = e instanceof RegExp ? e : null), this.$$classNameFilter
        }, this.$get = ["$$q", "$$asyncCallback", "$rootScope", function (e, t, n) {
            function r(t) {
                var r, i = e.defer();
                return i.promise.$$cancelFn = function () {
                    r && r()
                }, n.$$postDigest(function () {
                    r = t(function () {
                        i.resolve()
                    })
                }), i.promise
            }

            function i(e, t) {
                var n = [], r = [], i = lt();
                return o((e.attr("class") || "").split(/\s+/), function (e) {
                    i[e] = !0
                }), o(t, function (e, t) {
                    var o = i[t];
                    e === !1 && o ? r.push(t) : e !== !0 || o || n.push(t)
                }), n.length + r.length > 0 && [n.length ? n : null, r.length ? r : null]
            }

            function a(e, t, n) {
                for (var r = 0, i = t.length; i > r; ++r) {
                    var o = t[r];
                    e[o] = n
                }
            }

            function c() {
                return l || (l = e.defer(), t(function () {
                    l.resolve(), l = null
                })), l.promise
            }

            function s(e, t) {
                if (li.isObject(t)) {
                    var n = d(t.from || {}, t.to || {});
                    e.css(n)
                }
            }

            var l;
            return {
                animate: function (e, t, n) {
                    return s(e, {from: t, to: n}), c()
                }, enter: function (e, t, n, r) {
                    return s(e, r), n ? n.after(e) : t.prepend(e), c()
                }, leave: function (e, t) {
                    return s(e, t), e.remove(), c()
                }, move: function (e, t, n, r) {
                    return this.enter(e, t, n, r)
                }, addClass: function (e, t, n) {
                    return this.setClass(e, t, [], n)
                }, $$addClassImmediately: function (e, t, n) {
                    return e = ti(e), t = E(t) ? t : fi(t) ? t.join(" ") : "", o(e, function (e) {
                        St(e, t)
                    }), s(e, n), c()
                }, removeClass: function (e, t, n) {
                    return this.setClass(e, [], t, n)
                }, $$removeClassImmediately: function (e, t, n) {
                    return e = ti(e), t = E(t) ? t : fi(t) ? t.join(" ") : "", o(e, function (e) {
                        Tt(e, t)
                    }), s(e, n), c()
                }, setClass: function (e, t, n, o) {
                    var c = this, s = "$$animateClasses", l = !1;
                    e = ti(e);
                    var u = e.data(s);
                    u ? o && u.options && (u.options = li.extend(u.options || {}, o)) : (u = {
                        classes: {},
                        options: o
                    }, l = !0);
                    var d = u.classes;
                    return t = fi(t) ? t : t.split(" "), n = fi(n) ? n : n.split(" "), a(d, t, !0), a(d, n, !1), l && (u.promise = r(function (t) {
                        var n = e.data(s);
                        if (e.removeData(s), n) {
                            var r = i(e, n.classes);
                            r && c.$$setClassImmediately(e, r[0], r[1], n.options)
                        }
                        t()
                    }), e.data(s, u)), u.promise
                }, $$setClassImmediately: function (e, t, n, r) {
                    return t && this.$$addClassImmediately(e, t), n && this.$$removeClassImmediately(e, n), s(e, r), c()
                }, enabled: p, cancel: p
            }
        }]
    }], Ki = r("$compile");
    Zt.$inject = ["$provide", "$$sanitizeUriProvider"];
    var Xi = /^((?:x|data)[\:\-_])/i, Zi = r("$controller"), Ji = "application/json", Qi = {"Content-Type": Ji + ";charset=utf-8"}, eo = /^\[|^\{(?!\{)/, to = {
        "[": /]$/,
        "{": /}$/
    }, no = /^\)\]\}',?\n/, ro = r("$interpolate"), io = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, oo = {
        http: 80,
        https: 443,
        ftp: 21
    }, ao = r("$location"), co = {
        $$html5: !1, $$replace: !1, absUrl: Sn("$$absUrl"), url: function (e) {
            if ($(e))return this.$$url;
            var t = io.exec(e);
            return (t[1] || "" === e) && this.path(decodeURIComponent(t[1])), (t[2] || t[1] || "" === e) && this.search(t[3] || ""), this.hash(t[5] || ""), this
        }, protocol: Sn("$$protocol"), host: Sn("$$host"), port: Sn("$$port"), path: Nn("$$path", function (e) {
            return e = null !== e ? e.toString() : "", "/" == e.charAt(0) ? e : "/" + e
        }), search: function (e, t) {
            switch (arguments.length) {
                case 0:
                    return this.$$search;
                case 1:
                    if (E(e) || y(e))e = e.toString(), this.$$search = Y(e); else {
                        if (!b(e))throw ao("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                        e = I(e, {}), o(e, function (t, n) {
                            null == t && delete e[n]
                        }), this.$$search = e
                    }
                    break;
                default:
                    $(t) || null === t ? delete this.$$search[e] : this.$$search[e] = t
            }
            return this.$$compose(), this
        }, hash: Nn("$$hash", function (e) {
            return null !== e ? e.toString() : ""
        }), replace: function () {
            return this.$$replace = !0, this
        }
    };
    o([Tn, Cn, kn], function (e) {
        e.prototype = Object.create(co), e.prototype.state = function (t) {
            if (!arguments.length)return this.$$state;
            if (e !== kn || !this.$$html5)throw ao("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
            return this.$$state = $(t) ? null : t, this
        }
    });
    var so = r("$parse"), lo = Function.prototype.call, uo = Function.prototype.apply, fo = Function.prototype.bind, mo = lt();
    o({
        "null": function () {
            return null
        }, "true": function () {
            return !0
        }, "false": function () {
            return !1
        }, undefined: function () {
        }
    }, function (e, t) {
        e.constant = e.literal = e.sharedGetter = !0, mo[t] = e
    }), mo["this"] = function (e) {
        return e
    }, mo["this"].sharedGetter = !0;
    var po = d(lt(), {
        "+": function (e, t, r, i) {
            return r = r(e, t), i = i(e, t), v(r) ? v(i) ? r + i : r : v(i) ? i : n
        }, "-": function (e, t, n, r) {
            return n = n(e, t), r = r(e, t), (v(n) ? n : 0) - (v(r) ? r : 0)
        }, "*": function (e, t, n, r) {
            return n(e, t) * r(e, t)
        }, "/": function (e, t, n, r) {
            return n(e, t) / r(e, t)
        }, "%": function (e, t, n, r) {
            return n(e, t) % r(e, t)
        }, "===": function (e, t, n, r) {
            return n(e, t) === r(e, t)
        }, "!==": function (e, t, n, r) {
            return n(e, t) !== r(e, t)
        }, "==": function (e, t, n, r) {
            return n(e, t) == r(e, t)
        }, "!=": function (e, t, n, r) {
            return n(e, t) != r(e, t)
        }, "<": function (e, t, n, r) {
            return n(e, t) < r(e, t)
        }, ">": function (e, t, n, r) {
            return n(e, t) > r(e, t)
        }, "<=": function (e, t, n, r) {
            return n(e, t) <= r(e, t)
        }, ">=": function (e, t, n, r) {
            return n(e, t) >= r(e, t)
        }, "&&": function (e, t, n, r) {
            return n(e, t) && r(e, t)
        }, "||": function (e, t, n, r) {
            return n(e, t) || r(e, t)
        }, "!": function (e, t, n) {
            return !n(e, t)
        }, "=": !0, "|": !0
    }), ho = {n: "\n", f: "\f", r: "\r", t: "	", v: "", "'": "'", '"': '"'}, go = function (e) {
        this.options = e
    };
    go.prototype = {
        constructor: go, lex: function (e) {
            for (this.text = e, this.index = 0, this.tokens = []; this.index < this.text.length;) {
                var t = this.text.charAt(this.index);
                if ('"' === t || "'" === t)this.readString(t); else if (this.isNumber(t) || "." === t && this.isNumber(this.peek()))this.readNumber(); else if (this.isIdent(t))this.readIdent(); else if (this.is(t, "(){}[].,;:?"))this.tokens.push({
                    index: this.index,
                    text: t
                }), this.index++; else if (this.isWhitespace(t))this.index++; else {
                    var n = t + this.peek(), r = n + this.peek(2), i = po[t], o = po[n], a = po[r];
                    if (i || o || a) {
                        var c = a ? r : o ? n : t;
                        this.tokens.push({index: this.index, text: c, operator: !0}), this.index += c.length
                    } else this.throwError("Unexpected next character ", this.index, this.index + 1)
                }
            }
            return this.tokens
        }, is: function (e, t) {
            return -1 !== t.indexOf(e)
        }, peek: function (e) {
            var t = e || 1;
            return this.index + t < this.text.length ? this.text.charAt(this.index + t) : !1
        }, isNumber: function (e) {
            return e >= "0" && "9" >= e && "string" == typeof e
        }, isWhitespace: function (e) {
            return " " === e || "\r" === e || "	" === e || "\n" === e || "" === e || " " === e
        }, isIdent: function (e) {
            return e >= "a" && "z" >= e || e >= "A" && "Z" >= e || "_" === e || "$" === e
        }, isExpOperator: function (e) {
            return "-" === e || "+" === e || this.isNumber(e)
        }, throwError: function (e, t, n) {
            n = n || this.index;
            var r = v(t) ? "s " + t + "-" + this.index + " [" + this.text.substring(t, n) + "]" : " " + n;
            throw so("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", e, r, this.text)
        }, readNumber: function () {
            for (var e = "", t = this.index; this.index < this.text.length;) {
                var n = Kr(this.text.charAt(this.index));
                if ("." == n || this.isNumber(n))e += n; else {
                    var r = this.peek();
                    if ("e" == n && this.isExpOperator(r))e += n; else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" == e.charAt(e.length - 1))e += n; else {
                        if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" != e.charAt(e.length - 1))break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            this.tokens.push({index: t, text: e, constant: !0, value: Number(e)})
        }, readIdent: function () {
            for (var e = this.index; this.index < this.text.length;) {
                var t = this.text.charAt(this.index);
                if (!this.isIdent(t) && !this.isNumber(t))break;
                this.index++
            }
            this.tokens.push({index: e, text: this.text.slice(e, this.index), identifier: !0})
        }, readString: function (e) {
            var t = this.index;
            this.index++;
            for (var n = "", r = e, i = !1; this.index < this.text.length;) {
                var o = this.text.charAt(this.index);
                if (r += o, i) {
                    if ("u" === o) {
                        var a = this.text.substring(this.index + 1, this.index + 5);
                        a.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + a + "]"), this.index += 4, n += String.fromCharCode(parseInt(a, 16))
                    } else {
                        var c = ho[o];
                        n += c || o
                    }
                    i = !1
                } else if ("\\" === o)i = !0; else {
                    if (o === e)return this.index++, void this.tokens.push({index: t, text: r, constant: !0, value: n});
                    n += o
                }
                this.index++
            }
            this.throwError("Unterminated quote", t)
        }
    };
    var $o = function (e, t, n) {
        this.lexer = e, this.$filter = t, this.options = n
    };
    $o.ZERO = d(function () {
        return 0
    }, {sharedGetter: !0, constant: !0}), $o.prototype = {
        constructor: $o, parse: function (e) {
            this.text = e, this.tokens = this.lexer.lex(e);
            var t = this.statements();
            return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), t.literal = !!t.literal, t.constant = !!t.constant, t
        }, primary: function () {
            var e;
            this.expect("(") ? (e = this.filterChain(), this.consume(")")) : this.expect("[") ? e = this.arrayDeclaration() : this.expect("{") ? e = this.object() : this.peek().identifier && this.peek().text in mo ? e = mo[this.consume().text] : this.peek().identifier ? e = this.identifier() : this.peek().constant ? e = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var t, n; t = this.expect("(", "[", ".");)"(" === t.text ? (e = this.functionCall(e, n), n = null) : "[" === t.text ? (n = e, e = this.objectIndex(e)) : "." === t.text ? (n = e, e = this.fieldAccess(e)) : this.throwError("IMPOSSIBLE");
            return e
        }, throwError: function (e, t) {
            throw so("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", t.text, e, t.index + 1, this.text, this.text.substring(t.index))
        }, peekToken: function () {
            if (0 === this.tokens.length)throw so("ueoe", "Unexpected end of expression: {0}", this.text);
            return this.tokens[0]
        }, peek: function (e, t, n, r) {
            return this.peekAhead(0, e, t, n, r)
        }, peekAhead: function (e, t, n, r, i) {
            if (this.tokens.length > e) {
                var o = this.tokens[e], a = o.text;
                if (a === t || a === n || a === r || a === i || !t && !n && !r && !i)return o
            }
            return !1
        }, expect: function (e, t, n, r) {
            var i = this.peek(e, t, n, r);
            return i ? (this.tokens.shift(), i) : !1
        }, consume: function (e) {
            if (0 === this.tokens.length)throw so("ueoe", "Unexpected end of expression: {0}", this.text);
            var t = this.expect(e);
            return t || this.throwError("is unexpected, expecting [" + e + "]", this.peek()), t
        }, unaryFn: function (e, t) {
            var n = po[e];
            return d(function (e, r) {
                return n(e, r, t)
            }, {constant: t.constant, inputs: [t]})
        }, binaryFn: function (e, t, n, r) {
            var i = po[t];
            return d(function (t, r) {
                return i(t, r, e, n)
            }, {constant: e.constant && n.constant, inputs: !r && [e, n]})
        }, identifier: function () {
            for (var e = this.consume().text; this.peek(".") && this.peekAhead(1).identifier && !this.peekAhead(2, "(");)e += this.consume().text + this.consume().text;
            return qn(e, this.options, this.text)
        }, constant: function () {
            var e = this.consume().value;
            return d(function () {
                return e
            }, {constant: !0, literal: !0})
        }, statements: function () {
            for (var e = []; ;)if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && e.push(this.filterChain()), !this.expect(";"))return 1 === e.length ? e[0] : function (t, n) {
                for (var r, i = 0, o = e.length; o > i; i++)r = e[i](t, n);
                return r
            }
        }, filterChain: function () {
            for (var e, t = this.expression(); e = this.expect("|");)t = this.filter(t);
            return t
        }, filter: function (e) {
            var t, r, i = this.$filter(this.consume().text);
            if (this.peek(":"))for (t = [], r = []; this.expect(":");)t.push(this.expression());
            var o = [e].concat(t || []);
            return d(function (o, a) {
                var c = e(o, a);
                if (r) {
                    r[0] = c;
                    for (var s = t.length; s--;)r[s + 1] = t[s](o, a);
                    return i.apply(n, r)
                }
                return i(c)
            }, {constant: !i.$stateful && o.every(In), inputs: !i.$stateful && o})
        }, expression: function () {
            return this.assignment()
        }, assignment: function () {
            var e, t, n = this.ternary();
            return (t = this.expect("=")) ? (n.assign || this.throwError("implies assignment but [" + this.text.substring(0, t.index) + "] can not be assigned to", t), e = this.ternary(), d(function (t, r) {
                return n.assign(t, e(t, r), r)
            }, {inputs: [n, e]})) : n
        }, ternary: function () {
            var e, t, n = this.logicalOR();
            if ((t = this.expect("?")) && (e = this.assignment(), this.consume(":"))) {
                var r = this.assignment();
                return d(function (t, i) {
                    return n(t, i) ? e(t, i) : r(t, i)
                }, {constant: n.constant && e.constant && r.constant})
            }
            return n
        }, logicalOR: function () {
            for (var e, t = this.logicalAND(); e = this.expect("||");)t = this.binaryFn(t, e.text, this.logicalAND(), !0);
            return t
        }, logicalAND: function () {
            for (var e, t = this.equality(); e = this.expect("&&");)t = this.binaryFn(t, e.text, this.equality(), !0);
            return t
        }, equality: function () {
            for (var e, t = this.relational(); e = this.expect("==", "!=", "===", "!==");)t = this.binaryFn(t, e.text, this.relational());
            return t
        }, relational: function () {
            for (var e, t = this.additive(); e = this.expect("<", ">", "<=", ">=");)t = this.binaryFn(t, e.text, this.additive());
            return t
        }, additive: function () {
            for (var e, t = this.multiplicative(); e = this.expect("+", "-");)t = this.binaryFn(t, e.text, this.multiplicative());
            return t
        }, multiplicative: function () {
            for (var e, t = this.unary(); e = this.expect("*", "/", "%");)t = this.binaryFn(t, e.text, this.unary());
            return t
        }, unary: function () {
            var e;
            return this.expect("+") ? this.primary() : (e = this.expect("-")) ? this.binaryFn($o.ZERO, e.text, this.unary()) : (e = this.expect("!")) ? this.unaryFn(e.text, this.unary()) : this.primary()
        }, fieldAccess: function (e) {
            var t = this.identifier();
            return d(function (r, i, o) {
                var a = o || e(r, i);
                return null == a ? n : t(a)
            }, {
                assign: function (n, r, i) {
                    var o = e(n, i);
                    return o || e.assign(n, o = {}, i), t.assign(o, r)
                }
            })
        }, objectIndex: function (e) {
            var t = this.text, r = this.expression();
            return this.consume("]"), d(function (i, o) {
                var a, c = e(i, o), s = r(i, o);
                return On(s, t), c ? a = Hn(c[s], t) : n
            }, {
                assign: function (n, i, o) {
                    var a = On(r(n, o), t), c = Hn(e(n, o), t);
                    return c || e.assign(n, c = {}, o), c[a] = i
                }
            })
        }, functionCall: function (e, t) {
            var r = [];
            if (")" !== this.peekToken().text)do r.push(this.expression()); while (this.expect(","));
            this.consume(")");
            var i = this.text, o = r.length ? [] : null;
            return function (a, c) {
                var s = t ? t(a, c) : v(t) ? n : a, l = e(a, c, s) || p;
                if (o)for (var u = r.length; u--;)o[u] = Hn(r[u](a, c), i);
                Hn(s, i), Rn(l, i);
                var d = l.apply ? l.apply(s, o) : l(o[0], o[1], o[2], o[3], o[4]);
                return o && (o.length = 0), Hn(d, i)
            }
        }, arrayDeclaration: function () {
            var e = [];
            if ("]" !== this.peekToken().text)do {
                if (this.peek("]"))break;
                e.push(this.expression())
            } while (this.expect(","));
            return this.consume("]"), d(function (t, n) {
                for (var r = [], i = 0, o = e.length; o > i; i++)r.push(e[i](t, n));
                return r
            }, {literal: !0, constant: e.every(In), inputs: e})
        }, object: function () {
            var e = [], t = [];
            if ("}" !== this.peekToken().text)do {
                if (this.peek("}"))break;
                var n = this.consume();
                n.constant ? e.push(n.value) : n.identifier ? e.push(n.text) : this.throwError("invalid key", n), this.consume(":"), t.push(this.expression())
            } while (this.expect(","));
            return this.consume("}"), d(function (n, r) {
                for (var i = {}, o = 0, a = t.length; a > o; o++)i[e[o]] = t[o](n, r);
                return i
            }, {literal: !0, constant: t.every(In), inputs: t})
        }
    };
    var vo = lt(), bo = lt(), Eo = Object.prototype.valueOf, yo = r("$sce"), wo = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
    }, Ki = r("$compile"), xo = t.createElement("a"), Ao = ir(e.location.href);
    cr.$inject = ["$provide"], dr.$inject = ["$locale"], fr.$inject = ["$locale"];
    var Mo = ".", ko = {
        yyyy: hr("FullYear", 4),
        yy: hr("FullYear", 2, 0, !0),
        y: hr("FullYear", 1),
        MMMM: gr("Month"),
        MMM: gr("Month", !0),
        MM: hr("Month", 2, 1),
        M: hr("Month", 1, 1),
        dd: hr("Date", 2),
        d: hr("Date", 1),
        HH: hr("Hours", 2),
        H: hr("Hours", 1),
        hh: hr("Hours", 2, -12),
        h: hr("Hours", 1, -12),
        mm: hr("Minutes", 2),
        m: hr("Minutes", 1),
        ss: hr("Seconds", 2),
        s: hr("Seconds", 1),
        sss: hr("Milliseconds", 3),
        EEEE: gr("Day"),
        EEE: gr("Day", !0),
        a: yr,
        Z: $r,
        ww: Er(2),
        w: Er(1),
        G: wr,
        GG: wr,
        GGG: wr,
        GGGG: xr
    }, Co = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/, To = /^\-?\d+$/;
    Ar.$inject = ["$locale"];
    var So = g(Kr), No = g(Zr);
    Cr.$inject = ["$parse"];
    var _o = g({
        restrict: "E", compile: function (e, t) {
            return t.href || t.xlinkHref || t.name ? void 0 : function (e, t) {
                if ("a" === t[0].nodeName.toLowerCase()) {
                    var n = "[object SVGAnimatedString]" === ci.call(t.prop("href")) ? "xlink:href" : "href";
                    t.on("click", function (e) {
                        t.attr(n) || e.preventDefault()
                    })
                }
            }
        }
    }), Do = {};
    o(Vi, function (e, t) {
        if ("multiple" != e) {
            var n = Jt("ng-" + t);
            Do[n] = function () {
                return {
                    restrict: "A", priority: 100, link: function (e, r, i) {
                        e.$watch(i[n], function (e) {
                            i.$set(t, !!e)
                        })
                    }
                }
            }
        }
    }), o(qi, function (e, t) {
        Do[t] = function () {
            return {
                priority: 100, link: function (e, n, r) {
                    if ("ngPattern" === t && "/" == r.ngPattern.charAt(0)) {
                        var i = r.ngPattern.match(Yr);
                        if (i)return void r.$set("ngPattern", new RegExp(i[1], i[2]))
                    }
                    e.$watch(r[t], function (e) {
                        r.$set(t, e)
                    })
                }
            }
        }
    }), o(["src", "srcset", "href"], function (e) {
        var t = Jt("ng-" + e);
        Do[t] = function () {
            return {
                priority: 99, link: function (n, r, i) {
                    var o = e, a = e;
                    "href" === e && "[object SVGAnimatedString]" === ci.call(r.prop("href")) && (a = "xlinkHref", i.$attr[a] = "xlink:href", o = null), i.$observe(t, function (t) {
                        return t ? (i.$set(a, t), void(ei && o && r.prop(o, i[a]))) : void("href" === e && i.$set(a, null))
                    })
                }
            }
        }
    });
    var Oo = {
        $addControl: p,
        $$renameControl: Sr,
        $removeControl: p,
        $setValidity: p,
        $setDirty: p,
        $setPristine: p,
        $setSubmitted: p
    }, Ho = "ng-submitted";
    Nr.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var Ro = function (e) {
        return ["$timeout", function (t) {
            var r = {
                name: "form", restrict: e ? "EAC" : "E", controller: Nr, compile: function (r, i) {
                    r.addClass(ha).addClass(ma);
                    var o = i.name ? "name" : e && i.ngForm ? "ngForm" : !1;
                    return {
                        pre: function (e, r, i, a) {
                            if (!("action"in i)) {
                                var c = function (t) {
                                    e.$apply(function () {
                                        a.$commitViewValue(), a.$setSubmitted()
                                    }), t.preventDefault()
                                };
                                Ci(r[0], "submit", c), r.on("$destroy", function () {
                                    t(function () {
                                        Ti(r[0], "submit", c)
                                    }, 0, !1)
                                })
                            }
                            var s = a.$$parentForm;
                            o && (Pn(e, null, a.$name, a, a.$name), i.$observe(o, function (t) {
                                a.$name !== t && (Pn(e, null, a.$name, n, a.$name), s.$$renameControl(a, t), Pn(e, null, a.$name, a, a.$name))
                            })), r.on("$destroy", function () {
                                s.$removeControl(a), o && Pn(e, null, i[o], n, a.$name), d(a, Oo)
                            })
                        }
                    }
                }
            };
            return r
        }]
    }, Io = Ro(), Po = Ro(!0), jo = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/, Vo = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, Fo = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, qo = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, Lo = /^(\d{4})-(\d{2})-(\d{2})$/, Uo = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Bo = /^(\d{4})-W(\d\d)$/, zo = /^(\d{4})-(\d\d)$/, Go = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Yo = {
        text: Dr,
        date: Ir("date", Lo, Rr(Lo, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
        "datetime-local": Ir("datetimelocal", Uo, Rr(Uo, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
        time: Ir("time", Go, Rr(Go, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
        week: Ir("week", Bo, Hr, "yyyy-Www"),
        month: Ir("month", zo, Rr(zo, ["yyyy", "MM"]), "yyyy-MM"),
        number: jr,
        url: Vr,
        email: Fr,
        radio: qr,
        checkbox: Ur,
        hidden: p,
        button: p,
        submit: p,
        reset: p,
        file: p
    }, Wo = ["$browser", "$sniffer", "$filter", "$parse", function (e, t, n, r) {
        return {
            restrict: "E", require: ["?ngModel"], link: {
                pre: function (i, o, a, c) {
                    c[0] && (Yo[Kr(a.type)] || Yo.text)(i, o, a, c[0], t, e, n, r)
                }
            }
        }
    }], Ko = /^(true|false|\d+)$/, Xo = function () {
        return {
            restrict: "A", priority: 100, compile: function (e, t) {
                return Ko.test(t.ngValue) ? function (e, t, n) {
                    n.$set("value", e.$eval(n.ngValue))
                } : function (e, t, n) {
                    e.$watch(n.ngValue, function (e) {
                        n.$set("value", e)
                    })
                }
            }
        }
    }, Zo = ["$compile", function (e) {
        return {
            restrict: "AC", compile: function (t) {
                return e.$$addBindingClass(t), function (t, r, i) {
                    e.$$addBindingInfo(r, i.ngBind), r = r[0], t.$watch(i.ngBind, function (e) {
                        r.textContent = e === n ? "" : e
                    })
                }
            }
        }
    }], Jo = ["$interpolate", "$compile", function (e, t) {
        return {
            compile: function (r) {
                return t.$$addBindingClass(r), function (r, i, o) {
                    var a = e(i.attr(o.$attr.ngBindTemplate));
                    t.$$addBindingInfo(i, a.expressions), i = i[0], o.$observe("ngBindTemplate", function (e) {
                        i.textContent = e === n ? "" : e
                    })
                }
            }
        }
    }], Qo = ["$sce", "$parse", "$compile", function (e, t, n) {
        return {
            restrict: "A", compile: function (r, i) {
                var o = t(i.ngBindHtml), a = t(i.ngBindHtml, function (e) {
                    return (e || "").toString()
                });
                return n.$$addBindingClass(r), function (t, r, i) {
                    n.$$addBindingInfo(r, i.ngBindHtml), t.$watch(a, function () {
                        r.html(e.getTrustedHtml(o(t)) || "")
                    })
                }
            }
        }
    }], ea = g({
        restrict: "A", require: "ngModel", link: function (e, t, n, r) {
            r.$viewChangeListeners.push(function () {
                e.$eval(n.ngChange)
            })
        }
    }), ta = Br("", !0), na = Br("Odd", 0), ra = Br("Even", 1), ia = Tr({
        compile: function (e, t) {
            t.$set("ngCloak", n), e.removeClass("ng-cloak")
        }
    }), oa = [function () {
        return {restrict: "A", scope: !0, controller: "@", priority: 500}
    }], aa = {}, ca = {blur: !0, focus: !0};
    o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (e) {
        var t = Jt("ng-" + e);
        aa[t] = ["$parse", "$rootScope", function (n, r) {
            return {
                restrict: "A", compile: function (i, o) {
                    var a = n(o[t], null, !0);
                    return function (t, n) {
                        n.on(e, function (n) {
                            var i = function () {
                                a(t, {$event: n})
                            };
                            ca[e] && r.$$phase ? t.$evalAsync(i) : t.$apply(i)
                        })
                    }
                }
            }
        }]
    });
    var sa = ["$animate", function (e) {
        return {
            multiElement: !0,
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            $$tlb: !0,
            link: function (n, r, i, o, a) {
                var c, s, l;
                n.$watch(i.ngIf, function (n) {
                    n ? s || a(function (n, o) {
                        s = o, n[n.length++] = t.createComment(" end ngIf: " + i.ngIf + " "), c = {clone: n}, e.enter(n, r.parent(), r)
                    }) : (l && (l.remove(), l = null), s && (s.$destroy(), s = null), c && (l = st(c.clone), e.leave(l).then(function () {
                        l = null
                    }), c = null))
                })
            }
        }
    }], la = ["$templateRequest", "$anchorScroll", "$animate", "$sce", function (e, t, n, r) {
        return {
            restrict: "ECA",
            priority: 400,
            terminal: !0,
            transclude: "element",
            controller: li.noop,
            compile: function (i, o) {
                var a = o.ngInclude || o.src, c = o.onload || "", s = o.autoscroll;
                return function (i, o, l, u, d) {
                    var f, m, p, h = 0, g = function () {
                        m && (m.remove(), m = null), f && (f.$destroy(), f = null), p && (n.leave(p).then(function () {
                            m = null
                        }), m = p, p = null)
                    };
                    i.$watch(r.parseAsResourceUrl(a), function (r) {
                        var a = function () {
                            !v(s) || s && !i.$eval(s) || t()
                        }, l = ++h;
                        r ? (e(r, !0).then(function (e) {
                            if (l === h) {
                                var t = i.$new();
                                u.template = e;
                                var s = d(t, function (e) {
                                    g(), n.enter(e, null, o).then(a)
                                });
                                f = t, p = s, f.$emit("$includeContentLoaded", r), i.$eval(c)
                            }
                        }, function () {
                            l === h && (g(), i.$emit("$includeContentError", r))
                        }), i.$emit("$includeContentRequested", r)) : (g(), u.template = null)
                    })
                }
            }
        }
    }], ua = ["$compile", function (e) {
        return {
            restrict: "ECA", priority: -400, require: "ngInclude", link: function (n, r, i, o) {
                return /SVG/.test(r[0].toString()) ? (r.empty(), void e(vt(o.template, t).childNodes)(n, function (e) {
                    r.append(e)
                }, {futureParentElement: r})) : (r.html(o.template), void e(r.contents())(n))
            }
        }
    }], da = Tr({
        priority: 450, compile: function () {
            return {
                pre: function (e, t, n) {
                    e.$eval(n.ngInit)
                }
            }
        }
    }), fa = function () {
        return {
            restrict: "A", priority: 100, require: "ngModel", link: function (e, t, r, i) {
                var a = t.attr(r.$attr.ngList) || ", ", c = "false" !== r.ngTrim, s = c ? mi(a) : a, l = function (e) {
                    if (!$(e)) {
                        var t = [];
                        return e && o(e.split(s), function (e) {
                            e && t.push(c ? mi(e) : e)
                        }), t
                    }
                };
                i.$parsers.push(l), i.$formatters.push(function (e) {
                    return fi(e) ? e.join(a) : n
                }), i.$isEmpty = function (e) {
                    return !e || !e.length
                }
            }
        }
    }, ma = "ng-valid", pa = "ng-invalid", ha = "ng-pristine", ga = "ng-dirty", $a = "ng-untouched", va = "ng-touched", ba = "ng-pending", Ea = new r("ngModel"), ya = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (e, t, r, i, a, c, s, l, u, d) {
        this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = n, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = n, this.$name = d(r.name || "", !1)(e);
        var f, m = a(r.ngModel), h = m.assign, g = m, b = h, E = null, w = this;
        this.$$setOptions = function (e) {
            if (w.$options = e, e && e.getterSetter) {
                var t = a(r.ngModel + "()"), n = a(r.ngModel + "($$$p)");
                g = function (e) {
                    var n = m(e);
                    return x(n) && (n = t(e)), n
                }, b = function (e) {
                    x(m(e)) ? n(e, {$$$p: w.$modelValue}) : h(e, w.$modelValue)
                }
            } else if (!m.assign)throw Ea("nonassign", "Expression '{0}' is non-assignable. Element: {1}", r.ngModel, z(i))
        }, this.$render = p, this.$isEmpty = function (e) {
            return $(e) || "" === e || null === e || e !== e
        };
        var A = i.inheritedData("$formController") || Oo, M = 0;
        zr({
            ctrl: this, $element: i, set: function (e, t) {
                e[t] = !0
            }, unset: function (e, t) {
                delete e[t]
            }, parentForm: A, $animate: c
        }), this.$setPristine = function () {
            w.$dirty = !1, w.$pristine = !0, c.removeClass(i, ga), c.addClass(i, ha)
        }, this.$setDirty = function () {
            w.$dirty = !0, w.$pristine = !1, c.removeClass(i, ha), c.addClass(i, ga), A.$setDirty()
        }, this.$setUntouched = function () {
            w.$touched = !1, w.$untouched = !0, c.setClass(i, $a, va)
        }, this.$setTouched = function () {
            w.$touched = !0, w.$untouched = !1, c.setClass(i, va, $a)
        }, this.$rollbackViewValue = function () {
            s.cancel(E), w.$viewValue = w.$$lastCommittedViewValue, w.$render()
        }, this.$validate = function () {
            if (!y(w.$modelValue) || !isNaN(w.$modelValue)) {
                var e = w.$$lastCommittedViewValue, t = w.$$rawModelValue, r = w.$valid, i = w.$modelValue, o = w.$options && w.$options.allowInvalid;
                w.$$runValidators(t, e, function (e) {
                    o || r === e || (w.$modelValue = e ? t : n, w.$modelValue !== i && w.$$writeModelToScope())
                })
            }
        }, this.$$runValidators = function (e, t, r) {
            function i() {
                var e = w.$$parserName || "parse";
                return f !== n ? (f || (o(w.$validators, function (e, t) {
                    s(t, null)
                }), o(w.$asyncValidators, function (e, t) {
                    s(t, null)
                })), s(e, f), f) : (s(e, null), !0)
            }

            function a() {
                var n = !0;
                return o(w.$validators, function (r, i) {
                    var o = r(e, t);
                    n = n && o, s(i, o)
                }), n ? !0 : (o(w.$asyncValidators, function (e, t) {
                    s(t, null)
                }), !1)
            }

            function c() {
                var r = [], i = !0;
                o(w.$asyncValidators, function (o, a) {
                    var c = o(e, t);
                    if (!_(c))throw Ea("$asyncValidators", "Expected asynchronous validator to return a promise but got '{0}' instead.", c);
                    s(a, n), r.push(c.then(function () {
                        s(a, !0)
                    }, function () {
                        i = !1, s(a, !1)
                    }))
                }), r.length ? u.all(r).then(function () {
                    l(i)
                }, p) : l(!0)
            }

            function s(e, t) {
                d === M && w.$setValidity(e, t)
            }

            function l(e) {
                d === M && r(e)
            }

            M++;
            var d = M;
            return i() && a() ? void c() : void l(!1)
        }, this.$commitViewValue = function () {
            var e = w.$viewValue;
            s.cancel(E), (w.$$lastCommittedViewValue !== e || "" === e && w.$$hasNativeValidators) && (w.$$lastCommittedViewValue = e, w.$pristine && this.$setDirty(), this.$$parseAndValidate())
        }, this.$$parseAndValidate = function () {
            function t() {
                w.$modelValue !== a && w.$$writeModelToScope()
            }

            var r = w.$$lastCommittedViewValue, i = r;
            if (f = $(i) ? n : !0)for (var o = 0; o < w.$parsers.length; o++)if (i = w.$parsers[o](i), $(i)) {
                f = !1;
                break
            }
            y(w.$modelValue) && isNaN(w.$modelValue) && (w.$modelValue = g(e));
            var a = w.$modelValue, c = w.$options && w.$options.allowInvalid;
            w.$$rawModelValue = i, c && (w.$modelValue = i, t()), w.$$runValidators(i, w.$$lastCommittedViewValue, function (e) {
                c || (w.$modelValue = e ? i : n, t())
            })
        }, this.$$writeModelToScope = function () {
            b(e, w.$modelValue), o(w.$viewChangeListeners, function (e) {
                try {
                    e()
                } catch (n) {
                    t(n)
                }
            })
        }, this.$setViewValue = function (e, t) {
            w.$viewValue = e, (!w.$options || w.$options.updateOnDefault) && w.$$debounceViewValueCommit(t)
        }, this.$$debounceViewValueCommit = function (t) {
            var n, r = 0, i = w.$options;
            i && v(i.debounce) && (n = i.debounce, y(n) ? r = n : y(n[t]) ? r = n[t] : y(n["default"]) && (r = n["default"])), s.cancel(E), r ? E = s(function () {
                w.$commitViewValue()
            }, r) : l.$$phase ? w.$commitViewValue() : e.$apply(function () {
                w.$commitViewValue()
            })
        }, e.$watch(function () {
            var t = g(e);
            if (t !== w.$modelValue) {
                w.$modelValue = w.$$rawModelValue = t, f = n;
                for (var r = w.$formatters, i = r.length, o = t; i--;)o = r[i](o);
                w.$viewValue !== o && (w.$viewValue = w.$$lastCommittedViewValue = o, w.$render(), w.$$runValidators(t, o, p))
            }
            return t
        })
    }], wa = ["$rootScope", function (e) {
        return {
            restrict: "A",
            require: ["ngModel", "^?form", "^?ngModelOptions"],
            controller: ya,
            priority: 1,
            compile: function (t) {
                return t.addClass(ha).addClass($a).addClass(ma), {
                    pre: function (e, t, n, r) {
                        var i = r[0], o = r[1] || Oo;
                        i.$$setOptions(r[2] && r[2].$options), o.$addControl(i), n.$observe("name", function (e) {
                            i.$name !== e && o.$$renameControl(i, e)
                        }), e.$on("$destroy", function () {
                            o.$removeControl(i)
                        })
                    }, post: function (t, n, r, i) {
                        var o = i[0];
                        o.$options && o.$options.updateOn && n.on(o.$options.updateOn, function (e) {
                            o.$$debounceViewValueCommit(e && e.type)
                        }), n.on("blur", function () {
                            o.$touched || (e.$$phase ? t.$evalAsync(o.$setTouched) : t.$apply(o.$setTouched))
                        })
                    }
                }
            }
        }
    }], xa = /(\s+|^)default(\s+|$)/, Aa = function () {
        return {
            restrict: "A", controller: ["$scope", "$attrs", function (e, t) {
                var r = this;
                this.$options = e.$eval(t.ngModelOptions), this.$options.updateOn !== n ? (this.$options.updateOnDefault = !1, this.$options.updateOn = mi(this.$options.updateOn.replace(xa, function () {
                    return r.$options.updateOnDefault = !0, " "
                }))) : this.$options.updateOnDefault = !0
            }]
        }
    }, Ma = Tr({terminal: !0, priority: 1e3}), ka = ["$locale", "$interpolate", function (e, t) {
        var n = /{}/g, r = /^when(Minus)?(.+)$/;
        return {
            restrict: "EA", link: function (i, a, c) {
                function s(e) {
                    a.text(e || "")
                }

                var l, u = c.count, d = c.$attr.when && a.attr(c.$attr.when), f = c.offset || 0, m = i.$eval(d) || {}, p = {}, h = t.startSymbol(), g = t.endSymbol(), $ = h + u + "-" + f + g, v = li.noop;
                o(c, function (e, t) {
                    var n = r.exec(t);
                    if (n) {
                        var i = (n[1] ? "-" : "") + Kr(n[2]);
                        m[i] = a.attr(c.$attr[t])
                    }
                }), o(m, function (e, r) {
                    p[r] = t(e.replace(n, $))
                }), i.$watch(u, function (t) {
                    var n = parseFloat(t), r = isNaN(n);
                    r || n in m || (n = e.pluralCat(n - f)), n === l || r && isNaN(l) || (v(), v = i.$watch(p[n], s), l = n)
                })
            }
        }
    }], Ca = ["$parse", "$animate", function (e, a) {
        var c = "$$NG_REMOVED", s = r("ngRepeat"), l = function (e, t, n, r, i, o, a) {
            e[n] = r, i && (e[i] = o), e.$index = t, e.$first = 0 === t, e.$last = t === a - 1, e.$middle = !(e.$first || e.$last), e.$odd = !(e.$even = 0 === (1 & t))
        }, u = function (e) {
            return e.clone[0]
        }, d = function (e) {
            return e.clone[e.clone.length - 1]
        };
        return {
            restrict: "A",
            multiElement: !0,
            transclude: "element",
            priority: 1e3,
            terminal: !0,
            $$tlb: !0,
            compile: function (r, f) {
                var m = f.ngRepeat, p = t.createComment(" end ngRepeat: " + m + " "), h = m.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                if (!h)throw s("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", m);
                var g = h[1], $ = h[2], v = h[3], b = h[4];
                if (h = g.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !h)throw s("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", g);
                var E = h[3] || h[1], y = h[2];
                if (v && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(v) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(v)))throw s("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", v);
                var w, x, A, M, k = {$id: Ft};
                return b ? w = e(b) : (A = function (e, t) {
                    return Ft(t)
                }, M = function (e) {
                    return e
                }), function (e, t, r, f, h) {
                    w && (x = function (t, n, r) {
                        return y && (k[y] = t), k[E] = n, k.$index = r, w(e, k)
                    });
                    var g = lt();
                    e.$watchCollection($, function (r) {
                        var f, $, b, w, k, C, T, S, N, _, D, O, H = t[0], R = lt();
                        if (v && (e[v] = r), i(r))N = r, S = x || A; else {
                            S = x || M, N = [];
                            for (var I in r)r.hasOwnProperty(I) && "$" != I.charAt(0) && N.push(I);
                            N.sort()
                        }
                        for (w = N.length, D = new Array(w), f = 0; w > f; f++)if (k = r === N ? f : N[f], C = r[k], T = S(k, C, f), g[T])_ = g[T], delete g[T], R[T] = _, D[f] = _; else {
                            if (R[T])throw o(D, function (e) {
                                e && e.scope && (g[e.id] = e)
                            }), s("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", m, T, C);
                            D[f] = {id: T, scope: n, clone: n}, R[T] = !0
                        }
                        for (var P in g) {
                            if (_ = g[P], O = st(_.clone), a.leave(O), O[0].parentNode)for (f = 0, $ = O.length; $ > f; f++)O[f][c] = !0;
                            _.scope.$destroy()
                        }
                        for (f = 0; w > f; f++)if (k = r === N ? f : N[f], C = r[k], _ = D[f], _.scope) {
                            b = H;
                            do b = b.nextSibling; while (b && b[c]);
                            u(_) != b && a.move(st(_.clone), null, ti(H)), H = d(_), l(_.scope, f, E, C, y, k, w)
                        } else h(function (e, t) {
                            _.scope = t;
                            var n = p.cloneNode(!1);
                            e[e.length++] = n, a.enter(e, null, ti(H)), H = n, _.clone = e, R[_.id] = _, l(_.scope, f, E, C, y, k, w)
                        });
                        g = R
                    })
                }
            }
        }
    }], Ta = "ng-hide", Sa = "ng-hide-animate", Na = ["$animate", function (e) {
        return {
            restrict: "A", multiElement: !0, link: function (t, n, r) {
                t.$watch(r.ngShow, function (t) {
                    e[t ? "removeClass" : "addClass"](n, Ta, {tempClasses: Sa})
                })
            }
        }
    }], _a = ["$animate", function (e) {
        return {
            restrict: "A", multiElement: !0, link: function (t, n, r) {
                t.$watch(r.ngHide, function (t) {
                    e[t ? "addClass" : "removeClass"](n, Ta, {tempClasses: Sa})
                })
            }
        }
    }], Da = Tr(function (e, t, n) {
        e.$watchCollection(n.ngStyle, function (e, n) {
            n && e !== n && o(n, function (e, n) {
                t.css(n, "")
            }), e && t.css(e)
        })
    }), Oa = ["$animate", function (e) {
        return {
            restrict: "EA", require: "ngSwitch", controller: ["$scope", function () {
                this.cases = {}
            }], link: function (n, r, i, a) {
                var c = i.ngSwitch || i.on, s = [], l = [], u = [], d = [], f = function (e, t) {
                    return function () {
                        e.splice(t, 1)
                    }
                };
                n.$watch(c, function (n) {
                    var r, i;
                    for (r = 0, i = u.length; i > r; ++r)e.cancel(u[r]);
                    for (u.length = 0, r = 0, i = d.length; i > r; ++r) {
                        var c = st(l[r].clone);
                        d[r].$destroy();
                        var m = u[r] = e.leave(c);
                        m.then(f(u, r))
                    }
                    l.length = 0, d.length = 0, (s = a.cases["!" + n] || a.cases["?"]) && o(s, function (n) {
                        n.transclude(function (r, i) {
                            d.push(i);
                            var o = n.element;
                            r[r.length++] = t.createComment(" end ngSwitchWhen: ");
                            var a = {clone: r};
                            l.push(a), e.enter(r, o.parent(), o)
                        })
                    })
                })
            }
        }
    }], Ha = Tr({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function (e, t, n, r, i) {
            r.cases["!" + n.ngSwitchWhen] = r.cases["!" + n.ngSwitchWhen] || [], r.cases["!" + n.ngSwitchWhen].push({
                transclude: i,
                element: t
            })
        }
    }), Ra = Tr({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function (e, t, n, r, i) {
            r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({transclude: i, element: t})
        }
    }), Ia = Tr({
        restrict: "EAC", link: function (e, t, n, i, o) {
            if (!o)throw r("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", z(t));
            o(function (e) {
                t.empty(), t.append(e)
            })
        }
    }), Pa = ["$templateCache", function (e) {
        return {
            restrict: "E", terminal: !0, compile: function (t, n) {
                if ("text/ng-template" == n.type) {
                    var r = n.id, i = t[0].text;
                    e.put(r, i)
                }
            }
        }
    }], ja = r("ngOptions"), Va = g({restrict: "A", terminal: !0}), Fa = ["$compile", "$parse", function (e, r) {
        var i = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, c = {$setViewValue: p};
        return {
            restrict: "E",
            require: ["select", "?ngModel"],
            controller: ["$element", "$scope", "$attrs", function (e, t, n) {
                var r, i, o = this, a = {}, s = c;
                o.databound = n.ngModel, o.init = function (e, t, n) {
                    s = e, r = t, i = n
                }, o.addOption = function (t, n) {
                    at(t, '"option value"'), a[t] = !0, s.$viewValue == t && (e.val(t), i.parent() && i.remove()), n && n[0].hasAttribute("selected") && (n[0].selected = !0)
                }, o.removeOption = function (e) {
                    this.hasOption(e) && (delete a[e], s.$viewValue === e && this.renderUnknownOption(e))
                }, o.renderUnknownOption = function (t) {
                    var n = "? " + Ft(t) + " ?";
                    i.val(n), e.prepend(i), e.val(n), i.prop("selected", !0)
                }, o.hasOption = function (e) {
                    return a.hasOwnProperty(e)
                }, t.$on("$destroy", function () {
                    o.renderUnknownOption = p
                })
            }],
            link: function (c, s, l, u) {
                function d(e, t, n, r) {
                    n.$render = function () {
                        var e = n.$viewValue;
                        r.hasOption(e) ? (M.parent() && M.remove(), t.val(e), "" === e && p.prop("selected", !0)) : $(e) && p ? t.val("") : r.renderUnknownOption(e)
                    }, t.on("change", function () {
                        e.$apply(function () {
                            M.parent() && M.remove(), n.$setViewValue(t.val())
                        })
                    })
                }

                function f(e, t, n) {
                    var r;
                    n.$render = function () {
                        var e = new qt(n.$viewValue);
                        o(t.find("option"), function (t) {
                            t.selected = v(e.get(t.value))
                        })
                    }, e.$watch(function () {
                        j(r, n.$viewValue) || (r = P(n.$viewValue), n.$render())
                    }), t.on("change", function () {
                        e.$apply(function () {
                            var e = [];
                            o(t.find("option"), function (t) {
                                t.selected && e.push(t.value)
                            }), n.$setViewValue(e)
                        })
                    })
                }

                function m(t, c, s) {
                    function l(e, n, r) {
                        return j[C] = r, N && (j[N] = n), e(t, j)
                    }

                    function u() {
                        t.$apply(function () {
                            var e, n = O(t) || [];
                            if (b)e = [], o(c.val(), function (t) {
                                t = R ? I[t] : t, e.push(d(t, n[t]))
                            }); else {
                                var r = R ? I[c.val()] : c.val();
                                e = d(r, n[r])
                            }
                            s.$setViewValue(e), $()
                        })
                    }

                    function d(e, t) {
                        if ("?" === e)return n;
                        if ("" === e)return null;
                        var r = S ? S : D;
                        return l(r, e, t)
                    }

                    function f() {
                        var e, n = O(t);
                        if (n && fi(n)) {
                            e = new Array(n.length);
                            for (var r = 0, i = n.length; i > r; r++)e[r] = l(k, r, n[r]);
                            return e
                        }
                        if (n) {
                            e = {};
                            for (var o in n)n.hasOwnProperty(o) && (e[o] = l(k, o, n[o]))
                        }
                        return e
                    }

                    function m(e) {
                        var t;
                        if (b)if (R && fi(e)) {
                            t = new qt([]);
                            for (var n = 0; n < e.length; n++)t.put(l(R, null, e[n]), !0)
                        } else t = new qt(e); else R && (e = l(R, null, e));
                        return function (n, r) {
                            var i;
                            return i = R ? R : S ? S : D, b ? v(t.remove(l(i, n, r))) : e === l(i, n, r)
                        }
                    }

                    function p() {
                        w || (t.$$postDigest($), w = !0)
                    }

                    function g(e, t, n) {
                        e[t] = e[t] || 0, e[t] += n ? 1 : -1
                    }

                    function $() {
                        w = !1;
                        var e, n, r, i, u, d, f, p, $, E, M, C, T, S, D, H, V, F = {"": []}, q = [""], L = s.$viewValue, U = O(t) || [], B = N ? a(U) : U, z = {}, G = m(L), Y = !1;
                        for (I = {}, C = 0; E = B.length, E > C; C++)f = C, N && (f = B[C], "$" === f.charAt(0)) || (p = U[f], e = l(_, f, p) || "", (n = F[e]) || (n = F[e] = [], q.push(e)), T = G(f, p), Y = Y || T, H = l(k, f, p), H = v(H) ? H : "", V = R ? R(t, j) : N ? B[C] : C, R && (I[V] = f), n.push({
                            id: V,
                            label: H,
                            selected: T
                        }));
                        for (b || (y || null === L ? F[""].unshift({
                            id: "",
                            label: "",
                            selected: !Y
                        }) : Y || F[""].unshift({id: "?", label: "", selected: !0})), M = 0, $ = q.length; $ > M; M++) {
                            for (e = q[M], n = F[e], P.length <= M ? (i = {
                                element: A.clone().attr("label", e),
                                label: n.label
                            }, u = [i], P.push(u), c.append(i.element)) : (u = P[M], i = u[0], i.label != e && i.element.attr("label", i.label = e)), S = null, C = 0, E = n.length; E > C; C++)r = n[C], (d = u[C + 1]) ? (S = d.element, d.label !== r.label && (g(z, d.label, !1), g(z, r.label, !0), S.text(d.label = r.label), S.prop("label", d.label)), d.id !== r.id && S.val(d.id = r.id), S[0].selected !== r.selected && (S.prop("selected", d.selected = r.selected), ei && S.prop("selected", d.selected))) : ("" === r.id && y ? D = y : (D = x.clone()).val(r.id).prop("selected", r.selected).attr("selected", r.selected).prop("label", r.label).text(r.label), u.push(d = {
                                element: D,
                                label: r.label,
                                id: r.id,
                                selected: r.selected
                            }), g(z, r.label, !0), S ? S.after(D) : i.element.append(D), S = D);
                            for (C++; u.length > C;)r = u.pop(), g(z, r.label, !1), r.element.remove()
                        }
                        for (; P.length > M;) {
                            for (n = P.pop(), C = 1; C < n.length; ++C)g(z, n[C].label, !1);
                            n[0].element.remove()
                        }
                        o(z, function (e, t) {
                            e > 0 ? h.addOption(t) : 0 > e && h.removeOption(t)
                        })
                    }

                    var M;
                    if (!(M = E.match(i)))throw ja("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", E, z(c));
                    var k = r(M[2] || M[1]), C = M[4] || M[6], T = / as /.test(M[0]) && M[1], S = T ? r(T) : null, N = M[5], _ = r(M[3] || ""), D = r(M[2] ? M[1] : C), O = r(M[7]), H = M[8], R = H ? r(M[8]) : null, I = {}, P = [[{
                        element: c,
                        label: ""
                    }]], j = {};
                    y && (e(y)(t), y.removeClass("ng-scope"), y.remove()), c.empty(), c.on("change", u), s.$render = $, t.$watchCollection(O, p), t.$watchCollection(f, p), b && t.$watchCollection(function () {
                        return s.$modelValue
                    }, p)
                }

                if (u[1]) {
                    for (var p, h = u[0], g = u[1], b = l.multiple, E = l.ngOptions, y = !1, w = !1, x = ti(t.createElement("option")), A = ti(t.createElement("optgroup")), M = x.clone(), k = 0, C = s.children(), T = C.length; T > k; k++)if ("" === C[k].value) {
                        p = y = C.eq(k);
                        break
                    }
                    h.init(g, y, M), b && (g.$isEmpty = function (e) {
                        return !e || 0 === e.length
                    }), E ? m(c, s, g) : b ? f(c, s, g) : d(c, s, g, h)
                }
            }
        }
    }], qa = ["$interpolate", function (e) {
        var t = {addOption: p, removeOption: p};
        return {
            restrict: "E", priority: 100, compile: function (n, r) {
                if ($(r.value)) {
                    var i = e(n.text(), !0);
                    i || r.$set("value", n.text())
                }
                return function (e, n, r) {
                    var o = "$selectController", a = n.parent(), c = a.data(o) || a.parent().data(o);
                    c && c.databound || (c = t), i ? e.$watch(i, function (e, t) {
                        r.$set("value", e), t !== e && c.removeOption(t), c.addOption(e, n)
                    }) : c.addOption(r.value, n), n.on("$destroy", function () {
                        c.removeOption(r.value)
                    })
                }
            }
        }
    }], La = g({restrict: "E", terminal: !1}), Ua = function () {
        return {
            restrict: "A", require: "?ngModel", link: function (e, t, n, r) {
                r && (n.required = !0, r.$validators.required = function (e, t) {
                    return !n.required || !r.$isEmpty(t)
                }, n.$observe("required", function () {
                    r.$validate()
                }))
            }
        }
    }, Ba = function () {
        return {
            restrict: "A", require: "?ngModel", link: function (e, t, i, o) {
                if (o) {
                    var a, c = i.ngPattern || i.pattern;
                    i.$observe("pattern", function (e) {
                        if (E(e) && e.length > 0 && (e = new RegExp("^" + e + "$")), e && !e.test)throw r("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", c, e, z(t));
                        a = e || n, o.$validate()
                    }), o.$validators.pattern = function (e) {
                        return o.$isEmpty(e) || $(a) || a.test(e)
                    }
                }
            }
        }
    }, za = function () {
        return {
            restrict: "A", require: "?ngModel", link: function (e, t, n, r) {
                if (r) {
                    var i = -1;
                    n.$observe("maxlength", function (e) {
                        var t = f(e);
                        i = isNaN(t) ? -1 : t, r.$validate()
                    }), r.$validators.maxlength = function (e, t) {
                        return 0 > i || r.$isEmpty(t) || t.length <= i
                    }
                }
            }
        }
    }, Ga = function () {
        return {
            restrict: "A", require: "?ngModel", link: function (e, t, n, r) {
                if (r) {
                    var i = 0;
                    n.$observe("minlength", function (e) {
                        i = f(e) || 0, r.$validate()
                    }), r.$validators.minlength = function (e, t) {
                        return r.$isEmpty(t) || t.length >= i
                    }
                }
            }
        }
    };
    return e.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (rt(), mt(li), void ti(t).ready(function () {
        J(t, Q)
    }))
}(window, document), !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>'), /**
 * @license AngularJS v1.3.15
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
    function (e, t, n) {
        "use strict";
        t.module("ngAnimate", ["ng"]).directive("ngAnimateChildren", function () {
            var e = "$$ngAnimateChildren";
            return function (n, r, i) {
                var o = i.ngAnimateChildren;
                t.isString(o) && 0 === o.length ? r.data(e, !0) : n.$watch(o, function (t) {
                    r.data(e, !!t)
                })
            }
        }).factory("$$animateReflow", ["$$rAF", "$document", function (e, t) {
            var n = t[0].body;
            return function (t) {
                return e(function () {
                    n.offsetWidth + 1;
                    t()
                })
            }
        }]).config(["$provide", "$animateProvider", function (r, i) {
            function o(e) {
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    if (n.nodeType == g)return n
                }
            }

            function a(e) {
                return e && t.element(e)
            }

            function c(e) {
                return t.element(o(e))
            }

            function s(e, t) {
                return o(e) == o(t)
            }

            var l, u = t.noop, d = t.forEach, f = i.$$selectors, m = t.isArray, p = t.isString, h = t.isObject, g = 1, $ = "$$ngAnimateState", v = "$$ngAnimateChildren", b = "ng-animate", E = {running: !0};
            r.decorator("$animate", ["$delegate", "$$q", "$injector", "$sniffer", "$rootElement", "$$asyncCallback", "$rootScope", "$document", "$templateRequest", "$$jqLite", function (e, n, r, g, y, w, x, A, M, k) {
                function C(e, t) {
                    var n = e.data($) || {};
                    return t && (n.running = !0, n.structural = !0, e.data($, n)), n.disabled || n.running && n.structural
                }

                function T(e) {
                    var t, r = n.defer();
                    return r.promise.$$cancelFn = function () {
                        t && t()
                    }, x.$$postDigest(function () {
                        t = e(function () {
                            r.resolve()
                        })
                    }), r.promise
                }

                function S(e) {
                    return h(e) ? (e.tempClasses && p(e.tempClasses) && (e.tempClasses = e.tempClasses.split(/\s+/)), e) : void 0
                }

                function N(e, t, n) {
                    n = n || {};
                    var r = {};
                    d(n, function (e, t) {
                        d(t.split(" "), function (t) {
                            r[t] = e
                        })
                    });
                    var i = Object.create(null);
                    d((e.attr("class") || "").split(/\s+/), function (e) {
                        i[e] = !0
                    });
                    var o = [], a = [];
                    return d(t && t.classes || [], function (e, t) {
                        var n = i[t], c = r[t] || {};
                        e === !1 ? (n || "addClass" == c.event) && a.push(t) : e === !0 && (n && "removeClass" != c.event || o.push(t))
                    }), o.length + a.length > 0 && [o.join(" "), a.join(" ")]
                }

                function _(e) {
                    if (e) {
                        var t = [], n = {}, i = e.substr(1).split(".");
                        (g.transitions || g.animations) && t.push(r.get(f[""]));
                        for (var o = 0; o < i.length; o++) {
                            var a = i[o], c = f[a];
                            c && !n[a] && (t.push(r.get(c)), n[a] = !0)
                        }
                        return t
                    }
                }

                function D(e, n, r, i) {
                    function o(e, t) {
                        var n = e[t], r = e["before" + t.charAt(0).toUpperCase() + t.substr(1)];
                        return n || r ? ("leave" == t && (r = n, n = null), w.push({event: t, fn: n}), b.push({
                            event: t,
                            fn: r
                        }), !0) : void 0
                    }

                    function a(t, n, o) {
                        function a(e) {
                            if (n) {
                                if ((n[e] || u)(), ++f < c.length)return;
                                n = null
                            }
                            o()
                        }

                        var c = [];
                        d(t, function (e) {
                            e.fn && c.push(e)
                        });
                        var f = 0;
                        d(c, function (t, o) {
                            var c = function () {
                                a(o)
                            };
                            switch (t.event) {
                                case"setClass":
                                    n.push(t.fn(e, s, l, c, i));
                                    break;
                                case"animate":
                                    n.push(t.fn(e, r, i.from, i.to, c));
                                    break;
                                case"addClass":
                                    n.push(t.fn(e, s || r, c, i));
                                    break;
                                case"removeClass":
                                    n.push(t.fn(e, l || r, c, i));
                                    break;
                                default:
                                    n.push(t.fn(e, c, i))
                            }
                        }), n && 0 === n.length && o()
                    }

                    var c = e[0];
                    if (c) {
                        i && (i.to = i.to || {}, i.from = i.from || {});
                        var s, l;
                        m(r) && (s = r[0], l = r[1], s ? l ? r = s + " " + l : (r = s, n = "addClass") : (r = l, n = "removeClass"));
                        var f = "setClass" == n, p = f || "addClass" == n || "removeClass" == n || "animate" == n, h = e.attr("class"), g = h + " " + r;
                        if (F(g)) {
                            var $ = u, v = [], b = [], E = u, y = [], w = [], x = (" " + g).replace(/\s+/g, ".");
                            return d(_(x), function (e) {
                                var t = o(e, n);
                                !t && f && (o(e, "addClass"), o(e, "removeClass"))
                            }), {
                                node: c,
                                event: n,
                                className: r,
                                isClassBased: p,
                                isSetClassOperation: f,
                                applyStyles: function () {
                                    i && e.css(t.extend(i.from || {}, i.to || {}))
                                },
                                before: function (e) {
                                    $ = e, a(b, v, function () {
                                        $ = u, e()
                                    })
                                },
                                after: function (e) {
                                    E = e, a(w, y, function () {
                                        E = u, e()
                                    })
                                },
                                cancel: function () {
                                    v && (d(v, function (e) {
                                        (e || u)(!0)
                                    }), $(!0)), y && (d(y, function (e) {
                                        (e || u)(!0)
                                    }), E(!0))
                                }
                            }
                        }
                    }
                }

                function O(e, n, r, i, o, a, c, s) {
                    function f(t) {
                        var i = "$animate:" + t;
                        x && x[i] && x[i].length > 0 && w(function () {
                            r.triggerHandler(i, {event: e, className: n})
                        })
                    }

                    function m() {
                        f("before")
                    }

                    function p() {
                        f("after")
                    }

                    function h() {
                        f("close"), s()
                    }

                    function g() {
                        g.hasBeenRun || (g.hasBeenRun = !0, a())
                    }

                    function v() {
                        if (!v.hasBeenRun) {
                            y && y.applyStyles(), v.hasBeenRun = !0, c && c.tempClasses && d(c.tempClasses, function (e) {
                                l.removeClass(r, e)
                            });
                            var t = r.data($);
                            t && (y && y.isClassBased ? R(r, n) : (w(function () {
                                var t = r.data($) || {};
                                O == t.index && R(r, n, e)
                            }), r.data($, t))), h()
                        }
                    }

                    var E = u, y = D(r, e, n, c);
                    if (!y)return g(), m(), p(), v(), E;
                    e = y.event, n = y.className;
                    var x = t.element._data(y.node);
                    if (x = x && x.events, i || (i = o ? o.parent() : r.parent()), I(r, i))return g(), m(), p(), v(), E;
                    var A = r.data($) || {}, M = A.active || {}, k = A.totalActive || 0, C = A.last, T = !1;
                    if (k > 0) {
                        var S = [];
                        if (y.isClassBased) {
                            if ("setClass" == C.event)S.push(C), R(r, n); else if (M[n]) {
                                var N = M[n];
                                N.event == e ? T = !0 : (S.push(N), R(r, n))
                            }
                        } else if ("leave" == e && M["ng-leave"])T = !0; else {
                            for (var _ in M)S.push(M[_]);
                            A = {}, R(r, !0)
                        }
                        S.length > 0 && d(S, function (e) {
                            e.cancel()
                        })
                    }
                    if (!y.isClassBased || y.isSetClassOperation || "animate" == e || T || (T = "addClass" == e == r.hasClass(n)), T)return g(), m(), p(), h(), E;
                    M = A.active || {}, k = A.totalActive || 0, "leave" == e && r.one("$destroy", function () {
                        var e = t.element(this), n = e.data($);
                        if (n) {
                            var r = n.active["ng-leave"];
                            r && (r.cancel(), R(e, "ng-leave"))
                        }
                    }), l.addClass(r, b), c && c.tempClasses && d(c.tempClasses, function (e) {
                        l.addClass(r, e)
                    });
                    var O = j++;
                    return k++, M[n] = y, r.data($, {
                        last: y,
                        active: M,
                        index: O,
                        totalActive: k
                    }), m(), y.before(function (t) {
                        var i = r.data($);
                        t = t || !i || !i.active[n] || y.isClassBased && i.active[n].event != e, g(), t === !0 ? v() : (p(), y.after(v))
                    }), y.cancel
                }

                function H(e) {
                    var n = o(e);
                    if (n) {
                        var r = t.isFunction(n.getElementsByClassName) ? n.getElementsByClassName(b) : n.querySelectorAll("." + b);
                        d(r, function (e) {
                            e = t.element(e);
                            var n = e.data($);
                            n && n.active && d(n.active, function (e) {
                                e.cancel()
                            })
                        })
                    }
                }

                function R(e, t) {
                    if (s(e, y))E.disabled || (E.running = !1, E.structural = !1); else if (t) {
                        var n = e.data($) || {}, r = t === !0;
                        !r && n.active && n.active[t] && (n.totalActive--, delete n.active[t]), (r || !n.totalActive) && (l.removeClass(e, b), e.removeData($))
                    }
                }

                function I(e, n) {
                    if (E.disabled)return !0;
                    if (s(e, y))return E.running;
                    var r, i, o;
                    do {
                        if (0 === n.length)break;
                        var a = s(n, y), c = a ? E : n.data($) || {};
                        if (c.disabled)return !0;
                        if (a && (o = !0), r !== !1) {
                            var l = n.data(v);
                            t.isDefined(l) && (r = l)
                        }
                        i = i || c.running || c.last && !c.last.isClassBased
                    } while (n = n.parent());
                    return !o || !r && i
                }

                l = k, y.data($, E);
                var P = x.$watch(function () {
                    return M.totalPendingRequests
                }, function (e) {
                    0 === e && (P(), x.$$postDigest(function () {
                        x.$$postDigest(function () {
                            E.running = !1
                        })
                    }))
                }), j = 0, V = i.classNameFilter(), F = V ? function (e) {
                    return V.test(e)
                } : function () {
                    return !0
                };
                return {
                    animate: function (e, t, n, r, i) {
                        return r = r || "ng-inline-animate", i = S(i) || {}, i.from = n ? t : null, i.to = n ? n : t, T(function (t) {
                            return O("animate", r, c(e), null, null, u, i, t)
                        })
                    }, enter: function (n, r, i, o) {
                        return o = S(o), n = t.element(n), r = a(r), i = a(i), C(n, !0), e.enter(n, r, i), T(function (e) {
                            return O("enter", "ng-enter", c(n), r, i, u, o, e)
                        })
                    }, leave: function (n, r) {
                        return r = S(r), n = t.element(n), H(n), C(n, !0), T(function (t) {
                            return O("leave", "ng-leave", c(n), null, null, function () {
                                e.leave(n)
                            }, r, t)
                        })
                    }, move: function (n, r, i, o) {
                        return o = S(o), n = t.element(n), r = a(r), i = a(i), H(n), C(n, !0), e.move(n, r, i), T(function (e) {
                            return O("move", "ng-move", c(n), r, i, u, o, e)
                        })
                    }, addClass: function (e, t, n) {
                        return this.setClass(e, t, [], n)
                    }, removeClass: function (e, t, n) {
                        return this.setClass(e, [], t, n)
                    }, setClass: function (n, r, i, a) {
                        a = S(a);
                        var s = "$$animateClasses";
                        if (n = t.element(n), n = c(n), C(n))return e.$$setClassImmediately(n, r, i, a);
                        var l, u = n.data(s), f = !!u;
                        return u || (u = {}, u.classes = {}), l = u.classes, r = m(r) ? r : r.split(" "), d(r, function (e) {
                            e && e.length && (l[e] = !0)
                        }), i = m(i) ? i : i.split(" "), d(i, function (e) {
                            e && e.length && (l[e] = !1)
                        }), f ? (a && u.options && (u.options = t.extend(u.options || {}, a)), u.promise) : (n.data(s, u = {
                            classes: l,
                            options: a
                        }), u.promise = T(function (t) {
                            var r = n.parent(), i = o(n), a = i.parentNode;
                            if (!a || a.$$NG_REMOVED || i.$$NG_REMOVED)return void t();
                            var c = n.data(s);
                            n.removeData(s);
                            var l = n.data($) || {}, u = N(n, c, l.active);
                            return u ? O("setClass", u, n, r, null, function () {
                                u[0] && e.$$addClassImmediately(n, u[0]), u[1] && e.$$removeClassImmediately(n, u[1])
                            }, c.options, t) : t()
                        }))
                    }, cancel: function (e) {
                        e.$$cancelFn()
                    }, enabled: function (e, t) {
                        switch (arguments.length) {
                            case 2:
                                if (e)R(t); else {
                                    var n = t.data($) || {};
                                    n.disabled = !0, t.data($, n)
                                }
                                break;
                            case 1:
                                E.disabled = !e;
                                break;
                            default:
                                e = !E.disabled
                        }
                        return !!e
                    }
                }
            }]), i.register("", ["$window", "$sniffer", "$timeout", "$$animateReflow", function (r, i, a, c) {
                function s() {
                    R || (R = c(function () {
                        W = [], R = null, G = {}
                    }))
                }

                function f(e, t) {
                    R && R(), W.push(t), R = c(function () {
                        d(W, function (e) {
                            e()
                        }), W = [], R = null, G = {}
                    })
                }

                function h(e, n) {
                    var r = o(e);
                    e = t.element(r), Z.push(e);
                    var i = Date.now() + n;
                    X >= i || (a.cancel(K), X = i, K = a(function () {
                        $(Z), Z = []
                    }, n, !1))
                }

                function $(e) {
                    d(e, function (e) {
                        var t = e.data(L);
                        t && d(t.closeAnimationFns, function (e) {
                            e()
                        })
                    })
                }

                function v(e, t) {
                    var n = t ? G[t] : null;
                    if (!n) {
                        var i = 0, o = 0, a = 0, c = 0;
                        d(e, function (e) {
                            if (e.nodeType == g) {
                                var t = r.getComputedStyle(e) || {}, n = t[N + I];
                                i = Math.max(b(n), i);
                                var s = t[N + j];
                                o = Math.max(b(s), o);
                                {
                                    t[D + j]
                                }
                                c = Math.max(b(t[D + j]), c);
                                var l = b(t[D + I]);
                                l > 0 && (l *= parseInt(t[D + V], 10) || 1), a = Math.max(l, a)
                            }
                        }), n = {
                            total: 0,
                            transitionDelay: o,
                            transitionDuration: i,
                            animationDelay: c,
                            animationDuration: a
                        }, t && (G[t] = n)
                    }
                    return n
                }

                function b(e) {
                    var t = 0, n = p(e) ? e.split(/\s*,\s*/) : [];
                    return d(n, function (e) {
                        t = Math.max(parseFloat(e) || 0, t)
                    }), t
                }

                function E(e) {
                    var t = e.parent(), n = t.data(q);
                    return n || (t.data(q, ++Y), n = Y), n + "-" + o(e).getAttribute("class")
                }

                function y(e, t, n, r) {
                    var i = ["ng-enter", "ng-leave", "ng-move"].indexOf(n) >= 0, a = E(t), c = a + " " + n, s = G[c] ? ++G[c].total : 0, u = {};
                    if (s > 0) {
                        var d = n + "-stagger", f = a + " " + d, m = !G[f];
                        m && l.addClass(t, d), u = v(t, f), m && l.removeClass(t, d)
                    }
                    l.addClass(t, n);
                    var p = t.data(L) || {}, h = v(t, c), g = h.transitionDuration, $ = h.animationDuration;
                    if (i && 0 === g && 0 === $)return l.removeClass(t, n), !1;
                    var b = r || i && g > 0, y = $ > 0 && u.animationDelay > 0 && 0 === u.animationDuration, w = p.closeAnimationFns || [];
                    t.data(L, {
                        stagger: u,
                        cacheKey: c,
                        running: p.running || 0,
                        itemIndex: s,
                        blockTransition: b,
                        closeAnimationFns: w
                    });
                    var M = o(t);
                    return b && (x(M, !0), r && t.css(r)), y && A(M, !0), !0
                }

                function w(e, t, n, r, i) {
                    function c() {
                        t.off(j, s), l.removeClass(t, m), l.removeClass(t, p), I && a.cancel(I), T(t, n);
                        var e = o(t);
                        for (var r in $)e.style.removeProperty($[r])
                    }

                    function s(e) {
                        e.stopPropagation();
                        var t = e.originalEvent || e, n = t.$manualTimeStamp || t.timeStamp || Date.now(), i = parseFloat(t.elapsedTime.toFixed(U));
                        Math.max(n - P, 0) >= D && i >= S && r()
                    }

                    var u = o(t), f = t.data(L);
                    if (-1 == u.getAttribute("class").indexOf(n) || !f)return void r();
                    var m = "", p = "";
                    d(n.split(" "), function (e, t) {
                        var n = (t > 0 ? " " : "") + e;
                        m += n + "-active", p += n + "-pending"
                    });
                    var g = "", $ = [], b = f.itemIndex, E = f.stagger, y = 0;
                    if (b > 0) {
                        var w = 0;
                        E.transitionDelay > 0 && 0 === E.transitionDuration && (w = E.transitionDelay * b);
                        var M = 0;
                        E.animationDelay > 0 && 0 === E.animationDuration && (M = E.animationDelay * b, $.push(H + "animation-play-state")), y = Math.round(100 * Math.max(w, M)) / 100
                    }
                    y || (l.addClass(t, m), f.blockTransition && x(u, !1));
                    var k = f.cacheKey + " " + m, C = v(t, k), S = Math.max(C.transitionDuration, C.animationDuration);
                    if (0 === S)return l.removeClass(t, m), T(t, n), void r();
                    !y && i && Object.keys(i).length > 0 && (C.transitionDuration || (t.css("transition", C.animationDuration + "s linear all"), $.push("transition")), t.css(i));
                    var N = Math.max(C.transitionDelay, C.animationDelay), D = N * z;
                    if ($.length > 0) {
                        var R = u.getAttribute("style") || "";
                        ";" !== R.charAt(R.length - 1) && (R += ";"), u.setAttribute("style", R + " " + g)
                    }
                    var I, P = Date.now(), j = O + " " + _, V = (N + S) * B, F = (y + V) * z;
                    return y > 0 && (l.addClass(t, p), I = a(function () {
                        I = null, C.transitionDuration > 0 && x(u, !1), C.animationDuration > 0 && A(u, !1), l.addClass(t, m), l.removeClass(t, p), i && (0 === C.transitionDuration && t.css("transition", C.animationDuration + "s linear all"), t.css(i), $.push("transition"))
                    }, y * z, !1)), t.on(j, s), f.closeAnimationFns.push(function () {
                        c(), r()
                    }), f.running++, h(t, F), c
                }

                function x(e, t) {
                    e.style[N + P] = t ? "none" : ""
                }

                function A(e, t) {
                    e.style[D + F] = t ? "paused" : ""
                }

                function M(e, t, n, r) {
                    return y(e, t, n, r) ? function (e) {
                        e && T(t, n)
                    } : void 0
                }

                function k(e, t, n, r, i) {
                    return t.data(L) ? w(e, t, n, r, i) : (T(t, n), void r())
                }

                function C(e, t, n, r, i) {
                    var o = M(e, t, n, i.from);
                    if (!o)return s(), void r();
                    var a = o;
                    return f(t, function () {
                        a = k(e, t, n, r, i.to)
                    }), function (e) {
                        (a || u)(e)
                    }
                }

                function T(e, t) {
                    l.removeClass(e, t);
                    var n = e.data(L);
                    n && (n.running && n.running--, n.running && 0 !== n.running || e.removeData(L))
                }

                function S(e, t) {
                    var n = "";
                    return e = m(e) ? e : e.split(/\s+/), d(e, function (e, r) {
                        e && e.length > 0 && (n += (r > 0 ? " " : "") + e + t)
                    }), n
                }

                var N, _, D, O, H = "";
                e.ontransitionend === n && e.onwebkittransitionend !== n ? (H = "-webkit-", N = "WebkitTransition", _ = "webkitTransitionEnd transitionend") : (N = "transition", _ = "transitionend"), e.onanimationend === n && e.onwebkitanimationend !== n ? (H = "-webkit-", D = "WebkitAnimation", O = "webkitAnimationEnd animationend") : (D = "animation", O = "animationend");
                var R, I = "Duration", P = "Property", j = "Delay", V = "IterationCount", F = "PlayState", q = "$$ngAnimateKey", L = "$$ngAnimateCSS3Data", U = 3, B = 1.5, z = 1e3, G = {}, Y = 0, W = [], K = null, X = 0, Z = [];
                return {
                    animate: function (e, t, n, r, i, o) {
                        return o = o || {}, o.from = n, o.to = r, C("animate", e, t, i, o)
                    }, enter: function (e, t, n) {
                        return n = n || {}, C("enter", e, "ng-enter", t, n)
                    }, leave: function (e, t, n) {
                        return n = n || {}, C("leave", e, "ng-leave", t, n)
                    }, move: function (e, t, n) {
                        return n = n || {}, C("move", e, "ng-move", t, n)
                    }, beforeSetClass: function (e, t, n, r, i) {
                        i = i || {};
                        var o = S(n, "-remove") + " " + S(t, "-add"), a = M("setClass", e, o, i.from);
                        return a ? (f(e, r), a) : (s(), void r())
                    }, beforeAddClass: function (e, t, n, r) {
                        r = r || {};
                        var i = M("addClass", e, S(t, "-add"), r.from);
                        return i ? (f(e, n), i) : (s(), void n())
                    }, beforeRemoveClass: function (e, t, n, r) {
                        r = r || {};
                        var i = M("removeClass", e, S(t, "-remove"), r.from);
                        return i ? (f(e, n), i) : (s(), void n())
                    }, setClass: function (e, t, n, r, i) {
                        i = i || {}, n = S(n, "-remove"), t = S(t, "-add");
                        var o = n + " " + t;
                        return k("setClass", e, o, r, i.to)
                    }, addClass: function (e, t, n, r) {
                        return r = r || {}, k("addClass", e, S(t, "-add"), n, r.to)
                    }, removeClass: function (e, t, n, r) {
                        return r = r || {}, k("removeClass", e, S(t, "-remove"), n, r.to)
                    }
                }
            }])
        }])
    }(window, window.angular), /**
 * @license AngularJS v1.3.15
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
    function (e, t, n) {
        "use strict";
        t.module("ngCookies", ["ng"]).factory("$cookies", ["$rootScope", "$browser", function (e, r) {
            function i() {
                var e, i, o, s;
                for (e in c)u(a[e]) && r.cookies(e, n);
                for (e in a)i = a[e], t.isString(i) || (i = "" + i, a[e] = i), i !== c[e] && (r.cookies(e, i), s = !0);
                if (s) {
                    s = !1, o = r.cookies();
                    for (e in a)a[e] !== o[e] && (u(o[e]) ? delete a[e] : a[e] = o[e], s = !0)
                }
            }

            var o, a = {}, c = {}, s = !1, l = t.copy, u = t.isUndefined;
            return r.addPollFn(function () {
                var t = r.cookies();
                o != t && (o = t, l(t, c), l(t, a), s && e.$apply())
            })(), s = !0, e.$watch(i), a
        }]).factory("$cookieStore", ["$cookies", function (e) {
            return {
                get: function (n) {
                    var r = e[n];
                    return r ? t.fromJson(r) : r
                }, put: function (n, r) {
                    e[n] = t.toJson(r)
                }, remove: function (t) {
                    delete e[t]
                }
            }
        }])
    }(window, window.angular), /**
 * @license AngularJS v1.3.15
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
    function (e, t) {
        "use strict";
        function n(e, n, i) {
            r.directive(e, ["$parse", "$swipe", function (r, o) {
                var a = 75, c = .3, s = 30;
                return function (l, u, d) {
                    function f(e) {
                        if (!m)return !1;
                        var t = Math.abs(e.y - m.y), r = (e.x - m.x) * n;
                        return p && a > t && r > 0 && r > s && c > t / r
                    }

                    var m, p, h = r(d[e]), g = ["touch"];
                    t.isDefined(d.ngSwipeDisableMouse) || g.push("mouse"), o.bind(u, {
                        start: function (e) {
                            m = e, p = !0
                        }, cancel: function () {
                            p = !1
                        }, end: function (e, t) {
                            f(e) && l.$apply(function () {
                                u.triggerHandler(i), h(l, {$event: t})
                            })
                        }
                    }, g)
                }
            }])
        }

        var r = t.module("ngTouch", []);
        r.factory("$swipe", [function () {
            function e(e) {
                var t = e.touches && e.touches.length ? e.touches : [e], n = e.changedTouches && e.changedTouches[0] || e.originalEvent && e.originalEvent.changedTouches && e.originalEvent.changedTouches[0] || t[0].originalEvent || t[0];
                return {x: n.clientX, y: n.clientY}
            }

            function n(e, n) {
                var r = [];
                return t.forEach(e, function (e) {
                    var t = i[e][n];
                    t && r.push(t)
                }), r.join(" ")
            }

            var r = 10, i = {
                mouse: {start: "mousedown", move: "mousemove", end: "mouseup"},
                touch: {start: "touchstart", move: "touchmove", end: "touchend", cancel: "touchcancel"}
            };
            return {
                bind: function (t, i, o) {
                    var a, c, s, l, u = !1;
                    o = o || ["mouse", "touch"], t.on(n(o, "start"), function (t) {
                        s = e(t), u = !0, a = 0, c = 0, l = s, i.start && i.start(s, t)
                    });
                    var d = n(o, "cancel");
                    d && t.on(d, function (e) {
                        u = !1, i.cancel && i.cancel(e)
                    }), t.on(n(o, "move"), function (t) {
                        if (u && s) {
                            var n = e(t);
                            if (a += Math.abs(n.x - l.x), c += Math.abs(n.y - l.y), l = n, !(r > a && r > c))return c > a ? (u = !1, void(i.cancel && i.cancel(t))) : (t.preventDefault(), void(i.move && i.move(n, t)))
                        }
                    }), t.on(n(o, "end"), function (t) {
                        u && (u = !1, i.end && i.end(e(t), t))
                    })
                }
            }
        }]), r.config(["$provide", function (e) {
            e.decorator("ngClickDirective", ["$delegate", function (e) {
                return e.shift(), e
            }])
        }]), r.directive("ngClick", ["$parse", "$timeout", "$rootElement", function (e, n, r) {
            function i(e, t, n, r) {
                return Math.abs(e - n) < h && Math.abs(t - r) < h
            }

            function o(e, t, n) {
                for (var r = 0; r < e.length; r += 2)if (i(e[r], e[r + 1], t, n))return e.splice(r, r + 2), !0;
                return !1
            }

            function a(e) {
                if (!(Date.now() - l > p)) {
                    var t = e.touches && e.touches.length ? e.touches : [e], n = t[0].clientX, r = t[0].clientY;
                    1 > n && 1 > r || d && d[0] === n && d[1] === r || (d && (d = null), "label" === e.target.tagName.toLowerCase() && (d = [n, r]), o(u, n, r) || (e.stopPropagation(), e.preventDefault(), e.target && e.target.blur()))
                }
            }

            function c(e) {
                var t = e.touches && e.touches.length ? e.touches : [e], r = t[0].clientX, i = t[0].clientY;
                u.push(r, i), n(function () {
                    for (var e = 0; e < u.length; e += 2)if (u[e] == r && u[e + 1] == i)return void u.splice(e, e + 2)
                }, p, !1)
            }

            function s(e, t) {
                u || (r[0].addEventListener("click", a, !0), r[0].addEventListener("touchstart", c, !0), u = []), l = Date.now(), o(u, e, t)
            }

            var l, u, d, f = 750, m = 12, p = 2500, h = 25, g = "ng-click-active";
            return function (n, r, i) {
                function o() {
                    p = !1, r.removeClass(g)
                }

                var a, c, l, u, d = e(i.ngClick), p = !1;
                r.on("touchstart", function (e) {
                    p = !0, a = e.target ? e.target : e.srcElement, 3 == a.nodeType && (a = a.parentNode), r.addClass(g), c = Date.now();
                    var t = e.touches && e.touches.length ? e.touches : [e], n = t[0].originalEvent || t[0];
                    l = n.clientX, u = n.clientY
                }), r.on("touchmove", function () {
                    o()
                }), r.on("touchcancel", function () {
                    o()
                }), r.on("touchend", function (e) {
                    var n = Date.now() - c, d = e.changedTouches && e.changedTouches.length ? e.changedTouches : e.touches && e.touches.length ? e.touches : [e], h = d[0].originalEvent || d[0], g = h.clientX, $ = h.clientY, v = Math.sqrt(Math.pow(g - l, 2) + Math.pow($ - u, 2));
                    p && f > n && m > v && (s(g, $), a && a.blur(), t.isDefined(i.disabled) && i.disabled !== !1 || r.triggerHandler("click", [e])), o()
                }), r.onclick = function () {
                }, r.on("click", function (e, t) {
                    n.$apply(function () {
                        d(n, {$event: t || e})
                    })
                }), r.on("mousedown", function () {
                    r.addClass(g)
                }), r.on("mousemove mouseup", function () {
                    r.removeClass(g)
                })
            }
        }]), n("ngSwipeLeft", -1, "swipeleft"), n("ngSwipeRight", 1, "swiperight")
    }(window, window.angular), /**
 * @license AngularJS v1.3.15
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
    function (e, t) {
        "use strict";
        /*
         * HTML Parser By Misko Hevery (misko@hevery.com)
         * based on:  HTML Parser By John Resig (ejohn.org)
         * Original code by Erik Arvidsson, Mozilla Public License
         * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
         *
         * // Use like so:
         * htmlParser(htmlString, {
         *     start: function(tag, attrs, unary) {},
         *     end: function(tag) {},
         *     chars: function(text) {},
         *     comment: function(text) {}
         * });
         *
         */
        function n() {
            this.$get = ["$$sanitizeUri", function (e) {
                return function (t) {
                    var n = [];
                    return o(t, s(n, function (t, n) {
                        return !/^unsafe/.test(e(t, n))
                    })), n.join("")
                }
            }]
        }

        function r(e) {
            var n = [], r = s(n, t.noop);
            return r.chars(e), n.join("")
        }

        function i(e) {
            var t, n = {}, r = e.split(",");
            for (t = 0; t < r.length; t++)n[r[t]] = !0;
            return n
        }

        function o(e, n) {
            function r(e, r, o, c) {
                if (r = t.lowercase(r), A[r])for (; b.last() && M[b.last()];)i("", b.last());
                x[r] && b.last() == r && i("", r), c = E[r] || !!c, c || b.push(r);
                var s = {};
                o.replace(f, function (e, t, n, r, i) {
                    var o = n || r || i || "";
                    s[t] = a(o)
                }), n.start && n.start(r, s, c)
            }

            function i(e, r) {
                var i, o = 0;
                if (r = t.lowercase(r))for (o = b.length - 1; o >= 0 && b[o] != r; o--);
                if (o >= 0) {
                    for (i = b.length - 1; i >= o; i--)n.end && n.end(b[i]);
                    b.length = o
                }
            }

            "string" != typeof e && (e = null === e || "undefined" == typeof e ? "" : "" + e);
            var o, c, s, v, b = [], y = e;
            for (b.last = function () {
                return b[b.length - 1]
            }; e;) {
                if (v = "", c = !0, b.last() && C[b.last()] ? (e = e.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*" + b.last() + "[^>]*>", "i"), function (e, t) {
                        return t = t.replace(h, "$1").replace($, "$1"), n.chars && n.chars(a(t)), ""
                    }), i("", b.last())) : (0 === e.indexOf("<!--") ? (o = e.indexOf("--", 4), o >= 0 && e.lastIndexOf("-->", o) === o && (n.comment && n.comment(e.substring(4, o)), e = e.substring(o + 3), c = !1)) : g.test(e) ? (s = e.match(g), s && (e = e.replace(s[0], ""), c = !1)) : p.test(e) ? (s = e.match(d), s && (e = e.substring(s[0].length), s[0].replace(d, i), c = !1)) : m.test(e) && (s = e.match(u), s ? (s[4] && (e = e.substring(s[0].length), s[0].replace(u, r)), c = !1) : (v += "<", e = e.substring(1))), c && (o = e.indexOf("<"), v += 0 > o ? e : e.substring(0, o), e = 0 > o ? "" : e.substring(o), n.chars && n.chars(a(v)))), e == y)throw l("badparse", "The sanitizer was unable to parse the following block of html: {0}", e);
                y = e
            }
            i()
        }

        function a(e) {
            return e ? (O.innerHTML = e.replace(/</g, "&lt;"), O.textContent) : ""
        }

        function c(e) {
            return e.replace(/&/g, "&amp;").replace(v, function (e) {
                var t = e.charCodeAt(0), n = e.charCodeAt(1);
                return "&#" + (1024 * (t - 55296) + (n - 56320) + 65536) + ";"
            }).replace(b, function (e) {
                return "&#" + e.charCodeAt(0) + ";"
            }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }

        function s(e, n) {
            var r = !1, i = t.bind(e, e.push);
            return {
                start: function (e, o, a) {
                    e = t.lowercase(e), !r && C[e] && (r = e), r || T[e] !== !0 || (i("<"), i(e), t.forEach(o, function (r, o) {
                        var a = t.lowercase(o), s = "img" === e && "src" === a || "background" === a;
                        D[a] !== !0 || S[a] === !0 && !n(r, s) || (i(" "), i(o), i('="'), i(c(r)), i('"'))
                    }), i(a ? "/>" : ">"))
                }, end: function (e) {
                    e = t.lowercase(e), r || T[e] !== !0 || (i("</"), i(e), i(">")), e == r && (r = !1)
                }, chars: function (e) {
                    r || i(c(e))
                }
            }
        }

        var l = t.$$minErr("$sanitize"), u = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/, d = /^<\/\s*([\w:-]+)[^>]*>/, f = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g, m = /^</, p = /^<\//, h = /<!--(.*?)-->/g, g = /<!DOCTYPE([^>]*?)>/i, $ = /<!\[CDATA\[(.*?)]]>/g, v = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, b = /([^\#-~| |!])/g, E = i("area,br,col,hr,img,wbr"), y = i("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), w = i("rp,rt"), x = t.extend({}, w, y), A = t.extend({}, y, i("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")), M = t.extend({}, w, i("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")), k = i("animate,animateColor,animateMotion,animateTransform,circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,set,stop,svg,switch,text,title,tspan,use"), C = i("script,style"), T = t.extend({}, E, A, M, x, k), S = i("background,cite,href,longdesc,src,usemap,xlink:href"), N = i("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width"), _ = i("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,attributeName,attributeType,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan"), D = t.extend({}, S, _, N), O = document.createElement("pre");
        t.module("ngSanitize", []).provider("$sanitize", n), t.module("ngSanitize").filter("linky", ["$sanitize", function (e) {
            var n = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"”’]/, i = /^mailto:/;
            return function (o, a) {
                function c(e) {
                    e && m.push(r(e))
                }

                function s(e, n) {
                    m.push("<a "), t.isDefined(a) && m.push('target="', a, '" '), m.push('href="', e.replace(/"/g, "&quot;"), '">'), c(n), m.push("</a>")
                }

                if (!o)return o;
                for (var l, u, d, f = o, m = []; l = f.match(n);)u = l[0], l[2] || l[4] || (u = (l[3] ? "http://" : "mailto:") + u), d = l.index, c(f.substr(0, d)), s(u, l[0].replace(i, "")), f = f.substring(d + l[0].length);
                return c(f), e(m.join(""))
            }
        }])
    }(window, window.angular), /**
 * @license AngularJS v1.3.15
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
    function (e, t, n) {
        "use strict";
        function r(e) {
            return null != e && "" !== e && "hasOwnProperty" !== e && c.test("." + e)
        }

        function i(e, t) {
            if (!r(t))throw a("badmember", 'Dotted member path "@{0}" is invalid.', t);
            for (var i = t.split("."), o = 0, c = i.length; c > o && e !== n; o++) {
                var s = i[o];
                e = null !== e ? e[s] : n
            }
            return e
        }

        function o(e, n) {
            n = n || {}, t.forEach(n, function (e, t) {
                delete n[t]
            });
            for (var r in e)!e.hasOwnProperty(r) || "$" === r.charAt(0) && "$" === r.charAt(1) || (n[r] = e[r]);
            return n
        }

        var a = t.$$minErr("$resource"), c = /^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;
        t.module("ngResource", ["ng"]).provider("$resource", function () {
            var e = this;
            this.defaults = {
                stripTrailingSlashes: !0,
                actions: {
                    get: {method: "GET"},
                    save: {method: "POST"},
                    query: {method: "GET", isArray: !0},
                    remove: {method: "DELETE"},
                    "delete": {method: "DELETE"}
                }
            }, this.$get = ["$http", "$q", function (r, c) {
                function s(e) {
                    return l(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
                }

                function l(e, t) {
                    return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, t ? "%20" : "+")
                }

                function u(t, n) {
                    this.template = t, this.defaults = p({}, e.defaults, n), this.urlParams = {}
                }

                function d(s, l, $, v) {
                    function b(e, t) {
                        var n = {};
                        return t = p({}, l, t), m(t, function (t, r) {
                            g(t) && (t = t()), n[r] = t && t.charAt && "@" == t.charAt(0) ? i(e, t.substr(1)) : t
                        }), n
                    }

                    function E(e) {
                        return e.resource
                    }

                    function y(e) {
                        o(e || {}, this)
                    }

                    var w = new u(s, v);
                    return $ = p({}, e.defaults.actions, $), y.prototype.toJSON = function () {
                        var e = p({}, this);
                        return delete e.$promise, delete e.$resolved, e
                    }, m($, function (e, i) {
                        var s = /^(POST|PUT|PATCH)$/i.test(e.method);
                        y[i] = function (l, u, d, $) {
                            var v, x, A, M = {};
                            switch (arguments.length) {
                                case 4:
                                    A = $, x = d;
                                case 3:
                                case 2:
                                    if (!g(u)) {
                                        M = l, v = u, x = d;
                                        break
                                    }
                                    if (g(l)) {
                                        x = l, A = u;
                                        break
                                    }
                                    x = u, A = d;
                                case 1:
                                    g(l) ? x = l : s ? v = l : M = l;
                                    break;
                                case 0:
                                    break;
                                default:
                                    throw a("badargs", "Expected up to 4 arguments [params, data, success, error], got {0} arguments", arguments.length)
                            }
                            var k = this instanceof y, C = k ? v : e.isArray ? [] : new y(v), T = {}, S = e.interceptor && e.interceptor.response || E, N = e.interceptor && e.interceptor.responseError || n;
                            m(e, function (e, t) {
                                "params" != t && "isArray" != t && "interceptor" != t && (T[t] = h(e))
                            }), s && (T.data = v), w.setUrlParams(T, p({}, b(v, e.params || {}), M), e.url);
                            var _ = r(T).then(function (n) {
                                var r = n.data, c = C.$promise;
                                if (r) {
                                    if (t.isArray(r) !== !!e.isArray)throw a("badcfg", "Error in resource configuration for action `{0}`. Expected response to contain an {1} but got an {2}", i, e.isArray ? "array" : "object", t.isArray(r) ? "array" : "object");
                                    e.isArray ? (C.length = 0, m(r, function (e) {
                                        C.push("object" == typeof e ? new y(e) : e)
                                    })) : (o(r, C), C.$promise = c)
                                }
                                return C.$resolved = !0, n.resource = C, n
                            }, function (e) {
                                return C.$resolved = !0, (A || f)(e), c.reject(e)
                            });
                            return _ = _.then(function (e) {
                                var t = S(e);
                                return (x || f)(t, e.headers), t
                            }, N), k ? _ : (C.$promise = _, C.$resolved = !1, C)
                        }, y.prototype["$" + i] = function (e, t, n) {
                            g(e) && (n = t, t = e, e = {});
                            var r = y[i].call(this, e, this, t, n);
                            return r.$promise || r
                        }
                    }), y.bind = function (e) {
                        return d(s, p({}, l, e), $)
                    }, y
                }

                var f = t.noop, m = t.forEach, p = t.extend, h = t.copy, g = t.isFunction;
                return u.prototype = {
                    setUrlParams: function (e, n, r) {
                        var i, o, c = this, l = r || c.template, u = c.urlParams = {};
                        m(l.split(/\W/), function (e) {
                            if ("hasOwnProperty" === e)throw a("badname", "hasOwnProperty is not a valid parameter name.");
                            !new RegExp("^\\d+$").test(e) && e && new RegExp("(^|[^\\\\]):" + e + "(\\W|$)").test(l) && (u[e] = !0)
                        }), l = l.replace(/\\:/g, ":"), n = n || {}, m(c.urlParams, function (e, r) {
                            i = n.hasOwnProperty(r) ? n[r] : c.defaults[r], t.isDefined(i) && null !== i ? (o = s(i), l = l.replace(new RegExp(":" + r + "(\\W|$)", "g"), function (e, t) {
                                return o + t
                            })) : l = l.replace(new RegExp("(/?):" + r + "(\\W|$)", "g"), function (e, t, n) {
                                return "/" == n.charAt(0) ? n : t + n
                            })
                        }), c.defaults.stripTrailingSlashes && (l = l.replace(/\/+$/, "") || "/"), l = l.replace(/\/\.(?=\w+($|\?))/, "."), e.url = l.replace(/\/\\\./, "/."), m(n, function (t, n) {
                            c.urlParams[n] || (e.params = e.params || {}, e.params[n] = t)
                        })
                    }
                }, d
            }]
        })
    }(window, window.angular), /**
 * @license AngularJS v1.3.15
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
    function (e, t) {
        "use strict";
        function n() {
            function e(e, n) {
                return t.extend(Object.create(e), n)
            }

            function n(e, t) {
                var n = t.caseInsensitiveMatch, r = {originalPath: e, regexp: e}, i = r.keys = [];
                return e = e.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function (e, t, n, r) {
                    var o = "?" === r ? r : null, a = "*" === r ? r : null;
                    return i.push({
                        name: n,
                        optional: !!o
                    }), t = t || "", "" + (o ? "" : t) + "(?:" + (o ? t : "") + (a && "(.+?)" || "([^/]+)") + (o || "") + ")" + (o || "")
                }).replace(/([\/$\*])/g, "\\$1"), r.regexp = new RegExp("^" + e + "$", n ? "i" : ""), r
            }

            var r = {};
            this.when = function (e, i) {
                var o = t.copy(i);
                if (t.isUndefined(o.reloadOnSearch) && (o.reloadOnSearch = !0), t.isUndefined(o.caseInsensitiveMatch) && (o.caseInsensitiveMatch = this.caseInsensitiveMatch), r[e] = t.extend(o, e && n(e, o)), e) {
                    var a = "/" == e[e.length - 1] ? e.substr(0, e.length - 1) : e + "/";
                    r[a] = t.extend({redirectTo: e}, n(a, o))
                }
                return this
            }, this.caseInsensitiveMatch = !1, this.otherwise = function (e) {
                return "string" == typeof e && (e = {redirectTo: e}), this.when(null, e), this
            }, this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$templateRequest", "$sce", function (n, i, o, a, s, l, u) {
                function d(e, t) {
                    var n = t.keys, r = {};
                    if (!t.regexp)return null;
                    var i = t.regexp.exec(e);
                    if (!i)return null;
                    for (var o = 1, a = i.length; a > o; ++o) {
                        var c = n[o - 1], s = i[o];
                        c && s && (r[c.name] = s)
                    }
                    return r
                }

                function f(e) {
                    var r = b.current;
                    g = p(), $ = g && r && g.$$route === r.$$route && t.equals(g.pathParams, r.pathParams) && !g.reloadOnSearch && !v, $ || !r && !g || n.$broadcast("$routeChangeStart", g, r).defaultPrevented && e && e.preventDefault()
                }

                function m() {
                    var e = b.current, r = g;
                    $ ? (e.params = r.params, t.copy(e.params, o), n.$broadcast("$routeUpdate", e)) : (r || e) && (v = !1, b.current = r, r && r.redirectTo && (t.isString(r.redirectTo) ? i.path(h(r.redirectTo, r.params)).search(r.params).replace() : i.url(r.redirectTo(r.pathParams, i.path(), i.search())).replace()), a.when(r).then(function () {
                        if (r) {
                            var e, n, i = t.extend({}, r.resolve);
                            return t.forEach(i, function (e, n) {
                                i[n] = t.isString(e) ? s.get(e) : s.invoke(e, null, null, n)
                            }), t.isDefined(e = r.template) ? t.isFunction(e) && (e = e(r.params)) : t.isDefined(n = r.templateUrl) && (t.isFunction(n) && (n = n(r.params)), n = u.getTrustedResourceUrl(n), t.isDefined(n) && (r.loadedTemplateUrl = n, e = l(n))), t.isDefined(e) && (i.$template = e), a.all(i)
                        }
                    }).then(function (i) {
                        r == b.current && (r && (r.locals = i, t.copy(r.params, o)), n.$broadcast("$routeChangeSuccess", r, e))
                    }, function (t) {
                        r == b.current && n.$broadcast("$routeChangeError", r, e, t)
                    }))
                }

                function p() {
                    var n, o;
                    return t.forEach(r, function (r) {
                        !o && (n = d(i.path(), r)) && (o = e(r, {
                            params: t.extend({}, i.search(), n),
                            pathParams: n
                        }), o.$$route = r)
                    }), o || r[null] && e(r[null], {params: {}, pathParams: {}})
                }

                function h(e, n) {
                    var r = [];
                    return t.forEach((e || "").split(":"), function (e, t) {
                        if (0 === t)r.push(e); else {
                            var i = e.match(/(\w+)(?:[?*])?(.*)/), o = i[1];
                            r.push(n[o]), r.push(i[2] || ""), delete n[o]
                        }
                    }), r.join("")
                }

                var g, $, v = !1, b = {
                    routes: r, reload: function () {
                        v = !0, n.$evalAsync(function () {
                            f(), m()
                        })
                    }, updateParams: function (e) {
                        if (!this.current || !this.current.$$route)throw c("norout", "Tried updating route when with no current route");
                        e = t.extend({}, this.current.params, e), i.path(h(this.current.$$route.originalPath, e)), i.search(e)
                    }
                };
                return n.$on("$locationChangeStart", f), n.$on("$locationChangeSuccess", m), b
            }]
        }

        function r() {
            this.$get = function () {
                return {}
            }
        }

        function i(e, n, r) {
            return {
                restrict: "ECA",
                terminal: !0,
                priority: 400,
                transclude: "element",
                link: function (i, o, a, c, s) {
                    function l() {
                        m && (r.cancel(m), m = null), d && (d.$destroy(), d = null), f && (m = r.leave(f), m.then(function () {
                            m = null
                        }), f = null)
                    }

                    function u() {
                        var a = e.current && e.current.locals, c = a && a.$template;
                        if (t.isDefined(c)) {
                            var u = i.$new(), m = e.current, g = s(u, function (e) {
                                r.enter(e, null, f || o).then(function () {
                                    !t.isDefined(p) || p && !i.$eval(p) || n()
                                }), l()
                            });
                            f = g, d = m.scope = u, d.$emit("$viewContentLoaded"), d.$eval(h)
                        } else l()
                    }

                    var d, f, m, p = a.autoscroll, h = a.onload || "";
                    i.$on("$routeChangeSuccess", u), u()
                }
            }
        }

        function o(e, t, n) {
            return {
                restrict: "ECA", priority: -400, link: function (r, i) {
                    var o = n.current, a = o.locals;
                    i.html(a.$template);
                    var c = e(i.contents());
                    if (o.controller) {
                        a.$scope = r;
                        var s = t(o.controller, a);
                        o.controllerAs && (r[o.controllerAs] = s), i.data("$ngControllerController", s), i.children().data("$ngControllerController", s)
                    }
                    c(r)
                }
            }
        }

        var a = t.module("ngRoute", ["ng"]).provider("$route", n), c = t.$$minErr("ngRoute");
        a.provider("$routeParams", r), a.directive("ngView", i), a.directive("ngView", o), i.$inject = ["$route", "$anchorScroll", "$animate"], o.$inject = ["$compile", "$controller", "$route"]
    }(window, window.angular), /**
 * @license AngularJS v1.3.15
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
    function (e, t) {
        "use strict";
        function n() {
            function e(e, t, r) {
                return function (i, o, a) {
                    var c = a.$normalize(t);
                    n[c] && !a[c] && i.$watch(a[e], function (e) {
                        r && (e = !e), o.attr(t, e)
                    })
                }
            }

            var n = {
                ariaHidden: !0,
                ariaChecked: !0,
                ariaDisabled: !0,
                ariaRequired: !0,
                ariaInvalid: !0,
                ariaMultiline: !0,
                ariaValue: !0,
                tabindex: !0,
                bindKeypress: !0
            };
            this.config = function (e) {
                n = t.extend(n, e)
            }, this.$get = function () {
                return {
                    config: function (e) {
                        return n[e]
                    }, $$watchExpr: e
                }
            }
        }

        var r = t.module("ngAria", ["ng"]).provider("$aria", n);
        r.directive("ngShow", ["$aria", function (e) {
            return e.$$watchExpr("ngShow", "aria-hidden", !0)
        }]).directive("ngHide", ["$aria", function (e) {
            return e.$$watchExpr("ngHide", "aria-hidden", !1)
        }]).directive("ngModel", ["$aria", function (e) {
            function t(t, n, r) {
                return e.config(n) && !r.attr(t)
            }

            function n(e, t) {
                return !t.attr("role") && t.attr("type") === e && "INPUT" !== t[0].nodeName
            }

            function r(e, t) {
                var n = e.type, r = e.role;
                return "checkbox" === (n || r) || "menuitemcheckbox" === r ? "checkbox" : "radio" === (n || r) || "menuitemradio" === r ? "radio" : "range" === n || "progressbar" === r || "slider" === r ? "range" : "textbox" === (n || r) || "TEXTAREA" === t[0].nodeName ? "multiline" : ""
            }

            return {
                restrict: "A", require: "?ngModel", priority: 200, link: function (i, o, a, c) {
                    function s() {
                        return c.$modelValue
                    }

                    function l() {
                        return f ? (f = !1, function () {
                            var e = a.value == c.$viewValue;
                            o.attr("aria-checked", e), o.attr("tabindex", 0 - !e)
                        }) : function () {
                            o.attr("aria-checked", a.value == c.$viewValue)
                        }
                    }

                    function u() {
                        o.attr("aria-checked", !c.$isEmpty(c.$viewValue))
                    }

                    var d = r(a, o), f = t("tabindex", "tabindex", o);
                    switch (d) {
                        case"radio":
                        case"checkbox":
                            n(d, o) && o.attr("role", d), t("aria-checked", "ariaChecked", o) && i.$watch(s, "radio" === d ? l() : u);
                            break;
                        case"range":
                            n(d, o) && o.attr("role", "slider"), e.config("ariaValue") && (a.min && !o.attr("aria-valuemin") && o.attr("aria-valuemin", a.min), a.max && !o.attr("aria-valuemax") && o.attr("aria-valuemax", a.max), o.attr("aria-valuenow") || i.$watch(s, function (e) {
                                o.attr("aria-valuenow", e)
                            }));
                            break;
                        case"multiline":
                            t("aria-multiline", "ariaMultiline", o) && o.attr("aria-multiline", !0)
                    }
                    f && o.attr("tabindex", 0), c.$validators.required && t("aria-required", "ariaRequired", o) && i.$watch(function () {
                        return c.$error.required
                    }, function (e) {
                        o.attr("aria-required", !!e)
                    }), t("aria-invalid", "ariaInvalid", o) && i.$watch(function () {
                        return c.$invalid
                    }, function (e) {
                        o.attr("aria-invalid", !!e)
                    })
                }
            }
        }]).directive("ngDisabled", ["$aria", function (e) {
            return e.$$watchExpr("ngDisabled", "aria-disabled")
        }]).directive("ngMessages", function () {
            return {
                restrict: "A", require: "?ngMessages", link: function (e, t) {
                    t.attr("aria-live") || t.attr("aria-live", "assertive")
                }
            }
        }).directive("ngClick", ["$aria", "$parse", function (e, t) {
            return {
                restrict: "A", compile: function (n, r) {
                    var i = t(r.ngClick, null, !0);
                    return function (t, n, r) {
                        function o(e, t) {
                            return -1 !== t.indexOf(e[0].nodeName) ? !0 : void 0
                        }

                        var a = ["BUTTON", "A", "INPUT", "TEXTAREA"];
                        n.attr("role") || o(n, a) || n.attr("role", "button"), e.config("tabindex") && !n.attr("tabindex") && n.attr("tabindex", 0), !e.config("bindKeypress") || r.ngKeypress || o(n, a) || n.on("keypress", function (e) {
                            function n() {
                                i(t, {$event: e})
                            }

                            (32 === e.keyCode || 13 === e.keyCode) && t.$apply(n)
                        })
                    }
                }
            }
        }]).directive("ngDblclick", ["$aria", function (e) {
            return function (t, n) {
                e.config("tabindex") && !n.attr("tabindex") && n.attr("tabindex", 0)
            }
        }])
    }(window, window.angular), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    angular.module("ngMaterial", ["ng", "ngAnimate", "ngAria", "material.core", "material.core.theming.palette", "material.core.theming", "material.components.autocomplete", "material.components.backdrop", "material.components.bottomSheet", "material.components.button", "material.components.card", "material.components.checkbox", "material.components.content", "material.components.dialog", "material.components.divider", "material.components.gridList", "material.components.icon", "material.components.input", "material.components.list", "material.components.progressCircular", "material.components.progressLinear", "material.components.radioButton", "material.components.select", "material.components.sidenav", "material.components.slider", "material.components.sticky", "material.components.subheader", "material.components.swipe", "material.components.switch", "material.components.tabs", "material.components.textField", "material.components.toast", "material.components.toolbar", "material.components.tooltip", "material.components.whiteframe"]), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e, n) {
            e.decorator("$$rAF", ["$delegate", t]), n.theme("default").primaryPalette("indigo").accentPalette("pink").warnPalette("red").backgroundPalette("grey")
        }

        function t(e) {
            return e.throttle = function (t) {
                var n, r, i, o;
                return function () {
                    n = arguments, o = this, i = t, r || (r = !0, e(function () {
                        i.apply(o, n), r = !1
                    }))
                }
            }, e
        }

        angular.module("material.core", ["material.core.theming"]).config(e), e.$inject = ["$provide", "$mdThemingProvider"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e, t) {
            function n(e) {
                return r ? "webkit" + e.charAt(0).toUpperCase() + e.substring(1) : e
            }

            var r = /webkit/i.test(t.vendorPrefix);
            return {
                KEY_CODE: {
                    ENTER: 13,
                    ESCAPE: 27,
                    SPACE: 32,
                    LEFT_ARROW: 37,
                    UP_ARROW: 38,
                    RIGHT_ARROW: 39,
                    DOWN_ARROW: 40,
                    TAB: 9
                },
                CSS: {
                    TRANSITIONEND: "transitionend" + (r ? " webkitTransitionEnd" : ""),
                    ANIMATIONEND: "animationend" + (r ? " webkitAnimationEnd" : ""),
                    TRANSFORM: n("transform"),
                    TRANSFORM_ORIGIN: n("transformOrigin"),
                    TRANSITION: n("transition"),
                    TRANSITION_DURATION: n("transitionDuration"),
                    ANIMATION_PLAY_STATE: n("animationPlayState"),
                    ANIMATION_DURATION: n("animationDuration"),
                    ANIMATION_NAME: n("animationName"),
                    ANIMATION_TIMING: n("animationTimingFunction"),
                    ANIMATION_DIRECTION: n("animationDirection")
                },
                MEDIA: {
                    sm: "(max-width: 600px)",
                    "gt-sm": "(min-width: 600px)",
                    md: "(min-width: 600px) and (max-width: 960px)",
                    "gt-md": "(min-width: 960px)",
                    lg: "(min-width: 960px) and (max-width: 1200px)",
                    "gt-lg": "(min-width: 1200px)"
                },
                MEDIA_PRIORITY: ["gt-lg", "lg", "gt-md", "md", "gt-sm", "sm"]
            }
        }

        angular.module("material.core").factory("$mdConstant", e), e.$inject = ["$$rAF", "$sniffer"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        function e(e, t) {
            function n() {
                return [].concat($)
            }

            function r() {
                return $.length
            }

            function i(e) {
                return $.length && e > -1 && e < $.length
            }

            function o(e) {
                return e ? i(d(e) + 1) : !1
            }

            function a(e) {
                return e ? i(d(e) - 1) : !1
            }

            function c(e) {
                return i(e) ? $[e] : null
            }

            function s(e, t) {
                return $.filter(function (n) {
                    return n[e] === t
                })
            }

            function l(e, t) {
                return e ? (angular.isNumber(t) || (t = $.length), $.splice(t, 0, e), d(e)) : -1
            }

            function u(e) {
                f(e) && $.splice(d(e), 1)
            }

            function d(e) {
                return $.indexOf(e)
            }

            function f(e) {
                return e && d(e) > -1
            }

            function m() {
                return $.length ? $[0] : null
            }

            function p() {
                return $.length ? $[$.length - 1] : null
            }

            function h(e, n, r, o) {
                r = r || g;
                for (var a = d(n); ;) {
                    if (!i(a))return null;
                    var c = a + (e ? -1 : 1), s = null;
                    if (i(c) ? s = $[c] : t && (s = e ? p() : m(), c = d(s)), null === s || c === o)return null;
                    if (r(s))return s;
                    angular.isUndefined(o) && (o = c), a = c
                }
            }

            var g = function () {
                return !0
            };
            e && !angular.isArray(e) && (e = Array.prototype.slice.call(e)), t = !!t;
            var $ = e || [];
            return {
                items: n,
                count: r,
                inRange: i,
                contains: f,
                indexOf: d,
                itemAt: c,
                findBy: s,
                add: l,
                remove: u,
                first: m,
                last: p,
                next: angular.bind(null, h, !1),
                previous: angular.bind(null, h, !0),
                hasPrevious: a,
                hasNext: o
            }
        }

        angular.module("material.core").config(["$provide", function (t) {
            t.decorator("$mdUtil", ["$delegate", function (t) {
                return t.iterator = e, t
            }])
        }])
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        function e(e, t, n) {
            function r(e) {
                var t = d[e];
                angular.isUndefined(t) && (t = d[e] = i(e));
                var n = m[t];
                return angular.isUndefined(n) && (n = o(t)), n
            }

            function i(t) {
                return e.MEDIA[t] || ("(" !== t.charAt(0) ? "(" + t + ")" : t)
            }

            function o(e) {
                var t = f[e] = n.matchMedia(e);
                return t.addListener(a), m[t.media] = !!t.matches
            }

            function a(e) {
                t.$evalAsync(function () {
                    m[e.media] = !!e.matches
                })
            }

            function c(e) {
                return f[e]
            }

            function s(t, n) {
                for (var r = 0; r < e.MEDIA_PRIORITY.length; r++) {
                    var i = e.MEDIA_PRIORITY[r];
                    if (f[d[i]].matches) {
                        var o = u(t, n + "-" + i);
                        if (t[o])return t[o]
                    }
                }
                return t[u(t, n)]
            }

            function l(t, n, r) {
                var i = [];
                return t.forEach(function (t) {
                    var o = u(n, t);
                    n[o] && i.push(n.$observe(o, angular.bind(void 0, r, null)));
                    for (var a in e.MEDIA) {
                        if (o = u(n, t + "-" + a), !n[o])return;
                        i.push(n.$observe(o, angular.bind(void 0, r, a)))
                    }
                }), function () {
                    i.forEach(function (e) {
                        e()
                    })
                }
            }

            function u(e, t) {
                return p[t] || (p[t] = e.$normalize(t))
            }

            var d = {}, f = {}, m = {}, p = {};
            return r.getResponsiveAttribute = s, r.getQuery = c, r.watchResponsiveAttributes = l, r
        }

        angular.module("material.core").factory("$mdMedia", e), e.$inject = ["$mdConstant", "$rootScope", "$window"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        var e = ["0", "0", "0"];
        angular.module("material.core").factory("$mdUtil", ["$cacheFactory", "$document", "$timeout", "$q", "$window", "$mdConstant", function (t, n, r, i, o, a) {
            function c(e) {
                return e[0] || e
            }

            var s;
            return s = {
                now: window.performance ? angular.bind(window.performance, window.performance.now) : Date.now,
                clientRect: function (e, t, n) {
                    var r = c(e);
                    t = c(t || r.offsetParent || document.body);
                    var i = r.getBoundingClientRect(), o = n ? t.getBoundingClientRect() : {
                        left: 0,
                        top: 0,
                        width: 0,
                        height: 0
                    };
                    return {
                        left: i.left - o.left + t.scrollLeft,
                        top: i.top - o.top + t.scrollTop,
                        width: i.width,
                        height: i.height
                    }
                },
                offsetRect: function (e, t) {
                    return s.clientRect(e, t, !0)
                },
                floatingScrollbars: function () {
                    if (void 0 === this.floatingScrollbars.cached) {
                        var e = angular.element('<div style="z-index: -1; position: absolute; height: 1px; overflow-y: scroll"><div style="height: 2px;"></div></div>');
                        n[0].body.appendChild(e[0]), this.floatingScrollbars.cached = e[0].offsetWidth == e[0].childNodes[0].offsetWidth, e.remove()
                    }
                    return this.floatingScrollbars.cached
                },
                forceFocus: function (e) {
                    var t = e[0] || e;
                    document.addEventListener("click", function r(e) {
                        e.target === t && e.$focus && (t.focus(), e.stopImmediatePropagation(), e.preventDefault(), t.removeEventListener("click", r))
                    }, !0);
                    var n = document.createEvent("MouseEvents");
                    n.initMouseEvent("click", !1, !0, window, {}, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), n.$material = !0, n.$focus = !0, t.dispatchEvent(n)
                },
                transitionEndPromise: function (e, t) {
                    function n(t) {
                        t && t.target !== e[0] || (e.off(a.CSS.TRANSITIONEND, n), o.resolve())
                    }

                    t = t || {};
                    var o = i.defer();
                    return e.on(a.CSS.TRANSITIONEND, n), t.timeout && r(n, t.timeout), o.promise
                },
                fakeNgModel: function () {
                    return {
                        $fake: !0, $setTouched: angular.noop, $setViewValue: function (e) {
                            this.$viewValue = e, this.$render(e), this.$viewChangeListeners.forEach(function (e) {
                                e()
                            })
                        }, $isEmpty: function (e) {
                            return 0 === ("" + e).length
                        }, $parsers: [], $formatters: [], $viewChangeListeners: [], $render: angular.noop
                    }
                },
                debounce: function (e, t, n, i) {
                    var o;
                    return function () {
                        var a = n, c = Array.prototype.slice.call(arguments);
                        r.cancel(o), o = r(function () {
                            o = void 0, e.apply(a, c)
                        }, t || 10, i)
                    }
                },
                throttle: function (e, t) {
                    var n;
                    return function () {
                        var r = this, i = arguments, o = s.now();
                        (!n || o - n > t) && (e.apply(r, i), n = o)
                    }
                },
                time: function (e) {
                    var t = s.now();
                    return e(), s.now() - t
                },
                nextUid: function () {
                    for (var t, n = e.length; n;) {
                        if (n--, t = e[n].charCodeAt(0), 57 == t)return e[n] = "A", e.join("");
                        if (90 != t)return e[n] = String.fromCharCode(t + 1), e.join("");
                        e[n] = "0"
                    }
                    return e.unshift("0"), e.join("")
                },
                disconnectScope: function (e) {
                    if (e && e.$root !== e && !e.$$destroyed) {
                        var t = e.$parent;
                        e.$$disconnected = !0, t.$$childHead === e && (t.$$childHead = e.$$nextSibling), t.$$childTail === e && (t.$$childTail = e.$$prevSibling), e.$$prevSibling && (e.$$prevSibling.$$nextSibling = e.$$nextSibling), e.$$nextSibling && (e.$$nextSibling.$$prevSibling = e.$$prevSibling), e.$$nextSibling = e.$$prevSibling = null
                    }
                },
                reconnectScope: function (e) {
                    if (e && e.$root !== e && e.$$disconnected) {
                        var t = e, n = t.$parent;
                        t.$$disconnected = !1, t.$$prevSibling = n.$$childTail, n.$$childHead ? (n.$$childTail.$$nextSibling = t, n.$$childTail = t) : n.$$childHead = n.$$childTail = t
                    }
                },
                getClosest: function (e, t) {
                    t = t.toUpperCase();
                    do if (e.nodeName === t)return e; while (e = e.parentNode);
                    return null
                }
            }
        }]), angular.element.prototype.focus = angular.element.prototype.focus || function () {
            return this.length && this[0].focus(), this
        }, angular.element.prototype.blur = angular.element.prototype.blur || function () {
            return this.length && this[0].blur(), this
        }
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e, t, n) {
            function r(e, n, r) {
                var i = e[0];
                i.hasAttribute(n) || c(i, n) || (r = angular.isString(r) ? r.trim() : "", r.length ? e.attr(n, r) : t.warn('ARIA: Attribute "', n, '", required for accessibility, is missing on node:', i))
            }

            function i(t, n, i) {
                e(function () {
                    r(t, n, i())
                })
            }

            function o(e, t) {
                i(e, t, function () {
                    return a(e)
                })
            }

            function a(e) {
                return e.text().trim()
            }

            function c(e, t) {
                function r(e) {
                    var t = e.currentStyle ? e.currentStyle : n.getComputedStyle(e);
                    return "none" === t.display
                }

                var i = e.hasChildNodes(), o = !1;
                if (i)for (var a = e.childNodes, c = 0; c < a.length; c++) {
                    var s = a[c];
                    1 === s.nodeType && s.hasAttribute(t) && (r(s) || (o = !0))
                }
                return o
            }

            return {expect: r, expectAsync: i, expectWithText: o}
        }

        angular.module("material.core").service("$mdAria", e), e.$inject = ["$$rAF", "$log", "$window"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e, t, n, r, i, o) {
            this.compile = function (a) {
                var c = a.templateUrl, s = a.template || "", l = a.controller, u = a.controllerAs, d = a.resolve || {}, f = a.locals || {}, m = a.transformTemplate || angular.identity, p = a.bindToController;
                return angular.forEach(d, function (e, t) {
                    d[t] = angular.isString(e) ? n.get(e) : n.invoke(e)
                }), angular.extend(d, f), d.$template = c ? t.get(c, {cache: o}).then(function (e) {
                    return e.data
                }) : e.when(s), e.all(d).then(function (e) {
                    var t = m(e.$template), n = a.element || angular.element("<div>").html(t.trim()).contents(), o = r(n);
                    return {
                        locals: e, element: n, link: function (t) {
                            if (e.$scope = t, l) {
                                var r = i(l, e);
                                p && angular.extend(r, e), n.data("$ngControllerController", r), n.children().data("$ngControllerController", r), u && (t[u] = r)
                            }
                            return o(t)
                        }
                    }
                })
            }
        }

        angular.module("material.core").service("$mdCompiler", e), e.$inject = ["$q", "$http", "$injector", "$compile", "$controller", "$templateCache"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e, t) {
            var n;
            for (var r in s)n = s[r], "start" === e && n.cancel(), n[e](t, g)
        }

        function t(t) {
            if (!g) {
                var n = +Date.now();
                $ && !i(t, $) && n - $.endTime < 1500 || (g = c(t), e("start", t))
            }
        }

        function n(t) {
            g && i(t, g) && (a(t, g), e("move", t))
        }

        function r(t) {
            g && i(t, g) && (a(t, g), g.endTime = +Date.now(), e("end", t), $ = g, g = null)
        }

        function i(e, t) {
            return e && t && e.type.charAt(0) === t.type
        }

        function o(e) {
            return e = e.originalEvent || e, e.touches && e.touches[0] || e.changedTouches && e.changedTouches[0] || e
        }

        function a(e, t) {
            var n = o(e), r = t.x = n.pageX, i = t.y = n.pageY;
            t.distanceX = r - t.startX, t.distanceY = i - t.startY, t.distance = Math.sqrt(t.distanceX * t.distanceX + t.distanceY * t.distanceY), t.directionX = t.distanceX > 0 ? "right" : t.distanceX < 0 ? "left" : "", t.directionY = t.distanceY > 0 ? "up" : t.distanceY < 0 ? "down" : "", t.duration = +Date.now() - t.startTime, t.velocityX = t.distanceX / t.duration, t.velocityY = t.distanceY / t.duration
        }

        function c(e) {
            var t = o(e), n = {startTime: +Date.now(), target: e.target, type: e.type.charAt(0)};
            return n.startX = n.x = t.pageX, n.startY = n.y = t.pageY, n
        }

        var s, l = "mousedown touchstart pointerdown", u = "mousemove touchmove pointermove", d = "mouseup mouseleave touchend touchcancel pointerup pointercancel";
        document.contains || (document.contains = function (e) {
            return document.body.contains(e)
        });
        var f = navigator.userAgent || navigator.vendor || window.opera, m = f.match(/iPad/i) || f.match(/iPhone/i) || f.match(/iPod/i), p = f.match(/Android/i), h = m || p;
        h && document.addEventListener("click", function (e) {
            var t = 0 === e.clientX && 0 === e.clientY;
            window.jQuery || t || e.$material || (e.preventDefault(), e.stopPropagation())
        }, !0), angular.element(document).on(l, t).on(u, n).on(d, r).on("$$mdGestureReset", function () {
            $ = g = null
        });
        var g, $;
        angular.module("material.core").run(["$mdGesture", function () {
        }]).factory("$mdGesture", ["$$MdGestureHandler", "$$rAF", "$timeout", function (e, t, n) {
            function r(t, n) {
                var r = new e(t);
                return angular.extend(r, n), s[t] = r, o
            }

            function i(e, t, n) {
                var r = s[t.replace(/^\$md./, "")];
                if (!r)throw new Error("Failed to register element with handler " + t + ". Available handlers: " + Object.keys(s).join(", "));
                return r.registerElement(e, n)
            }

            s = {}, h && r("click", {
                options: {maxDistance: 6}, onEnd: function (e, t) {
                    t.distance < this.state.options.maxDistance && this.dispatchEvent(e, "click")
                }
            }), r("press", {
                onStart: function (e) {
                    this.dispatchEvent(e, "$md.pressdown")
                }, onEnd: function (e) {
                    this.dispatchEvent(e, "$md.pressup")
                }
            }), r("hold", {
                options: {maxDistance: 6, delay: 500}, onCancel: function () {
                    n.cancel(this.state.timeout)
                }, onStart: function (e, t) {
                    return this.state.registeredParent ? (this.state.pos = {
                        x: t.x,
                        y: t.y
                    }, void(this.state.timeout = n(angular.bind(this, function () {
                        this.dispatchEvent(e, "$md.hold"), this.cancel()
                    }), this.state.options.delay, !1))) : this.cancel()
                }, onMove: function (e, t) {
                    e.preventDefault();
                    var n = this.state.pos.x - t.x, r = this.state.pos.y - t.y;
                    Math.sqrt(n * n + r * r) > this.options.maxDistance && this.cancel()
                }, onEnd: function () {
                    this.onCancel()
                }
            }), r("drag", {
                options: {minDistance: 6, horizontal: !0}, onStart: function () {
                    this.state.registeredParent || this.cancel()
                }, onMove: function (e, t) {
                    var n, r;
                    e.preventDefault(), this.state.dragPointer ? this.dispatchDragMove(e) : (this.state.options.horizontal ? (n = Math.abs(t.distanceX) > this.state.options.minDistance, r = Math.abs(t.distanceY) > 1.5 * this.state.options.minDistance) : (n = Math.abs(t.distanceY) > this.state.options.minDistance, r = Math.abs(t.distanceX) > 1.5 * this.state.options.minDistance), n ? (this.state.dragPointer = c(e), a(e, this.state.dragPointer), this.dispatchEvent(e, "$md.dragstart", this.state.dragPointer)) : r && this.cancel())
                }, dispatchDragMove: t.throttle(function (e) {
                    this.state.isRunning && (a(e, this.state.dragPointer), this.dispatchEvent(e, "$md.drag", this.state.dragPointer))
                }), onEnd: function (e) {
                    this.state.dragPointer && (a(e, this.state.dragPointer), this.dispatchEvent(e, "$md.dragend", this.state.dragPointer))
                }
            }), r("swipe", {
                options: {minVelocity: .65, minDistance: 10}, onEnd: function (e, t) {
                    if (Math.abs(t.velocityX) > this.state.options.minVelocity && Math.abs(t.distanceX) > this.state.options.minDistance) {
                        var n = "left" == t.directionX ? "$md.swipeleft" : "$md.swiperight";
                        this.dispatchEvent(e, n)
                    }
                }
            });
            var o;
            return o = {handler: r, register: i}
        }]).factory("$$MdGestureHandler", ["$$rAF", function () {
            function e(e) {
                this.name = e, this.state = {}
            }

            function t(e, t, n) {
                n = n || g;
                var r = new angular.element.Event(t);
                r.$material = !0, r.pointer = n, r.srcEvent = e, angular.extend(r, {
                    clientX: n.x,
                    clientY: n.y,
                    screenX: n.x,
                    screenY: n.y,
                    pageX: n.x,
                    pageY: n.y,
                    ctrlKey: e.ctrlKey,
                    altKey: e.altKey,
                    shiftKey: e.shiftKey,
                    metaKey: e.metaKey
                }), angular.element(n.target).trigger(r)
            }

            function n(e, t, n) {
                n = n || g;
                var r;
                "click" === t ? (r = document.createEvent("MouseEvents"), r.initMouseEvent("click", !0, !0, window, e.detail, n.x, n.y, n.x, n.y, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget || null)) : (r = document.createEvent("CustomEvent"), r.initCustomEvent(t, !0, !0, {})), r.$material = !0, r.pointer = n, r.srcEvent = e, n.target.dispatchEvent(r)
            }

            return e.prototype = {
                onStart: angular.noop,
                onMove: angular.noop,
                onEnd: angular.noop,
                onCancel: angular.noop,
                options: {},
                dispatchEvent: "undefined" != typeof window.jQuery && angular.element === window.jQuery ? t : n,
                start: function (e, t) {
                    if (!this.state.isRunning) {
                        var n = this.getNearestParent(e.target), r = n && n.$mdGesture[this.name] || {};
                        this.state = {
                            isRunning: !0,
                            options: angular.extend({}, this.options, r),
                            registeredParent: n
                        }, this.onStart(e, t)
                    }
                },
                move: function (e, t) {
                    this.state.isRunning && this.onMove(e, t)
                },
                end: function (e, t) {
                    this.state.isRunning && (this.onEnd(e, t), this.state.isRunning = !1)
                },
                cancel: function (e, t) {
                    this.onCancel(e, t), this.state = {}
                },
                getNearestParent: function (e) {
                    for (var t = e; t;) {
                        if ((t.$mdGesture || {})[this.name])return t;
                        t = t.parentNode
                    }
                },
                registerElement: function (e, t) {
                    function n() {
                        delete e[0].$mdGesture[r.name], e.off("$destroy", n)
                    }

                    var r = this;
                    return e[0].$mdGesture = e[0].$mdGesture || {}, e[0].$mdGesture[this.name] = t || {}, e.on("$destroy", n), n
                }
            }, e
        }])
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e() {
            function e(e) {
                function t(e) {
                    return c.optionsFactory = e.options, c.methods = (e.methods || []).concat(o), s
                }

                function n(e, t) {
                    return a[e] = t, s
                }

                function r(t, n) {
                    if (n = n || {}, n.methods = n.methods || [], n.options = n.options || function () {
                            return {}
                        }, /^cancel|hide|show$/.test(t))throw new Error("Preset '" + t + "' in " + e + " is reserved!");
                    if (n.methods.indexOf("_options") > -1)throw new Error("Method '_options' in " + e + " is reserved!");
                    return c.presets[t] = {
                        methods: n.methods.concat(o),
                        optionsFactory: n.options,
                        argOption: n.argOption
                    }, s
                }

                function i(t, n, r) {
                    function i(e) {
                        return e && e._options && (e = e._options), u.show(angular.extend({}, l, e))
                    }

                    function o(t, n) {
                        var i = {};
                        return i[e] = d, r.invoke(t || function () {
                            return n
                        }, {}, i)
                    }

                    var s, l, u = t(), d = {hide: u.hide, cancel: u.cancel, show: i};
                    return s = c.methods || [], l = o(c.optionsFactory, {}), angular.forEach(a, function (e, t) {
                        d[t] = e
                    }), angular.forEach(c.presets, function (e, t) {
                        function n(e) {
                            this._options = angular.extend({}, r, e)
                        }

                        var r = o(e.optionsFactory, {}), i = (e.methods || []).concat(s);
                        if (angular.extend(r, {$type: t}), angular.forEach(i, function (e) {
                                n.prototype[e] = function (t) {
                                    return this._options[e] = t, this
                                }
                            }), e.argOption) {
                            var a = "show" + t.charAt(0).toUpperCase() + t.slice(1);
                            d[a] = function (e) {
                                var n = d[t](e);
                                return d.show(n)
                            }
                        }
                        d[t] = function (t) {
                            return arguments.length && e.argOption && !angular.isObject(t) && !angular.isArray(t) ? (new n)[e.argOption](t) : new n(t)
                        }
                    }), d
                }

                var o = ["onHide", "onShow", "onRemove"], a = {}, c = {presets: {}}, s = {
                    setDefaults: t,
                    addPreset: r,
                    addMethod: n,
                    $get: i
                };
                return s.addPreset("build", {methods: ["controller", "controllerAs", "resolve", "template", "templateUrl", "themable", "transformTemplate", "parent"]}), i.$inject = ["$$interimElement", "$animate", "$injector"], s
            }

            function t(e, t, n, r, i, o, a, c, s) {
                function l(e) {
                    return e && angular.isString(e) ? e.replace(/\{\{/g, u).replace(/}}/g, d) : e
                }

                var u = a.startSymbol(), d = a.endSymbol(), f = "{{" === u && "}}" === d, m = f ? angular.identity : l;
                return function () {
                    function a(e) {
                        if (p.length)return f.cancel().then(function () {
                            return a(e)
                        });
                        var t = new d(e);
                        return p.push(t), t.show().then(function () {
                            return t.deferred.promise
                        })
                    }

                    function l(e) {
                        var t = p.shift();
                        return t && t.remove().then(function () {
                                t.deferred.resolve(e)
                            })
                    }

                    function u(e) {
                        var n = p.shift();
                        return t.when(n && n.remove().then(function () {
                            n.deferred.reject(e)
                        }))
                    }

                    function d(a) {
                        var l, u, d, p, h;
                        return a = a || {}, a = angular.extend({
                            preserveScope: !1,
                            scope: a.scope || n.$new(a.isolateScope),
                            onShow: function (e, t, n) {
                                return o.enter(t, n.parent)
                            },
                            onRemove: function (e, n) {
                                return n && o.leave(n) || t.when()
                            }
                        }, a), a.template && (a.template = m(a.template)), l = {
                            options: a,
                            deferred: t.defer(),
                            show: function () {
                                var n;
                                return n = a.skipCompile ? t(function (e) {
                                    e({
                                        locals: {}, link: function () {
                                            return a.element
                                        }
                                    })
                                }) : c.compile(a), p = n.then(function (n) {
                                    function o() {
                                        a.hideDelay && (u = r(f.cancel, a.hideDelay))
                                    }

                                    angular.extend(n.locals, l.options), d = n.link(a.scope), angular.isFunction(a.parent) ? a.parent = a.parent(a.scope, d, a) : angular.isString(a.parent) && (a.parent = angular.element(e[0].querySelector(a.parent))), (a.parent || {}).length || (a.parent = i.find("body"), a.parent.length || (a.parent = i)), a.themable && s(d);
                                    var c = a.onShow(a.scope, d, a);
                                    return t.when(c).then(function () {
                                        (a.onComplete || angular.noop)(a.scope, d, a), o()
                                    })
                                }, function (e) {
                                    p = !0, l.deferred.reject(e)
                                })
                            },
                            cancelTimeout: function () {
                                u && (r.cancel(u), u = void 0)
                            },
                            remove: function () {
                                return l.cancelTimeout(), h = t.when(p).then(function () {
                                    var e = d ? a.onRemove(a.scope, d, a) : !0;
                                    return t.when(e).then(function () {
                                        a.preserveScope || a.scope.$destroy(), h = !0
                                    })
                                })
                            }
                        }
                    }

                    var f, p = [];
                    return f = {show: a, hide: l, cancel: u}
                }
            }

            return e.$get = t, t.$inject = ["$document", "$q", "$rootScope", "$timeout", "$rootElement", "$animate", "$interpolate", "$mdCompiler", "$mdTheming"], e
        }

        angular.module("material.core").provider("$$interimElement", e)
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e, t) {
            function n(e) {
                return e && "" !== e
            }

            var r, i = [], o = {};
            return r = {
                notFoundError: function (t) {
                    e.error("No instance found for handle", t)
                }, getInstances: function () {
                    return i
                }, get: function (e) {
                    if (!n(e))return null;
                    var t, r, o;
                    for (t = 0, r = i.length; r > t; t++)if (o = i[t], o.$$mdHandle === e)return o;
                    return null
                }, register: function (e, t) {
                    function n() {
                        var t = i.indexOf(e);
                        -1 !== t && i.splice(t, 1)
                    }

                    function r() {
                        var n = o[t];
                        n && (n.resolve(e), delete o[t])
                    }

                    return t ? (e.$$mdHandle = t, i.push(e), r(), n) : angular.noop
                }, when: function (e) {
                    if (n(e)) {
                        var i = t.defer(), a = r.get(e);
                        return a ? i.resolve(a) : o[e] = i, i.promise
                    }
                    return t.reject("Invalid `md-component-id` value.")
                }
            }
        }

        angular.module("material.core").factory("$mdComponentRegistry", e), e.$inject = ["$log", "$q"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e) {
            return {
                controller: angular.noop, link: function (t, n, r) {
                    r.hasOwnProperty("mdInkRippleCheckbox") ? e.attachCheckboxBehavior(t, n) : e.attachButtonBehavior(t, n)
                }
            }
        }

        function t(e, t) {
            function n(e, t, n) {
                return o(e, t, angular.extend({
                    fullRipple: !0,
                    isMenuItem: t.hasClass("md-menu-item"),
                    center: !1,
                    dimBackground: !0
                }, n))
            }

            function r(e, t, n) {
                return o(e, t, angular.extend({center: !0, dimBackground: !1, fitRipple: !0}, n))
            }

            function i(e, t, n) {
                return o(e, t, angular.extend({center: !1, dimBackground: !0, outline: !1, rippleSize: "full"}, n))
            }

            function o(n, r, i) {
                function o() {
                    var e = r.data("$mdRippleContainer");
                    return e ? e : (e = angular.element('<div class="md-ripple-container">'), r.append(e), r.data("$mdRippleContainer", e), e)
                }

                function a(e) {
                    function t(e) {
                        var t = "#" === e.charAt(0) ? e.substr(1) : e, n = t.length / 3, r = t.substr(0, n), i = t.substr(n, n), o = t.substr(2 * n);
                        return 1 === n && (r += r, i += i, o += o), "rgba(" + parseInt(r, 16) + "," + parseInt(i, 16) + "," + parseInt(o, 16) + ",0.1)"
                    }

                    function n(e) {
                        return e.replace(")", ", 0.1)").replace("(", "a(")
                    }

                    if (e)return 0 === e.indexOf("rgba") ? e.replace(/\d?\.?\d*\s*\)\s*$/, "0.1)") : 0 === e.indexOf("rgb") ? n(e) : 0 === e.indexOf("#") ? t(e) : void 0
                }

                function c(e, n) {
                    g.splice(g.indexOf(e), 1), 0 === g.length && o().css({backgroundColor: ""}), t(function () {
                        e.remove()
                    }, n, !1)
                }

                function s(e) {
                    var t = g.indexOf(e), n = $[t] || {}, r = g.length > 1 ? !1 : b, o = g.length > 1 ? !1 : E;
                    r || n.animating || o ? e.addClass("md-ripple-visible") : e && (e.removeClass("md-ripple-visible"), i.outline && e.css({
                        width: m + "px",
                        height: m + "px",
                        marginLeft: -1 * m + "px",
                        marginTop: -1 * m + "px"
                    }), c(e, i.outline ? 450 : 650))
                }

                function l(n, c) {
                    function l(e) {
                        var t = angular.element('<div class="md-ripple" data-counter="' + h++ + '">');
                        return g.unshift(t), $.unshift({animating: !0}), f.append(t), e && t.css(e), t
                    }

                    function u(e, t) {
                        var n, r, o, a = f.prop("offsetWidth"), c = f.prop("offsetHeight");
                        return i.isMenuItem ? r = Math.sqrt(Math.pow(a, 2) + Math.pow(c, 2)) : i.outline ? (o = y.getBoundingClientRect(), e -= o.left, t -= o.top, a = Math.max(e, a - e), c = Math.max(t, c - t), r = 2 * Math.sqrt(Math.pow(a, 2) + Math.pow(c, 2))) : (n = i.fullRipple ? 1.1 : .8, r = Math.sqrt(Math.pow(a, 2) + Math.pow(c, 2)) * n, i.fitRipple && (r = Math.min(c, a, r))), r
                    }

                    function d(e, t, n) {
                        function r(e) {
                            return e.replace("rgba", "rgb").replace(/,[^\),]+\)/, ")")
                        }

                        var o, a = {backgroundColor: r(x), borderColor: r(x), width: e + "px", height: e + "px"};
                        return i.outline ? (a.width = 0, a.height = 0) : a.marginLeft = a.marginTop = e * -.5 + "px", i.center ? a.left = a.top = "50%" : (o = y.getBoundingClientRect(), a.left = Math.round((t - o.left) / f.prop("offsetWidth") * 100) + "%", a.top = Math.round((n - o.top) / f.prop("offsetHeight") * 100) + "%"), a
                    }

                    x = a(r.attr("md-ink-ripple")) || a(e.getComputedStyle(i.colorElement[0]).color || "rgb(0, 0, 0)");
                    var f = o(), p = u(n, c), v = d(p, n, c), b = l(v), E = g.indexOf(b), w = $[E] || {};
                    return m = p, w.animating = !0, t(function () {
                        i.dimBackground && f.css({backgroundColor: x}), b.addClass("md-ripple-placed md-ripple-scaled"), b.css(i.outline ? {
                            borderWidth: .5 * p + "px",
                            marginLeft: p * -.5 + "px",
                            marginTop: p * -.5 + "px"
                        } : {left: "50%", top: "50%"}), s(b), t(function () {
                            w.animating = !1, s(b)
                        }, i.outline ? 450 : 225, !1)
                    }, 0, !1), b
                }

                function u(e) {
                    f() && (l(e.pointer.x, e.pointer.y), E = !0)
                }

                function d() {
                    E = !1;
                    var e = g[g.length - 1];
                    t(function () {
                        s(e)
                    }, 0, !1)
                }

                function f() {
                    function e(e) {
                        return e && e.hasAttribute && e.hasAttribute("disabled")
                    }

                    var t = y.parentNode, n = t && t.parentNode, r = n && n.parentNode;
                    return !(e(y) || e(t) || e(n) || e(r))
                }

                if (r.controller("mdNoInk"))return angular.noop;
                i = angular.extend({
                    colorElement: r,
                    mousedown: !0,
                    hover: !0,
                    focus: !0,
                    center: !1,
                    mousedownPauseTime: 150,
                    dimBackground: !1,
                    outline: !1,
                    fullRipple: !0,
                    isMenuItem: !1,
                    fitRipple: !1
                }, i);
                var m, p = r.controller("mdInkRipple") || {}, h = 0, g = [], $ = [], v = r.attr("md-highlight"), b = !1, E = !1, y = r[0], w = r.attr("md-ripple-size"), x = a(r.attr("md-ink-ripple")) || a(e.getComputedStyle(i.colorElement[0]).color || "rgb(0, 0, 0)");
                switch (w) {
                    case"full":
                        i.fullRipple = !0;
                        break;
                    case"partial":
                        i.fullRipple = !1
                }
                return i.mousedown && r.on("$md.pressdown", u).on("$md.pressup", d), p.createRipple = l, v && n.$watch(v, function (e) {
                    b = e, b && !g.length && t(function () {
                        l(0, 0)
                    }, 0, !1), angular.forEach(g, s)
                }), function () {
                    r.off("$md.pressdown", u).off("$md.pressup", d), o().remove()
                }
            }

            return {attachButtonBehavior: n, attachCheckboxBehavior: r, attachTabBehavior: i, attach: o}
        }

        function n() {
            return function () {
                return {controller: angular.noop}
            }
        }

        angular.module("material.core").factory("$mdInkRipple", t).directive("mdInkRipple", e).directive("mdNoInk", n()).directive("mdNoBar", n()).directive("mdNoStretch", n()), e.$inject = ["$mdInkRipple"], t.$inject = ["$window", "$timeout"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        angular.module("material.core.theming.palette", []).constant("$mdColorPalette", {
            red: {
                50: "#ffebee",
                100: "#ffcdd2",
                200: "#ef9a9a",
                300: "#e57373",
                400: "#ef5350",
                500: "#f44336",
                600: "#e53935",
                700: "#d32f2f",
                800: "#c62828",
                900: "#b71c1c",
                A100: "#ff8a80",
                A200: "#ff5252",
                A400: "#ff1744",
                A700: "#d50000",
                contrastDefaultColor: "light",
                contrastDarkColors: "50 100 200 300 400 A100",
                contrastStrongLightColors: "500 600 700 A200 A400 A700"
            },
            pink: {
                50: "#fce4ec",
                100: "#f8bbd0",
                200: "#f48fb1",
                300: "#f06292",
                400: "#ec407a",
                500: "#e91e63",
                600: "#d81b60",
                700: "#c2185b",
                800: "#ad1457",
                900: "#880e4f",
                A100: "#ff80ab",
                A200: "#ff4081",
                A400: "#f50057",
                A700: "#c51162",
                contrastDefaultColor: "light",
                contrastDarkColors: "50 100 200 300 400 A100",
                contrastStrongLightColors: "500 600 A200 A400 A700"
            },
            purple: {
                50: "#f3e5f5",
                100: "#e1bee7",
                200: "#ce93d8",
                300: "#ba68c8",
                400: "#ab47bc",
                500: "#9c27b0",
                600: "#8e24aa",
                700: "#7b1fa2",
                800: "#6a1b9a",
                900: "#4a148c",
                A100: "#ea80fc",
                A200: "#e040fb",
                A400: "#d500f9",
                A700: "#aa00ff",
                contrastDefaultColor: "light",
                contrastDarkColors: "50 100 200 A100",
                contrastStrongLightColors: "300 400 A200 A400 A700"
            },
            "deep-purple": {
                50: "#ede7f6",
                100: "#d1c4e9",
                200: "#b39ddb",
                300: "#9575cd",
                400: "#7e57c2",
                500: "#673ab7",
                600: "#5e35b1",
                700: "#512da8",
                800: "#4527a0",
                900: "#311b92",
                A100: "#b388ff",
                A200: "#7c4dff",
                A400: "#651fff",
                A700: "#6200ea",
                contrastDefaultColor: "light",
                contrastDarkColors: "50 100 200 A100",
                contrastStrongLightColors: "300 400 A200"
            },
            indigo: {
                50: "#e8eaf6",
                100: "#c5cae9",
                200: "#9fa8da",
                300: "#7986cb",
                400: "#5c6bc0",
                500: "#3f51b5",
                600: "#3949ab",
                700: "#303f9f",
                800: "#283593",
                900: "#1a237e",
                A100: "#8c9eff",
                A200: "#536dfe",
                A400: "#3d5afe",
                A700: "#304ffe",
                contrastDefaultColor: "light",
                contrastDarkColors: "50 100 200 A100",
                contrastStrongLightColors: "300 400 A200 A400"
            },
            blue: {
                50: "#e3f2fd",
                100: "#bbdefb",
                200: "#90caf9",
                300: "#64b5f6",
                400: "#42a5f5",
                500: "#2196f3",
                600: "#1e88e5",
                700: "#1976d2",
                800: "#1565c0",
                900: "#0d47a1",
                A100: "#82b1ff",
                A200: "#448aff",
                A400: "#2979ff",
                A700: "#2962ff",
                contrastDefaultColor: "light",
                contrastDarkColors: "100 200 300 400 A100",
                contrastStrongLightColors: "500 600 700 A200 A400 A700"
            },
            "light-blue": {
                50: "#e1f5fe",
                100: "#b3e5fc",
                200: "#81d4fa",
                300: "#4fc3f7",
                400: "#29b6f6",
                500: "#03a9f4",
                600: "#039be5",
                700: "#0288d1",
                800: "#0277bd",
                900: "#01579b",
                A100: "#80d8ff",
                A200: "#40c4ff",
                A400: "#00b0ff",
                A700: "#0091ea",
                contrastDefaultColor: "dark",
                contrastLightColors: "500 600 700 800 900 A700",
                contrastStrongLightColors: "500 600 700 800 A700"
            },
            cyan: {
                50: "#e0f7fa",
                100: "#b2ebf2",
                200: "#80deea",
                300: "#4dd0e1",
                400: "#26c6da",
                500: "#00bcd4",
                600: "#00acc1",
                700: "#0097a7",
                800: "#00838f",
                900: "#006064",
                A100: "#84ffff",
                A200: "#18ffff",
                A400: "#00e5ff",
                A700: "#00b8d4",
                contrastDefaultColor: "dark",
                contrastLightColors: "500 600 700 800 900",
                contrastStrongLightColors: "500 600 700 800"
            },
            teal: {
                50: "#e0f2f1",
                100: "#b2dfdb",
                200: "#80cbc4",
                300: "#4db6ac",
                400: "#26a69a",
                500: "#009688",
                600: "#00897b",
                700: "#00796b",
                800: "#00695c",
                900: "#004d40",
                A100: "#a7ffeb",
                A200: "#64ffda",
                A400: "#1de9b6",
                A700: "#00bfa5",
                contrastDefaultColor: "dark",
                contrastLightColors: "500 600 700 800 900",
                contrastStrongLightColors: "500 600 700"
            },
            green: {
                50: "#e8f5e9",
                100: "#c8e6c9",
                200: "#a5d6a7",
                300: "#81c784",
                400: "#66bb6a",
                500: "#4caf50",
                600: "#43a047",
                700: "#388e3c",
                800: "#2e7d32",
                900: "#1b5e20",
                A100: "#b9f6ca",
                A200: "#69f0ae",
                A400: "#00e676",
                A700: "#00c853",
                contrastDefaultColor: "dark",
                contrastLightColors: "500 600 700 800 900",
                contrastStrongLightColors: "500 600 700"
            },
            "light-green": {
                50: "#f1f8e9",
                100: "#dcedc8",
                200: "#c5e1a5",
                300: "#aed581",
                400: "#9ccc65",
                500: "#8bc34a",
                600: "#7cb342",
                700: "#689f38",
                800: "#558b2f",
                900: "#33691e",
                A100: "#ccff90",
                A200: "#b2ff59",
                A400: "#76ff03",
                A700: "#64dd17",
                contrastDefaultColor: "dark",
                contrastLightColors: "800 900",
                contrastStrongLightColors: "800 900"
            },
            lime: {
                50: "#f9fbe7",
                100: "#f0f4c3",
                200: "#e6ee9c",
                300: "#dce775",
                400: "#d4e157",
                500: "#cddc39",
                600: "#c0ca33",
                700: "#afb42b",
                800: "#9e9d24",
                900: "#827717",
                A100: "#f4ff81",
                A200: "#eeff41",
                A400: "#c6ff00",
                A700: "#aeea00",
                contrastDefaultColor: "dark",
                contrastLightColors: "900",
                contrastStrongLightColors: "900"
            },
            yellow: {
                50: "#fffde7",
                100: "#fff9c4",
                200: "#fff59d",
                300: "#fff176",
                400: "#ffee58",
                500: "#ffeb3b",
                600: "#fdd835",
                700: "#fbc02d",
                800: "#f9a825",
                900: "#f57f17",
                A100: "#ffff8d",
                A200: "#ffff00",
                A400: "#ffea00",
                A700: "#ffd600",
                contrastDefaultColor: "dark"
            },
            amber: {
                50: "#fff8e1",
                100: "#ffecb3",
                200: "#ffe082",
                300: "#ffd54f",
                400: "#ffca28",
                500: "#ffc107",
                600: "#ffb300",
                700: "#ffa000",
                800: "#ff8f00",
                900: "#ff6f00",
                A100: "#ffe57f",
                A200: "#ffd740",
                A400: "#ffc400",
                A700: "#ffab00",
                contrastDefaultColor: "dark"
            },
            orange: {
                50: "#fff3e0",
                100: "#ffe0b2",
                200: "#ffcc80",
                300: "#ffb74d",
                400: "#ffa726",
                500: "#ff9800",
                600: "#fb8c00",
                700: "#f57c00",
                800: "#ef6c00",
                900: "#e65100",
                A100: "#ffd180",
                A200: "#ffab40",
                A400: "#ff9100",
                A700: "#ff6d00",
                contrastDefaultColor: "dark",
                contrastLightColors: "800 900",
                contrastStrongLightColors: "800 900"
            },
            "deep-orange": {
                50: "#fbe9e7",
                100: "#ffccbc",
                200: "#ffab91",
                300: "#ff8a65",
                400: "#ff7043",
                500: "#ff5722",
                600: "#f4511e",
                700: "#e64a19",
                800: "#d84315",
                900: "#bf360c",
                A100: "#ff9e80",
                A200: "#ff6e40",
                A400: "#ff3d00",
                A700: "#dd2c00",
                contrastDefaultColor: "light",
                contrastDarkColors: "50 100 200 300 400 A100 A200",
                contrastStrongLightColors: "500 600 700 800 900 A400 A700"
            },
            brown: {
                50: "#efebe9",
                100: "#d7ccc8",
                200: "#bcaaa4",
                300: "#a1887f",
                400: "#8d6e63",
                500: "#795548",
                600: "#6d4c41",
                700: "#5d4037",
                800: "#4e342e",
                900: "#3e2723",
                A100: "#d7ccc8",
                A200: "#bcaaa4",
                A400: "#8d6e63",
                A700: "#5d4037",
                contrastDefaultColor: "light",
                contrastDarkColors: "50 100 200",
                contrastStrongLightColors: "300 400"
            },
            grey: {
                0: "#ffffff",
                50: "#fafafa",
                100: "#f5f5f5",
                200: "#eeeeee",
                300: "#e0e0e0",
                400: "#bdbdbd",
                500: "#9e9e9e",
                600: "#757575",
                700: "#616161",
                800: "#424242",
                900: "#212121",
                1000: "#000000",
                A100: "#ffffff",
                A200: "#eeeeee",
                A400: "#bdbdbd",
                A700: "#616161",
                contrastDefaultColor: "dark",
                contrastLightColors: "600 700 800 900"
            },
            "blue-grey": {
                50: "#eceff1",
                100: "#cfd8dc",
                200: "#b0bec5",
                300: "#90a4ae",
                400: "#78909c",
                500: "#607d8b",
                600: "#546e7a",
                700: "#455a64",
                800: "#37474f",
                900: "#263238",
                A100: "#cfd8dc",
                A200: "#b0bec5",
                A400: "#78909c",
                A700: "#455a64",
                contrastDefaultColor: "light",
                contrastDarkColors: "50 100 200 300",
                contrastStrongLightColors: "400 500"
            }
        })
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e) {
            function t(e, t) {
                return t = t || {}, s[e] = i(e, t), u
            }

            function n(e, t) {
                return i(e, angular.extend({}, s[e] || {}, t))
            }

            function i(e, t) {
                var n = x.filter(function (e) {
                    return !t[e]
                });
                if (n.length)throw new Error("Missing colors %1 in palette %2!".replace("%1", n.join(", ")).replace("%2", e));
                return t
            }

            function o(e, t) {
                if (t = t || "default", l[e])return l[e];
                var n = "string" == typeof t ? l[t] : t, r = new a(e);
                return n && angular.forEach(n.colors, function (e, t) {
                    r.colors[t] = {name: e.name, hues: angular.extend({}, e.hues)}
                }), l[e] = r, r
            }

            function a(e) {
                function t(e) {
                    if (e = 0 === arguments.length ? !0 : !!e, e !== n.isDark) {
                        n.isDark = e, n.foregroundPalette = n.isDark ? m : f, n.foregroundShadow = n.isDark ? p : h;
                        var t = n.isDark ? w : y, r = n.isDark ? y : w;
                        return angular.forEach(t, function (e, t) {
                            var i = n.colors[t], o = r[t];
                            if (i)for (var a in i.hues)i.hues[a] === o[a] && (i.hues[a] = e[a])
                        }), n
                    }
                }

                var n = this;
                n.name = e, n.colors = {}, n.dark = t, t(!1), b.forEach(function (e) {
                    var t = (n.isDark ? w : y)[e];
                    n[e + "Palette"] = function (r, i) {
                        var o = n.colors[e] = {name: r, hues: angular.extend({}, t, i)};
                        return Object.keys(o.hues).forEach(function (e) {
                            if (!t[e])throw new Error("Invalid hue name '%1' in theme %2's %3 color %4. Available hue names: %4".replace("%1", e).replace("%2", n.name).replace("%3", r).replace("%4", Object.keys(t).join(", ")))
                        }), Object.keys(o.hues).map(function (e) {
                            return o.hues[e]
                        }).forEach(function (t) {
                            if (-1 == x.indexOf(t))throw new Error("Invalid hue value '%1' in theme %2's %3 color %4. Available hue values: %5".replace("%1", t).replace("%2", n.name).replace("%3", e).replace("%4", r).replace("%5", x.join(", ")))
                        }), n
                    }, n[e + "Color"] = function () {
                        var t = Array.prototype.slice.call(arguments);
                        return console.warn("$mdThemingProviderTheme." + e + "Color() has been deprecated. Use $mdThemingProviderTheme." + e + "Palette() instead."), n[e + "Palette"].apply(n, t)
                    }
                })
            }

            function d(e, t) {
                function n(e) {
                    return void 0 === e || "" === e ? !0 : void 0 !== l[e]
                }

                function r(t, n) {
                    void 0 === n && (n = t, t = void 0), void 0 === t && (t = e), r.inherit(n, n)
                }

                return r.inherit = function (r, i) {
                    function o(e) {
                        n(e) || t.warn("Attempted to use unregistered theme '" + e + "'. Register it with $mdThemingProvider.theme().");
                        var i = r.data("$mdThemeName");
                        i && r.removeClass("md-" + i + "-theme"), r.addClass("md-" + e + "-theme"), r.data("$mdThemeName", e)
                    }

                    var a = i.controller("mdTheme"), c = r.attr("md-theme-watch");
                    if (($ || angular.isDefined(c)) && "false" != c) {
                        var s = e.$watch(function () {
                            return a && a.$mdTheme || g
                        }, o);
                        r.on("$destroy", s)
                    } else {
                        var l = a && a.$mdTheme || g;
                        o(l)
                    }
                }, r.registered = n, r.defaultTheme = function () {
                    return g
                }, r
            }

            s = {}, l = {};
            var g = "default", $ = !1;
            return angular.extend(s, e), d.$inject = ["$rootScope", "$log"], u = {
                definePalette: t,
                extendPalette: n,
                theme: o,
                setDefaultTheme: function (e) {
                    g = e
                },
                alwaysWatchTheme: function (e) {
                    $ = e
                },
                $get: d,
                _LIGHT_DEFAULT_HUES: y,
                _DARK_DEFAULT_HUES: w,
                _PALETTES: s,
                _THEMES: l,
                _parseRules: r,
                _rgba: c
            }
        }

        function t(e, t, n) {
            return {
                priority: 100, link: {
                    pre: function (r, i, o) {
                        var a = {
                            $setTheme: function (t) {
                                e.registered(t) || n.warn("attempted to use unregistered theme '" + t + "'"), a.$mdTheme = t
                            }
                        };
                        i.data("$mdThemeController", a), a.$setTheme(t(o.mdTheme)(r)), o.$observe("mdTheme", a.$setTheme)
                    }
                }
            }
        }

        function n(e) {
            return e
        }

        function r(e, t, n) {
            o(e, t), n = n.replace(/THEME_NAME/g, e.name);
            var r = [], i = e.colors[t], a = new RegExp(".md-" + e.name + "-theme", "g"), l = new RegExp("('|\")?{{\\s*(" + t + ")-(color|contrast)-?(\\d\\.?\\d*)?\\s*}}(\"|')?", "g"), u = /'?"?\{\{\s*([a-zA-Z]+)-(A?\d+|hue\-[0-3]|shadow)-?(\d\.?\d*)?\s*\}\}'?"?/g, d = s[i.name];
            return n = n.replace(u, function (t, n, r, i) {
                return "foreground" === n ? "shadow" == r ? e.foregroundShadow : e.foregroundPalette[r] || e.foregroundPalette[1] : (0 === r.indexOf("hue") && (r = e.colors[n].hues[r]), c((s[e.colors[n].name][r] || "").value, i))
            }), angular.forEach(i.hues, function (t, i) {
                var o = n.replace(l, function (e, n, r, i, o) {
                    return c(d[t]["color" === i ? "value" : "contrast"], o)
                });
                "default" !== i && (o = o.replace(a, ".md-" + e.name + "-theme.md-" + i)), r.push(o)
            }), r.join("")
        }

        function i(e) {
            function t(e) {
                var t = e.contrastDefaultColor, n = e.contrastLightColors || [], r = e.contrastStrongLightColors || [], i = e.contrastDarkColors || [];
                "string" == typeof n && (n = n.split(" ")), "string" == typeof r && (r = r.split(" ")), "string" == typeof i && (i = i.split(" ")), delete e.contrastDefaultColor, delete e.contrastLightColors, delete e.contrastStrongLightColors, delete e.contrastDarkColors, angular.forEach(e, function (o, c) {
                    function s() {
                        return "light" === t ? i.indexOf(c) > -1 ? g : r.indexOf(c) > -1 ? v : $ : n.indexOf(c) > -1 ? r.indexOf(c) > -1 ? v : $ : g
                    }

                    if (!angular.isObject(o)) {
                        var l = a(o);
                        if (!l)throw new Error("Color %1, in palette %2's hue %3, is invalid. Hex or rgb(a) color expected.".replace("%1", o).replace("%2", e.name).replace("%3", c));
                        e[c] = {value: l, contrast: s()}
                    }
                })
            }

            var n = e.has("$MD_THEME_CSS") ? e.get("$MD_THEME_CSS") : "";
            angular.forEach(s, t);
            var i = n.split(/\}(?!(\}|'|"|;))/).filter(function (e) {
                return e && e.length
            }).map(function (e) {
                return e.trim() + "}"
            }), o = {};
            b.forEach(function (e) {
                o[e] = ""
            });
            var c = new RegExp("md-(" + b.join("|") + ")", "g");
            i.forEach(function (e) {
                for (var t, n = (e.match(c), 0); t = b[n]; n++)if (e.indexOf(".md-" + t) > -1)return o[t] += e;
                for (n = 0; t = b[n]; n++)if (e.indexOf(t) > -1)return o[t] += e;
                return o[E] += e
            });
            var u = "";
            if (angular.forEach(l, function (e) {
                    b.forEach(function (t) {
                        u += r(e, t, o[t] + "")
                    }), e.colors.primary.name == e.colors.accent.name && console.warn("$mdThemingProvider: Using the same palette for primary and accent. This violates the material design spec.")
                }), !d) {
                var f = document.createElement("style");
                f.innerHTML = u;
                var m = document.getElementsByTagName("head")[0];
                m.insertBefore(f, m.firstElementChild), d = !0
            }
        }

        function o(e, t) {
            if (!s[(e.colors[t] || {}).name])throw new Error("You supplied an invalid color palette for theme %1's %2 palette. Available palettes: %3".replace("%1", e.name).replace("%2", t).replace("%3", Object.keys(s).join(", ")))
        }

        function a(e) {
            if (angular.isArray(e) && 3 == e.length)return e;
            if (/^rgb/.test(e))return e.replace(/(^\s*rgba?\(|\)\s*$)/g, "").split(",").map(function (e, t) {
                return 3 == t ? parseFloat(e, 10) : parseInt(e, 10)
            });
            if ("#" == e.charAt(0) && (e = e.substring(1)), /^([a-fA-F0-9]{3}){1,2}$/g.test(e)) {
                var t = e.length / 3, n = e.substr(0, t), r = e.substr(t, t), i = e.substr(2 * t);
                return 1 === t && (n += n, r += r, i += i), [parseInt(n, 16), parseInt(r, 16), parseInt(i, 16)]
            }
        }

        function c(e, t) {
            return 4 == e.length && (e = angular.copy(e), t ? e.pop() : t = e.pop()), t && ("number" == typeof t || "string" == typeof t && t.length) ? "rgba(" + e.join(",") + "," + t + ")" : "rgb(" + e.join(",") + ")"
        }

        angular.module("material.core.theming", ["material.core.theming.palette"]).directive("mdTheme", t).directive("mdThemable", n).provider("$mdTheming", e).run(i);
        var s, l, u, d, f = {
            name: "dark",
            1: "rgba(0,0,0,0.87)",
            2: "rgba(0,0,0,0.54)",
            3: "rgba(0,0,0,0.26)",
            4: "rgba(0,0,0,0.12)"
        }, m = {
            name: "light",
            1: "rgba(255,255,255,1.0)",
            2: "rgba(255,255,255,0.7)",
            3: "rgba(255,255,255,0.3)",
            4: "rgba(255,255,255,0.12)"
        }, p = "1px 1px 0px rgba(0,0,0,0.4), -1px -1px 0px rgba(0,0,0,0.4)", h = "", g = a("rgba(0,0,0,0.87)"), $ = a("rgba(255,255,255,0.87"), v = a("rgb(255,255,255)"), b = ["primary", "accent", "warn", "background"], E = "primary", y = {
            accent: {
                "default": "A200",
                "hue-1": "A100",
                "hue-2": "A400",
                "hue-3": "A700"
            }
        }, w = {background: {"default": "500", "hue-1": "300", "hue-2": "600", "hue-3": "800"}};
        b.forEach(function (e) {
            var t = {"default": "500", "hue-1": "300", "hue-2": "800", "hue-3": "A100"};
            y[e] || (y[e] = t), w[e] || (w[e] = t)
        });
        var x = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "A100", "A200", "A400", "A700"];
        e.$inject = ["$mdColorPalette"], t.$inject = ["$mdTheming", "$interpolate", "$log"], n.$inject = ["$mdTheming"], i.$inject = ["$injector"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        angular.module("material.components.autocomplete", ["material.core", "material.components.icon"])
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e) {
            return e
        }

        angular.module("material.components.backdrop", ["material.core"]).directive("mdBackdrop", e), e.$inject = ["$mdTheming"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e() {
            return {restrict: "E"}
        }

        function t(e) {
            function t(e, t, i, o, a, c, s, l, u, d) {
                function f(n, r, o) {
                    h = a('<md-backdrop class="md-opaque md-bottom-sheet-backdrop">')(n), h.on("click", function () {
                        i(s.cancel)
                    }), c.inherit(h, o.parent), e.enter(h, o.parent, null);
                    var u = new p(r, o.parent);
                    return o.bottomSheet = u, o.targetEvent && angular.element(o.targetEvent.target).blur(), c.inherit(u.element, o.parent), o.disableParentScroll && (o.lastOverflow = o.parent.css("overflow"), o.parent.css("overflow", "hidden")), e.enter(u.element, o.parent).then(function () {
                        var e = angular.element(r[0].querySelector("button") || r[0].querySelector("a") || r[0].querySelector("[ng-click]"));
                        e.focus(), o.escapeToClose && (o.rootElementKeyupCallback = function (e) {
                            e.keyCode === t.KEY_CODE.ESCAPE && i(s.cancel)
                        }, l.on("keyup", o.rootElementKeyupCallback))
                    })
                }

                function m(t, n, r) {
                    var i = r.bottomSheet;
                    return e.leave(h), e.leave(i.element).then(function () {
                        r.disableParentScroll && (r.parent.css("overflow", r.lastOverflow), delete r.lastOverflow), i.cleanup(), r.targetEvent && angular.element(r.targetEvent.target).focus()
                    })
                }

                function p(e, o) {
                    function a() {
                        e.css(t.CSS.TRANSITION_DURATION, "0ms")
                    }

                    function c(n) {
                        var i = n.pointer.distanceY;
                        5 > i && (i = Math.max(-r, i / 2)), e.css(t.CSS.TRANSFORM, "translate3d(0," + (r + i) + "px,0)")
                    }

                    function l(r) {
                        if (r.pointer.distanceY > 0 && (r.pointer.distanceY > 20 || Math.abs(r.pointer.velocityY) > n)) {
                            var o = e.prop("offsetHeight") - r.pointer.distanceY, a = Math.min(o / r.pointer.velocityY * .75, 500);
                            e.css(t.CSS.TRANSITION_DURATION, a + "ms"), i(s.cancel)
                        } else e.css(t.CSS.TRANSITION_DURATION, ""), e.css(t.CSS.TRANSFORM, "")
                    }

                    var u = d.register(o, "drag", {horizontal: !1});
                    return o.on("$md.dragstart", a).on("$md.drag", c).on("$md.dragend", l), {
                        element: e,
                        cleanup: function () {
                            u(), o.off("$md.dragstart", a).off("$md.drag", c).off("$md.dragend", l)
                        }
                    }
                }

                var h;
                return {
                    themable: !0,
                    targetEvent: null,
                    onShow: f,
                    onRemove: m,
                    escapeToClose: !0,
                    disableParentScroll: !0
                }
            }

            var n = .5, r = 80;
            return t.$inject = ["$animate", "$mdConstant", "$timeout", "$$rAF", "$compile", "$mdTheming", "$mdBottomSheet", "$rootElement", "$rootScope", "$mdGesture"], e("$mdBottomSheet").setDefaults({
                methods: ["disableParentScroll", "escapeToClose", "targetEvent"],
                options: t
            })
        }

        angular.module("material.components.bottomSheet", ["material.core", "material.components.backdrop"]).directive("mdBottomSheet", e).provider("$mdBottomSheet", t), t.$inject = ["$$interimElementProvider"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e, t, n) {
            function r(e) {
                return angular.isDefined(e.href) || angular.isDefined(e.ngHref)
            }

            function i(e, t) {
                return r(t) ? '<a class="md-button" ng-transclude></a>' : '<button class="md-button" ng-transclude></button>'
            }

            function o(i, o, a) {
                var c = o[0];
                t(o), e.attachButtonBehavior(i, o);
                var s = c.textContent.trim();
                s || n.expect(o, "aria-label"), r(a) && angular.isDefined(a.ngDisabled) && i.$watch(a.ngDisabled, function (e) {
                    o.attr("tabindex", e ? -1 : 0)
                })
            }

            return {restrict: "EA", replace: !0, transclude: !0, template: i, link: o}
        }

        angular.module("material.components.button", ["material.core"]).directive("mdButton", e), e.$inject = ["$mdInkRipple", "$mdTheming", "$mdAria"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e) {
            return {
                restrict: "E", link: function (t, n) {
                    e(n)
                }
            }
        }

        angular.module("material.components.card", ["material.core"]).directive("mdCard", e), e.$inject = ["$mdTheming"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e, t, n, r, i, o) {
            function a(t, a) {
                return a.type = "checkbox", a.tabIndex = 0, t.attr("role", a.type), function (t, a, s, l) {
                    function u(e) {
                        e.which === r.KEY_CODE.SPACE && (e.preventDefault(), d(e))
                    }

                    function d(e) {
                        a[0].hasAttribute("disabled") || t.$apply(function () {
                            m = !m, l.$setViewValue(m, e && e.type), l.$render()
                        })
                    }

                    function f() {
                        m = l.$viewValue, m ? a.addClass(c) : a.removeClass(c)
                    }

                    l = l || o.fakeNgModel();
                    var m = !1;
                    i(a), s.ngChecked && t.$watch(t.$eval.bind(t, s.ngChecked), l.$setViewValue.bind(l)), n.expectWithText(a, "aria-label"), e.link.pre(t, {
                        on: angular.noop,
                        0: {}
                    }, s, [l]), a.on("click", d).on("keypress", u), l.$render = f
                }
            }

            e = e[0];
            var c = "md-checked";
            return {
                restrict: "E",
                transclude: !0,
                require: "?ngModel",
                template: '<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-icon"></div></div><div ng-transclude class="md-label"></div>',
                compile: a
            }
        }

        angular.module("material.components.checkbox", ["material.core"]).directive("mdCheckbox", e), e.$inject = ["inputDirective", "$mdInkRipple", "$mdAria", "$mdConstant", "$mdTheming", "$mdUtil"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e) {
            function n(e, t) {
                this.$scope = e, this.$element = t
            }

            return {
                restrict: "E", controller: ["$scope", "$element", n], link: function (n, r) {
                    r[0];
                    e(r), n.$broadcast("$mdContentLoaded", r), t(r[0])
                }
            }
        }

        function t(e) {
            angular.element(e).on("$md.pressdown", function (t) {
                "t" === t.pointer.type && (t.$materialScrollFixed || (t.$materialScrollFixed = !0, 0 === e.scrollTop ? e.scrollTop = 1 : e.scrollHeight === e.scrollTop + e.offsetHeight && (e.scrollTop -= 1)))
            })
        }

        angular.module("material.components.content", ["material.core"]).directive("mdContent", e), e.$inject = ["$mdTheming"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e, t) {
            return {
                restrict: "E", link: function (n, r) {
                    t(r), e(function () {
                        var e = r[0].querySelector("md-content");
                        e && e.scrollHeight > e.clientHeight && r.addClass("md-content-overflow")
                    })
                }
            }
        }

        function t(e) {
            function t(e, t) {
                return {
                    template: ['<md-dialog md-theme="{{ dialog.theme }}" aria-label="{{ dialog.ariaLabel }}">', "<md-content>", "<h2>{{ dialog.title }}</h2>", "<p>{{ dialog.content }}</p>", "</md-content>", '<div class="md-actions">', '<md-button ng-if="dialog.$type == \'confirm\'" ng-click="dialog.abort()">', "{{ dialog.cancel }}", "</md-button>", '<md-button ng-click="dialog.hide()" class="md-primary">', "{{ dialog.ok }}", "</md-button>", "</div>", "</md-dialog>"].join(""),
                    controller: function () {
                        this.hide = function () {
                            e.hide(!0)
                        }, this.abort = function () {
                            e.cancel()
                        }
                    },
                    controllerAs: "dialog",
                    bindToController: !0,
                    theme: t.defaultTheme()
                }
            }

            function n(e, t, n, r, i, o, a, c, s, l, u, d) {
                function f(n, i, a) {
                    function l() {
                        var e = i[0].querySelector(".dialog-close");
                        if (!e) {
                            var t = i[0].querySelectorAll(".md-actions button");
                            e = t[t.length - 1]
                        }
                        return angular.element(e)
                    }

                    a.parent = angular.element(a.parent), a.popInTarget = angular.element((a.targetEvent || {}).target);
                    var u = l();
                    if (p(i.find("md-dialog")), a.hasBackdrop) {
                        var f = a.parent[0] == o[0].body && o[0].documentElement && o[0].scrollTop ? angular.element(o[0].documentElement) : a.parent, m = f.prop("scrollTop");
                        a.backdrop = angular.element('<md-backdrop class="md-dialog-backdrop md-opaque">'), s.inherit(a.backdrop, a.parent), r.enter(a.backdrop, a.parent), i.css("top", m + "px")
                    }
                    return a.disableParentScroll && (a.lastOverflow = a.parent.css("overflow"), a.parent.css("overflow", "hidden")), h(i, a.parent, a.popInTarget && a.popInTarget.length && a.popInTarget).then(function () {
                        a.escapeToClose && (a.rootElementKeyupCallback = function (t) {
                            t.keyCode === c.KEY_CODE.ESCAPE && e(d.cancel)
                        }, t.on("keyup", a.rootElementKeyupCallback)), a.clickOutsideToClose && (a.dialogClickOutsideCallback = function (t) {
                            t.target === i[0] && e(d.cancel)
                        }, i.on("click", a.dialogClickOutsideCallback)), u.focus()
                    })
                }

                function m(e, n, i) {
                    return i.backdrop && r.leave(i.backdrop), i.disableParentScroll && (i.parent.css("overflow", i.lastOverflow), delete i.lastOverflow), i.escapeToClose && t.off("keyup", i.rootElementKeyupCallback), i.clickOutsideToClose && n.off("click", i.dialogClickOutsideCallback), g(n, i.parent, i.popInTarget && i.popInTarget.length && i.popInTarget).then(function () {
                        i.scope.$destroy(), n.remove(), i.popInTarget && i.popInTarget.focus()
                    })
                }

                function p(e) {
                    e.attr({role: "dialog"});
                    var t = e.find("md-content");
                    0 === t.length && (t = e), i.expectAsync(e, "aria-label", function () {
                        var e = t.text().split(/\s+/);
                        return e.length > 3 && (e = e.slice(0, 3).concat("...")), e.join(" ")
                    })
                }

                function h(e, t, n) {
                    var r = e.find("md-dialog");
                    return t.append(e), $(r, n), l(function () {
                        r.addClass("transition-in").css(c.CSS.TRANSFORM, "")
                    }), a.transitionEndPromise(r)
                }

                function g(e, t, n) {
                    var r = e.find("md-dialog");
                    return r.addClass("transition-out").removeClass("transition-in"), $(r, n), a.transitionEndPromise(r)
                }

                function $(e, t) {
                    if (t) {
                        var n = t[0].getBoundingClientRect(), r = e[0].getBoundingClientRect(), i = Math.min(.5, n.width / r.width), o = Math.min(.5, n.height / r.height);
                        e.css(c.CSS.TRANSFORM, "translate3d(" + (-r.left + n.left + n.width / 2 - r.width / 2) + "px," + (-r.top + n.top + n.height / 2 - r.height / 2) + "px,0) scale(" + i + "," + o + ")")
                    }
                }

                return {
                    hasBackdrop: !0,
                    isolateScope: !0,
                    onShow: f,
                    onRemove: m,
                    clickOutsideToClose: !0,
                    escapeToClose: !0,
                    targetEvent: null,
                    disableParentScroll: !0,
                    transformTemplate: function (e) {
                        return '<div class="md-dialog-container">' + e + "</div>"
                    }
                }
            }

            return t.$inject = ["$mdDialog", "$mdTheming"], n.$inject = ["$timeout", "$rootElement", "$compile", "$animate", "$mdAria", "$document", "$mdUtil", "$mdConstant", "$mdTheming", "$$rAF", "$q", "$mdDialog"], e("$mdDialog").setDefaults({
                methods: ["disableParentScroll", "hasBackdrop", "clickOutsideToClose", "escapeToClose", "targetEvent"],
                options: n
            }).addPreset("alert", {
                methods: ["title", "content", "ariaLabel", "ok", "theme"],
                options: t
            }).addPreset("confirm", {methods: ["title", "content", "ariaLabel", "ok", "cancel", "theme"], options: t})
        }

        angular.module("material.components.dialog", ["material.core", "material.components.backdrop"]).directive("mdDialog", e).provider("$mdDialog", t), e.$inject = ["$$rAF", "$mdTheming"], t.$inject = ["$$interimElementProvider"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e() {
        }

        function t(t) {
            return {restrict: "E", link: t, controller: [e]}
        }

        angular.module("material.components.divider", ["material.core"]).directive("mdDivider", t), t.$inject = ["$mdTheming"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e, n, r, i) {
            function o(t, o, a, c) {
                function s() {
                    for (var e in n.MEDIA)i(e), i.getQuery(n.MEDIA[e]).addListener(y);
                    return i.watchResponsiveAttributes(["md-cols", "md-row-height"], a, u)
                }

                function l() {
                    w();
                    for (var e in n.MEDIA)i.getQuery(n.MEDIA[e]).removeListener(y)
                }

                function u(e) {
                    null == e ? c.invalidateLayout() : i(e) && c.invalidateLayout()
                }

                function d() {
                    var e = p(), n = g(), i = b(), a = v(), c = $(), s = r(n, h(), p()).map(function (t, r) {
                        return {
                            grid: {element: o, style: m(n, r, c, i, a)}, tiles: t.map(function (t, o) {
                                return {element: angular.element(e[o]), style: f(t.position, t.spans, n, r, c, i, a)}
                            })
                        }
                    }).reflow().performance();
                    t.mdOnLayout({$event: {performance: s}})
                }

                function f(e, t, n, r, i, o, a) {
                    var c = 1 / n * 100, s = 1 === n ? 0 : (n - 1) / n, l = x({
                        share: c,
                        gutterShare: s,
                        gutter: i
                    }), u = {
                        left: A({unit: l, offset: e.col, gutter: i}),
                        width: M({unit: l, span: t.col, gutter: i}),
                        paddingTop: "",
                        marginTop: "",
                        top: "",
                        height: ""
                    };
                    switch (o) {
                        case"fixed":
                            u.top = A({unit: a, offset: e.row, gutter: i}), u.height = M({
                                unit: a,
                                span: t.row,
                                gutter: i
                            });
                            break;
                        case"ratio":
                            var d = c * (1 / a), f = x({share: d, gutterShare: s, gutter: i});
                            u.paddingTop = M({unit: f, span: t.row, gutter: i}), u.marginTop = A({
                                unit: f,
                                offset: e.row,
                                gutter: i
                            });
                            break;
                        case"fit":
                            var m = 1 === r ? 0 : (r - 1) / r, d = 1 / r * 100, f = x({
                                share: d,
                                gutterShare: m,
                                gutter: i
                            });
                            u.top = A({unit: f, offset: e.row, gutter: i}), u.height = M({
                                unit: f,
                                span: t.row,
                                gutter: i
                            })
                    }
                    return u
                }

                function m(e, t, n, r, i) {
                    var o = {height: "", paddingBottom: ""};
                    switch (r) {
                        case"fixed":
                            o.height = M({unit: i, span: t, gutter: n});
                            break;
                        case"ratio":
                            var a = 1 === e ? 0 : (e - 1) / e, c = 1 / e * 100, s = c * (1 / i), l = x({
                                share: s,
                                gutterShare: a,
                                gutter: n
                            });
                            o.paddingBottom = M({unit: l, span: t, gutter: n});
                            break;
                        case"fit":
                    }
                    return o
                }

                function p() {
                    return c.tiles.map(function (e) {
                        return e.element
                    })
                }

                function h() {
                    return c.tiles.map(function (e) {
                        return {
                            row: parseInt(i.getResponsiveAttribute(e.attrs, "md-rowspan"), 10) || 1,
                            col: parseInt(i.getResponsiveAttribute(e.attrs, "md-colspan"), 10) || 1
                        }
                    })
                }

                function g() {
                    var e = parseInt(i.getResponsiveAttribute(a, "md-cols"), 10);
                    if (isNaN(e))throw"md-grid-list: md-cols attribute was not found, or contained a non-numeric value";
                    return e
                }

                function $() {
                    return E(i.getResponsiveAttribute(a, "md-gutter") || 1)
                }

                function v() {
                    var e = i.getResponsiveAttribute(a, "md-row-height");
                    switch (b()) {
                        case"fixed":
                            return E(e);
                        case"ratio":
                            var t = e.split(":");
                            return parseFloat(t[0]) / parseFloat(t[1]);
                        case"fit":
                            return 0
                    }
                }

                function b() {
                    var e = i.getResponsiveAttribute(a, "md-row-height");
                    return "fit" == e ? "fit" : -1 !== e.indexOf(":") ? "ratio" : "fixed"
                }

                function E(e) {
                    return /\D$/.test(e) ? e : e + "px"
                }

                o.attr("role", "list"), c.layoutDelegate = d;
                var y = angular.bind(c, c.invalidateLayout), w = s();
                t.$on("$destroy", l);
                var x = e("{{ share }}% - ({{ gutter }} * {{ gutterShare }})"), A = e("calc(({{ unit }}) * {{ offset }} + {{ offset }} * {{ gutter }})"), M = e("calc(({{ unit }}) * {{ span }} + ({{ span }} - 1) * {{ gutter }})")
            }

            return {restrict: "E", controller: t, scope: {mdOnLayout: "&"}, link: o}
        }

        function t(e) {
            this.invalidated = !1, this.$timeout_ = e, this.tiles = [], this.layoutDelegate = angular.noop
        }

        function n(e) {
            function t(t, n) {
                var o, a, c, s, l, u, a;
                return s = e.time(function () {
                    a = r(t, n)
                }), o = {
                    layoutInfo: function () {
                        return a
                    }, map: function (t) {
                        return l = e.time(function () {
                            var e = o.layoutInfo();
                            c = t(e.positioning, e.rowCount)
                        }), o
                    }, reflow: function (t) {
                        return u = e.time(function () {
                            var e = t || i;
                            e(c.grid, c.tiles)
                        }), o
                    }, performance: function () {
                        return {tileCount: n.length, layoutTime: s, mapTime: l, reflowTime: u, totalTime: s + l + u}
                    }
                }
            }

            function n(e, t) {
                e.element.css(e.style), t.forEach(function (e) {
                    e.element.css(e.style)
                })
            }

            function r(e, t) {
                function n(t, n) {
                    if (t.col > e)throw"md-grid-list: Tile at position " + n + " has a colspan (" + t.col + ") that exceeds the column count (" + e + ")";
                    for (var a = 0, u = 0; u - a < t.col;)c >= e ? r() : (a = l.indexOf(0, c), -1 !== a && -1 !== (u = o(a + 1)) ? c = u + 1 : (a = u = 0, r()));
                    return i(a, t.col, t.row), c = a + t.col, {col: a, row: s}
                }

                function r() {
                    c = 0, s++, i(0, e, -1)
                }

                function i(e, t, n) {
                    for (var r = e; e + t > r; r++)l[r] = Math.max(l[r] + n, 0)
                }

                function o(e) {
                    var t;
                    for (t = e; t < l.length; t++)if (0 !== l[t])return t;
                    return t === l.length ? t : void 0
                }

                function a() {
                    for (var t = [], n = 0; e > n; n++)t.push(0);
                    return t
                }

                var c = 0, s = 0, l = a();
                return {
                    positioning: t.map(function (e, t) {
                        return {spans: e, position: n(e, t)}
                    }), rowCount: s + Math.max.apply(Math, l)
                }
            }

            var i = n;
            return t.animateWith = function (e) {
                i = angular.isFunction(e) ? e : n
            }, t
        }

        function r(e) {
            function t(t, n, r, i) {
                n.attr("role", "listitem");
                var o = e.watchResponsiveAttributes(["md-colspan", "md-rowspan"], r, angular.bind(i, i.invalidateLayout));
                i.addTile(n, r, t.$parent.$index), t.$on("$destroy", function () {
                    o(), i.removeTile(n, r)
                })
            }

            return {
                restrict: "E",
                require: "^mdGridList",
                template: "<figure ng-transclude></figure>",
                transclude: !0,
                scope: {},
                link: t
            }
        }

        function i() {
            return {template: "<figcaption ng-transclude></figcaption>", transclude: !0}
        }

        angular.module("material.components.gridList", ["material.core"]).directive("mdGridList", e).directive("mdGridTile", r).directive("mdGridTileFooter", i).directive("mdGridTileHeader", i).factory("$mdGridLayout", n), e.$inject = ["$interpolate", "$mdConstant", "$mdGridLayout", "$mdMedia", "$mdUtil"], t.$inject = ["$timeout"], t.prototype = {
            addTile: function (e, t, n) {
                var r = {element: e, attrs: t};
                angular.isUndefined(n) ? this.tiles.push(r) : this.tiles.splice(n, 0, r), this.invalidateLayout()
            }, removeTile: function (e, t) {
                var n = this._findTileIndex(t);
                -1 !== n && (this.tiles.splice(n, 1), this.invalidateLayout())
            }, invalidateLayout: function () {
                this.invalidated || (this.invalidated = !0, this.$timeout_(angular.bind(this, this.layout)))
            }, layout: function () {
                try {
                    this.layoutDelegate()
                } finally {
                    this.invalidated = !1
                }
            }, _findTileIndex: function (e) {
                for (var t = 0; t < this.tiles.length; t++)if (this.tiles[t].attrs == e)return t;
                return -1
            }
        }, n.$inject = ["$mdUtil"], r.$inject = ["$mdMedia"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e, t, n) {
            function r(e, t) {
                return t.mdFontIcon ? '<span class="md-font" ng-class="fontIcon"></span>' : ""
            }

            function i(r, i, o) {
                function a() {
                    var e = i.parent();
                    return e.attr("aria-label") || e.text() ? !0 : e.parent().attr("aria-label") || e.parent().text() ? !0 : !1
                }

                t(i);
                var c = o.alt || r.fontIcon || r.svgIcon, s = o.$normalize(o.$attr.mdSvgIcon || o.$attr.mdSvgSrc || "");
                "" == o.alt || a() ? n.expect(i, "aria-hidden", "true") : (n.expect(i, "aria-label", c), n.expect(i, "role", "img")), s && o.$observe(s, function (t) {
                    i.empty(), t && e(t).then(function (e) {
                        i.append(e)
                    })
                })
            }

            return {
                scope: {fontIcon: "@mdFontIcon", svgIcon: "@mdSvgIcon", svgSrc: "@mdSvgSrc"},
                restrict: "E",
                template: r,
                link: i
            }
        }

        angular.module("material.components.icon", ["material.core"]).directive("mdIcon", e), e.$inject = ["$mdIcon", "$mdTheming", "$mdAria"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e() {
        }

        function t(e, t) {
            this.url = e, this.iconSize = t || r.defaultIconSize
        }

        function n(e, t, n, r, i) {
            function o(t) {
                return function (n) {
                    return h[t] = d(n) ? n : new f(n, e[t]), h[t].clone()
                }
            }

            function a(t) {
                var r = e[t];
                return r ? s(r.url).then(function (e) {
                    return new f(e, r)
                }) : n.reject(t)
            }

            function c(t) {
                function r(e) {
                    var r = t.slice(t.lastIndexOf(":") + 1), i = e.querySelector("#" + r);
                    return i ? new f(i, o) : n.reject(t)
                }

                var i = t.substring(0, t.lastIndexOf(":")) || "$default", o = e[i];
                return o ? s(o.url).then(r) : n.reject(t)
            }

            function s(e) {
                return t.get(e, {cache: i}).then(function (e) {
                    for (var t = angular.element(e.data), n = 0; n < t.length; ++n)if ("svg" == t[n].nodeName)return t[n]
                })
            }

            function l(e) {
                var t;
                return angular.isString(e) && (t = "icon " + e + " not found", r.warn(t)), n.reject(t || e)
            }

            function u(e) {
                var t = angular.isString(e) ? e : e.message || e.data || e.statusText;
                return r.warn(t), n.reject(t)
            }

            function d(e) {
                return angular.isDefined(e.element) && angular.isDefined(e.config)
            }

            function f(e, t) {
                "svg" != e.tagName && (e = angular.element('<svg xmlns="http://www.w3.org/2000/svg">').append(e)[0]), e = angular.element(e), e.attr("xmlns") || e.attr("xmlns", "http://www.w3.org/2000/svg"), this.element = e, this.config = t, this.prepare()
            }

            function m() {
                var t = this.config ? this.config.iconSize : e.defaultIconSize, n = angular.element(this.element);
                n.attr({
                    fit: "",
                    height: "100%",
                    width: "100%",
                    preserveAspectRatio: "xMidYMid meet",
                    viewBox: n.attr("viewBox") || "0 0 " + t + " " + t
                }).css({"pointer-events": "none", display: "block"}), this.element = n
            }

            function p() {
                return angular.element(this.element[0].cloneNode(!0))
            }

            var h = {}, g = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/i;
            return f.prototype = {clone: p, prepare: m}, function (e) {
                return e = e || "", h[e] ? n.when(h[e].clone()) : g.test(e) ? s(e).then(o(e)) : (-1 == e.indexOf(":") && (e = "$default:" + e), a(e)["catch"](c)["catch"](l)["catch"](u).then(o(e)))
            }
        }

        angular.module("material.components.icon").provider("$mdIcon", e);
        var r = {defaultIconSize: 24};
        e.prototype = {
            icon: function (e, n, i) {
                return -1 == e.indexOf(":") && (e = "$default:" + e), r[e] = new t(n, i), this
            }, iconSet: function (e, n, i) {
                return r[e] = new t(n, i), this
            }, defaultIconSet: function (e, n) {
                var i = "$default";
                return r[i] || (r[i] = new t(e, n)), r[i].iconSize = n || r.defaultIconSize, this
            }, defaultIconSize: function (e) {
                return r.defaultIconSize = e, this
            }, preloadIcons: function (e) {
                var t = this, n = [{
                    id: "tabs-arrow",
                    url: "tabs-arrow.svg",
                    svg: '<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g id="tabs-arrow"><polygon points="15.4,7.4 14,6 8,12 14,18 15.4,16.6 10.8,12 "/></g></svg>'
                }, {
                    id: "close",
                    url: "close.svg",
                    svg: '<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g id="close"><path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"/></g></svg>'
                }, {
                    id: "cancel",
                    url: "cancel.svg",
                    svg: '<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g id="cancel"><path d="M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm5 13.59l-1.41 1.41-3.59-3.59-3.59 3.59-1.41-1.41 3.59-3.59-3.59-3.59 1.41-1.41 3.59 3.59 3.59-3.59 1.41 1.41-3.59 3.59 3.59 3.59z"/></g></svg>'
                }];
                n.forEach(function (n) {
                    t.icon(n.id, n.url), e.put(n.url, n.svg)
                })
            }, $get: ["$http", "$q", "$log", "$templateCache", function (e, t, i, o) {
                return this.preloadIcons(o), new n(r, e, t, i, o)
            }]
        }
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        function e(e, t) {
            function n(t, n) {
                e(n)
            }

            function r(e, n, r) {
                var i = this;
                i.isErrorGetter = r.mdIsError && t(r.mdIsError), i.element = n, i.setFocused = function (e) {
                    n.toggleClass("md-input-focused", !!e)
                }, i.setHasValue = function (e) {
                    n.toggleClass("md-input-has-value", !!e)
                }, i.setInvalid = function (e) {
                    n.toggleClass("md-input-invalid", !!e)
                }, e.$watch(function () {
                    return i.label && i.input
                }, function (e) {
                    e && !i.label.attr("for") && i.label.attr("for", i.input.attr("id"))
                })
            }

            return r.$inject = ["$scope", "$element", "$attrs"], {restrict: "E", link: n, controller: r}
        }

        function t() {
            return {
                restrict: "E", require: "^?mdInputContainer", link: function (e, t, n, r) {
                    r && !n.mdNoFloat && (r.label = t, e.$on("$destroy", function () {
                        r.label = null
                    }))
                }
            }
        }

        function n(e, t) {
            function n(n, r, i, o) {
                function a(e) {
                    return l.setHasValue(!u.$isEmpty(e)), e
                }

                function c() {
                    l.setHasValue(r.val().length > 0 || (r[0].validity || {}).badInput)
                }

                function s() {
                    function i(e) {
                        return l(), e
                    }

                    function o() {
                        s.style.height = "auto", s.scrollTop = 0;
                        var e = a();
                        e && (s.style.height = e + "px")
                    }

                    function a() {
                        var e = s.scrollHeight - s.offsetHeight;
                        return s.offsetHeight + (e > 0 ? e : 0)
                    }

                    function c() {
                        s.scrollTop = 0;
                        var e = s.scrollHeight - s.offsetHeight, t = s.offsetHeight + e;
                        s.style.height = t + "px"
                    }

                    var s = r[0], l = e.debounce(o, 1);
                    u ? (u.$formatters.push(i), u.$viewChangeListeners.push(i)) : l(), r.on("keydown input", l), r.on("scroll", c), angular.element(t).on("resize", l), n.$on("$destroy", function () {
                        angular.element(t).off("resize", l)
                    })
                }

                var l = o[0], u = o[1] || e.fakeNgModel(), d = angular.isDefined(i.readonly);
                if (l) {
                    if (l.input)throw new Error("<md-input-container> can only have *one* <input> or <textarea> child element!");
                    l.input = r, r.addClass("md-input"), r.attr("id") || r.attr("id", "input_" + e.nextUid()), "textarea" === r[0].tagName.toLowerCase() && s();
                    var f = !1, m = l.isErrorGetter || function () {
                            return u.$invalid && (f || u.$touched)
                        };
                    n.$watch(m, l.setInvalid), u.$parsers.push(a), u.$formatters.push(a), r.on("input", c), d || r.on("focus", function () {
                        f = !0, l.setFocused(!0), n.$evalAsync()
                    }).on("blur", function () {
                        l.setFocused(!1), c()
                    }), n.$on("$destroy", function () {
                        l.setFocused(!1), l.setHasValue(!1), l.input = null
                    })
                }
            }

            return {restrict: "E", require: ["^?mdInputContainer", "?ngModel"], link: n}
        }

        function r(e) {
            function t(t, n, r, i) {
                function o(e) {
                    return l.text((n.val() || e || "").length + "/" + a), e
                }

                var a, c = i[0], s = i[1], l = angular.element('<div class="md-char-counter">');
                r.$set("ngTrim", "false"), s.element.append(l), c.$formatters.push(o), c.$viewChangeListeners.push(o), n.on("input keydown", function () {
                    o()
                }), t.$watch(r.mdMaxlength, function (t) {
                    a = t, angular.isNumber(t) && t > 0 ? (l.parent().length || e.enter(l, s.element, angular.element(s.element[0].lastElementChild)), o()) : e.leave(l)
                }), c.$validators["md-maxlength"] = function (e, t) {
                    return !angular.isNumber(a) || 0 > a ? !0 : (e || n.val() || t || "").length <= a
                }
            }

            return {restrict: "A", require: ["ngModel", "^mdInputContainer"], link: t}
        }

        function i() {
            function e(e, t, n, r) {
                if (r && !angular.isDefined(r.element.attr("md-no-float"))) {
                    var i = n.placeholder;
                    t.removeAttr("placeholder"), r.element.append('<div class="md-placeholder">' + i + "</div>")
                }
            }

            return {restrict: "A", require: "^^?mdInputContainer", link: e}
        }

        angular.module("material.components.input", ["material.core"]).directive("mdInputContainer", e).directive("label", t).directive("input", n).directive("textarea", n).directive("mdMaxlength", r).directive("placeholder", i), e.$inject = ["$mdTheming", "$parse"], n.$inject = ["$mdUtil", "$window"], r.$inject = ["$animate"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e() {
            return {
                restrict: "E", link: function (e, t) {
                    t.attr({role: "list"})
                }
            }
        }

        function t() {
            return {
                restrict: "E", link: function (e, t) {
                    t.attr({role: "listitem"})
                }
            }
        }

        angular.module("material.components.list", ["material.core"]).directive("mdList", e).directive("mdItem", t).directive("mdListItem", t)
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e, t, n) {
            function r(e) {
                return e.attr("aria-valuemin", 0), e.attr("aria-valuemax", 100), e.attr("role", "progressbar"), i
            }

            function i(e, r, i) {
                n(r);
                var s, l, u, d, f = r[0], m = f.querySelectorAll(".md-fill, .md-mask.md-full"), p = f.querySelectorAll(".md-fill.md-fix"), h = i.mdDiameter || 48, g = h / 48;
                f.style[t.CSS.TRANSFORM] = "scale(" + g.toString() + ")", i.$observe("value", function (e) {
                    for (l = o(e), u = a[l], d = c[l], r.attr("aria-valuenow", l), s = 0; s < m.length; s++)m[s].style[t.CSS.TRANSFORM] = u;
                    for (s = 0; s < p.length; s++)p[s].style[t.CSS.TRANSFORM] = d
                })
            }

            function o(e) {
                return e > 100 ? 100 : 0 > e ? 0 : Math.ceil(e || 0)
            }

            for (var a = new Array(101), c = new Array(101), s = 0; 101 > s; s++) {
                var l = s / 100, u = Math.floor(180 * l);
                a[s] = "rotate(" + u.toString() + "deg)", c[s] = "rotate(" + (2 * u).toString() + "deg)"
            }
            return {
                restrict: "E",
                template: '<div class="md-spinner-wrapper"><div class="md-inner"><div class="md-gap"></div><div class="md-left"><div class="md-half-circle"></div></div><div class="md-right"><div class="md-half-circle"></div></div></div></div>',
                compile: r
            }
        }

        angular.module("material.components.progressCircular", ["material.core"]).directive("mdProgressCircular", e), e.$inject = ["$$rAF", "$mdConstant", "$mdTheming"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e, n, r) {
            function i(e) {
                return e.attr("aria-valuemin", 0), e.attr("aria-valuemax", 100), e.attr("role", "progressbar"), o
            }

            function o(i, o, c) {
                r(o);
                var s = o[0].querySelector(".md-bar1").style, l = o[0].querySelector(".md-bar2").style, u = angular.element(o[0].querySelector(".md-container"));
                c.$observe("value", function (e) {
                    if ("query" != c.mdMode) {
                        var r = a(e);
                        o.attr("aria-valuenow", r), l[n.CSS.TRANSFORM] = t[r]
                    }
                }), c.$observe("mdBufferValue", function (e) {
                    s[n.CSS.TRANSFORM] = t[a(e)]
                }), e(function () {
                    u.addClass("md-ready")
                })
            }

            function a(e) {
                return e > 100 ? 100 : 0 > e ? 0 : Math.ceil(e || 0)
            }

            return {
                restrict: "E",
                template: '<div class="md-container"><div class="md-dashed"></div><div class="md-bar md-bar1"></div><div class="md-bar md-bar2"></div></div>',
                compile: i
            }
        }

        angular.module("material.components.progressLinear", ["material.core"]).directive("mdProgressLinear", e), e.$inject = ["$$rAF", "$mdConstant", "$mdTheming"];
        var t = function () {
            function e(e) {
                var t = e / 100, n = (e - 100) / 2;
                return "translateX(" + n.toString() + "%) scale(" + t.toString() + ", 1)"
            }

            for (var t = new Array(101), n = 0; 101 > n; n++)t[n] = e(n);
            return t
        }()
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e, t, n) {
            function r(r, i, o, a) {
                function c(n) {
                    switch (n.keyCode) {
                        case t.KEY_CODE.LEFT_ARROW:
                        case t.KEY_CODE.UP_ARROW:
                            n.preventDefault(), s.selectPrevious();
                            break;
                        case t.KEY_CODE.RIGHT_ARROW:
                        case t.KEY_CODE.DOWN_ARROW:
                            n.preventDefault(), s.selectNext();
                            break;
                        case t.KEY_CODE.ENTER:
                            var r = angular.element(e.getClosest(i[0], "form"));
                            r.length > 0 && r.triggerHandler("submit")
                    }
                }

                n(i);
                var s = a[0], l = a[1] || e.fakeNgModel();
                s.init(l), i.attr({role: "radiogroup", tabIndex: i.attr("tabindex") || "0"}).on("keydown", c)
            }

            function i(e) {
                this._radioButtonRenderFns = [], this.$element = e
            }

            function o() {
                return {
                    init: function (e) {
                        this._ngModelCtrl = e, this._ngModelCtrl.$render = angular.bind(this, this.render)
                    }, add: function (e) {
                        this._radioButtonRenderFns.push(e)
                    }, remove: function (e) {
                        var t = this._radioButtonRenderFns.indexOf(e);
                        -1 !== t && this._radioButtonRenderFns.splice(t, 1)
                    }, render: function () {
                        this._radioButtonRenderFns.forEach(function (e) {
                            e()
                        })
                    }, setViewValue: function (e, t) {
                        this._ngModelCtrl.$setViewValue(e, t), this.render()
                    }, getViewValue: function () {
                        return this._ngModelCtrl.$viewValue
                    }, selectNext: function () {
                        return a(this.$element, 1)
                    }, selectPrevious: function () {
                        return a(this.$element, -1)
                    }, setActiveDescendant: function (e) {
                        this.$element.attr("aria-activedescendant", e)
                    }
                }
            }

            function a(t, n) {
                var r = e.iterator(t[0].querySelectorAll("md-radio-button"), !0);
                if (r.count()) {
                    var i = function (e) {
                        return !angular.element(e).attr("disabled")
                    }, o = t[0].querySelector("md-radio-button.md-checked"), a = r[0 > n ? "previous" : "next"](o, i) || r.first();
                    angular.element(a).triggerHandler("click")
                }
            }

            return i.prototype = o(), {
                restrict: "E",
                controller: ["$element", i],
                require: ["mdRadioGroup", "?ngModel"],
                link: {pre: r}
            }
        }

        function t(e, t, n) {
            function r(r, o, a, c) {
                function s(e) {
                    o[0].hasAttribute("disabled") || r.$apply(function () {
                        c.setViewValue(a.value, e && e.type)
                    })
                }

                function l() {
                    var e = c.getViewValue() == a.value;
                    e !== d && (d = e, o.attr("aria-checked", e), e ? (o.addClass(i), c.setActiveDescendant(o.attr("id"))) : o.removeClass(i))
                }

                function u(n, r) {
                    function i() {
                        return a.id || "radio_" + t.nextUid()
                    }

                    r.ariaId = i(), n.attr({
                        id: r.ariaId,
                        role: "radio",
                        "aria-checked": "false"
                    }), e.expectWithText(n, "aria-label")
                }

                var d;
                n(o), u(o, r), c.add(l), a.$observe("value", l), o.on("click", s).on("$destroy", function () {
                    c.remove(l)
                })
            }

            var i = "md-checked";
            return {
                restrict: "E",
                require: "^mdRadioGroup",
                transclude: !0,
                template: '<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-off"></div><div class="md-on"></div></div><div ng-transclude class="md-label"></div>',
                link: r
            }
        }

        angular.module("material.components.radioButton", ["material.core"]).directive("mdRadioGroup", e).directive("mdRadioButton", t), e.$inject = ["$mdUtil", "$mdConstant", "$mdTheming"], t.$inject = ["$mdAria", "$mdUtil", "$mdTheming"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e, t, n, r, i) {
            function o(r, o) {
                var a = r.find("md-select-label").remove();
                a.length || (a = angular.element("<md-select-label><span></span></md-select-label>")), a.append('<span class="md-select-icon" aria-hidden="true"></span>'), a.addClass("md-select-label"), a.attr("id", "select_label_" + t.nextUid()), r.find("md-content").length || r.append(angular.element("<md-content>").append(r.contents())), o.mdOnOpen && r.find("md-content").prepend(angular.element("<md-progress-circular>").attr("md-mode", "indeterminate").attr("ng-hide", "$$loadingAsyncDone").wrap("<div>").parent());
                var c = '<div class="md-select-menu-container"><md-select-menu ' + (angular.isDefined(o.multiple) ? "multiple" : "") + ">" + r.html() + "</md-select-menu></div>";
                return r.empty().append(a), n(r), function (n, r, o, a) {
                    function s() {
                        if (m) {
                            var e = m.find("md-select-menu").controller("mdSelectMenu");
                            h.setLabelText(e.selectedLabels())
                        }
                    }

                    function l() {
                        m = angular.element(c);
                        var e = m.find("md-select-menu");
                        e.data("$ngModelController", g), e.data("$mdSelectController", h), p = n.$new(), m = i(m)(p)
                    }

                    function u(e) {
                        var t = [32, 13, 38, 40];
                        -1 != t.indexOf(e.keyCode) && (e.preventDefault(), d(e))
                    }

                    function d() {
                        n.$evalAsync(function () {
                            f = !0, e.show({
                                scope: p,
                                preserveScope: !0,
                                skipCompile: !0,
                                element: m,
                                target: r[0],
                                hasBackdrop: !0,
                                loadingAsync: o.mdOnOpen ? n.$eval(o.mdOnOpen) : !1
                            }).then(function () {
                                f = !1
                            })
                        })
                    }

                    var f, m, p, h = a[0], g = a[1], $ = r.find("md-select-label"), v = 0 !== $.text().length;
                    l();
                    var b = g.$render;
                    g.$render = function () {
                        b(), s()
                    }, h.setLabelText = function (e) {
                        if (!v) {
                            h.setIsPlaceholder(!e);
                            var t = e || o.placeholder || "", n = v ? $ : $.children().eq(0);
                            n.text(t)
                        }
                    }, h.setIsPlaceholder = function (e) {
                        e ? $.addClass("md-placeholder") : $.removeClass("md-placeholder")
                    }, n.$$postDigest(s), o.$observe("disabled", function (e) {
                        "string" == typeof e && (e = !0), e ? (r.attr("tabindex", -1), r.off("click", d), r.off("keydown", u)) : (r.attr("tabindex", 0), r.on("click", d), r.on("keydown", u))
                    }), o.disabled || o.ngDisabled || (r.attr("tabindex", 0), r.on("click", d), r.on("keydown", u)), r.attr({
                        role: "combobox",
                        id: "select_" + t.nextUid(),
                        "aria-haspopup": !0,
                        "aria-expanded": "false",
                        "aria-labelledby": $.attr("id")
                    }), n.$on("$destroy", function () {
                        f ? e.cancel().then(function () {
                            m.remove()
                        }) : m.remove()
                    })
                }
            }

            r.startSymbol(), r.endSymbol();
            return {
                restrict: "E", require: ["mdSelect", "ngModel"], compile: o, controller: function () {
                }
            }
        }

        function t(e, t, n) {
            function r(e, r, i, o) {
                function a() {
                    r.attr({
                        id: "select_menu_" + t.nextUid(),
                        role: "listbox",
                        "aria-multiselectable": l.isMultiple ? "true" : "false"
                    })
                }

                function c(e) {
                    (13 == e.keyCode || 32 == e.keyCode) && s(e)
                }

                function s(n) {
                    var r = t.getClosest(n.target, "md-option"), i = r && angular.element(r).data("$mdOptionController");
                    if (r && i) {
                        var o = l.hashGetter(i.value), a = angular.isDefined(l.selected[o]);
                        e.$apply(function () {
                            l.isMultiple ? a ? l.deselect(o) : l.select(o, i.value) : a || (l.deselect(Object.keys(l.selected)[0]), l.select(o, i.value)), l.refreshViewValue()
                        })
                    }
                }

                var l = o[0], u = o[1];
                n(r), r.on("click", s), r.on("keypress", c), u && l.init(u), a()
            }

            function i(t, n, r) {
                function i() {
                    var e = s.ngModel.$modelValue || s.ngModel.$viewValue;
                    if (angular.isArray(e)) {
                        var t = Object.keys(s.selected), n = e.map(s.hashGetter), r = t.filter(function (e) {
                            return -1 === n.indexOf(e)
                        });
                        r.forEach(s.deselect), n.forEach(function (t, n) {
                            s.select(t, e[n])
                        })
                    }
                }

                function a() {
                    var e = s.ngModel.$viewValue || s.ngModel.$modelValue;
                    Object.keys(s.selected).forEach(s.deselect), s.select(s.hashGetter(e), e)
                }

                var s = this;
                s.isMultiple = angular.isDefined(n.multiple), s.selected = {}, s.options = {}, s.init = function (r) {
                    function o(e, t) {
                        return angular.isArray(e || t || [])
                    }

                    if (s.ngModel = r, r.$options && r.$options.trackBy) {
                        var l = {}, u = e(r.$options.trackBy);
                        s.hashGetter = function (e, n) {
                            return l.$value = e, u(n || t, l)
                        }
                    } else s.hashGetter = function (e) {
                        return angular.isObject(e) ? "$$object_" + (e.$$mdSelectId || (e.$$mdSelectId = ++c)) : e
                    };
                    s.isMultiple ? (r.$validators["md-multiple"] = o, r.$render = i, t.$watchCollection(n.ngModel, function (e) {
                        o(e) && i(e)
                    })) : r.$render = a
                }, s.selectedLabels = function () {
                    var e = o(r[0].querySelectorAll("md-option[selected]"));
                    return e.length ? e.map(function (e) {
                        return e.textContent
                    }).join(", ") : ""
                }, s.select = function (e, t) {
                    var n = s.options[e];
                    n && n.setSelected(!0), s.selected[e] = t
                }, s.deselect = function (e) {
                    var t = s.options[e];
                    t && t.setSelected(!1), delete s.selected[e]
                }, s.addOption = function (e, t) {
                    if (angular.isDefined(s.options[e]))throw new Error('Duplicate md-option values are not allowed in a select. Duplicate value "' + t.value + '" found.');
                    s.options[e] = t, angular.isDefined(s.selected[e]) && (s.select(e, t.value), s.refreshViewValue())
                }, s.removeOption = function (e) {
                    delete s.options[e]
                }, s.refreshViewValue = function () {
                    var e, t = [];
                    for (var n in s.selected)t.push((e = s.options[n]) ? e.value : s.selected[n]);
                    s.ngModel.$setViewValue(s.isMultiple ? t : t[0])
                }
            }

            return i.$inject = ["$scope", "$attrs", "$element"], {
                restrict: "E",
                require: ["mdSelectMenu", "?ngModel"],
                controller: i,
                link: {pre: r}
            }
        }

        function n(e, t) {
            function n(e, t) {
                return e.append(angular.element('<div class="md-text">').append(e.contents())), void 0 === t.tabindex && e.attr("tabindex", 0), r
            }

            function r(n, r, i, o) {
                function a(e, t) {
                    var r = l.hashGetter(t, n), i = l.hashGetter(e, n);
                    s.hashKey = i, s.value = e, l.removeOption(r, s), l.addOption(i, s)
                }

                function c() {
                    r.attr({role: "option", "aria-selected": "false", id: "select_option_" + t.nextUid()})
                }

                var s = o[0], l = o[1];
                if (angular.isDefined(i.ngValue))n.$watch(i.ngValue, a); else {
                    if (!angular.isDefined(i.value))throw new Error("Expected either ngValue or value attr");
                    a(i.value)
                }
                i.$observe("selected", function (e) {
                    angular.isDefined(e) && (e ? (l.isMultiple || l.deselect(Object.keys(l.selected)[0]), l.select(s.hashKey, s.value)) : l.deselect(s.hashKey), l.refreshViewValue(), l.ngModel.$render())
                }), e.attachButtonBehavior(n, r), c(), n.$on("$destroy", function () {
                    l.removeOption(s.hashKey, s)
                })
            }

            function i(e) {
                this.selected = !1, this.setSelected = function (t) {
                    t && !this.selected ? e.attr({
                        selected: "selected",
                        "aria-selected": "true"
                    }) : !t && this.selected && (e.removeAttr("selected"), e.attr("aria-selected", "false")), this.selected = t
                }
            }

            return i.$inject = ["$element"], {
                restrict: "E",
                require: ["mdOption", "^^mdSelectMenu"],
                controller: i,
                compile: n
            }
        }

        function r() {
            function e(e, t) {
                var n = e.find("label");
                n.length || (n = angular.element("<label>"), e.prepend(n)), t.label && n.text(t.label)
            }

            return {restrict: "E", compile: e}
        }

        function i(e) {
            function t(e, t, i, c, s, l) {
                function u(n, r, a) {
                    function u() {
                        a.selectEl.attr("aria-labelledby", a.target.attr("id")), a.target.attr("aria-owns", a.selectEl.attr("id")), a.target.attr("aria-expanded", "true")
                    }

                    function d() {
                        function i(e) {
                            var t = o(m), n = t.indexOf(a.focusedNode);
                            -1 === n ? n = 0 : "next" === e && n < t.length - 1 ? n++ : "prev" === e && n > 0 && n--;
                            var r = a.focusedNode = t[n];
                            r && r.focus()
                        }

                        function s() {
                            i("next")
                        }

                        function l() {
                            i("prev")
                        }

                        function u() {
                            a.restoreFocus = !0, n.$evalAsync(function () {
                                e.hide(d.ngModel.$viewValue)
                            })
                        }

                        if (!a.isRemoved) {
                            var d = a.selectEl.controller("mdSelectMenu") || {};
                            r.addClass("md-clickable"), a.backdrop && a.backdrop.on("click", function (t) {
                                t.preventDefault(), t.stopPropagation(), a.restoreFocus = !1, n.$apply(e.cancel)
                            }), a.selectEl.on("keydown", function (r) {
                                switch (r.keyCode) {
                                    case t.KEY_CODE.SPACE:
                                    case t.KEY_CODE.ENTER:
                                        var i = c.getClosest(r.target, "md-option");
                                        i && (a.selectEl.triggerHandler({
                                            type: "click",
                                            target: i
                                        }), r.preventDefault());
                                        break;
                                    case t.KEY_CODE.TAB:
                                    case t.KEY_CODE.ESCAPE:
                                        r.preventDefault(), a.restoreFocus = !0, n.$apply(e.cancel)
                                }
                            }), a.selectEl.on("keydown", function (e) {
                                switch (e.keyCode) {
                                    case t.KEY_CODE.UP_ARROW:
                                        return l();
                                    case t.KEY_CODE.DOWN_ARROW:
                                        return s()
                                }
                            }), d.isMultiple || (a.selectEl.on("click", u), a.selectEl.on("keydown", function (e) {
                                (32 == e.keyCode || 13 == e.keyCode) && u()
                            }))
                        }
                    }

                    if (!a.target)throw new Error('$mdSelect.show() expected a target element in options.target but got "' + a.target + '"!');
                    angular.extend(a, {
                        isRemoved: !1,
                        target: angular.element(a.target),
                        parent: angular.element(a.parent),
                        selectEl: r.find("md-select-menu"),
                        contentEl: r.find("md-content"),
                        backdrop: a.hasBackdrop && angular.element('<md-backdrop class="md-select-backdrop">')
                    }), u(), r.removeClass("md-leave");
                    var m = a.selectEl[0].getElementsByTagName("md-option");
                    return a.loadingAsync && a.loadingAsync.then && a.loadingAsync.then(function () {
                        n.$$loadingAsyncDone = !0, i(function () {
                            i(function () {
                                a.isRemoved || f(n, r, a)
                            })
                        })
                    }), a.disableParentScroll && (a.disableTarget = a.parent.find("md-content"), a.disableTarget.length || (a.disableTarget = a.parent), a.lastOverflow = a.disableTarget.css("overflow"), a.disableTarget.css("overflow", "hidden")), l(d, 75, !1), a.backdrop && (s.inherit(a.backdrop, a.parent), a.parent.append(a.backdrop)), a.parent.append(r), i(function () {
                        i(function () {
                            a.isRemoved || f(n, r, a)
                        })
                    }), c.transitionEndPromise(a.selectEl, {timeout: 350})
                }

                function d(e, t, n) {
                    n.isRemoved = !0, t.addClass("md-leave").removeClass("md-clickable"), n.target.attr("aria-expanded", "false"), n.disableParentScroll && c.floatingScrollbars() && (n.disableTarget.css("overflow", n.lastOverflow), delete n.lastOverflow, delete n.disableTarget);
                    var r = n.selectEl.controller("mdSelect");
                    return r && r.setLabelText(n.selectEl.controller("mdSelectMenu").selectedLabels()), c.transitionEndPromise(t, {timeout: 350}).then(function () {
                        t.removeClass("md-active"), n.parent[0].removeChild(t[0]), n.backdrop && n.backdrop.remove(), n.restoreFocus && n.target.focus()
                    })
                }

                function f(e, o, s) {
                    var l, u = o[0], d = s.target[0], f = s.parent[0], m = s.selectEl[0], p = s.contentEl[0], h = f.getBoundingClientRect(), g = c.clientRect(d, f), $ = !1, v = {
                        left: f.scrollLeft + a,
                        top: f.scrollTop + a,
                        bottom: h.height + f.scrollTop - a,
                        right: h.width - a
                    }, b = {
                        top: g.top - v.top,
                        left: g.left - v.left,
                        right: v.right - (g.left + g.width),
                        bottom: v.bottom - (g.top + g.height)
                    }, E = h.width - 2 * a, y = p.scrollHeight > p.offsetHeight, w = m.querySelector("md-option[selected]"), x = m.getElementsByTagName("md-option"), A = m.getElementsByTagName("md-optgroup");
                    l = w ? w : A.length ? A[0] : x.length ? x[0] : p.firstElementChild || p, p.offsetWidth > E && (p.style["max-width"] = E + "px"), $ && (p.style["min-width"] = g.width + "px"), y && m.classList.add("md-overflow");
                    var M = m.getBoundingClientRect(), k = r(l);
                    if (l) {
                        var C = window.getComputedStyle(l);
                        k.paddingLeft = parseInt(C.paddingLeft, 10) || 0, k.paddingRight = parseInt(C.paddingRight, 10) || 0
                    }
                    var T = l;
                    if ("MD-OPTGROUP" === (T.tagName || "").toUpperCase() && (T = x[0] || p.firstElementChild || p), T && (s.focusedNode = T, T.focus()), y) {
                        var S = p.offsetHeight / 2;
                        p.scrollTop = k.top + k.height / 2 - S, b.top < S ? p.scrollTop = Math.min(k.top, p.scrollTop + S - b.top) : b.bottom < S && (p.scrollTop = Math.max(k.top + k.height - M.height, p.scrollTop - S + b.bottom))
                    }
                    var N, _, D;
                    $ ? (N = g.left, _ = g.top + g.height, D = "50% 0", _ + M.height > v.bottom && (_ = g.top - M.height, D = "50% 100%")) : (N = g.left + k.left - k.paddingLeft, _ = g.top + g.height / 2 - k.height / 2 - k.top + p.scrollTop, D = k.left + g.width / 2 + "px " + (k.top + k.height / 2 - p.scrollTop) + "px 0px", u.style.minWidth = g.width + k.paddingLeft + k.paddingRight + "px");
                    var O = u.getBoundingClientRect();
                    u.style.left = n(v.left, N, v.right - O.width) + "px", u.style.top = n(v.top, _, v.bottom - O.height) + "px", m.style[t.CSS.TRANSFORM_ORIGIN] = D, m.style[t.CSS.TRANSFORM] = "scale(" + Math.min(g.width / M.width, 1) + "," + Math.min(g.height / M.height, 1) + ")", i(function () {
                        o.addClass("md-active"), m.style[t.CSS.TRANSFORM] = ""
                    })
                }

                return {
                    parent: "body",
                    onShow: u,
                    onRemove: d,
                    hasBackdrop: !0,
                    disableParentScroll: c.floatingScrollbars(),
                    themable: !0
                }
            }

            function n(e, t, n) {
                return Math.min(n, Math.max(t, e))
            }

            function r(e) {
                return e ? {
                    left: e.offsetLeft,
                    top: e.offsetTop,
                    width: e.offsetWidth,
                    height: e.offsetHeight
                } : {left: 0, top: 0, width: 0, height: 0}
            }

            return t.$inject = ["$mdSelect", "$mdConstant", "$$rAF", "$mdUtil", "$mdTheming", "$timeout"], e("$mdSelect").setDefaults({
                methods: ["target"],
                options: t
            })
        }

        function o(e) {
            for (var t = [], n = 0; n < e.length; ++n)t.push(e.item(n));
            return t
        }

        var a = 8, c = 0;
        angular.module("material.components.select", ["material.core", "material.components.backdrop"]).directive("mdSelect", e).directive("mdSelectMenu", t).directive("mdOption", n).directive("mdOptgroup", r).provider("$mdSelect", i), e.$inject = ["$mdSelect", "$mdUtil", "$mdTheming", "$interpolate", "$compile", "$parse"], t.$inject = ["$parse", "$mdUtil", "$mdTheming"], n.$inject = ["$mdInkRipple", "$mdUtil"], i.$inject = ["$$interimElementProvider"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e, t) {
            return function (n) {
                var r = "SideNav '" + n + "' is not available!", i = e.get(n);
                return i || e.notFoundError(n), {
                    isOpen: function () {
                        return i && i.isOpen()
                    }, isLockedOpen: function () {
                        return i && i.isLockedOpen()
                    }, toggle: function () {
                        return i ? i.toggle() : t.reject(r)
                    }, open: function () {
                        return i ? i.open() : t.reject(r)
                    }, close: function () {
                        return i ? i.close() : t.reject(r)
                    }
                }
            }
        }

        function t(e, t, n, r, i, o, a, c, s, l) {
            function u(u, d, f, m) {
                function p(e, n) {
                    u.isLockedOpen = e, e === n ? d.toggleClass("md-locked-open", !!e) : t[e ? "addClass" : "removeClass"](d, "md-locked-open"), x.toggleClass("md-locked-open", !!e)
                }

                function h(e) {
                    var n = d.parent();
                    return n[e ? "on" : "off"]("keydown", $), x[e ? "on" : "off"]("click", v), e && (b = l[0].activeElement), E = s.all([t[e ? "enter" : "leave"](x, n), t[e ? "removeClass" : "addClass"](d, "md-closed").then(function () {
                        u.isOpen && d.focus()
                    })])
                }

                function g(t) {
                    if (u.isOpen == t)return s.when(!0);
                    var n = s.defer();
                    return u.isOpen = t, e(function () {
                        E.then(function (e) {
                            u.isOpen || (b && b.focus(), b = null), n.resolve(e)
                        })
                    }, 0, !1), n.promise
                }

                function $(e) {
                    var t = e.keyCode === o.KEY_CODE.ESCAPE;
                    return t ? v(e) : s.when(!0)
                }

                function v(e) {
                    return e.preventDefault(), e.stopPropagation(), m.close()
                }

                var b = null, E = s.when(!0), y = n(f.mdIsLockedOpen), w = function () {
                    return y(u.$parent, {
                        $media: function (e) {
                            return r.warn("$media is deprecated for is-locked-open. Use $mdMedia instead."), i(e)
                        }, $mdMedia: i
                    })
                }, x = a('<md-backdrop class="md-sidenav-backdrop md-opaque ng-enter">')(u);
                d.on("$destroy", m.destroy), c.inherit(x, d), u.$watch(w, p), u.$watch("isOpen", h), m.$toggleOpen = g
            }

            return {
                restrict: "E",
                scope: {isOpen: "=?mdIsOpen"},
                controller: "$mdSidenavController",
                compile: function (e) {
                    return e.addClass("md-closed"), e.attr("tabIndex", "-1"), u
                }
            }
        }

        function n(e, t, n, r, i) {
            var o = this;
            o.$toggleOpen = function () {
                return i.when(e.isOpen)
            }, o.isOpen = function () {
                return !!e.isOpen
            }, o.isLockedOpen = function () {
                return !!e.isLockedOpen
            }, o.open = function () {
                return o.$toggleOpen(!0)
            }, o.close = function () {
                return o.$toggleOpen(!1)
            }, o.toggle = function () {
                return o.$toggleOpen(!e.isOpen)
            }, o.destroy = r.register(o, n.mdComponentId)
        }

        angular.module("material.components.sidenav", ["material.core", "material.components.backdrop"]).factory("$mdSidenav", e).directive("mdSidenav", t).controller("$mdSidenavController", n), e.$inject = ["$mdComponentRegistry", "$q"], t.$inject = ["$timeout", "$animate", "$parse", "$log", "$mdMedia", "$mdConstant", "$compile", "$mdTheming", "$q", "$document"], n.$inject = ["$scope", "$element", "$attrs", "$mdComponentRegistry", "$q"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e, t, n, r, i, o, a, c) {
            function s(e) {
                return e.attr({tabIndex: 0, role: "slider"}), n.expect(e, "aria-label"), l
            }

            function l(n, s, l, u) {
                function d() {
                    $(), y(), g()
                }

                function f(e) {
                    Y = parseFloat(e), s.attr("aria-valuemin", e), d()
                }

                function m(e) {
                    W = parseFloat(e), s.attr("aria-valuemax", e), d()
                }

                function p(e) {
                    K = parseFloat(e), g()
                }

                function h(e) {
                    s.attr("aria-disabled", !!e)
                }

                function g() {
                    if (angular.isDefined(l.mdDiscrete)) {
                        var e = Math.floor((W - Y) / K);
                        if (!X) {
                            var n = t.getComputedStyle(U[0]);
                            X = angular.element('<canvas style="position:absolute;">'), Z = X[0].getContext("2d"), Z.fillStyle = n.backgroundColor || "black", U.append(X)
                        }
                        var r = v();
                        X[0].width = r.width, X[0].height = r.height;
                        for (var i, o = 0; e >= o; o++)i = Math.floor(r.width * (o / e)), Z.fillRect(i - 1, 0, 2, r.height)
                    }
                }

                function $() {
                    J = q[0].getBoundingClientRect()
                }

                function v() {
                    return B(), J
                }

                function b(e) {
                    if (!s[0].hasAttribute("disabled")) {
                        var t;
                        e.keyCode === i.KEY_CODE.LEFT_ARROW ? t = -K : e.keyCode === i.KEY_CODE.RIGHT_ARROW && (t = K), t && ((e.metaKey || e.ctrlKey || e.altKey) && (t *= 4), e.preventDefault(), e.stopPropagation(), n.$evalAsync(function () {
                            E(u.$viewValue + t)
                        }))
                    }
                }

                function E(e) {
                    u.$setViewValue(w(x(e)))
                }

                function y() {
                    isNaN(u.$viewValue) && (u.$viewValue = u.$modelValue);
                    var e = (u.$viewValue - Y) / (W - Y);
                    n.modelValue = u.$viewValue, s.attr("aria-valuenow", u.$viewValue), A(e), V.text(u.$viewValue)
                }

                function w(e) {
                    return angular.isNumber(e) ? Math.max(Y, Math.min(W, e)) : void 0
                }

                function x(e) {
                    return angular.isNumber(e) ? Math.round(e / K) * K : void 0
                }

                function A(e) {
                    L.css("width", 100 * e + "%"), F.css("left", 100 * e + "%"), s.toggleClass("md-min", 0 === e)
                }

                function M(e) {
                    if (!P()) {
                        s.addClass("active"), s[0].focus(), $();
                        var t = H(O(e.pointer.x)), r = w(x(t));
                        n.$apply(function () {
                            E(r), A(R(r))
                        })
                    }
                }

                function k(e) {
                    if (!P()) {
                        s.removeClass("dragging active");
                        var t = H(O(e.pointer.x)), r = w(x(t));
                        n.$apply(function () {
                            E(r), y()
                        })
                    }
                }

                function C(e) {
                    P() || (Q = !0, e.stopPropagation(), s.addClass("dragging"), N(e))
                }

                function T(e) {
                    Q && (e.stopPropagation(), N(e))
                }

                function S(e) {
                    Q && (e.stopPropagation(), Q = !1)
                }

                function N(e) {
                    et ? D(e.pointer.x) : _(e.pointer.x)
                }

                function _(e) {
                    n.$evalAsync(function () {
                        E(H(O(e)))
                    })
                }

                function D(e) {
                    var t = H(O(e)), n = w(x(t));
                    A(O(e)), V.text(n)
                }

                function O(e) {
                    return Math.max(0, Math.min(1, (e - J.left) / J.width))
                }

                function H(e) {
                    return Y + e * (W - Y)
                }

                function R(e) {
                    return (e - Y) / (W - Y)
                }

                o(s), u = u || {
                    $setViewValue: function (e) {
                        this.$viewValue = e, this.$viewChangeListeners.forEach(function (e) {
                            e()
                        })
                    }, $parsers: [], $formatters: [], $viewChangeListeners: []
                };
                var I = l.ngDisabled && c(l.ngDisabled), P = I ? function () {
                    return I(n.$parent)
                } : angular.noop, j = angular.element(s[0].querySelector(".md-thumb")), V = angular.element(s[0].querySelector(".md-thumb-text")), F = j.parent(), q = angular.element(s[0].querySelector(".md-track-container")), L = angular.element(s[0].querySelector(".md-track-fill")), U = angular.element(s[0].querySelector(".md-track-ticks")), B = r.throttle($, 5e3);
                l.min ? l.$observe("min", f) : f(0), l.max ? l.$observe("max", m) : m(100), l.step ? l.$observe("step", p) : p(1);
                var z = angular.noop;
                l.ngDisabled && (z = n.$parent.$watch(l.ngDisabled, h)), a.register(s, "drag"), s.on("keydown", b).on("$md.pressdown", M).on("$md.pressup", k).on("$md.dragstart", C).on("$md.drag", T).on("$md.dragend", S), setTimeout(d);
                var G = e.throttle(d);
                angular.element(t).on("resize", G), n.$on("$destroy", function () {
                    angular.element(t).off("resize", G), z()
                }), u.$render = y, u.$viewChangeListeners.push(y), u.$formatters.push(w), u.$formatters.push(x);
                var Y, W, K, X, Z, J = {};
                $();
                var Q = !1, et = angular.isDefined(l.mdDiscrete)
            }

            return {
                scope: {},
                require: "?ngModel",
                template: '<div class="md-slider-wrapper">        <div class="md-track-container">          <div class="md-track"></div>          <div class="md-track md-track-fill"></div>          <div class="md-track-ticks"></div>        </div>        <div class="md-thumb-container">          <div class="md-thumb"></div>          <div class="md-focus-thumb"></div>          <div class="md-focus-ring"></div>          <div class="md-sign">            <span class="md-thumb-text"></span>          </div>          <div class="md-disabled-thumb"></div>        </div>      </div>',
                compile: s
            }
        }

        angular.module("material.components.slider", ["material.core"]).directive("mdSlider", e), e.$inject = ["$$rAF", "$window", "$mdAria", "$mdUtil", "$mdConstant", "$mdTheming", "$mdGesture", "$parse"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e, t, n, r, i) {
            function o(e) {
                function n(e, t) {
                    t.addClass("md-sticky-clone"), t.css("top", p + "px");
                    var n = {element: e, clone: t};
                    return m.items.push(n), d.parent().prepend(n.clone), f(), function () {
                        m.items.forEach(function (t, n) {
                            t.element[0] === e[0] && (m.items.splice(n, 1), t.clone.remove())
                        }), f()
                    }
                }

                function i() {
                    m.items.forEach(o), m.items = m.items.sort(function (e, t) {
                        return e.top < t.top ? -1 : 1
                    });
                    for (var e, t = d.prop("scrollTop"), n = m.items.length - 1; n >= 0; n--)if (t > m.items[n].top) {
                        e = m.items[n];
                        break
                    }
                    s(e)
                }

                function o(e) {
                    var t = e.element[0];
                    for (e.top = 0, e.left = 0; t && t !== d[0];)e.top += t.offsetTop, e.left += t.offsetLeft, t = t.offsetParent;
                    e.height = e.element.prop("offsetHeight"), e.clone.css("margin-left", e.left + "px")
                }

                function a() {
                    var e = d.prop("scrollTop"), t = e > (a.prevScrollTop || 0);
                    a.prevScrollTop = e, 0 === e ? s(null) : t && m.next ? m.next.top - e <= 0 ? s(m.next) : m.current && (m.next.top - e <= m.next.height ? u(m.current, m.next.top - m.next.height - e) : u(m.current, null)) : !t && m.current && (e < m.current.top && s(m.prev), m.current && m.next && (e >= m.next.top - m.current.height ? u(m.current, m.next.top - e - m.current.height) : u(m.current, null)))
                }

                function s(e) {
                    if (m.current !== e) {
                        m.current && (u(m.current, null), l(m.current, null)), e && l(e, "active"), m.current = e;
                        var t = m.items.indexOf(e);
                        m.next = m.items[t + 1], m.prev = m.items[t - 1], l(m.next, "next"), l(m.prev, "prev")
                    }
                }

                function l(e, t) {
                    e && e.state !== t && (e.state && (e.clone.attr("sticky-prev-state", e.state), e.element.attr("sticky-prev-state", e.state)), e.clone.attr("sticky-state", t), e.element.attr("sticky-state", t), e.state = t)
                }

                function u(e, n) {
                    e && (null === n || void 0 === n ? e.translateY && (e.translateY = null, e.clone.css(t.CSS.TRANSFORM, "")) : (e.translateY = n, e.clone.css(t.CSS.TRANSFORM, "translate3d(" + e.left + "px," + n + "px,0)")))
                }

                var d = e.$element, f = r.throttle(i);
                c(d), d.on("$scrollstart", f), d.on("$scroll", a);
                var m, p = d.prop("offsetTop");
                return m = {prev: null, current: null, next: null, items: [], add: n, refreshElements: i}
            }

            function a() {
                var t, n = angular.element("<div>");
                e[0].body.appendChild(n[0]);
                for (var r = ["sticky", "-webkit-sticky"], i = 0; i < r.length; ++i)if (n.css({
                        position: r[i],
                        top: 0,
                        "z-index": 2
                    }), n.css("position") == r[i]) {
                    t = r[i];
                    break
                }
                return n.remove(), t
            }

            function c(e) {
                function t() {
                    +i.now() - o > a ? (n = !1, e.triggerHandler("$scrollend")) : (e.triggerHandler("$scroll"), r(t))
                }

                var n, o, a = 200;
                e.on("scroll touchmove", function () {
                    n || (n = !0, r(t), e.triggerHandler("$scrollstart")), e.triggerHandler("$scroll"), o = +i.now()
                })
            }

            var s = a();
            return function (e, t, n) {
                var r = t.controller("mdContent");
                if (r)if (s)t.css({position: s, top: 0, "z-index": 2}); else {
                    var i = r.$element.data("$$sticky");
                    i || (i = o(r), r.$element.data("$$sticky", i));
                    var a = i.add(t, n || t.clone());
                    e.$on("$destroy", a)
                }
            }
        }

        angular.module("material.components.sticky", ["material.core", "material.components.content"]).factory("$mdSticky", e), e.$inject = ["$document", "$mdConstant", "$compile", "$$rAF", "$mdUtil"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e, t, n) {
            return {
                restrict: "E",
                replace: !0,
                transclude: !0,
                template: '<h2 class="md-subheader"><span class="md-subheader-content"></span></h2>',
                compile: function (r, i, o) {
                    var a = r[0].outerHTML;
                    return function (r, i) {
                        function c(e) {
                            return angular.element(e[0].querySelector(".md-subheader-content"))
                        }

                        n(i), o(r, function (e) {
                            c(i).append(e)
                        }), o(r, function (o) {
                            var s = t(angular.element(a))(r);
                            n(s), c(s).append(o), e(r, i, s)
                        })
                    }
                }
            }
        }

        angular.module("material.components.subheader", ["material.core", "material.components.sticky"]).directive("mdSubheader", e), e.$inject = ["$mdSticky", "$compile", "$mdTheming"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        var e = angular.module("material.components.swipe", []);
        ["SwipeLeft", "SwipeRight"].forEach(function (t) {
            var n = "md" + t, r = "$md." + t.toLowerCase();
            e.directive(n, ["$parse", function (e) {
                function t(t, i, o) {
                    var a = e(o[n]);
                    i.on(r, function (e) {
                        t.$apply(function () {
                            a(t, {$event: e})
                        })
                    })
                }

                return {restrict: "A", link: t}
            }])
        })
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e, t, n, r, i, o, a, c) {
            function s(e, t) {
                var r = l.compile(e, t);
                return e.addClass("md-dragging"), function (e, t, s, l) {
                    function u(n) {
                        p(e) || (n.stopPropagation(), t.addClass("md-dragging"), $ = {width: h.prop("offsetWidth")}, t.removeClass("transition"))
                    }

                    function d(e) {
                        if ($) {
                            e.stopPropagation(), e.srcEvent && e.srcEvent.preventDefault();
                            var t = e.pointer.distanceX / $.width, n = l.$viewValue ? 1 + t : t;
                            n = Math.max(0, Math.min(1, n)), h.css(i.CSS.TRANSFORM, "translate3d(" + 100 * n + "%,0,0)"), $.translate = n
                        }
                    }

                    function f(e) {
                        if ($) {
                            e.stopPropagation(), t.removeClass("md-dragging"), h.css(i.CSS.TRANSFORM, "");
                            var n = l.$viewValue ? $.translate < .5 : $.translate > .5;
                            n && m(!l.$viewValue), $ = null
                        }
                    }

                    function m(t) {
                        e.$apply(function () {
                            l.$setViewValue(t), l.$render()
                        })
                    }

                    l = l || n.fakeNgModel();
                    var p = o(s.ngDisabled), h = angular.element(t[0].querySelector(".md-thumb-container")), g = angular.element(t[0].querySelector(".md-container"));
                    a(function () {
                        t.removeClass("md-dragging")
                    }), r(e, t, s, l), angular.isDefined(s.ngDisabled) && e.$watch(p, function (e) {
                        t.attr("tabindex", e ? -1 : 0)
                    }), c.register(g, "drag"), g.on("$md.dragstart", u).on("$md.drag", d).on("$md.dragend", f);
                    var $
                }
            }

            var l = e[0];
            return {
                restrict: "E",
                transclude: !0,
                template: '<div class="md-container"><div class="md-bar"></div><div class="md-thumb-container"><div class="md-thumb" md-ink-ripple md-ink-ripple-checkbox></div></div></div><div ng-transclude class="md-label"></div>',
                require: "?ngModel",
                compile: s
            }
        }

        angular.module("material.components.switch", ["material.core", "material.components.checkbox"]).directive("mdSwitch", e), e.$inject = ["mdCheckboxDirective", "$mdTheming", "$mdUtil", "$document", "$mdConstant", "$parse", "$$rAF", "$mdGesture"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        angular.module("material.components.tabs", ["material.core", "material.components.icon"])
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e, t, n, r) {
            return {
                restrict: "E",
                replace: !0,
                scope: {fid: "@?mdFid", label: "@?", value: "=ngModel"},
                compile: function (i, o) {
                    return r.warn("<md-text-float> is deprecated. Please use `<md-input-container>` and `<input>`.More information at http://material.angularjs.org/#/api/material.components.input/directive/mdInputContainer"), angular.isUndefined(o.mdFid) && (o.mdFid = t.nextUid()), {
                        pre: function (e, t, r) {
                            var i = n(r.ngDisabled);
                            e.isDisabled = function () {
                                return i(e.$parent)
                            }, e.inputType = r.type || "text"
                        }, post: e
                    }
                },
                template: '<md-input-group tabindex="-1"> <label for="{{fid}}" >{{label}}</label> <md-input id="{{fid}}" ng-disabled="isDisabled()" ng-model="value" type="{{inputType}}"></md-input></md-input-group>'
            }
        }

        function t(e) {
            return {
                restrict: "CE", controller: ["$element", function (t) {
                    e.warn("<md-input-group> is deprecated. Please use `<md-input-container>` and `<input>`.More information at http://material.angularjs.org/#/api/material.components.input/directive/mdInputContainer"), this.setFocused = function (e) {
                        t.toggleClass("md-input-focused", !!e)
                    }, this.setHasValue = function (e) {
                        t.toggleClass("md-input-has-value", e)
                    }
                }]
            }
        }

        function n(e, t) {
            return {
                restrict: "E",
                replace: !0,
                template: "<input >",
                require: ["^?mdInputGroup", "?ngModel"],
                link: function (e, n, r, i) {
                    function o(e) {
                        return e = angular.isUndefined(e) ? n.val() : e, angular.isDefined(e) && null !== e && "" !== e.toString().trim()
                    }

                    if (i[0]) {
                        t.warn("<md-input> is deprecated. Please use `<md-input-container>` and `<input>`.More information at http://material.angularjs.org/#/api/material.components.input/directive/mdInputContainer");
                        var a = i[0], c = i[1];
                        e.$watch(e.isDisabled, function (e) {
                            n.attr("aria-disabled", !!e), n.attr("tabindex", !!e)
                        }), n.attr("type", r.type || n.parent().attr("type") || "text"), c && c.$formatters.push(function (e) {
                            return a.setHasValue(o(e)), e
                        }), n.on("input", function () {
                            a.setHasValue(o())
                        }).on("focus", function () {
                            a.setFocused(!0)
                        }).on("blur", function () {
                            a.setFocused(!1), a.setHasValue(o())
                        }), e.$on("$destroy", function () {
                            a.setFocused(!1), a.setHasValue(!1)
                        })
                    }
                }
            }
        }

        angular.module("material.components.textField", ["material.core"]).directive("mdInputGroup", t).directive("mdInput", n).directive("mdTextFloat", e), e.$inject = ["$mdTheming", "$mdUtil", "$parse", "$log"], t.$inject = ["$log"], n.$inject = ["$mdUtil", "$log"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e() {
            return {restrict: "E"}
        }

        function t(e) {
            function t(e, t, r) {
                function i(i, o, c) {
                    return n = c.content, o.addClass(c.position.split(" ").map(function (e) {
                        return "md-" + e
                    }).join(" ")), c.parent.addClass(a(c.position)), c.onSwipe = function (t) {
                        o.addClass("md-" + t.type.replace("$md.", "")), e(r.cancel)
                    }, o.on("$md.swipeleft $md.swiperight", c.onSwipe), t.enter(o, c.parent)
                }

                function o(e, n, r) {
                    return n.off("$md.swipeleft $md.swiperight", r.onSwipe), r.parent.removeClass(a(r.position)), t.leave(n)
                }

                function a(e) {
                    return "md-toast-open-" + (e.indexOf("top") > -1 ? "top" : "bottom")
                }

                return {onShow: i, onRemove: o, position: "bottom left", themable: !0, hideDelay: 3e3}
            }

            var n, r = e("$mdToast").setDefaults({
                methods: ["position", "hideDelay", "capsule"],
                options: t
            }).addPreset("simple", {
                argOption: "content",
                methods: ["content", "action", "highlightAction", "theme"],
                options: ["$mdToast", "$mdTheming", function (e, t) {
                    var r = {
                        template: ['<md-toast md-theme="{{ toast.theme }}" ng-class="{\'md-capsule\': toast.capsule}">', "<span flex>{{ toast.content }}</span>", '<md-button class="md-action" ng-if="toast.action" ng-click="toast.resolve()" ng-class="{\'md-highlight\': toast.highlightAction}">', "{{ toast.action }}", "</md-button>", "</md-toast>"].join(""),
                        controller: ["$scope", function (t) {
                            var r = this;
                            t.$watch(function () {
                                return n
                            }, function () {
                                r.content = n
                            }), this.resolve = function () {
                                e.hide()
                            }
                        }],
                        theme: t.defaultTheme(),
                        controllerAs: "toast",
                        bindToController: !0
                    };
                    return r
                }]
            }).addMethod("updateContent", function (e) {
                n = e
            });
            return t.$inject = ["$timeout", "$animate", "$mdToast"], r
        }

        angular.module("material.components.toast", ["material.core", "material.components.button"]).directive("mdToast", e).provider("$mdToast", t), t.$inject = ["$$interimElementProvider"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e, t, n, r) {
            return {
                restrict: "E", controller: angular.noop, link: function (i, o, a) {
                    function c() {
                        function r(t, n) {
                            o.parent()[0] === n.parent()[0] && (u && u.off("scroll", p), n.on("scroll", p), n.attr("scroll-shrink", "true"), u = n, e(c))
                        }

                        function c() {
                            l = o.prop("offsetHeight"), u.css("margin-top", -l * m + "px"), s()
                        }

                        function s(e) {
                            var n = e ? e.target.scrollTop : f;
                            h(), d = Math.min(l / m, Math.max(0, d + n - f)), o.css(t.CSS.TRANSFORM, "translate3d(0," + -d * m + "px,0)"), u.css(t.CSS.TRANSFORM, "translate3d(0," + (l - d) * m + "px,0)"), f = n
                        }

                        var l, u, d = 0, f = 0, m = a.mdShrinkSpeedFactor || .5, p = e.throttle(s), h = n.debounce(c, 5e3);
                        i.$on("$mdContentLoaded", r)
                    }

                    r(o), angular.isDefined(a.mdScrollShrink) && c()
                }
            }
        }

        angular.module("material.components.toolbar", ["material.core", "material.components.content"]).directive("mdToolbar", e), e.$inject = ["$$rAF", "$mdConstant", "$mdUtil", "$mdTheming"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e, t, n, r, i, o, a, c, s) {
            function l(l, f, m) {
                function p(t) {
                    p.value = !!t, p.queued || (t ? (p.queued = !0, e(function () {
                        l.visible = p.value, p.queued = !1
                    }, l.delay)) : e(function () {
                        l.visible = !1
                    }))
                }

                function h() {
                    v.attr("aria-describedby", f.attr("id")), x.append(f), $(), c.addClass(f, "md-show"), c.addClass(b, "md-show"), c.addClass(E, "md-show")
                }

                function g() {
                    v.removeAttr("aria-describedby"), s.all([c.removeClass(E, "md-show"), c.removeClass(b, "md-show"), c.removeClass(f, "md-show")]).then(function () {
                        l.visible || f.detach()
                    })
                }

                function $() {
                    function e() {
                        var e = "left" === y || "right" === y ? 2 * Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height / 2, 2)) : 2 * Math.sqrt(Math.pow(r.width / 2, 2) + Math.pow(r.height, 2)), t = "left" === y ? {
                            left: 100,
                            top: 50
                        } : "right" === y ? {left: 0, top: 50} : "top" === y ? {left: 50, top: 100} : {
                            left: 50,
                            top: 0
                        };
                        b.css({width: e + "px", height: e + "px", left: t.left + "%", top: t.top + "%"})
                    }

                    function t(e) {
                        var t = {left: e.left, top: e.top};
                        return t.left = Math.min(t.left, x.prop("scrollWidth") - r.width - d), t.left = Math.max(t.left, d), t.top = Math.min(t.top, x.prop("scrollHeight") - r.height - d), t.top = Math.max(t.top, d), t
                    }

                    function n(e) {
                        return "left" === e ? {
                            left: o.left - r.width - d,
                            top: o.top + o.height / 2 - r.height / 2
                        } : "right" === e ? {
                            left: o.left + o.width + d,
                            top: o.top + o.height / 2 - r.height / 2
                        } : "top" === e ? {
                            left: o.left + o.width / 2 - r.width / 2,
                            top: o.top - r.height - d
                        } : {left: o.left + o.width / 2 - r.width / 2, top: o.top + o.height + d}
                    }

                    var r = i.offsetRect(f, x), o = i.offsetRect(v, x), a = n(y);
                    y ? a = t(a) : a.top > x.prop("scrollHeight") - r.height - d && (a = t(n("top"))), f.css({
                        top: a.top + "px",
                        left: a.left + "px"
                    }), e()
                }

                o(f);
                for (var v = f.parent(), b = angular.element(f[0].getElementsByClassName("md-background")[0]), E = angular.element(f[0].getElementsByClassName("md-content")[0]), y = m.mdDirection; "none" == t.getComputedStyle(v[0])["pointer-events"];)v = v.parent();
                for (var w = f.parent()[0]; w && w !== a[0] && w !== document.body && (!w.tagName || "md-content" != w.tagName.toLowerCase());)w = w.parentNode;
                var x = angular.element(w || document.body);
                angular.isDefined(m.mdDelay) || (l.delay = u), f.detach(), f.attr("role", "tooltip"), f.attr("id", m.id || "tooltip_" + i.nextUid()), v.on("focus mouseenter touchstart", function () {
                    p(!0)
                }), v.on("blur mouseleave touchend touchcancel", function () {
                    r[0].activeElement !== v[0] && p(!1)
                }), l.$watch("visible", function (e) {
                    e ? h() : g()
                });
                var A = n.throttle(function () {
                    l.visible && $()
                });
                angular.element(t).on("resize", A), l.$on("$destroy", function () {
                    l.visible = !1, f.remove(), angular.element(t).off("resize", A)
                })
            }

            var u = 0, d = 8;
            return {
                restrict: "E",
                transclude: !0,
                template: '<div class="md-background"></div><div class="md-content" ng-transclude></div>',
                scope: {visible: "=?mdVisible", delay: "=?mdDelay"},
                link: l
            }
        }

        angular.module("material.components.tooltip", ["material.core"]).directive("mdTooltip", e), e.$inject = ["$timeout", "$window", "$$rAF", "$document", "$mdUtil", "$mdTheming", "$rootElement", "$animate", "$q"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        angular.module("material.components.whiteframe", [])
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e, t, n, r, i) {
            function o() {
                s(), a()
            }

            function a() {
                var e = angular.element(A.ul), t = angular.element(A.input), n = e.attr("id") || "ul_" + r.nextUid();
                e.attr("id", n), t.attr("aria-owns", n)
            }

            function c(e) {
                if (e) {
                    var t = {};
                    return y.itemName && (t[y.itemName] = e), t
                }
            }

            function s() {
                var t = parseInt(e.delay, 10) || 0;
                e.$watch("searchText", t ? r.debounce(l, t) : l), e.$watch("selectedItem", function (t, n) {
                    e.itemChange && t !== n && e.itemChange(c(t))
                })
            }

            function l(t, n) {
                if (y.index = -1, !t || t.length < Math.max(parseInt(e.minLength, 10), 1))return y.loading = !1, y.matches = [], y.hidden = g(), void d();
                var r = t.toLowerCase();
                M && M.cancel && (M.cancel(), M = null), !e.noCache && k[r] ? (y.matches = k[r], d()) : y.fetch(t), y.hidden = g(), e.textChange && t !== n && e.textChange(c(e.selectedItem))
            }

            function u(t) {
                function r(n) {
                    k[o] = n, t === e.searchText && (M = null, y.loading = !1, y.matches = n, y.hidden = g(), d())
                }

                var i = e.$parent.$eval(x), o = t.toLowerCase();
                angular.isArray(i) ? r(i) : (y.loading = !0, M = n.when(i).then(r))
            }

            function d() {
                if (!y.hidden)switch (y.matches.length) {
                    case 0:
                        return y.messages.splice(0);
                    case 1:
                        return y.messages.push({display: "There is 1 match available."});
                    default:
                        return y.messages.push({display: "There are " + y.matches.length + " matches available."})
                }
            }

            function f() {
                y.messages.push({display: $()})
            }

            function m() {
                C || (y.hidden = !0)
            }

            function p(e) {
                switch (e.keyCode) {
                    case i.KEY_CODE.DOWN_ARROW:
                        if (y.loading)return;
                        e.preventDefault(), y.index = Math.min(y.index + 1, y.matches.length - 1), E(), f();
                        break;
                    case i.KEY_CODE.UP_ARROW:
                        if (y.loading)return;
                        e.preventDefault(), y.index = Math.max(0, y.index - 1), E(), f();
                        break;
                    case i.KEY_CODE.ENTER:
                        if (y.loading || y.index < 0)return;
                        e.preventDefault(), b(y.index);
                        break;
                    case i.KEY_CODE.ESCAPE:
                        y.matches = [], y.hidden = !0, y.index = -1;
                        break;
                    case i.KEY_CODE.TAB:
                }
            }

            function h() {
                e.searchText = "", b(-1), A.input.focus()
            }

            function g() {
                return 1 === y.matches.length && e.searchText === v(y.matches[0])
            }

            function $() {
                return v(y.matches[y.index])
            }

            function v(t) {
                return t && e.itemText ? e.itemText(c(t)) : t
            }

            function b(t) {
                e.selectedItem = y.matches[t], e.searchText = v(e.selectedItem) || e.searchText, y.hidden = !0, y.index = -1, y.matches = []
            }

            function E() {
                var e = 41 * y.index, t = e + 41, n = 225.5;
                e < A.ul.scrollTop ? A.ul.scrollTop = e : t > A.ul.scrollTop + n && (A.ul.scrollTop = t - n)
            }

            var y = this, w = e.itemsExpr.split(/ in /i), x = w[1], A = {
                main: t[0],
                ul: t[0].getElementsByTagName("ul")[0],
                input: t[0].getElementsByTagName("input")[0]
            }, M = null, k = {}, C = !1;
            return y.scope = e, y.parent = e.$parent, y.itemName = w[0], y.matches = [], y.loading = !1, y.hidden = !0, y.index = 0, y.keydown = p, y.blur = m, y.clear = h, y.select = b, y.getCurrentDisplayValue = $, y.fetch = r.debounce(u), y.messages = [], y.listEnter = function () {
                C = !0
            }, y.listLeave = function () {
                C = !1
            }, y.mouseUp = function () {
                A.input.focus()
            }, o()
        }

        angular.module("material.components.autocomplete").controller("MdAutocompleteCtrl", e), e.$inject = ["$scope", "$element", "$q", "$mdUtil", "$mdConstant"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e() {
            return {
                template: '        <md-autocomplete-wrap role="listbox">          <input type="text"              ng-disabled="isDisabled"              ng-model="searchText"              ng-keydown="$mdAutocompleteCtrl.keydown($event)"              ng-blur="$mdAutocompleteCtrl.blur()"              placeholder="{{placeholder}}"              aria-label="{{placeholder}}"              aria-autocomplete="list"              aria-haspopup="true"              aria-activedescendant=""              aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>          <button              type="button"              ng-if="searchText"              ng-click="$mdAutocompleteCtrl.clear()">            <md-icon md-svg-icon="cancel"></md-icon>            <span class="visually-hidden">Clear</span>          </button>          <md-progress-linear              ng-if="$mdAutocompleteCtrl.loading"              md-mode="indeterminate"></md-progress-linear>        </md-autocomplete-wrap>        <ul role="presentation"            ng-mouseenter="$mdAutocompleteCtrl.listEnter()"            ng-mouseleave="$mdAutocompleteCtrl.listLeave()"            ng-mouseup="$mdAutocompleteCtrl.mouseUp()">          <li ng-repeat="(index, item) in $mdAutocompleteCtrl.matches"              ng-class="{ selected: index === $mdAutocompleteCtrl.index }"              ng-show="searchText && !$mdAutocompleteCtrl.hidden"              ng-click="$mdAutocompleteCtrl.select(index)"              ng-transclude              md-autocomplete-list-item="$mdAutocompleteCtrl.itemName">          </li>        </ul>        <aria-status            class="visually-hidden"            role="status"            aria-live="assertive">          <p ng-repeat="message in $mdAutocompleteCtrl.messages">{{message.display}}</p>        </aria-status>',
                transclude: !0,
                controller: "MdAutocompleteCtrl",
                controllerAs: "$mdAutocompleteCtrl",
                scope: {
                    searchText: "=mdSearchText",
                    selectedItem: "=mdSelectedItem",
                    itemsExpr: "@mdItems",
                    itemText: "&mdItemText",
                    placeholder: "@placeholder",
                    noCache: "=mdNoCache",
                    itemChange: "&mdSelectedItemChange",
                    textChange: "&mdSearchTextChange",
                    isDisabled: "=ngDisabled",
                    minLength: "=mdMinLength",
                    delay: "=mdDelay"
                }
            }
        }

        angular.module("material.components.autocomplete").directive("mdAutocomplete", e)
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e, t, n) {
            function r(e) {
                return e ? e.replace(/[\*\[\]\(\)\{\}\\\^\$]/g, "\\$&") : e
            }

            var i = t.attr("md-highlight-text"), o = n(t.text())(e), a = e.$watch(i, function (e) {
                var n = new RegExp("^" + r(e), "i"), i = o.replace(n, '<span class="highlight">$&</span>');
                t.html(i)
            });
            t.on("$destroy", function () {
                a()
            })
        }

        angular.module("material.components.autocomplete").controller("MdHighlightCtrl", e), e.$inject = ["$scope", "$element", "$interpolate"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e() {
            return {terminal: !0, scope: !1, controller: "MdHighlightCtrl"}
        }

        angular.module("material.components.autocomplete").directive("mdHighlightText", e)
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e, t) {
            function n(n, r, i, o) {
                var a = o.parent.$new(!1, o.parent), c = o.scope.$eval(i.mdAutocompleteListItem);
                a[c] = n.item, e(r.contents())(a), r.attr({role: "option", id: "item_" + t.nextUid()})
            }

            return {require: "^?mdAutocomplete", terminal: !0, link: n, scope: !1}
        }

        angular.module("material.components.autocomplete").directive("mdAutocompleteListItem", e), e.$inject = ["$compile", "$mdUtil"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e) {
            function t(t, r, i, o) {
                function a() {
                    var e = s.getSelectedItem(), i = !e || s.count() < 2 || c;
                    if (r.css("display", i ? "none" : "block"), !i && t.pagination && t.pagination.tabData) {
                        var o = s.getSelectedIndex(), a = t.pagination.tabData.tabs[o] || {
                                left: 0,
                                right: 0,
                                width: 0
                            }, l = r.parent().prop("offsetWidth") - a.right, u = ["md-transition-left", "md-transition-right", "md-no-transition"], d = n > o ? 0 : o > n ? 1 : 2;
                        r.removeClass(u.join(" ")).addClass(u[d]).css({left: a.left + "px", right: l + "px"}), n = o
                    }
                }

                var c = !!o[0], s = o[1], l = e.throttle(a);
                s.inkBarElement = r, t.$on("$mdTabsPaginationChanged", l)
            }

            var n = 0;
            return {restrict: "E", require: ["^?mdNoBar", "^mdTabs"], link: t}
        }

        angular.module("material.components.tabs").directive("mdTabsInkBar", e), e.$inject = ["$$rAF"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e, t, n, r, i, o) {
            function a(a, s, l, u) {
                function d(e, t) {
                    if (e) {
                        var n = $(e);
                        x.active && n !== x.page ? (t && t.element.blur(), v(n).then(function () {
                            w = !1, e.element.focus()
                        })) : e.element.focus()
                    }
                }

                function f(e) {
                    var t = x.tabData, n = Math.max(0, Math.min(t.pages.length - 1, x.page + e)), r = t.pages[n][e > 0 ? "firstTabIndex" : "lastTabIndex"], i = u.itemAt(r);
                    w = !0, d(i)
                }

                function m() {
                    function e() {
                        y.css("width", "9999px"), angular.forEach(o.tabs, function (e) {
                            angular.element(e.element).css("margin-left", e.filler + "px")
                        }), v($(u.getSelectedItem()))
                    }

                    function t() {
                        p(0), y.css("width", ""), r.css("width", ""), r.css("margin-left", ""), x.page = null, x.active = !1
                    }

                    function n() {
                        return l || a.$watch(function () {
                                i(function () {
                                    s[0].offsetParent && (angular.isFunction(l) && l(), E(), l = null)
                                }, 0, !1)
                            })
                    }

                    if (s.prop("offsetParent")) {
                        var r = s.find("md-tab");
                        t();
                        var o = x.tabData = g(), c = x.active = o.pages.length > 1;
                        c && e(), a.$evalAsync(function () {
                            a.$broadcast("$mdTabsPaginationChanged")
                        })
                    } else var l = n()
                }

                function p(t) {
                    function n(t) {
                        t.target === y[0] && (y.off(e.CSS.TRANSITIONEND, n), i.resolve())
                    }

                    if (u.pagingOffset === t)return r.when();
                    var i = r.defer();
                    return u.$$pagingOffset = t, y.css(e.CSS.TRANSFORM, "translate3d(" + t + "px,0,0)"), y.on(e.CSS.TRANSITIONEND, n), i.promise
                }

                function h() {
                    switch (a.stretchTabs) {
                        case"never":
                            return !1;
                        case"always":
                            return !0;
                        default:
                            return o("sm")
                    }
                }

                function g(e) {
                    function t() {
                        var e = 1 === d.length ? r : i, t = Math.min(Math.floor(e / l), b.length), n = Math.floor(e / t);
                        return o.css("width", n + "px"), g(!0)
                    }

                    var n, r = s.parent().prop("offsetWidth"), i = r - c - 1, o = angular.element(b), a = 0, l = 0, u = [], d = [];
                    return o.css("max-width", ""), angular.forEach(b, function (e, t) {
                        var o = Math.min(i, e.offsetWidth), c = {
                            element: e,
                            left: a,
                            width: o,
                            right: a + o,
                            filler: 0
                        };
                        c.page = Math.ceil(c.right / (1 === d.length && t === b.length - 1 ? r : i)) - 1, c.page >= d.length ? (c.filler = i * c.page - c.left, c.right += c.filler, c.left += c.filler, n = {
                            left: c.left,
                            firstTabIndex: t,
                            lastTabIndex: t,
                            tabs: [c]
                        }, d.push(n)) : (n.lastTabIndex = t, n.tabs.push(c)), a = c.right, l = Math.max(l, o), u.push(c)
                    }), o.css("max-width", i + "px"), !e && h() ? t() : {
                        width: a,
                        max: l,
                        tabs: u,
                        pages: d,
                        tabElements: b
                    }
                }

                function $(e) {
                    var t = u.indexOf(e);
                    if (-1 === t)return 0;
                    var n = x.tabData;
                    return n ? n.tabs[t].page : 0
                }

                function v(e) {
                    if (e !== x.page) {
                        var t = x.tabData.pages.length - 1;
                        return 0 > e && (e = 0), e > t && (e = t), x.hasPrev = e > 0, x.hasNext = t > e, x.page = e, a.$broadcast("$mdTabsPaginationChanged"), p(-x.tabData.pages[e].left)
                    }
                }

                var b = s[0].getElementsByTagName("md-tab"), E = n.throttle(m), y = s.children(), w = !1, x = a.pagination = {
                    page: -1,
                    active: !1,
                    clickNext: function () {
                        w || f(1)
                    },
                    clickPrevious: function () {
                        w || f(-1)
                    }
                };
                a.$on("$mdTabsChanged", E), angular.element(t).on("resize", E), a.$on("$destroy", function () {
                    angular.element(t).off("resize", E)
                }), a.$watch(function () {
                    return u.tabToFocus
                }, d)
            }

            var c = 64;
            return {restrict: "A", require: "^mdTabs", link: a}
        }

        angular.module("material.components.tabs").directive("mdTabsPagination", e), e.$inject = ["$mdConstant", "$window", "$$rAF", "$$q", "$timeout", "$mdMedia"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e, t, n, r, i, o, a, c) {
            function s() {
                return $(e.$parent)
            }

            function l(t, n) {
                h.content.length && (h.contentContainer.append(h.content), h.contentScope = e.$parent.$new(), t.append(h.contentContainer), r(h.contentContainer)(h.contentScope), n === !0 && c(function () {
                    o.disconnectScope(h.contentScope)
                }, 0, !1))
            }

            function u() {
                i.leave(h.contentContainer).then(function () {
                    h.contentScope && h.contentScope.$destroy(), h.contentScope = null
                })
            }

            function d(e) {
                h.contentContainer[e ? "addClass" : "removeClass"]("md-transition-rtl")
            }

            function f(n) {
                o.reconnectScope(h.contentScope), t.addClass("active").attr({
                    "aria-selected": !0,
                    tabIndex: 0
                }).on("$md.swipeleft $md.swiperight", p), d(n), i.removeClass(h.contentContainer, "ng-hide"), e.onSelect()
            }

            function m(n) {
                o.disconnectScope(h.contentScope), t.removeClass("active").attr({
                    "aria-selected": !1,
                    tabIndex: -1
                }).off("$md.swipeleft $md.swiperight", p), d(n), i.addClass(h.contentContainer, "ng-hide"), e.onDeselect()
            }

            function p(t) {
                e.$apply(function () {
                    g.select(/left/.test(t.type) ? g.next() : g.previous())
                })
            }

            var h = this, g = t.controller("mdTabs");
            h.contentContainer = angular.element('<div class="md-tab-content ng-hide">'), h.element = t, h.isDisabled = s, h.onAdd = l, h.onRemove = u, h.onSelect = f, h.onDeselect = m;
            var $ = a(n.ngDisabled)
        }

        angular.module("material.components.tabs").controller("$mdTab", e), e.$inject = ["$scope", "$element", "$attrs", "$compile", "$animate", "$mdUtil", "$parse", "$timeout"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e, t, n, r, i) {
            function o(o, a) {
                var c = o.find("md-tab-label");
                c.length ? c.remove() : c = angular.isDefined(a.label) ? angular.element("<md-tab-label>").html(a.label) : angular.element("<md-tab-label>").append(o.contents().remove());
                var s = o.contents().remove();
                return function (o, a, l, u) {
                    function d() {
                        var e = c.clone();
                        a.append(e), t(e)(o.$parent), v.content = s.clone()
                    }

                    function f() {
                        o.$apply(function () {
                            b.select(v), b.focus(v)
                        })
                    }

                    function m(e) {
                        e.keyCode == r.KEY_CODE.SPACE || e.keyCode == r.KEY_CODE.ENTER ? (a.triggerHandler("click"), e.preventDefault()) : e.keyCode === r.KEY_CODE.LEFT_ARROW ? o.$evalAsync(function () {
                            b.focus(b.previous(v))
                        }) : e.keyCode === r.KEY_CODE.RIGHT_ARROW && o.$evalAsync(function () {
                            b.focus(b.next(v))
                        })
                    }

                    function p() {
                        o.$watch("$parent.$index", function (e) {
                            b.move(v, e)
                        })
                    }

                    function h() {
                        function e(e) {
                            var t = b.getSelectedItem() === v;
                            e && !t ? b.select(v) : !e && t && b.deselect(v)
                        }

                        var t = o.$parent.$watch("!!(" + l.mdActive + ")", e);
                        o.$on("$destroy", t)
                    }

                    function g() {
                        function e(e) {
                            a.attr("aria-disabled", e);
                            var t = b.getSelectedItem() === v;
                            t && e && b.select(b.next() || b.previous())
                        }

                        o.$watch(v.isDisabled, e)
                    }

                    function $() {
                        var e = l.id || "tab_" + n.nextUid();
                        if (a.attr({id: e, role: "tab", tabIndex: -1}), s.length) {
                            var t = "content_" + e;
                            a.attr("aria-controls") || a.attr("aria-controls", t), v.contentContainer.attr({
                                id: t,
                                role: "tabpanel",
                                "aria-labelledby": e
                            })
                        }
                    }

                    var v = u[0], b = u[1];
                    i(a.addClass.bind(a, "md-tab-themed"), 0, !1), o.$watch(function () {
                        return l.label
                    }, function () {
                        i(function () {
                            b.scope.$broadcast("$mdTabsChanged")
                        }, 0, !1)
                    }), d(), $(), e.attachTabBehavior(o, a, {colorElement: b.inkBarElement}), b.add(v), o.$on("$destroy", function () {
                        b.remove(v)
                    }), a.on("$destroy", function () {
                        i(function () {
                            b.scope.$broadcast("$mdTabsChanged")
                        }, 0, !1)
                    }), angular.isDefined(l.ngClick) || a.on("click", f), a.on("keydown", m), angular.isNumber(o.$parent.$index) && p(), angular.isDefined(l.mdActive) && h(), g()
                }
            }

            return {
                restrict: "E",
                require: ["mdTab", "^mdTabs"],
                controller: "$mdTab",
                scope: {onSelect: "&mdOnSelect", onDeselect: "&mdOnDeselect", label: "@"},
                compile: o
            }
        }

        angular.module("material.components.tabs").directive("mdTab", e), e.$inject = ["$mdInkRipple", "$compile", "$mdUtil", "$mdConstant", "$timeout"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e, t, n) {
            function r() {
                return $(e.selectedIndex)
            }

            function i() {
                return e.selectedIndex
            }

            function o(t, n) {
                p.add(t, n), angular.isDefined(t.element.attr("md-active")) || -1 !== e.selectedIndex && angular.isNumber(e.selectedIndex) && e.selectedIndex !== h.indexOf(t) ? t.onAdd(h.contentArea, !0) : (t.onAdd(h.contentArea, !1), h.select(t)), e.$broadcast("$mdTabsChanged")
            }

            function a(t, n) {
                if (p.contains(t) && !n) {
                    var i = r() === t, o = f() || d();
                    u(t), p.remove(t), t.onRemove(), e.$broadcast("$mdTabsChanged"), i && s(o)
                }
            }

            function c(t, n) {
                var i = r() === t;
                p.remove(t), p.add(t, n), i && s(t), e.$broadcast("$mdTabsChanged")
            }

            function s(t, n) {
                !t || t.isSelected || t.isDisabled() || p.contains(t) && (angular.isDefined(n) || (n = g(t) < e.selectedIndex), u(r(), n), e.selectedIndex = g(t), t.isSelected = !0, t.onSelect(n), e.$broadcast("$mdTabsChanged"))
            }

            function l(e) {
                h.tabToFocus = e
            }

            function u(t, n) {
                t && t.isSelected && p.contains(t) && (e.selectedIndex = -1, t.isSelected = !1, t.onDeselect(n))
            }

            function d(e, t) {
                return p.next(e || r(), t || m)
            }

            function f(e, t) {
                return p.previous(e || r(), t || m)
            }

            function m(e) {
                return e && !e.isDisabled()
            }

            var p = n.iterator([], !1), h = this;
            h.$element = t, h.scope = e;
            var g = (h.contentArea = angular.element(t[0].querySelector(".md-tabs-content")), h.inRange = p.inRange, h.indexOf = p.indexOf), $ = h.itemAt = p.itemAt;
            h.count = p.count, h.getSelectedItem = r, h.getSelectedIndex = i, h.add = o, h.remove = a, h.move = c, h.select = s, h.focus = l, h.deselect = u, h.next = d, h.previous = f, e.$on("$destroy", function () {
                u(r());
                for (var e = p.count() - 1; e >= 0; e--)a(p[e], !0)
            })
        }

        angular.module("material.components.tabs").controller("$mdTabs", e), e.$inject = ["$scope", "$element", "$mdUtil", "$timeout"]
    }(), /*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.8.3
 */
    function () {
        "use strict";
        function e(e) {
            function t(t, n, r, i, o) {
                function a() {
                    n.attr("role", "tablist")
                }

                function c() {
                    t.$watch("selectedIndex", function (e, t) {
                        if (t != e) {
                            var n = t > e;
                            if (i.deselect(i.itemAt(t), n), i.inRange(e)) {
                                for (var r = i.itemAt(e); r && r.isDisabled();)r = e > t ? i.next(r) : i.previous(r);
                                i.select(r, n)
                            }
                        }
                    })
                }

                t.stretchTabs = r.hasOwnProperty("mdStretchTabs") ? r.mdStretchTabs || "always" : "auto", e(n), a(), c(), o(t.$parent, function (e) {
                    angular.element(n[0].querySelector(".md-header-items")).append(e)
                })
            }

            return {
                restrict: "E",
                controller: "$mdTabs",
                require: "mdTabs",
                transclude: !0,
                scope: {selectedIndex: "=?mdSelected"},
                template: '<section class="md-header" ng-class="{\'md-paginating\': pagination.active}"><button class="md-paginator md-prev" ng-if="pagination.active && pagination.hasPrev" ng-click="pagination.clickPrevious()" aria-hidden="true"><md-icon md-svg-icon="tabs-arrow"></md-icon></button><div class="md-header-items-container" md-tabs-pagination><div class="md-header-items"><md-tabs-ink-bar></md-tabs-ink-bar></div></div><button class="md-paginator md-next" ng-if="pagination.active && pagination.hasNext" ng-click="pagination.clickNext()" aria-hidden="true"><md-icon md-svg-icon="tabs-arrow"></md-icon></button></section><section class="md-tabs-content"></section>',
                link: t
            }
        }

        angular.module("material.components.tabs").directive("mdTabs", e), e.$inject = ["$mdTheming"]
    }(), function () {
    angular.module("material.core").constant("$MD_THEME_CSS", "md-autocomplete {  background: '{{background-50}}'; }  md-autocomplete button md-icon path {    fill: '{{background-600}}'; }  md-autocomplete button:after {    background: '{{background-600-0.3}}'; }  md-autocomplete ul {    background: '{{background-50}}'; }    md-autocomplete ul li {      border-top: 1px solid '{{background-400}}';      color: '{{background-900}}'; }      md-autocomplete ul li .highlight {        color: '{{background-600}}'; }      md-autocomplete ul li:hover, md-autocomplete ul li.selected {        background: '{{background-200}}'; }md-backdrop.md-opaque.md-THEME_NAME-theme {  background-color: '{{foreground-4-0.5}}'; }md-bottom-sheet.md-THEME_NAME-theme {  background-color: '{{background-50}}';  border-top-color: '{{background-300}}'; }  md-bottom-sheet.md-THEME_NAME-theme.md-list md-item {    color: '{{foreground-1}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    background-color: '{{background-50}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    color: '{{foreground-1}}'; }md-toolbar .md-button.md-THEME_NAME-theme.md-fab {  background-color: white; }.md-button.md-THEME_NAME-theme {  border-radius: 3px; }  .md-button.md-THEME_NAME-theme:not([disabled]):hover, .md-button.md-THEME_NAME-theme:not([disabled]):focus {    background-color: '{{background-500-0.2}}'; }  .md-button.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }    .md-button.md-THEME_NAME-theme.md-primary.md-raised, .md-button.md-THEME_NAME-theme.md-primary.md-fab {      color: '{{primary-contrast}}';      background-color: '{{primary-color}}'; }      .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):focus, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):focus {        background-color: '{{primary-600}}'; }  .md-button.md-THEME_NAME-theme.md-fab {    border-radius: 50%;    background-color: '{{accent-color}}';    color: '{{accent-contrast}}'; }    .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):focus {      background-color: '{{accent-A700}}'; }  .md-button.md-THEME_NAME-theme.md-raised {    color: '{{background-contrast}}';    background-color: '{{background-50}}'; }    .md-button.md-THEME_NAME-theme.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-raised:not([disabled]):focus {      background-color: '{{background-200}}'; }  .md-button.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }    .md-button.md-THEME_NAME-theme.md-warn.md-raised, .md-button.md-THEME_NAME-theme.md-warn.md-fab {      color: '{{warn-contrast}}';      background-color: '{{warn-color}}'; }      .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):focus, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):focus {        background-color: '{{warn-700}}'; }  .md-button.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }    .md-button.md-THEME_NAME-theme.md-accent.md-raised, .md-button.md-THEME_NAME-theme.md-accent.md-fab {      color: '{{accent-contrast}}';      background-color: '{{accent-color}}'; }      .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):focus, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):focus {        background-color: '{{accent-700}}'; }  .md-button.md-THEME_NAME-theme[disabled], .md-button.md-THEME_NAME-theme.md-raised[disabled], .md-button.md-THEME_NAME-theme.md-fab[disabled] {    color: '{{foreground-3}}';    background-color: transparent;    cursor: not-allowed; }md-card.md-THEME_NAME-theme {  border-radius: 2px; }  md-card.md-THEME_NAME-theme .md-card-image {    border-radius: 2px 2px 0 0; }md-checkbox.md-THEME_NAME-theme .md-ripple {  color: '{{accent-600}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon {  background-color: '{{accent-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ripple {  color: '{{primary-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon {  background-color: '{{primary-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ripple {  color: '{{warn-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon {  background-color: '{{warn-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme[disabled] .md-icon {  border-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled].md-checked .md-icon {  background-color: '{{foreground-3}}'; }md-content.md-THEME_NAME-theme {  background-color: '{{background-hue-3}}'; }md-dialog.md-THEME_NAME-theme {  border-radius: 4px;  background-color: '{{background-hue-3}}'; }  md-dialog.md-THEME_NAME-theme.md-content-overflow .md-actions {    border-top-color: '{{foreground-4}}'; }md-divider.md-THEME_NAME-theme {  border-top-color: '{{foreground-4}}'; }md-icon.md-THEME_NAME-theme.md-primary {  color: '{{primary-color}}'; }md-icon.md-THEME_NAME-theme.md-accent {  color: '{{accent-color}}'; }md-icon.md-THEME_NAME-theme.md-warn {  color: '{{warn-color}}'; }md-icon.md-THEME_NAME-theme.md-danger {  color: '{{danger-color}}'; }md-input-container.md-THEME_NAME-theme .md-input {  color: '{{foreground-1}}';  border-color: '{{foreground-4}}';  text-shadow: '{{foreground-shadow}}'; }  md-input-container.md-THEME_NAME-theme .md-input::-webkit-input-placeholder, md-input-container.md-THEME_NAME-theme .md-input::-moz-placeholder, md-input-container.md-THEME_NAME-theme .md-input:-moz-placeholder, md-input-container.md-THEME_NAME-theme .md-input:-ms-input-placeholder {    color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme > md-icon {  fill: '{{foreground-1}}'; }md-input-container.md-THEME_NAME-theme label, md-input-container.md-THEME_NAME-theme .md-placeholder {  text-shadow: '{{foreground-shadow}}';  color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-has-value label {  color: '{{foreground-2}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused .md-input {  border-color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused label {  color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused md-icon {  fill: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent .md-input {  border-color: '{{accent-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent label {  color: '{{accent-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn .md-input {  border-color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn label {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid .md-input {  border-color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid label {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid data-ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid x-ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid [ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid [data-ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid [x-ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid .md-char-counter {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme .md-input[disabled], [disabled] md-input-container.md-THEME_NAME-theme .md-input {  border-bottom-color: transparent;  color: '{{foreground-3}}';  background-image: linear-gradient(to right, '{{foreground-4}}' 0%, '{{foreground-4}}' 33%, transparent 0%);  background-image: -ms-linear-gradient(left, transparent 0%, '{{foreground-4}}' 100%); }md-progress-circular.md-THEME_NAME-theme {  background-color: transparent; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-gap {    border-top-color: '{{primary-color}}';    border-bottom-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme .md-inner .md-right .md-half-circle {    border-top-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-right .md-half-circle {    border-right-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-left .md-half-circle {    border-left-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-gap {    border-top-color: '{{warn-color}}';    border-bottom-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-right .md-half-circle {    border-top-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-right .md-half-circle {    border-right-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-left .md-half-circle {    border-left-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-gap {    border-top-color: '{{accent-color}}';    border-bottom-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-right .md-half-circle {    border-top-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-right .md-half-circle {    border-right-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-left .md-half-circle {    border-left-color: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme .md-container {  background-color: '{{primary-100}}'; }md-progress-linear.md-THEME_NAME-theme .md-bar {  background-color: '{{primary-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-container {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-bar {  background-color: '{{warn-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-container {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-bar {  background-color: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-bar1 {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-dashed:before {  background: radial-gradient('{{warn-100}}' 0%, '{{warn-100}}' 16%, transparent 42%); }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-bar1 {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-dashed:before {  background: radial-gradient('{{accent-100}}' 0%, '{{accent-100}}' 16%, transparent 42%); }md-radio-button.md-THEME_NAME-theme .md-off {  border-color: '{{foreground-2}}'; }md-radio-button.md-THEME_NAME-theme .md-on {  background-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-off {  border-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme .md-container .md-ripple {  color: '{{accent-600}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-on {  background-color: '{{primary-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off {  border-color: '{{primary-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple {  color: '{{primary-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple {  color: '{{primary-600}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-on {  background-color: '{{warn-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off {  border-color: '{{warn-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple {  color: '{{warn-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple {  color: '{{warn-600}}'; }md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-off {  border-color: '{{foreground-3}}'; }md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-on {  border-color: '{{foreground-3}}'; }md-radio-group.md-THEME_NAME-theme:focus:not(:empty) {  border-color: '{{foreground-1}}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-label {  border-bottom-color: '{{primary-color}}';  color: '{{ foreground-1 }}'; }  md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-label.md-placeholder {    color: '{{ foreground-1 }}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-accent .md-select-label {  border-bottom-color: '{{accent-color}}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-warn .md-select-label {  border-bottom-color: '{{warn-color}}'; }md-select.md-THEME_NAME-theme[disabled] .md-select-label {  color: '{{foreground-3}}'; }  md-select.md-THEME_NAME-theme[disabled] .md-select-label.md-placeholder {    color: '{{foreground-3}}'; }md-select.md-THEME_NAME-theme .md-select-label {  border-bottom-color: '{{foreground-4}}'; }  md-select.md-THEME_NAME-theme .md-select-label.md-placeholder {    color: '{{foreground-2}}'; }md-select-menu.md-THEME_NAME-theme md-optgroup {  color: '{{foreground-2}}'; }  md-select-menu.md-THEME_NAME-theme md-optgroup md-option {    color: '{{foreground-1}}'; }md-select-menu.md-THEME_NAME-theme md-option[selected] {  background-color: '{{primary-50}}'; }  md-select-menu.md-THEME_NAME-theme md-option[selected]:focus {    background-color: '{{primary-100}}'; }  md-select-menu.md-THEME_NAME-theme md-option[selected].md-accent {    background-color: '{{accent-50}}'; }    md-select-menu.md-THEME_NAME-theme md-option[selected].md-accent:focus {      background-color: '{{accent-100}}'; }md-select-menu.md-THEME_NAME-theme md-option:focus:not([selected]) {  background: '{{background-200}}'; }md-sidenav.md-THEME_NAME-theme {  background-color: '{{background-hue-3}}'; }md-slider.md-THEME_NAME-theme .md-track {  background-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme .md-track-ticks {  background-color: '{{foreground-4}}'; }md-slider.md-THEME_NAME-theme .md-focus-thumb {  background-color: '{{foreground-2}}'; }md-slider.md-THEME_NAME-theme .md-focus-ring {  border-color: '{{foreground-4}}'; }md-slider.md-THEME_NAME-theme .md-disabled-thumb {  border-color: '{{background-hue-3}}'; }md-slider.md-THEME_NAME-theme.md-min .md-thumb:after {  background-color: '{{background-hue-3}}'; }md-slider.md-THEME_NAME-theme .md-track.md-track-fill {  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb:after {  border-color: '{{accent-color}}';  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-sign {  background-color: '{{accent-color}}'; }  md-slider.md-THEME_NAME-theme .md-sign:after {    border-top-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb-text {  color: '{{accent-contrast}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-track.md-track-fill {  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb:after {  border-color: '{{warn-color}}';  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-sign {  background-color: '{{warn-color}}'; }  md-slider.md-THEME_NAME-theme.md-warn .md-sign:after {    border-top-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb-text {  color: '{{warn-contrast}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-track.md-track-fill {  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb:after {  border-color: '{{primary-color}}';  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-sign {  background-color: '{{primary-color}}'; }  md-slider.md-THEME_NAME-theme.md-primary .md-sign:after {    border-top-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb-text {  color: '{{primary-contrast}}'; }md-slider.md-THEME_NAME-theme[disabled] .md-thumb:after {  border-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme[disabled]:not(.md-min) .md-thumb:after {  background-color: '{{foreground-3}}'; }.md-subheader.md-THEME_NAME-theme {  color: '{{ foreground-2-0.23 }}';  background-color: '{{background-hue-3}}'; }  .md-subheader.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme .md-thumb {  background-color: '{{background-50}}'; }md-switch.md-THEME_NAME-theme .md-bar {  background-color: '{{background-500}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-thumb {  background-color: '{{accent-color}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-bar {  background-color: '{{accent-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-thumb {  background-color: '{{primary-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-bar {  background-color: '{{primary-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-thumb {  background-color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-bar {  background-color: '{{warn-color-0.5}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-thumb {  background-color: '{{background-400}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-bar {  background-color: '{{foreground-4}}'; }md-switch.md-THEME_NAME-theme:focus .md-label:not(:empty) {  border-color: '{{foreground-1}}';  border-style: dotted; }md-tabs.md-THEME_NAME-theme .md-header {  background-color: transparent; }md-tabs.md-THEME_NAME-theme .md-paginator md-icon {  color: '{{primary-color}}'; }md-tabs.md-THEME_NAME-theme.md-accent .md-header {  background-color: '{{accent-color}}'; }md-tabs.md-THEME_NAME-theme.md-accent md-tab:not([disabled]) {  color: '{{accent-100}}'; }  md-tabs.md-THEME_NAME-theme.md-accent md-tab:not([disabled]).active {    color: '{{accent-contrast}}'; }md-tabs.md-THEME_NAME-theme.md-primary .md-header {  background-color: '{{primary-color}}'; }md-tabs.md-THEME_NAME-theme.md-primary md-tab:not([disabled]) {  color: '{{primary-100}}'; }  md-tabs.md-THEME_NAME-theme.md-primary md-tab:not([disabled]).active {    color: '{{primary-contrast}}'; }md-tabs.md-THEME_NAME-theme.md-primary md-tab {  color: '{{primary-100}}'; }  md-tabs.md-THEME_NAME-theme.md-primary md-tab[disabled] {    color: '{{foreground-3}}'; }  md-tabs.md-THEME_NAME-theme.md-primary md-tab:focus {    color: '{{primary-contrast}}';    background-color: '{{primary-contrast-0.1}}'; }  md-tabs.md-THEME_NAME-theme.md-primary md-tab.active {    color: '{{primary-contrast}}'; }  md-tabs.md-THEME_NAME-theme.md-primary md-tab .md-ripple-container {    color: '{{primary-contrast}}'; }md-tabs.md-THEME_NAME-theme.md-warn .md-header {  background-color: '{{warn-color}}'; }md-tabs.md-THEME_NAME-theme.md-warn md-tab:not([disabled]) {  color: '{{warn-100}}'; }  md-tabs.md-THEME_NAME-theme.md-warn md-tab:not([disabled]).active {    color: '{{warn-contrast}}'; }md-tabs.md-THEME_NAME-theme md-tabs-ink-bar {  color: '{{accent-color}}';  background: '{{accent-color}}'; }md-tabs.md-THEME_NAME-theme md-tab {  color: '{{foreground-2}}'; }  md-tabs.md-THEME_NAME-theme md-tab[disabled] {    color: '{{foreground-3}}'; }  md-tabs.md-THEME_NAME-theme md-tab:focus {    color: '{{foreground-1}}'; }  md-tabs.md-THEME_NAME-theme md-tab.active {    color: '{{primary-color}}'; }  md-tabs.md-THEME_NAME-theme md-tab .md-ripple-container {    color: '{{accent-100}}'; }md-input-group.md-THEME_NAME-theme input, md-input-group.md-THEME_NAME-theme textarea {  text-shadow: '{{foreground-shadow}}'; }  md-input-group.md-THEME_NAME-theme input::-webkit-input-placeholder, md-input-group.md-THEME_NAME-theme input::-moz-placeholder, md-input-group.md-THEME_NAME-theme input:-moz-placeholder, md-input-group.md-THEME_NAME-theme input:-ms-input-placeholder, md-input-group.md-THEME_NAME-theme textarea::-webkit-input-placeholder, md-input-group.md-THEME_NAME-theme textarea::-moz-placeholder, md-input-group.md-THEME_NAME-theme textarea:-moz-placeholder, md-input-group.md-THEME_NAME-theme textarea:-ms-input-placeholder {    color: '{{foreground-3}}'; }md-input-group.md-THEME_NAME-theme label {  text-shadow: '{{foreground-shadow}}';  color: '{{foreground-3}}'; }md-input-group.md-THEME_NAME-theme input, md-input-group.md-THEME_NAME-theme textarea {  color: '{{foreground-1}}';  border-color: '{{foreground-4}}'; }md-input-group.md-THEME_NAME-theme.md-input-focused input, md-input-group.md-THEME_NAME-theme.md-input-focused textarea {  border-color: '{{primary-500}}'; }md-input-group.md-THEME_NAME-theme.md-input-focused label {  color: '{{primary-500}}'; }md-input-group.md-THEME_NAME-theme.md-input-focused.md-accent input, md-input-group.md-THEME_NAME-theme.md-input-focused.md-accent textarea {  border-color: '{{accent-500}}'; }md-input-group.md-THEME_NAME-theme.md-input-focused.md-accent label {  color: '{{accent-500}}'; }md-input-group.md-THEME_NAME-theme.md-input-has-value:not(.md-input-focused) label {  color: '{{foreground-2}}'; }md-input-group.md-THEME_NAME-theme .md-input[disabled] {  border-bottom-color: '{{foreground-4}}';  color: '{{foreground-3}}'; }md-toast.md-THEME_NAME-theme {  background-color: '{{foreground-1}}';  color: '{{background-50}}'; }  md-toast.md-THEME_NAME-theme .md-button {    color: '{{background-50}}'; }    md-toast.md-THEME_NAME-theme .md-button.md-highlight {      color: '{{primary-A200}}'; }      md-toast.md-THEME_NAME-theme .md-button.md-highlight.md-accent {        color: '{{accent-A200}}'; }      md-toast.md-THEME_NAME-theme .md-button.md-highlight.md-warn {        color: '{{warn-A200}}'; }md-toolbar.md-THEME_NAME-theme {  background-color: '{{primary-color}}';  color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme .md-button {    color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme.md-accent {    background-color: '{{accent-color}}';    color: '{{accent-contrast}}'; }  md-toolbar.md-THEME_NAME-theme.md-warn {    background-color: '{{warn-color}}';    color: '{{warn-contrast}}'; }md-tooltip.md-THEME_NAME-theme {  color: '{{background-A100}}'; }  md-tooltip.md-THEME_NAME-theme .md-background {    background-color: '{{foreground-2}}'; }")
}();