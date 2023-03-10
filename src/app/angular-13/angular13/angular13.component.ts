import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-angular13',
  templateUrl: './angular13.component.html',
  styleUrls: ['./angular13.component.css']
})
export class Angular13Component {

  ngTest = `
  beforeEach(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting(), {
        teardown: {
            destroyAfterEach: true
        }
    });
});`

  dynamicComponent = `
  export class AppComponent {
    constructor(private ViewContainerRef: ViewContainerRef) {}
    // private componentFactoryResolver:  ComponentFactoryResolver
    createnewComponent(MyNewComponent: any) {
        // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(MyComponent);
        this.ViewContainerRef.createComponent(MyNewComponent)
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
