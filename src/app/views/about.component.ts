import { Component, OnInit } from "@angular/core";
import { TeamMember } from "src/app/models/team-member.model";

import { CommonModule } from "@angular/common";
import { TeamMemberComponent } from "../components/team-member.component";

@Component({
  selector: "app-about",
  standalone: true,
  template: `
    <div class="about-me">
      <h2>About me</h2>
      <div class="description">
        <p>Engineer with 2 years of experience as a Full Stack developer.</p>
        <p>
          I have experience in Angular, RxJS, Firebase, Ionic, Capacitor and
          agile CSS withTailwind ✅
        </p>
        <p>
          Applying the best practices and up to date with other technologies
          that make up Full Stack development, how they correlate with each
          other and their importance and power in the industry 🔎
        </p>
        <p>Very interested in React, NextJS 13, tRPC, Redux, etc ❤️</p>
      </div>
    </div>

    <div class="team-members">
      <app-team-member
        *ngFor="let member of team; let indice = index"
        [member]="member"
        [index]="indice"
      ></app-team-member>
    </div>
  `,
  styles: [
    `
      :host {
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 50px;
      }
      .about-me {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }
      .team-members {
        display: flex;
        flex-direction: column;
      }

      .description {
        display: flex;
        flex-direction: column;
        color: rgb(17, 17, 17);
        font-size: 1rem;
        text-align: center;
        max-width: 700px;
        gap: 10px;
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
