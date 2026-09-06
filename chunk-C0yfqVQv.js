import{Di as l,Jn as fl,Kt as T,Pr as qh,R as HI,at as Lh,ht as ND,n as $I,pn as XE,pr as ji,qt as TC,vr as kh,wt as Oh}from"./chunk-CNvvMoDe.js";import{$ as U1,A as L1,D as K1,Dn as uy,Ln as y1,T as Ji,U as Qi,a as B1,cn as oy,jn as vy,xn as sp}from"./main-KR47Z6Z4.js";import{i as k}from"./chunk-BoQ4iLTD.js";import{t as c}from"./chunk-CqpfDRQx.js";import{S as qn,T as yn,_ as ei,d as Wn,f as Xn,l as Vn,o as Nt,p as Ye,r as Jn,u as Vt,x as pn}from"./chunk-CGCxv84v.js";var H=class p{constructor(){this.formBuilder=T(Jn);this.formGroup=this.formBuilder.group({flexRadioGroup:this.formBuilder.group({flexRadioDefault:this.formBuilder.control(`two`)}),flexRadioGroupDisabled:this.formBuilder.group({flexRadioDefault:this.formBuilder.control({value:`two`,disabled:!0})}),flexCheckGroup:this.formBuilder.group({checkOne:[!1],checkTwo:[!0]}),flexCheckGroupDisabled:this.formBuilder.group({checkThree:[{value:!1,disabled:!0}],checkFour:[{value:!0,disabled:!0}]}),btnCheckGroup:this.formBuilder.group({checkbox1:[!0],checkbox2:[!1],checkbox3:[{value:!1,disabled:!0}]}),btnRadioGroup:this.formBuilder.group({radio1:this.formBuilder.control({value:`Radio2`})})})}setCheckBoxValue(s){let d=this.formGroup.controls.btnCheckGroup,r=d.get(s)?.value,c=l({},d.value);c[s]=!r,d.patchValue(c)}setRadioValue(s){this.formGroup.controls.btnRadioGroup.setValue({radio1:s})}static{this.ɵfac=function(d){return new(d||p)}}static{this.ɵcmp=ND({type:p,selectors:[[`app-checks-radios`]],decls:594,vars:10,consts:[[`href`,`forms/checks-radios`,`title`,`Check & Radios`],[`cForm`,``,3,`formGroup`],[`xs`,`12`],[1,`mb-4`],[`href`,`forms/checks-radios`],[`formGroupName`,`flexCheckGroup`],[`cFormCheckInput`,``,`formControlName`,`checkOne`,`id`,`checkOne`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`checkOne`],[`cFormCheckInput`,``,`formControlName`,`checkTwo`,`id`,`checkTwo`,`type`,`checkbox`,3,`checked`],[`cFormCheckLabel`,``,`for`,`checkTwo`],[1,`text-body-secondary`,`small`],[`href`,`forms/checks-radios#disabled`],[`formGroupName`,`flexCheckGroupDisabled`],[`cFormCheckInput`,``,`formControlName`,`checkThree`,`id`,`checkThree`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`checkThree`],[`cFormCheckInput`,``,`formControlName`,`checkFour`,`id`,`checkFour`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`checkFour`],[`href`,`forms/checks-radios#radios`],[`formGroupName`,`flexRadioGroup`],[`cFormCheckInput`,``,`formControlName`,`flexRadioDefault`,`type`,`radio`,`value`,`one`],[`cFormCheckLabel`,``],[`cFormCheckInput`,``,`formControlName`,`flexRadioDefault`,`type`,`radio`,`value`,`two`],[`href`,`forms/checks-radios#disabled-1`],[`formGroupName`,`flexRadioGroupDisabled`],[`href`,`forms/checks-radios#switches`],[3,`switch`],[`cFormCheckInput`,``,`type`,`checkbox`],[`cFormCheckInput`,``,`checked`,``,`type`,`checkbox`],[`cFormCheckInput`,``,`disabled`,``,`type`,`checkbox`],[`cFormCheckInput`,``,`checked`,``,`disabled`,``,`type`,`checkbox`],[`href`,`forms/checks-radios#sizes`],[`sizing`,`lg`,`switch`,``],[`sizing`,`xl`,`switch`,``],[`href`,`forms/checks-radios#default-stacked`],[`cFormCheckInput`,``,`id`,`stackOne`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`stackOne`],[`cFormCheckInput`,``,`disabled`,``,`id`,`stackTwo`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`stackTwo`],[`cFormCheckInput`,``,`checked`,``,`id`,`radioStack1`,`name`,`radioStack`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioStack1`],[`cFormCheckInput`,``,`id`,`radioStack2`,`name`,`radioStack`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioStack2`],[`cFormCheckInput`,``,`disabled`,``,`id`,`radioStack3`,`name`,`radioStack`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioStack3`],[`href`,`forms/checks-radios#inline`],[3,`inline`],[`cFormCheckInput`,``,`id`,`inline1`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`inline1`],[`inline`,``],[`cFormCheckInput`,``,`id`,`inline2`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`inline2`],[`cFormCheckInput`,``,`disabled`,``,`id`,`inline3`,`type`,`checkbox`],[`cFormCheckLabel`,``,`for`,`inline3`],[`cFormCheckInput`,``,`checked`,``,`id`,`radioinline1`,`name`,`radioinline`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioinline1`],[`cFormCheckInput`,``,`id`,`radioinline2`,`name`,`radioinline`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioinline2`],[`cFormCheckInput`,``,`disabled`,``,`id`,`radioinline3`,`name`,`radioinline`,`type`,`radio`],[`cFormCheckLabel`,``,`for`,`radioinline3`],[`href`,`forms/checks-radios#without-labels`],[`cFormCheckInput`,``,`id`,`nolabelCheck`,`name`,`nolabelCheck`,`type`,`checkbox`],[`cFormCheckInput`,``,`id`,`nolabelRadio`,`name`,`nolabelRadio`,`type`,`radio`],[`href`,`forms/checks-radios#toggle-buttons`],[`formGroupName`,`btnCheckGroup`],[`aria-label`,`Basic checkbox toggle button group`,`role`,`group`],[`formControlName`,`checkbox1`,`type`,`checkbox`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,3,`click`],[`formControlName`,`checkbox2`,`type`,`checkbox`,1,`btn-check`],[`formControlName`,`checkbox3`,`type`,`checkbox`,1,`btn-check`],[`formGroupName`,`btnRadioGroup`],[`aria-label`,`Basic radio toggle button group`,`role`,`group`],[`formControlName`,`radio1`,`id`,`radio1`,`type`,`radio`,`value`,`Radio1`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`for`,`radio1`,`variant`,`ghost`,3,`click`],[`formControlName`,`radio1`,`id`,`radio2`,`type`,`radio`,`value`,`Radio2`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`for`,`radio2`,`variant`,`ghost`,3,`click`],[`formControlName`,`radio1`,`id`,`radio3`,`type`,`radio`,`value`,`Radio3`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`for`,`radio3`,`variant`,`ghost`,3,`click`],[`cButton`,``,`cFormCheckLabel`,``,`variant`,`outline`,3,`click`],[`formControlName`,`radio1`,`id`,`radio1o`,`type`,`radio`,`value`,`Radio1`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`color`,`danger`,`for`,`radio1o`,`variant`,`outline`,3,`click`],[`formControlName`,`radio1`,`id`,`radio2o`,`type`,`radio`,`value`,`Radio2`,1,`btn-check`],[`cButton`,``,`cFormCheckLabel`,``,`color`,`success`,`for`,`radio2o`,`variant`,`outline`,3,`click`],[`formControlName`,`radio1`,`id`,`radio3o`,`type`,`radio`,`value`,`Radio3`,1,`btn-check`],[`cButton`,``,`color`,`secondary`,`for`,`radio3o`,`variant`,`outline`,3,`click`]],template:function(d,r){d&1&&(ji(0,`c-row`),TC(1,`
  `),Lh(2,`app-docs-components`,0),TC(3,`
  `),ji(4,`form`,1),TC(5,`
    `),ji(6,`c-col`,2),TC(7,`
      `),ji(8,`c-card`,3),TC(9,`
        `),ji(10,`c-card-header`),TC(11,`
          `),ji(12,`strong`),TC(13,`Angular Checkbox`),fl(),TC(14,`
        `),fl(),TC(15,`
        `),ji(16,`c-card-body`),TC(17,`
          `),ji(18,`app-docs-example`,4),TC(19,`
            `),ji(20,`div`,5),TC(21,`
              `),ji(22,`c-form-check`),TC(23,`
                `),Lh(24,`input`,6),HI(),TC(25,`
                `),ji(26,`label`,7),TC(27,`Default checkbox`),fl(),TC(28,`
              `),fl(),TC(29,`
              `),ji(30,`c-form-check`),TC(31,`
                `),Lh(32,`input`,8),HI(),TC(33,`
                `),ji(34,`label`,9),TC(35,`Checked checkbox`),fl(),TC(36,`
              `),fl(),TC(37,`
            `),fl(),TC(38,`
          `),fl(),TC(39,`
        `),fl(),TC(40,`
      `),fl(),TC(41,`
    `),fl(),TC(42,`
    `),ji(43,`c-col`,2),TC(44,`
      `),ji(45,`c-card`,3),TC(46,`
        `),ji(47,`c-card-header`),TC(48,`
          `),ji(49,`strong`),TC(50,`Angular Checkbox`),fl(),TC(51,` `),ji(52,`small`),TC(53,`Disabled`),fl(),TC(54,`
        `),fl(),TC(55,`
        `),ji(56,`c-card-body`),TC(57,`
          `),ji(58,`p`,10),TC(59,`
            Add the `),ji(60,`code`),TC(61,`disabled`),fl(),TC(62,` attribute and the associated `),ji(63,`code`),TC(64,`<label>`),fl(),TC(65,`s
            are automatically styled to match with a lighter color to help indicate the
            input's state.
          `),fl(),TC(66,`
          `),ji(67,`app-docs-example`,11),TC(68,`
            `),ji(69,`div`,12),TC(70,`
              `),ji(71,`c-form-check`),TC(72,`
                `),Lh(73,`input`,13),HI(),TC(74,`
                `),ji(75,`label`,14),TC(76,`Disabled checkbox`),fl(),TC(77,`
              `),fl(),TC(78,`
              `),ji(79,`c-form-check`),TC(80,`
                `),Lh(81,`input`,15),HI(),TC(82,`
                `),ji(83,`label`,16),TC(84,`Disabled checked checkbox`),fl(),TC(85,`
              `),fl(),TC(86,`
            `),fl(),TC(87,`
          `),fl(),TC(88,`
        `),fl(),TC(89,`
      `),fl(),TC(90,`
    `),fl(),TC(91,`
    `),ji(92,`c-col`,2),TC(93,`
      `),ji(94,`c-card`,3),TC(95,`
        `),ji(96,`c-card-header`),TC(97,`
          `),ji(98,`strong`),TC(99,`Angular Radio`),fl(),TC(100,`
        `),fl(),TC(101,`
        `),ji(102,`c-card-body`),TC(103,`
          `),ji(104,`app-docs-example`,17),TC(105,`
            `),ji(106,`div`,18),TC(107,`
              `),ji(108,`c-form-check`),TC(109,`
                `),Lh(110,`input`,19),HI(),TC(111,`
                `),ji(112,`label`,20),TC(113,`Default radio`),fl(),TC(114,`
              `),fl(),TC(115,`
              `),ji(116,`c-form-check`),TC(117,`
                `),Lh(118,`input`,21),HI(),TC(119,`
                `),ji(120,`label`,20),TC(121,`Checked radio`),fl(),TC(122,`
              `),fl(),TC(123,`
            `),fl(),TC(124,`
          `),fl(),TC(125,`
        `),fl(),TC(126,`
      `),fl(),TC(127,`
    `),fl(),TC(128,`
    `),ji(129,`c-col`,2),TC(130,`
      `),ji(131,`c-card`,3),TC(132,`
        `),ji(133,`c-card-header`),TC(134,`
          `),ji(135,`strong`),TC(136,`Angular Radio`),fl(),TC(137,` `),ji(138,`small`),TC(139,`Disabled`),fl(),TC(140,`
        `),fl(),TC(141,`
        `),ji(142,`c-card-body`),TC(143,`
          `),ji(144,`p`,10),TC(145,`
            Add the `),ji(146,`code`),TC(147,`disabled`),fl(),TC(148,` attribute and the associated `),ji(149,`code`),TC(150,`<label>`),fl(),TC(151,`s
            are automatically styled to match with a lighter color to help indicate the
            input's state.
          `),fl(),TC(152,`
          `),ji(153,`app-docs-example`,22),TC(154,`
            `),ji(155,`div`,23),TC(156,`
              `),ji(157,`c-form-check`),TC(158,`
                `),Lh(159,`input`,19),HI(),TC(160,`
                `),ji(161,`label`,20),TC(162,`Default radio`),fl(),TC(163,`
              `),fl(),TC(164,`
              `),ji(165,`c-form-check`),TC(166,`
                `),Lh(167,`input`,21),HI(),TC(168,`
                `),ji(169,`label`,20),TC(170,`Checked radio`),fl(),TC(171,`
              `),fl(),TC(172,`
            `),fl(),TC(173,`
          `),fl(),TC(174,`
        `),fl(),TC(175,`
      `),fl(),TC(176,`
    `),fl(),TC(177,`
    `),ji(178,`c-col`,2),TC(179,`
      `),ji(180,`c-card`,3),TC(181,`
        `),ji(182,`c-card-header`),TC(183,`
          `),ji(184,`strong`),TC(185,`Angular Switches`),fl(),TC(186,`
        `),fl(),TC(187,`
        `),ji(188,`c-card-body`),TC(189,`
          `),ji(190,`p`,10),TC(191,`
            A switch has the markup of a custom checkbox but uses the `),ji(192,`code`),TC(193,`switch`),fl(),TC(194,` boolean
            properly to render a toggle switch. Switches also support the `),ji(195,`code`),TC(196,`disabled`),fl(),TC(197,`
            attribute.
          `),fl(),TC(198,`
          `),ji(199,`app-docs-example`,24),TC(200,`
            `),ji(201,`c-form-check`,25),TC(202,`
              `),Lh(203,`input`,26),TC(204,`
              `),ji(205,`label`,20),TC(206,`Default switch checkbox input`),fl(),TC(207,`
            `),fl(),TC(208,`
            `),ji(209,`c-form-check`,25),TC(210,`
              `),Lh(211,`input`,27),TC(212,`
              `),ji(213,`label`,20),TC(214,`Checked switch checkbox input`),fl(),TC(215,`
            `),fl(),TC(216,`
            `),ji(217,`c-form-check`,25),TC(218,`
              `),Lh(219,`input`,28),TC(220,`
              `),ji(221,`label`,20),TC(222,`Default switch checkbox input`),fl(),TC(223,`
            `),fl(),TC(224,`
            `),ji(225,`c-form-check`,25),TC(226,`
              `),Lh(227,`input`,29),TC(228,`
              `),ji(229,`label`,20),TC(230,`Checked switch checkbox input`),fl(),TC(231,`
            `),fl(),TC(232,`
          `),fl(),TC(233,`
        `),fl(),TC(234,`
      `),fl(),TC(235,`
    `),fl(),TC(236,`
    `),ji(237,`c-col`,2),TC(238,`
      `),ji(239,`c-card`,3),TC(240,`
        `),ji(241,`c-card-header`),TC(242,`
          `),ji(243,`strong`),TC(244,`Angular Switches`),fl(),TC(245,` `),ji(246,`small`),TC(247,`Sizes`),fl(),TC(248,`
        `),fl(),TC(249,`
        `),ji(250,`c-card-body`),TC(251,`
          `),ji(252,`app-docs-example`,30),TC(253,`
            `),ji(254,`c-form-check`,25),TC(255,`
              `),Lh(256,`input`,26),TC(257,`
              `),ji(258,`label`,20),TC(259,`Default switch checkbox input`),fl(),TC(260,`
            `),fl(),TC(261,`
            `),ji(262,`c-form-check`,31),TC(263,`
              `),Lh(264,`input`,26),TC(265,`
              `),ji(266,`label`,20),TC(267,`Large switch checkbox input`),fl(),TC(268,`
            `),fl(),TC(269,`
            `),ji(270,`c-form-check`,32),TC(271,`
              `),Lh(272,`input`,27),TC(273,`
              `),ji(274,`label`,20),TC(275,`Extra large switch checkbox input`),fl(),TC(276,`
            `),fl(),TC(277,`
          `),fl(),TC(278,`
        `),fl(),TC(279,`
      `),fl(),TC(280,`
    `),fl(),TC(281,`
    `),ji(282,`c-col`,2),TC(283,`
      `),ji(284,`c-card`,3),TC(285,`
        `),ji(286,`c-card-header`),TC(287,`
          `),ji(288,`strong`),TC(289,`Angular Checks and Radios`),fl(),TC(290,` `),ji(291,`small`),TC(292,`Default layout (stacked)`),fl(),TC(293,`
        `),fl(),TC(294,`
        `),ji(295,`c-card-body`),TC(296,`
          `),ji(297,`p`,10),TC(298,`
            By default, any number of checkboxes and radios that are immediate sibling will be
            vertically stacked and appropriately spaced.
          `),fl(),TC(299,`
          `),ji(300,`app-docs-example`,33),TC(301,`
            `),ji(302,`c-form-check`),TC(303,`
              `),Lh(304,`input`,34),TC(305,`
              `),ji(306,`label`,35),TC(307,`Default checkbox`),fl(),TC(308,`
            `),fl(),TC(309,`
            `),ji(310,`c-form-check`),TC(311,`
              `),Lh(312,`input`,36),TC(313,`
              `),ji(314,`label`,37),TC(315,`Disabled checkbox`),fl(),TC(316,`
            `),fl(),TC(317,`
          `),fl(),TC(318,`
          `),ji(319,`app-docs-example`,33),TC(320,`
            `),ji(321,`c-form-check`),TC(322,`
              `),Lh(323,`input`,38),TC(324,`
              `),ji(325,`label`,39),TC(326,`Default radio`),fl(),TC(327,`
            `),fl(),TC(328,`
            `),ji(329,`c-form-check`),TC(330,`
              `),Lh(331,`input`,40),TC(332,`
              `),ji(333,`label`,41),TC(334,`Second radio`),fl(),TC(335,`
            `),fl(),TC(336,`
            `),ji(337,`c-form-check`),TC(338,`
              `),Lh(339,`input`,42),TC(340,`
              `),ji(341,`label`,43),TC(342,`Disabled radio`),fl(),TC(343,`
            `),fl(),TC(344,`
          `),fl(),TC(345,`
        `),fl(),TC(346,`
      `),fl(),TC(347,`
    `),fl(),TC(348,`
    `),ji(349,`c-col`,2),TC(350,`
      `),ji(351,`c-card`,3),TC(352,`
        `),ji(353,`c-card-header`),TC(354,`
          `),ji(355,`strong`),TC(356,`Angular Checks and Radios`),fl(),TC(357,` `),ji(358,`small`),TC(359,`Inline`),fl(),TC(360,`
        `),fl(),TC(361,`
        `),ji(362,`c-card-body`),TC(363,`
          `),ji(364,`p`,10),TC(365,`
            Group checkboxes or radios on the same horizontal row by adding `),ji(366,`code`),TC(367,`inline`),fl(),TC(368,`
            boolean property to any `),ji(369,`code`),TC(370,`<c-form-check>`),fl(),TC(371,`.
          `),fl(),TC(372,`
          `),ji(373,`app-docs-example`,44),TC(374,`
            `),ji(375,`c-form-check`,45),TC(376,`
              `),Lh(377,`input`,46),TC(378,`
              `),ji(379,`label`,47),TC(380,`1`),fl(),TC(381,`
            `),fl(),TC(382,`
            `),ji(383,`c-form-check`,48),TC(384,`
              `),Lh(385,`input`,49),TC(386,`
              `),ji(387,`label`,50),TC(388,`2`),fl(),TC(389,`
            `),fl(),TC(390,`
            `),ji(391,`c-form-check`,48),TC(392,`
              `),Lh(393,`input`,51),TC(394,`
              `),ji(395,`label`,52),TC(396,`3 (disabled)`),fl(),TC(397,`
            `),fl(),TC(398,`

          `),fl(),TC(399,`
          `),ji(400,`app-docs-example`,44),TC(401,`
            `),ji(402,`c-form-check`,48),TC(403,`
              `),Lh(404,`input`,53),TC(405,`
              `),ji(406,`label`,54),TC(407,`1`),fl(),TC(408,`
            `),fl(),TC(409,`
            `),ji(410,`c-form-check`,48),TC(411,`
              `),Lh(412,`input`,55),TC(413,`
              `),ji(414,`label`,56),TC(415,`2`),fl(),TC(416,`
            `),fl(),TC(417,`
            `),ji(418,`c-form-check`,48),TC(419,`
              `),Lh(420,`input`,57),TC(421,`
              `),ji(422,`label`,58),TC(423,`3 (disabled)`),fl(),TC(424,`
            `),fl(),TC(425,`
          `),fl(),TC(426,`
        `),fl(),TC(427,`
      `),fl(),TC(428,`
    `),fl(),TC(429,`
    `),ji(430,`c-col`,2),TC(431,`
      `),ji(432,`c-card`,3),TC(433,`
        `),ji(434,`c-card-header`),TC(435,`
          `),ji(436,`strong`),TC(437,`Angular Checks and Radios`),fl(),TC(438,` `),ji(439,`small`),TC(440,`Without labels`),fl(),TC(441,`
        `),fl(),TC(442,`
        `),ji(443,`c-card-body`),TC(444,`
          `),ji(445,`p`,10),TC(446,`
            Remember to still provide some form of accessible name for assistive technologies (for
            instance, using `),ji(447,`code`),TC(448,`aria-label`),fl(),TC(449,`).
          `),fl(),TC(450,`
          `),ji(451,`app-docs-example`,59),TC(452,`
            `),ji(453,`div`),TC(454,`
              `),Lh(455,`input`,60),TC(456,`
            `),fl(),TC(457,`
            `),ji(458,`div`),TC(459,`
              `),Lh(460,`input`,61),TC(461,`
            `),fl(),TC(462,`
          `),fl(),TC(463,`
        `),fl(),TC(464,`
      `),fl(),TC(465,`
    `),fl(),TC(466,`
    `),ji(467,`c-col`,2),TC(468,`
      `),ji(469,`c-card`,3),TC(470,`
        `),ji(471,`c-card-header`),TC(472,`
          `),ji(473,`strong`),TC(474,`Toggle buttons`),fl(),TC(475,`
        `),fl(),TC(476,`
        `),ji(477,`c-card-body`),TC(478,`
          `),ji(479,`p`,10),TC(480,`
            Create button-like checkboxes and radio buttons by using `),ji(481,`code`),TC(482,`button`),fl(),TC(483,` boolean
            property on the `),ji(484,`code`),TC(485,`<CFormCheck>`),fl(),TC(486,` component. These toggle buttons can
            further be grouped in a button group if needed.
          `),fl(),TC(487,`
          `),ji(488,`app-docs-example`,62),TC(489,`
            `),ji(490,`div`,63),TC(491,`
              `),ji(492,`c-button-group`,64),TC(493,`
                `),Lh(494,`input`,65),HI(),TC(495,`
                `),ji(496,`label`,66),qh(`click`,function(){return r.setCheckBoxValue(`checkbox1`)}),TC(497,`Checkbox 1`),fl(),TC(498,`

                `),Lh(499,`input`,67),HI(),TC(500,`
                `),ji(501,`label`,66),qh(`click`,function(){return r.setCheckBoxValue(`checkbox2`)}),TC(502,`Checkbox 2`),fl(),TC(503,`

                `),Lh(504,`input`,68),HI(),TC(505,`
                `),ji(506,`label`,66),qh(`click`,function(){return r.setCheckBoxValue(`checkbox3`)}),TC(507,`Disabled 3`),fl(),TC(508,`
              `),fl(),TC(509,`
            `),fl(),TC(510,`
          `),fl(),TC(511,`
          `),ji(512,`app-docs-example`),TC(513,`
            `),ji(514,`div`,69),TC(515,`
              `),ji(516,`c-button-group`,70),TC(517,`
                `),Lh(518,`input`,71),HI(),TC(519,`
                `),ji(520,`label`,72),qh(`click`,function(){return r.setRadioValue(`Radio1`)}),TC(521,`Radio 1`),fl(),TC(522,`

                `),Lh(523,`input`,73),HI(),TC(524,`
                `),ji(525,`label`,74),qh(`click`,function(){return r.setRadioValue(`Radio2`)}),TC(526,`Radio 2`),fl(),TC(527,`
                `),Lh(528,`input`,75),HI(),TC(529,`
                `),ji(530,`label`,76),qh(`click`,function(){return r.setRadioValue(`Radio3`)}),TC(531,`Radio3`),fl(),TC(532,`
              `),fl(),TC(533,`
            `),fl(),TC(534,`
          `),fl(),TC(535,`
          `),ji(536,`h5`),TC(537,`Outlined styles`),fl(),TC(538,`
          `),ji(539,`p`,10),TC(540,`
            Different variants of button, such at the various outlined styles, are supported.
          `),fl(),TC(541,`
          `),ji(542,`app-docs-example`,62),TC(543,`
            `),ji(544,`div`,63),TC(545,`
              `),ji(546,`c-button-group`,64),TC(547,`
                `),Lh(548,`input`,65),HI(),TC(549,`
                `),ji(550,`label`,77),qh(`click`,function(){return r.setCheckBoxValue(`checkbox1`)}),TC(551,`Checkbox 1`),fl(),TC(552,`

                `),Lh(553,`input`,67),HI(),TC(554,`
                `),ji(555,`label`,77),qh(`click`,function(){return r.setCheckBoxValue(`checkbox2`)}),TC(556,`Checkbox 2`),fl(),TC(557,`

                `),Lh(558,`input`,68),HI(),TC(559,`
                `),ji(560,`label`,77),qh(`click`,function(){return r.setCheckBoxValue(`checkbox3`)}),TC(561,`Disabled
                  3`),fl(),TC(562,`
              `),fl(),TC(563,`
            `),fl(),TC(564,`
          `),fl(),TC(565,`
          `),ji(566,`app-docs-example`),TC(567,`
            `),ji(568,`div`,69),TC(569,`
              `),ji(570,`c-button-group`,70),TC(571,`
                `),Lh(572,`input`,78),HI(),TC(573,`
                `),ji(574,`label`,79),qh(`click`,function(){return r.setRadioValue(`Radio1`)}),TC(575,`Radio 1`),fl(),TC(576,`

                `),Lh(577,`input`,80),HI(),TC(578,`
                `),ji(579,`label`,81),qh(`click`,function(){return r.setRadioValue(`Radio2`)}),TC(580,`Radio 2`),fl(),TC(581,`

                `),Lh(582,`input`,82),HI(),TC(583,`
                `),ji(584,`label`,83),qh(`click`,function(){return r.setRadioValue(`Radio3`)}),TC(585,`Radio3`),fl(),TC(586,`
              `),fl(),TC(587,`
            `),fl(),TC(588,`
          `),fl(),TC(589,`
        `),fl(),TC(590,`
      `),fl(),TC(591,`
    `),fl(),TC(592,`
  `),fl(),TC(593,`
`),fl()),d&2&&(XE(4),Oh(`formGroup`,r.formGroup),XE(20),$I(),XE(8),Oh(`checked`,!0),$I(),XE(41),$I(),XE(8),$I(),XE(29),$I(),XE(8),$I(),XE(41),$I(),XE(8),$I(),XE(34),Oh(`switch`,!0),XE(8),Oh(`switch`,!0),XE(8),Oh(`switch`,!0),XE(8),Oh(`switch`,!0),XE(29),Oh(`switch`,!0),XE(121),Oh(`inline`,!0),XE(119),$I(),XE(5),$I(),XE(5),$I(),XE(14),$I(),XE(5),$I(),XE(5),kh(`disabled`,!0),$I(),XE(20),$I(),XE(5),$I(),XE(5),$I(),XE(14),$I(),XE(5),$I(),XE(5),kh(`disabled`,!0),$I())},dependencies:[K1,ei,Xn,Ye,Nt,pn,Wn,qn,Vn,yn,Vt,L1,vy,Qi,uy,Ji,k,B1,U1,sp,y1,oy,c],encapsulation:2})}};export{H as ChecksRadiosComponent};