import { CommonModule } from "@angular/common";
import { Component, OnInit, Input } from "@angular/core";

import { TeamMember } from "src/app/models/team-member.model";

@Component({
  selector: "app-team-member",
  standalone: true,
  template: `
    <a href="https://www.linkedin.com/in/ferran-ramirez/" target="_blank"
    aria-label="Ferran Ramirez LinkedIn profile"
    >
      <picture>
        <source srcset="/assets/images/ferran.webp" type="image/webp" />
        <img
          class="team-portrait"
          loading="lazy"
          src="/assets/images/ferran.jpg"
          alt="Ferran Ramírez Martí, ferranJS"
        />
      </picture>
    </a>
    <div class="team-content">
      <p>
        <strong class="h4">{{ member.name }}</strong>
      </p>
      <div>
        {{ member.position }}
      </div>
      <p>
        {{ member.description }}
      </p>
      <div class="socials">
        <a
          *ngFor="let social of member.social"
          class="team-social"
          target="_blank"
          [attr.href]="social.href"
          aria-label="social link"
        >
          <i
            [class]="social.class + ' team-icon'"
            style="text-shadow: 0px 0px 2px 0px #22243b"
          ></i>
        </a>
      </div>
    </div>
    <!-- [ngClass]="{'fade-in': !load, 'fade-in-loaded': load}" -->
  `,
  styles: [
    `
      :host {
        color: rgb(17, 17, 17);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
      }
      .team-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 7px;
      }
      .team-portrait {
        box-shadow: 0px 0px 10px -3px #b5afa7;
        height: 156px;
        aspect-ratio: 1/1;
        border-radius: 50%;
      }
      .socials {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 13px;
        font-size: 1.35rem;
      }
      .team-icon {
        color: #0b2448;
      }

      .team-icon:hover {
        color: #000;
        scale: 1.05;
        transition: 0.1s;
      }
    `,
  ],
  imports: [CommonModule],
})
export class TeamMemberComponent implements OnInit {
  @Input()
  member!: TeamMember;
  @Input()
  index!: number;

  load: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
