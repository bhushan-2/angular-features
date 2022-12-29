export const ng5codes = {
    'HttpClient': {
        'moduleCode': `
//app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';

@NgModule({
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [HttpService]
  bootstrap: [ AppComponent ]
})
export class AppModule {}`,

        'componentCode': `
//app.service.ts

    import { HttpClient } from  '@angular/common/http';
    import { Injectable } from  '@angular/core';

    @Injectable()

    export class HttpService {

    private url = 'https://my-json-server.typicode.com/JSGund/XHR-Fetch-Request-JavaScript/posts';

    constructor(private http: HttpClient) { }

    getPosts() {
        return this.http.get(this.url);
    }
    }`,
        'htmlCode': `
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
    'Internationalized Pipes': {
        'moduleCode': ``,
        'componentCode': `
//app.component.ts

import { Component } from '@angular/core';

@Component({
selector: 'my-app',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})

export  class  AppComponent {
currentDate = new Date();;
constructor() { }

ngOnInit() {}
}`,
        'htmlCode': `
// app.component.html

<p>The current date & time is: {{ currentDate | date:'medium' }}</p>
    `
    },
    'Support for Multiple Export Alias': {
        'moduleCode': ``,
        'componentCode': `
  import { Component } from '@angular/core';

  @Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    exportAs:'dashboard, logBoard'
  })
  export class AppComponent {
    name = 'Angular';
  }
    `,
        'htmlCode': ``
    }
}