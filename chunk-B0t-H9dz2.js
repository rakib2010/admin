import{D as Ew,Lt as Rh,Mt as QI,Nn as dl,_r as ml,kt as Pi,o as Ah,p as CD,xr as ni}from"./chunk-q4Rs6eDf.js";import{G as Qi,O as Ji,Pn as wy,Rn as yN,W as Qc,dt as Y1,hn as py,zn as yy}from"./main-IYLEVGTX.js";import{i as k}from"./chunk-BQWFyHvh.js";import{t as c}from"./chunk-DJv5g611.js";var f=class s{constructor(){this.value=ni(10);this.variant=ni(void 0);setTimeout(()=>{this.value.set(100),this.variant.set(`striped`)},3e3)}static{this.ɵfac=function(l){return new(l||s)}}static{this.ɵcmp=CD({type:s,selectors:[[`app-progress`]],decls:300,vars:37,consts:[[`xs`,`12`],[`href`,`components/progress`,`title`,`Progress`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress`],[`href`,`components/progress`],[1,`mb-3`,3,`value`],[`animated`,``,1,`mb-3`,3,`value`,`variant`],[1,`mb-3`],[3,`value`],[`href`,`components/progress#labels`],[`href`,`components/progress#height`],[`height`,`1`,1,`mb-3`,3,`value`],[`height`,`3`,1,`mb-3`,3,`value`],[`height`,`5`,1,`mb-3`,3,`value`],[`height`,`7`,1,`mb-3`,3,`value`],[`height`,`11`,1,`mb-3`,3,`value`],[`height`,`13`,1,`mb-3`,3,`value`],[`height`,`17`,1,`mb-3`,3,`value`],[`height`,`19`,1,`mb-3`,3,`value`],[`thin`,``,1,`mb-3`,3,`value`],[1,`mb-3`,2,`height`,`2rem`,3,`value`],[`href`,`components/progress#backgrounds`],[`color`,`success`,1,`mb-3`,3,`value`],[`color`,`info`,1,`mb-3`,3,`value`],[`color`,`warning`,1,`mb-3`,3,`value`],[`color`,`danger`,1,`mb-3`,3,`value`],[`href`,`components/progress#multiple-bars`],[`color`,`primary`,1,`mb-3`,3,`value`],[`color`,`danger`],[`color`,`success`,3,`value`],[`color`,`info`,3,`value`],[`href`,`components/progress#striped`],[`color`,`success`,`variant`,`striped`,1,`mb-3`,3,`value`],[`color`,`info`,`variant`,`striped`,1,`mb-3`,3,`value`],[`color`,`warning`,`variant`,`striped`,1,`mb-3`,3,`value`],[`color`,`danger`,`variant`,`striped`,1,`mb-3`,3,`value`],[`href`,`components/progress#animated-stripes`],[`animated`,``,`color`,`success`,`variant`,`striped`,1,`mb-3`,3,`value`],[`animated`,``,`color`,`info`,`variant`,`striped`,1,`mb-3`,3,`value`],[`animated`,``,`color`,`warning`,`variant`,`striped`,1,`mb-3`,3,`value`],[`animated`,``,`color`,`danger`,`variant`,`striped`,1,`mb-3`,3,`value`]],template:function(l,o){l&1&&(Pi(0,`c-row`),Ew(1,`
  `),Pi(2,`c-col`,0),Ew(3,`
    `),Rh(4,`app-docs-components`,1),Ew(5,`
    `),Pi(6,`c-card`,2),Ew(7,`
      `),Pi(8,`c-card-header`),Ew(9,`
        `),Pi(10,`strong`),Ew(11,`Angular Progress`),dl(),Ew(12,` `),Pi(13,`small`),Ew(14,`Basic example`),dl(),Ew(15,`
      `),dl(),Ew(16,`
      `),Pi(17,`c-card-body`),Ew(18,`
        `),Pi(19,`p`,3),Ew(20,`
          Progress components are built with two HTML elements, some CSS to set the width, and a
          few attributes. We don't use
          `),Pi(21,`a`,4),Ew(22,`
            the HTML5 `),Pi(23,`code`),Ew(24,`<progress>`),dl(),Ew(25,` element
          `),dl(),Ew(26,`
          , ensuring you can stack progress bars, animate them, and place text labels over them.
        `),dl(),Ew(27,`
        `),Pi(28,`app-docs-example`,5),Ew(29,`
          `),Rh(30,`c-progress`,6),Ew(31,`
          `),Rh(32,`c-progress`,6),Ew(33,`
          `),Rh(34,`c-progress`,6),Ew(35,`
          `),Rh(36,`c-progress`,6),Ew(37,`
          `),Pi(38,`c-progress`,7),Ew(39),dl(),Ew(40,`
          `),Rh(41,`hr`),Ew(42,`
          `),Pi(43,`c-progress`,8),Ew(44,`
            `),Pi(45,`c-progress-bar`,9),Ew(46,`33%`),dl(),Ew(47,`
          `),dl(),Ew(48,`

        `),dl(),Ew(49,`
      `),dl(),Ew(50,`
    `),dl(),Ew(51,`
  `),dl(),Ew(52,`
  `),Pi(53,`c-col`,0),Ew(54,`
    `),Pi(55,`c-card`,2),Ew(56,`
      `),Pi(57,`c-card-header`),Ew(58,`
        `),Pi(59,`strong`),Ew(60,`Angular Progress`),dl(),Ew(61,` `),Pi(62,`small`),Ew(63,`Labels`),dl(),Ew(64,`
      `),dl(),Ew(65,`
      `),Pi(66,`c-card-body`),Ew(67,`
        `),Pi(68,`p`,3),Ew(69,`
          Add labels to your progress bars by placing text as
          `),Pi(70,`code`),Ew(71,`<c-progress>`),dl(),Ew(72,` content.
        `),dl(),Ew(73,`
        `),Pi(74,`app-docs-example`,10),Ew(75,`
          `),Pi(76,`c-progress`,6),Ew(77,`25%`),dl(),Ew(78,`
        `),dl(),Ew(79,`
      `),dl(),Ew(80,`
    `),dl(),Ew(81,`
  `),dl(),Ew(82,`
  `),Pi(83,`c-col`,0),Ew(84,`
    `),Pi(85,`c-card`,2),Ew(86,`
      `),Pi(87,`c-card-header`),Ew(88,`
        `),Pi(89,`strong`),Ew(90,`Angular Progress`),dl(),Ew(91,` `),Pi(92,`small`),Ew(93,`Height`),dl(),Ew(94,`
      `),dl(),Ew(95,`
      `),Pi(96,`c-card-body`),Ew(97,`
        `),Pi(98,`p`,3),Ew(99,`
          We only set a `),Pi(100,`code`),Ew(101,`height`),dl(),Ew(102,` value on the `),Pi(103,`code`),Ew(104,`<c-progress>`),dl(),Ew(105,`, so if
          you change that value, the inner `),Pi(106,`code`),Ew(107,`<c-progress-bar>`),dl(),Ew(108,` will automatically
          resize accordingly.
        `),dl(),Ew(109,`
        `),Pi(110,`app-docs-example`,11),Ew(111,`
          `),Rh(112,`c-progress`,12),Ew(113,`
          `),Rh(114,`c-progress`,13),Ew(115,`
          `),Rh(116,`c-progress`,14),Ew(117,`
          `),Rh(118,`c-progress`,15),Ew(119,`
          `),Rh(120,`c-progress`,16),Ew(121,`
          `),Rh(122,`c-progress`,17),Ew(123,`
          `),Rh(124,`c-progress`,18),Ew(125,`
          `),Rh(126,`c-progress`,19),Ew(127,`
          `),Rh(128,`c-progress`,20),Ew(129,`
          `),Rh(130,`c-progress`,21),Ew(131,`
        `),dl(),Ew(132,`
      `),dl(),Ew(133,`
    `),dl(),Ew(134,`
  `),dl(),Ew(135,`
  `),Pi(136,`c-col`,0),Ew(137,`
    `),Pi(138,`c-card`,2),Ew(139,`
      `),Pi(140,`c-card-header`),Ew(141,`
        `),Pi(142,`strong`),Ew(143,`Angular Progress`),dl(),Ew(144,` `),Pi(145,`small`),Ew(146,`Backgrounds`),dl(),Ew(147,`
      `),dl(),Ew(148,`
      `),Pi(149,`c-card-body`),Ew(150,`
        `),Pi(151,`p`,3),Ew(152,`
          Use `),Pi(153,`code`),Ew(154,`color`),dl(),Ew(155,` prop to change the appearance of individual progress bars.
        `),dl(),Ew(156,`
        `),Pi(157,`app-docs-example`,22),Ew(158,`
          `),Rh(159,`c-progress`,23),Ew(160,`
          `),Rh(161,`c-progress`,24),Ew(162,`
          `),Rh(163,`c-progress`,25),Ew(164,`
          `),Rh(165,`c-progress`,26),Ew(166,`
        `),dl(),Ew(167,`
      `),dl(),Ew(168,`
    `),dl(),Ew(169,`
  `),dl(),Ew(170,`
  `),Pi(171,`c-col`,0),Ew(172,`
    `),Pi(173,`c-card`,2),Ew(174,`
      `),Pi(175,`c-card-header`),Ew(176,`
        `),Pi(177,`strong`),Ew(178,`Angular Progress`),dl(),Ew(179,` `),Pi(180,`small`),Ew(181,`Multiple bars`),dl(),Ew(182,`
      `),dl(),Ew(183,`
      `),Pi(184,`c-card-body`),Ew(185,`
        `),Pi(186,`p`,3),Ew(187,`
          Include multiple progress bars in a progress component if you need.
        `),dl(),Ew(188,`
        `),Pi(189,`app-docs-example`,27),Ew(190,`
          `),Pi(191,`c-progress-stacked`),Ew(192,`
            `),Pi(193,`c-progress`,28),Ew(194,`15%`),dl(),Ew(195,`
            `),Pi(196,`c-progress`,24),Ew(197,`30%`),dl(),Ew(198,`
            `),Pi(199,`c-progress`,6),Ew(200,`
              `),Pi(201,`c-progress-bar`,29),Ew(202,`20%`),dl(),Ew(203,`
            `),dl(),Ew(204,`
          `),dl(),Ew(205,`
          `),Rh(206,`hr`),Ew(207,`
          `),Pi(208,`c-progress`,8),Ew(209,`
            `),Pi(210,`c-progress-bar`,9),Ew(211,`15`),dl(),Ew(212,`
            `),Pi(213,`c-progress-bar`,30),Ew(214,`30`),dl(),Ew(215,`
            `),Pi(216,`c-progress-bar`,31),Ew(217,`20`),dl(),Ew(218,`
          `),dl(),Ew(219,`
        `),dl(),Ew(220,`
      `),dl(),Ew(221,`
    `),dl(),Ew(222,`
  `),dl(),Ew(223,`
  `),Pi(224,`c-col`,0),Ew(225,`
    `),Pi(226,`c-card`,2),Ew(227,`
      `),Pi(228,`c-card-header`),Ew(229,`
        `),Pi(230,`strong`),Ew(231,`Angular Progress`),dl(),Ew(232,` `),Pi(233,`small`),Ew(234,`Striped`),dl(),Ew(235,`
      `),dl(),Ew(236,`
      `),Pi(237,`c-card-body`),Ew(238,`
        `),Pi(239,`p`,3),Ew(240,`
          Add `),Pi(241,`code`),Ew(242,`variant="striped"`),dl(),Ew(243,` to any `),Pi(244,`code`),Ew(245,`<c-progress>`),dl(),Ew(246,` to
          apply a stripe via CSS gradient over the progress bar's background color.
        `),dl(),Ew(247,`
        `),Pi(248,`app-docs-example`,32),Ew(249,`
          `),Rh(250,`c-progress`,33),Ew(251,`
          `),Rh(252,`c-progress`,34),Ew(253,`
          `),Rh(254,`c-progress`,35),Ew(255,`
          `),Rh(256,`c-progress`,36),Ew(257,`
        `),dl(),Ew(258,`
      `),dl(),Ew(259,`
    `),dl(),Ew(260,`
  `),dl(),Ew(261,`
  `),Pi(262,`c-col`,0),Ew(263,`
    `),Pi(264,`c-card`,2),Ew(265,`
      `),Pi(266,`c-card-header`),Ew(267,`
        `),Pi(268,`strong`),Ew(269,`Angular Progress`),dl(),Ew(270,` `),Pi(271,`small`),Ew(272,`Animated stripes`),dl(),Ew(273,`
      `),dl(),Ew(274,`
      `),Pi(275,`c-card-body`),Ew(276,`
        `),Pi(277,`p`,3),Ew(278,`
          The striped gradient can also be animated. Add `),Pi(279,`code`),Ew(280,`[animated]="true"`),dl(),Ew(281,` property to
          `),Pi(282,`code`),Ew(283,`<c-progress>`),dl(),Ew(284,` to animate the stripes right to left via CSS3
          animations.
        `),dl(),Ew(285,`
        `),Pi(286,`app-docs-example`,37),Ew(287,`
          `),Rh(288,`c-progress`,38),Ew(289,`
          `),Rh(290,`c-progress`,39),Ew(291,`
          `),Rh(292,`c-progress`,40),Ew(293,`
          `),Rh(294,`c-progress`,41),Ew(295,`
        `),dl(),Ew(296,`
      `),dl(),Ew(297,`
    `),dl(),Ew(298,`
  `),dl(),Ew(299,`
`),dl()),l&2&&(QI(30),Ah(`value`,0),QI(2),Ah(`value`,25),QI(2),Ah(`value`,50),QI(2),Ah(`value`,75),QI(2),Ah(`value`,o.value())(`variant`,o.variant()),QI(),ml(``,o.value(),`%`),QI(6),Ah(`value`,33),QI(31),Ah(`value`,25),QI(36),Ah(`value`,25),QI(2),Ah(`value`,25),QI(2),Ah(`value`,25),QI(2),Ah(`value`,25),QI(2),Ah(`value`,25),QI(2),Ah(`value`,25),QI(2),Ah(`value`,25),QI(2),Ah(`value`,25),QI(2),Ah(`value`,25),QI(2),Ah(`value`,25),QI(29),Ah(`value`,25),QI(2),Ah(`value`,50),QI(2),Ah(`value`,75),QI(2),Ah(`value`,100),QI(28),Ah(`value`,15),QI(3),Ah(`value`,30),QI(3),Ah(`value`,20),QI(11),Ah(`value`,15),QI(3),Ah(`value`,30),QI(3),Ah(`value`,20),QI(34),Ah(`value`,25),QI(2),Ah(`value`,50),QI(2),Ah(`value`,75),QI(2),Ah(`value`,100),QI(32),Ah(`value`,25),QI(2),Ah(`value`,50),QI(2),Ah(`value`,75),QI(2),Ah(`value`,100))},dependencies:[Y1,yy,Qi,py,Ji,k,wy,yN,Qc,c],encapsulation:2})}};export{f as AppProgressComponent};