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
      name: "Ferran Ramírez Martí", position: "Apps Implementation and web development", portrait: "./assets/portraits/ferran.jpeg",
      description: "Computing Engineer graduated in Computer Science", 
      social: [
        {name: 'linkedin', class: "fa fab fa-linkedin", href: "https://www.linkedin.com/in/ferran-ramirez/"},
        {name: "gitlab", class: "fa fab fa-gitlab",  href: "https://gitlab.com/ferranJS"}
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
