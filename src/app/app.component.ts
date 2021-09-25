import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-navigation>
      <router-outlet></router-outlet>
    </app-navigation>
  `,
  styles: [],
})
export class AppComponent {
  title = "FRONT-PET";
}
