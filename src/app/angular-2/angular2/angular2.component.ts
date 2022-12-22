import { Component } from '@angular/core';

@Component({
  selector: 'app-angular2',
  templateUrl: './angular2.component.html',
  styleUrls: ['./angular2.component.css']
})
export class Angular2Component {

  features = [{
    'name': 'Components in and Controllers out',
    'desc': `Earlier version of Angular i.e. Angular or Angular 1.x worked in project using Controllers now in Angular 2
    its work around changed to Components. In real sense, Controllers still exist as one part of what we are
    calling a Component. The Component is composed and has a View and a Controller. The View is what we have
    HTML template while Controller in actual the JavaScript behaviour.`,
    'command': 'ng generate component my-component'
  }]
}
