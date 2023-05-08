import { CommonModule } from "@angular/common";
import { Project } from "../models/project.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-projects",
  standalone: true,
  template: `
    <section class="project">
      <div class="project-header">
        <h2 class="h2">My projects</h2>
      </div>

      <div class="project-icons">
        <img
          *ngFor="let project of projectList"
          [src]="project.icon"
          class="m-2 p-icon"
          (click)="selectProject(project)"
          loading="lazy"
        />
      </div>

      <div class="project-wrapper">
        <div class="project-content">
          <h3 class="project-title">{{ projectSelected.name }}</h3>
          <p class="project-description">{{ projectSelected.description }}</p>
          <div class="project-buttons">
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
              >Go to source</a
            >
          </div>
        </div>

        <a
          class="project-sample"
          [attr.href]="projectSelected.urlProject"
          target="_blank"
        >
          <picture>
            <source [srcset]="projectSelected.image" type="image/webp" />
            <img
              class="project-sample-image"
              [src]="projectSelected.image2"
              loading="lazy"
            />
          </picture>
        </a>
      </div>
    </section>
  `,
  styles: [
    `
      .project {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-top: 100px;
      }

      .project-title {
        text-align: center;
      }

      .p-icon {
        width: 4em;
        display: inline-block;
        border-radius: 50%;
        padding: 0.4em 0.4em;
        color: #29323c;
        background-color: white;
        transform: translateZ(0);
        transition: transform 0.25s ease-out;
        box-shadow: 0px 0px 10px 0px rgba(156, 157, 244, 0.356);
      }

      .p-icon:hover,
      .p-icon:focus {
        transform: scale(1.03);
      }

      .project-wrapper {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-top: 3.75rem;
        margin-bottom: 6.25rem;
      }

      .project-sample {
        width: 40%;
        box-shadow: 0px 0px 10px 0px rgba(156, 157, 244, 0.356);
        border-radius: 4px;
        transform: translateZ(0);
        transition: transform 0.25s ease-out;
      }

      .project-sample:hover,
      .project-sample:focus {
        transform: scale(1.014);
      }

      .project-content {
        margin-right: 24px;
      }

      .project-title {
        color: #182333;
        text-align: start;
        font-size: 1.5rem;
        /* backdrop-filter: blur(10px) brightness(101%); */
        line-height: 1.75rem;
      }

      .project-description {
        color: #3a4e6c;
        margin: 0 0 1.5rem;
        /* backdrop-filter: blur(10px) brightness(101%); */
        text-align: start;
        max-width: 400px;
      }

      .project-author {
        color: #182333;
        font-size: small;
        margin: 0 0 1.5rem;
        text-align: end;
        padding-right: 10%;
        max-width: 400px;
      }

      .project-buttons {
        display: flex;
        justify-content: center;
      }

      .btn {
        background: cornflowerblue;
        padding: 10px;
        border-radius: 4px;
        margin: 5px;
        text-decoration: none;
        transition: 0.2s;
      }
      .btn:hover {
        opacity: 85%;
        transition: 0.2s;
      }

      .project-buttons a {
        color: #fff !important;
      }

      .project-sample-image {
        width: 100%;
        height: 100%;
        border-radius: 20px;
      }

      @media only screen and (max-width: 768px) {
        /* For mobile phones: */

        .project-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .project-sample {
          width: 80%;
          height: 100%;
          margin-bottom: 40px;
        }

        .project-content {
          margin-left: 20px;
          margin-bottom: 24px;
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
