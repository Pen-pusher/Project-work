! function() {
    var t = {
            6539: function(t, n, e) {
                var r = e(7400).Symbol;
                t.exports = r
            },
            6070: function(t) {
                t.exports = function(t, n) {
                    for (var e = -1, r = null == t ? 0 : t.length, u = Array(r); ++e < r;) u[e] = n(t[e], e, t);
                    return u
                }
            },
            6446: function(t) {
                t.exports = function(t, n, e, r) {
                    var u = -1,
                        o = null == t ? 0 : t.length;
                    for (r && o && (e = t[++u]); ++u < o;) e = n(e, t[u], u, t);
                    return e
                }
            },
            5630: function(t) {
                t.exports = function(t) {
                    return t.split("")
                }
            },
            585: function(t) {
                var n = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
                t.exports = function(t) {
                    return t.match(n) || []
                }
            },
            9736: function(t, n, e) {
                var r = e(6539),
                    u = e(4840),
                    o = e(1258),
                    f = r ? r.toStringTag : void 0;
                t.exports = function(t) {
                    return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : f && f in Object(t) ? u(t) : o(t)
                }
            },
            7646: function(t) {
                t.exports = function(t) {
                    return function(n) {
                        return null == t ? void 0 : t[n]
                    }
                }
            },
            5733: function(t) {
                t.exports = function(t, n, e) {
                    var r = -1,
                        u = t.length;
                    n < 0 && (n = -n > u ? 0 : u + n), (e = e > u ? u : e) < 0 && (e += u), u = n > e ? 0 : e - n >>> 0, n >>>= 0;
                    for (var o = Array(u); ++r < u;) o[r] = t[r + n];
                    return o
                }
            },
            4282: function(t, n, e) {
                var r = e(6539),
                    u = e(6070),
                    o = e(9785),
                    f = e(5193),
                    i = r ? r.prototype : void 0,
                    c = i ? i.toString : void 0;
                t.exports = function t(n) {
                    if ("string" == typeof n) return n;
                    if (o(n)) return u(n, t) + "";
                    if (f(n)) return c ? c.call(n) : "";
                    var e = n + "";
                    return "0" == e && 1 / n == -Infinity ? "-0" : e
                }
            },
            9158: function(t, n, e) {
                var r = e(5733);
                t.exports = function(t, n, e) {
                    var u = t.length;
                    return e = void 0 === e ? u : e, !n && e >= u ? t : r(t, n, e)
                }
            },
            2690: function(t, n, e) {
                var r = e(9158),
                    u = e(5348),
                    o = e(3528),
                    f = e(5567);
                t.exports = function(t) {
                    return function(n) {
                        n = f(n);
                        var e = u(n) ? o(n) : void 0,
                            i = e ? e[0] : n.charAt(0),
                            c = e ? r(e, 1).join("") : n.slice(1);
                        return i[t]() + c
                    }
                }
            },
            8267: function(t, n, e) {
                var r = e(6446),
                    u = e(9689),
                    o = e(3254),
                    f = RegExp("['’]", "g");
                t.exports = function(t) {
                    return function(n) {
                        return r(o(u(n).replace(f, "")), t, "")
                    }
                }
            },
            4248: function(t, n, e) {
                var r = e(7646)({
                    "À": "A",
                    "Á": "A",
                    "Â": "A",
                    "Ã": "A",
                    "Ä": "A",
                    "Å": "A",
                    "à": "a",
                    "á": "a",
                    "â": "a",
                    "ã": "a",
                    "ä": "a",
                    "å": "a",
                    "Ç": "C",
                    "ç": "c",
                    "Ð": "D",
                    "ð": "d",
                    "È": "E",
                    "É": "E",
                    "Ê": "E",
                    "Ë": "E",
                    "è": "e",
                    "é": "e",
                    "ê": "e",
                    "ë": "e",
                    "Ì": "I",
                    "Í": "I",
                    "Î": "I",
                    "Ï": "I",
                    "ì": "i",
                    "í": "i",
                    "î": "i",
                    "ï": "i",
                    "Ñ": "N",
                    "ñ": "n",
                    "Ò": "O",
                    "Ó": "O",
                    "Ô": "O",
                    "Õ": "O",
                    "Ö": "O",
                    "Ø": "O",
                    "ò": "o",
                    "ó": "o",
                    "ô": "o",
                    "õ": "o",
                    "ö": "o",
                    "ø": "o",
                    "Ù": "U",
                    "Ú": "U",
                    "Û": "U",
                    "Ü": "U",
                    "ù": "u",
                    "ú": "u",
                    "û": "u",
                    "ü": "u",
                    "Ý": "Y",
                    "ý": "y",
                    "ÿ": "y",
                    "Æ": "Ae",
                    "æ": "ae",
                    "Þ": "Th",
                    "þ": "th",
                    "ß": "ss",
                    "Ā": "A",
                    "Ă": "A",
                    "Ą": "A",
                    "ā": "a",
                    "ă": "a",
                    "ą": "a",
                    "Ć": "C",
                    "Ĉ": "C",
                    "Ċ": "C",
                    "Č": "C",
                    "ć": "c",
                    "ĉ": "c",
                    "ċ": "c",
                    "č": "c",
                    "Ď": "D",
                    "Đ": "D",
                    "ď": "d",
                    "đ": "d",
                    "Ē": "E",
                    "Ĕ": "E",
                    "Ė": "E",
                    "Ę": "E",
                    "Ě": "E",
                    "ē": "e",
                    "ĕ": "e",
                    "ė": "e",
                    "ę": "e",
                    "ě": "e",
                    "Ĝ": "G",
                    "Ğ": "G",
                    "Ġ": "G",
                    "Ģ": "G",
                    "ĝ": "g",
                    "ğ": "g",
                    "ġ": "g",
                    "ģ": "g",
                    "Ĥ": "H",
                    "Ħ": "H",
                    "ĥ": "h",
                    "ħ": "h",
                    "Ĩ": "I",
                    "Ī": "I",
                    "Ĭ": "I",
                    "Į": "I",
                    "İ": "I",
                    "ĩ": "i",
                    "ī": "i",
                    "ĭ": "i",
                    "į": "i",
                    "ı": "i",
                    "Ĵ": "J",
                    "ĵ": "j",
                    "Ķ": "K",
                    "ķ": "k",
                    "ĸ": "k",
                    "Ĺ": "L",
                    "Ļ": "L",
                    "Ľ": "L",
                    "Ŀ": "L",
                    "Ł": "L",
                    "ĺ": "l",
                    "ļ": "l",
                    "ľ": "l",
                    "ŀ": "l",
                    "ł": "l",
                    "Ń": "N",
                    "Ņ": "N",
                    "Ň": "N",
                    "Ŋ": "N",
                    "ń": "n",
                    "ņ": "n",
                    "ň": "n",
                    "ŋ": "n",
                    "Ō": "O",
                    "Ŏ": "O",
                    "Ő": "O",
                    "ō": "o",
                    "ŏ": "o",
                    "ő": "o",
                    "Ŕ": "R",
                    "Ŗ": "R",
                    "Ř": "R",
                    "ŕ": "r",
                    "ŗ": "r",
                    "ř": "r",
                    "Ś": "S",
                    "Ŝ": "S",
                    "Ş": "S",
                    "Š": "S",
                    "ś": "s",
                    "ŝ": "s",
                    "ş": "s",
                    "š": "s",
                    "Ţ": "T",
                    "Ť": "T",
                    "Ŧ": "T",
                    "ţ": "t",
                    "ť": "t",
                    "ŧ": "t",
                    "Ũ": "U",
                    "Ū": "U",
                    "Ŭ": "U",
                    "Ů": "U",
                    "Ű": "U",
                    "Ų": "U",
                    "ũ": "u",
                    "ū": "u",
                    "ŭ": "u",
                    "ů": "u",
                    "ű": "u",
                    "ų": "u",
                    "Ŵ": "W",
                    "ŵ": "w",
                    "Ŷ": "Y",
                    "ŷ": "y",
                    "Ÿ": "Y",
                    "Ź": "Z",
                    "Ż": "Z",
                    "Ž": "Z",
                    "ź": "z",
                    "ż": "z",
                    "ž": "z",
                    "Ĳ": "IJ",
                    "ĳ": "ij",
                    "Œ": "Oe",
                    "œ": "oe",
                    "ŉ": "'n",
                    "ſ": "s"
                });
                t.exports = r
            },
            9120: function(t, n, e) {
                var r = "object" == typeof e.g && e.g && e.g.Object === Object && e.g;
                t.exports = r
            },
            4840: function(t, n, e) {
                var r = e(6539),
                    u = Object.prototype,
                    o = u.hasOwnProperty,
                    f = u.toString,
                    i = r ? r.toStringTag : void 0;
                t.exports = function(t) {
                    var n = o.call(t, i),
                        e = t[i];
                    try {
                        t[i] = void 0;
                        var r = !0
                    } catch (t) {}
                    var u = f.call(t);
                    return r && (n ? t[i] = e : delete t[i]), u
                }
            },
            5348: function(t) {
                var n = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
                t.exports = function(t) {
                    return n.test(t)
                }
            },
            3909: function(t) {
                var n = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
                t.exports = function(t) {
                    return n.test(t)
                }
            },
            1258: function(t) {
                var n = Object.prototype.toString;
                t.exports = function(t) {
                    return n.call(t)
                }
            },
            7400: function(t, n, e) {
                var r = e(9120),
                    u = "object" == typeof self && self && self.Object === Object && self,
                    o = r || u || Function("return this")();
                t.exports = o
            },
            3528: function(t, n, e) {
                var r = e(5630),
                    u = e(5348),
                    o = e(4890);
                t.exports = function(t) {
                    return u(t) ? o(t) : r(t)
                }
            },
            4890: function(t) {
                var n = "[\\ud800-\\udfff]",
                    e = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
                    r = "\\ud83c[\\udffb-\\udfff]",
                    u = "[^\\ud800-\\udfff]",
                    o = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                    f = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                    i = "(?:" + e + "|" + r + ")" + "?",
                    c = "[\\ufe0e\\ufe0f]?",
                    a = c + i + ("(?:\\u200d(?:" + [u, o, f].join("|") + ")" + c + i + ")*"),
                    d = "(?:" + [u + e + "?", e, o, f, n].join("|") + ")",
                    s = RegExp(r + "(?=" + r + ")|" + d + a, "g");
                t.exports = function(t) {
                    return t.match(s) || []
                }
            },
            7025: function(t) {
                var n = "\\u2700-\\u27bf",
                    e = "a-z\\xdf-\\xf6\\xf8-\\xff",
                    r = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                    u = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                    o = "[" + u + "]",
                    f = "\\d+",
                    i = "[\\u2700-\\u27bf]",
                    c = "[" + e + "]",
                    a = "[^\\ud800-\\udfff" + u + f + n + e + r + "]",
                    d = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                    s = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                    x = "[" + r + "]",
                    l = "(?:" + c + "|" + a + ")",
                    p = "(?:" + x + "|" + a + ")",
                    v = "(?:['’](?:d|ll|m|re|s|t|ve))?",
                    g = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
                    b = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",
                    h = "[\\ufe0e\\ufe0f]?",
                    y = h + b + ("(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", d, s].join("|") + ")" + h + b + ")*"),
                    j = "(?:" + [i, d, s].join("|") + ")" + y,
                    A = RegExp([x + "?" + c + "+" + v + "(?=" + [o, x, "$"].join("|") + ")", p + "+" + g + "(?=" + [o, x + l, "$"].join("|") + ")", x + "?" + l + "+" + v, x + "+" + g, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", f, j].join("|"), "g");
                t.exports = function(t) {
                    return t.match(A) || []
                }
            },
            7429: function(t, n, e) {
                var r = e(8052),
                    u = e(8267)((function(t, n, e) {
                        return n = n.toLowerCase(), t + (e ? r(n) : n)
                    }));
                t.exports = u
            },
            8052: function(t, n, e) {
                var r = e(5567),
                    u = e(6744);
                t.exports = function(t) {
                    return u(r(t).toLowerCase())
                }
            },
            9689: function(t, n, e) {
                var r = e(4248),
                    u = e(5567),
                    o = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                    f = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
                t.exports = function(t) {
                    return (t = u(t)) && t.replace(o, r).replace(f, "")
                }
            },
            9785: function(t) {
                var n = Array.isArray;
                t.exports = n
            },
            2360: function(t) {
                t.exports = function(t) {
                    return null != t && "object" == typeof t
                }
            },
            5193: function(t, n, e) {
                var r = e(9736),
                    u = e(2360);
                t.exports = function(t) {
                    return "symbol" == typeof t || u(t) && "[object Symbol]" == r(t)
                }
            },
            5567: function(t, n, e) {
                var r = e(4282);
                t.exports = function(t) {
                    return null == t ? "" : r(t)
                }
            },
            6744: function(t, n, e) {
                var r = e(2690)("toUpperCase");
                t.exports = r
            },
            3254: function(t, n, e) {
                var r = e(585),
                    u = e(3909),
                    o = e(5567),
                    f = e(7025);
                t.exports = function(t, n, e) {
                    return t = o(t), void 0 === (n = e ? void 0 : n) ? u(t) ? f(t) : r(t) : t.match(n) || []
                }
            }
        },
        n = {};

    function e(r) {
        var u = n[r];
        if (void 0 !== u) return u.exports;
        var o = n[r] = {
            exports: {}
        };
        return t[r](o, o.exports, e), o.exports
    }
    e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return e.d(n, {
                a: n
            }), n
        }, e.d = function(t, n) {
            for (var r in n) e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, {
                enumerable: !0,
                get: n[r]
            })
        }, e.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (t) {
                if ("object" == typeof window) return window
            }
        }(), e.o = function(t, n) {
            return Object.prototype.hasOwnProperty.call(t, n)
        },
        function() {
            "use strict";
            var t = (t, n) => {
                    document.addEventListener("DOMContentLoaded", (() => {
                        document.addEventListener("mousedown", (function(e) {
                            for (let r = e.target; r && r !== this; r = r.parentNode)
                                if (r.matches("[".concat(t, "]"))) {
                                    n(r);
                                    break
                                }
                        }), !1)
                    }))
                },
                n = e(9785),
                r = e.n(n);
            const u = (t, n) => {
                    const e = t.category,
                        r = {};
                    for (const [n, e] of Object.entries(t)) "category" !== n && (r[n] = e);
                    window.gtag("event", e, { ...r,
                        ...n
                    })
                },
                o = function(t) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        e = [t.category, t.action, t.label];
                    t.value && e.push(t.value), window.ga("send", "event", ...e), u(t, n)
                };
            var f = function(t) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                try {
                    r()(t) ? t.forEach((t => {
                        o(t)
                    })) : o(t, n)
                } catch (t) {}
            };
            e(7429);
            var i = class {
                constructor(n) {
                    this.config = (t => !!(t.url && t.indexes && t.indexes.monthly && t.indexes.weekly) && t)(n), this.ads = [], this.config && (n.trackImpressions, t("data-track-click", this.handleEvent.bind(this, "click"))), t("data-track-ga", this.handleEvent.bind(this, "ga"))
                }
                track() {}
                trackGA(t) {
                    f(t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
                }
                handleEvent(t, n) {
                    let e;
                    try {
                        if ("ga" === t) return n.dataset.trackGa && (e = JSON.parse(n.dataset.trackGa)), f(e)
                    } catch (t) {}
                }
            };
            window.Analytics = i
        }()
}();