import { Component, OnInit } from "@angular/core";
import { TeamMember } from "src/app/models/team-member.model";

import { CommonModule } from "@angular/common";
import { TeamMemberComponent } from "../components/team-member.component";

@Component({
  selector: "app-about",
  standalone: true,
  template: `<section class="about">
    <div class="text-center">
      <h2 class="h2">About me</h2>
      <p class="subtitle" style="color: rgb(17, 17, 17)">
        Engineer with 2 years of experience as a Full Stack developer.
      </p>
      <p class="subtitle" style="color: rgb(17, 17, 17)">
        I have experience in Angular, RxJS, Firebase, Ionic, Capacitor and agile
        CSS withTailwind ✅
      </p>
      <p class="subtitle" style="color: rgb(17, 17, 17)">
        Applying the best practices and up to date with other technologies that
        make up Full Stack development, how they correlate with each other and
        their importance and power in the industry 🔎
      </p>
      <p class="subtitle" style="color: rgb(17, 17, 17)">
        Veryinterested in React, NextJS 13, tRPC, Redux, etc. ❤️
      </p>
    </div>

    <div class="team-members">
      <app-team-member
        *ngFor="let member of team; let indice = index"
        [member]="member"
        [index]="indice"
      ></app-team-member>
    </div>
  </section> `,
  styles: [
    `
      .about {
        height: 95%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 16%;
        gap: 50px;
        padding-bottom: 6%;
      }

      .team-members {
        display: flex;
        flex-direction: column;
      }

      .subtitle {
        color: #3a4e6c;
        margin: 0 0 1.5rem;
        font-size: 1rem;
        text-align: center;
        max-width: 720px; /* Como .container */
        margin-left: 10px;
        margin-right: 10px;
      }
    `,
  ],
  imports: [TeamMemberComponent, CommonModule],
})
export class AboutComponent implements OnInit {
  team: TeamMember[] = [
    {
      name: "Ferran Ramírez Martí",
      position: "Web & App Developer ",
      portrait: "./assets/portraits/ferran.jpeg",
      description: "Computing Engineer graduated in Computer Science",
      social: [
        {
          name: "linkedin",
          class: "fa fab fa-linkedin",
          href: "https://www.linkedin.com/in/ferran-ramirez/",
        },
        {
          name: "github",
          class: "fa fab fa-github",
          href: "https://github.com/ferranJS",
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
