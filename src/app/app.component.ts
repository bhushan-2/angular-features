import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Versions';
  panelOpenState = false;
  isExpanded = false;

  angularVersions = [
    { 'version': 'Angular 2', 'route': 'angular2', 'features': ['Components', 'Directives', 'Support for mobile or low end devices'] },
    { 'version': 'Angular 4', 'route': 'angular4','features': ['Animations', 'ngIf with else', 'as keyword in for loop'] },
    { 'version': 'Angular 5', 'route': 'angular5','features': ['HttpClient', 'Internationalized Pipes', 'Support for Multiple Export Alias in Angular 5'] },
    { 'version': 'Angular 6', 'route': 'angular6','features': ['ElementRef', 'New method of registering a service', 'RxJS 6.0'] },
    { 'version': 'Angular 7', 'route': 'angular7','features': ['Application performance (Budget)', 'Virtual Scroll', 'Material Drag & Drop'] },
    { 'version': 'Angular 8', 'route': 'angular8','features': ['Dynamic lazy loading', 'Differential loading', 'Service Workers'] },
    { 'version': 'Angular 9', 'route': 'angular9','features': ['Ivy', 'Improved CSS class and style binding', ''] },
    { 'version': 'Angular 10', 'route': 'angular10','features': ['New Date Range Picker', 'Optional Stricter Settings', 'Generic with ModuleWithProviders'] },
    { 'version': 'Angular 11', 'route': 'angular11','features': ['Automatic Inlining of Fonts', 'Hot Module Replacement', 'Improved Reporting and Logging', 'Experimental Webpack 5 Support'] },
    { 'version': 'Angular 12', 'route': 'angular12','features': ['Nullish Coalescing', 'HTTP improvements', 'Styling improvements'] },
    { 'version': 'Angular 13', 'route': 'angular13','features': ['Form Validation Improvements', 'Enhancements to Angular Tests', 'Update Component API’s', 'Angular CLI Enhancements'] },
    { 'version': 'Angular 14', 'route': 'angular14','features': ['Standalone Components', 'Typed Angular Forms', 'Streamlined page title accessibility', 'Extended Developer Diagnostics'] },
    { 'version': 'Angular 15', 'route': 'angular15','features': ['Stable Standalone Components', 'Router and HttpClient Tree-Shakable Standalone APIs', 'Stable Image Directive', 'Functional router guards'] }
  ]
}
