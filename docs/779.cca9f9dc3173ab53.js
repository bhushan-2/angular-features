"use strict";(self.webpackChunkangular_versions=self.webpackChunkangular_versions||[]).push([[779],{3779:(m,l,r)=>{r.r(l),r.d(l,{Angular9Module:()=>n});var c=r(6895),d=r(8478),e=r(4650);const u=function(){return["/"]};class i{constructor(){this.ivyStr="\n  @Component({\n    selector: 'todos-cmp',\n    template: \n      <div *ngFor=\"let t of todos|async\">\n          {{t.description}}\n      </div>\n    \n  })\n  class TodosComponent {\n    todos: Observable<Todo[]> = this.store.pipe(select('todos'));\n    constructor(private store: Store<AppState>) {}\n  }",this.compiledStr='\n  var TodosComponent = /** @class */ (function () {\n    function TodosComponent(store) {\n      this.store = store;\n      this.todos = this.store.pipe(select(\'todos\'));\n    }\n    TodosComponent.ngComponentDef = defineComponent({\n      type: TodosComponent,\n      selectors: [["todos-cmp"]],\n      factory: function TodosComponent_Factory(t) {\n        return new (t || TodosComponent)(directiveInject(Store));\n      },\n      consts: 2,\n      vars: 3,\n      template: function TodosComponent_Template(rf, ctx) {\n        if (rf & 1) { /** create dom*/ \n          pipe(1, "async");\n          template(0, TodosComponent_div_Template_0, 2, 1, null, _c0);\n        } if (rf & 2) { /** create dom*/ \n          elementProperty(0, "ngForOf", bind(pipeBind1(1, 1, ctx.todos)));\n        }\n      },\n      encapsulation: 2\n    });\n    \n    return TodosComponent;\n  }());',this.cssSnippet='\n  <my-component style="color:red;" [style.color]="myColor" [style]="{color: myOtherColor}" myDirective></div>',this.customCSSSnippet='\n  <div [style.--main-border-color]=" \'#CCC\' ">\n  <p style="border: 1px solid var(--main-border-color)">hi</p>\n  </div>'}}i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-angular9"]],decls:72,vars:6,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-12","pd-0"],[1,"angular"],[1,"back",3,"routerLink"],[1,"row","features-scroll"],[1,"col-md-12"],[1,"feature"],[1,"terminal"],["src","./assets/tree-shaking.jpg",1,"tree-shaking"],["src","./assets/memory-footprint.jpg",1,"tree-shaking"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label"),e._uU(5,"Angular 9 Features"),e.qZA(),e.TgZ(6,"div"),e._uU(7,"(Released on Feb 2020)"),e.qZA(),e.TgZ(8,"div",4),e._uU(9," < Back"),e.qZA()()()(),e.TgZ(10,"div",5)(11,"div",6)(12,"div",7)(13,"label"),e._uU(14,"1. Ivy"),e.qZA(),e.TgZ(15,"p"),e._uU(16," With Angular 9, Ivy is the standard renderer. If a renderer is more efficient or easier to implement, that means you can ship less code because fewer instructions are required, and that\u2019s the purpose of Ivy.Ivy doesn\u2019t change the way Angular is used, but it does change how the app is generated. "),e.qZA(),e.TgZ(17,"p"),e._uU(18," Ivy yields much smaller JavaScript bundles, so Ivy solves Angular\u2019s bundle weaknesses. Ivy will be a game-changer because it brings Angular applications to a whole new level in terms of performance and size. "),e.qZA(),e.TgZ(19,"p"),e._uU(20,"The key idea behind Incremental DOM is every component gets compiled into a series of instructions. These instructions create DOM trees and update them in-place when the data changes."),e.qZA(),e.TgZ(21,"div",8)(22,"pre"),e._uU(23),e.qZA()(),e.TgZ(24,"p"),e._uU(25,"Will be compiled into:"),e.qZA(),e.TgZ(26,"div",8)(27,"pre"),e._uU(28),e.qZA()(),e._UZ(29,"br"),e.TgZ(30,"p"),e._uU(31,"The template function contains the instructions rendering and updating the DOM as they are rendering engine."),e.qZA(),e.TgZ(32,"h6"),e._uU(33,"Two main concepts of IVY"),e.qZA(),e.TgZ(34,"div"),e._uU(35,"1. "),e.TgZ(36,"b"),e._uU(37,"Tree shakable"),e.qZA()(),e.TgZ(38,"div"),e._uU(39,"It means removing unused pieces of your code, the framework does not interpret the component. Instead, the component references instructions. If it doesn\u2019t reference a particular instruction, which will never be used so we can omit the unused instruction from the bundle results in smaller bundles and faster load times."),e.qZA(),e._UZ(40,"br"),e.TgZ(41,"div"),e._UZ(42,"img",9),e.qZA(),e._UZ(43,"br"),e.TgZ(44,"div"),e._uU(45,"1. "),e.TgZ(46,"b"),e._uU(47,"Low Memory Footprint"),e.qZA()(),e.TgZ(48,"div"),e._uU(49," Incremental DOM doesn\u2019t need any memory to rerender the view if it doesn\u2019t change the DOM so it allocates the memory when the DOM nodes are added or removed. since most of render/template calls don\u2019t change anything result in huge memory savings."),e.qZA(),e._UZ(50,"br"),e.TgZ(51,"div"),e._UZ(52,"img",10),e.qZA()(),e.TgZ(53,"div",7)(54,"label"),e._uU(55,"2. Improved CSS class and style binding"),e.qZA(),e.TgZ(56,"p"),e._uU(57," The Ivy compiler and runtime provides improvements for handling styles. Previously, if an application contained competing definitions for a style, those styles would destructively replace each other. With Ivy, the styles are merged in a predictable way. "),e._UZ(58,"br"),e._uU(59," Consider the following template and component snippets: "),e.qZA(),e.TgZ(60,"div",8)(61,"pre"),e._uU(62),e.qZA()(),e._UZ(63,"br"),e.TgZ(64,"p"),e._uU(65," With version 9, you can manage your styles through a clear, consistent order of precedence that isn\u2019t dependent on timing. The most specific styles always have the highest precedence. For example, a binding to [style.color] overrides a conflicting binding to [style]. "),e.qZA(),e._UZ(66,"br"),e.TgZ(67,"p"),e._uU(68,"you can now also bind to CSS custom properties (also known as CSS variables)."),e.qZA(),e.TgZ(69,"div",8)(70,"pre"),e._uU(71),e.qZA()()()()()()),2&t&&(e.xp6(8),e.Q6J("routerLink",e.DdM(5,u)),e.xp6(15),e.Oqu(a.ivyStr),e.xp6(5),e.Oqu(a.compiledStr),e.xp6(34),e.Oqu(a.cssSnippet),e.xp6(9),e.Oqu(a.customCSSSnippet))},dependencies:[d.rH],styles:[".tree-shaking[_ngcontent-%COMP%]{width:500px}"]});const p=[{path:"",component:i}];class o{}o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.Bz.forChild(p),d.Bz]});class n{}n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,o]})}}]);