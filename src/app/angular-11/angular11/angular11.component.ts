import { Component } from '@angular/core';

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

}
