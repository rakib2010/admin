import{$ as Jv,D as Ew,E as Eh,Lt as Rh,Mt as QI,Nn as dl,_r as ml,c as Bh,cn as ZT,d as C,kt as Pi,o as Ah,on as Yu,p as CD,pt as NT,s as BT,sr as kT,tt as Ku,wn as bT,zt as ST}from"./chunk-q4Rs6eDf.js";import{G as Qi,O as Ji,Tt as c1,_n as qa,dn as oy,dt as Y1,fn as p1,hn as py,o as At,vt as a1,zn as yy}from"./main-IYLEVGTX.js";import{i as k}from"./chunk-BQWFyHvh.js";import{t as c}from"./chunk-DJv5g611.js";function N(t,a){if(t&1){let o=kT();Ew(0,`
                `),Pi(1,`button`,19),Bh(`click`,function(){Yu(o),BT();return Ku(ZT(24).toggleItem())}),Ew(2,`
                  Accordion item #0
                `),dl(),Ew(3,`
              `)}if(t&2){BT();let o=ZT(24);QI(),Ah(`collapsed`,!o.visible)}}function F(t,a){if(t&1&&(Ew(0,`
                `),Rh(1,`div`,20),Ew(2,`
              `)),t&2){let o=BT();QI(),Ah(`innerHTML`,o.getAccordionBodyText(`first`),Jv)(`gradient`,!0)}}function j(t,a){if(t&1){let o=kT();Ew(0,`
                `),Pi(1,`button`,21),Bh(`click`,function(){Yu(o),BT();return Ku(ZT(32).toggleItem())}),Ew(2,`
                  Accordion item #1
                `),dl(),Ew(3,`
              `)}if(t&2){BT();let o=ZT(32);QI(),Ah(`collapsed`,!o.visible)}}function P(t,a){t&1&&(Ew(0,`
                `),Pi(1,`div`,22),Ew(2,`
                  `),Pi(3,`strong`),Ew(4,`This is the
                    `),Pi(5,`mark`),Ew(6,`#second`),dl(),Ew(7,`
                    item accordion body.`),dl(),Ew(8,` It is hidden by
                  default, until the collapse plugin adds the appropriate classes that we use to
                  style each element. These classes control the overall appearance, as well as
                  the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting
                  that just about any HTML can go within the `),Pi(9,`code`),Ew(10,`.accordion-body`),dl(),Ew(11,`,
                  though the transition does limit overflow.
                `),dl(),Ew(12,`
              `))}function Y(t,a){if(t&1){let o=kT();Ew(0,`
                `),Pi(1,`button`,21),Bh(`click`,function(){Yu(o),BT();return Ku(ZT(40).toggleItem())}),Ew(2,`
                  Accordion item #2
                `),dl(),Ew(3,`
              `)}if(t&2){BT();let o=ZT(40);QI(),Ah(`collapsed`,!o.visible)}}function R(t,a){if(t&1&&(Ew(0,`
                `),Pi(1,`div`,22),Ew(2,`
                  `),Rh(3,`span`,23),Ew(4,`
                `),dl(),Ew(5,`
              `)),t&2){let o=BT();QI(3),Ah(`innerHTML`,o.getAccordionBodyText(`third`),Jv)}}function q(t,a){t&1&&Ew(0,`
                Accordion item #0
              `)}function G(t,a){if(t&1&&(Ew(0,`
                `),Rh(1,`span`,23),Ew(2,`
              `)),t&2){let o=BT();QI(),Ah(`innerHTML`,o.getAccordionBodyText(`first`),Jv)}}function J(t,a){t&1&&Ew(0,`
                Accordion item #1
              `)}function K(t,a){if(t&1&&(Ew(0,`
                `),Rh(1,`span`,23),Ew(2,`
              `)),t&2){let o=BT();QI(),Ah(`innerHTML`,o.getAccordionBodyText(`second`),Jv)}}function Q(t,a){t&1&&Ew(0,`
                Accordion item #2
              `)}function U(t,a){if(t&1&&(Ew(0,`
                `),Rh(1,`span`,23),Ew(2,`
              `)),t&2){let o=BT();QI(),Ah(`innerHTML`,o.getAccordionBodyText(`third`),Jv)}}function W(t,a){if(t&1&&Ew(0),t&2){let o=BT().$index;ml(`
                  Custom Accordion item #`,o,`
                `)}}function X(t,a){if(t&1&&(Ew(0,`
                  `),Pi(1,`small`)(2,`i`),Ew(3),dl()(),Ew(4,`
                  `),Rh(5,`span`,23),Ew(6,`
                `)),t&2){let o=BT().$index,x=BT();QI(3),ml(``,o,`.`),QI(2),Ah(`innerHTML`,x.getAccordionBodyText(o),Jv)}}function Z(t,a){if(t&1&&(Ew(0,`
              `),Pi(1,`c-accordion-item`,9),Ew(2,`
                `),Eh(3,W,1,1,`ng-template`,15),Ew(4,`
                `),Eh(5,X,7,2,`ng-template`,16),Ew(6,`
              `),dl(),Ew(7,`
            `)),t&2){let o=a.$index;QI(),Ah(`visible`,o===1)}}var $=class t{constructor(){this.sanitizer=C(qa);this.items=[1,2,3,4]}getAccordionBodyText(a){let o=`
      <strong>This is the <mark>#${a}</mark> item accordion body.</strong> It is hidden by
      default, until the collapse plugin adds the appropriate classes that we use to
      style each element. These classes control the overall appearance, as well as
      the showing and hiding via CSS transitions. You can modify any of this with
      custom CSS or overriding our default variables. It&#39;s also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>,
      though the transition does limit overflow.
    `;return this.sanitizer.bypassSecurityTrustHtml(o)}static{this.ɵfac=function(o){return new(o||t)}}static{this.ɵcmp=CD({type:t,selectors:[[`app-accordions`]],decls:126,vars:5,consts:[[`item0`,`cAccordionItem`],[`item1`,`cAccordionItem`],[`item2`,`cAccordionItem`],[`xs`,`12`],[`href`,`components/accordion`,`title`,`Accordion`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/accordion`],[1,`shadow`,`rounded-2`,3,`alwaysOpen`],[3,`visible`],[`cTemplateId`,`accordionHeaderTemplate`],[`cTemplateId`,`accordionBodyTemplate`],[`href`,`components/accordion#flush`],[3,`flush`],[`visible`,``],[`cTemplateId`,`accordionHeader`],[`cTemplateId`,`accordionBody`],[`href`,`components/accordion#always-open`],[`alwaysOpen`,``,1,`shadow`,`accordion-custom`,`rounded-2`],[`cAccordionButton`,``,`cBgColor`,`info`,3,`click`,`collapsed`],[`cBgColor`,`info`,1,`accordion-body`,3,`innerHTML`,`gradient`],[`cAccordionButton`,``,3,`click`,`collapsed`],[1,`accordion-body`],[3,`innerHTML`]],template:function(o,x){o&1&&(Pi(0,`c-row`),Ew(1,`
  `),Pi(2,`c-col`,3),Ew(3,`
    `),Rh(4,`app-docs-components`,4),Ew(5,`
    `),Pi(6,`c-card`,5),Ew(7,`
      `),Pi(8,`c-card-header`),Ew(9,`
        `),Pi(10,`strong`),Ew(11,`Angular Accordion`),dl(),Ew(12,`
      `),dl(),Ew(13,`
      `),Pi(14,`c-card-body`),Ew(15,`
        `),Pi(16,`p`,6),Ew(17,`
          Click the accordions below to expand/collapse the accordion content.
        `),dl(),Ew(18,`
        `),Pi(19,`app-docs-example`,7),Ew(20,`
          `),Pi(21,`c-accordion`,8),Ew(22,`
            `),Pi(23,`c-accordion-item`,9,0),Ew(25,`
              `),Eh(26,N,4,1,`ng-template`,10),Ew(27,`
              `),Eh(28,F,3,2,`ng-template`,11),Ew(29,`
            `),dl(),Ew(30,`
            `),Pi(31,`c-accordion-item`,9,1),Ew(33,`
              `),Eh(34,j,4,1,`ng-template`,10),Ew(35,`
              `),Eh(36,P,13,0,`ng-template`,11),Ew(37,`
            `),dl(),Ew(38,`
            `),Pi(39,`c-accordion-item`,9,2),Ew(41,`
              `),Eh(42,Y,4,1,`ng-template`,10),Ew(43,`
              `),Eh(44,R,6,1,`ng-template`,11),Ew(45,`
            `),dl(),Ew(46,`
          `),dl(),Ew(47,`
        `),dl(),Ew(48,`
      `),dl(),Ew(49,`
    `),dl(),Ew(50,`
    `),Pi(51,`c-card`,5),Ew(52,`
      `),Pi(53,`c-card-header`),Ew(54,`
        `),Pi(55,`strong`),Ew(56,`Angular Accordion`),dl(),Ew(57,` flush
      `),dl(),Ew(58,`
      `),Pi(59,`c-card-body`),Ew(60,`
        `),Pi(61,`p`,6),Ew(62,`
          Add `),Pi(63,`code`),Ew(64,`flush`),dl(),Ew(65,` to remove the default `),Pi(66,`code`),Ew(67,`background-color`),dl(),Ew(68,`, some
          borders, and some rounded corners to render accordions edge-to-edge with their parent
          container.
        `),dl(),Ew(69,`
        `),Pi(70,`app-docs-example`,12),Ew(71,`
          `),Pi(72,`c-accordion`,13),Ew(73,`
            `),Pi(74,`c-accordion-item`,14),Ew(75,`
              `),Eh(76,q,1,0,`ng-template`,15),Ew(77,`
              `),Eh(78,G,3,1,`ng-template`,16),Ew(79,`
            `),dl(),Ew(80,`
            `),Pi(81,`c-accordion-item`),Ew(82,`
              `),Eh(83,J,1,0,`ng-template`,15),Ew(84,`
              `),Eh(85,K,3,1,`ng-template`,16),Ew(86,`
            `),dl(),Ew(87,`
            `),Pi(88,`c-accordion-item`),Ew(89,`
              `),Eh(90,Q,1,0,`ng-template`,15),Ew(91,`
              `),Eh(92,U,3,1,`ng-template`,16),Ew(93,`
            `),dl(),Ew(94,`
          `),dl(),Ew(95,`
        `),dl(),Ew(96,`
      `),dl(),Ew(97,`
    `),dl(),Ew(98,`
    `),Pi(99,`c-card`,5),Ew(100,`
      `),Pi(101,`c-card-header`),Ew(102,`
        `),Pi(103,`strong`),Ew(104,`Angular Accordion`),dl(),Ew(105,` alwaysOpen
      `),dl(),Ew(106,`
      `),Pi(107,`c-card-body`),Ew(108,`
        `),Pi(109,`p`,6),Ew(110,`
          Add `),Pi(111,`code`),Ew(112,`alwaysOpen`),dl(),Ew(113,` property to make accordion items stay open when another
          item is opened.
        `),dl(),Ew(114,`
        `),Pi(115,`app-docs-example`,17),Ew(116,`
          `),Pi(117,`c-accordion`,18),Ew(118,`
            `),ST(119,Z,8,1,null,null,bT),dl(),Ew(121,`
        `),dl(),Ew(122,`
      `),dl(),Ew(123,`
    `),dl(),Ew(124,`
  `),dl(),Ew(125,`
`),dl()),o&2&&(QI(21),Ah(`alwaysOpen`,!1),QI(2),Ah(`visible`,!1),QI(8),Ah(`visible`,!1),QI(8),Ah(`visible`,!1),QI(33),Ah(`flush`,!0),QI(47),NT(x.items))},dependencies:[Y1,yy,Qi,py,Ji,k,a1,c1,At,oy,p1,c],styles:[`[_nghost-%COMP%]     .accordion-custom .accordion-button{background-color:var(--%NS%cui-dark);color:var(--%NS%cui-white)}[_nghost-%COMP%]     .accordion-custom .accordion-button:after{--%NS%cui-accordion-btn-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgba%28255, 255, 255, 0.87%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");--%NS%cui-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgba%28255, 255, 255, 0.87%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")}`]})}};export{$ as AccordionsComponent};