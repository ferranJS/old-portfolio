import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  sections: string[] = ["sec1", "sec2", "sec3"];

  constructor() { }

  ngOnInit() { }
}


