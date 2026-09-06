import{Jn as fl,Kt as T,Pr as qh,R as HI,Vn as dg,_i as yl,at as Lh,ht as ND,l as Aw,n as $I,pi as xw,pn as XE,pr as ji,qt as TC,wt as Oh,zt as Rw}from"./chunk-CNvvMoDe.js";import{$ as U1,A as L1,D as K1,Dn as uy,Mt as eN,On as v1,S as J1,T as Ji,U as Qi,a as B1,cn as oy,jn as vy,xn as sp}from"./main-KR47Z6Z4.js";import{i as k}from"./chunk-BoQ4iLTD.js";import{t as c}from"./chunk-CqpfDRQx.js";import{S as qn,T as yn,_ as ei,d as Wn,f as Xn,l as Vn,o as Nt,r as Jn}from"./chunk-CGCxv84v.js";function W(r,l){if(r&1&&(TC(0,`
              `),ji(1,`li`,31),TC(2),fl(),TC(3,`
            `)),r&2){let a=l.$implicit;XE(2),dg(a)}}function q(r,l){if(r&1&&(TC(0,`
              `),ji(1,`li`,36),TC(2),fl(),TC(3,`
            `)),r&2){let a=l.$implicit,o=l.$index;XE(),Oh(`active`,o===0),XE(),dg(a)}}function O(r,l){if(r&1&&(TC(0,`
              `),ji(1,`button`,37),TC(2),fl(),TC(3,`
            `)),r&2){let a=l.$implicit,o=l.$index;XE(),Oh(`disabled`,o===0),XE(),dg(a)}}function J(r,l){if(r&1&&(TC(0,`
              `),ji(1,`a`,38),TC(2),fl(),TC(3,`
            `)),r&2){let a=l.$implicit,o=l.$index,u=l.$count;XE(),Oh(`active`,o===0)(`disabled`,o===u-1),XE(),dg(a)}}function K(r,l){if(r&1&&(TC(0,`
              `),ji(1,`li`,31),TC(2),fl(),TC(3,`
            `)),r&2){let a=l.$implicit;XE(2),dg(a)}}function Q(r,l){if(r&1&&(TC(0,`
            `),ji(1,`ul`,39),TC(2,`
              `),ji(3,`li`,31),TC(4,`Cras justo odio`),fl(),TC(5,`
              `),ji(6,`li`,31),TC(7,`Dapibus ac facilisis in`),fl(),TC(8,`
              `),ji(9,`li`,31),TC(10,`Morbi leo risus`),fl(),TC(11,`
            `),fl(),TC(12,`
          `)),r&2){let a=l.$implicit;XE(),Oh(`horizontal`,a)}}function X(r,l){if(r&1&&(TC(0,`
              `),ji(1,`li`,40),TC(2),fl(),TC(3,`
            `)),r&2){let a=l.$implicit;XE(),Oh(`color`,a),XE(),yl(`
                A simple `,a,` list group item
              `)}}function Y(r,l){if(r&1&&(TC(0,`
              `),ji(1,`a`,41),TC(2),fl(),TC(3,`
            `)),r&2){let a=l.$implicit;XE(),Oh(`color`,a),XE(),yl(`
                A simple `,a,` list group item
              `)}}function Z(r,l){if(r&1&&(TC(0,`
              `),ji(1,`button`,42),TC(2),ji(3,`c-badge`,43),TC(4),fl(),TC(5,`
              `),fl(),TC(6,`
            `)),r&2){let a=l.$implicit,o=l.$index,u=l.$count;XE(),Oh(`disabled`,o===u-1),XE(),yl(`
                `,a,`
                `),XE(),Oh(`color`,o===u-1?`secondary`:`primary`),XE(),dg(o+1)}}var R=class r{constructor(){this.formBuilder=T(Jn);this.breakpoints=[!0,`sm`,`md`,`lg`,`xl`,`xxl`];this.colors=[`primary`,`secondary`,`success`,`danger`,`warning`,`info`,`light`,`dark`];this.checkBoxes=this.formBuilder.group({one:!1,two:!1,three:!0,four:!0,five:{value:!1,disabled:!0}});this.sampleList=[`Cras justo odio`,`Dapibus ac facilisis in`,`Morbi leo risus`,`Porta ac consectetur ac`,`Vestibulum at eros`]}setValue(l){let a=this.checkBoxes.get(l)?.value,o=this.checkBoxes.getRawValue();o[l]=!a,this.checkBoxes.setValue(o)}logValue(){console.log(this.checkBoxes.value),this.checkBoxes.reset()}getValue(l){return this.checkBoxes.get(l)}static{this.ɵfac=function(a){return new(a||r)}}static{this.ɵcmp=ND({type:r,selectors:[[`app-list-groups`]],decls:477,vars:3,consts:[[`xs`,`12`],[`href`,`components/list-group`,`title`,`List Group`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/list-group`],[`cListGroup`,``],[`href`,`components/list-group/#active-items`],[`href`,`components/list-group/#disabled-items`],[`href`,`components/list-group/#links-and-buttons`],[`href`,`components/list-group/#flush`],[`cListGroup`,``,`flush`,``],[`href`,`components/list-group/#contextual-classes`],[`cListGroup`,``,1,`mb-3`],[1,`text-body-secondary`,`small`,`mt-1`],[`href`,`components/list-group/#with-badges`],[`href`,`https://coreui.io/docs/utilities/flex/`],[`href`,`components/list-group/#custom-content`],[`cListGroupItem`,``,`href`,``,3,`active`],[1,`d-flex`,`w-100`,`justify-content-between`],[1,`mb-1`],[`cListGroupItem`,``,`href`,``],[1,`text-body-secondary`],[`href`,`components/list-group/#checkboxes-and-radios`],[`cForm`,``,3,`ngSubmit`,`formGroup`],[`cListGroup`,``,3,`flush`],[`cListGroupItem`,``,`type`,`button`,3,`click`],[`cFormCheckInput`,``,`formControlName`,`one`,`type`,`checkbox`],[`cFormCheckLabel`,``],[`cListGroupItem`,``,2,`cursor`,`pointer`],[`cFormCheckInput`,``,`formControlName`,`two`,`type`,`checkbox`],[1,`ms-1`],[`cListGroupItem`,``],[`cFormCheckInput`,``,`formControlName`,`three`,`type`,`checkbox`],[`cFormCheckInput`,``,`formControlName`,`four`,`type`,`checkbox`],[`cFormCheckInput`,``,`formControlName`,`five`,`type`,`checkbox`],[`cButton`,``,`type`,`submit`,1,`mt-3`],[`cListGroupItem`,``,3,`active`],[`cListGroupItem`,``,3,`disabled`],[`href`,``,`cListGroupItem`,``,3,`active`,`disabled`],[`cListGroup`,``,1,`mb-2`,3,`horizontal`],[`cListGroupItem`,``,3,`color`],[`cListGroupItem`,``,`href`,``,3,`color`],[`cListGroupItem`,``,1,`d-flex`,`justify-content-between`,`align-items-center`,3,`disabled`],[`shape`,`rounded-pill`,3,`color`]],template:function(a,o){a&1&&(ji(0,`c-row`),TC(1,`
  `),ji(2,`c-col`,0),TC(3,`
    `),Lh(4,`app-docs-components`,1),TC(5,`
    `),ji(6,`c-card`,2),TC(7,`
      `),ji(8,`c-card-header`),TC(9,`
        `),ji(10,`strong`),TC(11,`Angular List Group`),fl(),TC(12,` `),ji(13,`small`),TC(14,`Basic example`),fl(),TC(15,`
      `),fl(),TC(16,`
      `),ji(17,`c-card-body`),TC(18,`
        `),ji(19,`p`,3),TC(20,`
          The default list group is an unordered list with items and the proper
          CSS classes. Build upon it with the options that follow, or with your
          CSS as required.
        `),fl(),TC(21,`
        `),ji(22,`app-docs-example`,4),TC(23,`
          `),ji(24,`ul`,5),TC(25,`
            `),Aw(26,W,4,1,null,null,xw),fl(),TC(28,`
        `),fl(),TC(29,`
      `),fl(),TC(30,`
    `),fl(),TC(31,`
  `),fl(),TC(32,`
  `),ji(33,`c-col`,0),TC(34,`
    `),ji(35,`c-card`,2),TC(36,`
      `),ji(37,`c-card-header`),TC(38,`
        `),ji(39,`strong`),TC(40,`Angular List Group`),fl(),TC(41,` `),ji(42,`small`),TC(43,`Active items`),fl(),TC(44,`
      `),fl(),TC(45,`
      `),ji(46,`c-card-body`),TC(47,`
        `),ji(48,`p`,3),TC(49,`
          Add `),ji(50,`code`),TC(51,`active`),fl(),TC(52,` boolean property to a
          `),ji(53,`code`),TC(54,`cListGroupItem`),fl(),TC(55,` to show the current active selection.
        `),fl(),TC(56,`
        `),ji(57,`app-docs-example`,6),TC(58,`
          `),ji(59,`ul`,5),TC(60,`
            `),Aw(61,q,4,2,null,null,xw),fl(),TC(63,`
        `),fl(),TC(64,`
      `),fl(),TC(65,`
    `),fl(),TC(66,`
  `),fl(),TC(67,`
  `),ji(68,`c-col`,0),TC(69,`
    `),ji(70,`c-card`,2),TC(71,`
      `),ji(72,`c-card-header`),TC(73,`
        `),ji(74,`strong`),TC(75,`Angular List Group`),fl(),TC(76,` `),ji(77,`small`),TC(78,`Disabled items`),fl(),TC(79,`
      `),fl(),TC(80,`
      `),ji(81,`c-card-body`),TC(82,`
        `),ji(83,`p`,3),TC(84,`
          Add `),ji(85,`code`),TC(86,`disabled`),fl(),TC(87,` boolean property to a
          `),ji(88,`code`),TC(89,`cListGroupItem`),fl(),TC(90,` to make it appear disabled.
        `),fl(),TC(91,`
        `),ji(92,`app-docs-example`,7),TC(93,`
          `),ji(94,`div`,5),TC(95,`
            `),Aw(96,O,4,2,null,null,xw),fl(),TC(98,`
        `),fl(),TC(99,`
      `),fl(),TC(100,`
    `),fl(),TC(101,`
  `),fl(),TC(102,`
  `),ji(103,`c-col`,0),TC(104,`
    `),ji(105,`c-card`,2),TC(106,`
      `),ji(107,`c-card-header`),TC(108,`
        `),ji(109,`strong`),TC(110,`Angular List Group`),fl(),TC(111,` `),ji(112,`small`),TC(113,`Links and buttons`),fl(),TC(114,`
      `),fl(),TC(115,`
      `),ji(116,`c-card-body`),TC(117,`
        `),ji(118,`p`,3),TC(119,`
          Use `),ji(120,`code`),TC(121,`<a>`),fl(),TC(122,`s or `),ji(123,`code`),TC(124,`<button>`),fl(),TC(125,`s to create
          `),ji(126,`em`),TC(127,`actionable`),fl(),TC(128,` list group items with hover, disabled, and active
          states with `),ji(129,`code`),TC(130,`a`),fl(),TC(131,` or `),ji(132,`code`),TC(133,`button`),fl(),TC(134,`. We
          separate these pseudo-classes to ensure list groups made of
          non-interactive elements (like `),ji(135,`code`),TC(136,`<li>`),fl(),TC(137,` or
          `),ji(138,`code`),TC(139,`<div>`),fl(),TC(140,`) don't provide a click or tap affordance.
        `),fl(),TC(141,`
        `),ji(142,`app-docs-example`,8),TC(143,`
          `),ji(144,`div`,5),TC(145,`
            `),Aw(146,J,4,3,null,null,xw),fl(),TC(148,`
        `),fl(),TC(149,`
      `),fl(),TC(150,`
    `),fl(),TC(151,`
  `),fl(),TC(152,`
  `),ji(153,`c-col`,0),TC(154,`
    `),ji(155,`c-card`,2),TC(156,`
      `),ji(157,`c-card-header`),TC(158,`
        `),ji(159,`strong`),TC(160,`Angular List Group`),fl(),TC(161,` `),ji(162,`small`),TC(163,`Flush`),fl(),TC(164,`
      `),fl(),TC(165,`
      `),ji(166,`c-card-body`),TC(167,`
        `),ji(168,`p`,3),TC(169,`
          Add `),ji(170,`code`),TC(171,`flush`),fl(),TC(172,` boolean property to remove some borders and
          rounded corners to render list group items edge-to-edge in a parent
          container (e.g., cards).
        `),fl(),TC(173,`
        `),ji(174,`app-docs-example`,9),TC(175,`
          `),ji(176,`ul`,10),TC(177,`
            `),Aw(178,K,4,1,null,null,xw),fl(),TC(180,`
        `),fl(),TC(181,`
      `),fl(),TC(182,`
    `),fl(),TC(183,`
  `),fl(),TC(184,`
  `),ji(185,`c-col`,0),TC(186,`
    `),ji(187,`c-card`,2),TC(188,`
      `),ji(189,`c-card-header`),TC(190,`
        `),ji(191,`strong`),TC(192,`Angular List Group`),fl(),TC(193,` `),ji(194,`small`),TC(195,`Horizontal`),fl(),TC(196,`
      `),fl(),TC(197,`
      `),ji(198,`c-card-body`),TC(199,`
        `),ji(200,`p`,3),TC(201,`
          Add `),ji(202,`code`),TC(203,`layout="horizontal"`),fl(),TC(204,` to change the layout of
          list group items from vertical to horizontal across all breakpoints. `),Lh(205,`br`),TC(206,`
          Alternatively, choose a responsive variant
          `),ji(207,`code`),TC(208,`[horizontal]="sm | md | lg | xl | xxl"`),fl(),TC(209,`
          to make a list group horizontal starting at that breakpoint's
          `),ji(210,`code`),TC(211,`min-width`),fl(),TC(212,`. `),Lh(213,`br`),TC(214,`
          Currently `),ji(215,`strong`),TC(216,`horizontal list groups cannot be combined with flush list groups.`),fl(),TC(217,`
        `),fl(),TC(218,`
        `),ji(219,`app-docs-example`,9),TC(220,`
          `),Aw(221,Q,13,1,null,null,xw),fl(),TC(223,`
      `),fl(),TC(224,`
    `),fl(),TC(225,`
  `),fl(),TC(226,`
  `),ji(227,`c-col`,0),TC(228,`
    `),ji(229,`c-card`,2),TC(230,`
      `),ji(231,`c-card-header`),TC(232,`
        `),ji(233,`strong`),TC(234,`Angular List Group`),fl(),TC(235,` `),ji(236,`small`),TC(237,`Contextual classes`),fl(),TC(238,`
      `),fl(),TC(239,`
      `),ji(240,`c-card-body`),TC(241,`
        `),ji(242,`p`,3),TC(243,`
          Use contextual classes to style list items with a stateful background
          and color.
        `),fl(),TC(244,`
        `),ji(245,`app-docs-example`,11),TC(246,`
          `),ji(247,`ul`,12),TC(248,`
            `),Aw(249,X,4,2,null,null,xw),fl(),TC(251,`
        `),fl(),TC(252,`
        `),ji(253,`p`,13),TC(254,`
          Contextual classes also work with `),ji(255,`code`),TC(256,`<a>`),fl(),TC(257,` or
          `),ji(258,`code`),TC(259,`<button>`),fl(),TC(260,`. Note the addition of the hover styles
          here not present in the previous example. Also supported is the
          `),ji(261,`code`),TC(262,`active`),fl(),TC(263,` state; apply it to indicate an active selection on
          a contextual list group item.
        `),fl(),TC(264,`
        `),ji(265,`app-docs-example`,11),TC(266,`
          `),ji(267,`div`,5),TC(268,`
            `),Aw(269,Y,4,2,null,null,xw),fl(),TC(271,`
        `),fl(),TC(272,`
      `),fl(),TC(273,`
    `),fl(),TC(274,`
  `),fl(),TC(275,`
  `),ji(276,`c-col`,0),TC(277,`
    `),ji(278,`c-card`,2),TC(279,`
      `),ji(280,`c-card-header`),TC(281,`
        `),ji(282,`strong`),TC(283,`Angular List Group`),fl(),TC(284,` `),ji(285,`small`),TC(286,`With badges`),fl(),TC(287,`
      `),fl(),TC(288,`
      `),ji(289,`c-card-body`),TC(290,`
        `),ji(291,`p`,3),TC(292,`
          Add badges to any list group item to show unread counts, activity, and
          more.
        `),fl(),TC(293,`
        `),ji(294,`app-docs-example`,14),TC(295,`
          `),ji(296,`div`,5),TC(297,`
            `),Aw(298,Z,7,4,null,null,xw),fl(),TC(300,`
        `),fl(),TC(301,`
      `),fl(),TC(302,`
    `),fl(),TC(303,`
  `),fl(),TC(304,`
  `),ji(305,`c-col`,0),TC(306,`
    `),ji(307,`c-card`,2),TC(308,`
      `),ji(309,`c-card-header`),TC(310,`
        `),ji(311,`strong`),TC(312,`Angular List Group`),fl(),TC(313,` `),ji(314,`small`),TC(315,`Custom content`),fl(),TC(316,`
      `),fl(),TC(317,`
      `),ji(318,`c-card-body`),TC(319,`
        `),ji(320,`p`,3),TC(321,`
          Add nearly any HTML within, even for linked list groups like the one
          below, with the help of
          `),ji(322,`a`,15),TC(323,`flexbox utilities`),fl(),TC(324,`.
        `),fl(),TC(325,`
        `),ji(326,`app-docs-example`,16),TC(327,`
          `),ji(328,`div`,5),TC(329,`
            `),ji(330,`a`,17),TC(331,`
              `),ji(332,`div`,18),TC(333,`
                `),ji(334,`h5`,19),TC(335,`List group item heading`),fl(),TC(336,`
                `),ji(337,`small`),TC(338,`3 days ago`),fl(),TC(339,`
              `),fl(),TC(340,`
              `),ji(341,`p`,19),TC(342,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),fl(),TC(343,`
              `),ji(344,`small`),TC(345,`Donec id elit non mi porta.`),fl(),TC(346,`
            `),fl(),TC(347,`
            `),ji(348,`a`,20),TC(349,`
              `),ji(350,`div`,18),TC(351,`
                `),ji(352,`h5`,19),TC(353,`List group item heading`),fl(),TC(354,`
                `),ji(355,`small`,21),TC(356,`3 days ago`),fl(),TC(357,`
              `),fl(),TC(358,`
              `),ji(359,`p`,19),TC(360,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),fl(),TC(361,`
              `),ji(362,`small`,21),TC(363,`Donec id elit non mi porta.`),fl(),TC(364,`
            `),fl(),TC(365,`
            `),ji(366,`a`,20),TC(367,`
              `),ji(368,`div`,18),TC(369,`
                `),ji(370,`h5`,19),TC(371,`List group item heading`),fl(),TC(372,`
                `),ji(373,`small`,21),TC(374,`3 days ago`),fl(),TC(375,`
              `),fl(),TC(376,`
              `),ji(377,`p`,19),TC(378,`
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              `),fl(),TC(379,`
              `),ji(380,`small`,21),TC(381,`Donec id elit non mi porta.`),fl(),TC(382,`
            `),fl(),TC(383,`
          `),fl(),TC(384,`
        `),fl(),TC(385,`
      `),fl(),TC(386,`
    `),fl(),TC(387,`
  `),fl(),TC(388,`
  `),ji(389,`c-col`,0),TC(390,`
    `),ji(391,`c-card`,2),TC(392,`
      `),ji(393,`c-card-header`),TC(394,`
        `),ji(395,`strong`),TC(396,`Angular List Group`),fl(),TC(397,` `),ji(398,`small`),TC(399,`Checkboxes and radios`),fl(),TC(400,`
      `),fl(),TC(401,`
      `),ji(402,`c-card-body`),TC(403,`
        `),ji(404,`p`,3),TC(405,`
          Place CoreUI's checkboxes and radios within list group items and
          customize as needed.
        `),fl(),TC(406,`
        `),ji(407,`app-docs-example`,22),TC(408,`
          `),ji(409,`form`,23),qh(`ngSubmit`,function(){return o.logValue()}),TC(410,`
            `),ji(411,`ul`,24),TC(412,`
              `),ji(413,`button`,25),qh(`click`,function(){return o.setValue(`one`)}),TC(414,`
                `),ji(415,`c-form-check`),TC(416,`
                  `),Lh(417,`input`,26),HI(),TC(418,`
                  `),ji(419,`label`,27),TC(420,`Cras justo odio`),fl(),TC(421,`
                `),fl(),TC(422,`
              `),fl(),TC(423,`
              `),ji(424,`label`,28),TC(425,`
                `),ji(426,`c-form-check`),TC(427,`
                  `),Lh(428,`input`,29),HI(),TC(429,`
                  `),ji(430,`span`,30),TC(431,`Dapibus ac facilisis in`),fl(),TC(432,`
                `),fl(),TC(433,`
              `),fl(),TC(434,`
              `),ji(435,`li`,31),TC(436,`
                `),ji(437,`c-form-check`),TC(438,`
                  `),Lh(439,`input`,32),HI(),TC(440,`
                  `),ji(441,`label`,27),TC(442,`Morbi leo risus`),fl(),TC(443,`
                `),fl(),TC(444,`
              `),fl(),TC(445,`
              `),ji(446,`li`,31),TC(447,`
                `),ji(448,`c-form-check`),TC(449,`
                  `),Lh(450,`input`,33),HI(),TC(451,`
                  `),ji(452,`label`,27),TC(453,`Orta ac consectetur ac`),fl(),TC(454,`
                `),fl(),TC(455,`
              `),fl(),TC(456,`
              `),ji(457,`li`,31),TC(458,`
                `),ji(459,`c-form-check`),TC(460,`
                  `),Lh(461,`input`,34),HI(),TC(462,`
                  `),ji(463,`label`,27),TC(464,`Vestibulum at eros`),fl(),TC(465,`
                `),fl(),TC(466,`
              `),fl(),TC(467,`
            `),fl(),TC(468,`
            `),ji(469,`button`,35),TC(470,`Submit`),fl(),TC(471,`
          `),fl(),TC(472,`
        `),fl(),TC(473,`
      `),fl(),TC(474,`
    `),fl(),TC(475,`
  `),fl(),TC(476,`
`),fl()),a&2&&(XE(26),Rw(o.sampleList),XE(35),Rw(o.sampleList),XE(35),Rw(o.sampleList),XE(50),Rw(o.sampleList),XE(32),Rw(o.sampleList),XE(43),Rw(o.breakpoints),XE(28),Rw(o.colors),XE(20),Rw(o.colors),XE(29),Rw(o.sampleList),XE(32),Oh(`active`,!0),XE(79),Oh(`formGroup`,o.checkBoxes),XE(2),Oh(`flush`,!0),XE(6),$I(),XE(11),$I(),XE(11),$I(),XE(11),$I(),XE(11),$I())},dependencies:[K1,vy,Qi,uy,Ji,k,J1,eN,v1,ei,Xn,Nt,Wn,qn,Vn,yn,L1,B1,U1,sp,oy,c],encapsulation:2})}};export{R as ListGroupsComponent};