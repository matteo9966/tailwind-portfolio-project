"use strict";(self.webpackChunktailwind_portfolio_project=self.webpackChunktailwind_portfolio_project||[]).push([[779],{9875:(P,S,r)=>{r.d(S,{n:()=>F});var o=r(5861),c=r(4946),m=r(8645),l=r(4352),y=r(5211),d=r(8180),u=r(9360),v=r(8251),p=r(2420),b=r(975),M=r(1631),A=r(4829);function O(g,C){return C?D=>(0,y.z)(C.pipe((0,d.q)(1),function a(){return(0,u.e)((g,C)=>{g.subscribe((0,v.x)(C,p.Z))})}()),D.pipe(O(g))):(0,M.z)((D,i)=>(0,A.Xf)(g(D,i)).pipe((0,d.q)(1),(0,b.h)(D)))}var k=r(4825),x=r(2181);let F=(()=>{var g;class C{constructor(i){this.element=i,this.debounceTime=200,this.threshold=1,this.visible=new c.vpe,this.subject$=new m.x}ngOnInit(){this.createObserver()}ngAfterViewInit(){this.startObservingElements()}ngOnDestroy(){this.observer&&(this.observer.disconnect(),this.observer=void 0),this.subject$.next(null),this.subject$.complete()}isVisible(i){return new Promise(E=>{const h=new IntersectionObserver(([w])=>{E(w.intersectionRatio>0),h.disconnect()});h.observe(i)})}createObserver(){this.observer=new IntersectionObserver((h,w)=>{h.forEach(R=>{(h=>h.isIntersecting||h.intersectionRatio>0)(R)&&this.subject$.next({entry:R,observer:w})})},{rootMargin:"0px"})}startObservingElements(){var i=this;this.observer&&(this.observer.observe(this.element.nativeElement),this.subject$.pipe(function $(g,C=l.z){const D=(0,k.H)(g,C);return O(()=>D)}(this.debounceTime),(0,x.h)(Boolean)).subscribe(function(){var E=(0,o.Z)(function*({entry:h,observer:w}){const R=h.target;(yield i.isVisible(R))&&(i.visible.emit(R),w.unobserve(R))});return function(h){return E.apply(this,arguments)}}()))}}return(g=C).\u0275fac=function(i){return new(i||g)(c.Y36(c.SBq))},g.\u0275dir=c.lG2({type:g,selectors:[["","observeVisibility",""]],inputs:{debounceTime:"debounceTime",threshold:"threshold"},outputs:{visible:"visible"},standalone:!0}),C})()},3104:(P,S,r)=>{r.d(S,{c:()=>d});var o=r(4946),c=r(6825);const m=[(0,c.oB)({opacity:0,transform:"translateY(200px)"}),(0,c.jt)("300ms",(0,c.oB)({opacity:1,transform:"translateY(0)"}))];var l=r(9875),y=r(8180);let d=(()=>{var u;class v{constructor(){this.renderer=(0,o.f3M)(o.Qsj),this.element=(0,o.f3M)(o.SBq),this.animationBuilder=(0,o.f3M)(c._j),this.observeVisibility=(0,o.f3M)(l.n,{self:!0})}ngAfterViewInit(){this.renderer.setStyle(this.element.nativeElement,"opacity",0),this.observeVisibility.visible.asObservable().pipe((0,y.q)(1)).subscribe(a=>{this.runSlideIn()})}runSlideIn(){this.player&&this.player.destroy();const a=this.animationBuilder.build(m);this.player=a.create(this.element.nativeElement),this.player.play()}}return(u=v).\u0275fac=function(a){return new(a||u)},u.\u0275dir=o.lG2({type:u,selectors:[["","appSlideIn2",""]],standalone:!0,features:[o.zW0([l.n])]}),v})()},1687:(P,S,r)=>{r.d(S,{F:()=>m});var o=r(4352),c=r(4825);function m(l=0,y=o.z){return l<0&&(l=0),(0,c.H)(l,l,y)}},4825:(P,S,r)=>{r.d(S,{H:()=>y});var o=r(5592),c=r(4352),m=r(671);function y(d=0,u,v=c.P){let p=-1;return null!=u&&((0,m.K)(u)?v=u:p=u),new o.y(a=>{let b=function l(d){return d instanceof Date&&!isNaN(d)}(d)?+d-v.now():d;b<0&&(b=0);let M=0;return v.schedule(function(){a.closed||(a.next(M++),0<=p?this.schedule(void 0,p):a.complete())},b)})}},1993:(P,S,r)=>{r.d(S,{sL:()=>l});var o=r(4946),c=r(5592),m=r(9773);function l(n){n||((0,o.gHi)(l),n=(0,o.f3M)(o.ktI));const e=new c.y(t=>n.onDestroy(t.next.bind(t)));return t=>t.pipe((0,m.R)(e))}globalThis},5861:(P,S,r)=>{function o(m,l,y,d,u,v,p){try{var a=m[v](p),b=a.value}catch(M){return void y(M)}a.done?l(b):Promise.resolve(b).then(d,u)}function c(m){return function(){var l=this,y=arguments;return new Promise(function(d,u){var v=m.apply(l,y);function p(b){o(v,d,u,p,a,"next",b)}function a(b){o(v,d,u,p,a,"throw",b)}p(void 0)})}}r.d(S,{Z:()=>c})}}]);