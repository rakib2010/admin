import{Gr as ul,Gt as Wh,L as ID,Un as hw,_t as Pi,on as _h,p as Ch,t as $I,ut as Nw}from"./chunk-BSgQlS93.js";import{H as O1,It as ey,Jt as j1,X as Qi,Xt as k1,at as U1,k as Ji,lt as W1,s as B1,st as V1,xn as sy}from"./main-37K4GJAM.js";import{i as k}from"./chunk-FodikvMx.js";import{t as c}from"./chunk-5BukuvC5.js";import{S as qn,_ as ei,b as on,f as Xn,i as Kn,m as Yn,s as Qn}from"./chunk-CW1XgXNn.js";var G=()=>({g:2});var O=class m{static{this.ɵfac=function(l){return new(l||m)}}static{this.ɵcmp=ID({type:m,selectors:[[`app-floating-labels`]],decls:274,vars:5,consts:[[`xs`,`12`],[`href`,`forms/floating-labels`,`title`,`Floating Labels`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`forms/floating-labels`],[1,`mb-3`,3,`cFormFloating`],[`cFormControl`,``,`id`,`floatingInput`,`placeholder`,`name@example.com`,`type`,`email`],[`cLabel`,``,`for`,`floatingInput`],[`cFormFloating`,``],[`cFormControl`,``,`id`,`floatingPassword`,`placeholder`,`Password`,`type`,`password`],[`cLabel`,``,`for`,`floatingPassword`],[`cForm`,``,`cFormFloating`,``],[`cFormControl`,``,`id`,`floatingInputValue`,`placeholder`,`name@example.com`,`type`,`email`,`value`,`test@example.com`],[`cLabel`,``,`for`,`floatingInputValue`],[`href`,`forms/floating-labels#textareas`],[`cFormControl`,``,`id`,`floatingTextarea`,`placeholder`,`Leave a comment here`,`type`,`text`],[`cLabel`,``,`for`,`floatingTextarea`],[`cFormControl`,``,`id`,`floatingTextarea2`,`placeholder`,`Leave a comment here`],[`cLabel`,``,`for`,`floatingTextarea2`],[`href`,`forms/floating-labels#selects`],[`aria-label`,`Floating label select example`,`cSelect`,``,`id`,`floatingSelect`],[`value`,`1`],[`value`,`2`],[`value`,`3`],[`cLabel`,``,`for`,`floatingSelect`],[`href`,`forms/floating-labels#layout`],[3,`gutter`],[`md`,``],[`cFormControl`,``,`id`,`floatingInputGrid`,`placeholder`,`name@example.com`,`type`,`email`,`value`,`email@example.com`],[`cLabel`,``,`for`,`floatingInputGrid`],[`aria-label`,`Floating label select example`,`cSelect`,``,`id`,`floatingSelectGrid`],[`cLabel`,``,`for`,`floatingSelectGrid`]],template:function(l,P){l&1&&(Pi(0,`c-row`),hw(1,`
  `),Pi(2,`c-col`,0),hw(3,`
    `),_h(4,`app-docs-components`,1),hw(5,`
    `),Pi(6,`c-card`,2),hw(7,`
      `),Pi(8,`c-card-header`),hw(9,`
        `),Pi(10,`strong`),hw(11,`Angular Floating labels`),ul(),hw(12,`
      `),ul(),hw(13,`
      `),Pi(14,`c-card-body`),hw(15,`
        `),Pi(16,`p`,3),hw(17,`
          Wrap a pair of `),Pi(18,`code`),hw(19,`<cFormControl>`),ul(),hw(20,` and `),Pi(21,`code`),hw(22,`<label>`),ul(),hw(23,`
          elements in `),Pi(24,`code`),hw(25,`cFormControl`),ul(),hw(26,` to enable floating labels with textual form
          fields. A `),Pi(27,`code`),hw(28,`placeholder`),ul(),hw(29,` is required on each `),Pi(30,`code`),hw(31,`<input>`),ul(),hw(32,`
          as our method of CSS-only floating labels uses the `),Pi(33,`code`),hw(34,`:placeholder-shown`),ul(),hw(35,`
          pseudo-element. Also note that the `),Pi(36,`code`),hw(37,`<cFormControl>`),ul(),hw(38,` must come first so
          we can utilize a sibling selector (e.g., `),Pi(39,`code`),hw(40,`~`),ul(),hw(41,`).
        `),ul(),hw(42,`
        `),Pi(43,`app-docs-example`,4),hw(44,`
          `),Pi(45,`div`,5),hw(46,`
            `),_h(47,`input`,6),hw(48,`
            `),Pi(49,`label`,7),hw(50,`Email address`),ul(),hw(51,`
          `),ul(),hw(52,`
          `),Pi(53,`div`,8),hw(54,`
            `),_h(55,`input`,9),hw(56,`
            `),Pi(57,`label`,10),hw(58,`Password`),ul(),hw(59,`
          `),ul(),hw(60,`
        `),ul(),hw(61,`
        `),Pi(62,`p`,3),hw(63,`
          When there's a `),Pi(64,`code`),hw(65,`value`),ul(),hw(66,` already defined, `),Pi(67,`code`),hw(68,`<label>`),ul(),hw(69,`
          s will automatically adjust to their floated position.
        `),ul(),hw(70,`
        `),Pi(71,`app-docs-example`,4),hw(72,`
          `),Pi(73,`form`,11),hw(74,`
            `),_h(75,`input`,12),hw(76,`
            `),Pi(77,`label`,13),hw(78,`Input with value`),ul(),hw(79,`
          `),ul(),hw(80,`
        `),ul(),hw(81,`
      `),ul(),hw(82,`
    `),ul(),hw(83,`
  `),ul(),hw(84,`
  `),Pi(85,`c-col`,0),hw(86,`
    `),Pi(87,`c-card`,2),hw(88,`
      `),Pi(89,`c-card-header`),hw(90,`
        `),Pi(91,`strong`),hw(92,`Angular Floating labels`),ul(),hw(93,` `),Pi(94,`small`),hw(95,`Textareas`),ul(),hw(96,`
      `),ul(),hw(97,`
      `),Pi(98,`c-card-body`),hw(99,`
        `),Pi(100,`p`,3),hw(101,`
          By default, `),Pi(102,`code`),hw(103,`<textarea>`),ul(),hw(104,`s will be the same height as
          `),Pi(105,`code`),hw(106,`<input>`),ul(),hw(107,`s.
        `),ul(),hw(108,`
        `),Pi(109,`app-docs-example`,14),hw(110,`
          `),Pi(111,`div`,8),hw(112,`
            `),_h(113,`textarea`,15),hw(114,`
            `),Pi(115,`label`,16),hw(116,`Comments`),ul(),hw(117,`
          `),ul(),hw(118,`
        `),ul(),hw(119,`
        `),Pi(120,`p`,3),hw(121,`
          To set a custom height on your `),Pi(122,`code`),hw(123,`<textarea>`),ul(),hw(124,`, do not use the
          `),Pi(125,`code`),hw(126,`rows`),ul(),hw(127,` attribute. Instead, set an explicit `),Pi(128,`code`),hw(129,`height`),ul(),hw(130,` (either
          inline or via custom CSS).
        `),ul(),hw(131,`
        `),Pi(132,`app-docs-example`,14),hw(133,`
          `),Pi(134,`div`,8),hw(135,`
            `),_h(136,`textarea`,17),hw(137,`
            `),Pi(138,`label`,18),hw(139,`Comments`),ul(),hw(140,`
          `),ul(),hw(141,`
        `),ul(),hw(142,`
      `),ul(),hw(143,`
    `),ul(),hw(144,`
  `),ul(),hw(145,`
  `),Pi(146,`c-col`,0),hw(147,`
    `),Pi(148,`c-card`,2),hw(149,`
      `),Pi(150,`c-card-header`),hw(151,`
        `),Pi(152,`strong`),hw(153,`Angular Floating labels`),ul(),hw(154,` `),Pi(155,`small`),hw(156,`Selects`),ul(),hw(157,`
      `),ul(),hw(158,`
      `),Pi(159,`c-card-body`),hw(160,`
        `),Pi(161,`p`,3),hw(162,`
          Other than `),Pi(163,`code`),hw(164,`<input>`),ul(),hw(165,`, floating labels are only available on
          `),Pi(166,`code`),hw(167,`<cSelect>`),ul(),hw(168,`s. They work in the same way, but unlike
          `),Pi(169,`code`),hw(170,`<input>`),ul(),hw(171,`s, they'll always show the
          `),Pi(172,`code`),hw(173,`<label>`),ul(),hw(174,` in its floated state.
          `),Pi(175,`strong`),hw(176,`
            Selects with `),Pi(177,`code`),hw(178,`size`),ul(),hw(179,` and `),Pi(180,`code`),hw(181,`multiple`),ul(),hw(182,` are not supported.
          `),ul(),hw(183,`
        `),ul(),hw(184,`
        `),Pi(185,`app-docs-example`,19),hw(186,`
          `),Pi(187,`div`,8),hw(188,`
            `),Pi(189,`select`,20),hw(190,`
              `),Pi(191,`option`),hw(192,`Open this select menu`),ul(),hw(193,`
              `),Pi(194,`option`,21),hw(195,`One`),ul(),hw(196,`
              `),Pi(197,`option`,22),hw(198,`Two`),ul(),hw(199,`
              `),Pi(200,`option`,23),hw(201,`Three`),ul(),hw(202,`
            `),ul(),hw(203,`
            `),Pi(204,`label`,24),hw(205,`Works with selects`),ul(),hw(206,`
          `),ul(),hw(207,`
        `),ul(),hw(208,`
      `),ul(),hw(209,`
    `),ul(),hw(210,`
  `),ul(),hw(211,`
  `),Pi(212,`c-col`,0),hw(213,`
    `),Pi(214,`c-card`,2),hw(215,`
      `),Pi(216,`c-card-header`),hw(217,`
        `),Pi(218,`strong`),hw(219,`Angular Floating labels`),ul(),hw(220,` `),Pi(221,`small`),hw(222,`Layout`),ul(),hw(223,`
      `),ul(),hw(224,`
      `),Pi(225,`c-card-body`),hw(226,`
        `),Pi(227,`p`,3),hw(228,`
          When working with the CoreUI for Bootstrap grid system, be sure to place form elements
          within column classes.
        `),ul(),hw(229,`
        `),Pi(230,`app-docs-example`,25),hw(231,`
          `),Pi(232,`c-row`,26),hw(233,`
            `),Pi(234,`c-col`,27),hw(235,`
              `),Pi(236,`div`,8),hw(237,`
                `),_h(238,`input`,28),hw(239,`
                `),Pi(240,`label`,29),hw(241,`Email address`),ul(),hw(242,`
              `),ul(),hw(243,`
            `),ul(),hw(244,`
            `),Pi(245,`c-col`,27),hw(246,`
              `),Pi(247,`div`,8),hw(248,`
                `),Pi(249,`select`,30),hw(250,`
                  `),Pi(251,`option`),hw(252,`Open this select menu`),ul(),hw(253,`
                  `),Pi(254,`option`,21),hw(255,`One`),ul(),hw(256,`
                  `),Pi(257,`option`,22),hw(258,`Two`),ul(),hw(259,`
                  `),Pi(260,`option`,23),hw(261,`Three`),ul(),hw(262,`
                `),ul(),hw(263,`
                `),Pi(264,`label`,31),hw(265,`Works with selects`),ul(),hw(266,`
              `),ul(),hw(267,`
            `),ul(),hw(268,`
          `),ul(),hw(269,`
        `),ul(),hw(270,`
      `),ul(),hw(271,`
    `),ul(),hw(272,`
  `),ul(),hw(273,`
`),ul()),l&2&&($I(45),Ch(`cFormFloating`,!0),$I(91),Wh(`height`,100,`px`),$I(96),Ch(`gutter`,Nw(4,G)))},dependencies:[V1,sy,Qi,ey,Ji,k,B1,k1,j1,ei,Xn,Yn,Kn,qn,Qn,on,O1,U1,W1,c],encapsulation:2})}};export{O as FloatingLabelsComponent};