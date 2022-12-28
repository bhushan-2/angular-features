import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-angular15',
  templateUrl: './angular15.component.html',
  styleUrls: ['./angular15.component.css']
})
export class Angular15Component {

  standalone = `
  import {bootstrapApplication} from '@angular/platform-browser';
  import {ImageGridComponent} from'./image-grid';

  @Component({
    standalone: true,
    selector: 'photo-gallery',
    imports: [ImageGridComponent],
    template: '
      … <image-grid [images]="imageList"></image-grid>
    ',
  })
  export class PhotoGalleryComponent {
    // component logic
  }

  bootstrapApplication(PhotoGalleryComponent);`;

  appRoutes = `
  export const appRoutes: Routes = [{
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.routes')
      .then(routes => routes.lazyRoutes)
  }];`;

  lazyRoutes = `
  import {Routes} from '@angular/router';

  import {LazyComponent} from './lazy.component';

  export const lazyRoutes: Routes = [{path: '', component: LazyComponent}];`;

  register = `
  bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(appRoutes)
    ]
  });`;

  imgOptimized = `
  import { NgOptimizedImage } from '@angular/common';

  // Include it into the necessary NgModule
  @NgModule({
    imports: [NgOptimizedImage],
  })
  class AppModule {}

  // ... or a standalone Component
  @Component({
    standalone: true
    imports: [NgOptimizedImage],
  })
  class MyStandaloneComponent {}`;

  imgSrc = `<img ngSrc="./assets/img_optimized.jpg" width="500" height="350">`

  routerGuardsOld = `
  @Injectable({ providedIn: 'root' })
  export class MyGuardWithDependency implements CanActivate {
    constructor(private loginService: LoginService) {}

    canActivate() {
      return this.loginService.isLoggedIn();
    }
  }

  const route = {
    path: 'somePath',
    canActivate: [MyGuardWithDependency]
  };`;

  routerGuardNew = `
  const route = {
    path: 'admin',
    canActivate: [() => inject(LoginService).isLoggedIn()]
  };`;

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
