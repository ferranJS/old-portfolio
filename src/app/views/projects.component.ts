import { CommonModule } from "@angular/common";
import { Project } from "../models/project.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-projects",
  standalone: true,
  template: `
    <div class="header">
      <h2>My projects</h2>
    </div>

    <article class="wrapper">
      <div class="content">
        <h3 class="title">{{ projectSelected.name }}</h3>
        <p class="description">{{ projectSelected.description }}</p>
        <div class="buttons">
          <a
            class="btn"
            style="box-shadow: 0px 0px 7px -3px cornflowerblue"
            [attr.href]="projectSelected.urlProject"
            target="_blank"
            >See project</a
          >
          <a
            *ngIf="projectSelected.urlSource"
            class="btn"
            style="
            background-color: rgb(108, 111, 146);
            box-shadow: 0px 0px 7px -3px rgb(108, 111, 146);
          "
            [attr.href]="projectSelected.urlSource"
            target="_blank"
          >
            Go to source
          </a>
        </div>
      </div>
      <a
        class="sample"
        [attr.href]="projectSelected.urlProject"
        target="_blank"
      >
        <picture>
          <source [srcset]="projectSelected.image" type="image/webp" />
          <img
            class="sample-image"
            [src]="projectSelected.image2"
            loading="lazy"
          />
        </picture>
      </a>
    </article>
  `,
  styles: [
    `
      :host {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
      }
      .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 20px;
      }
      .sample {
        box-shadow: 0px 0px 10px 0px rgba(156, 157, 244, 0.356);
        border-radius: 20px;
        transition: 0.15s;
      }
      .sample:hover,
      .sample:focus {
        transform: scale(1.008);
      }
      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
      }
      .title {
        color: #182333;
        text-align: start;
        font-size: 1.5rem;
        /* backdrop-filter: blur(10px) brightness(101%); */
        line-height: 1.75rem;
      }
      .description {
        color: #3a4e6c;
        /* backdrop-filter: blur(10px) brightness(101%); */
        text-align: start;
        max-width: 400px;
      }
      .author {
        color: #182333;
        font-size: small;
        text-align: end;
        max-width: 400px;
      }
      .buttons {
        display: flex;
        justify-content: center;
        gap: 20px;
      }
      .btn {
        color: #fff;
        padding: 10px;
        background: cornflowerblue;
        border-radius: 4px;
        text-decoration: none;
        transition: 0.2s;
      }
      .btn:hover {
        opacity: 85%;
        transition: 0.2s;
      }
      .sample-image {
        border-radius: 20px;
        max-width: 100%;
      }

      @media only screen and (min-width: 768px) {
        .wrapper {
          flex-direction: row;
        }
        .content {
          align-items: flex-start;
        }
      }
    `,
  ],
  imports: [CommonModule],
})
export class ProjectsComponent implements OnInit {
  projectList: Project[] = [
    {
      name: "Cellular Stuff",
      description:
        "Visual, interactive and educational representation and explanation of a One-dimensional Cellular Automaton.",
      author: "Ferran Ramírez Martí",
      urlProject: "https://cellular-stuff.netlify.app",
      urlSource: "https://gitlab.com/ferranJS/cellular-automaton-web",
      icon: "../../../assets/icons/celula.png",
      image: "../../../assets/images/cellular-stuff-preview.webp",
      image2: "../../../assets/images/cellular-stuff-preview.jpg",
    },
  ];

  projectSelected!: Project;

  constructor() {}

  ngOnInit(): void {
    this.projectSelected = this.projectList[0];
  }

  selectProject(project: Project) {
    console.log("Has seleccionado: ", project.name);
    this.projectSelected = project;
  }
}
