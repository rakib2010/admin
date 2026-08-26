import{D as Ew,Lt as Rh,Mt as QI,Nn as dl,St as Ow,kt as Pi,o as Ah,p as CD}from"./chunk-q4Rs6eDf.js";import{Bt as gN,G as Qi,O as Ji,bn as rn,bt as ap,dt as Y1,hn as py,rn as mN,zn as yy}from"./main-IYLEVGTX.js";import{i as k}from"./chunk-BQWFyHvh.js";import{t as c}from"./chunk-DJv5g611.js";var l=()=>[];var f=class o{static{this.ɵfac=function(m){return new(m||o)}}static{this.ɵcmp=CD({type:o,selectors:[[`app-paginations`]],decls:413,vars:74,consts:[[`xs`,`12`],[`href`,`components/pagination`,`title`,`Pagination`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/pagination`],[`aria-label`,`Page navigation example`],[`cPageLink`,``,3,`routerLink`],[`href`,`components/pagination#working-with-icons`],[`aria-label`,`Previous`],[`aria-hidden`,`true`],[`aria-label`,`Next`],[`href`,`components/pagination#disabled-and-active-states`],[`aria-label`,`Previous`,3,`disabled`],[3,`active`],[`href`,`components/pagination#sizing`],[`aria-label`,`Page navigation example`,`size`,`lg`],[`aria-label`,`Page navigation example`,`size`,`sm`],[`href`,`https://coreui.io/docs/utilities/flex/`],[`href`,`components/pagination#aligment`],[`align`,`center`,`aria-label`,`Page navigation example`],[3,`disabled`],[`align`,`end`,`aria-label`,`Page navigation example`]],template:function(m,L){m&1&&(Pi(0,`c-row`),Ew(1,`
  `),Pi(2,`c-col`,0),Ew(3,`
    `),Rh(4,`app-docs-components`,1),Ew(5,`
    `),Pi(6,`c-card`,2),Ew(7,`
      `),Pi(8,`c-card-header`),Ew(9,`
        `),Pi(10,`strong`),Ew(11,`Angular Pagination`),dl(),Ew(12,`
      `),dl(),Ew(13,`
      `),Pi(14,`c-card-body`),Ew(15,`
        `),Pi(16,`p`,3),Ew(17,`
          We use a large block of connected links for our pagination, making links hard to miss
          and easily scalable\u2014all while providing large hit areas. Pagination is built with list
          HTML elements so screen readers can announce the number of available links. Use a
          wrapping `),Pi(18,`code`),Ew(19,`<nav>`),dl(),Ew(20,` element to identify it as a navigation section to
          screen readers and other assistive technologies.
        `),dl(),Ew(21,`
        `),Pi(22,`p`,3),Ew(23,`
          In addition, as pages likely have more than one such navigation section, it's
          advisable to provide a descriptive `),Pi(24,`code`),Ew(25,`aria-label`),dl(),Ew(26,` for the
          `),Pi(27,`code`),Ew(28,`<nav>`),dl(),Ew(29,` to reflect its purpose. For example, if the pagination
          component is used to navigate between a set of search results, an appropriate label
          could be `),Pi(30,`code`),Ew(31,`aria-label="Search results pages"`),dl(),Ew(32,`.
        `),dl(),Ew(33,`
        `),Pi(34,`app-docs-example`,4),Ew(35,`
          `),Pi(36,`c-pagination`,5),Ew(37,`
            `),Pi(38,`c-page-item`),Ew(39,`
              `),Pi(40,`a`,6),Ew(41,`Previous`),dl(),Ew(42,`
            `),dl(),Ew(43,`
            `),Pi(44,`c-page-item`),Ew(45,`
              `),Pi(46,`a`,6),Ew(47,`1`),dl(),Ew(48,`
            `),dl(),Ew(49,`
            `),Pi(50,`c-page-item`),Ew(51,`
              `),Pi(52,`a`,6),Ew(53,`2`),dl(),Ew(54,`
            `),dl(),Ew(55,`
            `),Pi(56,`c-page-item`),Ew(57,`
              `),Pi(58,`a`,6),Ew(59,`3`),dl(),Ew(60,`
            `),dl(),Ew(61,`
            `),Pi(62,`c-page-item`),Ew(63,`
              `),Pi(64,`a`,6),Ew(65,`Next`),dl(),Ew(66,`
            `),dl(),Ew(67,`
          `),dl(),Ew(68,`
        `),dl(),Ew(69,`
      `),dl(),Ew(70,`
    `),dl(),Ew(71,`
  `),dl(),Ew(72,`
  `),Pi(73,`c-col`,0),Ew(74,`
    `),Pi(75,`c-card`,2),Ew(76,`
      `),Pi(77,`c-card-header`),Ew(78,`
        `),Pi(79,`strong`),Ew(80,`Angular Pagination`),dl(),Ew(81,` `),Pi(82,`small`),Ew(83,`Working with icons`),dl(),Ew(84,`
      `),dl(),Ew(85,`
      `),Pi(86,`c-card-body`),Ew(87,`
        `),Pi(88,`p`,3),Ew(89,`
          Looking to use an icon or symbol in place of text for some pagination links? Be sure
          to provide proper screen reader support with `),Pi(90,`code`),Ew(91,`aria`),dl(),Ew(92,` attributes.
        `),dl(),Ew(93,`
        `),Pi(94,`app-docs-example`,7),Ew(95,`
          `),Pi(96,`c-pagination`,5),Ew(97,`
            `),Pi(98,`c-page-item`,8),Ew(99,`
              `),Pi(100,`a`,6)(101,`span`,9),Ew(102,`«`),dl()(),Ew(103,`
            `),dl(),Ew(104,`
            `),Pi(105,`c-page-item`),Ew(106,`
              `),Pi(107,`a`,6),Ew(108,`1`),dl(),Ew(109,`
            `),dl(),Ew(110,`
            `),Pi(111,`c-page-item`),Ew(112,`
              `),Pi(113,`a`,6),Ew(114,`2`),dl(),Ew(115,`
            `),dl(),Ew(116,`
            `),Pi(117,`c-page-item`),Ew(118,`
              `),Pi(119,`a`,6),Ew(120,`3`),dl(),Ew(121,`
            `),dl(),Ew(122,`
            `),Pi(123,`c-page-item`,10),Ew(124,`
              `),Pi(125,`a`,6)(126,`span`,9),Ew(127,`»`),dl()(),Ew(128,`
            `),dl(),Ew(129,`
          `),dl(),Ew(130,`
        `),dl(),Ew(131,`
      `),dl(),Ew(132,`
    `),dl(),Ew(133,`
  `),dl(),Ew(134,`
  `),Pi(135,`c-col`,0),Ew(136,`
    `),Pi(137,`c-card`,2),Ew(138,`
      `),Pi(139,`c-card-header`),Ew(140,`
        `),Pi(141,`strong`),Ew(142,`Angular Pagination`),dl(),Ew(143,` `),Pi(144,`small`),Ew(145,`Disabled and active states`),dl(),Ew(146,`
      `),dl(),Ew(147,`
      `),Pi(148,`c-card-body`),Ew(149,`
        `),Pi(150,`p`,3),Ew(151,`
          Pagination links are customizable for different circumstances. Use
          `),Pi(152,`code`),Ew(153,`disabled`),dl(),Ew(154,` for links that appear un-clickable and `),Pi(155,`code`),Ew(156,`.active`),dl(),Ew(157,` to
          indicate the current page.
        `),dl(),Ew(158,`
        `),Pi(159,`p`,3),Ew(160,`
          While the `),Pi(161,`code`),Ew(162,`disabled`),dl(),Ew(163,` prop uses `),Pi(164,`code`),Ew(165,`pointer-events: none`),dl(),Ew(166,` to
          `),Pi(167,`em`),Ew(168,`try`),dl(),Ew(169,` to disable the link functionality of `),Pi(170,`code`),Ew(171,`<a>`),dl(),Ew(172,`s, that CSS
          property is not yet standardized and doesn'taccount for keyboard navigation. As
          such, we always add `),Pi(173,`code`),Ew(174,`tabindex="-1"`),dl(),Ew(175,` on disabled links and use
          custom JavaScript to fully disable their functionality.
        `),dl(),Ew(176,`
        `),Pi(177,`app-docs-example`,11),Ew(178,`
          `),Pi(179,`c-pagination`,5),Ew(180,`
            `),Pi(181,`c-page-item`,12),Ew(182,`
              `),Pi(183,`a`,6)(184,`span`,9),Ew(185,`«`),dl()(),Ew(186,`
            `),dl(),Ew(187,`
            `),Pi(188,`c-page-item`,13),Ew(189,`
              `),Pi(190,`a`,6),Ew(191,`1`),dl(),Ew(192,`
            `),dl(),Ew(193,`
            `),Pi(194,`c-page-item`),Ew(195,`
              `),Pi(196,`a`,6),Ew(197,`2`),dl(),Ew(198,`
            `),dl(),Ew(199,`
            `),Pi(200,`c-page-item`),Ew(201,`
              `),Pi(202,`a`,6),Ew(203,`3`),dl(),Ew(204,`
            `),dl(),Ew(205,`
            `),Pi(206,`c-page-item`,10),Ew(207,`
              `),Pi(208,`a`,6)(209,`span`,9),Ew(210,`»`),dl()(),Ew(211,`
            `),dl(),Ew(212,`
          `),dl(),Ew(213,`
        `),dl(),Ew(214,`
      `),dl(),Ew(215,`
    `),dl(),Ew(216,`
  `),dl(),Ew(217,`
  `),Pi(218,`c-col`,0),Ew(219,`
    `),Pi(220,`c-card`,2),Ew(221,`
      `),Pi(222,`c-card-header`),Ew(223,`
        `),Pi(224,`strong`),Ew(225,`Angular Pagination`),dl(),Ew(226,` `),Pi(227,`small`),Ew(228,`Sizing`),dl(),Ew(229,`
      `),dl(),Ew(230,`
      `),Pi(231,`c-card-body`),Ew(232,`
        `),Pi(233,`p`,3),Ew(234,`
          Fancy larger or smaller pagination? Add `),Pi(235,`code`),Ew(236,`sizing="lg"`),dl(),Ew(237,` or
          `),Pi(238,`code`),Ew(239,`sizing="sm"`),dl(),Ew(240,` for additional sizes.
        `),dl(),Ew(241,`
        `),Pi(242,`app-docs-example`,14),Ew(243,`
          `),Pi(244,`c-pagination`,15),Ew(245,`
            `),Pi(246,`c-page-item`),Ew(247,`
              `),Pi(248,`a`,6),Ew(249,`Previous`),dl(),Ew(250,`
            `),dl(),Ew(251,`
            `),Pi(252,`c-page-item`),Ew(253,`
              `),Pi(254,`a`,6),Ew(255,`1`),dl(),Ew(256,`
            `),dl(),Ew(257,`
            `),Pi(258,`c-page-item`),Ew(259,`
              `),Pi(260,`a`,6),Ew(261,`2`),dl(),Ew(262,`
            `),dl(),Ew(263,`
            `),Pi(264,`c-page-item`),Ew(265,`
              `),Pi(266,`a`,6),Ew(267,`3`),dl(),Ew(268,`
            `),dl(),Ew(269,`
            `),Pi(270,`c-page-item`),Ew(271,`
              `),Pi(272,`a`,6),Ew(273,`Next`),dl(),Ew(274,`
            `),dl(),Ew(275,`
          `),dl(),Ew(276,`
        `),dl(),Ew(277,`
        `),Pi(278,`app-docs-example`,14),Ew(279,`
          `),Pi(280,`c-pagination`,16),Ew(281,`
            `),Pi(282,`c-page-item`),Ew(283,`
              `),Pi(284,`a`,6),Ew(285,`Previous`),dl(),Ew(286,`
            `),dl(),Ew(287,`
            `),Pi(288,`c-page-item`),Ew(289,`
              `),Pi(290,`a`,6),Ew(291,`1`),dl(),Ew(292,`
            `),dl(),Ew(293,`
            `),Pi(294,`c-page-item`),Ew(295,`
              `),Pi(296,`a`,6),Ew(297,`2`),dl(),Ew(298,`
            `),dl(),Ew(299,`
            `),Pi(300,`c-page-item`),Ew(301,`
              `),Pi(302,`a`,6),Ew(303,`3`),dl(),Ew(304,`
            `),dl(),Ew(305,`
            `),Pi(306,`c-page-item`),Ew(307,`
              `),Pi(308,`a`,6),Ew(309,`Next`),dl(),Ew(310,`
            `),dl(),Ew(311,`
          `),dl(),Ew(312,`
        `),dl(),Ew(313,`
      `),dl(),Ew(314,`
    `),dl(),Ew(315,`
  `),dl(),Ew(316,`
  `),Pi(317,`c-col`,0),Ew(318,`
    `),Pi(319,`c-card`,2),Ew(320,`
      `),Pi(321,`c-card-header`),Ew(322,`
        `),Pi(323,`strong`),Ew(324,`Angular Pagination`),dl(),Ew(325,` `),Pi(326,`small`),Ew(327,`Alignment`),dl(),Ew(328,`
      `),dl(),Ew(329,`
      `),Pi(330,`c-card-body`),Ew(331,`
        `),Pi(332,`p`,3),Ew(333,`
          Change the alignment of pagination components with
          `),Pi(334,`a`,17),Ew(335,`flexbox utilities`),dl(),Ew(336,`.
        `),dl(),Ew(337,`
        `),Pi(338,`app-docs-example`,18),Ew(339,`
          `),Pi(340,`c-pagination`,19),Ew(341,`
            `),Pi(342,`c-page-item`,20),Ew(343,`
              `),Pi(344,`a`,6),Ew(345,`Previous`),dl(),Ew(346,`
            `),dl(),Ew(347,`
            `),Pi(348,`c-page-item`),Ew(349,`
              `),Pi(350,`a`,6),Ew(351,`1`),dl(),Ew(352,`
            `),dl(),Ew(353,`
            `),Pi(354,`c-page-item`),Ew(355,`
              `),Pi(356,`a`,6),Ew(357,`2`),dl(),Ew(358,`
            `),dl(),Ew(359,`
            `),Pi(360,`c-page-item`),Ew(361,`
              `),Pi(362,`a`,6),Ew(363,`3`),dl(),Ew(364,`
            `),dl(),Ew(365,`
            `),Pi(366,`c-page-item`),Ew(367,`
              `),Pi(368,`a`,6),Ew(369,`Next`),dl(),Ew(370,`
            `),dl(),Ew(371,`
          `),dl(),Ew(372,`
        `),dl(),Ew(373,`
        `),Pi(374,`app-docs-example`,18),Ew(375,`
          `),Pi(376,`c-pagination`,21),Ew(377,`
            `),Pi(378,`c-page-item`,20),Ew(379,`
              `),Pi(380,`a`,6),Ew(381,`Previous`),dl(),Ew(382,`
            `),dl(),Ew(383,`
            `),Pi(384,`c-page-item`),Ew(385,`
              `),Pi(386,`a`,6),Ew(387,`1`),dl(),Ew(388,`
            `),dl(),Ew(389,`
            `),Pi(390,`c-page-item`),Ew(391,`
              `),Pi(392,`a`,6),Ew(393,`2`),dl(),Ew(394,`
            `),dl(),Ew(395,`
            `),Pi(396,`c-page-item`),Ew(397,`
              `),Pi(398,`a`,6),Ew(399,`3`),dl(),Ew(400,`
            `),dl(),Ew(401,`
            `),Pi(402,`c-page-item`),Ew(403,`
              `),Pi(404,`a`,6),Ew(405,`Next`),dl(),Ew(406,`
            `),dl(),Ew(407,`
          `),dl(),Ew(408,`
        `),dl(),Ew(409,`
      `),dl(),Ew(410,`
    `),dl(),Ew(411,`
  `),dl(),Ew(412,`
`),dl()),m&2&&(QI(40),Ah(`routerLink`,Ow(39,l)),QI(6),Ah(`routerLink`,Ow(40,l)),QI(6),Ah(`routerLink`,Ow(41,l)),QI(6),Ah(`routerLink`,Ow(42,l)),QI(6),Ah(`routerLink`,Ow(43,l)),QI(36),Ah(`routerLink`,Ow(44,l)),QI(7),Ah(`routerLink`,Ow(45,l)),QI(6),Ah(`routerLink`,Ow(46,l)),QI(6),Ah(`routerLink`,Ow(47,l)),QI(6),Ah(`routerLink`,Ow(48,l)),QI(56),Ah(`disabled`,!0),QI(2),Ah(`routerLink`,Ow(49,l)),QI(5),Ah(`active`,!0),QI(2),Ah(`routerLink`,Ow(50,l)),QI(6),Ah(`routerLink`,Ow(51,l)),QI(6),Ah(`routerLink`,Ow(52,l)),QI(6),Ah(`routerLink`,Ow(53,l)),QI(40),Ah(`routerLink`,Ow(54,l)),QI(6),Ah(`routerLink`,Ow(55,l)),QI(6),Ah(`routerLink`,Ow(56,l)),QI(6),Ah(`routerLink`,Ow(57,l)),QI(6),Ah(`routerLink`,Ow(58,l)),QI(12),Ah(`routerLink`,Ow(59,l)),QI(6),Ah(`routerLink`,Ow(60,l)),QI(6),Ah(`routerLink`,Ow(61,l)),QI(6),Ah(`routerLink`,Ow(62,l)),QI(6),Ah(`routerLink`,Ow(63,l)),QI(34),Ah(`disabled`,!0),QI(2),Ah(`routerLink`,Ow(64,l)),QI(6),Ah(`routerLink`,Ow(65,l)),QI(6),Ah(`routerLink`,Ow(66,l)),QI(6),Ah(`routerLink`,Ow(67,l)),QI(6),Ah(`routerLink`,Ow(68,l)),QI(10),Ah(`disabled`,!0),QI(2),Ah(`routerLink`,Ow(69,l)),QI(6),Ah(`routerLink`,Ow(70,l)),QI(6),Ah(`routerLink`,Ow(71,l)),QI(6),Ah(`routerLink`,Ow(72,l)),QI(6),Ah(`routerLink`,Ow(73,l)))},dependencies:[Y1,yy,Qi,py,Ji,k,mN,gN,ap,rn,c],encapsulation:2})}};export{f as PaginationsComponent};