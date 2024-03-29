(self.webpackChunk = self.webpackChunk || []).push([
    [8883], {
        960: function(o, t, e) {
            "use strict";
            e.r(t);
            var l = e(411),
                r = e.n(l),
                s = e(6726),
                i = e.n(s),
                c = e(9783),
                n = e.n(c);
            t.default = o => {
                switch (o.name) {
                    case "load:COURSETABS_MODULE":
                        {
                            r().polyfill();
                            let o = 0;
                            const t = [...document.querySelectorAll(".js-course-tab")];
                            if (t.length < 2) return;
                            const e = Array.from(t.map((o => {
                                    const t = o.querySelector('[data-name="COURSE_TAB"]'),
                                        e = JSON.parse(t.dataset.detail).targetId;
                                    return document.getElementById(e)
                                }))),
                                l = e => {
                                    e === o || (t.forEach(((o, t) => t === e ? void o.classList.add("is-selected") : void o.classList.remove("is-selected"))), o = e)
                                },
                                s = () => {
                                    if (!window.matchMedia("(min-width: 641px)").matches) {
                                        const o = window.innerHeight,
                                            t = window.scrollY + 80;
                                        for (const r of e) {
                                            const s = e.indexOf(r),
                                                i = s === e.length - 1,
                                                c = r.offsetTop;
                                            let n = c + r.offsetHeight;
                                            if (!i && (n = e[s + 1].offsetTop - 1), 0 === s && t < o) return void l(s);
                                            if (i && t > n) return void l(s);
                                            t >= c && t <= n && l(s)
                                        }
                                    }
                                },
                                c = n()(s, 100),
                                f = i()(s, 250);document.addEventListener("scroll", c),
                            window.addEventListener("resize", f),
                            s();
                            break
                        }
                    case "click:COURSE_TAB":
                        {
                            const t = o.detail.targetId,
                                e = document.getElementById(t);window.scrollTo({
                                top: e.offsetTop - 52,
                                behavior: "smooth"
                            });
                            break
                        }
                }
            }
        },
        6190: function(o, t, e) {
            "use strict";
            e.r(t);
            var l = e(411),
                r = e.n(l);
            t.default = o => {
                switch (o.name) {
                    case "load:SUBJECTSGRID_MODULE":
                        {
                            r().polyfill();
                            const o = document.querySelector(".filter-tabs #selected-subject");null !== o && ! function(o) {
                                const t = o.parentElement,
                                    e = t.scrollLeft + t.offsetWidth;
                                return o.offsetLeft + o.offsetWidth <= e
                            }(o) && o.scrollIntoView({
                                behavior: "smooth",
                                block: "nearest",
                                inline: "end"
                            });
                            break
                        }
                }
            }
        },
        411: function(o) {
            ! function() {
                "use strict";
                o.exports = {
                    polyfill: function() {
                        var o = window,
                            t = document;
                        if (!("scrollBehavior" in t.documentElement.style) || !0 === o.__forceSmoothScrollPolyfill__) {
                            var e, l = o.HTMLElement || o.Element,
                                r = {
                                    scroll: o.scroll || o.scrollTo,
                                    scrollBy: o.scrollBy,
                                    elementScroll: l.prototype.scroll || c,
                                    scrollIntoView: l.prototype.scrollIntoView
                                },
                                s = o.performance && o.performance.now ? o.performance.now.bind(o.performance) : Date.now,
                                i = (e = o.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(e) ? 1 : 0);
                            o.scroll = o.scrollTo = function() {
                                void 0 !== arguments[0] && (!0 !== n(arguments[0]) ? u.call(o, t.body, void 0 !== arguments[0].left ? ~~arguments[0].left : o.scrollX || o.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : o.scrollY || o.pageYOffset) : r.scroll.call(o, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : o.scrollX || o.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : o.scrollY || o.pageYOffset))
                            }, o.scrollBy = function() {
                                void 0 !== arguments[0] && (n(arguments[0]) ? r.scrollBy.call(o, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : u.call(o, t.body, ~~arguments[0].left + (o.scrollX || o.pageXOffset), ~~arguments[0].top + (o.scrollY || o.pageYOffset)))
                            }, l.prototype.scroll = l.prototype.scrollTo = function() {
                                if (void 0 !== arguments[0])
                                    if (!0 !== n(arguments[0])) {
                                        var o = arguments[0].left,
                                            t = arguments[0].top;
                                        u.call(this, this, void 0 === o ? this.scrollLeft : ~~o, void 0 === t ? this.scrollTop : ~~t)
                                    } else {
                                        if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                                        r.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                    }
                            }, l.prototype.scrollBy = function() {
                                void 0 !== arguments[0] && (!0 !== n(arguments[0]) ? this.scroll({
                                    left: ~~arguments[0].left + this.scrollLeft,
                                    top: ~~arguments[0].top + this.scrollTop,
                                    behavior: arguments[0].behavior
                                }) : r.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                            }, l.prototype.scrollIntoView = function() {
                                if (!0 !== n(arguments[0])) {
                                    var e = p(this),
                                        l = e.getBoundingClientRect(),
                                        s = this.getBoundingClientRect();
                                    e !== t.body ? (u.call(this, e, e.scrollLeft + s.left - l.left, e.scrollTop + s.top - l.top), "fixed" !== o.getComputedStyle(e).position && o.scrollBy({
                                        left: l.left,
                                        top: l.top,
                                        behavior: "smooth"
                                    })) : o.scrollBy({
                                        left: s.left,
                                        top: s.top,
                                        behavior: "smooth"
                                    })
                                } else r.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                            }
                        }

                        function c(o, t) {
                            this.scrollLeft = o, this.scrollTop = t
                        }

                        function n(o) {
                            if (null === o || "object" != typeof o || void 0 === o.behavior || "auto" === o.behavior || "instant" === o.behavior) return !0;
                            if ("object" == typeof o && "smooth" === o.behavior) return !1;
                            throw new TypeError("behavior member of ScrollOptions " + o.behavior + " is not a valid value for enumeration ScrollBehavior.")
                        }

                        function f(o, t) {
                            return "Y" === t ? o.clientHeight + i < o.scrollHeight : "X" === t ? o.clientWidth + i < o.scrollWidth : void 0
                        }

                        function a(t, e) {
                            var l = o.getComputedStyle(t, null)["overflow" + e];
                            return "auto" === l || "scroll" === l
                        }

                        function d(o) {
                            var t = f(o, "Y") && a(o, "Y"),
                                e = f(o, "X") && a(o, "X");
                            return t || e
                        }

                        function p(o) {
                            for (; o !== t.body && !1 === d(o);) o = o.parentNode || o.host;
                            return o
                        }

                        function h(t) {
                            var e, l, r, i, c = (s() - t.startTime) / 468;
                            i = c = c > 1 ? 1 : c, e = .5 * (1 - Math.cos(Math.PI * i)), l = t.startX + (t.x - t.startX) * e, r = t.startY + (t.y - t.startY) * e, t.method.call(t.scrollable, l, r), l === t.x && r === t.y || o.requestAnimationFrame(h.bind(o, t))
                        }

                        function u(e, l, i) {
                            var n, f, a, d, p = s();
                            e === t.body ? (n = o, f = o.scrollX || o.pageXOffset, a = o.scrollY || o.pageYOffset, d = r.scroll) : (n = e, f = e.scrollLeft, a = e.scrollTop, d = c), h({
                                scrollable: n,
                                method: d,
                                startTime: p,
                                startX: f,
                                startY: a,
                                x: l,
                                y: i
                            })
                        }
                    }
                }
            }()
        }
    }
]);