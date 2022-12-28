import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-live',
  templateUrl: './angular-live.component.html',
  styleUrls: ['./angular-live.component.css']
})
export class AngularLiveComponent {

  animationCommand = `
  //import module in app.module.ts

  import { BrowserAnimationsModule } from '@angular/platform-browser/animations;'
  `;
  animationComponent = `
  // define app.component.ts as shown below

  import { Component } from '@angular/core';
  import { trigger, state, style, animate, transition } from '@angular/animations';
  import { ActivatedRoute } from '@angular/router';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [
      trigger('changeDivSize', [
        state('initial', style({
          backgroundColor: '#ccc',
          width: '100px',
          height: '100px'
        })),
        state('final', style({
          backgroundColor: '#1678df',
          width: '200px',
          height: '200px'
        })),
        transition('initial=>final', animate('1500ms')),
        transition('final=>initial', animate('1000ms'))
      ])  ]
  })
  export class AppComponent {

    currentState = 'initial';
    currentStateBallon = 'start';

    changeSquareState() {
      this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
    }

  }
`;
  animationHTML = `
  //add html code in app.component.html as shown below

          <div class="animations">
          <div class="resize">
            <label>Change the div size</label>
            <button class="btn btn-primary" (click)="changeSquareState()">Change Size</button>
            <div [@changeDivSize]=currentState></div>
            <br />
          </div>
          </div
  `;
}
