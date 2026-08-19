import{Gr as ul,L as ID,Un as hw,Xn as kE,_t as Pi,fn as b,ft as Oh,i as AE,on as _h,p as Ch,t as $I,ut as Nw}from"./chunk-BSgQlS93.js";import{A as K0,B as N1,Bt as g1,It as ey,L as Ls,M as Kf,S as H1,X as Qi,Xt as k1,en as m1,k as Ji,mn as qf,mt as Yf,n as $1,st as V1,vn as rn,wn as tp,xn as sy}from"./main-37K4GJAM.js";import{i as k}from"./chunk-FodikvMx.js";import{t as c}from"./chunk-5BukuvC5.js";import{S as qn,T as yn,_ as ei,d as Wn,f as Xn,h as Zn,l as Vn,o as Nt,p as Ye,r as Jn,t as $n,x as pn}from"./chunk-CW1XgXNn.js";var l=()=>[];var X=class b$1{constructor(){this.formBuilder=b(Jn);this.formCheck1=this.formBuilder.group({checkbox1:!1,checkbox2:!1,checkbox3:!1});this.formRadio1=new $n({radio1:new Zn(`Radio1`)})}setCheckBoxValue(p){let s=this.formCheck1.get(p)?.value,m=this.formCheck1.value;m[p]=!s,this.formCheck1.setValue(m)}setRadioValue(p){this.formRadio1.setValue({radio1:p})}static{this.ɵfac=function(s){return new(s||b$1)}}static{this.ɵcmp=ID({type:b$1,selectors:[[`app-button-groups`]],decls:661,vars:53,consts:[[`xs`,`12`],[`href`,`components/button-group`,`title`,`Button Group`],[1,`mb-4`],[`href`,`components/button-group`],[`aria-label`,`Basic example`,`role`,`group`],[`cButton`,``,`color`,`primary`],[`cButton`,``,`color`,`primary`,3,`active`,`routerLink`],[`cButton`,``,`color`,`primary`,3,`routerLink`],[`href`,`components/button-group#mixed-styles`],[`aria-label`,`Basic mixed styles example`,`role`,`group`],[`cButton`,``,`color`,`danger`],[`cButton`,``,`color`,`warning`],[`cButton`,``,`color`,`success`],[`href`,`components/button-group#outlined-styles`],[`aria-label`,`Basic outlined example`,`role`,`group`],[`cButton`,``,`color`,`primary`,`variant`,`outline`],[`href`,`components/button-group#checkbox-and-radio-button-groups`],[3,`formGroup`],[`aria-label`,`Basic checkbox toggle button group`,`role`,`group`],[`formControlName`,`checkbox1`,`type`,`checkbox`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`variant`,`outline`,3,`click`],[`formControlName`,`checkbox2`,`type`,`checkbox`,1,`btn-check`],[`formControlName`,`checkbox3`,`type`,`checkbox`,1,`btn-check`],[1,`mb-3`],[`aria-label`,`Basic radio toggle button group`,`role`,`group`],[`formControlName`,`radio1`,`type`,`radio`,`value`,`Radio1`,1,`btn-check`],[`formControlName`,`radio1`,`type`,`radio`,`value`,`Radio2`,1,`btn-check`],[`formControlName`,`radio1`,`type`,`radio`,`value`,`Radio3`,1,`btn-check`],[`href`,`components/button-group#button-toolbar`],[`aria-label`,`Toolbar with button groups`,`role`,`group`],[`aria-label`,`First group`,`role`,`group`,1,`me-2`],[`aria-label`,`Second group`,`role`,`group`,1,`me-2`],[`cButton`,``,`color`,`secondary`],[`aria-label`,`Third group`,`role`,`group`,1,`me-2`],[`cButton`,``,`color`,`info`],[`aria-label`,`Toolbar with button groups`,`role`,`group`,1,`mb-3`],[`cButton`,``,`color`,`secondary`,`variant`,`outline`],[`cInputGroupText`,``],[`aria-describedby`,`btnGroupAddon`,`aria-label`,`Input group example`,`cFormControl`,``,`placeholder`,`Input group example`],[`aria-label`,`Toolbar with button groups`,`role`,`group`,1,`justify-content-between`],[`href`,`components/button-group#sizing`],[`aria-label`,`Large button group`,`role`,`group`,`size`,`lg`,1,`m-1`],[`cButton`,``,`color`,`dark`,`variant`,`outline`],[`aria-label`,`Default button group`,`role`,`group`,1,`m-1`],[`aria-label`,`Small button group`,`role`,`group`,`size`,`sm`,1,`m-1`],[1,`text-body-secondary`,`small`],[`href`,`components/button-group#nesting`],[`aria-label`,`Button group with nested dropdown`,`role`,`group`],[`variant`,`btn-group`],[`cButton`,``,`cDropdownToggle`,``],[`cDropdownMenu`,``],[`cDropdownItem`,``,3,`routerLink`],[`cDropdownDivider`,``],[`href`,`components/button-group/#vertical-variation`],[`aria-label`,`Vertical button group`,`role`,`group`,3,`vertical`],[`cButton`,``,`color`,`dark`],[`placement`,`right-start`,`variant`,`btn-group`],[`cDropdownMenu`,``,`dark`,``],[`cButton`,``,`cFormCheckLabel`,``,`color`,`danger`,`variant`,`outline`,3,`click`]],template:function(s,m){s&1&&(Pi(0,`c-row`),hw(1,`
  `),Pi(2,`c-col`,0),hw(3,`
    `),_h(4,`app-docs-components`,1),hw(5,`
    `),Pi(6,`c-card`,2),hw(7,`
      `),Pi(8,`c-card-header`),hw(9,`
        `),Pi(10,`strong`),hw(11,`Angular Button Group`),ul(),hw(12,` `),Pi(13,`span`),hw(14,`Basic example`),ul(),hw(15,`
      `),ul(),hw(16,`
      `),Pi(17,`c-card-body`),hw(18,`
        `),Pi(19,`p`),hw(20,`
          Wrap a series of `),Pi(21,`code`),hw(22,`<CButton>`),ul(),hw(23,` components in
          `),Pi(24,`code`),hw(25,`<c-button-group>`),ul(),hw(26,`.
        `),ul(),hw(27,`
        `),Pi(28,`app-docs-example`,3),hw(29,`
          `),Pi(30,`c-button-group`,4),hw(31,`
            `),Pi(32,`button`,5),hw(33,`Left`),ul(),hw(34,`
            `),Pi(35,`button`,5),hw(36,`Middle`),ul(),hw(37,`
            `),Pi(38,`button`,5),hw(39,`Right`),ul(),hw(40,`
          `),ul(),hw(41,`
        `),ul(),hw(42,`
        `),Pi(43,`p`),hw(44,`
          These classes can also be added to groups of links, as an alternative to the
          `),Pi(45,`code`),hw(46,`<CNav>`),ul(),hw(47,` components.
        `),ul(),hw(48,`
        `),Pi(49,`app-docs-example`,3),hw(50,`
          `),Pi(51,`c-button-group`),hw(52,`
            `),Pi(53,`a`,6),hw(54,`
              Active link
            `),ul(),hw(55,`
            `),Pi(56,`a`,7),hw(57,`
              Link
            `),ul(),hw(58,`
            `),Pi(59,`a`,7),hw(60,`
              Link
            `),ul(),hw(61,`
          `),ul(),hw(62,`
        `),ul(),hw(63,`
      `),ul(),hw(64,`
    `),ul(),hw(65,`
  `),ul(),hw(66,`
  `),Pi(67,`c-col`,0),hw(68,`
    `),Pi(69,`c-card`,2),hw(70,`
      `),Pi(71,`c-card-header`),hw(72,`
        `),Pi(73,`strong`),hw(74,`Angular Button Group`),ul(),hw(75,` `),Pi(76,`span`),hw(77,`Mixed styles`),ul(),hw(78,`
      `),ul(),hw(79,`
      `),Pi(80,`c-card-body`),hw(81,`
        `),Pi(82,`app-docs-example`,8),hw(83,`
          `),Pi(84,`c-button-group`,9),hw(85,`
            `),Pi(86,`button`,10),hw(87,`Left`),ul(),hw(88,`
            `),Pi(89,`button`,11),hw(90,`Middle`),ul(),hw(91,`
            `),Pi(92,`button`,12),hw(93,`Right`),ul(),hw(94,`
          `),ul(),hw(95,`
        `),ul(),hw(96,`
      `),ul(),hw(97,`
    `),ul(),hw(98,`
  `),ul(),hw(99,`
  `),Pi(100,`c-col`,0),hw(101,`
    `),Pi(102,`c-card`,2),hw(103,`
      `),Pi(104,`c-card-header`),hw(105,`
        `),Pi(106,`strong`),hw(107,`Angular Button Group`),ul(),hw(108,` `),Pi(109,`span`),hw(110,`Outlined styles`),ul(),hw(111,`
      `),ul(),hw(112,`
      `),Pi(113,`c-card-body`),hw(114,`
        `),Pi(115,`app-docs-example`,13),hw(116,`
          `),Pi(117,`c-button-group`,14),hw(118,`
            `),Pi(119,`button`,15),hw(120,`
              Left
            `),ul(),hw(121,`
            `),Pi(122,`button`,15),hw(123,`
              Middle
            `),ul(),hw(124,`
            `),Pi(125,`button`,15),hw(126,`
              Right
            `),ul(),hw(127,`
          `),ul(),hw(128,`
        `),ul(),hw(129,`
      `),ul(),hw(130,`
    `),ul(),hw(131,`
  `),ul(),hw(132,`
  `),Pi(133,`c-col`,0),hw(134,`
    `),Pi(135,`c-card`,2),hw(136,`
      `),Pi(137,`c-card-header`),hw(138,`
        `),Pi(139,`strong`),hw(140,`Angular Button Group`),ul(),hw(141,` `),Pi(142,`span`),hw(143,`Checkbox and radio button groups`),ul(),hw(144,`
      `),ul(),hw(145,`
      `),Pi(146,`c-card-body`),hw(147,`
        `),Pi(148,`p`),hw(149,`
          Combine button-like checkbox and radio toggle buttons into a seamless looking button
          group.
        `),ul(),hw(150,`
        `),Pi(151,`app-docs-example`,16),hw(152,`
          `),Pi(153,`form`,17),hw(154,`
            `),Pi(155,`c-button-group`,18),hw(156,`
              `),_h(157,`input`,19),AE(),hw(158,`
              `),Pi(159,`label`,20),Oh(`click`,function(){return m.setCheckBoxValue(`checkbox1`)}),hw(160,`Checkbox 1`),ul(),hw(161,`

              `),_h(162,`input`,21),AE(),hw(163,`
              `),Pi(164,`label`,20),Oh(`click`,function(){return m.setCheckBoxValue(`checkbox2`)}),hw(165,`Checkbox 2`),ul(),hw(166,`

              `),_h(167,`input`,22),AE(),hw(168,`
              `),Pi(169,`label`,20),Oh(`click`,function(){return m.setCheckBoxValue(`checkbox3`)}),hw(170,`Checkbox
                3`),ul(),hw(171,`
            `),ul(),hw(172,`
          `),ul(),hw(173,`
          `),_h(174,`br`,23),hw(175,`
        `),ul(),hw(176,`
        `),Pi(177,`app-docs-example`,16),hw(178,`
          `),Pi(179,`form`,17),hw(180,`
            `),Pi(181,`c-button-group`,24),hw(182,`
              `),_h(183,`input`,25),AE(),hw(184,`
              `),Pi(185,`label`,20),Oh(`click`,function(){return m.setRadioValue(`Radio1`)}),hw(186,`Radio 1`),ul(),hw(187,`

              `),_h(188,`input`,26),AE(),hw(189,`
              `),Pi(190,`label`,20),Oh(`click`,function(){return m.setRadioValue(`Radio2`)}),hw(191,`Radio 2`),ul(),hw(192,`

              `),_h(193,`input`,27),AE(),hw(194,`
              `),Pi(195,`label`,20),Oh(`click`,function(){return m.setRadioValue(`Radio3`)}),hw(196,`Radio 3`),ul(),hw(197,`
            `),ul(),hw(198,`
          `),ul(),hw(199,`
        `),ul(),hw(200,`
      `),ul(),hw(201,`
    `),ul(),hw(202,`
  `),ul(),hw(203,`
  `),Pi(204,`c-col`,0),hw(205,`
    `),Pi(206,`c-card`,2),hw(207,`
      `),Pi(208,`c-card-header`),hw(209,`
        `),Pi(210,`strong`),hw(211,`Angular Button Group`),ul(),hw(212,` `),Pi(213,`span`),hw(214,`Button toolbar`),ul(),hw(215,`
      `),ul(),hw(216,`
      `),Pi(217,`c-card-body`),hw(218,`
        `),Pi(219,`p`),hw(220,`
          Join sets of button groups into button toolbars for more complicated components. Use
          utility classes as needed to space out groups, buttons, and more.
        `),ul(),hw(221,`
        `),Pi(222,`app-docs-example`,28),hw(223,`
          `),Pi(224,`c-button-toolbar`,29),hw(225,`
            `),Pi(226,`c-button-group`,30),hw(227,`
              `),Pi(228,`button`,5),hw(229,`1`),ul(),hw(230,`
              `),Pi(231,`button`,5),hw(232,`2`),ul(),hw(233,`
              `),Pi(234,`button`,5),hw(235,`3`),ul(),hw(236,`
              `),Pi(237,`button`,5),hw(238,`4`),ul(),hw(239,`
            `),ul(),hw(240,`
            `),Pi(241,`c-button-group`,31),hw(242,`
              `),Pi(243,`button`,32),hw(244,`5`),ul(),hw(245,`
              `),Pi(246,`button`,32),hw(247,`6`),ul(),hw(248,`
              `),Pi(249,`button`,32),hw(250,`7`),ul(),hw(251,`
            `),ul(),hw(252,`
            `),Pi(253,`c-button-group`,33),hw(254,`
              `),Pi(255,`button`,34),hw(256,`8`),ul(),hw(257,`
            `),ul(),hw(258,`
          `),ul(),hw(259,`
        `),ul(),hw(260,`
        `),Pi(261,`p`),hw(262,`
          Feel free to combine input groups with button groups in your toolbars. Similar to the
          example above, you\u2019ll likely need some utilities through to space items correctly.
        `),ul(),hw(263,`
        `),Pi(264,`app-docs-example`,28),hw(265,`
          `),Pi(266,`c-button-toolbar`,35),hw(267,`
            `),Pi(268,`c-button-group`,30),hw(269,`
              `),Pi(270,`button`,36),hw(271,`
                1
              `),ul(),hw(272,`
              `),Pi(273,`button`,36),hw(274,`
                2
              `),ul(),hw(275,`
              `),Pi(276,`button`,36),hw(277,`
                3
              `),ul(),hw(278,`
              `),Pi(279,`button`,36),hw(280,`
                4
              `),ul(),hw(281,`
            `),ul(),hw(282,`
            `),Pi(283,`c-input-group`),hw(284,`
              `),Pi(285,`span`,37),hw(286,`@`),ul(),hw(287,`
              `),_h(288,`input`,38),hw(289,`
            `),ul(),hw(290,`
          `),ul(),hw(291,`
          `),Pi(292,`c-button-toolbar`,39),hw(293,`
            `),Pi(294,`c-button-group`,30),hw(295,`
              `),Pi(296,`button`,36),hw(297,`
                1
              `),ul(),hw(298,`
              `),Pi(299,`button`,36),hw(300,`
                2
              `),ul(),hw(301,`
              `),Pi(302,`button`,36),hw(303,`
                3
              `),ul(),hw(304,`
              `),Pi(305,`button`,36),hw(306,`
                4
              `),ul(),hw(307,`
            `),ul(),hw(308,`
            `),Pi(309,`c-input-group`),hw(310,`
              `),Pi(311,`span`,37),hw(312,`@`),ul(),hw(313,`
              `),_h(314,`input`,38),hw(315,`
            `),ul(),hw(316,`
          `),ul(),hw(317,`
        `),ul(),hw(318,`
      `),ul(),hw(319,`
    `),ul(),hw(320,`
  `),ul(),hw(321,`
  `),Pi(322,`c-col`,0),hw(323,`
    `),Pi(324,`c-card`,2),hw(325,`
      `),Pi(326,`c-card-header`),hw(327,`
        `),Pi(328,`strong`),hw(329,`Angular Button Group`),ul(),hw(330,` `),Pi(331,`span`),hw(332,`Sizing`),ul(),hw(333,`
      `),ul(),hw(334,`
      `),Pi(335,`c-card-body`),hw(336,`
        `),Pi(337,`p`),hw(338,`
          Alternatively, of implementing button sizing classes to each button in a group, set
          `),Pi(339,`code`),hw(340,`size`),ul(),hw(341,` property to all `),Pi(342,`code`),hw(343,`<c-button-group>`),ul(),hw(344,`'s, including
          each one when nesting multiple groups.
        `),ul(),hw(345,`
        `),Pi(346,`app-docs-example`,40),hw(347,`
          `),Pi(348,`c-button-group`,41),hw(349,`
            `),Pi(350,`button`,42),hw(351,`
              Left
            `),ul(),hw(352,`
            `),Pi(353,`button`,42),hw(354,`
              Middle
            `),ul(),hw(355,`
            `),Pi(356,`button`,42),hw(357,`
              Right
            `),ul(),hw(358,`
          `),ul(),hw(359,`
          `),_h(360,`br`),hw(361,`
          `),Pi(362,`c-button-group`,43),hw(363,`
            `),Pi(364,`button`,42),hw(365,`
              Left
            `),ul(),hw(366,`
            `),Pi(367,`button`,42),hw(368,`
              Middle
            `),ul(),hw(369,`
            `),Pi(370,`button`,42),hw(371,`
              Right
            `),ul(),hw(372,`
          `),ul(),hw(373,`
          `),_h(374,`br`),hw(375,`
          `),Pi(376,`c-button-group`,44),hw(377,`
            `),Pi(378,`button`,42),hw(379,`
              Left
            `),ul(),hw(380,`
            `),Pi(381,`button`,42),hw(382,`
              Middle
            `),ul(),hw(383,`
            `),Pi(384,`button`,42),hw(385,`
              Right
            `),ul(),hw(386,`
          `),ul(),hw(387,`
        `),ul(),hw(388,`
      `),ul(),hw(389,`
    `),ul(),hw(390,`
  `),ul(),hw(391,`
  `),Pi(392,`c-col`,0),hw(393,`
    `),Pi(394,`c-card`,2),hw(395,`
      `),Pi(396,`c-card-header`),hw(397,`
        `),Pi(398,`strong`),hw(399,`Angular Button Group`),ul(),hw(400,` `),Pi(401,`span`),hw(402,`Nesting`),ul(),hw(403,`
      `),ul(),hw(404,`
      `),Pi(405,`c-card-body`),hw(406,`
        `),Pi(407,`p`,45),hw(408,`
          Put a `),Pi(409,`code`),hw(410,`<c-button-group>`),ul(),hw(411,` inside another
          `),Pi(412,`code`),hw(413,`<c-button-group>`),ul(),hw(414,` when you need dropdown menus combined with a series
          of buttons.
        `),ul(),hw(415,`
        `),Pi(416,`app-docs-example`,46),hw(417,`
          `),Pi(418,`c-button-group`,47),hw(419,`
            `),Pi(420,`button`,5),hw(421,`1`),ul(),hw(422,`
            `),Pi(423,`button`,5),hw(424,`2`),ul(),hw(425,`
            `),Pi(426,`c-dropdown`,48),hw(427,`
              `),Pi(428,`button`,49),hw(429,`
                Dropdown
              `),ul(),hw(430,`
              `),Pi(431,`ul`,50),hw(432,`
                `),Pi(433,`li`)(434,`a`,51),hw(435,`Action`),ul()(),hw(436,`
                `),Pi(437,`li`)(438,`a`,51),hw(439,`Another action`),ul()(),hw(440,`
                `),Pi(441,`li`)(442,`a`,51),hw(443,`Something else here`),ul()(),hw(444,`
                `),_h(445,`li`,52),hw(446,`
                `),Pi(447,`li`)(448,`a`,51),hw(449,`Separated link`),ul()(),hw(450,`
              `),ul(),hw(451,`
            `),ul(),hw(452,`
          `),ul(),hw(453,`
        `),ul(),hw(454,`
      `),ul(),hw(455,`
    `),ul(),hw(456,`
  `),ul(),hw(457,`
  `),Pi(458,`c-col`,0),hw(459,`
    `),Pi(460,`c-card`,2),hw(461,`
      `),Pi(462,`c-card-header`),hw(463,`
        `),Pi(464,`strong`),hw(465,`Angular Button Group`),ul(),hw(466,` `),Pi(467,`span`),hw(468,`Vertical variation`),ul(),hw(469,`
      `),ul(),hw(470,`
      `),Pi(471,`c-card-body`),hw(472,`
        `),Pi(473,`p`,45),hw(474,`
          Create a set of buttons that appear vertically stacked rather than horizontally.
          `),Pi(475,`strong`),hw(476,`Split button dropdowns are not supported here.`),ul(),hw(477,`
        `),ul(),hw(478,`
        `),Pi(479,`app-docs-example`,53),hw(480,`
          `),Pi(481,`c-button-group`,54),hw(482,`
            `),Pi(483,`button`,55),hw(484,`Button`),ul(),hw(485,`
            `),Pi(486,`button`,55),hw(487,`Button`),ul(),hw(488,`
            `),Pi(489,`button`,55),hw(490,`Button`),ul(),hw(491,`
            `),Pi(492,`button`,55),hw(493,`Button`),ul(),hw(494,`
            `),Pi(495,`button`,55),hw(496,`Button`),ul(),hw(497,`
            `),Pi(498,`button`,55),hw(499,`Button`),ul(),hw(500,`
            `),Pi(501,`button`,55),hw(502,`Button`),ul(),hw(503,`
          `),ul(),hw(504,`
          `),_h(505,`br`),hw(506,`
        `),ul(),hw(507,`
        `),Pi(508,`app-docs-example`,53),hw(509,`
          `),Pi(510,`c-button-group`,54),hw(511,`
            `),Pi(512,`button`,5),hw(513,`Button`),ul(),hw(514,`
            `),Pi(515,`button`,5),hw(516,`Button`),ul(),hw(517,`
            `),Pi(518,`c-dropdown`,48),hw(519,`
              `),Pi(520,`button`,49),hw(521,`
                Dropdown
              `),ul(),hw(522,`
              `),Pi(523,`ul`,50),hw(524,`
                `),Pi(525,`li`)(526,`a`,51),hw(527,`Action`),ul()(),hw(528,`
                `),Pi(529,`li`)(530,`a`,51),hw(531,`Another action`),ul()(),hw(532,`
                `),Pi(533,`li`)(534,`a`,51),hw(535,`Something else here`),ul()(),hw(536,`
                `),_h(537,`li`,52),hw(538,`
                `),Pi(539,`li`)(540,`a`,51),hw(541,`Separated link`),ul()(),hw(542,`
              `),ul(),hw(543,`
            `),ul(),hw(544,`
            `),Pi(545,`button`,5),hw(546,`Button`),ul(),hw(547,`
            `),Pi(548,`button`,5),hw(549,`Button`),ul(),hw(550,`
            `),Pi(551,`c-dropdown`,48),hw(552,`
              `),Pi(553,`button`,49),hw(554,`
                Dropdown
              `),ul(),hw(555,`
              `),Pi(556,`ul`,50),hw(557,`
                `),Pi(558,`li`)(559,`a`,51),hw(560,`Action`),ul()(),hw(561,`
                `),Pi(562,`li`)(563,`a`,51),hw(564,`Another action`),ul()(),hw(565,`
                `),Pi(566,`li`)(567,`a`,51),hw(568,`Something else here`),ul()(),hw(569,`
                `),_h(570,`li`,52),hw(571,`
                `),Pi(572,`li`)(573,`a`,51),hw(574,`Separated link`),ul()(),hw(575,`
              `),ul(),hw(576,`
            `),ul(),hw(577,`
            `),Pi(578,`c-dropdown`,56),hw(579,`
              `),Pi(580,`button`,49),hw(581,`
                Dropdown
              `),ul(),hw(582,`
              `),Pi(583,`ul`,57),hw(584,`
                `),Pi(585,`li`)(586,`a`,51),hw(587,`Action`),ul()(),hw(588,`
                `),Pi(589,`li`)(590,`a`,51),hw(591,`Another action`),ul()(),hw(592,`
                `),Pi(593,`li`)(594,`a`,51),hw(595,`Something else here`),ul()(),hw(596,`
                `),_h(597,`li`,52),hw(598,`
                `),Pi(599,`li`)(600,`a`,51),hw(601,`Separated link`),ul()(),hw(602,`
              `),ul(),hw(603,`
            `),ul(),hw(604,`
            `),Pi(605,`c-dropdown`,48),hw(606,`
              `),Pi(607,`button`,49),hw(608,`
                Dropdown
              `),ul(),hw(609,`
              `),Pi(610,`ul`,50),hw(611,`
                `),Pi(612,`li`)(613,`a`,51),hw(614,`Action`),ul()(),hw(615,`
                `),Pi(616,`li`)(617,`a`,51),hw(618,`Another action`),ul()(),hw(619,`
                `),Pi(620,`li`)(621,`a`,51),hw(622,`Something else here`),ul()(),hw(623,`
                `),_h(624,`li`,52),hw(625,`
                `),Pi(626,`li`)(627,`a`,51),hw(628,`Separated link`),ul()(),hw(629,`
              `),ul(),hw(630,`
            `),ul(),hw(631,`
          `),ul(),hw(632,`
        `),ul(),hw(633,`
        `),Pi(634,`app-docs-example`,53),hw(635,`
          `),Pi(636,`form`,17),hw(637,`
            `),Pi(638,`c-button-group`,54),hw(639,`
              `),_h(640,`input`,25),AE(),hw(641,`
              `),Pi(642,`label`,58),Oh(`click`,function(){return m.setRadioValue(`Radio1`)}),hw(643,`Radio 1`),ul(),hw(644,`

              `),_h(645,`input`,26),AE(),hw(646,`
              `),Pi(647,`label`,58),Oh(`click`,function(){return m.setRadioValue(`Radio2`)}),hw(648,`Radio 2`),ul(),hw(649,`

              `),_h(650,`input`,27),AE(),hw(651,`
              `),Pi(652,`label`,58),Oh(`click`,function(){return m.setRadioValue(`Radio3`)}),hw(653,`Radio
                3`),ul(),hw(654,`
            `),ul(),hw(655,`
          `),ul(),hw(656,`
        `),ul(),hw(657,`
      `),ul(),hw(658,`
    `),ul(),hw(659,`
  `),ul(),hw(660,`
`),ul()),s&2&&($I(53),Ch(`active`,!0)(`routerLink`,Nw(30,l)),$I(3),Ch(`routerLink`,Nw(31,l)),$I(3),Ch(`routerLink`,Nw(32,l)),$I(94),Ch(`formGroup`,m.formCheck1),$I(4),kE(),$I(5),kE(),$I(5),kE(),$I(12),Ch(`formGroup`,m.formRadio1),$I(4),kE(),$I(5),kE(),$I(5),kE(),$I(241),Ch(`routerLink`,Nw(33,l)),$I(4),Ch(`routerLink`,Nw(34,l)),$I(4),Ch(`routerLink`,Nw(35,l)),$I(6),Ch(`routerLink`,Nw(36,l)),$I(33),Ch(`vertical`,!0),$I(29),Ch(`vertical`,!0),$I(16),Ch(`routerLink`,Nw(37,l)),$I(4),Ch(`routerLink`,Nw(38,l)),$I(4),Ch(`routerLink`,Nw(39,l)),$I(6),Ch(`routerLink`,Nw(40,l)),$I(19),Ch(`routerLink`,Nw(41,l)),$I(4),Ch(`routerLink`,Nw(42,l)),$I(4),Ch(`routerLink`,Nw(43,l)),$I(6),Ch(`routerLink`,Nw(44,l)),$I(13),Ch(`routerLink`,Nw(45,l)),$I(4),Ch(`routerLink`,Nw(46,l)),$I(4),Ch(`routerLink`,Nw(47,l)),$I(6),Ch(`routerLink`,Nw(48,l)),$I(13),Ch(`routerLink`,Nw(49,l)),$I(4),Ch(`routerLink`,Nw(50,l)),$I(4),Ch(`routerLink`,Nw(51,l)),$I(6),Ch(`routerLink`,Nw(52,l)),$I(9),Ch(`formGroup`,m.formRadio1),$I(2),Ch(`vertical`,!0),$I(2),kE(),$I(5),kE(),$I(5),kE())},dependencies:[V1,sy,Qi,ey,Ji,k,g1,K0,rn,ei,Xn,Ye,Nt,pn,Wn,qn,Vn,yn,Yf,m1,$1,H1,k1,tp,qf,Ls,Kf,N1,c],encapsulation:2})}};export{X as ButtonGroupsComponent};