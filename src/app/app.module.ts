import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/** Own work */
import { AppComponent } from './app.component';

// Views

import { HeaderComponent } from './views/header/header.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { AboutComponent } from './views/about/about.component';
import { FooterComponent } from './views/footer/footer.component';

// Components

import { BackgroundComponent } from './components/background/background.component';
import { TeamMemberComponent } from './components/team/team-member.component';
import { NavigatonDotsComponent } from './components/navigation-dots/navigation-dots.component';

/** Dependencies */



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    AboutComponent,
    FooterComponent,
    BackgroundComponent,
    TeamMemberComponent,
    NavigatonDotsComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
