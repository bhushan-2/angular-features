export const ng6codes = { 
    'ElementRef': {
        'moduleCode':``,
        'componentCode':`
//app.component.ts

import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
selector: 'my-app',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})

export  class  AppComponent {
@ViewChild('login') loginInput: ElementRef<HTMLInputElement>
constructor() { }

ngAfterViewInit() {
  this.loginInput.nativeElement.focus();
}
}
`,
        'htmlCode':`
<input #login id="login" type="text" name="login" id="login"> `
},
'New method of registering a service': {
    'moduleCode':`
//app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}`,

    'componentCode':`
    //app.service.ts

    import { HttpClient } from  '@angular/common/http';
    import { Injectable } from  '@angular/core';

    @Injectable({
        providedIn: 'root'
    })

    export class HttpService {

    private url = 'https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts';

    constructor(private http: HttpClient) { }

    getPosts() {
        return this.http.get(this.url);
    }
    }
    `,
    'htmlCode':`
//app.component.ts

import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
selector: 'my-app',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})

export  class  AppComponent {
posts : any;
constructor(private httpService: HttpService) { }

ngOnInit() {
    this.httpService.getPosts().subscribe(
    (response) => { this.posts = response; },
    (error) => { console.log(error); });
}
}`
},
'RxJS 6.0': {
    'moduleCode': ``,
    'componentCode': `
//app.component.ts

import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
selector: 'my-app',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})

export  class  AppComponent {
squares: any = [];
constructor() { }

ngOnInit() {
  const squares$: Observable<number> = of(1, 2).pipe(map(n => n * n));
  squares$.subscribe(res => this.squares.push(res));
}
}`,
    'htmlCode': `
<ng-container *ngFor="let data of squares">
  <div>{{ data }}</div>
</ng-container>`
}
}