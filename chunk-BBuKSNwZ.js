import{D as Ew,Lt as Rh,Mt as QI,Nn as dl,St as Ow,c as Bh,d as C,kt as Pi,o as Ah,p as CD,tr as jE,wt as PE}from"./chunk-q4Rs6eDf.js";import{G as Qi,Lt as fp,O as Ji,Yt as k1,b as G1,bn as rn,dt as Y1,f as D1,gn as q1,hn as py,it as Us,tt as U1,u as C1,un as op,wn as sp,xn as rp,xt as ay,zn as yy}from"./main-IYLEVGTX.js";import{i as k}from"./chunk-BQWFyHvh.js";import{t as c}from"./chunk-DJv5g611.js";import{S as qn,T as yn,_ as ei,d as Wn,f as Xn,h as Zn,l as Vn,o as Nt,p as Ye,r as Jn,t as $n,x as pn}from"./chunk-BKl8UmvF.js";var l=()=>[];var X=class b{constructor(){this.formBuilder=C(Jn);this.formCheck1=this.formBuilder.group({checkbox1:!1,checkbox2:!1,checkbox3:!1});this.formRadio1=new $n({radio1:new Zn(`Radio1`)})}setCheckBoxValue(p){let s=this.formCheck1.get(p)?.value,m=this.formCheck1.value;m[p]=!s,this.formCheck1.setValue(m)}setRadioValue(p){this.formRadio1.setValue({radio1:p})}static{this.ɵfac=function(s){return new(s||b)}}static{this.ɵcmp=CD({type:b,selectors:[[`app-button-groups`]],decls:661,vars:53,consts:[[`xs`,`12`],[`href`,`components/button-group`,`title`,`Button Group`],[1,`mb-4`],[`href`,`components/button-group`],[`aria-label`,`Basic example`,`role`,`group`],[`cButton`,``,`color`,`primary`],[`cButton`,``,`color`,`primary`,3,`active`,`routerLink`],[`cButton`,``,`color`,`primary`,3,`routerLink`],[`href`,`components/button-group#mixed-styles`],[`aria-label`,`Basic mixed styles example`,`role`,`group`],[`cButton`,``,`color`,`danger`],[`cButton`,``,`color`,`warning`],[`cButton`,``,`color`,`success`],[`href`,`components/button-group#outlined-styles`],[`aria-label`,`Basic outlined example`,`role`,`group`],[`cButton`,``,`color`,`primary`,`variant`,`outline`],[`href`,`components/button-group#checkbox-and-radio-button-groups`],[3,`formGroup`],[`aria-label`,`Basic checkbox toggle button group`,`role`,`group`],[`formControlName`,`checkbox1`,`type`,`checkbox`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`variant`,`outline`,3,`click`],[`formControlName`,`checkbox2`,`type`,`checkbox`,1,`btn-check`],[`formControlName`,`checkbox3`,`type`,`checkbox`,1,`btn-check`],[1,`mb-3`],[`aria-label`,`Basic radio toggle button group`,`role`,`group`],[`formControlName`,`radio1`,`type`,`radio`,`value`,`Radio1`,1,`btn-check`],[`formControlName`,`radio1`,`type`,`radio`,`value`,`Radio2`,1,`btn-check`],[`formControlName`,`radio1`,`type`,`radio`,`value`,`Radio3`,1,`btn-check`],[`href`,`components/button-group#button-toolbar`],[`aria-label`,`Toolbar with button groups`,`role`,`group`],[`aria-label`,`First group`,`role`,`group`,1,`me-2`],[`aria-label`,`Second group`,`role`,`group`,1,`me-2`],[`cButton`,``,`color`,`secondary`],[`aria-label`,`Third group`,`role`,`group`,1,`me-2`],[`cButton`,``,`color`,`info`],[`aria-label`,`Toolbar with button groups`,`role`,`group`,1,`mb-3`],[`cButton`,``,`color`,`secondary`,`variant`,`outline`],[`cInputGroupText`,``],[`aria-describedby`,`btnGroupAddon`,`aria-label`,`Input group example`,`cFormControl`,``,`placeholder`,`Input group example`],[`aria-label`,`Toolbar with button groups`,`role`,`group`,1,`justify-content-between`],[`href`,`components/button-group#sizing`],[`aria-label`,`Large button group`,`role`,`group`,`size`,`lg`,1,`m-1`],[`cButton`,``,`color`,`dark`,`variant`,`outline`],[`aria-label`,`Default button group`,`role`,`group`,1,`m-1`],[`aria-label`,`Small button group`,`role`,`group`,`size`,`sm`,1,`m-1`],[1,`text-body-secondary`,`small`],[`href`,`components/button-group#nesting`],[`aria-label`,`Button group with nested dropdown`,`role`,`group`],[`variant`,`btn-group`],[`cButton`,``,`cDropdownToggle`,``],[`cDropdownMenu`,``],[`cDropdownItem`,``,3,`routerLink`],[`cDropdownDivider`,``],[`href`,`components/button-group/#vertical-variation`],[`aria-label`,`Vertical button group`,`role`,`group`,3,`vertical`],[`cButton`,``,`color`,`dark`],[`placement`,`right-start`,`variant`,`btn-group`],[`cDropdownMenu`,``,`dark`,``],[`cButton`,``,`cFormCheckLabel`,``,`color`,`danger`,`variant`,`outline`,3,`click`]],template:function(s,m){s&1&&(Pi(0,`c-row`),Ew(1,`
  `),Pi(2,`c-col`,0),Ew(3,`
    `),Rh(4,`app-docs-components`,1),Ew(5,`
    `),Pi(6,`c-card`,2),Ew(7,`
      `),Pi(8,`c-card-header`),Ew(9,`
        `),Pi(10,`strong`),Ew(11,`Angular Button Group`),dl(),Ew(12,` `),Pi(13,`span`),Ew(14,`Basic example`),dl(),Ew(15,`
      `),dl(),Ew(16,`
      `),Pi(17,`c-card-body`),Ew(18,`
        `),Pi(19,`p`),Ew(20,`
          Wrap a series of `),Pi(21,`code`),Ew(22,`<CButton>`),dl(),Ew(23,` components in
          `),Pi(24,`code`),Ew(25,`<c-button-group>`),dl(),Ew(26,`.
        `),dl(),Ew(27,`
        `),Pi(28,`app-docs-example`,3),Ew(29,`
          `),Pi(30,`c-button-group`,4),Ew(31,`
            `),Pi(32,`button`,5),Ew(33,`Left`),dl(),Ew(34,`
            `),Pi(35,`button`,5),Ew(36,`Middle`),dl(),Ew(37,`
            `),Pi(38,`button`,5),Ew(39,`Right`),dl(),Ew(40,`
          `),dl(),Ew(41,`
        `),dl(),Ew(42,`
        `),Pi(43,`p`),Ew(44,`
          These classes can also be added to groups of links, as an alternative to the
          `),Pi(45,`code`),Ew(46,`<CNav>`),dl(),Ew(47,` components.
        `),dl(),Ew(48,`
        `),Pi(49,`app-docs-example`,3),Ew(50,`
          `),Pi(51,`c-button-group`),Ew(52,`
            `),Pi(53,`a`,6),Ew(54,`
              Active link
            `),dl(),Ew(55,`
            `),Pi(56,`a`,7),Ew(57,`
              Link
            `),dl(),Ew(58,`
            `),Pi(59,`a`,7),Ew(60,`
              Link
            `),dl(),Ew(61,`
          `),dl(),Ew(62,`
        `),dl(),Ew(63,`
      `),dl(),Ew(64,`
    `),dl(),Ew(65,`
  `),dl(),Ew(66,`
  `),Pi(67,`c-col`,0),Ew(68,`
    `),Pi(69,`c-card`,2),Ew(70,`
      `),Pi(71,`c-card-header`),Ew(72,`
        `),Pi(73,`strong`),Ew(74,`Angular Button Group`),dl(),Ew(75,` `),Pi(76,`span`),Ew(77,`Mixed styles`),dl(),Ew(78,`
      `),dl(),Ew(79,`
      `),Pi(80,`c-card-body`),Ew(81,`
        `),Pi(82,`app-docs-example`,8),Ew(83,`
          `),Pi(84,`c-button-group`,9),Ew(85,`
            `),Pi(86,`button`,10),Ew(87,`Left`),dl(),Ew(88,`
            `),Pi(89,`button`,11),Ew(90,`Middle`),dl(),Ew(91,`
            `),Pi(92,`button`,12),Ew(93,`Right`),dl(),Ew(94,`
          `),dl(),Ew(95,`
        `),dl(),Ew(96,`
      `),dl(),Ew(97,`
    `),dl(),Ew(98,`
  `),dl(),Ew(99,`
  `),Pi(100,`c-col`,0),Ew(101,`
    `),Pi(102,`c-card`,2),Ew(103,`
      `),Pi(104,`c-card-header`),Ew(105,`
        `),Pi(106,`strong`),Ew(107,`Angular Button Group`),dl(),Ew(108,` `),Pi(109,`span`),Ew(110,`Outlined styles`),dl(),Ew(111,`
      `),dl(),Ew(112,`
      `),Pi(113,`c-card-body`),Ew(114,`
        `),Pi(115,`app-docs-example`,13),Ew(116,`
          `),Pi(117,`c-button-group`,14),Ew(118,`
            `),Pi(119,`button`,15),Ew(120,`
              Left
            `),dl(),Ew(121,`
            `),Pi(122,`button`,15),Ew(123,`
              Middle
            `),dl(),Ew(124,`
            `),Pi(125,`button`,15),Ew(126,`
              Right
            `),dl(),Ew(127,`
          `),dl(),Ew(128,`
        `),dl(),Ew(129,`
      `),dl(),Ew(130,`
    `),dl(),Ew(131,`
  `),dl(),Ew(132,`
  `),Pi(133,`c-col`,0),Ew(134,`
    `),Pi(135,`c-card`,2),Ew(136,`
      `),Pi(137,`c-card-header`),Ew(138,`
        `),Pi(139,`strong`),Ew(140,`Angular Button Group`),dl(),Ew(141,` `),Pi(142,`span`),Ew(143,`Checkbox and radio button groups`),dl(),Ew(144,`
      `),dl(),Ew(145,`
      `),Pi(146,`c-card-body`),Ew(147,`
        `),Pi(148,`p`),Ew(149,`
          Combine button-like checkbox and radio toggle buttons into a seamless looking button
          group.
        `),dl(),Ew(150,`
        `),Pi(151,`app-docs-example`,16),Ew(152,`
          `),Pi(153,`form`,17),Ew(154,`
            `),Pi(155,`c-button-group`,18),Ew(156,`
              `),Rh(157,`input`,19),PE(),Ew(158,`
              `),Pi(159,`label`,20),Bh(`click`,function(){return m.setCheckBoxValue(`checkbox1`)}),Ew(160,`Checkbox 1`),dl(),Ew(161,`

              `),Rh(162,`input`,21),PE(),Ew(163,`
              `),Pi(164,`label`,20),Bh(`click`,function(){return m.setCheckBoxValue(`checkbox2`)}),Ew(165,`Checkbox 2`),dl(),Ew(166,`

              `),Rh(167,`input`,22),PE(),Ew(168,`
              `),Pi(169,`label`,20),Bh(`click`,function(){return m.setCheckBoxValue(`checkbox3`)}),Ew(170,`Checkbox
                3`),dl(),Ew(171,`
            `),dl(),Ew(172,`
          `),dl(),Ew(173,`
          `),Rh(174,`br`,23),Ew(175,`
        `),dl(),Ew(176,`
        `),Pi(177,`app-docs-example`,16),Ew(178,`
          `),Pi(179,`form`,17),Ew(180,`
            `),Pi(181,`c-button-group`,24),Ew(182,`
              `),Rh(183,`input`,25),PE(),Ew(184,`
              `),Pi(185,`label`,20),Bh(`click`,function(){return m.setRadioValue(`Radio1`)}),Ew(186,`Radio 1`),dl(),Ew(187,`

              `),Rh(188,`input`,26),PE(),Ew(189,`
              `),Pi(190,`label`,20),Bh(`click`,function(){return m.setRadioValue(`Radio2`)}),Ew(191,`Radio 2`),dl(),Ew(192,`

              `),Rh(193,`input`,27),PE(),Ew(194,`
              `),Pi(195,`label`,20),Bh(`click`,function(){return m.setRadioValue(`Radio3`)}),Ew(196,`Radio 3`),dl(),Ew(197,`
            `),dl(),Ew(198,`
          `),dl(),Ew(199,`
        `),dl(),Ew(200,`
      `),dl(),Ew(201,`
    `),dl(),Ew(202,`
  `),dl(),Ew(203,`
  `),Pi(204,`c-col`,0),Ew(205,`
    `),Pi(206,`c-card`,2),Ew(207,`
      `),Pi(208,`c-card-header`),Ew(209,`
        `),Pi(210,`strong`),Ew(211,`Angular Button Group`),dl(),Ew(212,` `),Pi(213,`span`),Ew(214,`Button toolbar`),dl(),Ew(215,`
      `),dl(),Ew(216,`
      `),Pi(217,`c-card-body`),Ew(218,`
        `),Pi(219,`p`),Ew(220,`
          Join sets of button groups into button toolbars for more complicated components. Use
          utility classes as needed to space out groups, buttons, and more.
        `),dl(),Ew(221,`
        `),Pi(222,`app-docs-example`,28),Ew(223,`
          `),Pi(224,`c-button-toolbar`,29),Ew(225,`
            `),Pi(226,`c-button-group`,30),Ew(227,`
              `),Pi(228,`button`,5),Ew(229,`1`),dl(),Ew(230,`
              `),Pi(231,`button`,5),Ew(232,`2`),dl(),Ew(233,`
              `),Pi(234,`button`,5),Ew(235,`3`),dl(),Ew(236,`
              `),Pi(237,`button`,5),Ew(238,`4`),dl(),Ew(239,`
            `),dl(),Ew(240,`
            `),Pi(241,`c-button-group`,31),Ew(242,`
              `),Pi(243,`button`,32),Ew(244,`5`),dl(),Ew(245,`
              `),Pi(246,`button`,32),Ew(247,`6`),dl(),Ew(248,`
              `),Pi(249,`button`,32),Ew(250,`7`),dl(),Ew(251,`
            `),dl(),Ew(252,`
            `),Pi(253,`c-button-group`,33),Ew(254,`
              `),Pi(255,`button`,34),Ew(256,`8`),dl(),Ew(257,`
            `),dl(),Ew(258,`
          `),dl(),Ew(259,`
        `),dl(),Ew(260,`
        `),Pi(261,`p`),Ew(262,`
          Feel free to combine input groups with button groups in your toolbars. Similar to the
          example above, you\u2019ll likely need some utilities through to space items correctly.
        `),dl(),Ew(263,`
        `),Pi(264,`app-docs-example`,28),Ew(265,`
          `),Pi(266,`c-button-toolbar`,35),Ew(267,`
            `),Pi(268,`c-button-group`,30),Ew(269,`
              `),Pi(270,`button`,36),Ew(271,`
                1
              `),dl(),Ew(272,`
              `),Pi(273,`button`,36),Ew(274,`
                2
              `),dl(),Ew(275,`
              `),Pi(276,`button`,36),Ew(277,`
                3
              `),dl(),Ew(278,`
              `),Pi(279,`button`,36),Ew(280,`
                4
              `),dl(),Ew(281,`
            `),dl(),Ew(282,`
            `),Pi(283,`c-input-group`),Ew(284,`
              `),Pi(285,`span`,37),Ew(286,`@`),dl(),Ew(287,`
              `),Rh(288,`input`,38),Ew(289,`
            `),dl(),Ew(290,`
          `),dl(),Ew(291,`
          `),Pi(292,`c-button-toolbar`,39),Ew(293,`
            `),Pi(294,`c-button-group`,30),Ew(295,`
              `),Pi(296,`button`,36),Ew(297,`
                1
              `),dl(),Ew(298,`
              `),Pi(299,`button`,36),Ew(300,`
                2
              `),dl(),Ew(301,`
              `),Pi(302,`button`,36),Ew(303,`
                3
              `),dl(),Ew(304,`
              `),Pi(305,`button`,36),Ew(306,`
                4
              `),dl(),Ew(307,`
            `),dl(),Ew(308,`
            `),Pi(309,`c-input-group`),Ew(310,`
              `),Pi(311,`span`,37),Ew(312,`@`),dl(),Ew(313,`
              `),Rh(314,`input`,38),Ew(315,`
            `),dl(),Ew(316,`
          `),dl(),Ew(317,`
        `),dl(),Ew(318,`
      `),dl(),Ew(319,`
    `),dl(),Ew(320,`
  `),dl(),Ew(321,`
  `),Pi(322,`c-col`,0),Ew(323,`
    `),Pi(324,`c-card`,2),Ew(325,`
      `),Pi(326,`c-card-header`),Ew(327,`
        `),Pi(328,`strong`),Ew(329,`Angular Button Group`),dl(),Ew(330,` `),Pi(331,`span`),Ew(332,`Sizing`),dl(),Ew(333,`
      `),dl(),Ew(334,`
      `),Pi(335,`c-card-body`),Ew(336,`
        `),Pi(337,`p`),Ew(338,`
          Alternatively, of implementing button sizing classes to each button in a group, set
          `),Pi(339,`code`),Ew(340,`size`),dl(),Ew(341,` property to all `),Pi(342,`code`),Ew(343,`<c-button-group>`),dl(),Ew(344,`'s, including
          each one when nesting multiple groups.
        `),dl(),Ew(345,`
        `),Pi(346,`app-docs-example`,40),Ew(347,`
          `),Pi(348,`c-button-group`,41),Ew(349,`
            `),Pi(350,`button`,42),Ew(351,`
              Left
            `),dl(),Ew(352,`
            `),Pi(353,`button`,42),Ew(354,`
              Middle
            `),dl(),Ew(355,`
            `),Pi(356,`button`,42),Ew(357,`
              Right
            `),dl(),Ew(358,`
          `),dl(),Ew(359,`
          `),Rh(360,`br`),Ew(361,`
          `),Pi(362,`c-button-group`,43),Ew(363,`
            `),Pi(364,`button`,42),Ew(365,`
              Left
            `),dl(),Ew(366,`
            `),Pi(367,`button`,42),Ew(368,`
              Middle
            `),dl(),Ew(369,`
            `),Pi(370,`button`,42),Ew(371,`
              Right
            `),dl(),Ew(372,`
          `),dl(),Ew(373,`
          `),Rh(374,`br`),Ew(375,`
          `),Pi(376,`c-button-group`,44),Ew(377,`
            `),Pi(378,`button`,42),Ew(379,`
              Left
            `),dl(),Ew(380,`
            `),Pi(381,`button`,42),Ew(382,`
              Middle
            `),dl(),Ew(383,`
            `),Pi(384,`button`,42),Ew(385,`
              Right
            `),dl(),Ew(386,`
          `),dl(),Ew(387,`
        `),dl(),Ew(388,`
      `),dl(),Ew(389,`
    `),dl(),Ew(390,`
  `),dl(),Ew(391,`
  `),Pi(392,`c-col`,0),Ew(393,`
    `),Pi(394,`c-card`,2),Ew(395,`
      `),Pi(396,`c-card-header`),Ew(397,`
        `),Pi(398,`strong`),Ew(399,`Angular Button Group`),dl(),Ew(400,` `),Pi(401,`span`),Ew(402,`Nesting`),dl(),Ew(403,`
      `),dl(),Ew(404,`
      `),Pi(405,`c-card-body`),Ew(406,`
        `),Pi(407,`p`,45),Ew(408,`
          Put a `),Pi(409,`code`),Ew(410,`<c-button-group>`),dl(),Ew(411,` inside another
          `),Pi(412,`code`),Ew(413,`<c-button-group>`),dl(),Ew(414,` when you need dropdown menus combined with a series
          of buttons.
        `),dl(),Ew(415,`
        `),Pi(416,`app-docs-example`,46),Ew(417,`
          `),Pi(418,`c-button-group`,47),Ew(419,`
            `),Pi(420,`button`,5),Ew(421,`1`),dl(),Ew(422,`
            `),Pi(423,`button`,5),Ew(424,`2`),dl(),Ew(425,`
            `),Pi(426,`c-dropdown`,48),Ew(427,`
              `),Pi(428,`button`,49),Ew(429,`
                Dropdown
              `),dl(),Ew(430,`
              `),Pi(431,`ul`,50),Ew(432,`
                `),Pi(433,`li`)(434,`a`,51),Ew(435,`Action`),dl()(),Ew(436,`
                `),Pi(437,`li`)(438,`a`,51),Ew(439,`Another action`),dl()(),Ew(440,`
                `),Pi(441,`li`)(442,`a`,51),Ew(443,`Something else here`),dl()(),Ew(444,`
                `),Rh(445,`li`,52),Ew(446,`
                `),Pi(447,`li`)(448,`a`,51),Ew(449,`Separated link`),dl()(),Ew(450,`
              `),dl(),Ew(451,`
            `),dl(),Ew(452,`
          `),dl(),Ew(453,`
        `),dl(),Ew(454,`
      `),dl(),Ew(455,`
    `),dl(),Ew(456,`
  `),dl(),Ew(457,`
  `),Pi(458,`c-col`,0),Ew(459,`
    `),Pi(460,`c-card`,2),Ew(461,`
      `),Pi(462,`c-card-header`),Ew(463,`
        `),Pi(464,`strong`),Ew(465,`Angular Button Group`),dl(),Ew(466,` `),Pi(467,`span`),Ew(468,`Vertical variation`),dl(),Ew(469,`
      `),dl(),Ew(470,`
      `),Pi(471,`c-card-body`),Ew(472,`
        `),Pi(473,`p`,45),Ew(474,`
          Create a set of buttons that appear vertically stacked rather than horizontally.
          `),Pi(475,`strong`),Ew(476,`Split button dropdowns are not supported here.`),dl(),Ew(477,`
        `),dl(),Ew(478,`
        `),Pi(479,`app-docs-example`,53),Ew(480,`
          `),Pi(481,`c-button-group`,54),Ew(482,`
            `),Pi(483,`button`,55),Ew(484,`Button`),dl(),Ew(485,`
            `),Pi(486,`button`,55),Ew(487,`Button`),dl(),Ew(488,`
            `),Pi(489,`button`,55),Ew(490,`Button`),dl(),Ew(491,`
            `),Pi(492,`button`,55),Ew(493,`Button`),dl(),Ew(494,`
            `),Pi(495,`button`,55),Ew(496,`Button`),dl(),Ew(497,`
            `),Pi(498,`button`,55),Ew(499,`Button`),dl(),Ew(500,`
            `),Pi(501,`button`,55),Ew(502,`Button`),dl(),Ew(503,`
          `),dl(),Ew(504,`
          `),Rh(505,`br`),Ew(506,`
        `),dl(),Ew(507,`
        `),Pi(508,`app-docs-example`,53),Ew(509,`
          `),Pi(510,`c-button-group`,54),Ew(511,`
            `),Pi(512,`button`,5),Ew(513,`Button`),dl(),Ew(514,`
            `),Pi(515,`button`,5),Ew(516,`Button`),dl(),Ew(517,`
            `),Pi(518,`c-dropdown`,48),Ew(519,`
              `),Pi(520,`button`,49),Ew(521,`
                Dropdown
              `),dl(),Ew(522,`
              `),Pi(523,`ul`,50),Ew(524,`
                `),Pi(525,`li`)(526,`a`,51),Ew(527,`Action`),dl()(),Ew(528,`
                `),Pi(529,`li`)(530,`a`,51),Ew(531,`Another action`),dl()(),Ew(532,`
                `),Pi(533,`li`)(534,`a`,51),Ew(535,`Something else here`),dl()(),Ew(536,`
                `),Rh(537,`li`,52),Ew(538,`
                `),Pi(539,`li`)(540,`a`,51),Ew(541,`Separated link`),dl()(),Ew(542,`
              `),dl(),Ew(543,`
            `),dl(),Ew(544,`
            `),Pi(545,`button`,5),Ew(546,`Button`),dl(),Ew(547,`
            `),Pi(548,`button`,5),Ew(549,`Button`),dl(),Ew(550,`
            `),Pi(551,`c-dropdown`,48),Ew(552,`
              `),Pi(553,`button`,49),Ew(554,`
                Dropdown
              `),dl(),Ew(555,`
              `),Pi(556,`ul`,50),Ew(557,`
                `),Pi(558,`li`)(559,`a`,51),Ew(560,`Action`),dl()(),Ew(561,`
                `),Pi(562,`li`)(563,`a`,51),Ew(564,`Another action`),dl()(),Ew(565,`
                `),Pi(566,`li`)(567,`a`,51),Ew(568,`Something else here`),dl()(),Ew(569,`
                `),Rh(570,`li`,52),Ew(571,`
                `),Pi(572,`li`)(573,`a`,51),Ew(574,`Separated link`),dl()(),Ew(575,`
              `),dl(),Ew(576,`
            `),dl(),Ew(577,`
            `),Pi(578,`c-dropdown`,56),Ew(579,`
              `),Pi(580,`button`,49),Ew(581,`
                Dropdown
              `),dl(),Ew(582,`
              `),Pi(583,`ul`,57),Ew(584,`
                `),Pi(585,`li`)(586,`a`,51),Ew(587,`Action`),dl()(),Ew(588,`
                `),Pi(589,`li`)(590,`a`,51),Ew(591,`Another action`),dl()(),Ew(592,`
                `),Pi(593,`li`)(594,`a`,51),Ew(595,`Something else here`),dl()(),Ew(596,`
                `),Rh(597,`li`,52),Ew(598,`
                `),Pi(599,`li`)(600,`a`,51),Ew(601,`Separated link`),dl()(),Ew(602,`
              `),dl(),Ew(603,`
            `),dl(),Ew(604,`
            `),Pi(605,`c-dropdown`,48),Ew(606,`
              `),Pi(607,`button`,49),Ew(608,`
                Dropdown
              `),dl(),Ew(609,`
              `),Pi(610,`ul`,50),Ew(611,`
                `),Pi(612,`li`)(613,`a`,51),Ew(614,`Action`),dl()(),Ew(615,`
                `),Pi(616,`li`)(617,`a`,51),Ew(618,`Another action`),dl()(),Ew(619,`
                `),Pi(620,`li`)(621,`a`,51),Ew(622,`Something else here`),dl()(),Ew(623,`
                `),Rh(624,`li`,52),Ew(625,`
                `),Pi(626,`li`)(627,`a`,51),Ew(628,`Separated link`),dl()(),Ew(629,`
              `),dl(),Ew(630,`
            `),dl(),Ew(631,`
          `),dl(),Ew(632,`
        `),dl(),Ew(633,`
        `),Pi(634,`app-docs-example`,53),Ew(635,`
          `),Pi(636,`form`,17),Ew(637,`
            `),Pi(638,`c-button-group`,54),Ew(639,`
              `),Rh(640,`input`,25),PE(),Ew(641,`
              `),Pi(642,`label`,58),Bh(`click`,function(){return m.setRadioValue(`Radio1`)}),Ew(643,`Radio 1`),dl(),Ew(644,`

              `),Rh(645,`input`,26),PE(),Ew(646,`
              `),Pi(647,`label`,58),Bh(`click`,function(){return m.setRadioValue(`Radio2`)}),Ew(648,`Radio 2`),dl(),Ew(649,`

              `),Rh(650,`input`,27),PE(),Ew(651,`
              `),Pi(652,`label`,58),Bh(`click`,function(){return m.setRadioValue(`Radio3`)}),Ew(653,`Radio
                3`),dl(),Ew(654,`
            `),dl(),Ew(655,`
          `),dl(),Ew(656,`
        `),dl(),Ew(657,`
      `),dl(),Ew(658,`
    `),dl(),Ew(659,`
  `),dl(),Ew(660,`
`),dl()),s&2&&(QI(53),Ah(`active`,!0)(`routerLink`,Ow(30,l)),QI(3),Ah(`routerLink`,Ow(31,l)),QI(3),Ah(`routerLink`,Ow(32,l)),QI(94),Ah(`formGroup`,m.formCheck1),QI(4),jE(),QI(5),jE(),QI(5),jE(),QI(12),Ah(`formGroup`,m.formRadio1),QI(4),jE(),QI(5),jE(),QI(5),jE(),QI(241),Ah(`routerLink`,Ow(33,l)),QI(4),Ah(`routerLink`,Ow(34,l)),QI(4),Ah(`routerLink`,Ow(35,l)),QI(6),Ah(`routerLink`,Ow(36,l)),QI(33),Ah(`vertical`,!0),QI(29),Ah(`vertical`,!0),QI(16),Ah(`routerLink`,Ow(37,l)),QI(4),Ah(`routerLink`,Ow(38,l)),QI(4),Ah(`routerLink`,Ow(39,l)),QI(6),Ah(`routerLink`,Ow(40,l)),QI(19),Ah(`routerLink`,Ow(41,l)),QI(4),Ah(`routerLink`,Ow(42,l)),QI(4),Ah(`routerLink`,Ow(43,l)),QI(6),Ah(`routerLink`,Ow(44,l)),QI(13),Ah(`routerLink`,Ow(45,l)),QI(4),Ah(`routerLink`,Ow(46,l)),QI(4),Ah(`routerLink`,Ow(47,l)),QI(6),Ah(`routerLink`,Ow(48,l)),QI(13),Ah(`routerLink`,Ow(49,l)),QI(4),Ah(`routerLink`,Ow(50,l)),QI(4),Ah(`routerLink`,Ow(51,l)),QI(6),Ah(`routerLink`,Ow(52,l)),QI(9),Ah(`formGroup`,m.formRadio1),QI(2),Ah(`vertical`,!0),QI(2),jE(),QI(5),jE(),QI(5),jE())},dependencies:[Y1,yy,Qi,py,Ji,k,D1,ay,rn,ei,Xn,Ye,Nt,pn,Wn,qn,Vn,yn,sp,C1,G1,q1,U1,fp,rp,Us,op,k1,c],encapsulation:2})}};export{X as ButtonGroupsComponent};