import{Jn as fl,Jr as tg,at as Lh,en as VC,ht as ND,pn as XE,pr as ji,qt as TC,wt as Oh}from"./chunk-CNvvMoDe.js";import{A as L1,D as K1,Dn as uy,Gt as j1,T as Ji,U as Qi,_ as H1,ct as Y1,jn as vy,rt as V1,zn as z1}from"./main-KR47Z6Z4.js";import{i as k}from"./chunk-BoQ4iLTD.js";import{t as c}from"./chunk-CqpfDRQx.js";import{S as qn,_ as ei,b as on,f as Xn,i as Kn,m as Yn,s as Qn}from"./chunk-CGCxv84v.js";var G=()=>({g:2});var O=class m{static{this.ɵfac=function(l){return new(l||m)}}static{this.ɵcmp=ND({type:m,selectors:[[`app-floating-labels`]],decls:274,vars:5,consts:[[`xs`,`12`],[`href`,`forms/floating-labels`,`title`,`Floating Labels`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`forms/floating-labels`],[1,`mb-3`,3,`cFormFloating`],[`cFormControl`,``,`id`,`floatingInput`,`placeholder`,`name@example.com`,`type`,`email`],[`cLabel`,``,`for`,`floatingInput`],[`cFormFloating`,``],[`cFormControl`,``,`id`,`floatingPassword`,`placeholder`,`Password`,`type`,`password`],[`cLabel`,``,`for`,`floatingPassword`],[`cForm`,``,`cFormFloating`,``],[`cFormControl`,``,`id`,`floatingInputValue`,`placeholder`,`name@example.com`,`type`,`email`,`value`,`test@example.com`],[`cLabel`,``,`for`,`floatingInputValue`],[`href`,`forms/floating-labels#textareas`],[`cFormControl`,``,`id`,`floatingTextarea`,`placeholder`,`Leave a comment here`,`type`,`text`],[`cLabel`,``,`for`,`floatingTextarea`],[`cFormControl`,``,`id`,`floatingTextarea2`,`placeholder`,`Leave a comment here`],[`cLabel`,``,`for`,`floatingTextarea2`],[`href`,`forms/floating-labels#selects`],[`aria-label`,`Floating label select example`,`cSelect`,``,`id`,`floatingSelect`],[`value`,`1`],[`value`,`2`],[`value`,`3`],[`cLabel`,``,`for`,`floatingSelect`],[`href`,`forms/floating-labels#layout`],[3,`gutter`],[`md`,``],[`cFormControl`,``,`id`,`floatingInputGrid`,`placeholder`,`name@example.com`,`type`,`email`,`value`,`email@example.com`],[`cLabel`,``,`for`,`floatingInputGrid`],[`aria-label`,`Floating label select example`,`cSelect`,``,`id`,`floatingSelectGrid`],[`cLabel`,``,`for`,`floatingSelectGrid`]],template:function(l,P){l&1&&(ji(0,`c-row`),TC(1,`
  `),ji(2,`c-col`,0),TC(3,`
    `),Lh(4,`app-docs-components`,1),TC(5,`
    `),ji(6,`c-card`,2),TC(7,`
      `),ji(8,`c-card-header`),TC(9,`
        `),ji(10,`strong`),TC(11,`Angular Floating labels`),fl(),TC(12,`
      `),fl(),TC(13,`
      `),ji(14,`c-card-body`),TC(15,`
        `),ji(16,`p`,3),TC(17,`
          Wrap a pair of `),ji(18,`code`),TC(19,`<cFormControl>`),fl(),TC(20,` and `),ji(21,`code`),TC(22,`<label>`),fl(),TC(23,`
          elements in `),ji(24,`code`),TC(25,`cFormControl`),fl(),TC(26,` to enable floating labels with textual form
          fields. A `),ji(27,`code`),TC(28,`placeholder`),fl(),TC(29,` is required on each `),ji(30,`code`),TC(31,`<input>`),fl(),TC(32,`
          as our method of CSS-only floating labels uses the `),ji(33,`code`),TC(34,`:placeholder-shown`),fl(),TC(35,`
          pseudo-element. Also note that the `),ji(36,`code`),TC(37,`<cFormControl>`),fl(),TC(38,` must come first so
          we can utilize a sibling selector (e.g., `),ji(39,`code`),TC(40,`~`),fl(),TC(41,`).
        `),fl(),TC(42,`
        `),ji(43,`app-docs-example`,4),TC(44,`
          `),ji(45,`div`,5),TC(46,`
            `),Lh(47,`input`,6),TC(48,`
            `),ji(49,`label`,7),TC(50,`Email address`),fl(),TC(51,`
          `),fl(),TC(52,`
          `),ji(53,`div`,8),TC(54,`
            `),Lh(55,`input`,9),TC(56,`
            `),ji(57,`label`,10),TC(58,`Password`),fl(),TC(59,`
          `),fl(),TC(60,`
        `),fl(),TC(61,`
        `),ji(62,`p`,3),TC(63,`
          When there's a `),ji(64,`code`),TC(65,`value`),fl(),TC(66,` already defined, `),ji(67,`code`),TC(68,`<label>`),fl(),TC(69,`
          s will automatically adjust to their floated position.
        `),fl(),TC(70,`
        `),ji(71,`app-docs-example`,4),TC(72,`
          `),ji(73,`form`,11),TC(74,`
            `),Lh(75,`input`,12),TC(76,`
            `),ji(77,`label`,13),TC(78,`Input with value`),fl(),TC(79,`
          `),fl(),TC(80,`
        `),fl(),TC(81,`
      `),fl(),TC(82,`
    `),fl(),TC(83,`
  `),fl(),TC(84,`
  `),ji(85,`c-col`,0),TC(86,`
    `),ji(87,`c-card`,2),TC(88,`
      `),ji(89,`c-card-header`),TC(90,`
        `),ji(91,`strong`),TC(92,`Angular Floating labels`),fl(),TC(93,` `),ji(94,`small`),TC(95,`Textareas`),fl(),TC(96,`
      `),fl(),TC(97,`
      `),ji(98,`c-card-body`),TC(99,`
        `),ji(100,`p`,3),TC(101,`
          By default, `),ji(102,`code`),TC(103,`<textarea>`),fl(),TC(104,`s will be the same height as
          `),ji(105,`code`),TC(106,`<input>`),fl(),TC(107,`s.
        `),fl(),TC(108,`
        `),ji(109,`app-docs-example`,14),TC(110,`
          `),ji(111,`div`,8),TC(112,`
            `),Lh(113,`textarea`,15),TC(114,`
            `),ji(115,`label`,16),TC(116,`Comments`),fl(),TC(117,`
          `),fl(),TC(118,`
        `),fl(),TC(119,`
        `),ji(120,`p`,3),TC(121,`
          To set a custom height on your `),ji(122,`code`),TC(123,`<textarea>`),fl(),TC(124,`, do not use the
          `),ji(125,`code`),TC(126,`rows`),fl(),TC(127,` attribute. Instead, set an explicit `),ji(128,`code`),TC(129,`height`),fl(),TC(130,` (either
          inline or via custom CSS).
        `),fl(),TC(131,`
        `),ji(132,`app-docs-example`,14),TC(133,`
          `),ji(134,`div`,8),TC(135,`
            `),Lh(136,`textarea`,17),TC(137,`
            `),ji(138,`label`,18),TC(139,`Comments`),fl(),TC(140,`
          `),fl(),TC(141,`
        `),fl(),TC(142,`
      `),fl(),TC(143,`
    `),fl(),TC(144,`
  `),fl(),TC(145,`
  `),ji(146,`c-col`,0),TC(147,`
    `),ji(148,`c-card`,2),TC(149,`
      `),ji(150,`c-card-header`),TC(151,`
        `),ji(152,`strong`),TC(153,`Angular Floating labels`),fl(),TC(154,` `),ji(155,`small`),TC(156,`Selects`),fl(),TC(157,`
      `),fl(),TC(158,`
      `),ji(159,`c-card-body`),TC(160,`
        `),ji(161,`p`,3),TC(162,`
          Other than `),ji(163,`code`),TC(164,`<input>`),fl(),TC(165,`, floating labels are only available on
          `),ji(166,`code`),TC(167,`<cSelect>`),fl(),TC(168,`s. They work in the same way, but unlike
          `),ji(169,`code`),TC(170,`<input>`),fl(),TC(171,`s, they'll always show the
          `),ji(172,`code`),TC(173,`<label>`),fl(),TC(174,` in its floated state.
          `),ji(175,`strong`),TC(176,`
            Selects with `),ji(177,`code`),TC(178,`size`),fl(),TC(179,` and `),ji(180,`code`),TC(181,`multiple`),fl(),TC(182,` are not supported.
          `),fl(),TC(183,`
        `),fl(),TC(184,`
        `),ji(185,`app-docs-example`,19),TC(186,`
          `),ji(187,`div`,8),TC(188,`
            `),ji(189,`select`,20),TC(190,`
              `),ji(191,`option`),TC(192,`Open this select menu`),fl(),TC(193,`
              `),ji(194,`option`,21),TC(195,`One`),fl(),TC(196,`
              `),ji(197,`option`,22),TC(198,`Two`),fl(),TC(199,`
              `),ji(200,`option`,23),TC(201,`Three`),fl(),TC(202,`
            `),fl(),TC(203,`
            `),ji(204,`label`,24),TC(205,`Works with selects`),fl(),TC(206,`
          `),fl(),TC(207,`
        `),fl(),TC(208,`
      `),fl(),TC(209,`
    `),fl(),TC(210,`
  `),fl(),TC(211,`
  `),ji(212,`c-col`,0),TC(213,`
    `),ji(214,`c-card`,2),TC(215,`
      `),ji(216,`c-card-header`),TC(217,`
        `),ji(218,`strong`),TC(219,`Angular Floating labels`),fl(),TC(220,` `),ji(221,`small`),TC(222,`Layout`),fl(),TC(223,`
      `),fl(),TC(224,`
      `),ji(225,`c-card-body`),TC(226,`
        `),ji(227,`p`,3),TC(228,`
          When working with the CoreUI for Bootstrap grid system, be sure to place form elements
          within column classes.
        `),fl(),TC(229,`
        `),ji(230,`app-docs-example`,25),TC(231,`
          `),ji(232,`c-row`,26),TC(233,`
            `),ji(234,`c-col`,27),TC(235,`
              `),ji(236,`div`,8),TC(237,`
                `),Lh(238,`input`,28),TC(239,`
                `),ji(240,`label`,29),TC(241,`Email address`),fl(),TC(242,`
              `),fl(),TC(243,`
            `),fl(),TC(244,`
            `),ji(245,`c-col`,27),TC(246,`
              `),ji(247,`div`,8),TC(248,`
                `),ji(249,`select`,30),TC(250,`
                  `),ji(251,`option`),TC(252,`Open this select menu`),fl(),TC(253,`
                  `),ji(254,`option`,21),TC(255,`One`),fl(),TC(256,`
                  `),ji(257,`option`,22),TC(258,`Two`),fl(),TC(259,`
                  `),ji(260,`option`,23),TC(261,`Three`),fl(),TC(262,`
                `),fl(),TC(263,`
                `),ji(264,`label`,31),TC(265,`Works with selects`),fl(),TC(266,`
              `),fl(),TC(267,`
            `),fl(),TC(268,`
          `),fl(),TC(269,`
        `),fl(),TC(270,`
      `),fl(),TC(271,`
    `),fl(),TC(272,`
  `),fl(),TC(273,`
`),fl()),l&2&&(XE(45),Oh(`cFormFloating`,!0),XE(91),tg(`height`,100,`px`),XE(96),Oh(`gutter`,VC(4,G)))},dependencies:[K1,vy,Qi,uy,Ji,k,H1,j1,z1,ei,Xn,Yn,Kn,qn,Qn,on,L1,V1,Y1,c],encapsulation:2})}};export{O as FloatingLabelsComponent};