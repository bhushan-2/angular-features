export const ng7codes = {
    'Application performance (Budget)': {
        'moduleCode': `
// angular.json

{
    "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
    "version": 1,
    "newProjectRoot": "projects",
    "projects": {
      "angular-versions": {
        "projectType": "application",
        "schematics": {},
        "root": "",
        "sourceRoot": "src",
        "prefix": "app",
        "architect": {
          "build": {
            "builder": "@angular-devkit/build-angular:browser",
            "options": {
              "outputPath": "dist",
              "index": "src/index.html",
              "main": "src/main.ts",
              "polyfills": [
                "zone.js"
              ],
              "tsConfig": "tsconfig.app.json",
              "assets": [
                "src/favicon.ico",
                "src/assets"
              ],
              "styles": [
              ],
              "scripts": [
              ]
            },
            "configurations": {
              "production": {
                "budgets": [
                  {
                    "type": "initial",
                    "maximumWarning": "500kb",
                    "maximumError": "1mb"
                  },
                  {
                    "type": "anyComponentStyle",
                    "maximumWarning": "2kb",
                    "maximumError": "4kb"
                  }
                ],
                "outputHashing": "all"
              },
              "development": {
                "buildOptimizer": false,
                "optimization": false,
                "vendorChunk": true,
                "extractLicenses": false,
                "sourceMap": true,
                "namedChunks": true
              }
            },
            "defaultConfiguration": "production"
          }
        }
      }
    }
  }
  `,
        'componentCode': ``,
        'htmlCode': ``
    },
    'Virtual Scroll': {
        'moduleCode': `
// npm install @angular/cdk

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ScrollingModule ],
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
  items = Array.from({ length: 10000 }).map((_, i) => 'Item i');
}`,
        'htmlCode': `
//app.component.html

<cdk-virtual-scroll-viewport itemSize="50" class="example-viewport">
  <div *cdkVirtualFor="let item of items" class="example-item">{{item}}</div>
</cdk-virtual-scroll-viewport>

//app.component.css

.example-viewport {
    height: 200px;
    width: 200px;
    border: 1px solid black;
  }
  
.example-item {
    height: 20px;
    margin: 0px 10px;
    padding: 15px 0px;
    border-bottom: 1px solid #ccc;
  }`
    },
    'Material Drag & Drop': {
        'moduleCode': `
// npm install @angular/cdk

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, DragDropModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }`,

        'componentCode': `
// app.component.ts

import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}`,
        'htmlCode': `
//app.component.html

<div cdkDropList class="example-list" (cdkDropListDropped)="drop($event)">
  <div class="example-box" *ngFor="let movie of movies" cdkDrag>{{movie}}</div>
</div>  

//app.component.css

.example-list {
    width: 500px;
    max-width: 100%;
    border: solid 1px #ccc;
    min-height: 60px;
    display: block;
    background: white;
    border-radius: 4px;
    overflow: hidden;
  }
  
  .example-box {
    padding: 20px 10px;
    border-bottom: solid 1px #ccc;
    color: rgba(0, 0, 0, 0.87);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    cursor: move;
    background: white;
    font-size: 14px;
  }
  
  .cdk-drag-preview {
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
      0 8px 10px 1px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12);
  }
  
  .cdk-drag-placeholder {
    opacity: 0;
  }
  
  .cdk-drag-animating {
    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
  }
  
  .example-box:last-child {
    border: none;
  }
  
  .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {
    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
  }`
    }
}