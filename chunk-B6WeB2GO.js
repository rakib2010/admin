import{Gr as ul,L as ID,Un as hw,_t as Pi,on as _h,p as Ch,t as $I,ut as Nw}from"./chunk-BSgQlS93.js";import{D as J1,It as ey,K as Q1,L as Ls,M as Kf,X as Qi,_t as Z1,k as Ji,mn as qf,st as V1,vn as rn,wn as tp,xn as sy}from"./main-37K4GJAM.js";import{i as k}from"./chunk-FodikvMx.js";import{t as c}from"./chunk-5BukuvC5.js";var l=()=>[];var w=class d{static{this.ɵfac=function(m){return new(m||d)}}static{this.ɵcmp=ID({type:d,selectors:[[`app-navs`]],decls:682,vars:124,consts:[[`xs`,`12`],[`href`,`components/nav`,`title`,`Nav`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/nav#base-nav`],[`cNavLink`,``,3,`active`,`routerLink`],[`cNavLink`,``,3,`routerLink`],[`cNavLink`,``,3,`disabled`,`routerLink`],[1,`text-body-secondary`,`small`,`mt-3`],[`role`,`navigation`],[`href`,`https://coreui.io/docs/layout/grid/#horizontal-alignment`],[`href`,`components/nav#horizontal-alignment`],[1,`justify-content-center`],[1,`justify-content-end`],[`href`,`components/nav#vertical`],[1,`flex-column`],[`href`,`components/nav#tabs`],[`variant`,`tabs`],[`href`,`components/nav#pills`],[`variant`,`pills`],[`href`,`components/nav#Underline`],[`variant`,`underline`],[`href`,`components/nav#fill-and-justify`],[`layout`,`fill`,`variant`,`pills`],[`layout`,`justified`,`variant`,`pills`],[`href`,`https://coreui.io/docs/utilities/flex`],[`href`,`components/nav#working-with-flex-utilities`],[`role`,`navigation`,`variant`,`pills`,1,`flex-column`,`flex-sm-row`],[`href`,`components/nav#tabs-with-dropdowns`],[`variant`,`nav-item`],[`cDropdownToggle`,``,`href`,``,`cNavLink`,``],[`cDropdownMenu`,``],[`cDropdownItem`,``,3,`routerLink`],[`href`,`components/nav#pills-with-dropdowns`],[`cNavLink`,``,3,`active`],[`cDropdownToggle`,``,`href`,``],[`cNavLink`,``],[`cNavLink`,``,3,`disabled`]],template:function(m,N){m&1&&(Pi(0,`c-row`),hw(1,`
  `),Pi(2,`c-col`,0),hw(3,`
    `),_h(4,`app-docs-components`,1),hw(5,`
    `),Pi(6,`c-card`,2),hw(7,`
      `),Pi(8,`c-card-header`),hw(9,`
        `),Pi(10,`strong`),hw(11,`Angular Navs`),ul(),hw(12,` `),Pi(13,`small`),hw(14,`Base navs`),ul(),hw(15,`
      `),ul(),hw(16,`
      `),Pi(17,`c-card-body`),hw(18,`
        `),Pi(19,`p`,3),hw(20,`
          The base `),Pi(21,`code`),hw(22,`c-nav`),ul(),hw(23,` component is built with flexbox and provide a strong
          foundation for building all types of navigation components. It includes some style
          overrides (for working with lists), some link padding for larger hit areas, and basic
          [disabled]="true" styling.
        `),ul(),hw(24,`
        `),Pi(25,`app-docs-example`,4),hw(26,`
          `),Pi(27,`c-nav`),hw(28,`
            `),Pi(29,`c-nav-item`),hw(30,`
              `),Pi(31,`a`,5),hw(32,`
                Active
              `),ul(),hw(33,`
            `),ul(),hw(34,`
            `),Pi(35,`c-nav-item`),hw(36,`
              `),Pi(37,`a`,6),hw(38,`Link`),ul(),hw(39,`
            `),ul(),hw(40,`
            `),Pi(41,`c-nav-item`),hw(42,`
              `),Pi(43,`a`,6),hw(44,`Link`),ul(),hw(45,`
            `),ul(),hw(46,`
            `),Pi(47,`c-nav-item`),hw(48,`
              `),Pi(49,`a`,7),hw(50,`
                Disabled
              `),ul(),hw(51,`
            `),ul(),hw(52,`
          `),ul(),hw(53,`
        `),ul(),hw(54,`
        `),Pi(55,`p`,8),hw(56,`
          Classes are used throughout, so your markup can be super flexible. Use
          `),Pi(57,`code`),hw(58,`c-nav-item`),ul(),hw(59,` like above, or roll your own with a `),Pi(60,`code`),hw(61,`<c-nav>`),ul(),hw(62,` element. Because
          the `),Pi(63,`code`),hw(64,`.nav`),ul(),hw(65,` uses `),Pi(66,`code`),hw(67,`display: flex`),ul(),hw(68,`, the `),Pi(69,`code`),hw(70,`cNavLink`),ul(),hw(71,` behaves the same as `),Pi(72,`code`),hw(73,`c-nav-item`),ul(),hw(74,`
          would, but
          without the extra markup.
        `),ul(),hw(75,`
        `),Pi(76,`app-docs-example`,4),hw(77,`
          `),Pi(78,`c-nav`,9),hw(79,`
            `),Pi(80,`a`,5),hw(81,`
              Active
            `),ul(),hw(82,`
            `),Pi(83,`a`,6),hw(84,`Link`),ul(),hw(85,`
            `),Pi(86,`a`,6),hw(87,`Link`),ul(),hw(88,`
            `),Pi(89,`a`,7),hw(90,`
              Disabled
            `),ul(),hw(91,`
          `),ul(),hw(92,`
        `),ul(),hw(93,`
      `),ul(),hw(94,`
    `),ul(),hw(95,`
  `),ul(),hw(96,`
  `),Pi(97,`c-col`,0),hw(98,`
    `),Pi(99,`c-card`,2),hw(100,`
      `),Pi(101,`c-card-header`),hw(102,`
        `),Pi(103,`strong`),hw(104,`Angular Navs`),ul(),hw(105,` `),Pi(106,`small`),hw(107,`Horizontal alignment`),ul(),hw(108,`
      `),ul(),hw(109,`
      `),Pi(110,`c-card-body`),hw(111,`
        `),Pi(112,`p`,3),hw(113,`
          Change the horizontal alignment of your nav with
          `),Pi(114,`a`,10),hw(115,`
            flexbox utilities
          `),ul(),hw(116,`
          . By default, navs are left-aligned, but you can easily change them to center or right
          aligned.
        `),ul(),hw(117,`
        `),Pi(118,`p`,3),hw(119,`
          Centered with `),Pi(120,`code`),hw(121,`.justify-content-center`),ul(),hw(122,`:
        `),ul(),hw(123,`
        `),Pi(124,`app-docs-example`,11),hw(125,`
          `),Pi(126,`c-nav`,12),hw(127,`
            `),Pi(128,`c-nav-item`),hw(129,`
              `),Pi(130,`a`,5),hw(131,`
                Active
              `),ul(),hw(132,`
            `),ul(),hw(133,`
            `),Pi(134,`c-nav-item`),hw(135,`
              `),Pi(136,`a`,6),hw(137,`Link`),ul(),hw(138,`
            `),ul(),hw(139,`
            `),Pi(140,`c-nav-item`),hw(141,`
              `),Pi(142,`a`,6),hw(143,`Link`),ul(),hw(144,`
            `),ul(),hw(145,`
            `),Pi(146,`c-nav-item`),hw(147,`
              `),Pi(148,`a`,7),hw(149,`
                Disabled
              `),ul(),hw(150,`
            `),ul(),hw(151,`
          `),ul(),hw(152,`
        `),ul(),hw(153,`
        `),Pi(154,`p`,3),hw(155,`
          Right-aligned with `),Pi(156,`code`),hw(157,`.justify-content-end`),ul(),hw(158,`:
        `),ul(),hw(159,`
        `),Pi(160,`app-docs-example`,4),hw(161,`
          `),Pi(162,`c-nav`,13),hw(163,`
            `),Pi(164,`c-nav-item`),hw(165,`
              `),Pi(166,`a`,5),hw(167,`
                Active
              `),ul(),hw(168,`
            `),ul(),hw(169,`
            `),Pi(170,`c-nav-item`),hw(171,`
              `),Pi(172,`a`,6),hw(173,`Link`),ul(),hw(174,`
            `),ul(),hw(175,`
            `),Pi(176,`c-nav-item`),hw(177,`
              `),Pi(178,`a`,6),hw(179,`Link`),ul(),hw(180,`
            `),ul(),hw(181,`
            `),Pi(182,`c-nav-item`),hw(183,`
              `),Pi(184,`a`,7),hw(185,`
                Disabled
              `),ul(),hw(186,`
            `),ul(),hw(187,`
          `),ul(),hw(188,`
        `),ul(),hw(189,`
      `),ul(),hw(190,`
    `),ul(),hw(191,`
  `),ul(),hw(192,`
  `),Pi(193,`c-col`,0),hw(194,`
    `),Pi(195,`c-card`,2),hw(196,`
      `),Pi(197,`c-card-header`),hw(198,`
        `),Pi(199,`strong`),hw(200,`Angular Navs`),ul(),hw(201,` `),Pi(202,`small`),hw(203,`Vertical`),ul(),hw(204,`
      `),ul(),hw(205,`
      `),Pi(206,`c-card-body`),hw(207,`
        `),Pi(208,`p`,3),hw(209,`
          Stack your navigation by changing the flex item direction with the
          `),Pi(210,`code`),hw(211,`.flex-column`),ul(),hw(212,` utility. Need to stack them on some viewports but not
          others? Use the responsive versions (e.g., `),Pi(213,`code`),hw(214,`.flex-sm-column`),ul(),hw(215,`).
        `),ul(),hw(216,`
        `),Pi(217,`app-docs-example`,14),hw(218,`
          `),Pi(219,`c-nav`,15),hw(220,`
            `),Pi(221,`c-nav-item`),hw(222,`
              `),Pi(223,`a`,5),hw(224,`
                Active
              `),ul(),hw(225,`
            `),ul(),hw(226,`
            `),Pi(227,`c-nav-item`),hw(228,`
              `),Pi(229,`a`,6),hw(230,`Link`),ul(),hw(231,`
            `),ul(),hw(232,`
            `),Pi(233,`c-nav-item`),hw(234,`
              `),Pi(235,`a`,6),hw(236,`Link`),ul(),hw(237,`
            `),ul(),hw(238,`
            `),Pi(239,`c-nav-item`),hw(240,`
              `),Pi(241,`a`,7),hw(242,`
                Disabled
              `),ul(),hw(243,`
            `),ul(),hw(244,`
          `),ul(),hw(245,`
        `),ul(),hw(246,`
      `),ul(),hw(247,`
    `),ul(),hw(248,`
  `),ul(),hw(249,`
  `),Pi(250,`c-col`,0),hw(251,`
    `),Pi(252,`c-card`,2),hw(253,`
      `),Pi(254,`c-card-header`),hw(255,`
        `),Pi(256,`strong`),hw(257,`Angular Navs`),ul(),hw(258,` `),Pi(259,`small`),hw(260,`Tabs`),ul(),hw(261,`
      `),ul(),hw(262,`
      `),Pi(263,`c-card-body`),hw(264,`
        `),Pi(265,`p`,3),hw(266,`
          Take the basic nav from above and add the `),Pi(267,`code`),hw(268,`variant="tabs"`),ul(),hw(269,` class
          to generate a tabbed interface
        `),ul(),hw(270,`
        `),Pi(271,`app-docs-example`,16),hw(272,`
          `),Pi(273,`c-nav`,17),hw(274,`
            `),Pi(275,`c-nav-item`),hw(276,`
              `),Pi(277,`a`,5),hw(278,`
                Active
              `),ul(),hw(279,`
            `),ul(),hw(280,`
            `),Pi(281,`c-nav-item`),hw(282,`
              `),Pi(283,`a`,6),hw(284,`Link`),ul(),hw(285,`
            `),ul(),hw(286,`
            `),Pi(287,`c-nav-item`),hw(288,`
              `),Pi(289,`a`,6),hw(290,`Link`),ul(),hw(291,`
            `),ul(),hw(292,`
            `),Pi(293,`c-nav-item`),hw(294,`
              `),Pi(295,`a`,7),hw(296,`
                Disabled
              `),ul(),hw(297,`
            `),ul(),hw(298,`
          `),ul(),hw(299,`
        `),ul(),hw(300,`
      `),ul(),hw(301,`
    `),ul(),hw(302,`
  `),ul(),hw(303,`
  `),Pi(304,`c-col`,0),hw(305,`
    `),Pi(306,`c-card`,2),hw(307,`
      `),Pi(308,`c-card-header`),hw(309,`
        `),Pi(310,`strong`),hw(311,`Angular Navs`),ul(),hw(312,` `),Pi(313,`small`),hw(314,`Pills`),ul(),hw(315,`
      `),ul(),hw(316,`
      `),Pi(317,`c-card-body`),hw(318,`
        `),Pi(319,`p`,3),hw(320,`
          Take that same HTML, but use `),Pi(321,`code`),hw(322,`variant="pills"`),ul(),hw(323,` instead:
        `),ul(),hw(324,`
        `),Pi(325,`app-docs-example`,18),hw(326,`
          `),Pi(327,`c-nav`,19),hw(328,`
            `),Pi(329,`c-nav-item`),hw(330,`
              `),Pi(331,`a`,5),hw(332,`
                Active
              `),ul(),hw(333,`
            `),ul(),hw(334,`
            `),Pi(335,`c-nav-item`),hw(336,`
              `),Pi(337,`a`,6),hw(338,`Link`),ul(),hw(339,`
            `),ul(),hw(340,`
            `),Pi(341,`c-nav-item`),hw(342,`
              `),Pi(343,`a`,6),hw(344,`Link`),ul(),hw(345,`
            `),ul(),hw(346,`
            `),Pi(347,`c-nav-item`),hw(348,`
              `),Pi(349,`a`,7),hw(350,`
                Disabled
              `),ul(),hw(351,`
            `),ul(),hw(352,`
          `),ul(),hw(353,`
        `),ul(),hw(354,`
      `),ul(),hw(355,`
    `),ul(),hw(356,`
  `),ul(),hw(357,`
  `),Pi(358,`c-col`,0),hw(359,`
    `),Pi(360,`c-card`,2),hw(361,`
      `),Pi(362,`c-card-header`),hw(363,`
        `),Pi(364,`strong`),hw(365,`Angular Navs`),ul(),hw(366,` `),Pi(367,`small`),hw(368,`Underline`),ul(),hw(369,`
      `),ul(),hw(370,`
      `),Pi(371,`c-card-body`),hw(372,`
        `),Pi(373,`p`,3),hw(374,`
          Take that same HTML, but use `),Pi(375,`code`),hw(376,`variant="Underline"`),ul(),hw(377,` instead:
        `),ul(),hw(378,`
        `),Pi(379,`app-docs-example`,20),hw(380,`
          `),Pi(381,`c-nav`,21),hw(382,`
            `),Pi(383,`c-nav-item`),hw(384,`
              `),Pi(385,`a`,5),hw(386,`
                Active
              `),ul(),hw(387,`
            `),ul(),hw(388,`
            `),Pi(389,`c-nav-item`),hw(390,`
              `),Pi(391,`a`,6),hw(392,`Link`),ul(),hw(393,`
            `),ul(),hw(394,`
            `),Pi(395,`c-nav-item`),hw(396,`
              `),Pi(397,`a`,6),hw(398,`Link`),ul(),hw(399,`
            `),ul(),hw(400,`
            `),Pi(401,`c-nav-item`),hw(402,`
              `),Pi(403,`a`,7),hw(404,`
                Disabled
              `),ul(),hw(405,`
            `),ul(),hw(406,`
          `),ul(),hw(407,`
        `),ul(),hw(408,`
      `),ul(),hw(409,`
    `),ul(),hw(410,`
  `),ul(),hw(411,`
  `),Pi(412,`c-col`,0),hw(413,`
    `),Pi(414,`c-card`,2),hw(415,`
      `),Pi(416,`c-card-header`),hw(417,`
        `),Pi(418,`strong`),hw(419,`Angular Navs`),ul(),hw(420,` `),Pi(421,`small`),hw(422,`Fill and justify`),ul(),hw(423,`
      `),ul(),hw(424,`
      `),Pi(425,`c-card-body`),hw(426,`
        `),Pi(427,`p`,3),hw(428,`
          Force your `),Pi(429,`code`),hw(430,`.nav`),ul(),hw(431,`'s contents to extend the full available width one of
          two modifier classes. To proportionately fill all available space with your
          `),Pi(432,`code`),hw(433,`.nav-item`),ul(),hw(434,`s, use `),Pi(435,`code`),hw(436,`layout="fill"`),ul(),hw(437,`. Notice that all
          horizontal space is occupied, but not every nav item has the same width.
        `),ul(),hw(438,`
        `),Pi(439,`app-docs-example`,22),hw(440,`
          `),Pi(441,`c-nav`,23),hw(442,`
            `),Pi(443,`c-nav-item`),hw(444,`
              `),Pi(445,`a`,5),hw(446,`
                Active
              `),ul(),hw(447,`
            `),ul(),hw(448,`
            `),Pi(449,`c-nav-item`),hw(450,`
              `),Pi(451,`a`,6),hw(452,`Link`),ul(),hw(453,`
            `),ul(),hw(454,`
            `),Pi(455,`c-nav-item`),hw(456,`
              `),Pi(457,`a`,6),hw(458,`Link`),ul(),hw(459,`
            `),ul(),hw(460,`
            `),Pi(461,`c-nav-item`),hw(462,`
              `),Pi(463,`a`,7),hw(464,`
                Disabled
              `),ul(),hw(465,`
            `),ul(),hw(466,`
          `),ul(),hw(467,`
        `),ul(),hw(468,`
        `),Pi(469,`p`,3),hw(470,`
          For equal-width elements, use `),Pi(471,`code`),hw(472,`layout="justified"`),ul(),hw(473,`. All horizontal
          space will be occupied by nav links, but unlike the .nav-fill above, every nav item
          will be the same width.
        `),ul(),hw(474,`
        `),Pi(475,`app-docs-example`,22),hw(476,`
          `),Pi(477,`c-nav`,24),hw(478,`
            `),Pi(479,`c-nav-item`),hw(480,`
              `),Pi(481,`a`,5),hw(482,`
                Active
              `),ul(),hw(483,`
            `),ul(),hw(484,`
            `),Pi(485,`c-nav-item`),hw(486,`
              `),Pi(487,`a`,6),hw(488,`Link`),ul(),hw(489,`
            `),ul(),hw(490,`
            `),Pi(491,`c-nav-item`),hw(492,`
              `),Pi(493,`a`,6),hw(494,`Link`),ul(),hw(495,`
            `),ul(),hw(496,`
            `),Pi(497,`c-nav-item`),hw(498,`
              `),Pi(499,`a`,7),hw(500,`
                Disabled
              `),ul(),hw(501,`
            `),ul(),hw(502,`
          `),ul(),hw(503,`
        `),ul(),hw(504,`
      `),ul(),hw(505,`
    `),ul(),hw(506,`
  `),ul(),hw(507,`
  `),Pi(508,`c-col`,0),hw(509,`
    `),Pi(510,`c-card`,2),hw(511,`
      `),Pi(512,`c-card-header`),hw(513,`
        `),Pi(514,`strong`),hw(515,`Angular Navs`),ul(),hw(516,` `),Pi(517,`small`),hw(518,`Working with flex utilities`),ul(),hw(519,`
      `),ul(),hw(520,`
      `),Pi(521,`c-card-body`),hw(522,`
        `),Pi(523,`p`,3),hw(524,`
          If you need responsive nav variations, consider using a series of
          `),Pi(525,`a`,25),hw(526,`flexbox utilities`),ul(),hw(527,`. While more
          verbose, these utilities offer greater customization across responsive breakpoints. In
          the example below, our nav will be stacked on the lowest breakpoint, then adapt to a
          horizontal layout that fills the available width starting from the small breakpoint.
        `),ul(),hw(528,`
        `),Pi(529,`app-docs-example`,26),hw(530,`
          `),Pi(531,`c-nav`,27),hw(532,`
            `),Pi(533,`a`,5),hw(534,`
              Active
            `),ul(),hw(535,`
            `),Pi(536,`a`,6),hw(537,`Link`),ul(),hw(538,`
            `),Pi(539,`a`,6),hw(540,`Link`),ul(),hw(541,`
            `),Pi(542,`a`,7),hw(543,`
              Disabled
            `),ul(),hw(544,`
          `),ul(),hw(545,`
        `),ul(),hw(546,`
      `),ul(),hw(547,`
    `),ul(),hw(548,`
  `),ul(),hw(549,`
  `),Pi(550,`c-col`,0),hw(551,`
    `),Pi(552,`c-card`,2),hw(553,`
      `),Pi(554,`c-card-header`),hw(555,`
        `),Pi(556,`strong`),hw(557,`Angular Navs`),ul(),hw(558,` `),Pi(559,`small`),hw(560,`Tabs with dropdowns`),ul(),hw(561,`
      `),ul(),hw(562,`
      `),Pi(563,`c-card-body`),hw(564,`
        `),Pi(565,`app-docs-example`,28),hw(566,`
          `),Pi(567,`c-nav`,17),hw(568,`
            `),Pi(569,`c-nav-item`),hw(570,`
              `),Pi(571,`button`,5),hw(572,`
                Active
              `),ul(),hw(573,`
            `),ul(),hw(574,`
            `),Pi(575,`c-dropdown`,29),hw(576,`
              `),Pi(577,`button`,30),hw(578,`
                Dropdown button
              `),ul(),hw(579,`
              `),Pi(580,`ul`,31),hw(581,`
                `),Pi(582,`li`),hw(583,`
                  `),Pi(584,`button`,32),hw(585,`Action`),ul(),hw(586,`
                `),ul(),hw(587,`
                `),Pi(588,`li`),hw(589,`
                  `),Pi(590,`button`,32),hw(591,`Another action`),ul(),hw(592,`
                `),ul(),hw(593,`
                `),Pi(594,`li`),hw(595,`
                  `),Pi(596,`button`,32),hw(597,`Something else here`),ul(),hw(598,`
                `),ul(),hw(599,`
              `),ul(),hw(600,`
            `),ul(),hw(601,`
            `),Pi(602,`c-nav-item`),hw(603,`
              `),Pi(604,`button`,6),hw(605,`Link`),ul(),hw(606,`
            `),ul(),hw(607,`
            `),Pi(608,`c-nav-item`),hw(609,`
              `),Pi(610,`button`,7),hw(611,`
                Disabled
              `),ul(),hw(612,`
            `),ul(),hw(613,`
          `),ul(),hw(614,`
        `),ul(),hw(615,`
      `),ul(),hw(616,`
    `),ul(),hw(617,`
  `),ul(),hw(618,`
  `),Pi(619,`c-col`,0),hw(620,`
    `),Pi(621,`c-card`,2),hw(622,`
      `),Pi(623,`c-card-header`),hw(624,`
        `),Pi(625,`strong`),hw(626,`Angular Navs`),ul(),hw(627,` `),Pi(628,`small`),hw(629,`Pills with dropdowns`),ul(),hw(630,`
      `),ul(),hw(631,`
      `),Pi(632,`c-card-body`),hw(633,`
        `),Pi(634,`app-docs-example`,33),hw(635,`
          `),Pi(636,`c-nav`,19),hw(637,`
            `),Pi(638,`c-nav-item`),hw(639,`
              `),Pi(640,`a`,34),hw(641,`
                Active
              `),ul(),hw(642,`
            `),ul(),hw(643,`
            `),Pi(644,`c-dropdown`,29),hw(645,`
              `),Pi(646,`a`,35),hw(647,`
                Dropdown button
              `),ul(),hw(648,`
              `),Pi(649,`ul`,31),hw(650,`
                `),Pi(651,`li`)(652,`a`,32),hw(653,`Action`),ul()(),hw(654,`
                `),Pi(655,`li`)(656,`a`,32),hw(657,`Another action`),ul()(),hw(658,`
                `),Pi(659,`li`)(660,`a`,32),hw(661,`Something else here`),ul()(),hw(662,`
              `),ul(),hw(663,`
            `),ul(),hw(664,`
            `),Pi(665,`c-nav-item`),hw(666,`
              `),Pi(667,`a`,36),hw(668,`Link`),ul(),hw(669,`
            `),ul(),hw(670,`
            `),Pi(671,`c-nav-item`),hw(672,`
              `),Pi(673,`a`,37),hw(674,`
                Disabled
              `),ul(),hw(675,`
            `),ul(),hw(676,`
          `),ul(),hw(677,`
        `),ul(),hw(678,`
      `),ul(),hw(679,`
    `),ul(),hw(680,`
  `),ul(),hw(681,`
`),ul()),m&2&&($I(31),Ch(`active`,!0)(`routerLink`,Nw(75,l)),$I(6),Ch(`routerLink`,Nw(76,l)),$I(6),Ch(`routerLink`,Nw(77,l)),$I(6),Ch(`disabled`,!0)(`routerLink`,Nw(78,l)),$I(31),Ch(`active`,!0)(`routerLink`,Nw(79,l)),$I(3),Ch(`routerLink`,Nw(80,l)),$I(3),Ch(`routerLink`,Nw(81,l)),$I(3),Ch(`disabled`,!0)(`routerLink`,Nw(82,l)),$I(41),Ch(`active`,!0)(`routerLink`,Nw(83,l)),$I(6),Ch(`routerLink`,Nw(84,l)),$I(6),Ch(`routerLink`,Nw(85,l)),$I(6),Ch(`disabled`,!0)(`routerLink`,Nw(86,l)),$I(18),Ch(`active`,!0)(`routerLink`,Nw(87,l)),$I(6),Ch(`routerLink`,Nw(88,l)),$I(6),Ch(`routerLink`,Nw(89,l)),$I(6),Ch(`disabled`,!0)(`routerLink`,Nw(90,l)),$I(39),Ch(`active`,!0)(`routerLink`,Nw(91,l)),$I(6),Ch(`routerLink`,Nw(92,l)),$I(6),Ch(`routerLink`,Nw(93,l)),$I(6),Ch(`disabled`,!0)(`routerLink`,Nw(94,l)),$I(36),Ch(`active`,!0)(`routerLink`,Nw(95,l)),$I(6),Ch(`routerLink`,Nw(96,l)),$I(6),Ch(`routerLink`,Nw(97,l)),$I(6),Ch(`disabled`,!0)(`routerLink`,Nw(98,l)),$I(36),Ch(`active`,!0)(`routerLink`,Nw(99,l)),$I(6),Ch(`routerLink`,Nw(100,l)),$I(6),Ch(`routerLink`,Nw(101,l)),$I(6),Ch(`disabled`,!0)(`routerLink`,Nw(102,l)),$I(36),Ch(`active`,!0),$I(18),Ch(`disabled`,!0),$I(42),Ch(`active`,!0)(`routerLink`,Nw(103,l)),$I(6),Ch(`routerLink`,Nw(104,l)),$I(6),Ch(`routerLink`,Nw(105,l)),$I(6),Ch(`disabled`,!0)(`routerLink`,Nw(106,l)),$I(18),Ch(`active`,!0)(`routerLink`,Nw(107,l)),$I(6),Ch(`routerLink`,Nw(108,l)),$I(6),Ch(`routerLink`,Nw(109,l)),$I(6),Ch(`disabled`,!0)(`routerLink`,Nw(110,l)),$I(34),Ch(`active`,!0)(`routerLink`,Nw(111,l)),$I(3),Ch(`routerLink`,Nw(112,l)),$I(3),Ch(`routerLink`,Nw(113,l)),$I(3),Ch(`disabled`,!0)(`routerLink`,Nw(114,l)),$I(29),Ch(`active`,!0)(`routerLink`,Nw(115,l)),$I(13),Ch(`routerLink`,Nw(116,l)),$I(6),Ch(`routerLink`,Nw(117,l)),$I(6),Ch(`routerLink`,Nw(118,l)),$I(8),Ch(`routerLink`,Nw(119,l)),$I(6),Ch(`disabled`,!0)(`routerLink`,Nw(120,l)),$I(30),Ch(`active`,!0),$I(12),Ch(`routerLink`,Nw(121,l)),$I(4),Ch(`routerLink`,Nw(122,l)),$I(4),Ch(`routerLink`,Nw(123,l)),$I(13),Ch(`disabled`,!0))},dependencies:[V1,sy,Qi,ey,Ji,k,J1,Q1,Z1,rn,tp,qf,Ls,Kf,c],encapsulation:2})}};export{w as NavsComponent};