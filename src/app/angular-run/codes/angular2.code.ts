export const ng2codes = {
    'Components': {
        'moduleCode': `
//app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
`,
        'componentCode': `
// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}`,
        'htmlCode': `
//app.component.html

<h1>Hello {{name}}!</h1>
<p>
Start editing to see some magic happen :)
</p>`
    },

    'Directives': {
        'moduleCode': `
    
//ng generate directive highlight

//highlight.directive.ts

import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[appHighlight]'
  })
  export class HighlightDirective {
  
    constructor(private el: ElementRef) { }
  
    @HostListener('mouseenter') onMouseEnter() {
      this.highlight('yellow');
    }
  
    @HostListener('mouseleave') onMouseLeave() {
      this.highlight('');
    }
  
    private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
    }
  
  }`,
        'componentCode': `
// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HighlightDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
`,
        'htmlCode': `
//app.component.html

<p appHighlight>Highlight me!</p>`
    }
}