import { Component } from '@angular/core';

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
}
