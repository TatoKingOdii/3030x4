import { Component } from '@angular/core';
import {ListComponent} from "../list/list.component";
import {Planet} from "../data/Planet";
import {defaultPlanets} from "../data/DefaultPlanets";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ListComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  contentList: Planet[];

  constructor() {
    this.contentList = defaultPlanets;
  }
}
