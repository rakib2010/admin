import{Gr as ul,L as ID,Un as hw,_t as Pi,on as _h,p as Ch,t as $I,ut as Nw}from"./chunk-BSgQlS93.js";import{En as uN,It as ey,Nt as dN,X as Qi,ft as Xf,k as Ji,st as V1,vn as rn,xn as sy}from"./main-37K4GJAM.js";import{i as k}from"./chunk-FodikvMx.js";import{t as c}from"./chunk-5BukuvC5.js";var l=()=>[];var f=class o{static{this.ɵfac=function(m){return new(m||o)}}static{this.ɵcmp=ID({type:o,selectors:[[`app-paginations`]],decls:413,vars:74,consts:[[`xs`,`12`],[`href`,`components/pagination`,`title`,`Pagination`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/pagination`],[`aria-label`,`Page navigation example`],[`cPageLink`,``,3,`routerLink`],[`href`,`components/pagination#working-with-icons`],[`aria-label`,`Previous`],[`aria-hidden`,`true`],[`aria-label`,`Next`],[`href`,`components/pagination#disabled-and-active-states`],[`aria-label`,`Previous`,3,`disabled`],[3,`active`],[`href`,`components/pagination#sizing`],[`aria-label`,`Page navigation example`,`size`,`lg`],[`aria-label`,`Page navigation example`,`size`,`sm`],[`href`,`https://coreui.io/docs/utilities/flex/`],[`href`,`components/pagination#aligment`],[`align`,`center`,`aria-label`,`Page navigation example`],[3,`disabled`],[`align`,`end`,`aria-label`,`Page navigation example`]],template:function(m,L){m&1&&(Pi(0,`c-row`),hw(1,`
  `),Pi(2,`c-col`,0),hw(3,`
    `),_h(4,`app-docs-components`,1),hw(5,`
    `),Pi(6,`c-card`,2),hw(7,`
      `),Pi(8,`c-card-header`),hw(9,`
        `),Pi(10,`strong`),hw(11,`Angular Pagination`),ul(),hw(12,`
      `),ul(),hw(13,`
      `),Pi(14,`c-card-body`),hw(15,`
        `),Pi(16,`p`,3),hw(17,`
          We use a large block of connected links for our pagination, making links hard to miss
          and easily scalable\u2014all while providing large hit areas. Pagination is built with list
          HTML elements so screen readers can announce the number of available links. Use a
          wrapping `),Pi(18,`code`),hw(19,`<nav>`),ul(),hw(20,` element to identify it as a navigation section to
          screen readers and other assistive technologies.
        `),ul(),hw(21,`
        `),Pi(22,`p`,3),hw(23,`
          In addition, as pages likely have more than one such navigation section, it's
          advisable to provide a descriptive `),Pi(24,`code`),hw(25,`aria-label`),ul(),hw(26,` for the
          `),Pi(27,`code`),hw(28,`<nav>`),ul(),hw(29,` to reflect its purpose. For example, if the pagination
          component is used to navigate between a set of search results, an appropriate label
          could be `),Pi(30,`code`),hw(31,`aria-label="Search results pages"`),ul(),hw(32,`.
        `),ul(),hw(33,`
        `),Pi(34,`app-docs-example`,4),hw(35,`
          `),Pi(36,`c-pagination`,5),hw(37,`
            `),Pi(38,`c-page-item`),hw(39,`
              `),Pi(40,`a`,6),hw(41,`Previous`),ul(),hw(42,`
            `),ul(),hw(43,`
            `),Pi(44,`c-page-item`),hw(45,`
              `),Pi(46,`a`,6),hw(47,`1`),ul(),hw(48,`
            `),ul(),hw(49,`
            `),Pi(50,`c-page-item`),hw(51,`
              `),Pi(52,`a`,6),hw(53,`2`),ul(),hw(54,`
            `),ul(),hw(55,`
            `),Pi(56,`c-page-item`),hw(57,`
              `),Pi(58,`a`,6),hw(59,`3`),ul(),hw(60,`
            `),ul(),hw(61,`
            `),Pi(62,`c-page-item`),hw(63,`
              `),Pi(64,`a`,6),hw(65,`Next`),ul(),hw(66,`
            `),ul(),hw(67,`
          `),ul(),hw(68,`
        `),ul(),hw(69,`
      `),ul(),hw(70,`
    `),ul(),hw(71,`
  `),ul(),hw(72,`
  `),Pi(73,`c-col`,0),hw(74,`
    `),Pi(75,`c-card`,2),hw(76,`
      `),Pi(77,`c-card-header`),hw(78,`
        `),Pi(79,`strong`),hw(80,`Angular Pagination`),ul(),hw(81,` `),Pi(82,`small`),hw(83,`Working with icons`),ul(),hw(84,`
      `),ul(),hw(85,`
      `),Pi(86,`c-card-body`),hw(87,`
        `),Pi(88,`p`,3),hw(89,`
          Looking to use an icon or symbol in place of text for some pagination links? Be sure
          to provide proper screen reader support with `),Pi(90,`code`),hw(91,`aria`),ul(),hw(92,` attributes.
        `),ul(),hw(93,`
        `),Pi(94,`app-docs-example`,7),hw(95,`
          `),Pi(96,`c-pagination`,5),hw(97,`
            `),Pi(98,`c-page-item`,8),hw(99,`
              `),Pi(100,`a`,6)(101,`span`,9),hw(102,`«`),ul()(),hw(103,`
            `),ul(),hw(104,`
            `),Pi(105,`c-page-item`),hw(106,`
              `),Pi(107,`a`,6),hw(108,`1`),ul(),hw(109,`
            `),ul(),hw(110,`
            `),Pi(111,`c-page-item`),hw(112,`
              `),Pi(113,`a`,6),hw(114,`2`),ul(),hw(115,`
            `),ul(),hw(116,`
            `),Pi(117,`c-page-item`),hw(118,`
              `),Pi(119,`a`,6),hw(120,`3`),ul(),hw(121,`
            `),ul(),hw(122,`
            `),Pi(123,`c-page-item`,10),hw(124,`
              `),Pi(125,`a`,6)(126,`span`,9),hw(127,`»`),ul()(),hw(128,`
            `),ul(),hw(129,`
          `),ul(),hw(130,`
        `),ul(),hw(131,`
      `),ul(),hw(132,`
    `),ul(),hw(133,`
  `),ul(),hw(134,`
  `),Pi(135,`c-col`,0),hw(136,`
    `),Pi(137,`c-card`,2),hw(138,`
      `),Pi(139,`c-card-header`),hw(140,`
        `),Pi(141,`strong`),hw(142,`Angular Pagination`),ul(),hw(143,` `),Pi(144,`small`),hw(145,`Disabled and active states`),ul(),hw(146,`
      `),ul(),hw(147,`
      `),Pi(148,`c-card-body`),hw(149,`
        `),Pi(150,`p`,3),hw(151,`
          Pagination links are customizable for different circumstances. Use
          `),Pi(152,`code`),hw(153,`disabled`),ul(),hw(154,` for links that appear un-clickable and `),Pi(155,`code`),hw(156,`.active`),ul(),hw(157,` to
          indicate the current page.
        `),ul(),hw(158,`
        `),Pi(159,`p`,3),hw(160,`
          While the `),Pi(161,`code`),hw(162,`disabled`),ul(),hw(163,` prop uses `),Pi(164,`code`),hw(165,`pointer-events: none`),ul(),hw(166,` to
          `),Pi(167,`em`),hw(168,`try`),ul(),hw(169,` to disable the link functionality of `),Pi(170,`code`),hw(171,`<a>`),ul(),hw(172,`s, that CSS
          property is not yet standardized and doesn'taccount for keyboard navigation. As
          such, we always add `),Pi(173,`code`),hw(174,`tabindex="-1"`),ul(),hw(175,` on disabled links and use
          custom JavaScript to fully disable their functionality.
        `),ul(),hw(176,`
        `),Pi(177,`app-docs-example`,11),hw(178,`
          `),Pi(179,`c-pagination`,5),hw(180,`
            `),Pi(181,`c-page-item`,12),hw(182,`
              `),Pi(183,`a`,6)(184,`span`,9),hw(185,`«`),ul()(),hw(186,`
            `),ul(),hw(187,`
            `),Pi(188,`c-page-item`,13),hw(189,`
              `),Pi(190,`a`,6),hw(191,`1`),ul(),hw(192,`
            `),ul(),hw(193,`
            `),Pi(194,`c-page-item`),hw(195,`
              `),Pi(196,`a`,6),hw(197,`2`),ul(),hw(198,`
            `),ul(),hw(199,`
            `),Pi(200,`c-page-item`),hw(201,`
              `),Pi(202,`a`,6),hw(203,`3`),ul(),hw(204,`
            `),ul(),hw(205,`
            `),Pi(206,`c-page-item`,10),hw(207,`
              `),Pi(208,`a`,6)(209,`span`,9),hw(210,`»`),ul()(),hw(211,`
            `),ul(),hw(212,`
          `),ul(),hw(213,`
        `),ul(),hw(214,`
      `),ul(),hw(215,`
    `),ul(),hw(216,`
  `),ul(),hw(217,`
  `),Pi(218,`c-col`,0),hw(219,`
    `),Pi(220,`c-card`,2),hw(221,`
      `),Pi(222,`c-card-header`),hw(223,`
        `),Pi(224,`strong`),hw(225,`Angular Pagination`),ul(),hw(226,` `),Pi(227,`small`),hw(228,`Sizing`),ul(),hw(229,`
      `),ul(),hw(230,`
      `),Pi(231,`c-card-body`),hw(232,`
        `),Pi(233,`p`,3),hw(234,`
          Fancy larger or smaller pagination? Add `),Pi(235,`code`),hw(236,`sizing="lg"`),ul(),hw(237,` or
          `),Pi(238,`code`),hw(239,`sizing="sm"`),ul(),hw(240,` for additional sizes.
        `),ul(),hw(241,`
        `),Pi(242,`app-docs-example`,14),hw(243,`
          `),Pi(244,`c-pagination`,15),hw(245,`
            `),Pi(246,`c-page-item`),hw(247,`
              `),Pi(248,`a`,6),hw(249,`Previous`),ul(),hw(250,`
            `),ul(),hw(251,`
            `),Pi(252,`c-page-item`),hw(253,`
              `),Pi(254,`a`,6),hw(255,`1`),ul(),hw(256,`
            `),ul(),hw(257,`
            `),Pi(258,`c-page-item`),hw(259,`
              `),Pi(260,`a`,6),hw(261,`2`),ul(),hw(262,`
            `),ul(),hw(263,`
            `),Pi(264,`c-page-item`),hw(265,`
              `),Pi(266,`a`,6),hw(267,`3`),ul(),hw(268,`
            `),ul(),hw(269,`
            `),Pi(270,`c-page-item`),hw(271,`
              `),Pi(272,`a`,6),hw(273,`Next`),ul(),hw(274,`
            `),ul(),hw(275,`
          `),ul(),hw(276,`
        `),ul(),hw(277,`
        `),Pi(278,`app-docs-example`,14),hw(279,`
          `),Pi(280,`c-pagination`,16),hw(281,`
            `),Pi(282,`c-page-item`),hw(283,`
              `),Pi(284,`a`,6),hw(285,`Previous`),ul(),hw(286,`
            `),ul(),hw(287,`
            `),Pi(288,`c-page-item`),hw(289,`
              `),Pi(290,`a`,6),hw(291,`1`),ul(),hw(292,`
            `),ul(),hw(293,`
            `),Pi(294,`c-page-item`),hw(295,`
              `),Pi(296,`a`,6),hw(297,`2`),ul(),hw(298,`
            `),ul(),hw(299,`
            `),Pi(300,`c-page-item`),hw(301,`
              `),Pi(302,`a`,6),hw(303,`3`),ul(),hw(304,`
            `),ul(),hw(305,`
            `),Pi(306,`c-page-item`),hw(307,`
              `),Pi(308,`a`,6),hw(309,`Next`),ul(),hw(310,`
            `),ul(),hw(311,`
          `),ul(),hw(312,`
        `),ul(),hw(313,`
      `),ul(),hw(314,`
    `),ul(),hw(315,`
  `),ul(),hw(316,`
  `),Pi(317,`c-col`,0),hw(318,`
    `),Pi(319,`c-card`,2),hw(320,`
      `),Pi(321,`c-card-header`),hw(322,`
        `),Pi(323,`strong`),hw(324,`Angular Pagination`),ul(),hw(325,` `),Pi(326,`small`),hw(327,`Alignment`),ul(),hw(328,`
      `),ul(),hw(329,`
      `),Pi(330,`c-card-body`),hw(331,`
        `),Pi(332,`p`,3),hw(333,`
          Change the alignment of pagination components with
          `),Pi(334,`a`,17),hw(335,`flexbox utilities`),ul(),hw(336,`.
        `),ul(),hw(337,`
        `),Pi(338,`app-docs-example`,18),hw(339,`
          `),Pi(340,`c-pagination`,19),hw(341,`
            `),Pi(342,`c-page-item`,20),hw(343,`
              `),Pi(344,`a`,6),hw(345,`Previous`),ul(),hw(346,`
            `),ul(),hw(347,`
            `),Pi(348,`c-page-item`),hw(349,`
              `),Pi(350,`a`,6),hw(351,`1`),ul(),hw(352,`
            `),ul(),hw(353,`
            `),Pi(354,`c-page-item`),hw(355,`
              `),Pi(356,`a`,6),hw(357,`2`),ul(),hw(358,`
            `),ul(),hw(359,`
            `),Pi(360,`c-page-item`),hw(361,`
              `),Pi(362,`a`,6),hw(363,`3`),ul(),hw(364,`
            `),ul(),hw(365,`
            `),Pi(366,`c-page-item`),hw(367,`
              `),Pi(368,`a`,6),hw(369,`Next`),ul(),hw(370,`
            `),ul(),hw(371,`
          `),ul(),hw(372,`
        `),ul(),hw(373,`
        `),Pi(374,`app-docs-example`,18),hw(375,`
          `),Pi(376,`c-pagination`,21),hw(377,`
            `),Pi(378,`c-page-item`,20),hw(379,`
              `),Pi(380,`a`,6),hw(381,`Previous`),ul(),hw(382,`
            `),ul(),hw(383,`
            `),Pi(384,`c-page-item`),hw(385,`
              `),Pi(386,`a`,6),hw(387,`1`),ul(),hw(388,`
            `),ul(),hw(389,`
            `),Pi(390,`c-page-item`),hw(391,`
              `),Pi(392,`a`,6),hw(393,`2`),ul(),hw(394,`
            `),ul(),hw(395,`
            `),Pi(396,`c-page-item`),hw(397,`
              `),Pi(398,`a`,6),hw(399,`3`),ul(),hw(400,`
            `),ul(),hw(401,`
            `),Pi(402,`c-page-item`),hw(403,`
              `),Pi(404,`a`,6),hw(405,`Next`),ul(),hw(406,`
            `),ul(),hw(407,`
          `),ul(),hw(408,`
        `),ul(),hw(409,`
      `),ul(),hw(410,`
    `),ul(),hw(411,`
  `),ul(),hw(412,`
`),ul()),m&2&&($I(40),Ch(`routerLink`,Nw(39,l)),$I(6),Ch(`routerLink`,Nw(40,l)),$I(6),Ch(`routerLink`,Nw(41,l)),$I(6),Ch(`routerLink`,Nw(42,l)),$I(6),Ch(`routerLink`,Nw(43,l)),$I(36),Ch(`routerLink`,Nw(44,l)),$I(7),Ch(`routerLink`,Nw(45,l)),$I(6),Ch(`routerLink`,Nw(46,l)),$I(6),Ch(`routerLink`,Nw(47,l)),$I(6),Ch(`routerLink`,Nw(48,l)),$I(56),Ch(`disabled`,!0),$I(2),Ch(`routerLink`,Nw(49,l)),$I(5),Ch(`active`,!0),$I(2),Ch(`routerLink`,Nw(50,l)),$I(6),Ch(`routerLink`,Nw(51,l)),$I(6),Ch(`routerLink`,Nw(52,l)),$I(6),Ch(`routerLink`,Nw(53,l)),$I(40),Ch(`routerLink`,Nw(54,l)),$I(6),Ch(`routerLink`,Nw(55,l)),$I(6),Ch(`routerLink`,Nw(56,l)),$I(6),Ch(`routerLink`,Nw(57,l)),$I(6),Ch(`routerLink`,Nw(58,l)),$I(12),Ch(`routerLink`,Nw(59,l)),$I(6),Ch(`routerLink`,Nw(60,l)),$I(6),Ch(`routerLink`,Nw(61,l)),$I(6),Ch(`routerLink`,Nw(62,l)),$I(6),Ch(`routerLink`,Nw(63,l)),$I(34),Ch(`disabled`,!0),$I(2),Ch(`routerLink`,Nw(64,l)),$I(6),Ch(`routerLink`,Nw(65,l)),$I(6),Ch(`routerLink`,Nw(66,l)),$I(6),Ch(`routerLink`,Nw(67,l)),$I(6),Ch(`routerLink`,Nw(68,l)),$I(10),Ch(`disabled`,!0),$I(2),Ch(`routerLink`,Nw(69,l)),$I(6),Ch(`routerLink`,Nw(70,l)),$I(6),Ch(`routerLink`,Nw(71,l)),$I(6),Ch(`routerLink`,Nw(72,l)),$I(6),Ch(`routerLink`,Nw(73,l)))},dependencies:[V1,sy,Qi,ey,Ji,k,uN,dN,Xf,rn,c],encapsulation:2})}};export{f as PaginationsComponent};