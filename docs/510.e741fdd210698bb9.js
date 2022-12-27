"use strict";(self.webpackChunkangular_versions=self.webpackChunkangular_versions||[]).push([[510],{8510:(m,u,a)=>{a.r(u),a.d(u,{Angular5Module:()=>o});var s=a(6895),p=a(3329),e=a(4650);const d=function(){return["/"]};class i{constructor(){this.httpCommand="import { HttpClientModule } from '@angular/common/http';",this.exportAs="import { Component } from '@angular/core';\n\n  @Component({\n    selector: 'app-root',\n    templateUrl: './app.component.html',\n    styleUrls: ['./app.component.css'],\n    exportAs:'dashboard, logBoard'\n  })\n  export class AppComponent {\n    title = 'app';\n  }",this.currentDate=new Date,this.datePipe="<p>The current date & time is: {{ currentDate | date:'medium' }}</p>"}}i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-angular5"]],decls:41,vars:9,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-12","pd-0"],[1,"angular-5"],[1,"back",3,"routerLink"],[1,"row","features-scroll"],[1,"col-md-12"],[1,"feature"],[1,"terminal"]],template:function(t,l){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),e._uU(5,"Angular 5 Features"),e.qZA(),e.TgZ(6,"div"),e._uU(7,"(Released on Nov 2017)"),e.qZA(),e.TgZ(8,"div",4),e._uU(9,"< Back"),e.qZA()()()(),e.TgZ(10,"div",5)(11,"div",6)(12,"div",7)(13,"label"),e._uU(14,"1. HttpClient"),e.qZA(),e.TgZ(15,"p"),e._uU(16," The HttpClient was first introduced in 4.3 version and now the Angular team has made some improvements to this update with Angular 5.0. From this new version, developers are recommending HttpClient for all applications, and stop using the precious @angular/http library. "),e.qZA(),e.TgZ(17,"p"),e._uU(18,"To use the updated HttpClient, you should replace the HttpModule with HttpClientModule from @angular/common/http, inject the HttpClient service, and remove the map(res => rex.json()) calls that is no longer required."),e.qZA(),e.TgZ(19,"div",8)(20,"pre"),e._uU(21),e.qZA()()(),e.TgZ(22,"div",7)(23,"label"),e._uU(24,"2. Internationalized Number, Date, and Currency Pipes"),e.qZA(),e.TgZ(25,"p"),e._uU(26," Angular 5 ships with new number, date, and currency pipes that increase standardization across browsers and eliminate the need for i18n polyfills. The pipes rely on the CLDR to provide extensive locale support and configurations for any locales you want to support. To use the old pipes, you will have to import the DeprecatedI18NPipesModule after the CommonModule. "),e.qZA(),e.TgZ(27,"div",8)(28,"pre"),e._uU(29),e.qZA(),e.TgZ(30,"pre"),e._uU(31),e.ALo(32,"date"),e.qZA()()(),e.TgZ(33,"div",7)(34,"label"),e._uU(35,"3. Support for Multiple Export Alias in Angular 5"),e.qZA(),e.TgZ(36,"p"),e._uU(37," In Angular 5, you can now give multiple names to your components and directives while exporting. Exporting a component with multiple names can help your users migrate without breaking changes. "),e.qZA(),e.TgZ(38,"div",8)(39,"pre"),e._uU(40),e.qZA()()()()()()),2&t&&(e.xp6(8),e.Q6J("routerLink",e.DdM(8,d)),e.xp6(13),e.Oqu(l.httpCommand),e.xp6(8),e.Oqu(l.datePipe),e.xp6(2),e.hij("The current date & time is: ",e.xi3(32,5,l.currentDate,"medium"),""),e.xp6(9),e.Oqu(l.exportAs))},dependencies:[p.rH,s.uU],styles:[".angular-5[_ngcontent-%COMP%]{width:100%;padding:10px;background:#1976d2}.angular-5[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:16px;font-weight:600;color:#fff;margin-left:20px}.angular-5[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:12px;font-weight:400;color:#ccc;display:inline-block;margin-left:10px}"]});const c=[{path:"",component:i}];class n{}n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.Bz.forChild(c),p.Bz]});class o{}o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[s.ez,n]})}}]);