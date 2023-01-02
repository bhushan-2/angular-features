import { Component } from '@angular/core';
import { ng2codes } from '../codes/angular2.code';
import { ng4codes } from '../codes/angular4.code';
import { ng5codes } from '../codes/angular5.code';
import { ng6codes } from '../codes/angular6.code';
import { ng7codes } from '../codes/angular7.code';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from "@angular/platform-browser";


@Component({
  selector: 'app-angular-live',
  templateUrl: './angular-live.component.html',
  styleUrls: ['./angular-live.component.css']
})
export class AngularLiveComponent {

  versions = [
    { 'version': 'Angular 2', 'route': 'angular2', 'features': ['Components', 'Directives'] },
    { 'version': 'Angular 4', 'route': 'angular4', 'features': ['Animations', 'ngIf with else', 'as keyword in for loop'] },
    { 'version': 'Angular 5', 'route': 'angular5', 'features': ['HttpClient', 'Internationalized Pipes', 'Support for Multiple Export Alias'] },
    { 'version': 'Angular 6', 'route': 'angular6', 'features': ['ElementRef', 'New method of registering a service', 'RxJS 6.0'] },
    { 'version': 'Angular 7', 'route': 'angular7', 'features': ['Application performance (Budget)', 'Virtual Scroll', 'Material Drag & Drop'] },
    { 'version': 'Angular 8', 'route': 'angular8', 'features': ['Dynamic lazy loading', 'Differential loading', 'Service Workers'] },
    { 'version': 'Angular 9', 'route': 'angular9', 'features': ['Ivy', 'Improved CSS class and style binding', ''] },
    { 'version': 'Angular 10', 'route': 'angular10', 'features': ['New Date Range Picker', 'Optional Stricter Settings', 'Generic with ModuleWithProviders'] },
    { 'version': 'Angular 11', 'route': 'angular11', 'features': ['Automatic Inlining of Fonts', 'Hot Module Replacement', 'Improved Reporting and Logging', 'Experimental Webpack 5 Support'] },
    { 'version': 'Angular 12', 'route': 'angular12', 'features': ['Nullish Coalescing', 'HTTP improvements', 'Styling improvements'] },
    { 'version': 'Angular 13', 'route': 'angular13', 'features': ['Form Validation Improvements', 'Enhancements to Angular Tests', 'Update Component API’s', 'Angular CLI Enhancements'] },
    { 'version': 'Angular 14', 'route': 'angular14', 'features': ['Standalone Components', 'Typed Angular Forms', 'Streamlined page title accessibility', 'Extended Developer Diagnostics'] },
    { 'version': 'Angular 15', 'route': 'angular15', 'features': ['Stable Standalone Components', 'Router and HttpClient Tree-Shakable Standalone APIs', 'Stable Image Directive', 'Functional router guards'] }
  ];
  features: string[] = [];
  selectedVersion: any;
  selectedFeature: any;
  editorLinks: any;
  currentVersion: any;
  currentFeatureIndex = 0;
  editorURL = '';
  currentFeature = '';
  isSpinnerLoading: boolean = false;
  currentVersionName = '';

  constructor(private route: ActivatedRoute, public sanitizer: DomSanitizer) {
    this.route.queryParams.subscribe(params => {
      this.isSpinnerLoading = true
      this.currentVersion = params['version'];
      this.currentFeatureIndex = params['index'];
      this.setURL();
    });
  }

  setURL() {
    switch (this.currentVersion) {
      case 'angular2': this.editorLinks = ng2codes; break;
      case 'angular4': this.editorLinks = ng4codes; break;
      case 'angular5': this.editorLinks = ng5codes; break;
      case 'angular6': this.editorLinks = ng6codes; break;
      case 'angular7': this.editorLinks = ng7codes; break;
    }

    const version = this.versions.find(record => record.route == this.currentVersion);
    if (version) {
      this.currentFeature = version.features[this.currentFeatureIndex];
      this.currentVersionName = version.version;
      this.editorURL = this.editorLinks[version.features[this.currentFeatureIndex]];
      setTimeout(() => {
        this.isSpinnerLoading = false;
      }, 300);
    }

  }
}
