import { CommonModule } from "@angular/common";
import { Component, OnInit, Input } from "@angular/core";

import { TeamMember } from "src/app/models/team-member.model";

@Component({
  selector: "app-team-member",
  standalone: true,
  template: `
    <div class="team">
      <a href="https://www.linkedin.com/in/ferran-ramirez/" target="_blank">
        <picture>
          <source srcset="/assets/images/ferran.webp" type="image/webp" />
          <img
            class="team-portrait"
            style="box-shadow: 0px 0px 10px -3px #b5afa7"
            loading="lazy"
            src="/assets/images/ferran.jpg"
          />
        </picture>
      </a>
      <div class="team-content">
        <p style="margin-bottom: 8px">
          <strong class="h4" style="color: rgb(17, 17, 17)">{{
            member.name
          }}</strong>
        </p>
        <div class="body" style="color: rgb(17, 17, 17)">
          {{ member.position }}
        </div>
        <p class="body" style="color: rgb(17, 17, 17)">
          {{ member.description }}
        </p>

        <a
          *ngFor="let social of member.social"
          class="team-social"
          target="_blank"
          [attr.href]="social.href"
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
      .team {
        display: flex;
        align-items: center;
        margin: 0 10px;
      }

      .team-portrait {
        height: 156px;
        border-radius: 50%;
        margin-right: 8px;
      }

      .team-content {
        margin-left: 8px;
      }

      .team-social {
        font-size: 1.3rem;
        margin: 7px;
      }

      .team-icon {
        color: #0b2448;
      }

      .team-icon:hover {
        color: #000;
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
