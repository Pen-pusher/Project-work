/*! For license information please see cc-main.8ec3ba12afa3aada2eb4.js.LICENSE.txt */ ! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function(t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "webpack/", n(n.s = 29)
}([function(e, t, n) {
    var r = n(22),
        o = n(7);
    e.exports = function(e, t) {
        var n = o(e, t, "get");
        return r(e, n)
    }, e.exports.__esModule = !0, e.exports.default = e.exports
}, function(e, t, n) {
    var r = n(23),
        o = n(7);
    e.exports = function(e, t, n) {
        var i = o(e, t, "set");
        return r(e, i, n), n
    }, e.exports.__esModule = !0, e.exports.default = e.exports
}, function(e, t) {
    e.exports = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }
}, function(e, t, n) {
    var r = n(14),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = r || o || Function("return this")();
    e.exports = i
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    var r = n(6),
        o = n(19),
        i = n(20),
        a = r ? r.toStringTag : void 0;
    e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? o(e) : i(e)
    }
}, function(e, t, n) {
    var r = n(3).Symbol;
    e.exports = r
}, function(e, t) {
    e.exports = function(e, t, n) {
        if (!t.has(e)) throw new TypeError("attempted to " + n + " private field on non-instance");
        return t.get(e)
    }, e.exports.__esModule = !0, e.exports.default = e.exports
}, function(e, t, n) {
    var r = n(12),
        o = n(2);
    e.exports = function(e, t, n) {
        var i = !0,
            a = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");
        return o(n) && (i = "leading" in n ? !!n.leading : i, a = "trailing" in n ? !!n.trailing : a), r(e, t, {
            leading: i,
            maxWait: t,
            trailing: a
        })
    }
}, function(e, t, n) {
    var r = n(5),
        o = n(2);
    e.exports = function(e) {
        if (!o(e)) return !1;
        var t = r(e);
        return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
    }
}, function(e, t, n) {
    e.exports = function() {
        "use strict";

        function e(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }
        var t = Object.hasOwnProperty,
            n = Object.setPrototypeOf,
            r = Object.isFrozen,
            o = Object.freeze,
            i = Object.seal,
            a = Object.create,
            l = "undefined" != typeof Reflect && Reflect,
            c = l.apply,
            s = l.construct;
        c || (c = function(e, t, n) {
            return e.apply(t, n)
        }), o || (o = function(e) {
            return e
        }), i || (i = function(e) {
            return e
        }), s || (s = function(t, n) {
            return new(Function.prototype.bind.apply(t, [null].concat(e(n))))
        });
        var u = E(Array.prototype.forEach),
            d = E(Array.prototype.pop),
            f = E(Array.prototype.push),
            p = E(String.prototype.toLowerCase),
            m = E(String.prototype.match),
            h = E(String.prototype.replace),
            g = E(String.prototype.indexOf),
            v = E(String.prototype.trim),
            y = E(RegExp.prototype.test),
            b = T(TypeError);

        function E(e) {
            return function(t) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                return c(e, t, r)
            }
        }

        function T(e) {
            return function() {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return s(e, n)
            }
        }

        function w(e, t) {
            n && n(e, null);
            for (var o = t.length; o--;) {
                var i = t[o];
                if ("string" == typeof i) {
                    var a = p(i);
                    a !== i && (r(t) || (t[o] = a), i = a)
                }
                e[i] = !0
            }
            return e
        }

        function A(e) {
            var n = a(null),
                r = void 0;
            for (r in e) c(t, e, [r]) && (n[r] = e[r]);
            return n
        }
        var O = o(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
            x = o(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "audio", "canvas", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "video", "view", "vkern"]),
            _ = o(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
            S = o(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
            k = o(["#text"]),
            M = o(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns"]),
            L = o(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
            N = o(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
            C = o(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
            R = i(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
            D = i(/<%[\s\S]*|[\s\S]*%>/gm),
            j = i(/^data-[\-\w.\u00B7-\uFFFF]/),
            U = i(/^aria-[\-\w]+$/),
            I = i(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
            H = i(/^(?:\w+script|data):/i),
            B = i(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
            P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function F(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }
        var W = function() {
                return "undefined" == typeof window ? null : window
            },
            z = function(e, t) {
                if ("object" !== (void 0 === e ? "undefined" : P(e)) || "function" != typeof e.createPolicy) return null;
                var n = null,
                    r = "data-tt-policy-suffix";
                t.currentScript && t.currentScript.hasAttribute(r) && (n = t.currentScript.getAttribute(r));
                var o = "dompurify" + (n ? "#" + n : "");
                try {
                    return e.createPolicy(o, {
                        createHTML: function(e) {
                            return e
                        }
                    })
                } catch (e) {
                    return console.warn("TrustedTypes policy " + o + " could not be created."), null
                }
            };

        function $() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : W(),
                t = function(e) {
                    return $(e)
                };
            if (t.version = "2.1.1", t.removed = [], !e || !e.document || 9 !== e.document.nodeType) return t.isSupported = !1, t;
            var n = e.document,
                r = e.document,
                i = e.DocumentFragment,
                a = e.HTMLTemplateElement,
                l = e.Node,
                c = e.NodeFilter,
                s = e.NamedNodeMap,
                E = void 0 === s ? e.NamedNodeMap || e.MozNamedAttrMap : s,
                T = e.Text,
                q = e.Comment,
                G = e.DOMParser,
                V = e.trustedTypes;
            if ("function" == typeof a) {
                var X = r.createElement("template");
                X.content && X.content.ownerDocument && (r = X.content.ownerDocument)
            }
            var J = z(V, n),
                Y = J && ke ? J.createHTML("") : "",
                K = r,
                Q = K.implementation,
                Z = K.createNodeIterator,
                ee = K.getElementsByTagName,
                te = K.createDocumentFragment,
                ne = n.importNode,
                re = {};
            try {
                re = A(r).documentMode ? r.documentMode : {}
            } catch (e) {}
            var oe = {};
            t.isSupported = Q && void 0 !== Q.createHTMLDocument && 9 !== re;
            var ie = R,
                ae = D,
                le = j,
                ce = U,
                se = H,
                ue = B,
                de = I,
                fe = null,
                pe = w({}, [].concat(F(O), F(x), F(_), F(S), F(k))),
                me = null,
                he = w({}, [].concat(F(M), F(L), F(N), F(C))),
                ge = null,
                ve = null,
                ye = !0,
                be = !0,
                Ee = !1,
                Te = !1,
                we = !1,
                Ae = !1,
                Oe = !1,
                xe = !1,
                _e = !1,
                Se = !1,
                ke = !1,
                Me = !0,
                Le = !0,
                Ne = !1,
                Ce = {},
                Re = w({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
                De = null,
                je = w({}, ["audio", "video", "img", "source", "image", "track"]),
                Ue = null,
                Ie = w({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "summary", "title", "value", "style", "xmlns"]),
                He = null,
                Be = r.createElement("form"),
                Pe = function(e) {
                    He && He === e || (e && "object" === (void 0 === e ? "undefined" : P(e)) || (e = {}), e = A(e), fe = "ALLOWED_TAGS" in e ? w({}, e.ALLOWED_TAGS) : pe, me = "ALLOWED_ATTR" in e ? w({}, e.ALLOWED_ATTR) : he, Ue = "ADD_URI_SAFE_ATTR" in e ? w(A(Ie), e.ADD_URI_SAFE_ATTR) : Ie, De = "ADD_DATA_URI_TAGS" in e ? w(A(je), e.ADD_DATA_URI_TAGS) : je, ge = "FORBID_TAGS" in e ? w({}, e.FORBID_TAGS) : {}, ve = "FORBID_ATTR" in e ? w({}, e.FORBID_ATTR) : {}, Ce = "USE_PROFILES" in e && e.USE_PROFILES, ye = !1 !== e.ALLOW_ARIA_ATTR, be = !1 !== e.ALLOW_DATA_ATTR, Ee = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Te = e.SAFE_FOR_TEMPLATES || !1, we = e.WHOLE_DOCUMENT || !1, xe = e.RETURN_DOM || !1, _e = e.RETURN_DOM_FRAGMENT || !1, Se = e.RETURN_DOM_IMPORT || !1, ke = e.RETURN_TRUSTED_TYPE || !1, Oe = e.FORCE_BODY || !1, Me = !1 !== e.SANITIZE_DOM, Le = !1 !== e.KEEP_CONTENT, Ne = e.IN_PLACE || !1, de = e.ALLOWED_URI_REGEXP || de, Te && (be = !1), _e && (xe = !0), Ce && (fe = w({}, [].concat(F(k))), me = [], !0 === Ce.html && (w(fe, O), w(me, M)), !0 === Ce.svg && (w(fe, x), w(me, L), w(me, C)), !0 === Ce.svgFilters && (w(fe, _), w(me, L), w(me, C)), !0 === Ce.mathMl && (w(fe, S), w(me, N), w(me, C))), e.ADD_TAGS && (fe === pe && (fe = A(fe)), w(fe, e.ADD_TAGS)), e.ADD_ATTR && (me === he && (me = A(me)), w(me, e.ADD_ATTR)), e.ADD_URI_SAFE_ATTR && w(Ue, e.ADD_URI_SAFE_ATTR), Le && (fe["#text"] = !0), we && w(fe, ["html", "head", "body"]), fe.table && (w(fe, ["tbody"]), delete ge.tbody), o && o(e), He = e)
                },
                Fe = function(e) {
                    f(t.removed, {
                        element: e
                    });
                    try {
                        e.parentNode.removeChild(e)
                    } catch (t) {
                        e.outerHTML = Y
                    }
                },
                We = function(e, n) {
                    try {
                        f(t.removed, {
                            attribute: n.getAttributeNode(e),
                            from: n
                        })
                    } catch (e) {
                        f(t.removed, {
                            attribute: null,
                            from: n
                        })
                    }
                    n.removeAttribute(e)
                },
                ze = function(e) {
                    var t = void 0,
                        n = void 0;
                    if (Oe) e = "<remove></remove>" + e;
                    else {
                        var o = m(e, /^[\r\n\t ]+/);
                        n = o && o[0]
                    }
                    var i = J ? J.createHTML(e) : e;
                    try {
                        t = (new G).parseFromString(i, "text/html")
                    } catch (e) {}
                    if (!t || !t.documentElement) {
                        var a = (t = Q.createHTMLDocument("")).body;
                        a.parentNode.removeChild(a.parentNode.firstElementChild), a.outerHTML = i
                    }
                    return e && n && t.body.insertBefore(r.createTextNode(n), t.body.childNodes[0] || null), ee.call(t, we ? "html" : "body")[0]
                },
                $e = function(e) {
                    return Z.call(e.ownerDocument || e, e, c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT, (function() {
                        return c.FILTER_ACCEPT
                    }), !1)
                },
                qe = function(e) {
                    return !(e instanceof T || e instanceof q || "string" == typeof e.nodeName && "string" == typeof e.textContent && "function" == typeof e.removeChild && e.attributes instanceof E && "function" == typeof e.removeAttribute && "function" == typeof e.setAttribute && "string" == typeof e.namespaceURI)
                },
                Ge = function(e) {
                    return "object" === (void 0 === l ? "undefined" : P(l)) ? e instanceof l : e && "object" === (void 0 === e ? "undefined" : P(e)) && "number" == typeof e.nodeType && "string" == typeof e.nodeName
                },
                Ve = function(e, n, r) {
                    oe[e] && u(oe[e], (function(e) {
                        e.call(t, n, r, He)
                    }))
                },
                Xe = function(e) {
                    var n = void 0;
                    if (Ve("beforeSanitizeElements", e, null), qe(e)) return Fe(e), !0;
                    if (m(e.nodeName, /[\u0080-\uFFFF]/)) return Fe(e), !0;
                    var r = p(e.nodeName);
                    if (Ve("uponSanitizeElement", e, {
                            tagName: r,
                            allowedTags: fe
                        }), ("svg" === r || "math" === r) && 0 !== e.querySelectorAll("p, br").length) return Fe(e), !0;
                    if (!Ge(e.firstElementChild) && (!Ge(e.content) || !Ge(e.content.firstElementChild)) && y(/<[!/\w]/g, e.innerHTML) && y(/<[!/\w]/g, e.textContent)) return Fe(e), !0;
                    if (!fe[r] || ge[r]) {
                        if (Le && !Re[r] && "function" == typeof e.insertAdjacentHTML) try {
                            var o = e.innerHTML;
                            e.insertAdjacentHTML("AfterEnd", J ? J.createHTML(o) : o)
                        } catch (e) {}
                        return Fe(e), !0
                    }
                    return "noscript" !== r && "noembed" !== r || !y(/<\/no(script|embed)/i, e.innerHTML) ? (Te && 3 === e.nodeType && (n = e.textContent, n = h(n, ie, " "), n = h(n, ae, " "), e.textContent !== n && (f(t.removed, {
                        element: e.cloneNode()
                    }), e.textContent = n)), Ve("afterSanitizeElements", e, null), !1) : (Fe(e), !0)
                },
                Je = function(e, t, n) {
                    if (Me && ("id" === t || "name" === t) && (n in r || n in Be)) return !1;
                    if (be && y(le, t));
                    else if (ye && y(ce, t));
                    else {
                        if (!me[t] || ve[t]) return !1;
                        if (Ue[t]);
                        else if (y(de, h(n, ue, "")));
                        else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== g(n, "data:") || !De[e])
                            if (Ee && !y(se, h(n, ue, "")));
                            else if (n) return !1
                    }
                    return !0
                },
                Ye = function(e) {
                    var n = void 0,
                        r = void 0,
                        o = void 0,
                        i = void 0;
                    Ve("beforeSanitizeAttributes", e, null);
                    var a = e.attributes;
                    if (a) {
                        var l = {
                            attrName: "",
                            attrValue: "",
                            keepAttr: !0,
                            allowedAttributes: me
                        };
                        for (i = a.length; i--;) {
                            var c = n = a[i],
                                s = c.name,
                                u = c.namespaceURI;
                            if (r = v(n.value), o = p(s), l.attrName = o, l.attrValue = r, l.keepAttr = !0, l.forceKeepAttr = void 0, Ve("uponSanitizeAttribute", e, l), r = l.attrValue, !l.forceKeepAttr && (We(s, e), l.keepAttr))
                                if (y(/\/>/i, r)) We(s, e);
                                else {
                                    Te && (r = h(r, ie, " "), r = h(r, ae, " "));
                                    var f = e.nodeName.toLowerCase();
                                    if (Je(f, o, r)) try {
                                        u ? e.setAttributeNS(u, s, r) : e.setAttribute(s, r), d(t.removed)
                                    } catch (e) {}
                                }
                        }
                        Ve("afterSanitizeAttributes", e, null)
                    }
                },
                Ke = function e(t) {
                    var n = void 0,
                        r = $e(t);
                    for (Ve("beforeSanitizeShadowDOM", t, null); n = r.nextNode();) Ve("uponSanitizeShadowNode", n, null), Xe(n) || (n.content instanceof i && e(n.content), Ye(n));
                    Ve("afterSanitizeShadowDOM", t, null)
                };
            return t.sanitize = function(r, o) {
                var a = void 0,
                    c = void 0,
                    s = void 0,
                    u = void 0,
                    d = void 0;
                if (r || (r = "\x3c!--\x3e"), "string" != typeof r && !Ge(r)) {
                    if ("function" != typeof r.toString) throw b("toString is not a function");
                    if ("string" != typeof(r = r.toString())) throw b("dirty is not a string, aborting")
                }
                if (!t.isSupported) {
                    if ("object" === P(e.toStaticHTML) || "function" == typeof e.toStaticHTML) {
                        if ("string" == typeof r) return e.toStaticHTML(r);
                        if (Ge(r)) return e.toStaticHTML(r.outerHTML)
                    }
                    return r
                }
                if (Ae || Pe(o), t.removed = [], "string" == typeof r && (Ne = !1), Ne);
                else if (r instanceof l) 1 === (c = (a = ze("\x3c!----\x3e")).ownerDocument.importNode(r, !0)).nodeType && "BODY" === c.nodeName || "HTML" === c.nodeName ? a = c : a.appendChild(c);
                else {
                    if (!xe && !Te && !we && -1 === r.indexOf("<")) return J && ke ? J.createHTML(r) : r;
                    if (!(a = ze(r))) return xe ? null : Y
                }
                a && Oe && Fe(a.firstChild);
                for (var f = $e(Ne ? r : a); s = f.nextNode();) 3 === s.nodeType && s === u || Xe(s) || (s.content instanceof i && Ke(s.content), Ye(s), u = s);
                if (u = null, Ne) return r;
                if (xe) {
                    if (_e)
                        for (d = te.call(a.ownerDocument); a.firstChild;) d.appendChild(a.firstChild);
                    else d = a;
                    return Se && (d = ne.call(n, d, !0)), d
                }
                var p = we ? a.outerHTML : a.innerHTML;
                return Te && (p = h(p, ie, " "), p = h(p, ae, " ")), J && ke ? J.createHTML(p) : p
            }, t.setConfig = function(e) {
                Pe(e), Ae = !0
            }, t.clearConfig = function() {
                He = null, Ae = !1
            }, t.isValidAttribute = function(e, t, n) {
                He || Pe({});
                var r = p(e),
                    o = p(t);
                return Je(r, o, n)
            }, t.addHook = function(e, t) {
                "function" == typeof t && (oe[e] = oe[e] || [], f(oe[e], t))
            }, t.removeHook = function(e) {
                oe[e] && d(oe[e])
            }, t.removeHooks = function(e) {
                oe[e] && (oe[e] = [])
            }, t.removeAllHooks = function() {
                oe = {}
            }, t
        }
        return $()
    }()
}, function(e, t) {
    var n = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object"],
        r = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}";

    function o(e, t) {
        return "string" == typeof e && (t = e, e = document), Array.prototype.slice.call(e.querySelectorAll(t))
    }

    function i(e) {
        return "string" == typeof e ? e.split(",").map(l).filter(a) : function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }(e) ? function(e) {
            return [].concat.apply([], e)
        }(e.map(i).filter(a)) : e || []
    }

    function a(e) {
        return e.length > 0
    }

    function l(e) {
        return e.replace(/^\s+|\s+$/g, "")
    }
    e.exports = function(e, t) {
        var l;
        t = t || {}, l = e = e || "body", "[object Object]" === Object.prototype.toString.call(l) && (t = e, e = "body"), t.ignore = t.ignore || "", t.players = t.players || "";
        var c = o(e);
        if (a(c)) {
            var s;
            if (!document.getElementById("fit-vids-style"))(document.head || document.getElementsByTagName("head")[0]).appendChild(((s = document.createElement("div")).innerHTML = '<p>x</p><style id="fit-vids-style">' + r + "</style>", s.childNodes[1]));
            var u = i(t.players),
                d = i(t.ignore),
                f = d.length > 0 ? d.join() : null,
                p = n.concat(u).join();
            a(p) && c.forEach((function(e) {
                o(e, p).forEach((function(e) {
                    f && e.matches(f) || function(e) {
                        if (/fluid-width-video-wrapper/.test(e.parentNode.className)) return;
                        var t = parseInt(e.getAttribute("width"), 10),
                            n = parseInt(e.getAttribute("height"), 10),
                            r = isNaN(t) ? e.clientWidth : t,
                            o = (isNaN(n) ? e.clientHeight : n) / r;
                        e.removeAttribute("width"), e.removeAttribute("height");
                        var i = document.createElement("div");
                        e.parentNode.insertBefore(i, e), i.className = "fluid-width-video-wrapper", i.style.paddingTop = 100 * o + "%", i.appendChild(e)
                    }(e)
                }))
            }))
        }
    }
}, function(e, t, n) {
    var r = n(2),
        o = n(13),
        i = n(15),
        a = Math.max,
        l = Math.min;
    e.exports = function(e, t, n) {
        var c, s, u, d, f, p, m = 0,
            h = !1,
            g = !1,
            v = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function y(t) {
            var n = c,
                r = s;
            return c = s = void 0, m = t, d = e.apply(r, n)
        }

        function b(e) {
            return m = e, f = setTimeout(T, t), h ? y(e) : d
        }

        function E(e) {
            var n = e - p;
            return void 0 === p || n >= t || n < 0 || g && e - m >= u
        }

        function T() {
            var e = o();
            if (E(e)) return w(e);
            f = setTimeout(T, function(e) {
                var n = t - (e - p);
                return g ? l(n, u - (e - m)) : n
            }(e))
        }

        function w(e) {
            return f = void 0, v && c ? y(e) : (c = s = void 0, d)
        }

        function A() {
            var e = o(),
                n = E(e);
            if (c = arguments, s = this, p = e, n) {
                if (void 0 === f) return b(p);
                if (g) return clearTimeout(f), f = setTimeout(T, t), y(p)
            }
            return void 0 === f && (f = setTimeout(T, t)), d
        }
        return t = i(t) || 0, r(n) && (h = !!n.leading, u = (g = "maxWait" in n) ? a(i(n.maxWait) || 0, t) : u, v = "trailing" in n ? !!n.trailing : v), A.cancel = function() {
            void 0 !== f && clearTimeout(f), m = 0, c = p = s = f = void 0
        }, A.flush = function() {
            return void 0 === f ? d : w(o())
        }, A
    }
}, function(e, t, n) {
    var r = n(3);
    e.exports = function() {
        return r.Date.now()
    }
}, function(e, t, n) {
    (function(t) {
        var n = "object" == typeof t && t && t.Object === Object && t;
        e.exports = n
    }).call(this, n(4))
}, function(e, t, n) {
    var r = n(16),
        o = n(2),
        i = n(18),
        a = /^[-+]0x[0-9a-f]+$/i,
        l = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        s = parseInt;
    e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (i(e)) return NaN;
        if (o(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = o(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = r(e);
        var n = l.test(e);
        return n || c.test(e) ? s(e.slice(2), n ? 2 : 8) : a.test(e) ? NaN : +e
    }
}, function(e, t, n) {
    var r = n(17),
        o = /^\s+/;
    e.exports = function(e) {
        return e ? e.slice(0, r(e) + 1).replace(o, "") : e
    }
}, function(e, t) {
    var n = /\s/;
    e.exports = function(e) {
        for (var t = e.length; t-- && n.test(e.charAt(t)););
        return t
    }
}, function(e, t, n) {
    var r = n(5),
        o = n(21);
    e.exports = function(e) {
        return "symbol" == typeof e || o(e) && "[object Symbol]" == r(e)
    }
}, function(e, t, n) {
    var r = n(6),
        o = Object.prototype,
        i = o.hasOwnProperty,
        a = o.toString,
        l = r ? r.toStringTag : void 0;
    e.exports = function(e) {
        var t = i.call(e, l),
            n = e[l];
        try {
            e[l] = void 0;
            var r = !0
        } catch (e) {}
        var o = a.call(e);
        return r && (t ? e[l] = n : delete e[l]), o
    }
}, function(e, t) {
    var n = Object.prototype.toString;
    e.exports = function(e) {
        return n.call(e)
    }
}, function(e, t) {
    e.exports = function(e) {
        return null != e && "object" == typeof e
    }
}, function(e, t) {
    e.exports = function(e, t) {
        return t.get ? t.get.call(e) : t.value
    }, e.exports.__esModule = !0, e.exports.default = e.exports
}, function(e, t) {
    e.exports = function(e, t, n) {
        if (t.set) t.set.call(e, n);
        else {
            if (!t.writable) throw new TypeError("attempted to set read only private field");
            t.value = n
        }
    }, e.exports.__esModule = !0, e.exports.default = e.exports
}, function(e, t, n) {
    (function(t) {
        e.exports = t.Cookies = n(25)
    }).call(this, n(4))
}, function(e, t, n) {
    var r, o;
    ! function(i) {
        if (void 0 === (o = "function" == typeof(r = i) ? r.call(t, n, t, e) : r) || (e.exports = o), !0, e.exports = i(), !!0) {
            var a = window.Cookies,
                l = window.Cookies = i();
            l.noConflict = function() {
                return window.Cookies = a, l
            }
        }
    }((function() {
        function e() {
            for (var e = 0, t = {}; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) t[r] = n[r]
            }
            return t
        }

        function t(e) {
            return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
        }
        return function n(r) {
            function o() {}

            function i(t, n, i) {
                if ("undefined" != typeof document) {
                    "number" == typeof(i = e({
                        path: "/"
                    }, o.defaults, i)).expires && (i.expires = new Date(1 * new Date + 864e5 * i.expires)), i.expires = i.expires ? i.expires.toUTCString() : "";
                    try {
                        var a = JSON.stringify(n);
                        /^[\{\[]/.test(a) && (n = a)
                    } catch (e) {}
                    n = r.write ? r.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                    var l = "";
                    for (var c in i) i[c] && (l += "; " + c, !0 !== i[c] && (l += "=" + i[c].split(";")[0]));
                    return document.cookie = t + "=" + n + l
                }
            }

            function a(e, n) {
                if ("undefined" != typeof document) {
                    for (var o = {}, i = document.cookie ? document.cookie.split("; ") : [], a = 0; a < i.length; a++) {
                        var l = i[a].split("="),
                            c = l.slice(1).join("=");
                        n || '"' !== c.charAt(0) || (c = c.slice(1, -1));
                        try {
                            var s = t(l[0]);
                            if (c = (r.read || r)(c, s) || t(c), n) try {
                                c = JSON.parse(c)
                            } catch (e) {}
                            if (o[s] = c, e === s) break
                        } catch (e) {}
                    }
                    return e ? o[e] : o
                }
            }
            return o.set = i, o.get = function(e) {
                return a(e, !1)
            }, o.getJSON = function(e) {
                return a(e, !0)
            }, o.remove = function(t, n) {
                i(t, "", e(n, {
                    expires: -1
                }))
            }, o.defaults = {}, o.withConverter = n, o
        }((function() {}))
    }))
}, , , , function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(8),
        o = n.n(r),
        i = n(9),
        a = n.n(i);
    const l = new Set,
        c = ["mouseenter", "mouseleave", "mousemove", "submit", "click", "keyup", "keydown", "focus", "blur", "change", "input", "request", "notification", "sort", "load", "pageshow", "pagehide", "touchstart", "touchmove", "touchend", "pointerdown", "pointerover", "pointerout"],
        s = ["DOMContentLoaded", "mousemove", "keydown", "pointerdown"],
        u = e => {
            l.forEach((t => {
                a()(t) && t(e)
            }))
        },
        d = e => {
            s.indexOf(e.type) >= 0 && u({
                originalEvent: e,
                name: `${e.type}:DOCUMENT`,
                target: e.target
            });
            for (let t = e.target; t; t = t.parentNode)
                if (t.dataset && t.dataset.name) {
                    let n = null;
                    try {
                        n = t.dataset.detail ? JSON.parse(t.dataset.detail) : null
                    } catch (e) {
                        console.error(`Malformed JSON in element ${t.nodeName} with data-name ${t.dataset.name}`)
                    }
                    u({
                        originalEvent: e,
                        name: `${e.type}:${t.dataset.name}`,
                        target: t,
                        detail: n
                    })
                }
        };
    let f = !1,
        p = null;
    const m = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        null === e && (e = document.querySelector(".js-submenu-items.is-open")), null === e || e.classList.remove("is-open")
    };
    var h = n(10),
        g = n.n(h);
    const v = [{}],
        y = function(e) {
            !e || (v.push(E(T(), e)), v.length >= 6 && v.shift())
        },
        b = (e, t) => {
            Object.keys(t).map((n => ":DELETE" == t[n] ? delete e[n] : ":EMPTY_OBJECT" == t[n] ? e[n] = {} : ":EMPTY_ARRAY" == t[n] ? e[n] = [] : void 0 === e[n] ? e[n] = t[n] : "[object Object]" === Object.prototype.toString.call(t[n]) ? b(e[n], t[n]) : e[n] = t[n]))
        },
        E = (e, t) => {
            const n = { ...e
            };
            return b(n, t), n
        },
        T = () => JSON.parse(JSON.stringify(v[v.length - 1])),
        w = function(e, t, n) {
            let r = !!(arguments.length > 3 && void 0 !== arguments[3]) && arguments[3];
            document.querySelectorAll(`[data-template="${e}"]`).forEach((e => {
                const o = document.createElement("div"),
                    i = r ? t : g.a.sanitize(t);
                o.innerHTML = i, e.innerHTML.replace(/^\s+|\s+$/g, "") !== o.innerHTML.replace(/^\s+|\s+$/g, "") && (e.innerHTML = i), n && n(e)
            }))
        };
    let A;
    var O = () => {
            const e = 480,
                t = 640,
                n = 768,
                r = 1024,
                o = 1200,
                i = {
                    xsmallOnly: t => t <= e,
                    smallUp: t => t >= e + 1,
                    smallOnly: n => n > e && n <= t,
                    smallDown: e => e < t,
                    mediumUp: e => e > t,
                    mediumOnly: e => e > t && e <= n,
                    mediumDown: e => e < n,
                    largeUp: e => e > n,
                    largeOnly: e => e > n && e <= r,
                    largeDown: e => e < r,
                    xlargeUp: e => e > r,
                    xlargeOnly: e => e > r && e <= o,
                    xxlargeUp: e => e > o,
                    xxlargeOnly: e => e > o
                };
            if ("undefined" != typeof window) {
                const e = [];
                Object.keys(i).forEach((t => {
                    i[t](window.innerWidth) && e.push(t)
                }));
                const t = e.filter((e => e.match(/Only/)))[0].replace("Only", ""),
                    n = {
                        previous: A || null,
                        hasChanged: A !== t,
                        matching: e,
                        current: t
                    };
                return A = `${t}`, n
            }
            return !1
        },
        x = e => {
            var t = e.getBoundingClientRect(),
                n = document.body,
                r = document.documentElement,
                o = window.pageYOffset || r.scrollTop || n.scrollTop,
                i = window.pageXOffset || r.scrollLeft || n.scrollLeft,
                a = r.clientTop || n.clientTop || 0,
                l = r.clientLeft || n.clientLeft || 0,
                c = t.top + o - a,
                s = t.left + i - l;
            return {
                top: Math.round(c),
                left: Math.round(s),
                width: e.offsetWidth,
                height: e.offsetHeight,
                viewportTop: t.top
            }
        };
    const _ = (e, t) => {
            if (!t) return;
            const n = t => {
                const n = e.split(" ");
                t.classList.add(...n)
            };
            t.length ? [].slice.call(t).forEach((e => {
                n(e)
            })) : n(t)
        },
        S = (e, t) => {
            if (!t) return;
            const n = t => {
                const n = e.split(" ");
                t.classList.remove(...n)
            };
            t.length ? [].slice.call(t).forEach((e => {
                n(e)
            })) : n(t)
        },
        k = e => ({
            then: document.querySelectorAll(e).length ? t => {
                const n = document.querySelectorAll(e);
                return 1 === n.length ? t(n[0]) : void t(n)
            } : () => {}
        });
    var M = e => {
        if (e.relatedAside.active) {
            let t = document.getElementById("cmpt-aside-fixed");
            !t && (t = e.el.cloneNode(!0), t.id = "cmpt-aside-fixed", _("fixed", t), _("invisible", e.el), S("width-100 large-up-width-5-16", t), e.el.after(t)), t.setAttribute("style", `\n      top: ${e.relatedAside.top}px;\n      left: ${e.relatedAside.left}px;\n      width: ${e.el.clientWidth}px;\n    `)
        } else if (document.getElementById("cmpt-aside-fixed")) {
            S("invisible", e.el);
            const t = document.getElementById("cmpt-aside-fixed");
            t && t.parentNode.removeChild(t)
        }
    };
    y({
        relatedAside: {
            active: !1
        }
    });
    var L = n(0),
        N = n.n(L),
        C = n(1),
        R = n.n(C);
    const D = ["local", "session"];

    function j(e, t, n) {
        (function(e, t) {
            if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        })(e, t), t.set(e, n)
    }
    var U = new WeakMap,
        I = new WeakMap;
    class H {
        constructor() {
            j(this, U, {
                writable: !0,
                value: !1
            }), j(this, I, {
                writable: !0,
                value: !1
            }), R()(this, U, function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "local";
                if (!D.includes(e)) throw new UnsupportedWebStorageTypeError;
                try {
                    const t = window[`${e}Storage`];
                    return t.setItem("__storage_test__", "__storage_test__"), t.removeItem("__storage_test__"), !0
                } catch (e) {
                    return e instanceof DOMException && (22 === e.code || 1014 === e.code || "QuotaExceededError" === e.name || "NS_ERROR_DOM_QUOTA_REACHED" === e.name) && store && 0 !== store.length
                }
            }())
        }
        setSilentlyFail(e) {
            R()(this, I, e)
        }
        setItem(e, t) {
            if (N()(this, U)) window.localStorage.setItem(e, t);
            else if (!N()(this, I)) throw new Error("Local storage unavailable")
        }
        getItem(e) {
            if (N()(this, U)) return window.localStorage.getItem(e);
            if (N()(this, I)) return null;
            throw new Error("Local storage unavailable")
        }
        removeItem(e) {
            if (N()(this, U)) window.localStorage.removeItem(e);
            else if (!N()(this, I)) throw new Error("Local storage unavailable")
        }
    }

    function B(e, t) {
        F(e, t), t.add(e)
    }

    function P(e, t, n) {
        F(e, t), t.set(e, n)
    }

    function F(e, t) {
        if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
    }

    function W(e, t, n) {
        if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
        return n
    }
    var z = new WeakMap,
        $ = new WeakMap,
        q = new WeakMap,
        G = new WeakSet,
        V = new WeakSet;
    class X {
        constructor(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            B(this, V), B(this, G), P(this, z, {
                writable: !0,
                value: void 0
            }), P(this, $, {
                writable: !0,
                value: void 0
            }), P(this, q, {
                writable: !0,
                value: void 0
            }), R()(this, z, e), R()(this, $, t), R()(this, q, n)
        }
        add(e) {
            const t = W(this, G, J).call(this);
            let n = [e].concat(t);
            null !== N()(this, q) && n.length > N()(this, q) && (n = n.slice(0, N()(this, q))), W(this, V, Y).call(this, n)
        }
        has(e) {
            return W(this, G, J).call(this).includes(e)
        }
        remove(e) {
            const t = W(this, G, J).call(this).filter((t => t !== e));
            W(this, V, Y).call(this, t)
        }
        replace(e, t) {
            const n = W(this, G, J).call(this).map((n => n === e ? t : n));
            W(this, V, Y).call(this, n)
        }
        at(e) {
            const t = W(this, G, J).call(this).at(e);
            return t || null
        }
        countAll() {
            return W(this, G, J).call(this).length
        }
        getAll() {
            return W(this, G, J).call(this)
        }
        clearAll() {
            N()(this, z).removeItem(N()(this, $))
        }
    }

    function J() {
        const e = N()(this, z).getItem(N()(this, $));
        return null === e ? [] : JSON.parse(e)
    }

    function Y(e) {
        N()(this, z).setItem(N()(this, $), JSON.stringify(e))
    }
    const K = e => e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    function Q(e, ...t) {
        if ("string" == typeof e) return K(e);
        let n = e[0];
        for (const [r, o] of t.entries()) n = n + K(String(o)) + e[r + 1];
        return n
    }
    const Z = document.querySelector('[data-name="AUTOCOMPLETE_SEARCHBOX"]'),
        ee = document.querySelector('[data-name="MOBILE_AUTOCOMPLETE_SEARCHBOX"]'),
        te = document.querySelector(".js-autocomplete-results"),
        ne = te.dataset.src,
        re = getComputedStyle(document.documentElement).getPropertyValue("--inline-search-bp");
    let oe = "",
        ie = !1,
        ae = [];
    const le = () => {
            window.scrollTo(0, 0), document.documentElement.classList.add("search-open"), !window.matchMedia(`(min-width: ${re})`).matches && ee.focus(), ie = !0
        },
        ce = function() {
            let e = !!(arguments.length > 0 && void 0 !== arguments[0]) && arguments[0];
            document.documentElement.classList.remove("search-open"), ie = !1, e && document.activeElement && document.activeElement.blur()
        },
        se = () => {
            ae = document.querySelectorAll(".js-autocomplete-result")
        },
        ue = e => {
            te.innerHTML = e, te.hidden = "" === e, se()
        };
    let de = null,
        fe = null;
    const pe = async e => {
            fe = new AbortController;
            const t = fe.signal,
                n = await fetch(`${ne}${e}`, {
                    mode: "cors",
                    signal: t
                }),
                r = await n.json();
            ue(r.html)
        },
        me = () => {
            null !== fe && (fe.abort(), fe = null), null !== de && clearTimeout(de)
        };
    let he = null;
    const ge = () => {
        const e = new H;
        return e.setSilentlyFail(!0), new X(e, "recent_search_tokens", 3)
    };
    var ve = n(11),
        ye = n.n(ve);
    n(24);
    (function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        e.forEach((e => l.add(e))), document.addEventListener("DOMContentLoaded", (e => {
            d(e), c.forEach((e => {
                document.addEventListener(e, (e => {
                    d(e)
                }), !0)
            }))
        })), ["load", "resize", "scroll"].forEach((e => {
            window.addEventListener(e, o()((e => {
                u({
                    originalEvent: e,
                    name: `${e.type}:WINDOW`,
                    target: e.target
                })
            }), 1), {
                passive: !0
            })
        })), document.dispatchEvent(new window.Event("scroll")), window.dispatchEvent(new window.Event("resize"))
    })([e => {
        switch (e.name) {
            case "click:OPEN_NAV":
                document.documentElement.classList.add("nav-open");
                break;
            case "click:CLOSE_NAV":
                document.documentElement.classList.remove("nav-open");
                break;
            case "pointerover:NAV_SUBMENU_TRIGGER":
                {
                    const t = e.target.getAttribute("aria-controls"),
                        n = document.getElementById(t);
                    if (e.originalEvent.preventDefault(), n.classList.contains("is-open")) return;null !== p && clearTimeout(p),
                    f = !0,
                    p = setTimeout((() => {
                        f = !1
                    }), 150),
                    (e => {
                        document.getElementById(e).classList.add("is-open")
                    })(t);
                    break
                }
            case "pointerout:NAV_SUBMENU":
                if (e.target.getAttribute("aria-controls"), f && "mouse" !== e.originalEvent.pointerType) return;
                if ("mouse" !== e.originalEvent.pointerType && "NAV_SUBMENU_TRIGGER" !== e.originalEvent.target.dataset.name) return;
                (null === e.originalEvent.relatedTarget || e.target !== e.originalEvent.relatedTarget.closest('[data-name="NAV_SUBMENU"]')) && m(e.target.querySelector(".js-submenu-items"));
                break;
            case "pointerdown:DOCUMENT":
                {
                    if ("mouse" === e.originalEvent.pointerType) return;
                    if (null === e.originalEvent.target) return void m();
                    const t = e.originalEvent.target.closest('[data-name="NAV_SUBMENU"]');
                    if (null === t) return void m();
                    const n = document.querySelectorAll(".js-submenu-items.is-open");Array.from(n).forEach((e => {
                        e.closest('[data-name="NAV_SUBMENU"]') !== t && m(e)
                    }));
                    break
                }
        }
    }, e => {
        switch (e.name) {
            case "scroll:WINDOW":
            case "resize:WINDOW":
                k("#cmpt-aside").then((e => {
                    const t = x(e),
                        n = O().matching.includes("xlargeUp") ? 115 : 83,
                        r = document.getElementById("cmpt-aside-fixed"),
                        o = x(document.getElementById("commentSection")).viewportTop - (r ? r.clientHeight + n : n);
                    t.viewportTop > n && T().relatedAside.active && (y({
                        relatedAside: {
                            active: !1
                        }
                    }), M({
                        el: e,
                        ...T()
                    })), t.viewportTop <= n && O().matching.includes("largeUp") && (y({
                        relatedAside: {
                            top: o <= 0 ? n + o : n,
                            left: t.left,
                            width: e.clientWidth,
                            active: !0
                        }
                    }), M({
                        el: e,
                        ...T()
                    }))
                }));
                break;
            case "click:NEWS_BANNER":
                e.detail.cookie && window.Cookies.set("news_banner", 1, {
                    expires: 365
                });
                break;
            case "click:REMOVE_PARENT":
                k(`[data-name=${e.detail.target}]`).then((e => {
                    e.remove()
                }));
                break;
            case "click:COPY":
                if (navigator.clipboard) try {
                    navigator.clipboard.writeText(e.detail.url), w("social-copy-link", '\n              <span class="inline-block color-blue fadeout-top">Copied</span>\n            '), setTimeout((() => {
                        w("social-copy-link", null)
                    }), 400)
                } catch (e) {}
                break;
            case "click:SCROLL_TO":
                if (e.originalEvent.preventDefault(), e.detail.node) try {
                    window.scroll({
                        top: document.querySelector(e.detail.node).offsetTop + parseInt(e.detail.offset || 0, 10),
                        left: 0,
                        behavior: "smooth"
                    })
                } catch (e) {}
        }
    }, e => {
        switch (e.name) {
            case "load:WINDOW":
                {
                    const e = (null === he && (he = ge()), he.getAll());e.length >= 3 && render("suggested_search_tokens", (e => `\n        <h2 class="search-results__group-heading">Recent</h2>\n        <ol class="list-no-style">\n            ${e.tokens.map((e=>`\n                    <li>\n\n                        <button\n                            class="search-results__result js-autocomplete-result"\n                            data-track-ga="${Q(JSON.stringify({category:"autocomplete empty state",action:"recent_search_token",label:`Entry: “${e}”`}))}"\n                            type="button"\n                            data-name="SUGGESTED_SEARCH_TERM"\n                            data-detail="${Q(JSON.stringify({term:e}))}"\n                        >\n                            <i class="search-results__result-icon icon-search-charcoal icon-small"></i>\n                            <div class="search-results__result-info">\n                                <span class="search-results__result-name">${e}</span>\n                            </div>\n                        </button>\n                    </li>\n                `)).join("")}\n        </ol>\n    `)({
                        tokens: e
                    })),
                    se();
                    break
                }
            case "keydown:DOCUMENT":
                if (!ie) return;
                switch (e.originalEvent.key) {
                    case "Escape":
                        ce(!0);
                        break;
                    case "ArrowUp":
                        (() => {
                            if (0 === ae.length) return;
                            const e = [...ae].findIndex((e => e.matches(":focus")));
                            let t = ae.length - 1; - 1 !== e && (t = 0 === e ? ae.length - 1 : e - 1), ae[t].focus()
                        })(), e.originalEvent.preventDefault();
                        break;
                    case "ArrowDown":
                        (() => {
                            if (0 === ae.length) return;
                            const e = [...ae].findIndex((e => e.matches(":focus")));
                            let t = 0; - 1 !== e && (t = e === ae.length - 1 ? 0 : e + 1), ae[t].focus()
                        })(), e.originalEvent.preventDefault()
                }
                break;
            case "click:OPEN_SEARCH":
            case "click:AUTOCOMPLETE_SEARCHBOX":
                if (ie) return;
                le();
                break;
            case "click:AUTOCOMPLETE_BLANKET":
            case "click:MOBILE_AUTOCOMPLETE_EXIT":
            case "click:AUTOCOMPLETE_BLANKET":
            case "click:MOBILE_AUTOCOMPLETE_EXIT":
                ce();
                break;
            case "click:SUGGESTED_SEARCH_TERM":
                {
                    const t = e.detail.term;
                    if ((e => {
                            const t = e.length > 0 ? "remove" : "add";
                            [Z, ee].forEach((n => {
                                n.value = e, n.classList[t]("is-blank")
                            }))
                        })(t), t === oe) return;
                    if (me(), oe = t, "" === oe) return void ue("");de = setTimeout((function() {
                        pe(t), (e => {
                            if (null === he && (he = ge()), !he.has(e)) {
                                const t = he.at(0);
                                null !== t && e.startsWith(t) ? he.replace(t, e) : he.add(e)
                            }
                        })(t)
                    }), 500);
                    break
                }
            case "keyup:AUTOCOMPLETE_SEARCHBOX":
            case "keyup:MOBILE_AUTOCOMPLETE_SEARCHBOX":
                {
                    const t = e.originalEvent.target;
                    if ((e => {
                            const t = e.value,
                                n = t.length > 0 ? "remove" : "add";
                            [Z, ee].forEach((r => {
                                r !== e && (r.value = t), r.classList[n]("is-blank")
                            }))
                        })(t), t.value === oe) return;
                    if (me(), oe = t.value, "" === oe) return void ue("");de = setTimeout((function() {
                        pe(t.value)
                    }), 500);
                    break
                }
            case "focus:AUTOCOMPLETE_SEARCHBOX":
            case "focus:MOBILE_AUTOCOMPLETE_SEARCHBOX":
                {
                    const t = e.originalEvent.target;t.parentElement.querySelector(`[data-name="AUTOCOMPLETE_CLEAR"][aria-controls="${t.id}"]`).hidden = !1;
                    break
                }
            case "blur:AUTOCOMPLETE_SEARCHBOX":
            case "blur:MOBILE_AUTOCOMPLETE_SEARCHBOX":
                {
                    const t = e.originalEvent.target,
                        n = t.parentElement.querySelector(`[data-name="AUTOCOMPLETE_CLEAR"][aria-controls="${t.id}"]`);setTimeout((() => {
                        !t.matches(":focus") && (n.hidden = !0)
                    }), 200);
                    break
                }
            case "click:AUTOCOMPLETE_CLEAR":
                {
                    const t = e.originalEvent.target.getAttribute("aria-controls");
                    (e => {
                        [Z, ee].forEach((t => {
                            t.value = "", t.classList.add("is-blank"), t === e && t.focus()
                        })), oe = ""
                    })(document.getElementById(t)),
                    me(),
                    ue("");
                    break
                }
        }
    }]), ye()({
        players: 'iframe[src*="gfycat.com"]'
    })
}]);