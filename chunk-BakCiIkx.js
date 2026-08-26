import{D as Ew,Lt as Rh,Nn as dl,kt as Pi,p as CD}from"./chunk-q4Rs6eDf.js";import{G as Qi,O as Ji,at as V1,dt as Y1,hn as py,tt as U1,zn as yy}from"./main-IYLEVGTX.js";import{i as k}from"./chunk-BQWFyHvh.js";import{t as c}from"./chunk-DJv5g611.js";var S=class m{static{this.ɵfac=function(a){return new(a||m)}}static{this.ɵcmp=CD({type:m,selectors:[[`app-ranges`]],decls:146,vars:0,consts:[[`xs`,`12`],[`href`,`forms/range`,`title`,`Range`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`forms/range`],[`cLabel`,``,`for`,`customRange1`],[`cFormControl`,``,`id`,`customRange1`,`type`,`range`],[`href`,`forms/range#disabled`],[`cLabel`,``,`for`,`disabledRange`],[`cFormControl`,``,`disabled`,``,`id`,`disabledRange`,`type`,`range`],[`href`,`forms/range#min-and-max`],[`cLabel`,``,`for`,`customRange2`],[`cFormControl`,``,`id`,`customRange2`,`max`,`5`,`min`,`0`,`type`,`range`,`value`,`3`],[`href`,`forms/range#steps`],[`cLabel`,``,`for`,`customRange3`],[`cFormControl`,``,`id`,`customRange3`,`max`,`5`,`min`,`0`,`step`,`0.5`,`type`,`range`,`value`,`3`]],template:function(a,f){a&1&&(Pi(0,`c-row`),Ew(1,`
  `),Pi(2,`c-col`,0),Ew(3,`
    `),Rh(4,`app-docs-components`,1),Ew(5,`
    `),Pi(6,`c-card`,2),Ew(7,`
      `),Pi(8,`c-card-header`),Ew(9,`
        `),Pi(10,`strong`),Ew(11,`Angular Range`),dl(),Ew(12,` `),Rh(13,`small`),Ew(14,`
      `),dl(),Ew(15,`
      `),Pi(16,`c-card-body`),Ew(17,`
        `),Pi(18,`p`,3),Ew(19,`
          Create custom `),Pi(20,`code`),Ew(21,`<input type="range">`),dl(),Ew(22,` controls
          with `),Pi(23,`code`),Ew(24,`<input cFormControl type="range">`),dl(),Ew(25,`.
        `),dl(),Ew(26,`
        `),Pi(27,`app-docs-example`,4),Ew(28,`
          `),Pi(29,`label`,5),Ew(30,`Example range`),dl(),Ew(31,`
          `),Rh(32,`input`,6),Ew(33,`
        `),dl(),Ew(34,`
      `),dl(),Ew(35,`
    `),dl(),Ew(36,`
  `),dl(),Ew(37,`
  `),Pi(38,`c-col`,0),Ew(39,`
    `),Pi(40,`c-card`,2),Ew(41,`
      `),Pi(42,`c-card-header`),Ew(43,`
        `),Pi(44,`strong`),Ew(45,`Angular Range`),dl(),Ew(46,` `),Pi(47,`small`),Ew(48,`Disabled`),dl(),Ew(49,`
      `),dl(),Ew(50,`
      `),Pi(51,`c-card-body`),Ew(52,`
        `),Pi(53,`p`,3),Ew(54,`
          Add the `),Pi(55,`code`),Ew(56,`disabled`),dl(),Ew(57,` boolean attribute on an input to give it
          a grayed out appearance and remove pointer events.
        `),dl(),Ew(58,`
        `),Pi(59,`app-docs-example`,7),Ew(60,`
          `),Pi(61,`label`,8),Ew(62,`Disabled range`),dl(),Ew(63,`
          `),Rh(64,`input`,9),Ew(65,`
        `),dl(),Ew(66,`
      `),dl(),Ew(67,`
    `),dl(),Ew(68,`
  `),dl(),Ew(69,`
  `),Pi(70,`c-col`,0),Ew(71,`
    `),Pi(72,`c-card`,2),Ew(73,`
      `),Pi(74,`c-card-header`),Ew(75,`
        `),Pi(76,`strong`),Ew(77,`Angular Range`),dl(),Ew(78,` `),Pi(79,`small`),Ew(80,`Min and max`),dl(),Ew(81,`
      `),dl(),Ew(82,`
      `),Pi(83,`c-card-body`),Ew(84,`
        `),Pi(85,`p`,3),Ew(86,`
          Range inputs have implicit values for `),Pi(87,`code`),Ew(88,`min-0`),dl(),Ew(89,` and
          `),Pi(90,`code`),Ew(91,`max-100`),dl(),Ew(92,`, respectively.
          You may specify new values for those using the `),Pi(93,`code`),Ew(94,`min`),dl(),Ew(95,` and
          `),Pi(96,`code`),Ew(97,`max`),dl(),Ew(98,` attributes.
        `),dl(),Ew(99,`
        `),Pi(100,`app-docs-example`,10),Ew(101,`
          `),Pi(102,`label`,11),Ew(103,`Example range`),dl(),Ew(104,`
          `),Rh(105,`input`,12),Ew(106,`
        `),dl(),Ew(107,`
      `),dl(),Ew(108,`
    `),dl(),Ew(109,`
  `),dl(),Ew(110,`
  `),Pi(111,`c-col`,0),Ew(112,`
    `),Pi(113,`c-card`,2),Ew(114,`
      `),Pi(115,`c-card-header`),Ew(116,`
        `),Pi(117,`strong`),Ew(118,`Angular Range`),dl(),Ew(119,` `),Pi(120,`small`),Ew(121,`Steps`),dl(),Ew(122,`
      `),dl(),Ew(123,`
      `),Pi(124,`c-card-body`),Ew(125,`
        `),Pi(126,`p`,3),Ew(127,`
          By default, range inputs "snap" to integer values. To change
          this, you can specify a `),Pi(128,`code`),Ew(129,`step`),dl(),Ew(130,` value. In the example below,
          we double the number of steps by using
          `),Pi(131,`code`),Ew(132,`step="0.5"`),dl(),Ew(133,`.
        `),dl(),Ew(134,`
        `),Pi(135,`app-docs-example`,13),Ew(136,`
          `),Pi(137,`label`,14),Ew(138,`Example range`),dl(),Ew(139,`
          `),Rh(140,`input`,15),Ew(141,`
        `),dl(),Ew(142,`
      `),dl(),Ew(143,`
    `),dl(),Ew(144,`
  `),dl(),Ew(145,`
`),dl())},dependencies:[Y1,yy,Qi,py,Ji,k,V1,U1,c],encapsulation:2})}};export{S as RangesComponent};