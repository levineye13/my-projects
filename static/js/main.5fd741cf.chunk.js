(this["webpackJsonpmy-projects"]=this["webpackJsonpmy-projects"]||[]).push([[0],{21:function(s,e,t){},29:function(s,e,t){},30:function(s,e,t){},31:function(s,e,t){},32:function(s,e,t){},33:function(s,e,t){},34:function(s,e,t){},35:function(s,e,t){},36:function(s,e,t){},37:function(s,e,t){"use strict";t.r(e);var c=t(0),l=t(1),i=t.n(l),a=t(5),n=t.n(a),r=(t(21),t(2)),_=t.n(r),j=t(3),m=t(11),o=t(6),h=t(4),p=t(15),b="SET_USER_DATA",u={name:"name",email:"email",avatar_url:""},x=Object(h.b)({user:function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b:return Object(p.a)({},e.payload);default:return s}}}),d=Object(h.c)(x),O=function(s){return{type:b,payload:s}},k=(t(29),t.p+"static/media/image-not-found.8a4eb187.jpg"),f=t.p+"static/media/profile-git.c51daf97.svg",v=Object(o.b)((function(s){return{user:s.user}}),null)((function(s){var e=s.user,t=e.name,l=e.email,i=e.avatar_url;return Object(c.jsxs)("section",{className:"profile section page__profile",children:[Object(c.jsx)("div",{className:"profile__avatar-wrapper",children:Object(c.jsx)("img",{src:i||k,alt:"\u0424\u043e\u0442\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f.",className:"profile__avatar"})}),Object(c.jsxs)("div",{className:"profile__info",children:[Object(c.jsx)("p",{className:"profile__name",children:t}),Object(c.jsx)("p",{className:"profile__mail",children:l}),Object(c.jsx)("a",{className:"profile__link",href:"https://github.com/levineye13",target:"_blanck",children:Object(c.jsx)("img",{className:"profile__link-img",src:f,alt:"\u0417\u043d\u0430\u0447\u043e\u043a \u0413\u0438\u0442\u0445\u0430\u0431\u0430."})})]})]})})),g=(t(30),function(s){var e=s.props,t=e.owner.login,l=e.name,i=e.description,a="https://".concat(t,".github.io/").concat(l);return Object(c.jsxs)("li",{className:"projects__item",children:[Object(c.jsx)("iframe",{className:"projects__site",src:a}),Object(c.jsxs)("div",{className:"projects__container",children:[Object(c.jsx)("p",{className:"projects__description",children:i}),Object(c.jsx)("a",{className:"projects__link",href:a,target:"_blank",children:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c"})]})]})}),N=(t(31),function(s){var e=s.text,t=s.className;return Object(c.jsx)("h2",{className:"section-title ".concat(t),children:e})}),w=(t(32),function(s){var e=s.projects;return Object(c.jsxs)("section",{className:"projects section section_narrow content__projects",children:[Object(c.jsx)(N,{text:"\u041f\u0440\u043e\u0435\u043a\u0442\u044b",className:"projects__section-title"}),Object(c.jsx)("ul",{className:"projects__list",children:e&&e.map((function(s){return Object(c.jsx)(g,{props:s},s.id)}))})]})}),y=(t(33),function(){return Object(c.jsxs)("section",{className:"skills section section_narrow content__skills",children:[Object(c.jsx)(N,{text:"\u041d\u0430\u0432\u044b\u043a\u0438",className:"skills__section-title"}),Object(c.jsxs)("ul",{className:"skills__list",children:[Object(c.jsxs)("li",{className:"skills__item",children:[Object(c.jsx)("h3",{className:"skills__subtitle",children:"\u042f\u0437\u044b\u043a\u0438"}),Object(c.jsxs)("ul",{className:"skills__sublist",children:[Object(c.jsx)("li",{className:"skills__subitem",children:Object(c.jsxs)("a",{href:"#",className:"skills__link",children:[Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"skills__img skills__img_type_html",viewBox:"0 0 384 512",children:Object(c.jsx)("path",{d:"M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"})}),Object(c.jsx)("span",{className:"skills__text skills__text_type_html",children:"HTML5"})]})}),Object(c.jsx)("li",{className:"skills__subitem",children:Object(c.jsxs)("a",{href:"#",className:"skills__link",children:[Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"skills__img skills__img_type_css",viewBox:"0 0 512 512",children:Object(c.jsx)("path",{d:"M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z"})}),Object(c.jsx)("span",{className:"skills__text skills__text_type_css",children:"CSS3"})]})}),Object(c.jsx)("li",{className:"skills__subitem",children:Object(c.jsxs)("a",{href:"#",className:"skills__link",children:[Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"skills__img skills__img_type_javascript",viewBox:"0 0 448 512",children:Object(c.jsx)("path",{d:"M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"})}),Object(c.jsx)("span",{className:"skills__text skills__text_type_javascript",children:"JavaScript"})]})})]})]}),Object(c.jsxs)("li",{className:"skills__item",children:[Object(c.jsx)("h3",{className:"skills__subtitle",children:"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 \u0438 \u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a\u0438"}),Object(c.jsxs)("ul",{className:"skills__sublist",children:[Object(c.jsx)("li",{className:"skills__subitem",children:Object(c.jsxs)("a",{href:"#",className:"skills__link",children:[Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"skills__img skills__img_type_react",viewBox:"0 0 512 512",children:Object(c.jsx)("path",{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"})}),Object(c.jsx)("span",{className:"skills__text skills__text_type_react",children:"React"})]})}),Object(c.jsx)("li",{className:"skills__subitem",children:Object(c.jsxs)("a",{href:"#",className:"skills__link",children:[Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"skills__img skills__img_type_express",viewBox:"0 0 1333.33 773.55",children:Object(c.jsx)("path",{d:"M1333.33 753.49c-48.5 12.33-78.5.54-105.41-39.87L1036.5 448.79l-27.67-36.67L785.29 714.5c-25.54 36.38-52.33 52.2-100 39.33l286.25-384.25-266.5-347.09c45.83-8.91 77.5-4.38 105.62 36.67l198.54 268.13 200-266.67c25.62-36.38 53.17-50.2 99.17-36.8l-103.33 137-140 182.29c-16.67 20.83-14.38 35.09.96 55.2l267.33 355.18zM.34 363.16l23.41-115.17c63.75-227.92 325-322.63 505.17-181.8 105.29 82.83 131.46 200 126.25 331.25H61.67C52.76 633.69 222.8 776.27 439.58 703.53c76.04-25.54 120.83-85.09 143.25-159.58 11.38-37.33 30.2-43.17 65.29-32.5-17.91 93.17-58.33 171-143.75 219.71-127.62 72.91-309.8 49.33-405.62-52C41.66 620.36 18.08 545.87 7.5 466.2c-1.67-13.17-5-25.71-7.5-38.33.22-21.56.34-43.11.34-64.67v-.04zm62.41-15.83h536.33c-3.5-170.83-109.87-292.17-255.25-293.2-159.58-1.25-274.17 117.2-281.09 293.2h.01z"})}),Object(c.jsx)("span",{className:"skills__text skills__text_type_express",children:"Express"})]})}),Object(c.jsx)("li",{className:"skills__subitem",children:Object(c.jsxs)("a",{href:"#",className:"skills__link",children:[Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"skills__img skills__img_type_sass",viewBox:"0 0 640 512",children:Object(c.jsx)("path",{d:"M301.84 378.92c-.3.6-.6 1.08 0 0zm249.13-87a131.16 131.16 0 0 0-58 13.5c-5.9-11.9-12-22.3-13-30.1-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.29 5.9a122.83 122.83 0 0 0-5.3 19.1c-2.3 11.7-25.79 53.5-39.09 75.3-4.4-8.5-8.1-16-8.9-22-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.29-6.7-24 2.5-25.3 5.9-2.7 11.4-5.3 19.1-33.89 77.3-42.08 95.4c-4.2 9.2-7.8 16.6-10.4 21.6-.4.8-.7 1.3-.9 1.7.3-.5.5-1 .5-.8-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1-.6 0-1.9-8.4.3-19.9 4.7-24.2 15.8-61.8 15.7-63.1-.1-.7 2.1-7.2-7.3-10.7-9.1-3.3-12.4 2.2-13.2 2.2s-1.4 2-1.4 2 10.1-42.4-19.39-42.4c-18.4 0-44 20.2-56.58 38.5-7.9 4.3-25 13.6-43 23.5-6.9 3.8-14 7.7-20.7 11.4-.5-.5-.9-1-1.4-1.5-35.79-38.2-101.87-65.2-99.07-116.5 1-18.7 7.5-67.8 127.07-127.4 98-48.8 176.35-35.4 189.84-5.6 19.4 42.5-41.89 121.6-143.66 133-38.79 4.3-59.18-10.7-64.28-16.3-5.3-5.9-6.1-6.2-8.1-5.1-3.3 1.8-1.2 7 0 10.1 3 7.9 15.5 21.9 36.79 28.9 18.7 6.1 64.18 9.5 119.17-11.8 61.78-23.8 109.87-90.1 95.77-145.6C386.52 18.32 293-.18 204.57 31.22c-52.69 18.7-109.67 48.1-150.66 86.4-48.69 45.6-56.48 85.3-53.28 101.9 11.39 58.9 92.57 97.3 125.06 125.7-1.6.9-3.1 1.7-4.5 2.5-16.29 8.1-78.18 40.5-93.67 74.7-17.5 38.8 2.9 66.6 16.29 70.4 41.79 11.6 84.58-9.3 107.57-43.6s20.2-79.1 9.6-99.5c-.1-.3-.3-.5-.4-.8 4.2-2.5 8.5-5 12.8-7.5 8.29-4.9 16.39-9.4 23.49-13.3-4 10.8-6.9 23.8-8.4 42.6-1.8 22 7.3 50.5 19.1 61.7 5.2 4.9 11.49 5 15.39 5 13.8 0 20-11.4 26.89-25 8.5-16.6 16-35.9 16-35.9s-9.4 52.2 16.3 52.2c9.39 0 18.79-12.1 23-18.3v.1s.2-.4.7-1.2c1-1.5 1.5-2.4 1.5-2.4v-.3c3.8-6.5 12.1-21.4 24.59-46 16.2-31.8 31.69-71.5 31.69-71.5a201.24 201.24 0 0 0 6.2 25.8c2.8 9.5 8.7 19.9 13.4 30-3.8 5.2-6.1 8.2-6.1 8.2a.31.31 0 0 0 .1.2c-3 4-6.4 8.3-9.9 12.5-12.79 15.2-28 32.6-30 37.6-2.4 5.9-1.8 10.3 2.8 13.7 3.4 2.6 9.4 3 15.69 2.5 11.5-.8 19.6-3.6 23.5-5.4a82.2 82.2 0 0 0 20.19-10.6c12.5-9.2 20.1-22.4 19.4-39.8-.4-9.6-3.5-19.2-7.3-28.2 1.1-1.6 2.3-3.3 3.4-5C434.8 301.72 450.1 270 450.1 270a201.24 201.24 0 0 0 6.2 25.8c2.4 8.1 7.09 17 11.39 25.7-18.59 15.1-30.09 32.6-34.09 44.1-7.4 21.3-1.6 30.9 9.3 33.1 4.9 1 11.9-1.3 17.1-3.5a79.46 79.46 0 0 0 21.59-11.1c12.5-9.2 24.59-22.1 23.79-39.6-.3-7.9-2.5-15.8-5.4-23.4 15.7-6.6 36.09-10.2 62.09-7.2 55.68 6.5 66.58 41.3 64.48 55.8s-13.8 22.6-17.7 25-5.1 3.3-4.8 5.1c.5 2.6 2.3 2.5 5.6 1.9 4.6-.8 29.19-11.8 30.29-38.7 1.6-34-31.09-71.4-89-71.1zm-429.18 144.7c-18.39 20.1-44.19 27.7-55.28 21.3C54.61 451 59.31 421.42 82 400c13.8-13 31.59-25 43.39-32.4 2.7-1.6 6.6-4 11.4-6.9.8-.5 1.2-.7 1.2-.7.9-.6 1.9-1.1 2.9-1.7 8.29 30.4.3 57.2-19.1 78.3zm134.36-91.4c-6.4 15.7-19.89 55.7-28.09 53.6-7-1.8-11.3-32.3-1.4-62.3 5-15.1 15.6-33.1 21.9-40.1 10.09-11.3 21.19-14.9 23.79-10.4 3.5 5.9-12.2 49.4-16.2 59.2zm111 53c-2.7 1.4-5.2 2.3-6.4 1.6-.9-.5 1.1-2.4 1.1-2.4s13.9-14.9 19.4-21.7c3.2-4 6.9-8.7 10.89-13.9 0 .5.1 1 .1 1.6-.13 17.9-17.32 30-25.12 34.8zm85.58-19.5c-2-1.4-1.7-6.1 5-20.7 2.6-5.7 8.59-15.3 19-24.5a36.18 36.18 0 0 1 1.9 10.8c-.1 22.5-16.2 30.9-25.89 34.4z"})}),Object(c.jsx)("span",{className:"skills__text skills__text_type_sass",children:"Sass"})]})})]})]}),Object(c.jsxs)("li",{className:"skills__item",children:[Object(c.jsx)("h3",{className:"skills__subtitle",children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b"}),Object(c.jsxs)("ul",{className:"skills__sublist",children:[Object(c.jsx)("li",{className:"skills__subitem",children:Object(c.jsxs)("a",{href:"#",className:"skills__link",children:[Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"skills__img skills__img_type_webpack",viewBox:"0 0 256 296",children:[Object(c.jsx)("path",{d:"M128.032.456L.298 74.203v147.495l127.734 73.748 127.735-73.748V74.203L128.032.456z"}),Object(c.jsx)("path",{d:"M128.034 75.263L64.69 111.834v73.144l63.344 36.572 63.344-36.572v-73.144l-63.344-36.571z",fill:"#1e90ff"}),Object(c.jsx)("path",{d:"M128 0L0 74.25l128 69.693 128-69.238L128 0zM128 153.509L0 221.38l128 73.793 127.544-74.249L128 153.51z",fill:"#fff",fillOpacity:".1"})]}),Object(c.jsx)("span",{className:"skills__text skills__text_type_webpack",children:"Webpack"})]})}),Object(c.jsx)("li",{className:"skills__subitem",children:Object(c.jsxs)("a",{href:"#",className:"skills__link",children:[Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"skills__img skills__img_type_git",viewBox:"0 0 448 512",children:Object(c.jsx)("path",{d:"M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"})}),Object(c.jsx)("span",{className:"skills__text skills__text_type_git",children:"Git"})]})}),Object(c.jsx)("li",{className:"skills__subitem",children:Object(c.jsxs)("a",{href:"#",className:"skills__link",children:[Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"skills__img skills__img_type_github",viewBox:"0 0 496 512",children:Object(c.jsx)("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})}),Object(c.jsx)("span",{className:"skills__text skills__text_type_github",children:"GitHub"})]})}),Object(c.jsx)("li",{className:"skills__subitem",children:Object(c.jsxs)("a",{href:"#",className:"skills__link",children:[Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"skills__img skills__img_type_vscode",viewBox:"-11.9 -2 1003.9 995.6",children:[Object(c.jsx)("path",{d:"m12.1 353.9s-24-17.3 4.8-40.4l67.1-60s19.2-20.2 39.5-2.6l619.2 468.8v224.8s-.3 35.3-45.6 31.4z",fill:"#2489ca"}),Object(c.jsx)("path",{d:"m171.7 498.8-159.6 145.1s-16.4 12.2 0 34l74.1 67.4s17.6 18.9 43.6-2.6l169.2-128.3z",fill:"#1070b3"}),Object(c.jsx)("path",{d:"m451.9 500 292.7-223.5-1.9-223.6s-12.5-48.8-54.2-23.4l-389.5 354.5z",fill:"#0877b9"}),Object(c.jsx)("path",{d:"m697.1 976.2c17 17.4 37.6 11.7 37.6 11.7l228.1-112.4c29.2-19.9 25.1-44.6 25.1-44.6v-671.2c0-29.5-30.2-39.7-30.2-39.7l-197.7-95.3c-43.2-26.7-71.5 4.8-71.5 4.8s36.4-26.2 54.2 23.4v887.5c0 6.1-1.3 12.1-3.9 17.5-5.2 10.5-16.5 20.3-43.6 16.2z",fill:"#3c99d4"})]}),Object(c.jsx)("span",{className:"skills__text skills__text_type_vscode",children:"VSCode"})]})})]})]}),Object(c.jsxs)("li",{className:"skills__item",children:[Object(c.jsx)("h3",{className:"skills__subtitle",children:"\u0421\u0435\u0439\u0447\u0430\u0441 \u0438\u0437\u0443\u0447\u0430\u044e"}),Object(c.jsxs)("ul",{className:"skills__sublist",children:[Object(c.jsx)("li",{className:"skills__subitem",children:Object(c.jsxs)("a",{href:"#",className:"skills__link",children:[Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"skills__img skills__img_type_node",viewBox:"0 0 256 282",children:[Object(c.jsx)("path",{d:"M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z"}),Object(c.jsx)("path",{d:"M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z"})]}),Object(c.jsx)("span",{className:"skills__text skills__text_type_node",children:"Node"})]})}),Object(c.jsx)("li",{className:"skills__subitem",children:Object(c.jsxs)("a",{href:"#",className:"skills__link",children:[Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"skills__img skills__img_type_redux",viewBox:"0 0 256 244",children:Object(c.jsx)("path",{d:"M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z"})}),Object(c.jsx)("span",{className:"skills__text skills__text_type_redux",children:"Redux"})]})})]})]})]})]})}),z=(t(34),function(s){var e=s.projects;return Object(c.jsxs)("main",{className:"content section page__content",children:[Object(c.jsx)(w,{projects:e}),Object(c.jsx)(y,{})]})}),M=(t(35),function(){return Object(c.jsx)("footer",{className:"footer section page__footer",children:Object(c.jsx)("p",{className:"footer__copyright",children:"\xa9 \u041e\u043b\u0435\u0433 \u0416\u0430\u0440\u043e\u0432. 2020."})})}),L=t(13),C=t(14),B=new(function(){function s(e){var t=e.baseUrl;Object(L.a)(this,s),this._baseUrl=t}return Object(C.a)(s,[{key:"_checkValitidyRequest",value:function(s){return s.ok?s.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(s.status)))}},{key:"getGithubUserInfo",value:function(){var s=Object(j.a)(_.a.mark((function s(){var e,t;return _.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,fetch("".concat(this._baseUrl,"levineye13"),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return e=s.sent,t=this._checkValitidyRequest(e),s.abrupt("return",t);case 5:case"end":return s.stop()}}),s,this)})));return function(){return s.apply(this,arguments)}}()},{key:"getGithubUserEmail",value:function(){var s=Object(j.a)(_.a.mark((function s(){var e,t;return _.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,fetch("".concat(this._baseUrl,"levineye13/events/public"),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return e=s.sent,t=this._checkValitidyRequest(e),s.abrupt("return",t);case 5:case"end":return s.stop()}}),s,this)})));return function(){return s.apply(this,arguments)}}()},{key:"getGithubProjects",value:function(){var s=Object(j.a)(_.a.mark((function s(){var e,t;return _.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,fetch("".concat(this._baseUrl,"levineye13/repos"),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return e=s.sent,t=this._checkValitidyRequest(e),s.abrupt("return",t);case 5:case"end":return s.stop()}}),s,this)})));return function(){return s.apply(this,arguments)}}()},{key:"getUserData",value:function(){var s=Object(j.a)(_.a.mark((function s(){return _.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Promise.all([this.getGithubUserInfo(),this.getGithubUserEmail()]));case 1:case"end":return s.stop()}}),s,this)})));return function(){return s.apply(this,arguments)}}()}]),s}())({baseUrl:"https://api.github.com/users/"}),U=["mesto","mesto-react","mesto-backend","project-company","russian-travel","TodoList"],E=(t(36),function(){var s=Object(l.useState)(null),e=Object(m.a)(s,2),t=e[0],i=e[1];return Object(l.useEffect)((function(){(function(){var s=Object(j.a)(_.a.mark((function s(){var e,t,c,l,i,a,n;return _.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,B.getUserData();case 3:(e=s.sent)&&(t=Object(m.a)(e,2),c=t[0],l=t[1],i=c.name,a=c.avatar_url,n=l[0].payload.commits[0].author.email,d.dispatch(O({name:i,email:n,avatar_url:a}))),s.next=10;break;case 7:s.prev=7,s.t0=s.catch(0),console.error(s.t0);case 10:case"end":return s.stop()}}),s,null,[[0,7]])})));return function(){return s.apply(this,arguments)}})()()}),[]),Object(l.useEffect)((function(){(function(){var s=Object(j.a)(_.a.mark((function s(){var e,t;return _.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,B.getGithubProjects();case 3:e=s.sent,(t=e.filter((function(s){return U.includes(s.name)})))&&i(t),s.next=11;break;case 8:s.prev=8,s.t0=s.catch(0),console.error(s.t0);case 11:case"end":return s.stop()}}),s,null,[[0,8]])})));return function(){return s.apply(this,arguments)}})()()}),[]),Object(c.jsx)(o.a,{store:d,children:Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("div",{className:"page",children:[Object(c.jsx)(v,{}),Object(c.jsx)(z,{projects:t}),Object(c.jsx)(M,{})]})})})});n.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(E,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.5fd741cf.chunk.js.map