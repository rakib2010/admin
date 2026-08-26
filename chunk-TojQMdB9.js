import{D as Ew,Lt as Rh,Mt as QI,Nn as dl,St as Ow,Y as Jh,kt as Pi,o as Ah,p as CD}from"./chunk-q4Rs6eDf.js";import{Bn as z1,G as Qi,O as Ji,at as V1,ct as X1,dt as Y1,hn as py,s as B1,st as W1,tt as U1,zn as yy}from"./main-IYLEVGTX.js";import{i as k}from"./chunk-BQWFyHvh.js";import{t as c}from"./chunk-DJv5g611.js";import{S as qn,_ as ei,b as on,f as Xn,i as Kn,m as Yn,s as Qn}from"./chunk-BKl8UmvF.js";var G=()=>({g:2});var O=class m{static{this.ɵfac=function(l){return new(l||m)}}static{this.ɵcmp=CD({type:m,selectors:[[`app-floating-labels`]],decls:274,vars:5,consts:[[`xs`,`12`],[`href`,`forms/floating-labels`,`title`,`Floating Labels`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`forms/floating-labels`],[1,`mb-3`,3,`cFormFloating`],[`cFormControl`,``,`id`,`floatingInput`,`placeholder`,`name@example.com`,`type`,`email`],[`cLabel`,``,`for`,`floatingInput`],[`cFormFloating`,``],[`cFormControl`,``,`id`,`floatingPassword`,`placeholder`,`Password`,`type`,`password`],[`cLabel`,``,`for`,`floatingPassword`],[`cForm`,``,`cFormFloating`,``],[`cFormControl`,``,`id`,`floatingInputValue`,`placeholder`,`name@example.com`,`type`,`email`,`value`,`test@example.com`],[`cLabel`,``,`for`,`floatingInputValue`],[`href`,`forms/floating-labels#textareas`],[`cFormControl`,``,`id`,`floatingTextarea`,`placeholder`,`Leave a comment here`,`type`,`text`],[`cLabel`,``,`for`,`floatingTextarea`],[`cFormControl`,``,`id`,`floatingTextarea2`,`placeholder`,`Leave a comment here`],[`cLabel`,``,`for`,`floatingTextarea2`],[`href`,`forms/floating-labels#selects`],[`aria-label`,`Floating label select example`,`cSelect`,``,`id`,`floatingSelect`],[`value`,`1`],[`value`,`2`],[`value`,`3`],[`cLabel`,``,`for`,`floatingSelect`],[`href`,`forms/floating-labels#layout`],[3,`gutter`],[`md`,``],[`cFormControl`,``,`id`,`floatingInputGrid`,`placeholder`,`name@example.com`,`type`,`email`,`value`,`email@example.com`],[`cLabel`,``,`for`,`floatingInputGrid`],[`aria-label`,`Floating label select example`,`cSelect`,``,`id`,`floatingSelectGrid`],[`cLabel`,``,`for`,`floatingSelectGrid`]],template:function(l,P){l&1&&(Pi(0,`c-row`),Ew(1,`
  `),Pi(2,`c-col`,0),Ew(3,`
    `),Rh(4,`app-docs-components`,1),Ew(5,`
    `),Pi(6,`c-card`,2),Ew(7,`
      `),Pi(8,`c-card-header`),Ew(9,`
        `),Pi(10,`strong`),Ew(11,`Angular Floating labels`),dl(),Ew(12,`
      `),dl(),Ew(13,`
      `),Pi(14,`c-card-body`),Ew(15,`
        `),Pi(16,`p`,3),Ew(17,`
          Wrap a pair of `),Pi(18,`code`),Ew(19,`<cFormControl>`),dl(),Ew(20,` and `),Pi(21,`code`),Ew(22,`<label>`),dl(),Ew(23,`
          elements in `),Pi(24,`code`),Ew(25,`cFormControl`),dl(),Ew(26,` to enable floating labels with textual form
          fields. A `),Pi(27,`code`),Ew(28,`placeholder`),dl(),Ew(29,` is required on each `),Pi(30,`code`),Ew(31,`<input>`),dl(),Ew(32,`
          as our method of CSS-only floating labels uses the `),Pi(33,`code`),Ew(34,`:placeholder-shown`),dl(),Ew(35,`
          pseudo-element. Also note that the `),Pi(36,`code`),Ew(37,`<cFormControl>`),dl(),Ew(38,` must come first so
          we can utilize a sibling selector (e.g., `),Pi(39,`code`),Ew(40,`~`),dl(),Ew(41,`).
        `),dl(),Ew(42,`
        `),Pi(43,`app-docs-example`,4),Ew(44,`
          `),Pi(45,`div`,5),Ew(46,`
            `),Rh(47,`input`,6),Ew(48,`
            `),Pi(49,`label`,7),Ew(50,`Email address`),dl(),Ew(51,`
          `),dl(),Ew(52,`
          `),Pi(53,`div`,8),Ew(54,`
            `),Rh(55,`input`,9),Ew(56,`
            `),Pi(57,`label`,10),Ew(58,`Password`),dl(),Ew(59,`
          `),dl(),Ew(60,`
        `),dl(),Ew(61,`
        `),Pi(62,`p`,3),Ew(63,`
          When there's a `),Pi(64,`code`),Ew(65,`value`),dl(),Ew(66,` already defined, `),Pi(67,`code`),Ew(68,`<label>`),dl(),Ew(69,`
          s will automatically adjust to their floated position.
        `),dl(),Ew(70,`
        `),Pi(71,`app-docs-example`,4),Ew(72,`
          `),Pi(73,`form`,11),Ew(74,`
            `),Rh(75,`input`,12),Ew(76,`
            `),Pi(77,`label`,13),Ew(78,`Input with value`),dl(),Ew(79,`
          `),dl(),Ew(80,`
        `),dl(),Ew(81,`
      `),dl(),Ew(82,`
    `),dl(),Ew(83,`
  `),dl(),Ew(84,`
  `),Pi(85,`c-col`,0),Ew(86,`
    `),Pi(87,`c-card`,2),Ew(88,`
      `),Pi(89,`c-card-header`),Ew(90,`
        `),Pi(91,`strong`),Ew(92,`Angular Floating labels`),dl(),Ew(93,` `),Pi(94,`small`),Ew(95,`Textareas`),dl(),Ew(96,`
      `),dl(),Ew(97,`
      `),Pi(98,`c-card-body`),Ew(99,`
        `),Pi(100,`p`,3),Ew(101,`
          By default, `),Pi(102,`code`),Ew(103,`<textarea>`),dl(),Ew(104,`s will be the same height as
          `),Pi(105,`code`),Ew(106,`<input>`),dl(),Ew(107,`s.
        `),dl(),Ew(108,`
        `),Pi(109,`app-docs-example`,14),Ew(110,`
          `),Pi(111,`div`,8),Ew(112,`
            `),Rh(113,`textarea`,15),Ew(114,`
            `),Pi(115,`label`,16),Ew(116,`Comments`),dl(),Ew(117,`
          `),dl(),Ew(118,`
        `),dl(),Ew(119,`
        `),Pi(120,`p`,3),Ew(121,`
          To set a custom height on your `),Pi(122,`code`),Ew(123,`<textarea>`),dl(),Ew(124,`, do not use the
          `),Pi(125,`code`),Ew(126,`rows`),dl(),Ew(127,` attribute. Instead, set an explicit `),Pi(128,`code`),Ew(129,`height`),dl(),Ew(130,` (either
          inline or via custom CSS).
        `),dl(),Ew(131,`
        `),Pi(132,`app-docs-example`,14),Ew(133,`
          `),Pi(134,`div`,8),Ew(135,`
            `),Rh(136,`textarea`,17),Ew(137,`
            `),Pi(138,`label`,18),Ew(139,`Comments`),dl(),Ew(140,`
          `),dl(),Ew(141,`
        `),dl(),Ew(142,`
      `),dl(),Ew(143,`
    `),dl(),Ew(144,`
  `),dl(),Ew(145,`
  `),Pi(146,`c-col`,0),Ew(147,`
    `),Pi(148,`c-card`,2),Ew(149,`
      `),Pi(150,`c-card-header`),Ew(151,`
        `),Pi(152,`strong`),Ew(153,`Angular Floating labels`),dl(),Ew(154,` `),Pi(155,`small`),Ew(156,`Selects`),dl(),Ew(157,`
      `),dl(),Ew(158,`
      `),Pi(159,`c-card-body`),Ew(160,`
        `),Pi(161,`p`,3),Ew(162,`
          Other than `),Pi(163,`code`),Ew(164,`<input>`),dl(),Ew(165,`, floating labels are only available on
          `),Pi(166,`code`),Ew(167,`<cSelect>`),dl(),Ew(168,`s. They work in the same way, but unlike
          `),Pi(169,`code`),Ew(170,`<input>`),dl(),Ew(171,`s, they'll always show the
          `),Pi(172,`code`),Ew(173,`<label>`),dl(),Ew(174,` in its floated state.
          `),Pi(175,`strong`),Ew(176,`
            Selects with `),Pi(177,`code`),Ew(178,`size`),dl(),Ew(179,` and `),Pi(180,`code`),Ew(181,`multiple`),dl(),Ew(182,` are not supported.
          `),dl(),Ew(183,`
        `),dl(),Ew(184,`
        `),Pi(185,`app-docs-example`,19),Ew(186,`
          `),Pi(187,`div`,8),Ew(188,`
            `),Pi(189,`select`,20),Ew(190,`
              `),Pi(191,`option`),Ew(192,`Open this select menu`),dl(),Ew(193,`
              `),Pi(194,`option`,21),Ew(195,`One`),dl(),Ew(196,`
              `),Pi(197,`option`,22),Ew(198,`Two`),dl(),Ew(199,`
              `),Pi(200,`option`,23),Ew(201,`Three`),dl(),Ew(202,`
            `),dl(),Ew(203,`
            `),Pi(204,`label`,24),Ew(205,`Works with selects`),dl(),Ew(206,`
          `),dl(),Ew(207,`
        `),dl(),Ew(208,`
      `),dl(),Ew(209,`
    `),dl(),Ew(210,`
  `),dl(),Ew(211,`
  `),Pi(212,`c-col`,0),Ew(213,`
    `),Pi(214,`c-card`,2),Ew(215,`
      `),Pi(216,`c-card-header`),Ew(217,`
        `),Pi(218,`strong`),Ew(219,`Angular Floating labels`),dl(),Ew(220,` `),Pi(221,`small`),Ew(222,`Layout`),dl(),Ew(223,`
      `),dl(),Ew(224,`
      `),Pi(225,`c-card-body`),Ew(226,`
        `),Pi(227,`p`,3),Ew(228,`
          When working with the CoreUI for Bootstrap grid system, be sure to place form elements
          within column classes.
        `),dl(),Ew(229,`
        `),Pi(230,`app-docs-example`,25),Ew(231,`
          `),Pi(232,`c-row`,26),Ew(233,`
            `),Pi(234,`c-col`,27),Ew(235,`
              `),Pi(236,`div`,8),Ew(237,`
                `),Rh(238,`input`,28),Ew(239,`
                `),Pi(240,`label`,29),Ew(241,`Email address`),dl(),Ew(242,`
              `),dl(),Ew(243,`
            `),dl(),Ew(244,`
            `),Pi(245,`c-col`,27),Ew(246,`
              `),Pi(247,`div`,8),Ew(248,`
                `),Pi(249,`select`,30),Ew(250,`
                  `),Pi(251,`option`),Ew(252,`Open this select menu`),dl(),Ew(253,`
                  `),Pi(254,`option`,21),Ew(255,`One`),dl(),Ew(256,`
                  `),Pi(257,`option`,22),Ew(258,`Two`),dl(),Ew(259,`
                  `),Pi(260,`option`,23),Ew(261,`Three`),dl(),Ew(262,`
                `),dl(),Ew(263,`
                `),Pi(264,`label`,31),Ew(265,`Works with selects`),dl(),Ew(266,`
              `),dl(),Ew(267,`
            `),dl(),Ew(268,`
          `),dl(),Ew(269,`
        `),dl(),Ew(270,`
      `),dl(),Ew(271,`
    `),dl(),Ew(272,`
  `),dl(),Ew(273,`
`),dl()),l&2&&(QI(45),Ah(`cFormFloating`,!0),QI(91),Jh(`height`,100,`px`),QI(96),Ah(`gutter`,Ow(4,G)))},dependencies:[Y1,yy,Qi,py,Ji,k,z1,U1,V1,ei,Xn,Yn,Kn,qn,Qn,on,B1,W1,X1,c],encapsulation:2})}};export{O as FloatingLabelsComponent};