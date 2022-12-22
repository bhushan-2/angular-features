import { Component } from '@angular/core';

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
}
