(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RcYJ:function(t,i,s){"use strict";s.r(i),s.d(i,"ComicsModule",(function(){return y}));var n=s("ofXK"),o=s("dlKe"),c=s("tyNb"),e=s("XNiG"),r=s("Kj3r"),l=s("fXoL"),a=s("1owq"),h=s("OLK0"),b=s("wnr6");function d(t,i){if(1&t&&(l.Gb(0,"div",7),l.Eb(1,"ngx-card-item",8),l.Fb()),2&t){const t=i.$implicit;l.ub(1),l.Tb("item",t)}}function f(t,i){1&t&&(l.Gb(0,"div",7),l.Eb(1,"ngx-card-item-loading"),l.Fb())}function u(t,i){1&t&&(l.Gb(0,"div",9),l.Eb(1,"img",10),l.Fb())}const m=function(){return[1,2,3,4]};let p=(()=>{class t{constructor(t){this.marvelService=t,this.comics=[],this.limit=20,this.offset=0,this.total=0,this.throttle=300,this.scrollDistance=1,this.scrollUpDistance=2,this.isLoading=!1,this.$searchText=new e.a}ngOnInit(){this.loadMoreComics(),this.$searchText.pipe(Object(r.a)(600)).subscribe(t=>{this.comics=[],this.limit=20,this.offset=0,this.searchText=t,this.loadMoreComics(!1)})}loadMoreComics(t){if(t){if(this.comics.length===this.total)return;this.offset+=1}this.subscription&&this.subscription.unsubscribe(),this.isLoading=!0,this.marvelService.loadComics(this.limit,this.offset,this.searchText).subscribe(t=>{this.isLoading=!1,this.total=t.total,this.comics=[...this.comics,...t.results]})}}return t.\u0275fac=function(i){return new(i||t)(l.Db(a.a))},t.\u0275cmp=l.xb({type:t,selectors:[["marvel-comics"]],decls:9,vars:8,consts:[[1,"form-group"],["type","text","placeholder","Title start with",1,"form-control",3,"input"],["searchField",""],["infinite-scroll","",1,"row",3,"infiniteScrollDistance","infiniteScrollUpDistance","infiniteScrollThrottle","scrolled"],["class","col-md-6",4,"ngFor","ngForOf"],[1,"row",3,"hidden"],["class","not-found-comics d-flex justify-content-center",4,"ngIf"],[1,"col-md-6"],[3,"item"],[1,"not-found-comics","d-flex","justify-content-center"],["src","assets/not-found.gif","alt","not-found",1,"mt-2"]],template:function(t,i){if(1&t){const t=l.Hb();l.Gb(0,"div"),l.Gb(1,"div",0),l.Gb(2,"input",1,2),l.Mb("input",(function(){l.Zb(t);const s=l.Yb(3);return i.$searchText.next(s.value)})),l.Fb(),l.Fb(),l.Fb(),l.Gb(4,"div",3),l.Mb("scrolled",(function(){return i.loadMoreComics(!0)})),l.cc(5,d,2,1,"div",4),l.Fb(),l.Gb(6,"div",5),l.cc(7,f,2,0,"div",4),l.Fb(),l.cc(8,u,2,0,"div",6)}2&t&&(l.ub(4),l.Tb("infiniteScrollDistance",i.scrollDistance)("infiniteScrollUpDistance",i.scrollUpDistance)("infiniteScrollThrottle",i.throttle),l.ub(1),l.Tb("ngForOf",i.comics),l.ub(1),l.Tb("hidden",!i.isLoading),l.ub(1),l.Tb("ngForOf",l.Vb(7,m)),l.ub(1),l.Tb("ngIf",!i.isLoading&&!i.comics.length))},directives:[o.a,n.j,n.k,h.a,b.a],styles:[".not-found-comics[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:200px;width:auto}"]}),t})();var g=s("t1qA");const v=[{path:"",component:p},{path:":id",component:s("Stt1").a,data:{type:g.a.COMICS}},{path:"**",redirectTo:"",pathMatch:"full"}];let w=(()=>{class t{}return t.\u0275mod=l.Bb({type:t}),t.\u0275inj=l.Ab({factory:function(i){return new(i||t)},imports:[[c.e.forChild(v)],c.e]}),t})();var T=s("ra9W"),x=s("rIhQ"),F=s("pEs7");let y=(()=>{class t{}return t.\u0275mod=l.Bb({type:t}),t.\u0275inj=l.Ab({factory:function(i){return new(i||t)},providers:[],imports:[[n.c,w,o.b,T.a,x.a,F.a]]}),t})()}}]);