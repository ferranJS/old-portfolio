import { CommonModule } from '@angular/common';
import { Project } from './../../models/project.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  imports: [CommonModule]
})
export class ProjectsComponent implements OnInit {
  projectList: Project[] = [
    { name: "Cellular Stuff",
     description: "Visual, interactive and educational representation and explanation of a One-dimensional Cellular Automaton.", 
     author:"Ferran Ramírez Martí", 
     urlProject: "https://cellular-stuff.netlify.app", 
     urlSource: "https://gitlab.com/ferranJS/cellular-automaton-web",
     icon: "../../../assets/icons/celula.png",
     image: "../../../assets/samples/cellular-stuff-preview.gif"}
  ];

  projectSelected!: Project;

  constructor() { }

  ngOnInit(): void {
    this.projectSelected = this.projectList[0];
  }

  selectProject(project: Project) {
    console.log("Has seleccionado: ", project.name)
    this.projectSelected = project;
  }
}
