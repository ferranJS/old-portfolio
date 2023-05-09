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
    <header>
      <app-header></app-header>
    </header>
    <main id="appContainer">
      <section>
        <app-about></app-about>
      </section>
      <section>
        <app-projects></app-projects>
      </section>
    </main>
    <footer>
      <a
        class="link"
        href="https://github.com/ferranJS/old-portfolio"
        aria-label="Link to the source code of this website"
        target="_blank"
      >
        <i
          class="fa fa-github fab"
          style="font-size: 1.2rem"
          aria-hidden="true"
        >
        </i>
        &nbsp; Made with
        <p class="fa-spin" style="display: inline-block">💖</p>
        and
        <p class="fa-spin" style="display: inline-block">☕</p>
      </a>
    </footer>
    <!-- <app-background></app-background> -->
  `,
  styles: [
    `
      :host {
        padding: 0 20px;
        display: flex;
        flex-direction: column;
      }
      html,
      body {
        scroll-behavior: smooth !important;
      }
      footer {
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        bottom: 0px;
        margin-top: 30px;
        padding: 0;
      }
      .link {
        text-shadow: black 0px 0px 4px;
        text-decoration: none;
        color: white;
      }
    `,
  ],
  imports: [
    CommonModule,
    ProjectsComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
  ],
})
export class AppComponent implements OnInit {
  sections: string[] = ["sec1", "sec2", "sec3"];

  constructor() {}

  ngOnInit() {}
}
