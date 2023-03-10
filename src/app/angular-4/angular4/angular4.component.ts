import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-angular4',
  templateUrl: './angular4.component.html',
  styleUrls: ['./angular4.component.css'],
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
    ]),

    trigger('balloonEffect', [
      state('start', style({
        backgroundColor: '#ccc',
        transform: 'scale(1)'
      })),
      state('end', style({
        backgroundColor: '#1678df',
        transform: 'scale(1.5)'
      })),
      transition('end=>start', animate('1000ms')),
      transition('start=>end', animate('1500ms'))
    ]),

    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),

    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s 300ms ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class Angular4Component {

  animationCommand = `import { BrowserAnimationsModule } from '@angular/platform-browse/animations;'`;

  ngIfWithElse = `
  <span *ngIf="isavailable; else condition1">Condition is valid.</span>
  <ng-template #condition1>Condition is invalid</ng-template>`;

  asKeyword = `
  <div *ngFor="let i of months | slice:0:5 as total">
   Months: {{i}} Total: {{total.length}}
  </div>`;

  currentState = 'initial';
  currentStateBallon = 'start';
  listItem:any = [];
  listRecord:any = [];
  list_order: number = 1;
  list_record_order: number = 1;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      const featureIndex = params['index'];
      setTimeout(() => {
        const element = document.getElementById(featureIndex);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
        }
      }, 100)
    });
  }

  addItem() {
    const item = "List Item " + this.list_order;
    this.list_order++;
    this.listItem.push(item);
  }

  removeItem() {
    this.listItem.length -= 1;
  }

  addRecord() {
    const item = "List Item " + this.list_record_order;
    this.list_record_order++;
    this.listRecord.push(item);
  }

  removeRecord() {
    this.listRecord.length -= 1;
  }

  changeSquareState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

  changeBallonState() {
    this.currentStateBallon = this.currentStateBallon === 'start' ? 'end' : 'start';
  }
}
