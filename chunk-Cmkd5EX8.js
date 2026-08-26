import{Ci as l,D as Ew,Lt as Rh,Mt as QI,Nn as dl,c as Bh,d as C,fi as xh,kt as Pi,o as Ah,p as CD,tr as jE,wt as PE}from"./chunk-q4Rs6eDf.js";import{G as Qi,O as Ji,dt as Y1,f as D1,hn as py,n as $1,qt as j1,s as B1,wn as sp,xt as ay,zn as yy}from"./main-IYLEVGTX.js";import{i as k}from"./chunk-BQWFyHvh.js";import{t as c}from"./chunk-DJv5g611.js";import{S as qn,T as yn,_ as ei,d as Wn,f as Xn,l as Vn,o as Nt,p as Ye,r as Jn,u as Vt,x as pn}from"./chunk-BKl8UmvF.js";var H=class p{constructor(){this.formBuilder=C(Jn);this.formGroup=this.formBuilder.group({flexRadioGroup:this.formBuilder.group({flexRadioDefault:this.formBuilder.control(`two`)}),flexRadioGroupDisabled:this.formBuilder.group({flexRadioDefault:this.formBuilder.control({value:`two`,disabled:!0})}),flexCheckGroup:this.formBuilder.group({checkOne:[!1],checkTwo:[!0]}),flexCheckGroupDisabled:this.formBuilder.group({checkThree:[{value:!1,disabled:!0}],checkFour:[{value:!0,disabled:!0}]}),btnCheckGroup:this.formBuilder.group({checkbox1:[!0],checkbox2:[!1],checkbox3:[{value:!1,disabled:!0}]}),btnRadioGroup:this.formBuilder.group({radio1:this.formBuilder.control({value:`Radio2`})})})}setCheckBoxValue(s){let d=this.formGroup.controls.btnCheckGroup,r=d.get(s)?.value,c=l({},d.value);c[s]=!r,d.patchValue(c)}setRadioValue(s){this.formGroup.controls.btnRadioGroup.setValue({radio1:s})}static{this.ɵfac=function(d){return new(d||p)}}static{this.ɵcmp=CD({type:p,selectors:[[`app-checks-radios`]],decls:594,vars:10,consts:[[`href`,`forms/checks-radios`,`title`,`Check & Radios`],[`cForm`,``,3,`formGroup`],[`xs`,`12`],[1,`mb-4`],[`href`,`forms/checks-radios`],[`formGroupName`,`flexCheckGroup`],[`cFormCheckInput`,``,`formControlName`,`checkOne`,`id`,`checkOne`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`checkOne`],[`cFormCheckInput`,``,`formControlName`,`checkTwo`,`id`,`checkTwo`,`type`,`checkbox`,3,`checked`],[`cFormCheckLabel`,``,`for`,`checkTwo`],[1,`text-body-secondary`,`small`],[`href`,`forms/checks-radios#disabled`],[`formGroupName`,`flexCheckGroupDisabled`],[`cFormCheckInput`,``,`formControlName`,`checkThree`,`id`,`checkThree`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`checkThree`],[`cFormCheckInput`,``,`formControlName`,`checkFour`,`id`,`checkFour`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`checkFour`],[`href`,`forms/checks-radios#radios`],[`formGroupName`,`flexRadioGroup`],[`cFormCheckInput`,``,`formControlName`,`flexRadioDefault`,`type`,`radio`,`value`,`one`],[`cFormCheckLabel`,``],[`cFormCheckInput`,``,`formControlName`,`flexRadioDefault`,`type`,`radio`,`value`,`two`],[`href`,`forms/checks-radios#disabled-1`],[`formGroupName`,`flexRadioGroupDisabled`],[`href`,`forms/checks-radios#switches`],[3,`switch`],[`cFormCheckInput`,``,`type`,`checkbox`],[`cFormCheckInput`,``,`checked`,``,`type`,`checkbox`],[`cFormCheckInput`,``,`disabled`,``,`type`,`checkbox`],[`cFormCheckInput`,``,`checked`,``,`disabled`,``,`type`,`checkbox`],[`href`,`forms/checks-radios#sizes`],[`sizing`,`lg`,`switch`,``],[`sizing`,`xl`,`switch`,``],[`href`,`forms/checks-radios#default-stacked`],[`cFormCheckInput`,``,`id`,`stackOne`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`stackOne`],[`cFormCheckInput`,``,`disabled`,``,`id`,`stackTwo`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`stackTwo`],[`cFormCheckInput`,``,`checked`,``,`id`,`radioStack1`,`name`,`radioStack`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioStack1`],[`cFormCheckInput`,``,`id`,`radioStack2`,`name`,`radioStack`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioStack2`],[`cFormCheckInput`,``,`disabled`,``,`id`,`radioStack3`,`name`,`radioStack`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioStack3`],[`href`,`forms/checks-radios#inline`],[3,`inline`],[`cFormCheckInput`,``,`id`,`inline1`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`inline1`],[`inline`,``],[`cFormCheckInput`,``,`id`,`inline2`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`inline2`],[`cFormCheckInput`,``,`disabled`,``,`id`,`inline3`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`inline3`],[`cFormCheckInput`,``,`checked`,``,`id`,`radioinline1`,`name`,`radioinline`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioinline1`],[`cFormCheckInput`,``,`id`,`radioinline2`,`name`,`radioinline`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioinline2`],[`cFormCheckInput`,``,`disabled`,``,`id`,`radioinline3`,`name`,`radioinline`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioinline3`],[`href`,`forms/checks-radios#without-labels`],[`cFormCheckInput`,``,`id`,`nolabelCheck`,`name`,`nolabelCheck`,`type`,`checkbox`],[`cFormCheckInput`,``,`id`,`nolabelRadio`,`name`,`nolabelRadio`,`type`,`radio`],[`href`,`forms/checks-radios#toggle-buttons`],[`formGroupName`,`btnCheckGroup`],[`aria-label`,`Basic checkbox toggle button group`,`role`,`group`],[`formControlName`,`checkbox1`,`type`,`checkbox`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,3,`click`],[`formControlName`,`checkbox2`,`type`,`checkbox`,1,`btn-check`],[`formControlName`,`checkbox3`,`type`,`checkbox`,1,`btn-check`],[`formGroupName`,`btnRadioGroup`],[`aria-label`,`Basic radio toggle button group`,`role`,`group`],[`formControlName`,`radio1`,`id`,`radio1`,`type`,`radio`,`value`,`Radio1`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`for`,`radio1`,`variant`,`ghost`,3,`click`],[`formControlName`,`radio1`,`id`,`radio2`,`type`,`radio`,`value`,`Radio2`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`for`,`radio2`,`variant`,`ghost`,3,`click`],[`formControlName`,`radio1`,`id`,`radio3`,`type`,`radio`,`value`,`Radio3`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`for`,`radio3`,`variant`,`ghost`,3,`click`],[`cButton`,``,`cFormCheckLabel`,``,`variant`,`outline`,3,`click`],[`formControlName`,`radio1`,`id`,`radio1o`,`type`,`radio`,`value`,`Radio1`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`color`,`danger`,`for`,`radio1o`,`variant`,`outline`,3,`click`],[`formControlName`,`radio1`,`id`,`radio2o`,`type`,`radio`,`value`,`Radio2`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`color`,`success`,`for`,`radio2o`,`variant`,`outline`,3,`click`],[`formControlName`,`radio1`,`id`,`radio3o`,`type`,`radio`,`value`,`Radio3`,1,`btn-check`],[`cButton`,``,`color`,`secondary`,`for`,`radio3o`,`variant`,`outline`,3,`click`]],template:function(d,r){d&1&&(Pi(0,`c-row`),Ew(1,`
  `),Rh(2,`app-docs-components`,0),Ew(3,`
  `),Pi(4,`form`,1),Ew(5,`
    `),Pi(6,`c-col`,2),Ew(7,`
      `),Pi(8,`c-card`,3),Ew(9,`
        `),Pi(10,`c-card-header`),Ew(11,`
          `),Pi(12,`strong`),Ew(13,`Angular Checkbox`),dl(),Ew(14,`
        `),dl(),Ew(15,`
        `),Pi(16,`c-card-body`),Ew(17,`
          `),Pi(18,`app-docs-example`,4),Ew(19,`
            `),Pi(20,`div`,5),Ew(21,`
              `),Pi(22,`c-form-check`),Ew(23,`
                `),Rh(24,`input`,6),PE(),Ew(25,`
                `),Pi(26,`label`,7),Ew(27,`Default checkbox`),dl(),Ew(28,`
              `),dl(),Ew(29,`
              `),Pi(30,`c-form-check`),Ew(31,`
                `),Rh(32,`input`,8),PE(),Ew(33,`
                `),Pi(34,`label`,9),Ew(35,`Checked checkbox`),dl(),Ew(36,`
              `),dl(),Ew(37,`
            `),dl(),Ew(38,`
          `),dl(),Ew(39,`
        `),dl(),Ew(40,`
      `),dl(),Ew(41,`
    `),dl(),Ew(42,`
    `),Pi(43,`c-col`,2),Ew(44,`
      `),Pi(45,`c-card`,3),Ew(46,`
        `),Pi(47,`c-card-header`),Ew(48,`
          `),Pi(49,`strong`),Ew(50,`Angular Checkbox`),dl(),Ew(51,` `),Pi(52,`small`),Ew(53,`Disabled`),dl(),Ew(54,`
        `),dl(),Ew(55,`
        `),Pi(56,`c-card-body`),Ew(57,`
          `),Pi(58,`p`,10),Ew(59,`
            Add the `),Pi(60,`code`),Ew(61,`disabled`),dl(),Ew(62,` attribute and the associated `),Pi(63,`code`),Ew(64,`<label>`),dl(),Ew(65,`s
            are automatically styled to match with a lighter color to help indicate the
            input's state.
          `),dl(),Ew(66,`
          `),Pi(67,`app-docs-example`,11),Ew(68,`
            `),Pi(69,`div`,12),Ew(70,`
              `),Pi(71,`c-form-check`),Ew(72,`
                `),Rh(73,`input`,13),PE(),Ew(74,`
                `),Pi(75,`label`,14),Ew(76,`Disabled checkbox`),dl(),Ew(77,`
              `),dl(),Ew(78,`
              `),Pi(79,`c-form-check`),Ew(80,`
                `),Rh(81,`input`,15),PE(),Ew(82,`
                `),Pi(83,`label`,16),Ew(84,`Disabled checked checkbox`),dl(),Ew(85,`
              `),dl(),Ew(86,`
            `),dl(),Ew(87,`
          `),dl(),Ew(88,`
        `),dl(),Ew(89,`
      `),dl(),Ew(90,`
    `),dl(),Ew(91,`
    `),Pi(92,`c-col`,2),Ew(93,`
      `),Pi(94,`c-card`,3),Ew(95,`
        `),Pi(96,`c-card-header`),Ew(97,`
          `),Pi(98,`strong`),Ew(99,`Angular Radio`),dl(),Ew(100,`
        `),dl(),Ew(101,`
        `),Pi(102,`c-card-body`),Ew(103,`
          `),Pi(104,`app-docs-example`,17),Ew(105,`
            `),Pi(106,`div`,18),Ew(107,`
              `),Pi(108,`c-form-check`),Ew(109,`
                `),Rh(110,`input`,19),PE(),Ew(111,`
                `),Pi(112,`label`,20),Ew(113,`Default radio`),dl(),Ew(114,`
              `),dl(),Ew(115,`
              `),Pi(116,`c-form-check`),Ew(117,`
                `),Rh(118,`input`,21),PE(),Ew(119,`
                `),Pi(120,`label`,20),Ew(121,`Checked radio`),dl(),Ew(122,`
              `),dl(),Ew(123,`
            `),dl(),Ew(124,`
          `),dl(),Ew(125,`
        `),dl(),Ew(126,`
      `),dl(),Ew(127,`
    `),dl(),Ew(128,`
    `),Pi(129,`c-col`,2),Ew(130,`
      `),Pi(131,`c-card`,3),Ew(132,`
        `),Pi(133,`c-card-header`),Ew(134,`
          `),Pi(135,`strong`),Ew(136,`Angular Radio`),dl(),Ew(137,` `),Pi(138,`small`),Ew(139,`Disabled`),dl(),Ew(140,`
        `),dl(),Ew(141,`
        `),Pi(142,`c-card-body`),Ew(143,`
          `),Pi(144,`p`,10),Ew(145,`
            Add the `),Pi(146,`code`),Ew(147,`disabled`),dl(),Ew(148,` attribute and the associated `),Pi(149,`code`),Ew(150,`<label>`),dl(),Ew(151,`s
            are automatically styled to match with a lighter color to help indicate the
            input's state.
          `),dl(),Ew(152,`
          `),Pi(153,`app-docs-example`,22),Ew(154,`
            `),Pi(155,`div`,23),Ew(156,`
              `),Pi(157,`c-form-check`),Ew(158,`
                `),Rh(159,`input`,19),PE(),Ew(160,`
                `),Pi(161,`label`,20),Ew(162,`Default radio`),dl(),Ew(163,`
              `),dl(),Ew(164,`
              `),Pi(165,`c-form-check`),Ew(166,`
                `),Rh(167,`input`,21),PE(),Ew(168,`
                `),Pi(169,`label`,20),Ew(170,`Checked radio`),dl(),Ew(171,`
              `),dl(),Ew(172,`
            `),dl(),Ew(173,`
          `),dl(),Ew(174,`
        `),dl(),Ew(175,`
      `),dl(),Ew(176,`
    `),dl(),Ew(177,`
    `),Pi(178,`c-col`,2),Ew(179,`
      `),Pi(180,`c-card`,3),Ew(181,`
        `),Pi(182,`c-card-header`),Ew(183,`
          `),Pi(184,`strong`),Ew(185,`Angular Switches`),dl(),Ew(186,`
        `),dl(),Ew(187,`
        `),Pi(188,`c-card-body`),Ew(189,`
          `),Pi(190,`p`,10),Ew(191,`
            A switch has the markup of a custom checkbox but uses the `),Pi(192,`code`),Ew(193,`switch`),dl(),Ew(194,` boolean
            properly to render a toggle switch. Switches also support the `),Pi(195,`code`),Ew(196,`disabled`),dl(),Ew(197,`
            attribute.
          `),dl(),Ew(198,`
          `),Pi(199,`app-docs-example`,24),Ew(200,`
            `),Pi(201,`c-form-check`,25),Ew(202,`
              `),Rh(203,`input`,26),Ew(204,`
              `),Pi(205,`label`,20),Ew(206,`Default switch checkbox input`),dl(),Ew(207,`
            `),dl(),Ew(208,`
            `),Pi(209,`c-form-check`,25),Ew(210,`
              `),Rh(211,`input`,27),Ew(212,`
              `),Pi(213,`label`,20),Ew(214,`Checked switch checkbox input`),dl(),Ew(215,`
            `),dl(),Ew(216,`
            `),Pi(217,`c-form-check`,25),Ew(218,`
              `),Rh(219,`input`,28),Ew(220,`
              `),Pi(221,`label`,20),Ew(222,`Default switch checkbox input`),dl(),Ew(223,`
            `),dl(),Ew(224,`
            `),Pi(225,`c-form-check`,25),Ew(226,`
              `),Rh(227,`input`,29),Ew(228,`
              `),Pi(229,`label`,20),Ew(230,`Checked switch checkbox input`),dl(),Ew(231,`
            `),dl(),Ew(232,`
          `),dl(),Ew(233,`
        `),dl(),Ew(234,`
      `),dl(),Ew(235,`
    `),dl(),Ew(236,`
    `),Pi(237,`c-col`,2),Ew(238,`
      `),Pi(239,`c-card`,3),Ew(240,`
        `),Pi(241,`c-card-header`),Ew(242,`
          `),Pi(243,`strong`),Ew(244,`Angular Switches`),dl(),Ew(245,` `),Pi(246,`small`),Ew(247,`Sizes`),dl(),Ew(248,`
        `),dl(),Ew(249,`
        `),Pi(250,`c-card-body`),Ew(251,`
          `),Pi(252,`app-docs-example`,30),Ew(253,`
            `),Pi(254,`c-form-check`,25),Ew(255,`
              `),Rh(256,`input`,26),Ew(257,`
              `),Pi(258,`label`,20),Ew(259,`Default switch checkbox input`),dl(),Ew(260,`
            `),dl(),Ew(261,`
            `),Pi(262,`c-form-check`,31),Ew(263,`
              `),Rh(264,`input`,26),Ew(265,`
              `),Pi(266,`label`,20),Ew(267,`Large switch checkbox input`),dl(),Ew(268,`
            `),dl(),Ew(269,`
            `),Pi(270,`c-form-check`,32),Ew(271,`
              `),Rh(272,`input`,27),Ew(273,`
              `),Pi(274,`label`,20),Ew(275,`Extra large switch checkbox input`),dl(),Ew(276,`
            `),dl(),Ew(277,`
          `),dl(),Ew(278,`
        `),dl(),Ew(279,`
      `),dl(),Ew(280,`
    `),dl(),Ew(281,`
    `),Pi(282,`c-col`,2),Ew(283,`
      `),Pi(284,`c-card`,3),Ew(285,`
        `),Pi(286,`c-card-header`),Ew(287,`
          `),Pi(288,`strong`),Ew(289,`Angular Checks and Radios`),dl(),Ew(290,` `),Pi(291,`small`),Ew(292,`Default layout (stacked)`),dl(),Ew(293,`
        `),dl(),Ew(294,`
        `),Pi(295,`c-card-body`),Ew(296,`
          `),Pi(297,`p`,10),Ew(298,`
            By default, any number of checkboxes and radios that are immediate sibling will be
            vertically stacked and appropriately spaced.
          `),dl(),Ew(299,`
          `),Pi(300,`app-docs-example`,33),Ew(301,`
            `),Pi(302,`c-form-check`),Ew(303,`
              `),Rh(304,`input`,34),Ew(305,`
              `),Pi(306,`label`,35),Ew(307,`Default checkbox`),dl(),Ew(308,`
            `),dl(),Ew(309,`
            `),Pi(310,`c-form-check`),Ew(311,`
              `),Rh(312,`input`,36),Ew(313,`
              `),Pi(314,`label`,37),Ew(315,`Disabled checkbox`),dl(),Ew(316,`
            `),dl(),Ew(317,`
          `),dl(),Ew(318,`
          `),Pi(319,`app-docs-example`,33),Ew(320,`
            `),Pi(321,`c-form-check`),Ew(322,`
              `),Rh(323,`input`,38),Ew(324,`
              `),Pi(325,`label`,39),Ew(326,`Default radio`),dl(),Ew(327,`
            `),dl(),Ew(328,`
            `),Pi(329,`c-form-check`),Ew(330,`
              `),Rh(331,`input`,40),Ew(332,`
              `),Pi(333,`label`,41),Ew(334,`Second radio`),dl(),Ew(335,`
            `),dl(),Ew(336,`
            `),Pi(337,`c-form-check`),Ew(338,`
              `),Rh(339,`input`,42),Ew(340,`
              `),Pi(341,`label`,43),Ew(342,`Disabled radio`),dl(),Ew(343,`
            `),dl(),Ew(344,`
          `),dl(),Ew(345,`
        `),dl(),Ew(346,`
      `),dl(),Ew(347,`
    `),dl(),Ew(348,`
    `),Pi(349,`c-col`,2),Ew(350,`
      `),Pi(351,`c-card`,3),Ew(352,`
        `),Pi(353,`c-card-header`),Ew(354,`
          `),Pi(355,`strong`),Ew(356,`Angular Checks and Radios`),dl(),Ew(357,` `),Pi(358,`small`),Ew(359,`Inline`),dl(),Ew(360,`
        `),dl(),Ew(361,`
        `),Pi(362,`c-card-body`),Ew(363,`
          `),Pi(364,`p`,10),Ew(365,`
            Group checkboxes or radios on the same horizontal row by adding `),Pi(366,`code`),Ew(367,`inline`),dl(),Ew(368,`
            boolean property to any `),Pi(369,`code`),Ew(370,`<c-form-check>`),dl(),Ew(371,`.
          `),dl(),Ew(372,`
          `),Pi(373,`app-docs-example`,44),Ew(374,`
            `),Pi(375,`c-form-check`,45),Ew(376,`
              `),Rh(377,`input`,46),Ew(378,`
              `),Pi(379,`label`,47),Ew(380,`1`),dl(),Ew(381,`
            `),dl(),Ew(382,`
            `),Pi(383,`c-form-check`,48),Ew(384,`
              `),Rh(385,`input`,49),Ew(386,`
              `),Pi(387,`label`,50),Ew(388,`2`),dl(),Ew(389,`
            `),dl(),Ew(390,`
            `),Pi(391,`c-form-check`,48),Ew(392,`
              `),Rh(393,`input`,51),Ew(394,`
              `),Pi(395,`label`,52),Ew(396,`3 (disabled)`),dl(),Ew(397,`
            `),dl(),Ew(398,`

          `),dl(),Ew(399,`
          `),Pi(400,`app-docs-example`,44),Ew(401,`
            `),Pi(402,`c-form-check`,48),Ew(403,`
              `),Rh(404,`input`,53),Ew(405,`
              `),Pi(406,`label`,54),Ew(407,`1`),dl(),Ew(408,`
            `),dl(),Ew(409,`
            `),Pi(410,`c-form-check`,48),Ew(411,`
              `),Rh(412,`input`,55),Ew(413,`
              `),Pi(414,`label`,56),Ew(415,`2`),dl(),Ew(416,`
            `),dl(),Ew(417,`
            `),Pi(418,`c-form-check`,48),Ew(419,`
              `),Rh(420,`input`,57),Ew(421,`
              `),Pi(422,`label`,58),Ew(423,`3 (disabled)`),dl(),Ew(424,`
            `),dl(),Ew(425,`
          `),dl(),Ew(426,`
        `),dl(),Ew(427,`
      `),dl(),Ew(428,`
    `),dl(),Ew(429,`
    `),Pi(430,`c-col`,2),Ew(431,`
      `),Pi(432,`c-card`,3),Ew(433,`
        `),Pi(434,`c-card-header`),Ew(435,`
          `),Pi(436,`strong`),Ew(437,`Angular Checks and Radios`),dl(),Ew(438,` `),Pi(439,`small`),Ew(440,`Without labels`),dl(),Ew(441,`
        `),dl(),Ew(442,`
        `),Pi(443,`c-card-body`),Ew(444,`
          `),Pi(445,`p`,10),Ew(446,`
            Remember to still provide some form of accessible name for assistive technologies (for
            instance, using `),Pi(447,`code`),Ew(448,`aria-label`),dl(),Ew(449,`).
          `),dl(),Ew(450,`
          `),Pi(451,`app-docs-example`,59),Ew(452,`
            `),Pi(453,`div`),Ew(454,`
              `),Rh(455,`input`,60),Ew(456,`
            `),dl(),Ew(457,`
            `),Pi(458,`div`),Ew(459,`
              `),Rh(460,`input`,61),Ew(461,`
            `),dl(),Ew(462,`
          `),dl(),Ew(463,`
        `),dl(),Ew(464,`
      `),dl(),Ew(465,`
    `),dl(),Ew(466,`
    `),Pi(467,`c-col`,2),Ew(468,`
      `),Pi(469,`c-card`,3),Ew(470,`
        `),Pi(471,`c-card-header`),Ew(472,`
          `),Pi(473,`strong`),Ew(474,`Toggle buttons`),dl(),Ew(475,`
        `),dl(),Ew(476,`
        `),Pi(477,`c-card-body`),Ew(478,`
          `),Pi(479,`p`,10),Ew(480,`
            Create button-like checkboxes and radio buttons by using `),Pi(481,`code`),Ew(482,`button`),dl(),Ew(483,` boolean
            property on the `),Pi(484,`code`),Ew(485,`<CFormCheck>`),dl(),Ew(486,` component. These toggle buttons can
            further be grouped in a button group if needed.
          `),dl(),Ew(487,`
          `),Pi(488,`app-docs-example`,62),Ew(489,`
            `),Pi(490,`div`,63),Ew(491,`
              `),Pi(492,`c-button-group`,64),Ew(493,`
                `),Rh(494,`input`,65),PE(),Ew(495,`
                `),Pi(496,`label`,66),Bh(`click`,function(){return r.setCheckBoxValue(`checkbox1`)}),Ew(497,`Checkbox 1`),dl(),Ew(498,`

                `),Rh(499,`input`,67),PE(),Ew(500,`
                `),Pi(501,`label`,66),Bh(`click`,function(){return r.setCheckBoxValue(`checkbox2`)}),Ew(502,`Checkbox 2`),dl(),Ew(503,`

                `),Rh(504,`input`,68),PE(),Ew(505,`
                `),Pi(506,`label`,66),Bh(`click`,function(){return r.setCheckBoxValue(`checkbox3`)}),Ew(507,`Disabled 3`),dl(),Ew(508,`
              `),dl(),Ew(509,`
            `),dl(),Ew(510,`
          `),dl(),Ew(511,`
          `),Pi(512,`app-docs-example`),Ew(513,`
            `),Pi(514,`div`,69),Ew(515,`
              `),Pi(516,`c-button-group`,70),Ew(517,`
                `),Rh(518,`input`,71),PE(),Ew(519,`
                `),Pi(520,`label`,72),Bh(`click`,function(){return r.setRadioValue(`Radio1`)}),Ew(521,`Radio 1`),dl(),Ew(522,`

                `),Rh(523,`input`,73),PE(),Ew(524,`
                `),Pi(525,`label`,74),Bh(`click`,function(){return r.setRadioValue(`Radio2`)}),Ew(526,`Radio 2`),dl(),Ew(527,`
                `),Rh(528,`input`,75),PE(),Ew(529,`
                `),Pi(530,`label`,76),Bh(`click`,function(){return r.setRadioValue(`Radio3`)}),Ew(531,`Radio3`),dl(),Ew(532,`
              `),dl(),Ew(533,`
            `),dl(),Ew(534,`
          `),dl(),Ew(535,`
          `),Pi(536,`h5`),Ew(537,`Outlined styles`),dl(),Ew(538,`
          `),Pi(539,`p`,10),Ew(540,`
            Different variants of button, such at the various outlined styles, are supported.
          `),dl(),Ew(541,`
          `),Pi(542,`app-docs-example`,62),Ew(543,`
            `),Pi(544,`div`,63),Ew(545,`
              `),Pi(546,`c-button-group`,64),Ew(547,`
                `),Rh(548,`input`,65),PE(),Ew(549,`
                `),Pi(550,`label`,77),Bh(`click`,function(){return r.setCheckBoxValue(`checkbox1`)}),Ew(551,`Checkbox 1`),dl(),Ew(552,`

                `),Rh(553,`input`,67),PE(),Ew(554,`
                `),Pi(555,`label`,77),Bh(`click`,function(){return r.setCheckBoxValue(`checkbox2`)}),Ew(556,`Checkbox 2`),dl(),Ew(557,`

                `),Rh(558,`input`,68),PE(),Ew(559,`
                `),Pi(560,`label`,77),Bh(`click`,function(){return r.setCheckBoxValue(`checkbox3`)}),Ew(561,`Disabled
                  3`),dl(),Ew(562,`
              `),dl(),Ew(563,`
            `),dl(),Ew(564,`
          `),dl(),Ew(565,`
          `),Pi(566,`app-docs-example`),Ew(567,`
            `),Pi(568,`div`,69),Ew(569,`
              `),Pi(570,`c-button-group`,70),Ew(571,`
                `),Rh(572,`input`,78),PE(),Ew(573,`
                `),Pi(574,`label`,79),Bh(`click`,function(){return r.setRadioValue(`Radio1`)}),Ew(575,`Radio 1`),dl(),Ew(576,`

                `),Rh(577,`input`,80),PE(),Ew(578,`
                `),Pi(579,`label`,81),Bh(`click`,function(){return r.setRadioValue(`Radio2`)}),Ew(580,`Radio 2`),dl(),Ew(581,`

                `),Rh(582,`input`,82),PE(),Ew(583,`
                `),Pi(584,`label`,83),Bh(`click`,function(){return r.setRadioValue(`Radio3`)}),Ew(585,`Radio3`),dl(),Ew(586,`
              `),dl(),Ew(587,`
            `),dl(),Ew(588,`
          `),dl(),Ew(589,`
        `),dl(),Ew(590,`
      `),dl(),Ew(591,`
    `),dl(),Ew(592,`
  `),dl(),Ew(593,`
`),dl()),d&2&&(QI(4),Ah(`formGroup`,r.formGroup),QI(20),jE(),QI(8),Ah(`checked`,!0),jE(),QI(41),jE(),QI(8),jE(),QI(29),jE(),QI(8),jE(),QI(41),jE(),QI(8),jE(),QI(34),Ah(`switch`,!0),QI(8),Ah(`switch`,!0),QI(8),Ah(`switch`,!0),QI(8),Ah(`switch`,!0),QI(29),Ah(`switch`,!0),QI(121),Ah(`inline`,!0),QI(119),jE(),QI(5),jE(),QI(5),jE(),QI(14),jE(),QI(5),jE(),QI(5),xh(`disabled`,!0),jE(),QI(20),jE(),QI(5),jE(),QI(5),jE(),QI(14),jE(),QI(5),jE(),QI(5),xh(`disabled`,!0),jE())},dependencies:[Y1,ei,Xn,Ye,Nt,pn,Wn,qn,Vn,yn,Vt,B1,yy,Qi,py,Ji,k,j1,$1,sp,D1,ay,c],encapsulation:2})}};export{H as ChecksRadiosComponent};