import{Jn as fl,at as Lh,en as VC,ht as ND,pn as XE,pr as ji,qt as TC,wt as Oh}from"./chunk-CNvvMoDe.js";import{Bt as hN,D as K1,Dn as uy,Rt as gN,T as Ji,U as Qi,gn as rn,jn as vy,yt as ap}from"./main-KR47Z6Z4.js";import{i as k}from"./chunk-BoQ4iLTD.js";import{t as c}from"./chunk-CqpfDRQx.js";var l=()=>[];var f=class o{static{this.ɵfac=function(m){return new(m||o)}}static{this.ɵcmp=ND({type:o,selectors:[[`app-paginations`]],decls:413,vars:74,consts:[[`xs`,`12`],[`href`,`components/pagination`,`title`,`Pagination`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/pagination`],[`aria-label`,`Page navigation example`],[`cPageLink`,``,3,`routerLink`],[`href`,`components/pagination#working-with-icons`],[`aria-label`,`Previous`],[`aria-hidden`,`true`],[`aria-label`,`Next`],[`href`,`components/pagination#disabled-and-active-states`],[`aria-label`,`Previous`,3,`disabled`],[3,`active`],[`href`,`components/pagination#sizing`],[`aria-label`,`Page navigation example`,`size`,`lg`],[`aria-label`,`Page navigation example`,`size`,`sm`],[`href`,`https://coreui.io/docs/utilities/flex/`],[`href`,`components/pagination#aligment`],[`align`,`center`,`aria-label`,`Page navigation example`],[3,`disabled`],[`align`,`end`,`aria-label`,`Page navigation example`]],template:function(m,L){m&1&&(ji(0,`c-row`),TC(1,`
  `),ji(2,`c-col`,0),TC(3,`
    `),Lh(4,`app-docs-components`,1),TC(5,`
    `),ji(6,`c-card`,2),TC(7,`
      `),ji(8,`c-card-header`),TC(9,`
        `),ji(10,`strong`),TC(11,`Angular Pagination`),fl(),TC(12,`
      `),fl(),TC(13,`
      `),ji(14,`c-card-body`),TC(15,`
        `),ji(16,`p`,3),TC(17,`
          We use a large block of connected links for our pagination, making links hard to miss
          and easily scalable\u2014all while providing large hit areas. Pagination is built with list
          HTML elements so screen readers can announce the number of available links. Use a
          wrapping `),ji(18,`code`),TC(19,`<nav>`),fl(),TC(20,` element to identify it as a navigation section to
          screen readers and other assistive technologies.
        `),fl(),TC(21,`
        `),ji(22,`p`,3),TC(23,`
          In addition, as pages likely have more than one such navigation section, it's
          advisable to provide a descriptive `),ji(24,`code`),TC(25,`aria-label`),fl(),TC(26,` for the
          `),ji(27,`code`),TC(28,`<nav>`),fl(),TC(29,` to reflect its purpose. For example, if the pagination
          component is used to navigate between a set of search results, an appropriate label
          could be `),ji(30,`code`),TC(31,`aria-label="Search results pages"`),fl(),TC(32,`.
        `),fl(),TC(33,`
        `),ji(34,`app-docs-example`,4),TC(35,`
          `),ji(36,`c-pagination`,5),TC(37,`
            `),ji(38,`c-page-item`),TC(39,`
              `),ji(40,`a`,6),TC(41,`Previous`),fl(),TC(42,`
            `),fl(),TC(43,`
            `),ji(44,`c-page-item`),TC(45,`
              `),ji(46,`a`,6),TC(47,`1`),fl(),TC(48,`
            `),fl(),TC(49,`
            `),ji(50,`c-page-item`),TC(51,`
              `),ji(52,`a`,6),TC(53,`2`),fl(),TC(54,`
            `),fl(),TC(55,`
            `),ji(56,`c-page-item`),TC(57,`
              `),ji(58,`a`,6),TC(59,`3`),fl(),TC(60,`
            `),fl(),TC(61,`
            `),ji(62,`c-page-item`),TC(63,`
              `),ji(64,`a`,6),TC(65,`Next`),fl(),TC(66,`
            `),fl(),TC(67,`
          `),fl(),TC(68,`
        `),fl(),TC(69,`
      `),fl(),TC(70,`
    `),fl(),TC(71,`
  `),fl(),TC(72,`
  `),ji(73,`c-col`,0),TC(74,`
    `),ji(75,`c-card`,2),TC(76,`
      `),ji(77,`c-card-header`),TC(78,`
        `),ji(79,`strong`),TC(80,`Angular Pagination`),fl(),TC(81,` `),ji(82,`small`),TC(83,`Working with icons`),fl(),TC(84,`
      `),fl(),TC(85,`
      `),ji(86,`c-card-body`),TC(87,`
        `),ji(88,`p`,3),TC(89,`
          Looking to use an icon or symbol in place of text for some pagination links? Be sure
          to provide proper screen reader support with `),ji(90,`code`),TC(91,`aria`),fl(),TC(92,` attributes.
        `),fl(),TC(93,`
        `),ji(94,`app-docs-example`,7),TC(95,`
          `),ji(96,`c-pagination`,5),TC(97,`
            `),ji(98,`c-page-item`,8),TC(99,`
              `),ji(100,`a`,6)(101,`span`,9),TC(102,`«`),fl()(),TC(103,`
            `),fl(),TC(104,`
            `),ji(105,`c-page-item`),TC(106,`
              `),ji(107,`a`,6),TC(108,`1`),fl(),TC(109,`
            `),fl(),TC(110,`
            `),ji(111,`c-page-item`),TC(112,`
              `),ji(113,`a`,6),TC(114,`2`),fl(),TC(115,`
            `),fl(),TC(116,`
            `),ji(117,`c-page-item`),TC(118,`
              `),ji(119,`a`,6),TC(120,`3`),fl(),TC(121,`
            `),fl(),TC(122,`
            `),ji(123,`c-page-item`,10),TC(124,`
              `),ji(125,`a`,6)(126,`span`,9),TC(127,`»`),fl()(),TC(128,`
            `),fl(),TC(129,`
          `),fl(),TC(130,`
        `),fl(),TC(131,`
      `),fl(),TC(132,`
    `),fl(),TC(133,`
  `),fl(),TC(134,`
  `),ji(135,`c-col`,0),TC(136,`
    `),ji(137,`c-card`,2),TC(138,`
      `),ji(139,`c-card-header`),TC(140,`
        `),ji(141,`strong`),TC(142,`Angular Pagination`),fl(),TC(143,` `),ji(144,`small`),TC(145,`Disabled and active states`),fl(),TC(146,`
      `),fl(),TC(147,`
      `),ji(148,`c-card-body`),TC(149,`
        `),ji(150,`p`,3),TC(151,`
          Pagination links are customizable for different circumstances. Use
          `),ji(152,`code`),TC(153,`disabled`),fl(),TC(154,` for links that appear un-clickable and `),ji(155,`code`),TC(156,`.active`),fl(),TC(157,` to
          indicate the current page.
        `),fl(),TC(158,`
        `),ji(159,`p`,3),TC(160,`
          While the `),ji(161,`code`),TC(162,`disabled`),fl(),TC(163,` prop uses `),ji(164,`code`),TC(165,`pointer-events: none`),fl(),TC(166,` to
          `),ji(167,`em`),TC(168,`try`),fl(),TC(169,` to disable the link functionality of `),ji(170,`code`),TC(171,`<a>`),fl(),TC(172,`s, that CSS
          property is not yet standardized and doesn'taccount for keyboard navigation. As
          such, we always add `),ji(173,`code`),TC(174,`tabindex="-1"`),fl(),TC(175,` on disabled links and use
          custom JavaScript to fully disable their functionality.
        `),fl(),TC(176,`
        `),ji(177,`app-docs-example`,11),TC(178,`
          `),ji(179,`c-pagination`,5),TC(180,`
            `),ji(181,`c-page-item`,12),TC(182,`
              `),ji(183,`a`,6)(184,`span`,9),TC(185,`«`),fl()(),TC(186,`
            `),fl(),TC(187,`
            `),ji(188,`c-page-item`,13),TC(189,`
              `),ji(190,`a`,6),TC(191,`1`),fl(),TC(192,`
            `),fl(),TC(193,`
            `),ji(194,`c-page-item`),TC(195,`
              `),ji(196,`a`,6),TC(197,`2`),fl(),TC(198,`
            `),fl(),TC(199,`
            `),ji(200,`c-page-item`),TC(201,`
              `),ji(202,`a`,6),TC(203,`3`),fl(),TC(204,`
            `),fl(),TC(205,`
            `),ji(206,`c-page-item`,10),TC(207,`
              `),ji(208,`a`,6)(209,`span`,9),TC(210,`»`),fl()(),TC(211,`
            `),fl(),TC(212,`
          `),fl(),TC(213,`
        `),fl(),TC(214,`
      `),fl(),TC(215,`
    `),fl(),TC(216,`
  `),fl(),TC(217,`
  `),ji(218,`c-col`,0),TC(219,`
    `),ji(220,`c-card`,2),TC(221,`
      `),ji(222,`c-card-header`),TC(223,`
        `),ji(224,`strong`),TC(225,`Angular Pagination`),fl(),TC(226,` `),ji(227,`small`),TC(228,`Sizing`),fl(),TC(229,`
      `),fl(),TC(230,`
      `),ji(231,`c-card-body`),TC(232,`
        `),ji(233,`p`,3),TC(234,`
          Fancy larger or smaller pagination? Add `),ji(235,`code`),TC(236,`sizing="lg"`),fl(),TC(237,` or
          `),ji(238,`code`),TC(239,`sizing="sm"`),fl(),TC(240,` for additional sizes.
        `),fl(),TC(241,`
        `),ji(242,`app-docs-example`,14),TC(243,`
          `),ji(244,`c-pagination`,15),TC(245,`
            `),ji(246,`c-page-item`),TC(247,`
              `),ji(248,`a`,6),TC(249,`Previous`),fl(),TC(250,`
            `),fl(),TC(251,`
            `),ji(252,`c-page-item`),TC(253,`
              `),ji(254,`a`,6),TC(255,`1`),fl(),TC(256,`
            `),fl(),TC(257,`
            `),ji(258,`c-page-item`),TC(259,`
              `),ji(260,`a`,6),TC(261,`2`),fl(),TC(262,`
            `),fl(),TC(263,`
            `),ji(264,`c-page-item`),TC(265,`
              `),ji(266,`a`,6),TC(267,`3`),fl(),TC(268,`
            `),fl(),TC(269,`
            `),ji(270,`c-page-item`),TC(271,`
              `),ji(272,`a`,6),TC(273,`Next`),fl(),TC(274,`
            `),fl(),TC(275,`
          `),fl(),TC(276,`
        `),fl(),TC(277,`
        `),ji(278,`app-docs-example`,14),TC(279,`
          `),ji(280,`c-pagination`,16),TC(281,`
            `),ji(282,`c-page-item`),TC(283,`
              `),ji(284,`a`,6),TC(285,`Previous`),fl(),TC(286,`
            `),fl(),TC(287,`
            `),ji(288,`c-page-item`),TC(289,`
              `),ji(290,`a`,6),TC(291,`1`),fl(),TC(292,`
            `),fl(),TC(293,`
            `),ji(294,`c-page-item`),TC(295,`
              `),ji(296,`a`,6),TC(297,`2`),fl(),TC(298,`
            `),fl(),TC(299,`
            `),ji(300,`c-page-item`),TC(301,`
              `),ji(302,`a`,6),TC(303,`3`),fl(),TC(304,`
            `),fl(),TC(305,`
            `),ji(306,`c-page-item`),TC(307,`
              `),ji(308,`a`,6),TC(309,`Next`),fl(),TC(310,`
            `),fl(),TC(311,`
          `),fl(),TC(312,`
        `),fl(),TC(313,`
      `),fl(),TC(314,`
    `),fl(),TC(315,`
  `),fl(),TC(316,`
  `),ji(317,`c-col`,0),TC(318,`
    `),ji(319,`c-card`,2),TC(320,`
      `),ji(321,`c-card-header`),TC(322,`
        `),ji(323,`strong`),TC(324,`Angular Pagination`),fl(),TC(325,` `),ji(326,`small`),TC(327,`Alignment`),fl(),TC(328,`
      `),fl(),TC(329,`
      `),ji(330,`c-card-body`),TC(331,`
        `),ji(332,`p`,3),TC(333,`
          Change the alignment of pagination components with
          `),ji(334,`a`,17),TC(335,`flexbox utilities`),fl(),TC(336,`.
        `),fl(),TC(337,`
        `),ji(338,`app-docs-example`,18),TC(339,`
          `),ji(340,`c-pagination`,19),TC(341,`
            `),ji(342,`c-page-item`,20),TC(343,`
              `),ji(344,`a`,6),TC(345,`Previous`),fl(),TC(346,`
            `),fl(),TC(347,`
            `),ji(348,`c-page-item`),TC(349,`
              `),ji(350,`a`,6),TC(351,`1`),fl(),TC(352,`
            `),fl(),TC(353,`
            `),ji(354,`c-page-item`),TC(355,`
              `),ji(356,`a`,6),TC(357,`2`),fl(),TC(358,`
            `),fl(),TC(359,`
            `),ji(360,`c-page-item`),TC(361,`
              `),ji(362,`a`,6),TC(363,`3`),fl(),TC(364,`
            `),fl(),TC(365,`
            `),ji(366,`c-page-item`),TC(367,`
              `),ji(368,`a`,6),TC(369,`Next`),fl(),TC(370,`
            `),fl(),TC(371,`
          `),fl(),TC(372,`
        `),fl(),TC(373,`
        `),ji(374,`app-docs-example`,18),TC(375,`
          `),ji(376,`c-pagination`,21),TC(377,`
            `),ji(378,`c-page-item`,20),TC(379,`
              `),ji(380,`a`,6),TC(381,`Previous`),fl(),TC(382,`
            `),fl(),TC(383,`
            `),ji(384,`c-page-item`),TC(385,`
              `),ji(386,`a`,6),TC(387,`1`),fl(),TC(388,`
            `),fl(),TC(389,`
            `),ji(390,`c-page-item`),TC(391,`
              `),ji(392,`a`,6),TC(393,`2`),fl(),TC(394,`
            `),fl(),TC(395,`
            `),ji(396,`c-page-item`),TC(397,`
              `),ji(398,`a`,6),TC(399,`3`),fl(),TC(400,`
            `),fl(),TC(401,`
            `),ji(402,`c-page-item`),TC(403,`
              `),ji(404,`a`,6),TC(405,`Next`),fl(),TC(406,`
            `),fl(),TC(407,`
          `),fl(),TC(408,`
        `),fl(),TC(409,`
      `),fl(),TC(410,`
    `),fl(),TC(411,`
  `),fl(),TC(412,`
`),fl()),m&2&&(XE(40),Oh(`routerLink`,VC(39,l)),XE(6),Oh(`routerLink`,VC(40,l)),XE(6),Oh(`routerLink`,VC(41,l)),XE(6),Oh(`routerLink`,VC(42,l)),XE(6),Oh(`routerLink`,VC(43,l)),XE(36),Oh(`routerLink`,VC(44,l)),XE(7),Oh(`routerLink`,VC(45,l)),XE(6),Oh(`routerLink`,VC(46,l)),XE(6),Oh(`routerLink`,VC(47,l)),XE(6),Oh(`routerLink`,VC(48,l)),XE(56),Oh(`disabled`,!0),XE(2),Oh(`routerLink`,VC(49,l)),XE(5),Oh(`active`,!0),XE(2),Oh(`routerLink`,VC(50,l)),XE(6),Oh(`routerLink`,VC(51,l)),XE(6),Oh(`routerLink`,VC(52,l)),XE(6),Oh(`routerLink`,VC(53,l)),XE(40),Oh(`routerLink`,VC(54,l)),XE(6),Oh(`routerLink`,VC(55,l)),XE(6),Oh(`routerLink`,VC(56,l)),XE(6),Oh(`routerLink`,VC(57,l)),XE(6),Oh(`routerLink`,VC(58,l)),XE(12),Oh(`routerLink`,VC(59,l)),XE(6),Oh(`routerLink`,VC(60,l)),XE(6),Oh(`routerLink`,VC(61,l)),XE(6),Oh(`routerLink`,VC(62,l)),XE(6),Oh(`routerLink`,VC(63,l)),XE(34),Oh(`disabled`,!0),XE(2),Oh(`routerLink`,VC(64,l)),XE(6),Oh(`routerLink`,VC(65,l)),XE(6),Oh(`routerLink`,VC(66,l)),XE(6),Oh(`routerLink`,VC(67,l)),XE(6),Oh(`routerLink`,VC(68,l)),XE(10),Oh(`disabled`,!0),XE(2),Oh(`routerLink`,VC(69,l)),XE(6),Oh(`routerLink`,VC(70,l)),XE(6),Oh(`routerLink`,VC(71,l)),XE(6),Oh(`routerLink`,VC(72,l)),XE(6),Oh(`routerLink`,VC(73,l)))},dependencies:[K1,vy,Qi,uy,Ji,k,gN,hN,ap,rn,c],encapsulation:2})}};export{f as PaginationsComponent};