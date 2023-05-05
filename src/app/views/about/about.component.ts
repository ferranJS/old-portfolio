import { Component, OnInit } from '@angular/core';
import { TeamMember } from 'src/app/models/team-member.model';
import { TeamMemberComponent } from "../../components/team/team-member.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    imports: [TeamMemberComponent, CommonModule]
})
export class AboutComponent implements OnInit {

  team: TeamMember[] = [
    {
      name: "Ferran Ramírez Martí", position: "Web & App Developer ", portrait: "./assets/portraits/ferran.jpeg",
      description: "Computing Engineer graduated in Computer Science", 
      social: [
        {name: 'linkedin', class: "fa fab fa-linkedin", href: "https://www.linkedin.com/in/ferran-ramirez/"},
        {name: "github", class: "fa fab fa-github",  href: "https://github.com/ferranJS"}
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
