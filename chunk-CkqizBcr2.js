import{At as TT,Gr as ul,L as ID,Ln as gl,Un as hw,Xn as kE,_ as DT,_t as Pi,fn as b,ft as Oh,i as AE,on as _h,p as Ch,t as $I,ti as wT,zr as tg}from"./chunk-BSgQlS93.js";import{A as K0,H as O1,It as ey,W as P1,X as Qi,dt as X1,h as F1,k as Ji,ln as p1,mt as Yf,pt as Y1,st as V1,xn as sy}from"./main-37K4GJAM.js";import{i as k}from"./chunk-FodikvMx.js";import{t as c}from"./chunk-5BukuvC5.js";import{S as qn,T as yn,_ as ei,d as Wn,f as Xn,l as Vn,o as Nt,r as Jn}from"./chunk-CW1XgXNn.js";function W(r,l){if(r&1&&(hw(0,`
              `),Pi(1,`li`,31),hw(2),ul(),hw(3,`
            `)),r&2){let a=l.$implicit;$I(2),tg(a)}}function q(r,l){if(r&1&&(hw(0,`
              `),Pi(1,`li`,36),hw(2),ul(),hw(3,`
            `)),r&2){let a=l.$implicit,o=l.$index;$I(),Ch(`active`,o===0),$I(),tg(a)}}function O(r,l){if(r&1&&(hw(0,`
              `),Pi(1,`button`,37),hw(2),ul(),hw(3,`
            `)),r&2){let a=l.$implicit,o=l.$index;$I(),Ch(`disabled`,o===0),$I(),tg(a)}}function J(r,l){if(r&1&&(hw(0,`
              `),Pi(1,`a`,38),hw(2),ul(),hw(3,`
            `)),r&2){let a=l.$implicit,o=l.$index,u=l.$count;$I(),Ch(`active`,o===0)(`disabled`,o===u-1),$I(),tg(a)}}function K(r,l){if(r&1&&(hw(0,`
              `),Pi(1,`li`,31),hw(2),ul(),hw(3,`
            `)),r&2){let a=l.$implicit;$I(2),tg(a)}}function Q(r,l){if(r&1&&(hw(0,`
            `),Pi(1,`ul`,39),hw(2,`
              `),Pi(3,`li`,31),hw(4,`Cras justo odio`),ul(),hw(5,`
              `),Pi(6,`li`,31),hw(7,`Dapibus ac facilisis in`),ul(),hw(8,`
              `),Pi(9,`li`,31),hw(10,`Morbi leo risus`),ul(),hw(11,`
            `),ul(),hw(12,`
          `)),r&2){let a=l.$implicit;$I(),Ch(`horizontal`,a)}}function X(r,l){if(r&1&&(hw(0,`
              `),Pi(1,`li`,40),hw(2),ul(),hw(3,`
            `)),r&2){let a=l.$implicit;$I(),Ch(`color`,a),$I(),gl(`
                A simple `,a,` list group item
              `)}}function Y(r,l){if(r&1&&(hw(0,`
              `),Pi(1,`a`,41),hw(2),ul(),hw(3,`
            `)),r&2){let a=l.$implicit;$I(),Ch(`color`,a),$I(),gl(`
                A simple `,a,` list group item
              `)}}function Z(r,l){if(r&1&&(hw(0,`
              `),Pi(1,`button`,42),hw(2),Pi(3,`c-badge`,43),hw(4),ul(),hw(5,`
              `),ul(),hw(6,`
            `)),r&2){let a=l.$implicit,o=l.$index,u=l.$count;$I(),Ch(`disabled`,o===u-1),$I(),gl(`
                `,a,`
                `),$I(),Ch(`color`,o===u-1?`secondary`:`primary`),$I(),tg(o+1)}}var R=class r{constructor(){this.formBuilder=b(Jn);this.breakpoints=[!0,`sm`,`md`,`lg`,`xl`,`xxl`];this.colors=[`primary`,`secondary`,`success`,`danger`,`warning`,`info`,`light`,`dark`];this.checkBoxes=this.formBuilder.group({one:!1,two:!1,three:!0,four:!0,five:{value:!1,disabled:!0}});this.sampleList=[`Cras justo odio`,`Dapibus ac facilisis in`,`Morbi leo risus`,`Porta ac consectetur ac`,`Vestibulum at eros`]}setValue(l){let a=this.checkBoxes.get(l)?.value,o=this.checkBoxes.getRawValue();o[l]=!a,this.checkBoxes.setValue(o)}logValue(){console.log(this.checkBoxes.value),this.checkBoxes.reset()}getValue(l){return this.checkBoxes.get(l)}static{this.ɵfac=function(a){return new(a||r)}}static{this.ɵcmp=ID({type:r,selectors:[[`app-list-groups`]],decls:477,vars:3,consts:[[`xs`,`12`],[`href`,`components/list-group`,`title`,`List Group`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/list-group`],[`cListGroup`,``],[`href`,`components/list-group/#active-items`],[`href`,`components/list-group/#disabled-items`],[`href`,`components/list-group/#links-and-buttons`],[`href`,`components/list-group/#flush`],[`cListGroup`,``,`flush`,``],[`href`,`components/list-group/#contextual-classes`],[`cListGroup`,``,1,`mb-3`],[1,`text-body-secondary`,`small`,`mt-1`],[`href`,`components/list-group/#with-badges`],[`href`,`https://coreui.io/docs/utilities/flex/`],[`href`,`components/list-group/#custom-content`],[`cListGroupItem`,``,`href`,``,3,`active`],[1,`d-flex`,`w-100`,`justify-content-between`],[1,`mb-1`],[`cListGroupItem`,``,`href`,``],[1,`text-body-secondary`],[`href`,`components/list-group/#checkboxes-and-radios`],[`cForm`,``,3,`ngSubmit`,`formGroup`],[`cListGroup`,``,3,`flush`],[`cListGroupItem`,``,`type`,`button`,3,`click`],[`cFormCheckInput`,``,`formControlName`,`one`,`type`,`checkbox`],[`cFormCheckLabel`,``],[`cListGroupItem`,``,2,`cursor`,`pointer`],[`cFormCheckInput`,``,`formControlName`,`two`,`type`,`checkbox`],[1,`ms-1`],[`cListGroupItem`,``],[`cFormCheckInput`,``,`formControlName`,`three`,`type`,`checkbox`],[`cFormCheckInput`,``,`formControlName`,`four`,`type`,`checkbox`],[`cFormCheckInput`,``,`formControlName`,`five`,`type`,`checkbox`],[`cButton`,``,`type`,`submit`,1,`mt-3`],[`cListGroupItem`,``,3,`active`],[`cListGroupItem`,``,3,`disabled`],[`href`,``,`cListGroupItem`,``,3,`active`,`disabled`],[`cListGroup`,``,1,`mb-2`,3,`horizontal`],[`cListGroupItem`,``,3,`color`],[`cListGroupItem`,``,`href`,``,3,`color`],[`cListGroupItem`,``,1,`d-flex`,`justify-content-between`,`align-items-center`,3,`disabled`],[`shape`,`rounded-pill`,3,`color`]],template:function(a,o){a&1&&(Pi(0,`c-row`),hw(1,`
  `),Pi(2,`c-col`,0),hw(3,`
    `),_h(4,`app-docs-components`,1),hw(5,`
    `),Pi(6,`c-card`,2),hw(7,`
      `),Pi(8,`c-card-header`),hw(9,`
        `),Pi(10,`strong`),hw(11,`Angular List Group`),ul(),hw(12,` `),Pi(13,`small`),hw(14,`Basic example`),ul(),hw(15,`
      `),ul(),hw(16,`
      `),Pi(17,`c-card-body`),hw(18,`
        `),Pi(19,`p`,3),hw(20,`
          The default list group is an unordered list with items and the proper
          CSS classes. Build upon it with the options that follow, or with your
          CSS as required.
        `),ul(),hw(21,`
        `),Pi(22,`app-docs-example`,4),hw(23,`
          `),Pi(24,`ul`,5),hw(25,`
            `),TT(26,W,4,1,null,null,DT),ul(),hw(28,`
        `),ul(),hw(29,`
      `),ul(),hw(30,`
    `),ul(),hw(31,`
  `),ul(),hw(32,`
  `),Pi(33,`c-col`,0),hw(34,`
    `),Pi(35,`c-card`,2),hw(36,`
      `),Pi(37,`c-card-header`),hw(38,`
        `),Pi(39,`strong`),hw(40,`Angular List Group`),ul(),hw(41,` `),Pi(42,`small`),hw(43,`Active items`),ul(),hw(44,`
      `),ul(),hw(45,`
      `),Pi(46,`c-card-body`),hw(47,`
        `),Pi(48,`p`,3),hw(49,`
          Add `),Pi(50,`code`),hw(51,`active`),ul(),hw(52,` boolean property to a
          `),Pi(53,`code`),hw(54,`cListGroupItem`),ul(),hw(55,` to show the current active selection.
        `),ul(),hw(56,`
        `),Pi(57,`app-docs-example`,6),hw(58,`
          `),Pi(59,`ul`,5),hw(60,`
            `),TT(61,q,4,2,null,null,DT),ul(),hw(63,`
        `),ul(),hw(64,`
      `),ul(),hw(65,`
    `),ul(),hw(66,`
  `),ul(),hw(67,`
  `),Pi(68,`c-col`,0),hw(69,`
    `),Pi(70,`c-card`,2),hw(71,`
      `),Pi(72,`c-card-header`),hw(73,`
        `),Pi(74,`strong`),hw(75,`Angular List Group`),ul(),hw(76,` `),Pi(77,`small`),hw(78,`Disabled items`),ul(),hw(79,`
      `),ul(),hw(80,`
      `),Pi(81,`c-card-body`),hw(82,`
        `),Pi(83,`p`,3),hw(84,`
          Add `),Pi(85,`code`),hw(86,`disabled`),ul(),hw(87,` boolean property to a
          `),Pi(88,`code`),hw(89,`cListGroupItem`),ul(),hw(90,` to make it appear disabled.
        `),ul(),hw(91,`
        `),Pi(92,`app-docs-example`,7),hw(93,`
          `),Pi(94,`div`,5),hw(95,`
            `),TT(96,O,4,2,null,null,DT),ul(),hw(98,`
        `),ul(),hw(99,`
      `),ul(),hw(100,`
    `),ul(),hw(101,`
  `),ul(),hw(102,`
  `),Pi(103,`c-col`,0),hw(104,`
    `),Pi(105,`c-card`,2),hw(106,`
      `),Pi(107,`c-card-header`),hw(108,`
        `),Pi(109,`strong`),hw(110,`Angular List Group`),ul(),hw(111,` `),Pi(112,`small`),hw(113,`Links and buttons`),ul(),hw(114,`
      `),ul(),hw(115,`
      `),Pi(116,`c-card-body`),hw(117,`
        `),Pi(118,`p`,3),hw(119,`
          Use `),Pi(120,`code`),hw(121,`<a>`),ul(),hw(122,`s or `),Pi(123,`code`),hw(124,`<button>`),ul(),hw(125,`s to create
          `),Pi(126,`em`),hw(127,`actionable`),ul(),hw(128,` list group items with hover, disabled, and active
          states with `),Pi(129,`code`),hw(130,`a`),ul(),hw(131,` or `),Pi(132,`code`),hw(133,`button`),ul(),hw(134,`. We
          separate these pseudo-classes to ensure list groups made of
          non-interactive elements (like `),Pi(135,`code`),hw(136,`<li>`),ul(),hw(137,` or
          `),Pi(138,`code`),hw(139,`<div>`),ul(),hw(140,`) don't provide a click or tap affordance.
        `),ul(),hw(141,`
        `),Pi(142,`app-docs-example`,8),hw(143,`
          `),Pi(144,`div`,5),hw(145,`
            `),TT(146,J,4,3,null,null,DT),ul(),hw(148,`
        `),ul(),hw(149,`
      `),ul(),hw(150,`
    `),ul(),hw(151,`
  `),ul(),hw(152,`
  `),Pi(153,`c-col`,0),hw(154,`
    `),Pi(155,`c-card`,2),hw(156,`
      `),Pi(157,`c-card-header`),hw(158,`
        `),Pi(159,`strong`),hw(160,`Angular List Group`),ul(),hw(161,` `),Pi(162,`small`),hw(163,`Flush`),ul(),hw(164,`
      `),ul(),hw(165,`
      `),Pi(166,`c-card-body`),hw(167,`
        `),Pi(168,`p`,3),hw(169,`
          Add `),Pi(170,`code`),hw(171,`flush`),ul(),hw(172,` boolean property to remove some borders and
          rounded corners to render list group items edge-to-edge in a parent
          container (e.g., cards).
        `),ul(),hw(173,`
        `),Pi(174,`app-docs-example`,9),hw(175,`
          `),Pi(176,`ul`,10),hw(177,`
            `),TT(178,K,4,1,null,null,DT),ul(),hw(180,`
        `),ul(),hw(181,`
      `),ul(),hw(182,`
    `),ul(),hw(183,`
  `),ul(),hw(184,`
  `),Pi(185,`c-col`,0),hw(186,`
    `),Pi(187,`c-card`,2),hw(188,`
      `),Pi(189,`c-card-header`),hw(190,`
        `),Pi(191,`strong`),hw(192,`Angular List Group`),ul(),hw(193,` `),Pi(194,`small`),hw(195,`Horizontal`),ul(),hw(196,`
      `),ul(),hw(197,`
      `),Pi(198,`c-card-body`),hw(199,`
        `),Pi(200,`p`,3),hw(201,`
          Add `),Pi(202,`code`),hw(203,`layout="horizontal"`),ul(),hw(204,` to change the layout of
          list group items from vertical to horizontal across all breakpoints. `),_h(205,`br`),hw(206,`
          Alternatively, choose a responsive variant
          `),Pi(207,`code`),hw(208,`[horizontal]="sm | md | lg | xl | xxl"`),ul(),hw(209,`
          to make a list group horizontal starting at that breakpoint's
          `),Pi(210,`code`),hw(211,`min-width`),ul(),hw(212,`. `),_h(213,`br`),hw(214,`
          Currently `),Pi(215,`strong`),hw(216,`horizontal list groups cannot be combined with flush list groups.`),ul(),hw(217,`
        `),ul(),hw(218,`
        `),Pi(219,`app-docs-example`,9),hw(220,`
          `),TT(221,Q,13,1,null,null,DT),ul(),hw(223,`
      `),ul(),hw(224,`
    `),ul(),hw(225,`
  `),ul(),hw(226,`
  `),Pi(227,`c-col`,0),hw(228,`
    `),Pi(229,`c-card`,2),hw(230,`
      `),Pi(231,`c-card-header`),hw(232,`
        `),Pi(233,`strong`),hw(234,`Angular List Group`),ul(),hw(235,` `),Pi(236,`small`),hw(237,`Contextual classes`),ul(),hw(238,`
      `),ul(),hw(239,`
      `),Pi(240,`c-card-body`),hw(241,`
        `),Pi(242,`p`,3),hw(243,`
          Use contextual classes to style list items with a stateful background
          and color.
        `),ul(),hw(244,`
        `),Pi(245,`app-docs-example`,11),hw(246,`
          `),Pi(247,`ul`,12),hw(248,`
            `),TT(249,X,4,2,null,null,DT),ul(),hw(251,`
        `),ul(),hw(252,`
        `),Pi(253,`p`,13),hw(254,`
          Contextual classes also work with `),Pi(255,`code`),hw(256,`<a>`),ul(),hw(257,` or
          `),Pi(258,`code`),hw(259,`<button>`),ul(),hw(260,`. Note the addition of the hover styles
          here not present in the previous example. Also supported is the
          `),Pi(261,`code`),hw(262,`active`),ul(),hw(263,` state; apply it to indicate an active selection on
          a contextual list group item.
        `),ul(),hw(264,`
        `),Pi(265,`app-docs-example`,11),hw(266,`
          `),Pi(267,`div`,5),hw(268,`
            `),TT(269,Y,4,2,null,null,DT),ul(),hw(271,`
        `),ul(),hw(272,`
      `),ul(),hw(273,`
    `),ul(),hw(274,`
  `),ul(),hw(275,`
  `),Pi(276,`c-col`,0),hw(277,`
    `),Pi(278,`c-card`,2),hw(279,`
      `),Pi(280,`c-card-header`),hw(281,`
        `),Pi(282,`strong`),hw(283,`Angular List Group`),ul(),hw(284,` `),Pi(285,`small`),hw(286,`With badges`),ul(),hw(287,`
      `),ul(),hw(288,`
      `),Pi(289,`c-card-body`),hw(290,`
        `),Pi(291,`p`,3),hw(292,`
          Add badges to any list group item to show unread counts, activity, and
          more.
        `),ul(),hw(293,`
        `),Pi(294,`app-docs-example`,14),hw(295,`
          `),Pi(296,`div`,5),hw(297,`
            `),TT(298,Z,7,4,null,null,DT),ul(),hw(300,`
        `),ul(),hw(301,`
      `),ul(),hw(302,`
    `),ul(),hw(303,`
  `),ul(),hw(304,`
  `),Pi(305,`c-col`,0),hw(306,`
    `),Pi(307,`c-card`,2),hw(308,`
      `),Pi(309,`c-card-header`),hw(310,`
        `),Pi(311,`strong`),hw(312,`Angular List Group`),ul(),hw(313,` `),Pi(314,`small`),hw(315,`Custom content`),ul(),hw(316,`
      `),ul(),hw(317,`
      `),Pi(318,`c-card-body`),hw(319,`
        `),Pi(320,`p`,3),hw(321,`
          Add nearly any HTML within, even for linked list groups like the one
          below, with the help of
          `),Pi(322,`a`,15),hw(323,`flexbox utilities`),ul(),hw(324,`.
        `),ul(),hw(325,`
        `),Pi(326,`app-docs-example`,16),hw(327,`
          `),Pi(328,`div`,5),hw(329,`
            `),Pi(330,`a`,17),hw(331,`
              `),Pi(332,`div`,18),hw(333,`
                `),Pi(334,`h5`,19),hw(335,`List group item heading`),ul(),hw(336,`
                `),Pi(337,`small`),hw(338,`3 days ago`),ul(),hw(339,`
              `),ul(),hw(340,`
              `),Pi(341,`p`,19),hw(342,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),ul(),hw(343,`
              `),Pi(344,`small`),hw(345,`Donec id elit non mi porta.`),ul(),hw(346,`
            `),ul(),hw(347,`
            `),Pi(348,`a`,20),hw(349,`
              `),Pi(350,`div`,18),hw(351,`
                `),Pi(352,`h5`,19),hw(353,`List group item heading`),ul(),hw(354,`
                `),Pi(355,`small`,21),hw(356,`3 days ago`),ul(),hw(357,`
              `),ul(),hw(358,`
              `),Pi(359,`p`,19),hw(360,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),ul(),hw(361,`
              `),Pi(362,`small`,21),hw(363,`Donec id elit non mi porta.`),ul(),hw(364,`
            `),ul(),hw(365,`
            `),Pi(366,`a`,20),hw(367,`
              `),Pi(368,`div`,18),hw(369,`
                `),Pi(370,`h5`,19),hw(371,`List group item heading`),ul(),hw(372,`
                `),Pi(373,`small`,21),hw(374,`3 days ago`),ul(),hw(375,`
              `),ul(),hw(376,`
              `),Pi(377,`p`,19),hw(378,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),ul(),hw(379,`
              `),Pi(380,`small`,21),hw(381,`Donec id elit non mi porta.`),ul(),hw(382,`
            `),ul(),hw(383,`
          `),ul(),hw(384,`
        `),ul(),hw(385,`
      `),ul(),hw(386,`
    `),ul(),hw(387,`
  `),ul(),hw(388,`
  `),Pi(389,`c-col`,0),hw(390,`
    `),Pi(391,`c-card`,2),hw(392,`
      `),Pi(393,`c-card-header`),hw(394,`
        `),Pi(395,`strong`),hw(396,`Angular List Group`),ul(),hw(397,` `),Pi(398,`small`),hw(399,`Checkboxes and radios`),ul(),hw(400,`
      `),ul(),hw(401,`
      `),Pi(402,`c-card-body`),hw(403,`
        `),Pi(404,`p`,3),hw(405,`
          Place CoreUI's checkboxes and radios within list group items and
          customize as needed.
        `),ul(),hw(406,`
        `),Pi(407,`app-docs-example`,22),hw(408,`
          `),Pi(409,`form`,23),Oh(`ngSubmit`,function(){return o.logValue()}),hw(410,`
            `),Pi(411,`ul`,24),hw(412,`
              `),Pi(413,`button`,25),Oh(`click`,function(){return o.setValue(`one`)}),hw(414,`
                `),Pi(415,`c-form-check`),hw(416,`
                  `),_h(417,`input`,26),AE(),hw(418,`
                  `),Pi(419,`label`,27),hw(420,`Cras justo odio`),ul(),hw(421,`
                `),ul(),hw(422,`
              `),ul(),hw(423,`
              `),Pi(424,`label`,28),hw(425,`
                `),Pi(426,`c-form-check`),hw(427,`
                  `),_h(428,`input`,29),AE(),hw(429,`
                  `),Pi(430,`span`,30),hw(431,`Dapibus ac facilisis in`),ul(),hw(432,`
                `),ul(),hw(433,`
              `),ul(),hw(434,`
              `),Pi(435,`li`,31),hw(436,`
                `),Pi(437,`c-form-check`),hw(438,`
                  `),_h(439,`input`,32),AE(),hw(440,`
                  `),Pi(441,`label`,27),hw(442,`Morbi leo risus`),ul(),hw(443,`
                `),ul(),hw(444,`
              `),ul(),hw(445,`
              `),Pi(446,`li`,31),hw(447,`
                `),Pi(448,`c-form-check`),hw(449,`
                  `),_h(450,`input`,33),AE(),hw(451,`
                  `),Pi(452,`label`,27),hw(453,`Orta ac consectetur ac`),ul(),hw(454,`
                `),ul(),hw(455,`
              `),ul(),hw(456,`
              `),Pi(457,`li`,31),hw(458,`
                `),Pi(459,`c-form-check`),hw(460,`
                  `),_h(461,`input`,34),AE(),hw(462,`
                  `),Pi(463,`label`,27),hw(464,`Vestibulum at eros`),ul(),hw(465,`
                `),ul(),hw(466,`
              `),ul(),hw(467,`
            `),ul(),hw(468,`
            `),Pi(469,`button`,35),hw(470,`Submit`),ul(),hw(471,`
          `),ul(),hw(472,`
        `),ul(),hw(473,`
      `),ul(),hw(474,`
    `),ul(),hw(475,`
  `),ul(),hw(476,`
`),ul()),a&2&&($I(26),wT(o.sampleList),$I(35),wT(o.sampleList),$I(35),wT(o.sampleList),$I(50),wT(o.sampleList),$I(32),wT(o.sampleList),$I(43),wT(o.breakpoints),$I(28),wT(o.colors),$I(20),wT(o.colors),$I(29),wT(o.sampleList),$I(32),Ch(`active`,!0),$I(79),Ch(`formGroup`,o.checkBoxes),$I(2),Ch(`flush`,!0),$I(6),kE(),$I(11),kE(),$I(11),kE(),$I(11),kE(),$I(11),kE())},dependencies:[V1,sy,Qi,ey,Ji,k,Y1,X1,p1,ei,Xn,Nt,Wn,qn,Vn,yn,O1,F1,P1,Yf,K0,c],encapsulation:2})}};export{R as ListGroupsComponent};