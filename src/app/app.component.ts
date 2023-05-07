import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from "./views/projects/projects.component";
import { HeaderComponent } from "./views/header/header.component";
import { AboutComponent } from "./views/about/about.component";
import { FooterComponent } from "./views/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, ProjectsComponent, HeaderComponent, AboutComponent, FooterComponent]
})
export class AppComponent implements OnInit {

  sections: string[] = ["sec1", "sec2", "sec3"];

  constructor() { }

  ngOnInit() { }
}


