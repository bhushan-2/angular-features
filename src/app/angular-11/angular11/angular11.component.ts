import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-angular11',
  templateUrl: './angular11.component.html',
  styleUrls: ['./angular11.component.css']
})
export class Angular11Component {

  hmr = `ng serve --hmr`;

  fontOptimization = `"configurations": {
    "optimization": {
      "fonts": {
        "inline": false
      }
    }
  }`;

  webpack = `
  "resolutions": {
    "webpack": "5.4.0"
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
