import{Jn as fl,Pr as qh,at as Lh,ht as ND,kr as oi,pn as XE,pr as ji,qt as TC,vr as kh,wt as Oh}from"./chunk-CNvvMoDe.js";import{D as K1,Dn as uy,T as Ji,U as Qi,cn as oy,in as nl,jn as vy}from"./main-KR47Z6Z4.js";import{i as k}from"./chunk-BoQ4iLTD.js";import{t as c}from"./chunk-CqpfDRQx.js";var v=class c$1{constructor(){this.collapses=oi([!1,!1,!1,!1])}toggleCollapse(s){this.collapses.update(o=>o.map((i,l)=>l===s?!i:i))}static{this.ɵfac=function(o){return new(o||c$1)}}static{this.ɵcmp=ND({type:c$1,selectors:[[`app-collapses`]],decls:145,vars:5,consts:[[`xs`,`12`],[`href`,`components/collapse`,`title`,`Collapse`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/collapse`],[`cButton`,``,`color`,`primary`,1,`me-1`,3,`click`],[`cCollapse`,``,3,`visible`],[1,`shadow`,`mt-3`],[`ngPreserveWhitespaces`,``],[`cButton`,``,`color`,`primary`,1,`me-1`,`mb-3`,3,`click`],[2,`min-height`,`130px`],[`cCollapse`,``,`horizontal`,``,2,`max-width`,`260px`,3,`visible`],[1,`shadow`],[2,`width`,`260px`],[`href`,`components/collapse#multiple-targets`],[`xs`,`6`],[1,`mt-3`]],template:function(o,i){o&1&&(ji(0,`c-row`),TC(1,`
  `),ji(2,`c-col`,0),TC(3,`
    `),Lh(4,`app-docs-components`,1),TC(5,`
    `),ji(6,`c-card`,2),TC(7,`
      `),ji(8,`c-card-header`),TC(9,`
        `),ji(10,`strong`),TC(11,`Angular Collapse`),fl(),TC(12,`
      `),fl(),TC(13,`
      `),ji(14,`c-card-body`),TC(15,`
        `),ji(16,`p`,3),TC(17,`You can use a link or a button component.`),fl(),TC(18,`
        `),ji(19,`app-docs-example`,4),TC(20,`
          `),ji(21,`a`,5),qh(`click`,function(){return i.toggleCollapse(0)}),TC(22,`Link`),fl(),TC(23,`
          `),ji(24,`button`,5),qh(`click`,function(){return i.toggleCollapse(0)}),TC(25,`
            Button
          `),fl(),TC(26,`
          `),ji(27,`div`,6),TC(28,`
            `),ji(29,`c-card`,7),TC(30,`
              `),ji(31,`c-card-body`),TC(32,`
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              `),fl(),TC(33,`
            `),fl(),TC(34,`
          `),fl(),TC(35,`
        `),fl(),TC(36,`
      `),fl(),TC(37,`
    `),fl(),TC(38,`
  `),fl(),TC(39,`
  `),ji(40,`c-col`,0),TC(41,`
    `),ji(42,`c-card`,2),TC(43,`
      `),ji(44,`c-card-header`,8),TC(45,`
        `),ji(46,`strong`),TC(47,`Angular Collapse`),fl(),TC(48,` `),ji(49,`small`),TC(50,`horizontal`),fl(),TC(51,`
      `),fl(),TC(52,`
      `),ji(53,`c-card-body`),TC(54,`
        `),ji(55,`p`,3),TC(56,`
          Add the `),ji(57,`code`),TC(58,`horizontal`),fl(),TC(59,` property to transition the width
          instead of height and set a width on the immediate child element.
        `),fl(),TC(60,`
        `),ji(61,`app-docs-example`,4),TC(62,`
          `),ji(63,`button`,9),qh(`click`,function(){return i.toggleCollapse(1)}),TC(64,`
            Button
          `),fl(),TC(65,`
          `),ji(66,`div`,10),TC(67,`
            `),ji(68,`div`,11),TC(69,`
              `),ji(70,`c-card`,12),TC(71,`
                `),ji(72,`c-card-body`,13),TC(73,`
                  This is some placeholder content for a horizontal collapse.
                  It's hidden by default and shown when triggered.
                `),fl(),TC(74,`
              `),fl(),TC(75,`
            `),fl(),TC(76,`
          `),fl(),TC(77,`
        `),fl(),TC(78,`
      `),fl(),TC(79,`
    `),fl(),TC(80,`
  `),fl(),TC(81,`
  `),ji(82,`c-col`,0),TC(83,`
    `),ji(84,`c-card`,2),TC(85,`
      `),ji(86,`c-card-header`),TC(87,`
        `),ji(88,`strong`),TC(89,`Angular Collapse`),fl(),TC(90,` `),ji(91,`small`),TC(92,` multi target`),fl(),TC(93,`
      `),fl(),TC(94,`
      `),ji(95,`c-card-body`),TC(96,`
        `),ji(97,`p`,3),TC(98,`
          A `),ji(99,`code`),TC(100,`<c-button>`),fl(),TC(101,` can show and hide multiple elements.
        `),fl(),TC(102,`
        `),ji(103,`app-docs-example`,14),TC(104,`
          `),ji(105,`button`,5),qh(`click`,function(){return i.toggleCollapse(2)}),TC(106,`
            Toggle first element
          `),fl(),TC(107,`
          `),ji(108,`button`,5),qh(`click`,function(){return i.toggleCollapse(3)}),TC(109,`
            Toggle second element
          `),fl(),TC(110,`
          `),ji(111,`button`,5),qh(`click`,function(){return i.toggleCollapse(2),i.toggleCollapse(3)}),TC(112,`
            Toggle both
          `),fl(),TC(113,`
          `),ji(114,`c-row`,10),TC(115,`
            `),ji(116,`c-col`,15),TC(117,`
              `),ji(118,`div`,6),TC(119,`
                `),ji(120,`c-card`,16),TC(121,`
                  `),ji(122,`c-card-body`),TC(123,`
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  `),fl(),TC(124,`
                `),fl(),TC(125,`
              `),fl(),TC(126,`
            `),fl(),TC(127,`
            `),ji(128,`c-col`,15),TC(129,`
              `),ji(130,`div`,6),TC(131,`
                `),ji(132,`c-card`,16),TC(133,`
                  `),ji(134,`c-card-body`),TC(135,`
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  `),fl(),TC(136,`
                `),fl(),TC(137,`
              `),fl(),TC(138,`
            `),fl(),TC(139,`
          `),fl(),TC(140,`
        `),fl(),TC(141,`
      `),fl(),TC(142,`
    `),fl(),TC(143,`
  `),fl(),TC(144,`
`),fl()),o&2&&(XE(27),Oh(`visible`,i.collapses()[0]),XE(36),kh(`aria-expanded`,i.collapses()[1]),XE(5),Oh(`visible`,i.collapses()[1]),XE(50),Oh(`visible`,i.collapses()[2]),XE(12),Oh(`visible`,i.collapses()[3]))},dependencies:[K1,vy,Qi,uy,Ji,k,oy,nl,c],encapsulation:2})}};export{v as CollapsesComponent};