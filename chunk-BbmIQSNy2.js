import{Gr as ul,L as ID,Un as hw,Xn as kE,_t as Pi,bi as l,fn as b,ft as Oh,i as AE,ni as wh,on as _h,p as Ch,t as $I}from"./chunk-BSgQlS93.js";import{A as K0,Bt as g1,H as O1,It as ey,W as P1,X as Qi,h as F1,k as Ji,mt as Yf,st as V1,xn as sy}from"./main-37K4GJAM.js";import{i as k}from"./chunk-FodikvMx.js";import{t as c}from"./chunk-5BukuvC5.js";import{S as qn,T as yn,_ as ei,d as Wn,f as Xn,l as Vn,o as Nt,p as Ye,r as Jn,u as Vt,x as pn}from"./chunk-CW1XgXNn.js";var H=class p{constructor(){this.formBuilder=b(Jn);this.formGroup=this.formBuilder.group({flexRadioGroup:this.formBuilder.group({flexRadioDefault:this.formBuilder.control(`two`)}),flexRadioGroupDisabled:this.formBuilder.group({flexRadioDefault:this.formBuilder.control({value:`two`,disabled:!0})}),flexCheckGroup:this.formBuilder.group({checkOne:[!1],checkTwo:[!0]}),flexCheckGroupDisabled:this.formBuilder.group({checkThree:[{value:!1,disabled:!0}],checkFour:[{value:!0,disabled:!0}]}),btnCheckGroup:this.formBuilder.group({checkbox1:[!0],checkbox2:[!1],checkbox3:[{value:!1,disabled:!0}]}),btnRadioGroup:this.formBuilder.group({radio1:this.formBuilder.control({value:`Radio2`})})})}setCheckBoxValue(s){let d=this.formGroup.controls.btnCheckGroup,r=d.get(s)?.value,c=l({},d.value);c[s]=!r,d.patchValue(c)}setRadioValue(s){this.formGroup.controls.btnRadioGroup.setValue({radio1:s})}static{this.ɵfac=function(d){return new(d||p)}}static{this.ɵcmp=ID({type:p,selectors:[[`app-checks-radios`]],decls:594,vars:10,consts:[[`href`,`forms/checks-radios`,`title`,`Check & Radios`],[`cForm`,``,3,`formGroup`],[`xs`,`12`],[1,`mb-4`],[`href`,`forms/checks-radios`],[`formGroupName`,`flexCheckGroup`],[`cFormCheckInput`,``,`formControlName`,`checkOne`,`id`,`checkOne`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`checkOne`],[`cFormCheckInput`,``,`formControlName`,`checkTwo`,`id`,`checkTwo`,`type`,`checkbox`,3,`checked`],[`cFormCheckLabel`,``,`for`,`checkTwo`],[1,`text-body-secondary`,`small`],[`href`,`forms/checks-radios#disabled`],[`formGroupName`,`flexCheckGroupDisabled`],[`cFormCheckInput`,``,`formControlName`,`checkThree`,`id`,`checkThree`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`checkThree`],[`cFormCheckInput`,``,`formControlName`,`checkFour`,`id`,`checkFour`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`checkFour`],[`href`,`forms/checks-radios#radios`],[`formGroupName`,`flexRadioGroup`],[`cFormCheckInput`,``,`formControlName`,`flexRadioDefault`,`type`,`radio`,`value`,`one`],[`cFormCheckLabel`,``],[`cFormCheckInput`,``,`formControlName`,`flexRadioDefault`,`type`,`radio`,`value`,`two`],[`href`,`forms/checks-radios#disabled-1`],[`formGroupName`,`flexRadioGroupDisabled`],[`href`,`forms/checks-radios#switches`],[3,`switch`],[`cFormCheckInput`,``,`type`,`checkbox`],[`cFormCheckInput`,``,`checked`,``,`type`,`checkbox`],[`cFormCheckInput`,``,`disabled`,``,`type`,`checkbox`],[`cFormCheckInput`,``,`checked`,``,`disabled`,``,`type`,`checkbox`],[`href`,`forms/checks-radios#sizes`],[`sizing`,`lg`,`switch`,``],[`sizing`,`xl`,`switch`,``],[`href`,`forms/checks-radios#default-stacked`],[`cFormCheckInput`,``,`id`,`stackOne`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`stackOne`],[`cFormCheckInput`,``,`disabled`,``,`id`,`stackTwo`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`stackTwo`],[`cFormCheckInput`,``,`checked`,``,`id`,`radioStack1`,`name`,`radioStack`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioStack1`],[`cFormCheckInput`,``,`id`,`radioStack2`,`name`,`radioStack`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioStack2`],[`cFormCheckInput`,``,`disabled`,``,`id`,`radioStack3`,`name`,`radioStack`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioStack3`],[`href`,`forms/checks-radios#inline`],[3,`inline`],[`cFormCheckInput`,``,`id`,`inline1`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`inline1`],[`inline`,``],[`cFormCheckInput`,``,`id`,`inline2`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`inline2`],[`cFormCheckInput`,``,`disabled`,``,`id`,`inline3`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`inline3`],[`cFormCheckInput`,``,`checked`,``,`id`,`radioinline1`,`name`,`radioinline`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioinline1`],[`cFormCheckInput`,``,`id`,`radioinline2`,`name`,`radioinline`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioinline2`],[`cFormCheckInput`,``,`disabled`,``,`id`,`radioinline3`,`name`,`radioinline`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioinline3`],[`href`,`forms/checks-radios#without-labels`],[`cFormCheckInput`,``,`id`,`nolabelCheck`,`name`,`nolabelCheck`,`type`,`checkbox`],[`cFormCheckInput`,``,`id`,`nolabelRadio`,`name`,`nolabelRadio`,`type`,`radio`],[`href`,`forms/checks-radios#toggle-buttons`],[`formGroupName`,`btnCheckGroup`],[`aria-label`,`Basic checkbox toggle button group`,`role`,`group`],[`formControlName`,`checkbox1`,`type`,`checkbox`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,3,`click`],[`formControlName`,`checkbox2`,`type`,`checkbox`,1,`btn-check`],[`formControlName`,`checkbox3`,`type`,`checkbox`,1,`btn-check`],[`formGroupName`,`btnRadioGroup`],[`aria-label`,`Basic radio toggle button group`,`role`,`group`],[`formControlName`,`radio1`,`id`,`radio1`,`type`,`radio`,`value`,`Radio1`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`for`,`radio1`,`variant`,`ghost`,3,`click`],[`formControlName`,`radio1`,`id`,`radio2`,`type`,`radio`,`value`,`Radio2`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`for`,`radio2`,`variant`,`ghost`,3,`click`],[`formControlName`,`radio1`,`id`,`radio3`,`type`,`radio`,`value`,`Radio3`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`for`,`radio3`,`variant`,`ghost`,3,`click`],[`cButton`,``,`cFormCheckLabel`,``,`variant`,`outline`,3,`click`],[`formControlName`,`radio1`,`id`,`radio1o`,`type`,`radio`,`value`,`Radio1`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`color`,`danger`,`for`,`radio1o`,`variant`,`outline`,3,`click`],[`formControlName`,`radio1`,`id`,`radio2o`,`type`,`radio`,`value`,`Radio2`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`color`,`success`,`for`,`radio2o`,`variant`,`outline`,3,`click`],[`formControlName`,`radio1`,`id`,`radio3o`,`type`,`radio`,`value`,`Radio3`,1,`btn-check`],[`cButton`,``,`color`,`secondary`,`for`,`radio3o`,`variant`,`outline`,3,`click`]],template:function(d,r){d&1&&(Pi(0,`c-row`),hw(1,`
  `),_h(2,`app-docs-components`,0),hw(3,`
  `),Pi(4,`form`,1),hw(5,`
    `),Pi(6,`c-col`,2),hw(7,`
      `),Pi(8,`c-card`,3),hw(9,`
        `),Pi(10,`c-card-header`),hw(11,`
          `),Pi(12,`strong`),hw(13,`Angular Checkbox`),ul(),hw(14,`
        `),ul(),hw(15,`
        `),Pi(16,`c-card-body`),hw(17,`
          `),Pi(18,`app-docs-example`,4),hw(19,`
            `),Pi(20,`div`,5),hw(21,`
              `),Pi(22,`c-form-check`),hw(23,`
                `),_h(24,`input`,6),AE(),hw(25,`
                `),Pi(26,`label`,7),hw(27,`Default checkbox`),ul(),hw(28,`
              `),ul(),hw(29,`
              `),Pi(30,`c-form-check`),hw(31,`
                `),_h(32,`input`,8),AE(),hw(33,`
                `),Pi(34,`label`,9),hw(35,`Checked checkbox`),ul(),hw(36,`
              `),ul(),hw(37,`
            `),ul(),hw(38,`
          `),ul(),hw(39,`
        `),ul(),hw(40,`
      `),ul(),hw(41,`
    `),ul(),hw(42,`
    `),Pi(43,`c-col`,2),hw(44,`
      `),Pi(45,`c-card`,3),hw(46,`
        `),Pi(47,`c-card-header`),hw(48,`
          `),Pi(49,`strong`),hw(50,`Angular Checkbox`),ul(),hw(51,` `),Pi(52,`small`),hw(53,`Disabled`),ul(),hw(54,`
        `),ul(),hw(55,`
        `),Pi(56,`c-card-body`),hw(57,`
          `),Pi(58,`p`,10),hw(59,`
            Add the `),Pi(60,`code`),hw(61,`disabled`),ul(),hw(62,` attribute and the associated `),Pi(63,`code`),hw(64,`<label>`),ul(),hw(65,`s
            are automatically styled to match with a lighter color to help indicate the
            input's state.
          `),ul(),hw(66,`
          `),Pi(67,`app-docs-example`,11),hw(68,`
            `),Pi(69,`div`,12),hw(70,`
              `),Pi(71,`c-form-check`),hw(72,`
                `),_h(73,`input`,13),AE(),hw(74,`
                `),Pi(75,`label`,14),hw(76,`Disabled checkbox`),ul(),hw(77,`
              `),ul(),hw(78,`
              `),Pi(79,`c-form-check`),hw(80,`
                `),_h(81,`input`,15),AE(),hw(82,`
                `),Pi(83,`label`,16),hw(84,`Disabled checked checkbox`),ul(),hw(85,`
              `),ul(),hw(86,`
            `),ul(),hw(87,`
          `),ul(),hw(88,`
        `),ul(),hw(89,`
      `),ul(),hw(90,`
    `),ul(),hw(91,`
    `),Pi(92,`c-col`,2),hw(93,`
      `),Pi(94,`c-card`,3),hw(95,`
        `),Pi(96,`c-card-header`),hw(97,`
          `),Pi(98,`strong`),hw(99,`Angular Radio`),ul(),hw(100,`
        `),ul(),hw(101,`
        `),Pi(102,`c-card-body`),hw(103,`
          `),Pi(104,`app-docs-example`,17),hw(105,`
            `),Pi(106,`div`,18),hw(107,`
              `),Pi(108,`c-form-check`),hw(109,`
                `),_h(110,`input`,19),AE(),hw(111,`
                `),Pi(112,`label`,20),hw(113,`Default radio`),ul(),hw(114,`
              `),ul(),hw(115,`
              `),Pi(116,`c-form-check`),hw(117,`
                `),_h(118,`input`,21),AE(),hw(119,`
                `),Pi(120,`label`,20),hw(121,`Checked radio`),ul(),hw(122,`
              `),ul(),hw(123,`
            `),ul(),hw(124,`
          `),ul(),hw(125,`
        `),ul(),hw(126,`
      `),ul(),hw(127,`
    `),ul(),hw(128,`
    `),Pi(129,`c-col`,2),hw(130,`
      `),Pi(131,`c-card`,3),hw(132,`
        `),Pi(133,`c-card-header`),hw(134,`
          `),Pi(135,`strong`),hw(136,`Angular Radio`),ul(),hw(137,` `),Pi(138,`small`),hw(139,`Disabled`),ul(),hw(140,`
        `),ul(),hw(141,`
        `),Pi(142,`c-card-body`),hw(143,`
          `),Pi(144,`p`,10),hw(145,`
            Add the `),Pi(146,`code`),hw(147,`disabled`),ul(),hw(148,` attribute and the associated `),Pi(149,`code`),hw(150,`<label>`),ul(),hw(151,`s
            are automatically styled to match with a lighter color to help indicate the
            input's state.
          `),ul(),hw(152,`
          `),Pi(153,`app-docs-example`,22),hw(154,`
            `),Pi(155,`div`,23),hw(156,`
              `),Pi(157,`c-form-check`),hw(158,`
                `),_h(159,`input`,19),AE(),hw(160,`
                `),Pi(161,`label`,20),hw(162,`Default radio`),ul(),hw(163,`
              `),ul(),hw(164,`
              `),Pi(165,`c-form-check`),hw(166,`
                `),_h(167,`input`,21),AE(),hw(168,`
                `),Pi(169,`label`,20),hw(170,`Checked radio`),ul(),hw(171,`
              `),ul(),hw(172,`
            `),ul(),hw(173,`
          `),ul(),hw(174,`
        `),ul(),hw(175,`
      `),ul(),hw(176,`
    `),ul(),hw(177,`
    `),Pi(178,`c-col`,2),hw(179,`
      `),Pi(180,`c-card`,3),hw(181,`
        `),Pi(182,`c-card-header`),hw(183,`
          `),Pi(184,`strong`),hw(185,`Angular Switches`),ul(),hw(186,`
        `),ul(),hw(187,`
        `),Pi(188,`c-card-body`),hw(189,`
          `),Pi(190,`p`,10),hw(191,`
            A switch has the markup of a custom checkbox but uses the `),Pi(192,`code`),hw(193,`switch`),ul(),hw(194,` boolean
            properly to render a toggle switch. Switches also support the `),Pi(195,`code`),hw(196,`disabled`),ul(),hw(197,`
            attribute.
          `),ul(),hw(198,`
          `),Pi(199,`app-docs-example`,24),hw(200,`
            `),Pi(201,`c-form-check`,25),hw(202,`
              `),_h(203,`input`,26),hw(204,`
              `),Pi(205,`label`,20),hw(206,`Default switch checkbox input`),ul(),hw(207,`
            `),ul(),hw(208,`
            `),Pi(209,`c-form-check`,25),hw(210,`
              `),_h(211,`input`,27),hw(212,`
              `),Pi(213,`label`,20),hw(214,`Checked switch checkbox input`),ul(),hw(215,`
            `),ul(),hw(216,`
            `),Pi(217,`c-form-check`,25),hw(218,`
              `),_h(219,`input`,28),hw(220,`
              `),Pi(221,`label`,20),hw(222,`Default switch checkbox input`),ul(),hw(223,`
            `),ul(),hw(224,`
            `),Pi(225,`c-form-check`,25),hw(226,`
              `),_h(227,`input`,29),hw(228,`
              `),Pi(229,`label`,20),hw(230,`Checked switch checkbox input`),ul(),hw(231,`
            `),ul(),hw(232,`
          `),ul(),hw(233,`
        `),ul(),hw(234,`
      `),ul(),hw(235,`
    `),ul(),hw(236,`
    `),Pi(237,`c-col`,2),hw(238,`
      `),Pi(239,`c-card`,3),hw(240,`
        `),Pi(241,`c-card-header`),hw(242,`
          `),Pi(243,`strong`),hw(244,`Angular Switches`),ul(),hw(245,` `),Pi(246,`small`),hw(247,`Sizes`),ul(),hw(248,`
        `),ul(),hw(249,`
        `),Pi(250,`c-card-body`),hw(251,`
          `),Pi(252,`app-docs-example`,30),hw(253,`
            `),Pi(254,`c-form-check`,25),hw(255,`
              `),_h(256,`input`,26),hw(257,`
              `),Pi(258,`label`,20),hw(259,`Default switch checkbox input`),ul(),hw(260,`
            `),ul(),hw(261,`
            `),Pi(262,`c-form-check`,31),hw(263,`
              `),_h(264,`input`,26),hw(265,`
              `),Pi(266,`label`,20),hw(267,`Large switch checkbox input`),ul(),hw(268,`
            `),ul(),hw(269,`
            `),Pi(270,`c-form-check`,32),hw(271,`
              `),_h(272,`input`,27),hw(273,`
              `),Pi(274,`label`,20),hw(275,`Extra large switch checkbox input`),ul(),hw(276,`
            `),ul(),hw(277,`
          `),ul(),hw(278,`
        `),ul(),hw(279,`
      `),ul(),hw(280,`
    `),ul(),hw(281,`
    `),Pi(282,`c-col`,2),hw(283,`
      `),Pi(284,`c-card`,3),hw(285,`
        `),Pi(286,`c-card-header`),hw(287,`
          `),Pi(288,`strong`),hw(289,`Angular Checks and Radios`),ul(),hw(290,` `),Pi(291,`small`),hw(292,`Default layout (stacked)`),ul(),hw(293,`
        `),ul(),hw(294,`
        `),Pi(295,`c-card-body`),hw(296,`
          `),Pi(297,`p`,10),hw(298,`
            By default, any number of checkboxes and radios that are immediate sibling will be
            vertically stacked and appropriately spaced.
          `),ul(),hw(299,`
          `),Pi(300,`app-docs-example`,33),hw(301,`
            `),Pi(302,`c-form-check`),hw(303,`
              `),_h(304,`input`,34),hw(305,`
              `),Pi(306,`label`,35),hw(307,`Default checkbox`),ul(),hw(308,`
            `),ul(),hw(309,`
            `),Pi(310,`c-form-check`),hw(311,`
              `),_h(312,`input`,36),hw(313,`
              `),Pi(314,`label`,37),hw(315,`Disabled checkbox`),ul(),hw(316,`
            `),ul(),hw(317,`
          `),ul(),hw(318,`
          `),Pi(319,`app-docs-example`,33),hw(320,`
            `),Pi(321,`c-form-check`),hw(322,`
              `),_h(323,`input`,38),hw(324,`
              `),Pi(325,`label`,39),hw(326,`Default radio`),ul(),hw(327,`
            `),ul(),hw(328,`
            `),Pi(329,`c-form-check`),hw(330,`
              `),_h(331,`input`,40),hw(332,`
              `),Pi(333,`label`,41),hw(334,`Second radio`),ul(),hw(335,`
            `),ul(),hw(336,`
            `),Pi(337,`c-form-check`),hw(338,`
              `),_h(339,`input`,42),hw(340,`
              `),Pi(341,`label`,43),hw(342,`Disabled radio`),ul(),hw(343,`
            `),ul(),hw(344,`
          `),ul(),hw(345,`
        `),ul(),hw(346,`
      `),ul(),hw(347,`
    `),ul(),hw(348,`
    `),Pi(349,`c-col`,2),hw(350,`
      `),Pi(351,`c-card`,3),hw(352,`
        `),Pi(353,`c-card-header`),hw(354,`
          `),Pi(355,`strong`),hw(356,`Angular Checks and Radios`),ul(),hw(357,` `),Pi(358,`small`),hw(359,`Inline`),ul(),hw(360,`
        `),ul(),hw(361,`
        `),Pi(362,`c-card-body`),hw(363,`
          `),Pi(364,`p`,10),hw(365,`
            Group checkboxes or radios on the same horizontal row by adding `),Pi(366,`code`),hw(367,`inline`),ul(),hw(368,`
            boolean property to any `),Pi(369,`code`),hw(370,`<c-form-check>`),ul(),hw(371,`.
          `),ul(),hw(372,`
          `),Pi(373,`app-docs-example`,44),hw(374,`
            `),Pi(375,`c-form-check`,45),hw(376,`
              `),_h(377,`input`,46),hw(378,`
              `),Pi(379,`label`,47),hw(380,`1`),ul(),hw(381,`
            `),ul(),hw(382,`
            `),Pi(383,`c-form-check`,48),hw(384,`
              `),_h(385,`input`,49),hw(386,`
              `),Pi(387,`label`,50),hw(388,`2`),ul(),hw(389,`
            `),ul(),hw(390,`
            `),Pi(391,`c-form-check`,48),hw(392,`
              `),_h(393,`input`,51),hw(394,`
              `),Pi(395,`label`,52),hw(396,`3 (disabled)`),ul(),hw(397,`
            `),ul(),hw(398,`

          `),ul(),hw(399,`
          `),Pi(400,`app-docs-example`,44),hw(401,`
            `),Pi(402,`c-form-check`,48),hw(403,`
              `),_h(404,`input`,53),hw(405,`
              `),Pi(406,`label`,54),hw(407,`1`),ul(),hw(408,`
            `),ul(),hw(409,`
            `),Pi(410,`c-form-check`,48),hw(411,`
              `),_h(412,`input`,55),hw(413,`
              `),Pi(414,`label`,56),hw(415,`2`),ul(),hw(416,`
            `),ul(),hw(417,`
            `),Pi(418,`c-form-check`,48),hw(419,`
              `),_h(420,`input`,57),hw(421,`
              `),Pi(422,`label`,58),hw(423,`3 (disabled)`),ul(),hw(424,`
            `),ul(),hw(425,`
          `),ul(),hw(426,`
        `),ul(),hw(427,`
      `),ul(),hw(428,`
    `),ul(),hw(429,`
    `),Pi(430,`c-col`,2),hw(431,`
      `),Pi(432,`c-card`,3),hw(433,`
        `),Pi(434,`c-card-header`),hw(435,`
          `),Pi(436,`strong`),hw(437,`Angular Checks and Radios`),ul(),hw(438,` `),Pi(439,`small`),hw(440,`Without labels`),ul(),hw(441,`
        `),ul(),hw(442,`
        `),Pi(443,`c-card-body`),hw(444,`
          `),Pi(445,`p`,10),hw(446,`
            Remember to still provide some form of accessible name for assistive technologies (for
            instance, using `),Pi(447,`code`),hw(448,`aria-label`),ul(),hw(449,`).
          `),ul(),hw(450,`
          `),Pi(451,`app-docs-example`,59),hw(452,`
            `),Pi(453,`div`),hw(454,`
              `),_h(455,`input`,60),hw(456,`
            `),ul(),hw(457,`
            `),Pi(458,`div`),hw(459,`
              `),_h(460,`input`,61),hw(461,`
            `),ul(),hw(462,`
          `),ul(),hw(463,`
        `),ul(),hw(464,`
      `),ul(),hw(465,`
    `),ul(),hw(466,`
    `),Pi(467,`c-col`,2),hw(468,`
      `),Pi(469,`c-card`,3),hw(470,`
        `),Pi(471,`c-card-header`),hw(472,`
          `),Pi(473,`strong`),hw(474,`Toggle buttons`),ul(),hw(475,`
        `),ul(),hw(476,`
        `),Pi(477,`c-card-body`),hw(478,`
          `),Pi(479,`p`,10),hw(480,`
            Create button-like checkboxes and radio buttons by using `),Pi(481,`code`),hw(482,`button`),ul(),hw(483,` boolean
            property on the `),Pi(484,`code`),hw(485,`<CFormCheck>`),ul(),hw(486,` component. These toggle buttons can
            further be grouped in a button group if needed.
          `),ul(),hw(487,`
          `),Pi(488,`app-docs-example`,62),hw(489,`
            `),Pi(490,`div`,63),hw(491,`
              `),Pi(492,`c-button-group`,64),hw(493,`
                `),_h(494,`input`,65),AE(),hw(495,`
                `),Pi(496,`label`,66),Oh(`click`,function(){return r.setCheckBoxValue(`checkbox1`)}),hw(497,`Checkbox 1`),ul(),hw(498,`

                `),_h(499,`input`,67),AE(),hw(500,`
                `),Pi(501,`label`,66),Oh(`click`,function(){return r.setCheckBoxValue(`checkbox2`)}),hw(502,`Checkbox 2`),ul(),hw(503,`

                `),_h(504,`input`,68),AE(),hw(505,`
                `),Pi(506,`label`,66),Oh(`click`,function(){return r.setCheckBoxValue(`checkbox3`)}),hw(507,`Disabled 3`),ul(),hw(508,`
              `),ul(),hw(509,`
            `),ul(),hw(510,`
          `),ul(),hw(511,`
          `),Pi(512,`app-docs-example`),hw(513,`
            `),Pi(514,`div`,69),hw(515,`
              `),Pi(516,`c-button-group`,70),hw(517,`
                `),_h(518,`input`,71),AE(),hw(519,`
                `),Pi(520,`label`,72),Oh(`click`,function(){return r.setRadioValue(`Radio1`)}),hw(521,`Radio 1`),ul(),hw(522,`

                `),_h(523,`input`,73),AE(),hw(524,`
                `),Pi(525,`label`,74),Oh(`click`,function(){return r.setRadioValue(`Radio2`)}),hw(526,`Radio 2`),ul(),hw(527,`
                `),_h(528,`input`,75),AE(),hw(529,`
                `),Pi(530,`label`,76),Oh(`click`,function(){return r.setRadioValue(`Radio3`)}),hw(531,`Radio3`),ul(),hw(532,`
              `),ul(),hw(533,`
            `),ul(),hw(534,`
          `),ul(),hw(535,`
          `),Pi(536,`h5`),hw(537,`Outlined styles`),ul(),hw(538,`
          `),Pi(539,`p`,10),hw(540,`
            Different variants of button, such at the various outlined styles, are supported.
          `),ul(),hw(541,`
          `),Pi(542,`app-docs-example`,62),hw(543,`
            `),Pi(544,`div`,63),hw(545,`
              `),Pi(546,`c-button-group`,64),hw(547,`
                `),_h(548,`input`,65),AE(),hw(549,`
                `),Pi(550,`label`,77),Oh(`click`,function(){return r.setCheckBoxValue(`checkbox1`)}),hw(551,`Checkbox 1`),ul(),hw(552,`

                `),_h(553,`input`,67),AE(),hw(554,`
                `),Pi(555,`label`,77),Oh(`click`,function(){return r.setCheckBoxValue(`checkbox2`)}),hw(556,`Checkbox 2`),ul(),hw(557,`

                `),_h(558,`input`,68),AE(),hw(559,`
                `),Pi(560,`label`,77),Oh(`click`,function(){return r.setCheckBoxValue(`checkbox3`)}),hw(561,`Disabled
                  3`),ul(),hw(562,`
              `),ul(),hw(563,`
            `),ul(),hw(564,`
          `),ul(),hw(565,`
          `),Pi(566,`app-docs-example`),hw(567,`
            `),Pi(568,`div`,69),hw(569,`
              `),Pi(570,`c-button-group`,70),hw(571,`
                `),_h(572,`input`,78),AE(),hw(573,`
                `),Pi(574,`label`,79),Oh(`click`,function(){return r.setRadioValue(`Radio1`)}),hw(575,`Radio 1`),ul(),hw(576,`

                `),_h(577,`input`,80),AE(),hw(578,`
                `),Pi(579,`label`,81),Oh(`click`,function(){return r.setRadioValue(`Radio2`)}),hw(580,`Radio 2`),ul(),hw(581,`

                `),_h(582,`input`,82),AE(),hw(583,`
                `),Pi(584,`label`,83),Oh(`click`,function(){return r.setRadioValue(`Radio3`)}),hw(585,`Radio3`),ul(),hw(586,`
              `),ul(),hw(587,`
            `),ul(),hw(588,`
          `),ul(),hw(589,`
        `),ul(),hw(590,`
      `),ul(),hw(591,`
    `),ul(),hw(592,`
  `),ul(),hw(593,`
`),ul()),d&2&&($I(4),Ch(`formGroup`,r.formGroup),$I(20),kE(),$I(8),Ch(`checked`,!0),kE(),$I(41),kE(),$I(8),kE(),$I(29),kE(),$I(8),kE(),$I(41),kE(),$I(8),kE(),$I(34),Ch(`switch`,!0),$I(8),Ch(`switch`,!0),$I(8),Ch(`switch`,!0),$I(8),Ch(`switch`,!0),$I(29),Ch(`switch`,!0),$I(121),Ch(`inline`,!0),$I(119),kE(),$I(5),kE(),$I(5),kE(),$I(14),kE(),$I(5),kE(),$I(5),wh(`disabled`,!0),kE(),$I(20),kE(),$I(5),kE(),$I(5),kE(),$I(14),kE(),$I(5),kE(),$I(5),wh(`disabled`,!0),kE())},dependencies:[V1,ei,Xn,Ye,Nt,pn,Wn,qn,Vn,yn,Vt,O1,sy,Qi,ey,Ji,k,F1,P1,Yf,g1,K0,c],encapsulation:2})}};export{H as ChecksRadiosComponent};