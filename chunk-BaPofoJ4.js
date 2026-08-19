import{Gr as ul,L as ID,Un as hw,_t as Pi,on as _h}from"./chunk-BSgQlS93.js";import{It as ey,Jt as j1,X as Qi,Xt as k1,k as Ji,st as V1,xn as sy}from"./main-37K4GJAM.js";import{i as k}from"./chunk-FodikvMx.js";import{t as c}from"./chunk-5BukuvC5.js";var S=class m{static{this.ɵfac=function(a){return new(a||m)}}static{this.ɵcmp=ID({type:m,selectors:[[`app-ranges`]],decls:146,vars:0,consts:[[`xs`,`12`],[`href`,`forms/range`,`title`,`Range`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`forms/range`],[`cLabel`,``,`for`,`customRange1`],[`cFormControl`,``,`id`,`customRange1`,`type`,`range`],[`href`,`forms/range#disabled`],[`cLabel`,``,`for`,`disabledRange`],[`cFormControl`,``,`disabled`,``,`id`,`disabledRange`,`type`,`range`],[`href`,`forms/range#min-and-max`],[`cLabel`,``,`for`,`customRange2`],[`cFormControl`,``,`id`,`customRange2`,`max`,`5`,`min`,`0`,`type`,`range`,`value`,`3`],[`href`,`forms/range#steps`],[`cLabel`,``,`for`,`customRange3`],[`cFormControl`,``,`id`,`customRange3`,`max`,`5`,`min`,`0`,`step`,`0.5`,`type`,`range`,`value`,`3`]],template:function(a,f){a&1&&(Pi(0,`c-row`),hw(1,`
  `),Pi(2,`c-col`,0),hw(3,`
    `),_h(4,`app-docs-components`,1),hw(5,`
    `),Pi(6,`c-card`,2),hw(7,`
      `),Pi(8,`c-card-header`),hw(9,`
        `),Pi(10,`strong`),hw(11,`Angular Range`),ul(),hw(12,` `),_h(13,`small`),hw(14,`
      `),ul(),hw(15,`
      `),Pi(16,`c-card-body`),hw(17,`
        `),Pi(18,`p`,3),hw(19,`
          Create custom `),Pi(20,`code`),hw(21,`<input type="range">`),ul(),hw(22,` controls
          with `),Pi(23,`code`),hw(24,`<input cFormControl type="range">`),ul(),hw(25,`.
        `),ul(),hw(26,`
        `),Pi(27,`app-docs-example`,4),hw(28,`
          `),Pi(29,`label`,5),hw(30,`Example range`),ul(),hw(31,`
          `),_h(32,`input`,6),hw(33,`
        `),ul(),hw(34,`
      `),ul(),hw(35,`
    `),ul(),hw(36,`
  `),ul(),hw(37,`
  `),Pi(38,`c-col`,0),hw(39,`
    `),Pi(40,`c-card`,2),hw(41,`
      `),Pi(42,`c-card-header`),hw(43,`
        `),Pi(44,`strong`),hw(45,`Angular Range`),ul(),hw(46,` `),Pi(47,`small`),hw(48,`Disabled`),ul(),hw(49,`
      `),ul(),hw(50,`
      `),Pi(51,`c-card-body`),hw(52,`
        `),Pi(53,`p`,3),hw(54,`
          Add the `),Pi(55,`code`),hw(56,`disabled`),ul(),hw(57,` boolean attribute on an input to give it
          a grayed out appearance and remove pointer events.
        `),ul(),hw(58,`
        `),Pi(59,`app-docs-example`,7),hw(60,`
          `),Pi(61,`label`,8),hw(62,`Disabled range`),ul(),hw(63,`
          `),_h(64,`input`,9),hw(65,`
        `),ul(),hw(66,`
      `),ul(),hw(67,`
    `),ul(),hw(68,`
  `),ul(),hw(69,`
  `),Pi(70,`c-col`,0),hw(71,`
    `),Pi(72,`c-card`,2),hw(73,`
      `),Pi(74,`c-card-header`),hw(75,`
        `),Pi(76,`strong`),hw(77,`Angular Range`),ul(),hw(78,` `),Pi(79,`small`),hw(80,`Min and max`),ul(),hw(81,`
      `),ul(),hw(82,`
      `),Pi(83,`c-card-body`),hw(84,`
        `),Pi(85,`p`,3),hw(86,`
          Range inputs have implicit values for `),Pi(87,`code`),hw(88,`min-0`),ul(),hw(89,` and
          `),Pi(90,`code`),hw(91,`max-100`),ul(),hw(92,`, respectively.
          You may specify new values for those using the `),Pi(93,`code`),hw(94,`min`),ul(),hw(95,` and
          `),Pi(96,`code`),hw(97,`max`),ul(),hw(98,` attributes.
        `),ul(),hw(99,`
        `),Pi(100,`app-docs-example`,10),hw(101,`
          `),Pi(102,`label`,11),hw(103,`Example range`),ul(),hw(104,`
          `),_h(105,`input`,12),hw(106,`
        `),ul(),hw(107,`
      `),ul(),hw(108,`
    `),ul(),hw(109,`
  `),ul(),hw(110,`
  `),Pi(111,`c-col`,0),hw(112,`
    `),Pi(113,`c-card`,2),hw(114,`
      `),Pi(115,`c-card-header`),hw(116,`
        `),Pi(117,`strong`),hw(118,`Angular Range`),ul(),hw(119,` `),Pi(120,`small`),hw(121,`Steps`),ul(),hw(122,`
      `),ul(),hw(123,`
      `),Pi(124,`c-card-body`),hw(125,`
        `),Pi(126,`p`,3),hw(127,`
          By default, range inputs "snap" to integer values. To change
          this, you can specify a `),Pi(128,`code`),hw(129,`step`),ul(),hw(130,` value. In the example below,
          we double the number of steps by using
          `),Pi(131,`code`),hw(132,`step="0.5"`),ul(),hw(133,`.
        `),ul(),hw(134,`
        `),Pi(135,`app-docs-example`,13),hw(136,`
          `),Pi(137,`label`,14),hw(138,`Example range`),ul(),hw(139,`
          `),_h(140,`input`,15),hw(141,`
        `),ul(),hw(142,`
      `),ul(),hw(143,`
    `),ul(),hw(144,`
  `),ul(),hw(145,`
`),ul())},dependencies:[V1,sy,Qi,ey,Ji,k,j1,k1,c],encapsulation:2})}};export{S as RangesComponent};