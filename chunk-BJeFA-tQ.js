import{Jn as fl,at as Lh,ht as ND,pr as ji,qt as TC}from"./chunk-CNvvMoDe.js";import{D as K1,Dn as uy,Gt as j1,T as Ji,U as Qi,jn as vy,zn as z1}from"./main-KR47Z6Z4.js";import{i as k}from"./chunk-BoQ4iLTD.js";import{t as c}from"./chunk-CqpfDRQx.js";var S=class m{static{this.ɵfac=function(a){return new(a||m)}}static{this.ɵcmp=ND({type:m,selectors:[[`app-ranges`]],decls:146,vars:0,consts:[[`xs`,`12`],[`href`,`forms/range`,`title`,`Range`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`forms/range`],[`cLabel`,``,`for`,`customRange1`],[`cFormControl`,``,`id`,`customRange1`,`type`,`range`],[`href`,`forms/range#disabled`],[`cLabel`,``,`for`,`disabledRange`],[`cFormControl`,``,`disabled`,``,`id`,`disabledRange`,`type`,`range`],[`href`,`forms/range#min-and-max`],[`cLabel`,``,`for`,`customRange2`],[`cFormControl`,``,`id`,`customRange2`,`max`,`5`,`min`,`0`,`type`,`range`,`value`,`3`],[`href`,`forms/range#steps`],[`cLabel`,``,`for`,`customRange3`],[`cFormControl`,``,`id`,`customRange3`,`max`,`5`,`min`,`0`,`step`,`0.5`,`type`,`range`,`value`,`3`]],template:function(a,f){a&1&&(ji(0,`c-row`),TC(1,`
  `),ji(2,`c-col`,0),TC(3,`
    `),Lh(4,`app-docs-components`,1),TC(5,`
    `),ji(6,`c-card`,2),TC(7,`
      `),ji(8,`c-card-header`),TC(9,`
        `),ji(10,`strong`),TC(11,`Angular Range`),fl(),TC(12,` `),Lh(13,`small`),TC(14,`
      `),fl(),TC(15,`
      `),ji(16,`c-card-body`),TC(17,`
        `),ji(18,`p`,3),TC(19,`
          Create custom `),ji(20,`code`),TC(21,`<input type="range">`),fl(),TC(22,` controls
          with `),ji(23,`code`),TC(24,`<input cFormControl type="range">`),fl(),TC(25,`.
        `),fl(),TC(26,`
        `),ji(27,`app-docs-example`,4),TC(28,`
          `),ji(29,`label`,5),TC(30,`Example range`),fl(),TC(31,`
          `),Lh(32,`input`,6),TC(33,`
        `),fl(),TC(34,`
      `),fl(),TC(35,`
    `),fl(),TC(36,`
  `),fl(),TC(37,`
  `),ji(38,`c-col`,0),TC(39,`
    `),ji(40,`c-card`,2),TC(41,`
      `),ji(42,`c-card-header`),TC(43,`
        `),ji(44,`strong`),TC(45,`Angular Range`),fl(),TC(46,` `),ji(47,`small`),TC(48,`Disabled`),fl(),TC(49,`
      `),fl(),TC(50,`
      `),ji(51,`c-card-body`),TC(52,`
        `),ji(53,`p`,3),TC(54,`
          Add the `),ji(55,`code`),TC(56,`disabled`),fl(),TC(57,` boolean attribute on an input to give it
          a grayed out appearance and remove pointer events.
        `),fl(),TC(58,`
        `),ji(59,`app-docs-example`,7),TC(60,`
          `),ji(61,`label`,8),TC(62,`Disabled range`),fl(),TC(63,`
          `),Lh(64,`input`,9),TC(65,`
        `),fl(),TC(66,`
      `),fl(),TC(67,`
    `),fl(),TC(68,`
  `),fl(),TC(69,`
  `),ji(70,`c-col`,0),TC(71,`
    `),ji(72,`c-card`,2),TC(73,`
      `),ji(74,`c-card-header`),TC(75,`
        `),ji(76,`strong`),TC(77,`Angular Range`),fl(),TC(78,` `),ji(79,`small`),TC(80,`Min and max`),fl(),TC(81,`
      `),fl(),TC(82,`
      `),ji(83,`c-card-body`),TC(84,`
        `),ji(85,`p`,3),TC(86,`
          Range inputs have implicit values for `),ji(87,`code`),TC(88,`min-0`),fl(),TC(89,` and
          `),ji(90,`code`),TC(91,`max-100`),fl(),TC(92,`, respectively.
          You may specify new values for those using the `),ji(93,`code`),TC(94,`min`),fl(),TC(95,` and
          `),ji(96,`code`),TC(97,`max`),fl(),TC(98,` attributes.
        `),fl(),TC(99,`
        `),ji(100,`app-docs-example`,10),TC(101,`
          `),ji(102,`label`,11),TC(103,`Example range`),fl(),TC(104,`
          `),Lh(105,`input`,12),TC(106,`
        `),fl(),TC(107,`
      `),fl(),TC(108,`
    `),fl(),TC(109,`
  `),fl(),TC(110,`
  `),ji(111,`c-col`,0),TC(112,`
    `),ji(113,`c-card`,2),TC(114,`
      `),ji(115,`c-card-header`),TC(116,`
        `),ji(117,`strong`),TC(118,`Angular Range`),fl(),TC(119,` `),ji(120,`small`),TC(121,`Steps`),fl(),TC(122,`
      `),fl(),TC(123,`
      `),ji(124,`c-card-body`),TC(125,`
        `),ji(126,`p`,3),TC(127,`
          By default, range inputs "snap" to integer values. To change
          this, you can specify a `),ji(128,`code`),TC(129,`step`),fl(),TC(130,` value. In the example below,
          we double the number of steps by using
          `),ji(131,`code`),TC(132,`step="0.5"`),fl(),TC(133,`.
        `),fl(),TC(134,`
        `),ji(135,`app-docs-example`,13),TC(136,`
          `),ji(137,`label`,14),TC(138,`Example range`),fl(),TC(139,`
          `),Lh(140,`input`,15),TC(141,`
        `),fl(),TC(142,`
      `),fl(),TC(143,`
    `),fl(),TC(144,`
  `),fl(),TC(145,`
`),fl())},dependencies:[K1,vy,Qi,uy,Ji,k,z1,j1,c],encapsulation:2})}};export{S as RangesComponent};