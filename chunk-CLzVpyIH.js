import{A as Fw,Jn as fl,Kt as T,Pr as qh,Q as Ju,Rr as rE,_i as yl,_n as Xu,at as Lh,ht as ND,l as Aw,ln as Ww,m as Ch,pi as xw,pn as XE,pr as ji,qt as TC,vn as Xw,wt as Oh,zt as Rw}from"./chunk-CNvvMoDe.js";import{D as K1,Dn as uy,Pt as f1,T as Ji,U as Qi,Wt as iy,_t as a1,jn as vy,pn as qa,x as It,yn as s1}from"./main-KR47Z6Z4.js";import{i as k}from"./chunk-BoQ4iLTD.js";import{t as c}from"./chunk-CqpfDRQx.js";function N(t,a){if(t&1){let o=Fw();TC(0,`
                `),ji(1,`button`,19),qh(`click`,function(){Ju(o),Ww();return Xu(Xw(24).toggleItem())}),TC(2,`
                  Accordion item #0
                `),fl(),TC(3,`
              `)}if(t&2){Ww();let o=Xw(24);XE(),Oh(`collapsed`,!o.visible)}}function F(t,a){if(t&1&&(TC(0,`
                `),Lh(1,`div`,20),TC(2,`
              `)),t&2){let o=Ww();XE(),Oh(`innerHTML`,o.getAccordionBodyText(`first`),rE)(`gradient`,!0)}}function j(t,a){if(t&1){let o=Fw();TC(0,`
                `),ji(1,`button`,21),qh(`click`,function(){Ju(o),Ww();return Xu(Xw(32).toggleItem())}),TC(2,`
                  Accordion item #1
                `),fl(),TC(3,`
              `)}if(t&2){Ww();let o=Xw(32);XE(),Oh(`collapsed`,!o.visible)}}function P(t,a){t&1&&(TC(0,`
                `),ji(1,`div`,22),TC(2,`
                  `),ji(3,`strong`),TC(4,`This is the
                    `),ji(5,`mark`),TC(6,`#second`),fl(),TC(7,`
                    item accordion body.`),fl(),TC(8,` It is hidden by
                  default, until the collapse plugin adds the appropriate classes that we use to
                  style each element. These classes control the overall appearance, as well as
                  the showing and hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also worth noting
                  that just about any HTML can go within the `),ji(9,`code`),TC(10,`.accordion-body`),fl(),TC(11,`,
                  though the transition does limit overflow.
                `),fl(),TC(12,`
              `))}function Y(t,a){if(t&1){let o=Fw();TC(0,`
                `),ji(1,`button`,21),qh(`click`,function(){Ju(o),Ww();return Xu(Xw(40).toggleItem())}),TC(2,`
                  Accordion item #2
                `),fl(),TC(3,`
              `)}if(t&2){Ww();let o=Xw(40);XE(),Oh(`collapsed`,!o.visible)}}function R(t,a){if(t&1&&(TC(0,`
                `),ji(1,`div`,22),TC(2,`
                  `),Lh(3,`span`,23),TC(4,`
                `),fl(),TC(5,`
              `)),t&2){let o=Ww();XE(3),Oh(`innerHTML`,o.getAccordionBodyText(`third`),rE)}}function q(t,a){t&1&&TC(0,`
                Accordion item #0
              `)}function G(t,a){if(t&1&&(TC(0,`
                `),Lh(1,`span`,23),TC(2,`
              `)),t&2){let o=Ww();XE(),Oh(`innerHTML`,o.getAccordionBodyText(`first`),rE)}}function J(t,a){t&1&&TC(0,`
                Accordion item #1
              `)}function K(t,a){if(t&1&&(TC(0,`
                `),Lh(1,`span`,23),TC(2,`
              `)),t&2){let o=Ww();XE(),Oh(`innerHTML`,o.getAccordionBodyText(`second`),rE)}}function Q(t,a){t&1&&TC(0,`
                Accordion item #2
              `)}function U(t,a){if(t&1&&(TC(0,`
                `),Lh(1,`span`,23),TC(2,`
              `)),t&2){let o=Ww();XE(),Oh(`innerHTML`,o.getAccordionBodyText(`third`),rE)}}function W(t,a){if(t&1&&TC(0),t&2){let o=Ww().$index;yl(`
                  Custom Accordion item #`,o,`
                `)}}function X(t,a){if(t&1&&(TC(0,`
                  `),ji(1,`small`)(2,`i`),TC(3),fl()(),TC(4,`
                  `),Lh(5,`span`,23),TC(6,`
                `)),t&2){let o=Ww().$index,x=Ww();XE(3),yl(``,o,`.`),XE(2),Oh(`innerHTML`,x.getAccordionBodyText(o),rE)}}function Z(t,a){if(t&1&&(TC(0,`
              `),ji(1,`c-accordion-item`,9),TC(2,`
                `),Ch(3,W,1,1,`ng-template`,15),TC(4,`
                `),Ch(5,X,7,2,`ng-template`,16),TC(6,`
              `),fl(),TC(7,`
            `)),t&2){let o=a.$index;XE(),Oh(`visible`,o===1)}}var $=class t{constructor(){this.sanitizer=T(qa);this.items=[1,2,3,4]}getAccordionBodyText(a){let o=`
      <strong>This is the <mark>#${a}</mark> item accordion body.</strong> It is hidden by
      default, until the collapse plugin adds the appropriate classes that we use to
      style each element. These classes control the overall appearance, as well as
      the showing and hiding via CSS transitions. You can modify any of this with
      custom CSS or overriding our default variables. It&#39;s also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>,
      though the transition does limit overflow.
    `;return this.sanitizer.bypassSecurityTrustHtml(o)}static{this.ɵfac=function(o){return new(o||t)}}static{this.ɵcmp=ND({type:t,selectors:[[`app-accordions`]],decls:126,vars:5,consts:[[`item0`,`cAccordionItem`],[`item1`,`cAccordionItem`],[`item2`,`cAccordionItem`],[`xs`,`12`],[`href`,`components/accordion`,`title`,`Accordion`],[1,`mb-4`],[1,`text-body-secondary`,`small`],[`href`,`components/accordion`],[1,`shadow`,`rounded-2`,3,`alwaysOpen`],[3,`visible`],[`cTemplateId`,`accordionHeaderTemplate`],[`cTemplateId`,`accordionBodyTemplate`],[`href`,`components/accordion#flush`],[3,`flush`],[`visible`,``],[`cTemplateId`,`accordionHeader`],[`cTemplateId`,`accordionBody`],[`href`,`components/accordion#always-open`],[`alwaysOpen`,``,1,`shadow`,`accordion-custom`,`rounded-2`],[`cAccordionButton`,``,`cBgColor`,`info`,3,`click`,`collapsed`],[`cBgColor`,`info`,1,`accordion-body`,3,`innerHTML`,`gradient`],[`cAccordionButton`,``,3,`click`,`collapsed`],[1,`accordion-body`],[3,`innerHTML`]],template:function(o,x){o&1&&(ji(0,`c-row`),TC(1,`
  `),ji(2,`c-col`,3),TC(3,`
    `),Lh(4,`app-docs-components`,4),TC(5,`
    `),ji(6,`c-card`,5),TC(7,`
      `),ji(8,`c-card-header`),TC(9,`
        `),ji(10,`strong`),TC(11,`Angular Accordion`),fl(),TC(12,`
      `),fl(),TC(13,`
      `),ji(14,`c-card-body`),TC(15,`
        `),ji(16,`p`,6),TC(17,`
          Click the accordions below to expand/collapse the accordion content.
        `),fl(),TC(18,`
        `),ji(19,`app-docs-example`,7),TC(20,`
          `),ji(21,`c-accordion`,8),TC(22,`
            `),ji(23,`c-accordion-item`,9,0),TC(25,`
              `),Ch(26,N,4,1,`ng-template`,10),TC(27,`
              `),Ch(28,F,3,2,`ng-template`,11),TC(29,`
            `),fl(),TC(30,`
            `),ji(31,`c-accordion-item`,9,1),TC(33,`
              `),Ch(34,j,4,1,`ng-template`,10),TC(35,`
              `),Ch(36,P,13,0,`ng-template`,11),TC(37,`
            `),fl(),TC(38,`
            `),ji(39,`c-accordion-item`,9,2),TC(41,`
              `),Ch(42,Y,4,1,`ng-template`,10),TC(43,`
              `),Ch(44,R,6,1,`ng-template`,11),TC(45,`
            `),fl(),TC(46,`
          `),fl(),TC(47,`
        `),fl(),TC(48,`
      `),fl(),TC(49,`
    `),fl(),TC(50,`
    `),ji(51,`c-card`,5),TC(52,`
      `),ji(53,`c-card-header`),TC(54,`
        `),ji(55,`strong`),TC(56,`Angular Accordion`),fl(),TC(57,` flush
      `),fl(),TC(58,`
      `),ji(59,`c-card-body`),TC(60,`
        `),ji(61,`p`,6),TC(62,`
          Add `),ji(63,`code`),TC(64,`flush`),fl(),TC(65,` to remove the default `),ji(66,`code`),TC(67,`background-color`),fl(),TC(68,`, some
          borders, and some rounded corners to render accordions edge-to-edge with their parent
          container.
        `),fl(),TC(69,`
        `),ji(70,`app-docs-example`,12),TC(71,`
          `),ji(72,`c-accordion`,13),TC(73,`
            `),ji(74,`c-accordion-item`,14),TC(75,`
              `),Ch(76,q,1,0,`ng-template`,15),TC(77,`
              `),Ch(78,G,3,1,`ng-template`,16),TC(79,`
            `),fl(),TC(80,`
            `),ji(81,`c-accordion-item`),TC(82,`
              `),Ch(83,J,1,0,`ng-template`,15),TC(84,`
              `),Ch(85,K,3,1,`ng-template`,16),TC(86,`
            `),fl(),TC(87,`
            `),ji(88,`c-accordion-item`),TC(89,`
              `),Ch(90,Q,1,0,`ng-template`,15),TC(91,`
              `),Ch(92,U,3,1,`ng-template`,16),TC(93,`
            `),fl(),TC(94,`
          `),fl(),TC(95,`
        `),fl(),TC(96,`
      `),fl(),TC(97,`
    `),fl(),TC(98,`
    `),ji(99,`c-card`,5),TC(100,`
      `),ji(101,`c-card-header`),TC(102,`
        `),ji(103,`strong`),TC(104,`Angular Accordion`),fl(),TC(105,` alwaysOpen
      `),fl(),TC(106,`
      `),ji(107,`c-card-body`),TC(108,`
        `),ji(109,`p`,6),TC(110,`
          Add `),ji(111,`code`),TC(112,`alwaysOpen`),fl(),TC(113,` property to make accordion items stay open when another
          item is opened.
        `),fl(),TC(114,`
        `),ji(115,`app-docs-example`,17),TC(116,`
          `),ji(117,`c-accordion`,18),TC(118,`
            `),Aw(119,Z,8,1,null,null,xw),fl(),TC(121,`
        `),fl(),TC(122,`
      `),fl(),TC(123,`
    `),fl(),TC(124,`
  `),fl(),TC(125,`
`),fl()),o&2&&(XE(21),Oh(`alwaysOpen`,!1),XE(2),Oh(`visible`,!1),XE(8),Oh(`visible`,!1),XE(8),Oh(`visible`,!1),XE(33),Oh(`flush`,!0),XE(47),Rw(x.items))},dependencies:[K1,vy,Qi,uy,Ji,k,s1,a1,It,iy,f1,c],styles:[`[_nghost-%COMP%]     .accordion-custom .accordion-button{background-color:var(--%NS%cui-dark);color:var(--%NS%cui-white)}[_nghost-%COMP%]     .accordion-custom .accordion-button:after{--%NS%cui-accordion-btn-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgba%28255, 255, 255, 0.87%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");--%NS%cui-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgba%28255, 255, 255, 0.87%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")}`]})}};export{$ as AccordionsComponent};