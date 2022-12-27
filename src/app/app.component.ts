import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Versions';
  panelOpenState = false;

  angularVersions = [
    { 'version': 'Angular 2', 'features': ['Components', 'Directives', 'Support for mobile or low end devices'] },
    { 'version': 'Angular 4', 'features': ['Animations'] },
    { 'version': 'Angular 5', 'features': ['HttpClient','Internationalized Pipes', 'Support for Multiple Export Alias in Angular 5'] },
    { 'version': 'Angular 6', 'features': ['Animations'] },
    { 'version': 'Angular 7', 'features': ['Animations'] },
    { 'version': 'Angular 8', 'features': ['Animations'] },
    { 'version': 'Angular 9', 'features': ['Animations'] },
    { 'version': 'Angular 10', 'features': ['Animations'] },
    { 'version': 'Angular 11', 'features': ['Animations'] },
    { 'version': 'Angular 12', 'features': ['Animations'] },
    { 'version': 'Angular 13', 'features': ['Animations'] },
    { 'version': 'Angular 14', 'features': ['Animations'] },
    { 'version': 'Angular 15', 'features': ['Animations'] }
  ]
}
