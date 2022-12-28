import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-angular8',
  templateUrl: './angular8.component.html',
  styleUrls: ['./angular8.component.css']
})
export class Angular8Component {

  lazyLoading = `
  It means lazy-loaded import that looked like this:
  
  { path: '/student', loadChildren: './student/student.module#StudentModule' }  
  
  Will be looked like this:
  
  { path: '/student', loadChildren: () => import('./student/student.module').then(s => s.StudentModule) }`

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
