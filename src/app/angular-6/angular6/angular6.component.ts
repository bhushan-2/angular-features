import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-angular6',
  templateUrl: './angular6.component.html',
  styleUrls: ['./angular6.component.css']
})
export class Angular6Component {
  elementRef = `@ViewChild('login') login: ElementRef<HTMLInputElement>;

  ngAfterViewInit() {
  
    this.loginInput.nativeElement.focus();
  
  }`;

  service = `@Injectable({
    providedIn: 'root'
  })
  export class UserService {}`;

  rxjs = `
  import { Observable, of } from 'rxjs';

  import { map } from 'rxjs/operators';
  
  const squares$: Observable<number> = of(1, 2).pipe(map(n => n * n));`;

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
  
}
