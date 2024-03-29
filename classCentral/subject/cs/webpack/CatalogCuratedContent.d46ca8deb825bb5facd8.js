"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
    [1701], {
        2324: function(e, t, o) {
            o.r(t);
            let c, l = null;

            function s(e) {
                document.documentElement.classList.remove("curated-content-open"), null !== l && document.documentElement.scrollTo({
                    top: l
                }), e.classList.remove("is-open");
                const t = e.querySelector(".catalog-curated__course-list");
                t.scrollTo({
                    left: t.scrollWidth
                }), c.abort(), c = null
            }
            t.default = e => {
                switch (e.name) {
                    case "click:CURATED_CONTENT_SHOW_ALL":
                        {
                            const t = e.target.closest(".js-curated-content-row");l = document.documentElement.scrollTop,
                            document.documentElement.classList.add("curated-content-open"),
                            t.classList.add("is-open"),
                            t.scrollTo({
                                top: 0
                            }),
                            c = new AbortController;
                            const o = c.signal;window.addEventListener("resize", (() => {
                                window.matchMedia("(min-width: ".concat("769px", ")")).matches && s(t)
                            }), {
                                signal: o
                            });
                            break
                        }
                    case "click:CURATED_CONTENT_BACK":
                        s(e.target.closest(".js-curated-content-row"));
                        break;
                    case "click:CURATED_CONTENT_SCROLL_LEFT":
                        {
                            const t = e.target.closest(".js-curated-content-row").querySelector(".catalog-curated__course-list"),
                                o = t.scrollLeft,
                                c = [...t.querySelectorAll(".catalog-curated__course")];
                            let l = null;
                            for (const e of c) {
                                const t = e.offsetLeft;
                                e.offsetWidth, t < o && (l = e)
                            }
                            if (null !== l) {
                                const e = l.offsetLeft + l.offsetWidth - t.offsetWidth;
                                t.scrollTo({
                                    left: e,
                                    behavior: "smooth"
                                })
                            }
                            break
                        }
                    case "click:CURATED_CONTENT_SCROLL_RIGHT":
                        {
                            const t = e.target.closest(".js-curated-content-row").querySelector(".catalog-curated__course-list"),
                                o = t.scrollLeft + t.offsetWidth,
                                c = [...t.querySelectorAll(".catalog-curated__course")].reverse();
                            let l = null;
                            for (const e of c) {
                                e.offsetLeft + e.offsetWidth > o && (l = e)
                            }
                            null !== l && t.scrollTo({
                                left: l.offsetLeft,
                                behavior: "smooth"
                            });
                            break
                        }
                    case "scroll:CURATED_CONTENT_COURSES_LIST":
                        {
                            const t = e.target.parentElement.querySelector('[data-name="CURATED_CONTENT_SCROLL_LEFT"]'),
                                o = e.target.parentElement.querySelector('[data-name="CURATED_CONTENT_SCROLL_RIGHT"]');t.disabled = 0 === e.target.scrollLeft,
                            o.disabled = e.target.scrollLeft === e.target.scrollWidth - e.target.offsetWidth;
                            break
                        }
                }
            }
        }
    }
]);