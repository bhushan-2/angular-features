import { Component } from '@angular/core';

@Component({
  selector: 'app-angular5',
  templateUrl: './angular5.component.html',
  styleUrls: ['./angular5.component.css']
})
export class Angular5Component {

  httpCommand = `import { HttpClientModule } from '@angular/common/http';`;
  exportAs = `import { Component } from '@angular/core';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    exportAs:'dashboard, logBoard'
  })
  export class AppComponent {
    title = 'app';
  }`;
  currentDate = new Date();
  datePipe = `<p>The current date & time is: {{ currentDate | date:'medium' }}</p>`;
}
