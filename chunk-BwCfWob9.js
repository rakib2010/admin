import{Jn as fl,_i as yl,at as Lh,ht as ND,kr as oi,pn as XE,pr as ji,qt as TC,wt as Oh}from"./chunk-CNvvMoDe.js";import{D as K1,Dn as uy,H as Qc,St as bN,T as Ji,U as Qi,jn as vy,l as Cy}from"./main-KR47Z6Z4.js";import{i as k}from"./chunk-BoQ4iLTD.js";import{t as c}from"./chunk-CqpfDRQx.js";var f=class s{constructor(){this.value=oi(10);this.variant=oi(void 0);setTimeout(()=>{this.value.set(100),this.variant.set(`striped`)},3e3)}static{this.ɵfac=function(l){return new(l||s)}}static{this.ɵcmp=ND({type:s,selectors:[[`app-progress`]],decls:300,vars:37,consts:[[`xs`,`12`],[`href`,`components/progress`,`title`,`Progress`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress`],[`href`,`components/progress`],[1,`mb-3`,3,`value`],[`animated`,``,1,`mb-3`,3,`value`,`variant`],[1,`mb-3`],[3,`value`],[`href`,`components/progress#labels`],[`href`,`components/progress#height`],[`height`,`1`,1,`mb-3`,3,`value`],[`height`,`3`,1,`mb-3`,3,`value`],[`height`,`5`,1,`mb-3`,3,`value`],[`height`,`7`,1,`mb-3`,3,`value`],[`height`,`11`,1,`mb-3`,3,`value`],[`height`,`13`,1,`mb-3`,3,`value`],[`height`,`17`,1,`mb-3`,3,`value`],[`height`,`19`,1,`mb-3`,3,`value`],[`thin`,``,1,`mb-3`,3,`value`],[1,`mb-3`,2,`height`,`2rem`,3,`value`],[`href`,`components/progress#backgrounds`],[`color`,`success`,1,`mb-3`,3,`value`],[`color`,`info`,1,`mb-3`,3,`value`],[`color`,`warning`,1,`mb-3`,3,`value`],[`color`,`danger`,1,`mb-3`,3,`value`],[`href`,`components/progress#multiple-bars`],[`color`,`primary`,1,`mb-3`,3,`value`],[`color`,`danger`],[`color`,`success`,3,`value`],[`color`,`info`,3,`value`],[`href`,`components/progress#striped`],[`color`,`success`,`variant`,`striped`,1,`mb-3`,3,`value`],[`color`,`info`,`variant`,`striped`,1,`mb-3`,3,`value`],[`color`,`warning`,`variant`,`striped`,1,`mb-3`,3,`value`],[`color`,`danger`,`variant`,`striped`,1,`mb-3`,3,`value`],[`href`,`components/progress#animated-stripes`],[`animated`,``,`color`,`success`,`variant`,`striped`,1,`mb-3`,3,`value`],[`animated`,``,`color`,`info`,`variant`,`striped`,1,`mb-3`,3,`value`],[`animated`,``,`color`,`warning`,`variant`,`striped`,1,`mb-3`,3,`value`],[`animated`,``,`color`,`danger`,`variant`,`striped`,1,`mb-3`,3,`value`]],template:function(l,o){l&1&&(ji(0,`c-row`),TC(1,`
  `),ji(2,`c-col`,0),TC(3,`
    `),Lh(4,`app-docs-components`,1),TC(5,`
    `),ji(6,`c-card`,2),TC(7,`
      `),ji(8,`c-card-header`),TC(9,`
        `),ji(10,`strong`),TC(11,`Angular Progress`),fl(),TC(12,` `),ji(13,`small`),TC(14,`Basic example`),fl(),TC(15,`
      `),fl(),TC(16,`
      `),ji(17,`c-card-body`),TC(18,`
        `),ji(19,`p`,3),TC(20,`
          Progress components are built with two HTML elements, some CSS to set the width, and a
          few attributes. We don't use
          `),ji(21,`a`,4),TC(22,`
            the HTML5 `),ji(23,`code`),TC(24,`<progress>`),fl(),TC(25,` element
          `),fl(),TC(26,`
          , ensuring you can stack progress bars, animate them, and place text labels over them.
        `),fl(),TC(27,`
        `),ji(28,`app-docs-example`,5),TC(29,`
          `),Lh(30,`c-progress`,6),TC(31,`
          `),Lh(32,`c-progress`,6),TC(33,`
          `),Lh(34,`c-progress`,6),TC(35,`
          `),Lh(36,`c-progress`,6),TC(37,`
          `),ji(38,`c-progress`,7),TC(39),fl(),TC(40,`
          `),Lh(41,`hr`),TC(42,`
          `),ji(43,`c-progress`,8),TC(44,`
            `),ji(45,`c-progress-bar`,9),TC(46,`33%`),fl(),TC(47,`
          `),fl(),TC(48,`

        `),fl(),TC(49,`
      `),fl(),TC(50,`
    `),fl(),TC(51,`
  `),fl(),TC(52,`
  `),ji(53,`c-col`,0),TC(54,`
    `),ji(55,`c-card`,2),TC(56,`
      `),ji(57,`c-card-header`),TC(58,`
        `),ji(59,`strong`),TC(60,`Angular Progress`),fl(),TC(61,` `),ji(62,`small`),TC(63,`Labels`),fl(),TC(64,`
      `),fl(),TC(65,`
      `),ji(66,`c-card-body`),TC(67,`
        `),ji(68,`p`,3),TC(69,`
          Add labels to your progress bars by placing text as
          `),ji(70,`code`),TC(71,`<c-progress>`),fl(),TC(72,` content.
        `),fl(),TC(73,`
        `),ji(74,`app-docs-example`,10),TC(75,`
          `),ji(76,`c-progress`,6),TC(77,`25%`),fl(),TC(78,`
        `),fl(),TC(79,`
      `),fl(),TC(80,`
    `),fl(),TC(81,`
  `),fl(),TC(82,`
  `),ji(83,`c-col`,0),TC(84,`
    `),ji(85,`c-card`,2),TC(86,`
      `),ji(87,`c-card-header`),TC(88,`
        `),ji(89,`strong`),TC(90,`Angular Progress`),fl(),TC(91,` `),ji(92,`small`),TC(93,`Height`),fl(),TC(94,`
      `),fl(),TC(95,`
      `),ji(96,`c-card-body`),TC(97,`
        `),ji(98,`p`,3),TC(99,`
          We only set a `),ji(100,`code`),TC(101,`height`),fl(),TC(102,` value on the `),ji(103,`code`),TC(104,`<c-progress>`),fl(),TC(105,`, so if
          you change that value, the inner `),ji(106,`code`),TC(107,`<c-progress-bar>`),fl(),TC(108,` will automatically
          resize accordingly.
        `),fl(),TC(109,`
        `),ji(110,`app-docs-example`,11),TC(111,`
          `),Lh(112,`c-progress`,12),TC(113,`
          `),Lh(114,`c-progress`,13),TC(115,`
          `),Lh(116,`c-progress`,14),TC(117,`
          `),Lh(118,`c-progress`,15),TC(119,`
          `),Lh(120,`c-progress`,16),TC(121,`
          `),Lh(122,`c-progress`,17),TC(123,`
          `),Lh(124,`c-progress`,18),TC(125,`
          `),Lh(126,`c-progress`,19),TC(127,`
          `),Lh(128,`c-progress`,20),TC(129,`
          `),Lh(130,`c-progress`,21),TC(131,`
        `),fl(),TC(132,`
      `),fl(),TC(133,`
    `),fl(),TC(134,`
  `),fl(),TC(135,`
  `),ji(136,`c-col`,0),TC(137,`
    `),ji(138,`c-card`,2),TC(139,`
      `),ji(140,`c-card-header`),TC(141,`
        `),ji(142,`strong`),TC(143,`Angular Progress`),fl(),TC(144,` `),ji(145,`small`),TC(146,`Backgrounds`),fl(),TC(147,`
      `),fl(),TC(148,`
      `),ji(149,`c-card-body`),TC(150,`
        `),ji(151,`p`,3),TC(152,`
          Use `),ji(153,`code`),TC(154,`color`),fl(),TC(155,` prop to change the appearance of individual progress bars.
        `),fl(),TC(156,`
        `),ji(157,`app-docs-example`,22),TC(158,`
          `),Lh(159,`c-progress`,23),TC(160,`
          `),Lh(161,`c-progress`,24),TC(162,`
          `),Lh(163,`c-progress`,25),TC(164,`
          `),Lh(165,`c-progress`,26),TC(166,`
        `),fl(),TC(167,`
      `),fl(),TC(168,`
    `),fl(),TC(169,`
  `),fl(),TC(170,`
  `),ji(171,`c-col`,0),TC(172,`
    `),ji(173,`c-card`,2),TC(174,`
      `),ji(175,`c-card-header`),TC(176,`
        `),ji(177,`strong`),TC(178,`Angular Progress`),fl(),TC(179,` `),ji(180,`small`),TC(181,`Multiple bars`),fl(),TC(182,`
      `),fl(),TC(183,`
      `),ji(184,`c-card-body`),TC(185,`
        `),ji(186,`p`,3),TC(187,`
          Include multiple progress bars in a progress component if you need.
        `),fl(),TC(188,`
        `),ji(189,`app-docs-example`,27),TC(190,`
          `),ji(191,`c-progress-stacked`),TC(192,`
            `),ji(193,`c-progress`,28),TC(194,`15%`),fl(),TC(195,`
            `),ji(196,`c-progress`,24),TC(197,`30%`),fl(),TC(198,`
            `),ji(199,`c-progress`,6),TC(200,`
              `),ji(201,`c-progress-bar`,29),TC(202,`20%`),fl(),TC(203,`
            `),fl(),TC(204,`
          `),fl(),TC(205,`
          `),Lh(206,`hr`),TC(207,`
          `),ji(208,`c-progress`,8),TC(209,`
            `),ji(210,`c-progress-bar`,9),TC(211,`15`),fl(),TC(212,`
            `),ji(213,`c-progress-bar`,30),TC(214,`30`),fl(),TC(215,`
            `),ji(216,`c-progress-bar`,31),TC(217,`20`),fl(),TC(218,`
          `),fl(),TC(219,`
        `),fl(),TC(220,`
      `),fl(),TC(221,`
    `),fl(),TC(222,`
  `),fl(),TC(223,`
  `),ji(224,`c-col`,0),TC(225,`
    `),ji(226,`c-card`,2),TC(227,`
      `),ji(228,`c-card-header`),TC(229,`
        `),ji(230,`strong`),TC(231,`Angular Progress`),fl(),TC(232,` `),ji(233,`small`),TC(234,`Striped`),fl(),TC(235,`
      `),fl(),TC(236,`
      `),ji(237,`c-card-body`),TC(238,`
        `),ji(239,`p`,3),TC(240,`
          Add `),ji(241,`code`),TC(242,`variant="striped"`),fl(),TC(243,` to any `),ji(244,`code`),TC(245,`<c-progress>`),fl(),TC(246,` to
          apply a stripe via CSS gradient over the progress bar's background color.
        `),fl(),TC(247,`
        `),ji(248,`app-docs-example`,32),TC(249,`
          `),Lh(250,`c-progress`,33),TC(251,`
          `),Lh(252,`c-progress`,34),TC(253,`
          `),Lh(254,`c-progress`,35),TC(255,`
          `),Lh(256,`c-progress`,36),TC(257,`
        `),fl(),TC(258,`
      `),fl(),TC(259,`
    `),fl(),TC(260,`
  `),fl(),TC(261,`
  `),ji(262,`c-col`,0),TC(263,`
    `),ji(264,`c-card`,2),TC(265,`
      `),ji(266,`c-card-header`),TC(267,`
        `),ji(268,`strong`),TC(269,`Angular Progress`),fl(),TC(270,` `),ji(271,`small`),TC(272,`Animated stripes`),fl(),TC(273,`
      `),fl(),TC(274,`
      `),ji(275,`c-card-body`),TC(276,`
        `),ji(277,`p`,3),TC(278,`
          The striped gradient can also be animated. Add `),ji(279,`code`),TC(280,`[animated]="true"`),fl(),TC(281,` property to
          `),ji(282,`code`),TC(283,`<c-progress>`),fl(),TC(284,` to animate the stripes right to left via CSS3
          animations.
        `),fl(),TC(285,`
        `),ji(286,`app-docs-example`,37),TC(287,`
          `),Lh(288,`c-progress`,38),TC(289,`
          `),Lh(290,`c-progress`,39),TC(291,`
          `),Lh(292,`c-progress`,40),TC(293,`
          `),Lh(294,`c-progress`,41),TC(295,`
        `),fl(),TC(296,`
      `),fl(),TC(297,`
    `),fl(),TC(298,`
  `),fl(),TC(299,`
`),fl()),l&2&&(XE(30),Oh(`value`,0),XE(2),Oh(`value`,25),XE(2),Oh(`value`,50),XE(2),Oh(`value`,75),XE(2),Oh(`value`,o.value())(`variant`,o.variant()),XE(),yl(``,o.value(),`%`),XE(6),Oh(`value`,33),XE(31),Oh(`value`,25),XE(36),Oh(`value`,25),XE(2),Oh(`value`,25),XE(2),Oh(`value`,25),XE(2),Oh(`value`,25),XE(2),Oh(`value`,25),XE(2),Oh(`value`,25),XE(2),Oh(`value`,25),XE(2),Oh(`value`,25),XE(2),Oh(`value`,25),XE(2),Oh(`value`,25),XE(29),Oh(`value`,25),XE(2),Oh(`value`,50),XE(2),Oh(`value`,75),XE(2),Oh(`value`,100),XE(28),Oh(`value`,15),XE(3),Oh(`value`,30),XE(3),Oh(`value`,20),XE(11),Oh(`value`,15),XE(3),Oh(`value`,30),XE(3),Oh(`value`,20),XE(34),Oh(`value`,25),XE(2),Oh(`value`,50),XE(2),Oh(`value`,75),XE(2),Oh(`value`,100),XE(32),Oh(`value`,25),XE(2),Oh(`value`,50),XE(2),Oh(`value`,75),XE(2),Oh(`value`,100))},dependencies:[K1,vy,Qi,uy,Ji,k,Cy,bN,Qc,c],encapsulation:2})}};export{f as AppProgressComponent};