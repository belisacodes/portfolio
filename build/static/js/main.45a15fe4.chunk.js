(this.webpackJsonpbelisacodes = this.webpackJsonpbelisacodes || []).push([
  [0],
  {
    56: function (e, s, t) {},
    57: function (e, s, t) {
      "use strict";
      t.r(s);
      var c = t(20),
        a = t.n(c),
        n = t(1),
        i = t(13),
        l = t(10),
        r = t(8),
        o = t(0),
        d = function () {
          return Object(o.jsx)(o.Fragment, {
            children: Object(o.jsxs)("div", {
              className: "row align-items-center",
              children: [
                Object(o.jsx)("div", {
                  className: "col-xl-5 col-lg-6 order-lg-last",
                  "data-aos": "fade-left",
                  "data-aos-duration": "1200",
                  children: Object(o.jsxs)("div", {
                    className: "text-wrapper md-pt-50",
                    children: [
                      Object(o.jsx)("div", {
                        className: "title-work-together",
                        children: Object(o.jsxs)("h2", {
                          children: [
                            "What can we ",
                            Object(o.jsx)("span", { children: "do together?" }),
                          ],
                        }),
                      }),
                      Object(o.jsxs)("p", {
                        children: [
                          "Do you have an idea that you don't know how to implement? Let's do it!",
                          " ",
                        ],
                      }),
                      Object(o.jsxs)(r.b, {
                        to: "https://calendly.com/belisacodes/30min",
                        className: "btn-portfolio-contact",
                        children: ["Contact me!", " "],
                      }),
                    ],
                  }),
                }),
                Object(o.jsx)("div", {
                  className: "col-xl-7 col-lg-6 col-md-8 m-auto order-lg-first",
                  "data-aos": "fade-right",
                  "data-aos-duration": "1200",
                  children: Object(o.jsx)("div", {
                    className: "illustration-holder",
                    children: Object(o.jsx)("img", {
                      src: "images/assets/ils_21.png",
                      alt: "about",
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        j = t(16),
        m = t.n(j),
        b = function () {
          var e = Object(n.useState)(!1),
            s = Object(l.a)(e, 2),
            t = (s[0], s[1], Object(n.useState)(!1)),
            c = Object(l.a)(t, 2),
            a = c[0],
            i = c[1],
            d = function () {
              return i(!a);
            },
            j = Object(n.useState)(!1),
            b = Object(l.a)(j, 2),
            h = b[0],
            x = b[1];
          return (
            window.addEventListener("scroll", function () {
              window.scrollY >= 90 ? x(!0) : x(!1);
            }),
            Object(o.jsxs)(o.Fragment, {
              children: [
                Object(o.jsx)("div", {
                  className: h
                    ? "theme-main-menu sticky-menu theme-menu-portfolio fixed"
                    : "theme-main-menu sticky-menu theme-menu-portfolio",
                  children: Object(o.jsx)("div", {
                    className:
                      "d-flex align-items-center justify-content-center",
                    children: Object(o.jsx)("nav", {
                      id: "mega-menu-holder",
                      className: "navbar navbar-expand-lg",
                      children: Object(o.jsxs)("div", {
                        className: "container nav-container",
                        children: [
                          Object(o.jsx)("div", {
                            className: "mob-header",
                            children: Object(o.jsx)("button", {
                              className: "toggler-menu",
                              onClick: d,
                              children: Object(o.jsxs)("div", {
                                className: a ? "active" : "",
                                children: [
                                  Object(o.jsx)("span", {}),
                                  Object(o.jsx)("span", {}),
                                  Object(o.jsx)("span", {}),
                                ],
                              }),
                            }),
                          }),
                          Object(o.jsx)("div", {
                            className:
                              "navbar-collapse collapse landing-menu-onepage",
                            id: "navbarSupportedContent",
                            children: Object(o.jsx)("div", {
                              className:
                                "d-lg-flex justify-content-between align-items-center",
                              children: Object(o.jsxs)(m.a, {
                                className:
                                  "navbar-nav  main-side-nav font-gordita",
                                items: [
                                  "portfolio",
                                  "skills",
                                  "about",
                                  "follow",
                                  "work",
                                ],
                                currentClassName: "active",
                                offset: -90,
                                children: [
                                  Object(o.jsx)("li", {
                                    className: "nav-item",
                                    children: Object(o.jsx)("a", {
                                      href: "#portfolio",
                                      className: "nav-link",
                                      children: "Portfolio",
                                    }),
                                  }),
                                  Object(o.jsx)("li", {
                                    className: "nav-item",
                                    children: Object(o.jsx)("a", {
                                      href: "#skills",
                                      className: "nav-link",
                                      children: "Skills",
                                    }),
                                  }),
                                  Object(o.jsx)("li", {
                                    className: "nav-item",
                                    children: Object(o.jsx)("a", {
                                      href: "#about",
                                      className: "nav-link",
                                      children: "About",
                                    }),
                                  }),
                                  Object(o.jsx)("li", {
                                    className: "nav-item",
                                    children: Object(o.jsx)("a", {
                                      href: "#follow",
                                      className: "nav-link",
                                      children: "Follow me",
                                    }),
                                  }),
                                  Object(o.jsx)("li", {
                                    className: "nav-item",
                                    children: Object(o.jsx)("a", {
                                      href: "#work",
                                      className: "nav-link",
                                      children: "Work Together",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
                Object(o.jsxs)("div", {
                  className: a ? "mobile-menu  menu-open" : "mobile-menu",
                  children: [
                    Object(o.jsxs)("div", {
                      className: "logo order-md-1",
                      children: [
                        Object(o.jsx)(r.b, {
                          to: "/doc-landing",
                          children: Object(o.jsx)("img", {
                            src: "images/logo/deski_06.svg",
                            alt: "brand",
                          }),
                        }),
                        Object(o.jsx)("div", {
                          className: "fix-icon text-dark",
                          onClick: d,
                          children: Object(o.jsx)("img", {
                            src: "images/icon/close.svg",
                            alt: "icon",
                          }),
                        }),
                      ],
                    }),
                    Object(o.jsxs)(m.a, {
                      className: "navbar-nav font-gordita",
                      items: [
                        "product",
                        "skills",
                        "work",
                        "pricing",
                        "feedback",
                      ],
                      currentClassName: "active",
                      offset: -90,
                      children: [
                        Object(o.jsx)("li", {
                          className: "nav-item",
                          children: Object(o.jsx)("a", {
                            href: "#product",
                            className: "nav-link",
                            onClick: d,
                            children: "Product",
                          }),
                        }),
                        Object(o.jsx)("li", {
                          className: "nav-item",
                          children: Object(o.jsx)("a", {
                            href: "#skills",
                            className: "nav-link",
                            onClick: d,
                            children: "Skills",
                          }),
                        }),
                        Object(o.jsx)("li", {
                          className: "nav-item",
                          children: Object(o.jsx)("a", {
                            href: "#work",
                            className: "nav-link",
                            onClick: d,
                            children: "Work",
                          }),
                        }),
                        Object(o.jsx)("li", {
                          className: "nav-item",
                          children: Object(o.jsx)("a", {
                            href: "#pricing",
                            className: "nav-link",
                            onClick: d,
                            children: "Pricing",
                          }),
                        }),
                        Object(o.jsx)("li", {
                          className: "nav-item",
                          children: Object(o.jsx)("a", {
                            href: "#feedback",
                            className: "nav-link",
                            onClick: d,
                            children: "Feedback",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        h = function () {
          return Object(o.jsx)("div", {
            className: "hero-banner-portfolio lg-container",
            children: Object(o.jsxs)("div", {
              className: "container",
              children: [
                Object(o.jsx)("div", {
                  className: "illustration-container",
                  children: Object(o.jsx)("img", {
                    src: "images/assets/ils_20.png",
                    alt: "ils",
                  }),
                }),
                Object(o.jsx)("div", {
                  className: "row",
                  children: Object(o.jsxs)("div", {
                    className: "col-lg-6",
                    children: [
                      Object(o.jsx)("h2", { children: "Hi, I'm Belisa" }),
                      Object(o.jsxs)("h1", {
                        className: "hero-heading",
                        children: [
                          Object(o.jsx)("span", { children: "Front-End" }),
                          " Developer.",
                        ],
                      }),
                      Object(o.jsx)("p", { className: "hero-sub-heading" }),
                      Object(o.jsxs)(r.b, {
                        to: "/",
                        className: "btn-portfolio-contact",
                        "data-aos": "fade-up",
                        "data-aos-duration": "1200",
                        "data-aos-delay": "200",
                        children: [
                          " ",
                          Object(o.jsx)("a", {
                            href: "https://calendly.com/belisacodes/30min",
                            children: "Contact me! ",
                          }),
                        ],
                      }),
                      " ",
                      Object(o.jsxs)("p", {
                        className: "term-text",
                        children: [
                          "Don't hesitate and contact me for any project or question!",
                          " ",
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        x = [
          {
            icon: "fa-instagram",
            link: "https://www.instagram.com/belisacodes/",
          },
          { icon: "fa-twitter", link: "https://twitter.com/belisacodes" },
          {
            icon: "fa-linkedin",
            link: "https://www.linkedin.com/in/belisa-rus-08803a1bb/",
          },
        ],
        g = function () {
          return Object(o.jsxs)("div", {
            className: "row",
            children: [
              Object(o.jsx)("div", {
                className: "col-lg-4 order-lg-3 mb-20",
                children: Object(o.jsx)("ul", {
                  className:
                    " d-flex\r justify-content-center justify-content-lg-end\r social-icon",
                  children: x.map(function (e, s) {
                    return Object(o.jsx)(
                      "li",
                      {
                        children: Object(o.jsx)("a", {
                          href: e.link,
                          target: "_blank",
                          rel: "noreferrer",
                          children: Object(o.jsx)("i", {
                            className: "fa ".concat(e.icon),
                          }),
                        }),
                      },
                      s
                    );
                  }),
                }),
              }),
              Object(o.jsx)("div", {
                className: "col-lg-4 order-lg-2 mb-20",
                children: Object(o.jsxs)("p", {
                  className: "copyright text-center",
                  children: [
                    "Copyright @",
                    new Date().getFullYear(),
                    " ",
                    Object(o.jsx)("a", {
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: "BelisaCodes",
                    }),
                    " ",
                  ],
                }),
              }),
            ],
          });
        },
        O = [
          {
            img: "95",
            title: "Responsive Design",
            desc: " Get your content adapted to any device: Desktop, mobile, tablet ",
          },
          {
            img: "97",
            title: "Product 100% customised",
            desc: "Build a robust and scalable product that differentiates from your competition.",
          },
          {
            img: "98",
            title: "UX/UI Design",
            desc: "Design the product seeking to generate an excellent user experience.",
          },
        ],
        p = function () {
          return Object(o.jsx)(o.Fragment, {
            children: O.map(function (e, s) {
              return Object(o.jsx)(
                "div",
                {
                  className: "col-lg-4 col-sm-6",
                  "data-aos": "fade-up",
                  "data-aos-duration": "1200",
                  children: Object(o.jsxs)("div", {
                    className: "block-meta",
                    children: [
                      Object(o.jsx)("div", {
                        className: "icon d-flex align-items-end",
                        children: Object(o.jsx)("img", {
                          src: "images/icon/".concat(e.img, ".svg"),
                          alt: "icon",
                        }),
                      }),
                      Object(o.jsx)("h4", { children: e.title }),
                      Object(o.jsx)("p", { children: e.desc }),
                    ],
                  }),
                },
                s
              );
            }),
          });
        },
        u = t(9),
        f = function () {
          return Object(o.jsx)(o.Fragment, {
            children: Object(o.jsxs)(u.d, {
              children: [
                Object(o.jsxs)(u.b, {
                  children: [
                    Object(o.jsx)(u.a, {
                      children: Object(o.jsxs)("div", {
                        className: "d-flex align-items-center",
                        children: [
                          Object(o.jsx)("img", {
                            src: "images/icon/90.svg",
                            alt: "icon",
                          }),
                          Object(o.jsx)("p", { children: "Employees" }),
                        ],
                      }),
                    }),
                    Object(o.jsx)(u.a, {
                      children: Object(o.jsxs)("div", {
                        className: "d-flex align-items-center ",
                        children: [
                          Object(o.jsx)("img", {
                            src: "images/icon/91.svg",
                            alt: "icon",
                          }),
                          Object(o.jsx)("p", { children: "Devolabs Agency" }),
                        ],
                      }),
                    }),
                    Object(o.jsx)(u.a, {
                      children: Object(o.jsxs)("div", {
                        className: "d-flex align-items-center",
                        children: [
                          Object(o.jsx)("img", {
                            src: "images/icon/92.svg",
                            alt: "icon",
                          }),
                          Object(o.jsx)("p", { children: "Calculator" }),
                        ],
                      }),
                    }),
                  ],
                }),
                Object(o.jsxs)("div", {
                  className: "mt-50 sm-mt-30",
                  children: [
                    Object(o.jsx)(u.c, {
                      children: Object(o.jsx)("img", {
                        src: "images/assets/screen_11.png",
                        alt: "screen",
                        className: "m-auto",
                        "data-aos": "fade",
                        "data-aos-duration": "1200",
                      }),
                    }),
                    Object(o.jsx)(u.c, {
                      children: Object(o.jsx)("img", {
                        src: "images/assets/screen_15.png",
                        alt: "screen",
                        className: "m-auto",
                        "data-aos": "fade",
                        "data-aos-duration": "1200",
                      }),
                    }),
                    Object(o.jsx)(u.c, {
                      children: Object(o.jsx)("img", {
                        src: "images/assets/screen_16.png",
                        alt: "screen",
                        className: "m-auto",
                        "data-aos": "fade",
                        "data-aos-duration": "1200",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        v = function () {
          var e = Object(n.useState)(!1),
            s = Object(l.a)(e, 2);
          s[0], s[1];
          return Object(o.jsxs)("div", {
            className: "main-page-wrapper font-gordita",
            children: [
              Object(o.jsx)(i.a, {
                children: Object(o.jsx)("title", {
                  children: " Belisa | Front End Developer ",
                }),
              }),
              Object(o.jsx)(b, {}),
              Object(o.jsx)(h, {}),
              Object(o.jsx)("div", {
                className: "portfolio pt-120 md-pt-80",
                id: "portfolio",
                children: Object(o.jsxs)("div", {
                  className: "bg-wrapper",
                  children: [
                    Object(o.jsx)("div", {
                      className: "container",
                      children: Object(o.jsx)("div", {
                        className: "sldier-wrapper",
                        children: Object(o.jsx)(f, {}),
                      }),
                    }),
                    Object(o.jsx)("img", {
                      src: "images/shape/168.svg",
                      alt: "shape",
                      className: "shapes shape-one",
                    }),
                    Object(o.jsx)("img", {
                      src: "images/shape/169.svg",
                      alt: "shape",
                      className: "shapes shape-two",
                    }),
                  ],
                }),
              }),
              Object(o.jsx)("div", {
                className: "skills-about pt-200 md-pt-100",
                children: Object(o.jsxs)("div", {
                  className: "container",
                  children: [
                    Object(o.jsx)("div", {
                      className: "block-skills-about",
                      id: "skills",
                      children: Object(o.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                          Object(o.jsx)("div", {
                            className: "col-lg-5",
                            "data-aos": "fade-right",
                            "data-aos-duration": "1200",
                            children: Object(o.jsxs)("div", {
                              className: "text-wrapper",
                              children: [
                                Object(o.jsx)("h6", { children: "My Skills" }),
                                Object(o.jsx)("h3", {
                                  className: "title",
                                  children: Object(o.jsx)("span", {
                                    children: "self-taught",
                                  }),
                                }),
                                Object(o.jsxs)("p", {
                                  children: [
                                    "I started programming 3 months ago.",
                                    Object(o.jsx)("br", {}),
                                    "I began with HTML, CSS, JavaScript, and Vue. ",
                                    Object(o.jsx)("br", {}),
                                    "I've passion for creating intuitive, dynamic user experience",
                                    " ",
                                  ],
                                }),
                              ],
                            }),
                          }),
                          Object(o.jsx)("div", {
                            className: "col-lg-7",
                            "data-aos": "fade-left",
                            "data-aos-duration": "1200",
                            children: Object(o.jsxs)("div", {
                              className:
                                "\r screen-holder-one\r d-flex\r align-items-center\r justify-content-center\r ",
                              children: [
                                Object(o.jsx)("div", {
                                  className:
                                    "\r round-bg\r big_g\r d-flex\r align-items-center\r justify-content-center\r ",
                                  style: { width: "193px", height: "193px" },
                                  children: Object(o.jsx)("img", {
                                    src: "images/logo/logo-26.png",
                                    alt: "logo",
                                  }),
                                }),
                                Object(o.jsx)("div", {
                                  className:
                                    "\r round-bg\r d-flex\r align-items-center\r justify-content-center\r shapes\r logo-one\r ",
                                  style: { width: "65px", height: "65px" },
                                  children: Object(o.jsx)("img", {
                                    src: "images/logo/logo-27.png",
                                    alt: "logo",
                                  }),
                                }),
                                Object(o.jsx)("div", {
                                  className:
                                    "\r round-bg\r d-flex\r align-items-center\r justify-content-center\r shapes\r logo-two\r ",
                                  style: { width: "105px", height: "105px" },
                                  children: Object(o.jsx)("img", {
                                    src: "images/logo/logo-28.png",
                                    alt: "logo",
                                  }),
                                }),
                                Object(o.jsx)("div", {
                                  className:
                                    "\r round-bg\r d-flex\r align-items-center\r justify-content-center\r shapes\r logo-three\r ",
                                  style: { width: "81px", height: "81px" },
                                  children: Object(o.jsx)("img", {
                                    src: "images/logo/logo-29.png",
                                    alt: "logo",
                                  }),
                                }),
                                Object(o.jsx)("div", {
                                  className:
                                    "\r round-bg\r d-flex\r align-items-center\r justify-content-center\r shapes\r logo-four\r ",
                                  style: { width: "148px", height: "148px" },
                                  children: Object(o.jsx)("img", {
                                    src: "images/logo/logo-30.png",
                                    alt: "logo",
                                  }),
                                }),
                                Object(o.jsx)("div", {
                                  className:
                                    "\r round-bg\r d-flex\r align-items-center\r justify-content-center\r shapes\r logo-five\r ",
                                  style: { width: "148px", height: "148px" },
                                  children: Object(o.jsx)("img", {
                                    src: "images/logo/logo-31.png",
                                    alt: "logo",
                                  }),
                                }),
                                Object(o.jsx)("img", {
                                  src: "images/shape/170.svg",
                                  alt: "",
                                  className: "shapes shape-one",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                    Object(o.jsx)("div", {
                      className: "block-skills-about mt-200 pt-50 md-mt-80",
                      id: "about",
                      children: Object(o.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                          Object(o.jsx)("div", {
                            className: "col-lg-5 order-lg-last",
                            "data-aos": "fade-left",
                            "data-aos-duration": "1200",
                            children: Object(o.jsxs)("div", {
                              className: "text-wrapper",
                              children: [
                                Object(o.jsx)("h6", { children: "About me" }),
                                Object(o.jsxs)("h3", {
                                  className: "title",
                                  children: [
                                    "passion",
                                    Object(o.jsx)("span", {
                                      children: "for creating.",
                                    }),
                                  ],
                                }),
                                Object(o.jsx)("p", {
                                  children:
                                    "After studying economics and logistics, I spent a year in the startup ecosystem. Multitasking is a key element and a must have skill if you run a startup, and because of that I came across programming. Since then, I have enjoyed the sector.",
                                }),
                              ],
                            }),
                          }),
                          Object(o.jsx)("div", {
                            className: "col-lg-7 order-lg-first",
                            "data-aos": "fade-right",
                            "data-aos-duration": "1200",
                            children: Object(o.jsxs)("div", {
                              className: "screen-holder-two",
                              children: [
                                Object(o.jsx)("img", {
                                  src: "images/assets/screen_12.png",
                                  alt: "screen",
                                }),
                                Object(o.jsx)("img", {
                                  src: "images/assets/screen_13.png",
                                  alt: "",
                                  className: "shapes screen-one",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                    Object(o.jsx)("div", {
                      className: "block-skills-about mt-200 pt-50 md-mt-80",
                      id: "follow",
                      children: Object(o.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                          Object(o.jsx)("div", {
                            className: "col-lg-5",
                            "data-aos": "fade-right",
                            "data-aos-duration": "1200",
                            children: Object(o.jsxs)("div", {
                              className: "text-wrapper",
                              children: [
                                Object(o.jsx)("h6", {
                                  children: "Welcome to Belisa's World",
                                }),
                                Object(o.jsxs)("h3", {
                                  className: "title",
                                  children: [
                                    Object(o.jsx)("span", {
                                      children: "Follow me",
                                    }),
                                    " on Social Media",
                                  ],
                                }),
                                Object(o.jsx)("p", {
                                  children:
                                    "Created a platform on Instagram to share my journey and connect with everyone",
                                }),
                              ],
                            }),
                          }),
                          Object(o.jsx)("div", {
                            className: "col-lg-7",
                            "data-aos": "fade-left",
                            "data-aos-duration": "1200",
                            children: Object(o.jsx)("div", {
                              className:
                                "\r screen-holder-three\r d-flex\r align-items-center\r justify-content-center\r ",
                              children: Object(o.jsx)("img", {
                                src: "images/assets/screen_14.png",
                                alt: "screen",
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              Object(o.jsx)("div", {
                className: "block-work-with-me lg-container pt-200 md-pt-120",
                id: "work",
                children: Object(o.jsx)("div", {
                  className: "container",
                  children: Object(o.jsx)(d, {}),
                }),
              }),
              Object(o.jsx)("div", {
                className: "fancy-feature mt-150 md-mt-90",
                id: "product",
                children: Object(o.jsx)("div", {
                  className: "bg-wrapper",
                  children: Object(o.jsx)("div", {
                    className: "container",
                    children: Object(o.jsx)("div", {
                      className: "row",
                      children: Object(o.jsx)(p, {}),
                    }),
                  }),
                }),
              }),
              Object(o.jsx)("footer", {
                className: "footer-portfolio mt-120 md-mt-100",
                children: Object(o.jsx)("div", {
                  className: "lg-container",
                  children: Object(o.jsx)("div", {
                    className: "container",
                    children: Object(o.jsx)("div", {
                      className: "bottom-footer",
                      children: Object(o.jsx)(g, {}),
                    }),
                  }),
                }),
              }),
            ],
          });
        },
        N = t(3);
      function w() {
        var e = Object(N.f)().pathname;
        return (
          Object(n.useEffect)(
            function () {
              window.scrollTo(0, 0);
            },
            [e]
          ),
          null
        );
      }
      var k = function () {
        return Object(o.jsx)(o.Fragment, {
          children: Object(o.jsxs)(r.a, {
            children: [
              Object(o.jsx)(w, {}),
              Object(o.jsx)(N.c, {
                children: Object(o.jsx)(N.a, {
                  exact: !0,
                  path: "/",
                  component: v,
                }),
              }),
            ],
          }),
        });
      };
      function y() {
        var e = Object(n.useState)(!1),
          s = Object(l.a)(e, 2),
          t = s[0],
          c = s[1];
        return (
          Object(n.useEffect)(function () {
            var e = function () {
              window.pageYOffset > 500 ? c(!0) : c(!1);
            };
            return (
              window.addEventListener("scroll", e),
              function () {
                return window.removeEventListener("scroll", e);
              }
            );
          }, []),
          Object(o.jsx)(o.Fragment, {
            children:
              t &&
              Object(o.jsx)("div", {
                children: Object(o.jsx)("button", {
                  className: "scroll-top ",
                  onClick: function () {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  },
                  children: Object(o.jsx)("img", {
                    src: "images/icon/chevron-w.png",
                    alt: "icon",
                  }),
                }),
              }),
          })
        );
      }
      var C = t(25),
        F = t.n(C),
        S =
          (t(55),
          function () {
            return (
              Object(n.useEffect)(function () {
                F.a.init({ duration: 1200 });
              }, []),
              Object(o.jsxs)(o.Fragment, {
                children: [
                  Object(o.jsxs)(i.a, {
                    children: [
                      Object(o.jsx)("title", {
                        children: "BelisaCodes- Front-End Developer",
                      }),
                      Object(o.jsx)("meta", {
                        property: "og:site_name",
                        content: "belisacodes",
                      }),
                      Object(o.jsx)("meta", { property: "og:url" }),
                      Object(o.jsx)("meta", {
                        property: "og:type",
                        content: "website",
                      }),
                      Object(o.jsx)("meta", {
                        property: "og:title",
                        content: "BelisaCodes- Front-End Developer",
                      }),
                      Object(o.jsx)("meta", {
                        name: "keywords",
                        content:
                          "agency, front-end developer, business, portfolio, software company",
                      }),
                      Object(o.jsx)("meta", {
                        name: "description",
                        content:
                          "Self-taught Front-End developer with passion for creating intuitive and creative web pages.",
                      }),
                      Object(o.jsx)("meta", {
                        name: "description",
                        content: "React Portfolio",
                      }),
                    ],
                  }),
                  Object(o.jsx)(y, {}),
                  Object(o.jsx)(k, {}),
                ],
              })
            );
          }),
        D = function (e) {
          e &&
            e instanceof Function &&
            t
              .e(3)
              .then(t.bind(null, 59))
              .then(function (s) {
                var t = s.getCLS,
                  c = s.getFID,
                  a = s.getFCP,
                  n = s.getLCP,
                  i = s.getTTFB;
                t(e), c(e), a(e), n(e), i(e);
              });
        };
      t(56);
      a.a.render(Object(o.jsx)(S, {}), document.getElementById("root")), D();
    },
  },
  [[57, 1, 2]],
]);
//# sourceMappingURL=main.45a15fe4.chunk.js.map
