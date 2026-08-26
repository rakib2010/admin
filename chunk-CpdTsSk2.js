import{D as Ew,Lt as Rh,Mt as QI,Nn as dl,c as Bh,fi as xh,kt as Pi,o as Ah,p as CD,xr as ni}from"./chunk-q4Rs6eDf.js";import{G as Qi,O as Ji,dt as Y1,hn as py,sn as nl,xt as ay,zn as yy}from"./main-IYLEVGTX.js";import{i as k}from"./chunk-BQWFyHvh.js";import{t as c}from"./chunk-DJv5g611.js";var v=class c$1{constructor(){this.collapses=ni([!1,!1,!1,!1])}toggleCollapse(s){this.collapses.update(o=>o.map((i,l)=>l===s?!i:i))}static{this.ɵfac=function(o){return new(o||c$1)}}static{this.ɵcmp=CD({type:c$1,selectors:[[`app-collapses`]],decls:145,vars:5,consts:[[`xs`,`12`],[`href`,`components/collapse`,`title`,`Collapse`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/collapse`],[`cButton`,``,`color`,`primary`,1,`me-1`,3,`click`],[`cCollapse`,``,3,`visible`],[1,`shadow`,`mt-3`],[`ngPreserveWhitespaces`,``],[`cButton`,``,`color`,`primary`,1,`me-1`,`mb-3`,3,`click`],[2,`min-height`,`130px`],[`cCollapse`,``,`horizontal`,``,2,`max-width`,`260px`,3,`visible`],[1,`shadow`],[2,`width`,`260px`],[`href`,`components/collapse#multiple-targets`],[`xs`,`6`],[1,`mt-3`]],template:function(o,i){o&1&&(Pi(0,`c-row`),Ew(1,`
  `),Pi(2,`c-col`,0),Ew(3,`
    `),Rh(4,`app-docs-components`,1),Ew(5,`
    `),Pi(6,`c-card`,2),Ew(7,`
      `),Pi(8,`c-card-header`),Ew(9,`
        `),Pi(10,`strong`),Ew(11,`Angular Collapse`),dl(),Ew(12,`
      `),dl(),Ew(13,`
      `),Pi(14,`c-card-body`),Ew(15,`
        `),Pi(16,`p`,3),Ew(17,`You can use a link or a button component.`),dl(),Ew(18,`
        `),Pi(19,`app-docs-example`,4),Ew(20,`
          `),Pi(21,`a`,5),Bh(`click`,function(){return i.toggleCollapse(0)}),Ew(22,`Link`),dl(),Ew(23,`
          `),Pi(24,`button`,5),Bh(`click`,function(){return i.toggleCollapse(0)}),Ew(25,`
            Button
          `),dl(),Ew(26,`
          `),Pi(27,`div`,6),Ew(28,`
            `),Pi(29,`c-card`,7),Ew(30,`
              `),Pi(31,`c-card-body`),Ew(32,`
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              `),dl(),Ew(33,`
            `),dl(),Ew(34,`
          `),dl(),Ew(35,`
        `),dl(),Ew(36,`
      `),dl(),Ew(37,`
    `),dl(),Ew(38,`
  `),dl(),Ew(39,`
  `),Pi(40,`c-col`,0),Ew(41,`
    `),Pi(42,`c-card`,2),Ew(43,`
      `),Pi(44,`c-card-header`,8),Ew(45,`
        `),Pi(46,`strong`),Ew(47,`Angular Collapse`),dl(),Ew(48,` `),Pi(49,`small`),Ew(50,`horizontal`),dl(),Ew(51,`
      `),dl(),Ew(52,`
      `),Pi(53,`c-card-body`),Ew(54,`
        `),Pi(55,`p`,3),Ew(56,`
          Add the `),Pi(57,`code`),Ew(58,`horizontal`),dl(),Ew(59,` property to transition the width
          instead of height and set a width on the immediate child element.
        `),dl(),Ew(60,`
        `),Pi(61,`app-docs-example`,4),Ew(62,`
          `),Pi(63,`button`,9),Bh(`click`,function(){return i.toggleCollapse(1)}),Ew(64,`
            Button
          `),dl(),Ew(65,`
          `),Pi(66,`div`,10),Ew(67,`
            `),Pi(68,`div`,11),Ew(69,`
              `),Pi(70,`c-card`,12),Ew(71,`
                `),Pi(72,`c-card-body`,13),Ew(73,`
                  This is some placeholder content for a horizontal collapse.
                  It's hidden by default and shown when triggered.
                `),dl(),Ew(74,`
              `),dl(),Ew(75,`
            `),dl(),Ew(76,`
          `),dl(),Ew(77,`
        `),dl(),Ew(78,`
      `),dl(),Ew(79,`
    `),dl(),Ew(80,`
  `),dl(),Ew(81,`
  `),Pi(82,`c-col`,0),Ew(83,`
    `),Pi(84,`c-card`,2),Ew(85,`
      `),Pi(86,`c-card-header`),Ew(87,`
        `),Pi(88,`strong`),Ew(89,`Angular Collapse`),dl(),Ew(90,` `),Pi(91,`small`),Ew(92,` multi target`),dl(),Ew(93,`
      `),dl(),Ew(94,`
      `),Pi(95,`c-card-body`),Ew(96,`
        `),Pi(97,`p`,3),Ew(98,`
          A `),Pi(99,`code`),Ew(100,`<c-button>`),dl(),Ew(101,` can show and hide multiple elements.
        `),dl(),Ew(102,`
        `),Pi(103,`app-docs-example`,14),Ew(104,`
          `),Pi(105,`button`,5),Bh(`click`,function(){return i.toggleCollapse(2)}),Ew(106,`
            Toggle first element
          `),dl(),Ew(107,`
          `),Pi(108,`button`,5),Bh(`click`,function(){return i.toggleCollapse(3)}),Ew(109,`
            Toggle second element
          `),dl(),Ew(110,`
          `),Pi(111,`button`,5),Bh(`click`,function(){return i.toggleCollapse(2),i.toggleCollapse(3)}),Ew(112,`
            Toggle both
          `),dl(),Ew(113,`
          `),Pi(114,`c-row`,10),Ew(115,`
            `),Pi(116,`c-col`,15),Ew(117,`
              `),Pi(118,`div`,6),Ew(119,`
                `),Pi(120,`c-card`,16),Ew(121,`
                  `),Pi(122,`c-card-body`),Ew(123,`
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  `),dl(),Ew(124,`
                `),dl(),Ew(125,`
              `),dl(),Ew(126,`
            `),dl(),Ew(127,`
            `),Pi(128,`c-col`,15),Ew(129,`
              `),Pi(130,`div`,6),Ew(131,`
                `),Pi(132,`c-card`,16),Ew(133,`
                  `),Pi(134,`c-card-body`),Ew(135,`
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  `),dl(),Ew(136,`
                `),dl(),Ew(137,`
              `),dl(),Ew(138,`
            `),dl(),Ew(139,`
          `),dl(),Ew(140,`
        `),dl(),Ew(141,`
      `),dl(),Ew(142,`
    `),dl(),Ew(143,`
  `),dl(),Ew(144,`
`),dl()),o&2&&(QI(27),Ah(`visible`,i.collapses()[0]),QI(36),xh(`aria-expanded`,i.collapses()[1]),QI(5),Ah(`visible`,i.collapses()[1]),QI(50),Ah(`visible`,i.collapses()[2]),QI(12),Ah(`visible`,i.collapses()[3]))},dependencies:[Y1,yy,Qi,py,Ji,k,ay,nl,c],encapsulation:2})}};export{v as CollapsesComponent};