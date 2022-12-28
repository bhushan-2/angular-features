import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-angular10',
  templateUrl: './angular10.component.html',
  styleUrls: ['./angular10.component.css']
})
export class Angular10Component {

  stictCommand = `ng new --strict`;
  beforeModule = `
  @NgModule({…})
  export class MyModule {
  static forRoot(config: SomeConfig): ModuleWithProviders {
    return {
      ngModule: SomeModule,
      providers: [
        {provide: SomeConfig, useValue: config}
      ]
    };
  }
}`;
afterModule = `
@NgModule({…})
export class MyModule {
  static forRoot(config: SomeConfig): ModuleWithProviders<SomeModule> {
    return {
      ngModule: SomeModule,
      providers: [
        {provide: SomeConfig, useValue: config }
      ]
    };
  }
}`;

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
