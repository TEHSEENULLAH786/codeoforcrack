import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-feed',
  templateUrl: './dashboard-feed.component.html',
  styleUrls: ['./dashboard-feed.component.css']
})
export class DashboardFeedComponent implements OnInit {

  val: number = 50;
  value:number = 10
  constructor() { }

  ngOnInit(): void {
  }
}
