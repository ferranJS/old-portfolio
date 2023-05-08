import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProjectsComponent } from "./views/projects.component";
import { HeaderComponent } from "./views/header.component";
import { AboutComponent } from "./views/about.component";
import { FooterComponent } from "./views/footer.component";

@Component({
    selector: "app-root",
    standalone: true,
    template: `
    <div
      id="appContainer"
      style="
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      "
    >
      <!-- <app-navigation-dots
    class="section"
    [sections]="sections"
  ></app-navigation-dots> -->

      <app-header class="section"></app-header>
      <div id="sec3" class="section">
        <app-about></app-about>
        <app-projects id="sec2" class="section"></app-projects>
        <app-footer></app-footer>
      </div>
    </div>
    <!-- <app-background></app-background> -->
  `,
    styles: [
        `
      html,
      body {
        scroll-behavior: smooth !important;
      }

      .section {
        height: 100vh;
        width: 100%;
      }
    `,
    ],
    imports: [
        CommonModule,
        ProjectsComponent,
        HeaderComponent,
        AboutComponent,
        FooterComponent
    ]
})
export class AppComponent implements OnInit {
  sections: string[] = ["sec1", "sec2", "sec3"];

  constructor() {}

  ngOnInit() {}
}
