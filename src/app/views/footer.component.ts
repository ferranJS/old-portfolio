import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  standalone: true,
  template: `
    <footer class="container footer">
      <a
        class="link"
        href="https://github.com/ferranJS/old-portfolio"
        target="_blank"
        aria-label="Link to the source code of this website"
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
  `,
  styles: [
    `
      .footer {
        height: 5%;
        display: flex;
        justify-content: center;
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
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
