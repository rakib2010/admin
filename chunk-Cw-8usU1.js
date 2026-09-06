import{Jn as fl,Kt as T,Pr as qh,R as HI,at as Lh,en as VC,ht as ND,n as $I,pn as XE,pr as ji,qt as TC,wt as Oh}from"./chunk-CNvvMoDe.js";import{D as K1,Dn as uy,Gt as j1,It as fp,Ln as y1,T as Ji,U as Qi,_n as rp,at as W1,cn as oy,g as G1,gn as rn,jn as vy,m as F1,nt as Us,sn as op,u as D1,xn as sp}from"./main-KR47Z6Z4.js";import{i as k}from"./chunk-BoQ4iLTD.js";import{t as c}from"./chunk-CqpfDRQx.js";import{S as qn,T as yn,_ as ei,d as Wn,f as Xn,h as Zn,l as Vn,o as Nt,p as Ye,r as Jn,t as $n,x as pn}from"./chunk-CGCxv84v.js";var l=()=>[];var X=class b{constructor(){this.formBuilder=T(Jn);this.formCheck1=this.formBuilder.group({checkbox1:!1,checkbox2:!1,checkbox3:!1});this.formRadio1=new $n({radio1:new Zn(`Radio1`)})}setCheckBoxValue(p){let s=this.formCheck1.get(p)?.value,m=this.formCheck1.value;m[p]=!s,this.formCheck1.setValue(m)}setRadioValue(p){this.formRadio1.setValue({radio1:p})}static{this.ɵfac=function(s){return new(s||b)}}static{this.ɵcmp=ND({type:b,selectors:[[`app-button-groups`]],decls:661,vars:53,consts:[[`xs`,`12`],[`href`,`components/button-group`,`title`,`Button Group`],[1,`mb-4`],[`href`,`components/button-group`],[`aria-label`,`Basic example`,`role`,`group`],[`cButton`,``,`color`,`primary`],[`cButton`,``,`color`,`primary`,3,`active`,`routerLink`],[`cButton`,``,`color`,`primary`,3,`routerLink`],[`href`,`components/button-group#mixed-styles`],[`aria-label`,`Basic mixed styles example`,`role`,`group`],[`cButton`,``,`color`,`danger`],[`cButton`,``,`color`,`warning`],[`cButton`,``,`color`,`success`],[`href`,`components/button-group#outlined-styles`],[`aria-label`,`Basic outlined example`,`role`,`group`],[`cButton`,``,`color`,`primary`,`variant`,`outline`],[`href`,`components/button-group#checkbox-and-radio-button-groups`],[3,`formGroup`],[`aria-label`,`Basic checkbox toggle button group`,`role`,`group`],[`formControlName`,`checkbox1`,`type`,`checkbox`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`variant`,`outline`,3,`click`],[`formControlName`,`checkbox2`,`type`,`checkbox`,1,`btn-check`],[`formControlName`,`checkbox3`,`type`,`checkbox`,1,`btn-check`],[1,`mb-3`],[`aria-label`,`Basic radio toggle button group`,`role`,`group`],[`formControlName`,`radio1`,`type`,`radio`,`value`,`Radio1`,1,`btn-check`],[`formControlName`,`radio1`,`type`,`radio`,`value`,`Radio2`,1,`btn-check`],[`formControlName`,`radio1`,`type`,`radio`,`value`,`Radio3`,1,`btn-check`],[`href`,`components/button-group#button-toolbar`],[`aria-label`,`Toolbar with button groups`,`role`,`group`],[`aria-label`,`First group`,`role`,`group`,1,`me-2`],[`aria-label`,`Second group`,`role`,`group`,1,`me-2`],[`cButton`,``,`color`,`secondary`],[`aria-label`,`Third group`,`role`,`group`,1,`me-2`],[`cButton`,``,`color`,`info`],[`aria-label`,`Toolbar with button groups`,`role`,`group`,1,`mb-3`],[`cButton`,``,`color`,`secondary`,`variant`,`outline`],[`cInputGroupText`,``],[`aria-describedby`,`btnGroupAddon`,`aria-label`,`Input group example`,`cFormControl`,``,`placeholder`,`Input group example`],[`aria-label`,`Toolbar with button groups`,`role`,`group`,1,`justify-content-between`],[`href`,`components/button-group#sizing`],[`aria-label`,`Large button group`,`role`,`group`,`size`,`lg`,1,`m-1`],[`cButton`,``,`color`,`dark`,`variant`,`outline`],[`aria-label`,`Default button group`,`role`,`group`,1,`m-1`],[`aria-label`,`Small button group`,`role`,`group`,`size`,`sm`,1,`m-1`],[1,`text-body-secondary`,`small`],[`href`,`components/button-group#nesting`],[`aria-label`,`Button group with nested dropdown`,`role`,`group`],[`variant`,`btn-group`],[`cButton`,``,`cDropdownToggle`,``],[`cDropdownMenu`,``],[`cDropdownItem`,``,3,`routerLink`],[`cDropdownDivider`,``],[`href`,`components/button-group/#vertical-variation`],[`aria-label`,`Vertical button group`,`role`,`group`,3,`vertical`],[`cButton`,``,`color`,`dark`],[`placement`,`right-start`,`variant`,`btn-group`],[`cDropdownMenu`,``,`dark`,``],[`cButton`,``,`cFormCheckLabel`,``,`color`,`danger`,`variant`,`outline`,3,`click`]],template:function(s,m){s&1&&(ji(0,`c-row`),TC(1,`
  `),ji(2,`c-col`,0),TC(3,`
    `),Lh(4,`app-docs-components`,1),TC(5,`
    `),ji(6,`c-card`,2),TC(7,`
      `),ji(8,`c-card-header`),TC(9,`
        `),ji(10,`strong`),TC(11,`Angular Button Group`),fl(),TC(12,` `),ji(13,`span`),TC(14,`Basic example`),fl(),TC(15,`
      `),fl(),TC(16,`
      `),ji(17,`c-card-body`),TC(18,`
        `),ji(19,`p`),TC(20,`
          Wrap a series of `),ji(21,`code`),TC(22,`<CButton>`),fl(),TC(23,` components in
          `),ji(24,`code`),TC(25,`<c-button-group>`),fl(),TC(26,`.
        `),fl(),TC(27,`
        `),ji(28,`app-docs-example`,3),TC(29,`
          `),ji(30,`c-button-group`,4),TC(31,`
            `),ji(32,`button`,5),TC(33,`Left`),fl(),TC(34,`
            `),ji(35,`button`,5),TC(36,`Middle`),fl(),TC(37,`
            `),ji(38,`button`,5),TC(39,`Right`),fl(),TC(40,`
          `),fl(),TC(41,`
        `),fl(),TC(42,`
        `),ji(43,`p`),TC(44,`
          These classes can also be added to groups of links, as an alternative to the
          `),ji(45,`code`),TC(46,`<CNav>`),fl(),TC(47,` components.
        `),fl(),TC(48,`
        `),ji(49,`app-docs-example`,3),TC(50,`
          `),ji(51,`c-button-group`),TC(52,`
            `),ji(53,`a`,6),TC(54,`
              Active link
            `),fl(),TC(55,`
            `),ji(56,`a`,7),TC(57,`
              Link
            `),fl(),TC(58,`
            `),ji(59,`a`,7),TC(60,`
              Link
            `),fl(),TC(61,`
          `),fl(),TC(62,`
        `),fl(),TC(63,`
      `),fl(),TC(64,`
    `),fl(),TC(65,`
  `),fl(),TC(66,`
  `),ji(67,`c-col`,0),TC(68,`
    `),ji(69,`c-card`,2),TC(70,`
      `),ji(71,`c-card-header`),TC(72,`
        `),ji(73,`strong`),TC(74,`Angular Button Group`),fl(),TC(75,` `),ji(76,`span`),TC(77,`Mixed styles`),fl(),TC(78,`
      `),fl(),TC(79,`
      `),ji(80,`c-card-body`),TC(81,`
        `),ji(82,`app-docs-example`,8),TC(83,`
          `),ji(84,`c-button-group`,9),TC(85,`
            `),ji(86,`button`,10),TC(87,`Left`),fl(),TC(88,`
            `),ji(89,`button`,11),TC(90,`Middle`),fl(),TC(91,`
            `),ji(92,`button`,12),TC(93,`Right`),fl(),TC(94,`
          `),fl(),TC(95,`
        `),fl(),TC(96,`
      `),fl(),TC(97,`
    `),fl(),TC(98,`
  `),fl(),TC(99,`
  `),ji(100,`c-col`,0),TC(101,`
    `),ji(102,`c-card`,2),TC(103,`
      `),ji(104,`c-card-header`),TC(105,`
        `),ji(106,`strong`),TC(107,`Angular Button Group`),fl(),TC(108,` `),ji(109,`span`),TC(110,`Outlined styles`),fl(),TC(111,`
      `),fl(),TC(112,`
      `),ji(113,`c-card-body`),TC(114,`
        `),ji(115,`app-docs-example`,13),TC(116,`
          `),ji(117,`c-button-group`,14),TC(118,`
            `),ji(119,`button`,15),TC(120,`
              Left
            `),fl(),TC(121,`
            `),ji(122,`button`,15),TC(123,`
              Middle
            `),fl(),TC(124,`
            `),ji(125,`button`,15),TC(126,`
              Right
            `),fl(),TC(127,`
          `),fl(),TC(128,`
        `),fl(),TC(129,`
      `),fl(),TC(130,`
    `),fl(),TC(131,`
  `),fl(),TC(132,`
  `),ji(133,`c-col`,0),TC(134,`
    `),ji(135,`c-card`,2),TC(136,`
      `),ji(137,`c-card-header`),TC(138,`
        `),ji(139,`strong`),TC(140,`Angular Button Group`),fl(),TC(141,` `),ji(142,`span`),TC(143,`Checkbox and radio button groups`),fl(),TC(144,`
      `),fl(),TC(145,`
      `),ji(146,`c-card-body`),TC(147,`
        `),ji(148,`p`),TC(149,`
          Combine button-like checkbox and radio toggle buttons into a seamless looking button
          group.
        `),fl(),TC(150,`
        `),ji(151,`app-docs-example`,16),TC(152,`
          `),ji(153,`form`,17),TC(154,`
            `),ji(155,`c-button-group`,18),TC(156,`
              `),Lh(157,`input`,19),HI(),TC(158,`
              `),ji(159,`label`,20),qh(`click`,function(){return m.setCheckBoxValue(`checkbox1`)}),TC(160,`Checkbox 1`),fl(),TC(161,`

              `),Lh(162,`input`,21),HI(),TC(163,`
              `),ji(164,`label`,20),qh(`click`,function(){return m.setCheckBoxValue(`checkbox2`)}),TC(165,`Checkbox 2`),fl(),TC(166,`

              `),Lh(167,`input`,22),HI(),TC(168,`
              `),ji(169,`label`,20),qh(`click`,function(){return m.setCheckBoxValue(`checkbox3`)}),TC(170,`Checkbox
                3`),fl(),TC(171,`
            `),fl(),TC(172,`
          `),fl(),TC(173,`
          `),Lh(174,`br`,23),TC(175,`
        `),fl(),TC(176,`
        `),ji(177,`app-docs-example`,16),TC(178,`
          `),ji(179,`form`,17),TC(180,`
            `),ji(181,`c-button-group`,24),TC(182,`
              `),Lh(183,`input`,25),HI(),TC(184,`
              `),ji(185,`label`,20),qh(`click`,function(){return m.setRadioValue(`Radio1`)}),TC(186,`Radio 1`),fl(),TC(187,`

              `),Lh(188,`input`,26),HI(),TC(189,`
              `),ji(190,`label`,20),qh(`click`,function(){return m.setRadioValue(`Radio2`)}),TC(191,`Radio 2`),fl(),TC(192,`

              `),Lh(193,`input`,27),HI(),TC(194,`
              `),ji(195,`label`,20),qh(`click`,function(){return m.setRadioValue(`Radio3`)}),TC(196,`Radio 3`),fl(),TC(197,`
            `),fl(),TC(198,`
          `),fl(),TC(199,`
        `),fl(),TC(200,`
      `),fl(),TC(201,`
    `),fl(),TC(202,`
  `),fl(),TC(203,`
  `),ji(204,`c-col`,0),TC(205,`
    `),ji(206,`c-card`,2),TC(207,`
      `),ji(208,`c-card-header`),TC(209,`
        `),ji(210,`strong`),TC(211,`Angular Button Group`),fl(),TC(212,` `),ji(213,`span`),TC(214,`Button toolbar`),fl(),TC(215,`
      `),fl(),TC(216,`
      `),ji(217,`c-card-body`),TC(218,`
        `),ji(219,`p`),TC(220,`
          Join sets of button groups into button toolbars for more complicated components. Use
          utility classes as needed to space out groups, buttons, and more.
        `),fl(),TC(221,`
        `),ji(222,`app-docs-example`,28),TC(223,`
          `),ji(224,`c-button-toolbar`,29),TC(225,`
            `),ji(226,`c-button-group`,30),TC(227,`
              `),ji(228,`button`,5),TC(229,`1`),fl(),TC(230,`
              `),ji(231,`button`,5),TC(232,`2`),fl(),TC(233,`
              `),ji(234,`button`,5),TC(235,`3`),fl(),TC(236,`
              `),ji(237,`button`,5),TC(238,`4`),fl(),TC(239,`
            `),fl(),TC(240,`
            `),ji(241,`c-button-group`,31),TC(242,`
              `),ji(243,`button`,32),TC(244,`5`),fl(),TC(245,`
              `),ji(246,`button`,32),TC(247,`6`),fl(),TC(248,`
              `),ji(249,`button`,32),TC(250,`7`),fl(),TC(251,`
            `),fl(),TC(252,`
            `),ji(253,`c-button-group`,33),TC(254,`
              `),ji(255,`button`,34),TC(256,`8`),fl(),TC(257,`
            `),fl(),TC(258,`
          `),fl(),TC(259,`
        `),fl(),TC(260,`
        `),ji(261,`p`),TC(262,`
          Feel free to combine input groups with button groups in your toolbars. Similar to the
          example above, you\u2019ll likely need some utilities through to space items correctly.
        `),fl(),TC(263,`
        `),ji(264,`app-docs-example`,28),TC(265,`
          `),ji(266,`c-button-toolbar`,35),TC(267,`
            `),ji(268,`c-button-group`,30),TC(269,`
              `),ji(270,`button`,36),TC(271,`
                1
              `),fl(),TC(272,`
              `),ji(273,`button`,36),TC(274,`
                2
              `),fl(),TC(275,`
              `),ji(276,`button`,36),TC(277,`
                3
              `),fl(),TC(278,`
              `),ji(279,`button`,36),TC(280,`
                4
              `),fl(),TC(281,`
            `),fl(),TC(282,`
            `),ji(283,`c-input-group`),TC(284,`
              `),ji(285,`span`,37),TC(286,`@`),fl(),TC(287,`
              `),Lh(288,`input`,38),TC(289,`
            `),fl(),TC(290,`
          `),fl(),TC(291,`
          `),ji(292,`c-button-toolbar`,39),TC(293,`
            `),ji(294,`c-button-group`,30),TC(295,`
              `),ji(296,`button`,36),TC(297,`
                1
              `),fl(),TC(298,`
              `),ji(299,`button`,36),TC(300,`
                2
              `),fl(),TC(301,`
              `),ji(302,`button`,36),TC(303,`
                3
              `),fl(),TC(304,`
              `),ji(305,`button`,36),TC(306,`
                4
              `),fl(),TC(307,`
            `),fl(),TC(308,`
            `),ji(309,`c-input-group`),TC(310,`
              `),ji(311,`span`,37),TC(312,`@`),fl(),TC(313,`
              `),Lh(314,`input`,38),TC(315,`
            `),fl(),TC(316,`
          `),fl(),TC(317,`
        `),fl(),TC(318,`
      `),fl(),TC(319,`
    `),fl(),TC(320,`
  `),fl(),TC(321,`
  `),ji(322,`c-col`,0),TC(323,`
    `),ji(324,`c-card`,2),TC(325,`
      `),ji(326,`c-card-header`),TC(327,`
        `),ji(328,`strong`),TC(329,`Angular Button Group`),fl(),TC(330,` `),ji(331,`span`),TC(332,`Sizing`),fl(),TC(333,`
      `),fl(),TC(334,`
      `),ji(335,`c-card-body`),TC(336,`
        `),ji(337,`p`),TC(338,`
          Alternatively, of implementing button sizing classes to each button in a group, set
          `),ji(339,`code`),TC(340,`size`),fl(),TC(341,` property to all `),ji(342,`code`),TC(343,`<c-button-group>`),fl(),TC(344,`'s, including
          each one when nesting multiple groups.
        `),fl(),TC(345,`
        `),ji(346,`app-docs-example`,40),TC(347,`
          `),ji(348,`c-button-group`,41),TC(349,`
            `),ji(350,`button`,42),TC(351,`
              Left
            `),fl(),TC(352,`
            `),ji(353,`button`,42),TC(354,`
              Middle
            `),fl(),TC(355,`
            `),ji(356,`button`,42),TC(357,`
              Right
            `),fl(),TC(358,`
          `),fl(),TC(359,`
          `),Lh(360,`br`),TC(361,`
          `),ji(362,`c-button-group`,43),TC(363,`
            `),ji(364,`button`,42),TC(365,`
              Left
            `),fl(),TC(366,`
            `),ji(367,`button`,42),TC(368,`
              Middle
            `),fl(),TC(369,`
            `),ji(370,`button`,42),TC(371,`
              Right
            `),fl(),TC(372,`
          `),fl(),TC(373,`
          `),Lh(374,`br`),TC(375,`
          `),ji(376,`c-button-group`,44),TC(377,`
            `),ji(378,`button`,42),TC(379,`
              Left
            `),fl(),TC(380,`
            `),ji(381,`button`,42),TC(382,`
              Middle
            `),fl(),TC(383,`
            `),ji(384,`button`,42),TC(385,`
              Right
            `),fl(),TC(386,`
          `),fl(),TC(387,`
        `),fl(),TC(388,`
      `),fl(),TC(389,`
    `),fl(),TC(390,`
  `),fl(),TC(391,`
  `),ji(392,`c-col`,0),TC(393,`
    `),ji(394,`c-card`,2),TC(395,`
      `),ji(396,`c-card-header`),TC(397,`
        `),ji(398,`strong`),TC(399,`Angular Button Group`),fl(),TC(400,` `),ji(401,`span`),TC(402,`Nesting`),fl(),TC(403,`
      `),fl(),TC(404,`
      `),ji(405,`c-card-body`),TC(406,`
        `),ji(407,`p`,45),TC(408,`
          Put a `),ji(409,`code`),TC(410,`<c-button-group>`),fl(),TC(411,` inside another
          `),ji(412,`code`),TC(413,`<c-button-group>`),fl(),TC(414,` when you need dropdown menus combined with a series
          of buttons.
        `),fl(),TC(415,`
        `),ji(416,`app-docs-example`,46),TC(417,`
          `),ji(418,`c-button-group`,47),TC(419,`
            `),ji(420,`button`,5),TC(421,`1`),fl(),TC(422,`
            `),ji(423,`button`,5),TC(424,`2`),fl(),TC(425,`
            `),ji(426,`c-dropdown`,48),TC(427,`
              `),ji(428,`button`,49),TC(429,`
                Dropdown
              `),fl(),TC(430,`
              `),ji(431,`ul`,50),TC(432,`
                `),ji(433,`li`)(434,`a`,51),TC(435,`Action`),fl()(),TC(436,`
                `),ji(437,`li`)(438,`a`,51),TC(439,`Another action`),fl()(),TC(440,`
                `),ji(441,`li`)(442,`a`,51),TC(443,`Something else here`),fl()(),TC(444,`
                `),Lh(445,`li`,52),TC(446,`
                `),ji(447,`li`)(448,`a`,51),TC(449,`Separated link`),fl()(),TC(450,`
              `),fl(),TC(451,`
            `),fl(),TC(452,`
          `),fl(),TC(453,`
        `),fl(),TC(454,`
      `),fl(),TC(455,`
    `),fl(),TC(456,`
  `),fl(),TC(457,`
  `),ji(458,`c-col`,0),TC(459,`
    `),ji(460,`c-card`,2),TC(461,`
      `),ji(462,`c-card-header`),TC(463,`
        `),ji(464,`strong`),TC(465,`Angular Button Group`),fl(),TC(466,` `),ji(467,`span`),TC(468,`Vertical variation`),fl(),TC(469,`
      `),fl(),TC(470,`
      `),ji(471,`c-card-body`),TC(472,`
        `),ji(473,`p`,45),TC(474,`
          Create a set of buttons that appear vertically stacked rather than horizontally.
          `),ji(475,`strong`),TC(476,`Split button dropdowns are not supported here.`),fl(),TC(477,`
        `),fl(),TC(478,`
        `),ji(479,`app-docs-example`,53),TC(480,`
          `),ji(481,`c-button-group`,54),TC(482,`
            `),ji(483,`button`,55),TC(484,`Button`),fl(),TC(485,`
            `),ji(486,`button`,55),TC(487,`Button`),fl(),TC(488,`
            `),ji(489,`button`,55),TC(490,`Button`),fl(),TC(491,`
            `),ji(492,`button`,55),TC(493,`Button`),fl(),TC(494,`
            `),ji(495,`button`,55),TC(496,`Button`),fl(),TC(497,`
            `),ji(498,`button`,55),TC(499,`Button`),fl(),TC(500,`
            `),ji(501,`button`,55),TC(502,`Button`),fl(),TC(503,`
          `),fl(),TC(504,`
          `),Lh(505,`br`),TC(506,`
        `),fl(),TC(507,`
        `),ji(508,`app-docs-example`,53),TC(509,`
          `),ji(510,`c-button-group`,54),TC(511,`
            `),ji(512,`button`,5),TC(513,`Button`),fl(),TC(514,`
            `),ji(515,`button`,5),TC(516,`Button`),fl(),TC(517,`
            `),ji(518,`c-dropdown`,48),TC(519,`
              `),ji(520,`button`,49),TC(521,`
                Dropdown
              `),fl(),TC(522,`
              `),ji(523,`ul`,50),TC(524,`
                `),ji(525,`li`)(526,`a`,51),TC(527,`Action`),fl()(),TC(528,`
                `),ji(529,`li`)(530,`a`,51),TC(531,`Another action`),fl()(),TC(532,`
                `),ji(533,`li`)(534,`a`,51),TC(535,`Something else here`),fl()(),TC(536,`
                `),Lh(537,`li`,52),TC(538,`
                `),ji(539,`li`)(540,`a`,51),TC(541,`Separated link`),fl()(),TC(542,`
              `),fl(),TC(543,`
            `),fl(),TC(544,`
            `),ji(545,`button`,5),TC(546,`Button`),fl(),TC(547,`
            `),ji(548,`button`,5),TC(549,`Button`),fl(),TC(550,`
            `),ji(551,`c-dropdown`,48),TC(552,`
              `),ji(553,`button`,49),TC(554,`
                Dropdown
              `),fl(),TC(555,`
              `),ji(556,`ul`,50),TC(557,`
                `),ji(558,`li`)(559,`a`,51),TC(560,`Action`),fl()(),TC(561,`
                `),ji(562,`li`)(563,`a`,51),TC(564,`Another action`),fl()(),TC(565,`
                `),ji(566,`li`)(567,`a`,51),TC(568,`Something else here`),fl()(),TC(569,`
                `),Lh(570,`li`,52),TC(571,`
                `),ji(572,`li`)(573,`a`,51),TC(574,`Separated link`),fl()(),TC(575,`
              `),fl(),TC(576,`
            `),fl(),TC(577,`
            `),ji(578,`c-dropdown`,56),TC(579,`
              `),ji(580,`button`,49),TC(581,`
                Dropdown
              `),fl(),TC(582,`
              `),ji(583,`ul`,57),TC(584,`
                `),ji(585,`li`)(586,`a`,51),TC(587,`Action`),fl()(),TC(588,`
                `),ji(589,`li`)(590,`a`,51),TC(591,`Another action`),fl()(),TC(592,`
                `),ji(593,`li`)(594,`a`,51),TC(595,`Something else here`),fl()(),TC(596,`
                `),Lh(597,`li`,52),TC(598,`
                `),ji(599,`li`)(600,`a`,51),TC(601,`Separated link`),fl()(),TC(602,`
              `),fl(),TC(603,`
            `),fl(),TC(604,`
            `),ji(605,`c-dropdown`,48),TC(606,`
              `),ji(607,`button`,49),TC(608,`
                Dropdown
              `),fl(),TC(609,`
              `),ji(610,`ul`,50),TC(611,`
                `),ji(612,`li`)(613,`a`,51),TC(614,`Action`),fl()(),TC(615,`
                `),ji(616,`li`)(617,`a`,51),TC(618,`Another action`),fl()(),TC(619,`
                `),ji(620,`li`)(621,`a`,51),TC(622,`Something else here`),fl()(),TC(623,`
                `),Lh(624,`li`,52),TC(625,`
                `),ji(626,`li`)(627,`a`,51),TC(628,`Separated link`),fl()(),TC(629,`
              `),fl(),TC(630,`
            `),fl(),TC(631,`
          `),fl(),TC(632,`
        `),fl(),TC(633,`
        `),ji(634,`app-docs-example`,53),TC(635,`
          `),ji(636,`form`,17),TC(637,`
            `),ji(638,`c-button-group`,54),TC(639,`
              `),Lh(640,`input`,25),HI(),TC(641,`
              `),ji(642,`label`,58),qh(`click`,function(){return m.setRadioValue(`Radio1`)}),TC(643,`Radio 1`),fl(),TC(644,`

              `),Lh(645,`input`,26),HI(),TC(646,`
              `),ji(647,`label`,58),qh(`click`,function(){return m.setRadioValue(`Radio2`)}),TC(648,`Radio 2`),fl(),TC(649,`

              `),Lh(650,`input`,27),HI(),TC(651,`
              `),ji(652,`label`,58),qh(`click`,function(){return m.setRadioValue(`Radio3`)}),TC(653,`Radio
                3`),fl(),TC(654,`
            `),fl(),TC(655,`
          `),fl(),TC(656,`
        `),fl(),TC(657,`
      `),fl(),TC(658,`
    `),fl(),TC(659,`
  `),fl(),TC(660,`
`),fl()),s&2&&(XE(53),Oh(`active`,!0)(`routerLink`,VC(30,l)),XE(3),Oh(`routerLink`,VC(31,l)),XE(3),Oh(`routerLink`,VC(32,l)),XE(94),Oh(`formGroup`,m.formCheck1),XE(4),$I(),XE(5),$I(),XE(5),$I(),XE(12),Oh(`formGroup`,m.formRadio1),XE(4),$I(),XE(5),$I(),XE(5),$I(),XE(241),Oh(`routerLink`,VC(33,l)),XE(4),Oh(`routerLink`,VC(34,l)),XE(4),Oh(`routerLink`,VC(35,l)),XE(6),Oh(`routerLink`,VC(36,l)),XE(33),Oh(`vertical`,!0),XE(29),Oh(`vertical`,!0),XE(16),Oh(`routerLink`,VC(37,l)),XE(4),Oh(`routerLink`,VC(38,l)),XE(4),Oh(`routerLink`,VC(39,l)),XE(6),Oh(`routerLink`,VC(40,l)),XE(19),Oh(`routerLink`,VC(41,l)),XE(4),Oh(`routerLink`,VC(42,l)),XE(4),Oh(`routerLink`,VC(43,l)),XE(6),Oh(`routerLink`,VC(44,l)),XE(13),Oh(`routerLink`,VC(45,l)),XE(4),Oh(`routerLink`,VC(46,l)),XE(4),Oh(`routerLink`,VC(47,l)),XE(6),Oh(`routerLink`,VC(48,l)),XE(13),Oh(`routerLink`,VC(49,l)),XE(4),Oh(`routerLink`,VC(50,l)),XE(4),Oh(`routerLink`,VC(51,l)),XE(6),Oh(`routerLink`,VC(52,l)),XE(9),Oh(`formGroup`,m.formRadio1),XE(2),Oh(`vertical`,!0),XE(2),$I(),XE(5),$I(),XE(5),$I())},dependencies:[K1,vy,Qi,uy,Ji,k,y1,oy,rn,ei,Xn,Ye,Nt,pn,Wn,qn,Vn,yn,sp,D1,W1,G1,j1,fp,rp,Us,op,F1,c],encapsulation:2})}};export{X as ButtonGroupsComponent};