import { Component } from '@angular/core';

@Component({
  selector: 'app-angular9',
  templateUrl: './angular9.component.html',
  styleUrls: ['./angular9.component.css']
})
export class Angular9Component {

  ivyStr = `
  @Component({
    selector: 'todos-cmp',
    template: 
      <div *ngFor="let t of todos|async">
          {{t.description}}
      </div>
    
  })
  class TodosComponent {
    todos: Observable<Todo[]> = this.store.pipe(select('todos'));
    constructor(private store: Store<AppState>) {}
  }`;

  compiledStr = `
  var TodosComponent = /** @class */ (function () {
    function TodosComponent(store) {
      this.store = store;
      this.todos = this.store.pipe(select('todos'));
    }
    TodosComponent.ngComponentDef = defineComponent({
      type: TodosComponent,
      selectors: [["todos-cmp"]],
      factory: function TodosComponent_Factory(t) {
        return new (t || TodosComponent)(directiveInject(Store));
      },
      consts: 2,
      vars: 3,
      template: function TodosComponent_Template(rf, ctx) {
        if (rf & 1) { /** create dom*/ 
          pipe(1, "async");
          template(0, TodosComponent_div_Template_0, 2, 1, null, _c0);
        } if (rf & 2) { /** create dom*/ 
          elementProperty(0, "ngForOf", bind(pipeBind1(1, 1, ctx.todos)));
        }
      },
      encapsulation: 2
    });
    
    return TodosComponent;
  }());`;

  cssSnippet = `
  <my-component style="color:red;" [style.color]="myColor" [style]="{color: myOtherColor}" myDirective></div>`;

  customCSSSnippet = `
  <div [style.--main-border-color]=" '#CCC' ">
  <p style="border: 1px solid var(--main-border-color)">hi</p>
  </div>`;
}
