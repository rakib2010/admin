import{D as Ew,Lt as Rh,Mt as QI,Nn as dl,On as cg,_r as ml,c as Bh,d as C,kt as Pi,o as Ah,p as CD,pt as NT,tr as jE,wn as bT,wt as PE,zt as ST}from"./chunk-q4Rs6eDf.js";import{G as Qi,Nt as eN,O as Ji,St as b1,Tn as tN,dt as Y1,hn as py,n as $1,qt as j1,s as B1,wn as sp,xt as ay,zn as yy}from"./main-IYLEVGTX.js";import{i as k}from"./chunk-BQWFyHvh.js";import{t as c}from"./chunk-DJv5g611.js";import{S as qn,T as yn,_ as ei,d as Wn,f as Xn,l as Vn,o as Nt,r as Jn}from"./chunk-BKl8UmvF.js";function W(r,l){if(r&1&&(Ew(0,`
              `),Pi(1,`li`,31),Ew(2),dl(),Ew(3,`
            `)),r&2){let a=l.$implicit;QI(2),cg(a)}}function q(r,l){if(r&1&&(Ew(0,`
              `),Pi(1,`li`,36),Ew(2),dl(),Ew(3,`
            `)),r&2){let a=l.$implicit,o=l.$index;QI(),Ah(`active`,o===0),QI(),cg(a)}}function O(r,l){if(r&1&&(Ew(0,`
              `),Pi(1,`button`,37),Ew(2),dl(),Ew(3,`
            `)),r&2){let a=l.$implicit,o=l.$index;QI(),Ah(`disabled`,o===0),QI(),cg(a)}}function J(r,l){if(r&1&&(Ew(0,`
              `),Pi(1,`a`,38),Ew(2),dl(),Ew(3,`
            `)),r&2){let a=l.$implicit,o=l.$index,u=l.$count;QI(),Ah(`active`,o===0)(`disabled`,o===u-1),QI(),cg(a)}}function K(r,l){if(r&1&&(Ew(0,`
              `),Pi(1,`li`,31),Ew(2),dl(),Ew(3,`
            `)),r&2){let a=l.$implicit;QI(2),cg(a)}}function Q(r,l){if(r&1&&(Ew(0,`
            `),Pi(1,`ul`,39),Ew(2,`
              `),Pi(3,`li`,31),Ew(4,`Cras justo odio`),dl(),Ew(5,`
              `),Pi(6,`li`,31),Ew(7,`Dapibus ac facilisis in`),dl(),Ew(8,`
              `),Pi(9,`li`,31),Ew(10,`Morbi leo risus`),dl(),Ew(11,`
            `),dl(),Ew(12,`
          `)),r&2){let a=l.$implicit;QI(),Ah(`horizontal`,a)}}function X(r,l){if(r&1&&(Ew(0,`
              `),Pi(1,`li`,40),Ew(2),dl(),Ew(3,`
            `)),r&2){let a=l.$implicit;QI(),Ah(`color`,a),QI(),ml(`
                A simple `,a,` list group item
              `)}}function Y(r,l){if(r&1&&(Ew(0,`
              `),Pi(1,`a`,41),Ew(2),dl(),Ew(3,`
            `)),r&2){let a=l.$implicit;QI(),Ah(`color`,a),QI(),ml(`
                A simple `,a,` list group item
              `)}}function Z(r,l){if(r&1&&(Ew(0,`
              `),Pi(1,`button`,42),Ew(2),Pi(3,`c-badge`,43),Ew(4),dl(),Ew(5,`
              `),dl(),Ew(6,`
            `)),r&2){let a=l.$implicit,o=l.$index,u=l.$count;QI(),Ah(`disabled`,o===u-1),QI(),ml(`
                `,a,`
                `),QI(),Ah(`color`,o===u-1?`secondary`:`primary`),QI(),cg(o+1)}}var R=class r{constructor(){this.formBuilder=C(Jn);this.breakpoints=[!0,`sm`,`md`,`lg`,`xl`,`xxl`];this.colors=[`primary`,`secondary`,`success`,`danger`,`warning`,`info`,`light`,`dark`];this.checkBoxes=this.formBuilder.group({one:!1,two:!1,three:!0,four:!0,five:{value:!1,disabled:!0}});this.sampleList=[`Cras justo odio`,`Dapibus ac facilisis in`,`Morbi leo risus`,`Porta ac consectetur ac`,`Vestibulum at eros`]}setValue(l){let a=this.checkBoxes.get(l)?.value,o=this.checkBoxes.getRawValue();o[l]=!a,this.checkBoxes.setValue(o)}logValue(){console.log(this.checkBoxes.value),this.checkBoxes.reset()}getValue(l){return this.checkBoxes.get(l)}static{this.ɵfac=function(a){return new(a||r)}}static{this.ɵcmp=CD({type:r,selectors:[[`app-list-groups`]],decls:477,vars:3,consts:[[`xs`,`12`],[`href`,`components/list-group`,`title`,`List Group`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/list-group`],[`cListGroup`,``],[`href`,`components/list-group/#active-items`],[`href`,`components/list-group/#disabled-items`],[`href`,`components/list-group/#links-and-buttons`],[`href`,`components/list-group/#flush`],[`cListGroup`,``,`flush`,``],[`href`,`components/list-group/#contextual-classes`],[`cListGroup`,``,1,`mb-3`],[1,`text-body-secondary`,`small`,`mt-1`],[`href`,`components/list-group/#with-badges`],[`href`,`https://coreui.io/docs/utilities/flex/`],[`href`,`components/list-group/#custom-content`],[`cListGroupItem`,``,`href`,``,3,`active`],[1,`d-flex`,`w-100`,`justify-content-between`],[1,`mb-1`],[`cListGroupItem`,``,`href`,``],[1,`text-body-secondary`],[`href`,`components/list-group/#checkboxes-and-radios`],[`cForm`,``,3,`ngSubmit`,`formGroup`],[`cListGroup`,``,3,`flush`],[`cListGroupItem`,``,`type`,`button`,3,`click`],[`cFormCheckInput`,``,`formControlName`,`one`,`type`,`checkbox`],[`cFormCheckLabel`,``],[`cListGroupItem`,``,2,`cursor`,`pointer`],[`cFormCheckInput`,``,`formControlName`,`two`,`type`,`checkbox`],[1,`ms-1`],[`cListGroupItem`,``],[`cFormCheckInput`,``,`formControlName`,`three`,`type`,`checkbox`],[`cFormCheckInput`,``,`formControlName`,`four`,`type`,`checkbox`],[`cFormCheckInput`,``,`formControlName`,`five`,`type`,`checkbox`],[`cButton`,``,`type`,`submit`,1,`mt-3`],[`cListGroupItem`,``,3,`active`],[`cListGroupItem`,``,3,`disabled`],[`href`,``,`cListGroupItem`,``,3,`active`,`disabled`],[`cListGroup`,``,1,`mb-2`,3,`horizontal`],[`cListGroupItem`,``,3,`color`],[`cListGroupItem`,``,`href`,``,3,`color`],[`cListGroupItem`,``,1,`d-flex`,`justify-content-between`,`align-items-center`,3,`disabled`],[`shape`,`rounded-pill`,3,`color`]],template:function(a,o){a&1&&(Pi(0,`c-row`),Ew(1,`
  `),Pi(2,`c-col`,0),Ew(3,`
    `),Rh(4,`app-docs-components`,1),Ew(5,`
    `),Pi(6,`c-card`,2),Ew(7,`
      `),Pi(8,`c-card-header`),Ew(9,`
        `),Pi(10,`strong`),Ew(11,`Angular List Group`),dl(),Ew(12,` `),Pi(13,`small`),Ew(14,`Basic example`),dl(),Ew(15,`
      `),dl(),Ew(16,`
      `),Pi(17,`c-card-body`),Ew(18,`
        `),Pi(19,`p`,3),Ew(20,`
          The default list group is an unordered list with items and the proper
          CSS classes. Build upon it with the options that follow, or with your
          CSS as required.
        `),dl(),Ew(21,`
        `),Pi(22,`app-docs-example`,4),Ew(23,`
          `),Pi(24,`ul`,5),Ew(25,`
            `),ST(26,W,4,1,null,null,bT),dl(),Ew(28,`
        `),dl(),Ew(29,`
      `),dl(),Ew(30,`
    `),dl(),Ew(31,`
  `),dl(),Ew(32,`
  `),Pi(33,`c-col`,0),Ew(34,`
    `),Pi(35,`c-card`,2),Ew(36,`
      `),Pi(37,`c-card-header`),Ew(38,`
        `),Pi(39,`strong`),Ew(40,`Angular List Group`),dl(),Ew(41,` `),Pi(42,`small`),Ew(43,`Active items`),dl(),Ew(44,`
      `),dl(),Ew(45,`
      `),Pi(46,`c-card-body`),Ew(47,`
        `),Pi(48,`p`,3),Ew(49,`
          Add `),Pi(50,`code`),Ew(51,`active`),dl(),Ew(52,` boolean property to a
          `),Pi(53,`code`),Ew(54,`cListGroupItem`),dl(),Ew(55,` to show the current active selection.
        `),dl(),Ew(56,`
        `),Pi(57,`app-docs-example`,6),Ew(58,`
          `),Pi(59,`ul`,5),Ew(60,`
            `),ST(61,q,4,2,null,null,bT),dl(),Ew(63,`
        `),dl(),Ew(64,`
      `),dl(),Ew(65,`
    `),dl(),Ew(66,`
  `),dl(),Ew(67,`
  `),Pi(68,`c-col`,0),Ew(69,`
    `),Pi(70,`c-card`,2),Ew(71,`
      `),Pi(72,`c-card-header`),Ew(73,`
        `),Pi(74,`strong`),Ew(75,`Angular List Group`),dl(),Ew(76,` `),Pi(77,`small`),Ew(78,`Disabled items`),dl(),Ew(79,`
      `),dl(),Ew(80,`
      `),Pi(81,`c-card-body`),Ew(82,`
        `),Pi(83,`p`,3),Ew(84,`
          Add `),Pi(85,`code`),Ew(86,`disabled`),dl(),Ew(87,` boolean property to a
          `),Pi(88,`code`),Ew(89,`cListGroupItem`),dl(),Ew(90,` to make it appear disabled.
        `),dl(),Ew(91,`
        `),Pi(92,`app-docs-example`,7),Ew(93,`
          `),Pi(94,`div`,5),Ew(95,`
            `),ST(96,O,4,2,null,null,bT),dl(),Ew(98,`
        `),dl(),Ew(99,`
      `),dl(),Ew(100,`
    `),dl(),Ew(101,`
  `),dl(),Ew(102,`
  `),Pi(103,`c-col`,0),Ew(104,`
    `),Pi(105,`c-card`,2),Ew(106,`
      `),Pi(107,`c-card-header`),Ew(108,`
        `),Pi(109,`strong`),Ew(110,`Angular List Group`),dl(),Ew(111,` `),Pi(112,`small`),Ew(113,`Links and buttons`),dl(),Ew(114,`
      `),dl(),Ew(115,`
      `),Pi(116,`c-card-body`),Ew(117,`
        `),Pi(118,`p`,3),Ew(119,`
          Use `),Pi(120,`code`),Ew(121,`<a>`),dl(),Ew(122,`s or `),Pi(123,`code`),Ew(124,`<button>`),dl(),Ew(125,`s to create
          `),Pi(126,`em`),Ew(127,`actionable`),dl(),Ew(128,` list group items with hover, disabled, and active
          states with `),Pi(129,`code`),Ew(130,`a`),dl(),Ew(131,` or `),Pi(132,`code`),Ew(133,`button`),dl(),Ew(134,`. We
          separate these pseudo-classes to ensure list groups made of
          non-interactive elements (like `),Pi(135,`code`),Ew(136,`<li>`),dl(),Ew(137,` or
          `),Pi(138,`code`),Ew(139,`<div>`),dl(),Ew(140,`) don't provide a click or tap affordance.
        `),dl(),Ew(141,`
        `),Pi(142,`app-docs-example`,8),Ew(143,`
          `),Pi(144,`div`,5),Ew(145,`
            `),ST(146,J,4,3,null,null,bT),dl(),Ew(148,`
        `),dl(),Ew(149,`
      `),dl(),Ew(150,`
    `),dl(),Ew(151,`
  `),dl(),Ew(152,`
  `),Pi(153,`c-col`,0),Ew(154,`
    `),Pi(155,`c-card`,2),Ew(156,`
      `),Pi(157,`c-card-header`),Ew(158,`
        `),Pi(159,`strong`),Ew(160,`Angular List Group`),dl(),Ew(161,` `),Pi(162,`small`),Ew(163,`Flush`),dl(),Ew(164,`
      `),dl(),Ew(165,`
      `),Pi(166,`c-card-body`),Ew(167,`
        `),Pi(168,`p`,3),Ew(169,`
          Add `),Pi(170,`code`),Ew(171,`flush`),dl(),Ew(172,` boolean property to remove some borders and
          rounded corners to render list group items edge-to-edge in a parent
          container (e.g., cards).
        `),dl(),Ew(173,`
        `),Pi(174,`app-docs-example`,9),Ew(175,`
          `),Pi(176,`ul`,10),Ew(177,`
            `),ST(178,K,4,1,null,null,bT),dl(),Ew(180,`
        `),dl(),Ew(181,`
      `),dl(),Ew(182,`
    `),dl(),Ew(183,`
  `),dl(),Ew(184,`
  `),Pi(185,`c-col`,0),Ew(186,`
    `),Pi(187,`c-card`,2),Ew(188,`
      `),Pi(189,`c-card-header`),Ew(190,`
        `),Pi(191,`strong`),Ew(192,`Angular List Group`),dl(),Ew(193,` `),Pi(194,`small`),Ew(195,`Horizontal`),dl(),Ew(196,`
      `),dl(),Ew(197,`
      `),Pi(198,`c-card-body`),Ew(199,`
        `),Pi(200,`p`,3),Ew(201,`
          Add `),Pi(202,`code`),Ew(203,`layout="horizontal"`),dl(),Ew(204,` to change the layout of
          list group items from vertical to horizontal across all breakpoints. `),Rh(205,`br`),Ew(206,`
          Alternatively, choose a responsive variant
          `),Pi(207,`code`),Ew(208,`[horizontal]="sm | md | lg | xl | xxl"`),dl(),Ew(209,`
          to make a list group horizontal starting at that breakpoint's
          `),Pi(210,`code`),Ew(211,`min-width`),dl(),Ew(212,`. `),Rh(213,`br`),Ew(214,`
          Currently `),Pi(215,`strong`),Ew(216,`horizontal list groups cannot be combined with flush list groups.`),dl(),Ew(217,`
        `),dl(),Ew(218,`
        `),Pi(219,`app-docs-example`,9),Ew(220,`
          `),ST(221,Q,13,1,null,null,bT),dl(),Ew(223,`
      `),dl(),Ew(224,`
    `),dl(),Ew(225,`
  `),dl(),Ew(226,`
  `),Pi(227,`c-col`,0),Ew(228,`
    `),Pi(229,`c-card`,2),Ew(230,`
      `),Pi(231,`c-card-header`),Ew(232,`
        `),Pi(233,`strong`),Ew(234,`Angular List Group`),dl(),Ew(235,` `),Pi(236,`small`),Ew(237,`Contextual classes`),dl(),Ew(238,`
      `),dl(),Ew(239,`
      `),Pi(240,`c-card-body`),Ew(241,`
        `),Pi(242,`p`,3),Ew(243,`
          Use contextual classes to style list items with a stateful background
          and color.
        `),dl(),Ew(244,`
        `),Pi(245,`app-docs-example`,11),Ew(246,`
          `),Pi(247,`ul`,12),Ew(248,`
            `),ST(249,X,4,2,null,null,bT),dl(),Ew(251,`
        `),dl(),Ew(252,`
        `),Pi(253,`p`,13),Ew(254,`
          Contextual classes also work with `),Pi(255,`code`),Ew(256,`<a>`),dl(),Ew(257,` or
          `),Pi(258,`code`),Ew(259,`<button>`),dl(),Ew(260,`. Note the addition of the hover styles
          here not present in the previous example. Also supported is the
          `),Pi(261,`code`),Ew(262,`active`),dl(),Ew(263,` state; apply it to indicate an active selection on
          a contextual list group item.
        `),dl(),Ew(264,`
        `),Pi(265,`app-docs-example`,11),Ew(266,`
          `),Pi(267,`div`,5),Ew(268,`
            `),ST(269,Y,4,2,null,null,bT),dl(),Ew(271,`
        `),dl(),Ew(272,`
      `),dl(),Ew(273,`
    `),dl(),Ew(274,`
  `),dl(),Ew(275,`
  `),Pi(276,`c-col`,0),Ew(277,`
    `),Pi(278,`c-card`,2),Ew(279,`
      `),Pi(280,`c-card-header`),Ew(281,`
        `),Pi(282,`strong`),Ew(283,`Angular List Group`),dl(),Ew(284,` `),Pi(285,`small`),Ew(286,`With badges`),dl(),Ew(287,`
      `),dl(),Ew(288,`
      `),Pi(289,`c-card-body`),Ew(290,`
        `),Pi(291,`p`,3),Ew(292,`
          Add badges to any list group item to show unread counts, activity, and
          more.
        `),dl(),Ew(293,`
        `),Pi(294,`app-docs-example`,14),Ew(295,`
          `),Pi(296,`div`,5),Ew(297,`
            `),ST(298,Z,7,4,null,null,bT),dl(),Ew(300,`
        `),dl(),Ew(301,`
      `),dl(),Ew(302,`
    `),dl(),Ew(303,`
  `),dl(),Ew(304,`
  `),Pi(305,`c-col`,0),Ew(306,`
    `),Pi(307,`c-card`,2),Ew(308,`
      `),Pi(309,`c-card-header`),Ew(310,`
        `),Pi(311,`strong`),Ew(312,`Angular List Group`),dl(),Ew(313,` `),Pi(314,`small`),Ew(315,`Custom content`),dl(),Ew(316,`
      `),dl(),Ew(317,`
      `),Pi(318,`c-card-body`),Ew(319,`
        `),Pi(320,`p`,3),Ew(321,`
          Add nearly any HTML within, even for linked list groups like the one
          below, with the help of
          `),Pi(322,`a`,15),Ew(323,`flexbox utilities`),dl(),Ew(324,`.
        `),dl(),Ew(325,`
        `),Pi(326,`app-docs-example`,16),Ew(327,`
          `),Pi(328,`div`,5),Ew(329,`
            `),Pi(330,`a`,17),Ew(331,`
              `),Pi(332,`div`,18),Ew(333,`
                `),Pi(334,`h5`,19),Ew(335,`List group item heading`),dl(),Ew(336,`
                `),Pi(337,`small`),Ew(338,`3 days ago`),dl(),Ew(339,`
              `),dl(),Ew(340,`
              `),Pi(341,`p`,19),Ew(342,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),dl(),Ew(343,`
              `),Pi(344,`small`),Ew(345,`Donec id elit non mi porta.`),dl(),Ew(346,`
            `),dl(),Ew(347,`
            `),Pi(348,`a`,20),Ew(349,`
              `),Pi(350,`div`,18),Ew(351,`
                `),Pi(352,`h5`,19),Ew(353,`List group item heading`),dl(),Ew(354,`
                `),Pi(355,`small`,21),Ew(356,`3 days ago`),dl(),Ew(357,`
              `),dl(),Ew(358,`
              `),Pi(359,`p`,19),Ew(360,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),dl(),Ew(361,`
              `),Pi(362,`small`,21),Ew(363,`Donec id elit non mi porta.`),dl(),Ew(364,`
            `),dl(),Ew(365,`
            `),Pi(366,`a`,20),Ew(367,`
              `),Pi(368,`div`,18),Ew(369,`
                `),Pi(370,`h5`,19),Ew(371,`List group item heading`),dl(),Ew(372,`
                `),Pi(373,`small`,21),Ew(374,`3 days ago`),dl(),Ew(375,`
              `),dl(),Ew(376,`
              `),Pi(377,`p`,19),Ew(378,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),dl(),Ew(379,`
              `),Pi(380,`small`,21),Ew(381,`Donec id elit non mi porta.`),dl(),Ew(382,`
            `),dl(),Ew(383,`
          `),dl(),Ew(384,`
        `),dl(),Ew(385,`
      `),dl(),Ew(386,`
    `),dl(),Ew(387,`
  `),dl(),Ew(388,`
  `),Pi(389,`c-col`,0),Ew(390,`
    `),Pi(391,`c-card`,2),Ew(392,`
      `),Pi(393,`c-card-header`),Ew(394,`
        `),Pi(395,`strong`),Ew(396,`Angular List Group`),dl(),Ew(397,` `),Pi(398,`small`),Ew(399,`Checkboxes and radios`),dl(),Ew(400,`
      `),dl(),Ew(401,`
      `),Pi(402,`c-card-body`),Ew(403,`
        `),Pi(404,`p`,3),Ew(405,`
          Place CoreUI's checkboxes and radios within list group items and
          customize as needed.
        `),dl(),Ew(406,`
        `),Pi(407,`app-docs-example`,22),Ew(408,`
          `),Pi(409,`form`,23),Bh(`ngSubmit`,function(){return o.logValue()}),Ew(410,`
            `),Pi(411,`ul`,24),Ew(412,`
              `),Pi(413,`button`,25),Bh(`click`,function(){return o.setValue(`one`)}),Ew(414,`
                `),Pi(415,`c-form-check`),Ew(416,`
                  `),Rh(417,`input`,26),PE(),Ew(418,`
                  `),Pi(419,`label`,27),Ew(420,`Cras justo odio`),dl(),Ew(421,`
                `),dl(),Ew(422,`
              `),dl(),Ew(423,`
              `),Pi(424,`label`,28),Ew(425,`
                `),Pi(426,`c-form-check`),Ew(427,`
                  `),Rh(428,`input`,29),PE(),Ew(429,`
                  `),Pi(430,`span`,30),Ew(431,`Dapibus ac facilisis in`),dl(),Ew(432,`
                `),dl(),Ew(433,`
              `),dl(),Ew(434,`
              `),Pi(435,`li`,31),Ew(436,`
                `),Pi(437,`c-form-check`),Ew(438,`
                  `),Rh(439,`input`,32),PE(),Ew(440,`
                  `),Pi(441,`label`,27),Ew(442,`Morbi leo risus`),dl(),Ew(443,`
                `),dl(),Ew(444,`
              `),dl(),Ew(445,`
              `),Pi(446,`li`,31),Ew(447,`
                `),Pi(448,`c-form-check`),Ew(449,`
                  `),Rh(450,`input`,33),PE(),Ew(451,`
                  `),Pi(452,`label`,27),Ew(453,`Orta ac consectetur ac`),dl(),Ew(454,`
                `),dl(),Ew(455,`
              `),dl(),Ew(456,`
              `),Pi(457,`li`,31),Ew(458,`
                `),Pi(459,`c-form-check`),Ew(460,`
                  `),Rh(461,`input`,34),PE(),Ew(462,`
                  `),Pi(463,`label`,27),Ew(464,`Vestibulum at eros`),dl(),Ew(465,`
                `),dl(),Ew(466,`
              `),dl(),Ew(467,`
            `),dl(),Ew(468,`
            `),Pi(469,`button`,35),Ew(470,`Submit`),dl(),Ew(471,`
          `),dl(),Ew(472,`
        `),dl(),Ew(473,`
      `),dl(),Ew(474,`
    `),dl(),Ew(475,`
  `),dl(),Ew(476,`
`),dl()),a&2&&(QI(26),NT(o.sampleList),QI(35),NT(o.sampleList),QI(35),NT(o.sampleList),QI(50),NT(o.sampleList),QI(32),NT(o.sampleList),QI(43),NT(o.breakpoints),QI(28),NT(o.colors),QI(20),NT(o.colors),QI(29),NT(o.sampleList),QI(32),Ah(`active`,!0),QI(79),Ah(`formGroup`,o.checkBoxes),QI(2),Ah(`flush`,!0),QI(6),jE(),QI(11),jE(),QI(11),jE(),QI(11),jE(),QI(11),jE())},dependencies:[Y1,yy,Qi,py,Ji,k,eN,tN,b1,ei,Xn,Nt,Wn,qn,Vn,yn,B1,j1,$1,sp,ay,c],encapsulation:2})}};export{R as ListGroupsComponent};