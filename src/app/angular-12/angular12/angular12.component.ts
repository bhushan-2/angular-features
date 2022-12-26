import { Component } from '@angular/core';

@Component({
  selector: 'app-angular12',
  templateUrl: './angular12.component.html',
  styleUrls: ['./angular12.component.css']
})
export class Angular12Component {

  nullishCoalescing = `
  {{age !== null && age !== undefined ? age : calculateAge() }}
  Becomes:
  {{ age ?? calculateAge() }}
  `;

  httpStatus = `
  if (response.status === HttpStatusCode.Ok) {
    ...
   }`;

  cssBefore = `
    @import '~@angular/material/theming;
    @include mat-core();
    $primary: mat-palette($mat-indigo);
    $accent:  mat-palette($mat-pink);
    $theme: mat-light-theme((
      color: (
        primary: $primary,
        accent: $accent
      )
    ));
    @include angular-material-theme($theme);`;

  cssAfter = `
  // AFTER
  @use '~@angular/material' as mat;
  @include mat.core();
  $primary: mat.define-palette(palette.$indigo-palette);
  $accent:  mat.define-palette(palette.$pink-palette);
  $theme: mat.define-light-theme((
    color: (
      primary: $primary,
      accent: $accent
    )
  ));
  @include mat.all-component-themes($theme);`
}
