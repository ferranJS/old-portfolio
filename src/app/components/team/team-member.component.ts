import { Component, OnInit, Input } from '@angular/core';

import { TeamMember } from 'src/app/models/team-member.model';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.css']
})
export class TeamMemberComponent implements OnInit {

  @Input() member: TeamMember;
  @Input() index: number;

  load: boolean = false;

  constructor() { }

  ngOnInit(): void {
    
  }
}
