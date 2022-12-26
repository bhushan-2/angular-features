import { Component } from '@angular/core';

@Component({
  selector: 'app-angular14',
  templateUrl: './angular14.component.html',
  styleUrls: ['./angular14.component.css']
})
export class Angular14Component {

  standalone = `
  import { Component } from '@angular/core';
  import { CommonModule } from '@angular/common'; // includes NgIf and TitleCasePipe
  import { bootstrapApplication } from '@angular/platform-browser';

  import { MatCardModule } from '@angular/material/card';
  import { ImageComponent } from './app/image.component';
  import { HighlightDirective } from './app/highlight.directive';

  @Component({
    selector: 'app-root',
    standalone: true,
    imports: [
      ImageComponent, HighlightDirective, // import standalone Components, Directives and Pipes
      CommonModule, MatCardModule // and NgModules
    ],
    template: '
      <mat-card *ngIf="url">
        <app-image-component [url]="url"></app-image-component>
        <h2 app-highlight>{{name | titlecase}}</h2>
      </mat-card>
    '
  })
  export class ExampleStandaloneComponent {
    name = "emma";
    url = "www.emma.org/image";
  }

  // Bootstrap a new Angular application using our ExampleStandaloneComponent as a root component.
  bootstrapApplication(ExampleStandaloneComponent);`

  pageTitle = `
    const routes: Routes = [{
      path: 'home',
      component: HomeComponent
      title: 'My App - Home'  // <-- Page title
    }, {
      path: 'about',
      component: AboutComponent,
      title: 'My App - About Me'  // <-- Page title
    }];`
}
