import { Component, OnInit } from '@angular/core';
import { ArticlesList } from 'src/app/interfaces/ArticlesList.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  //TODO delete 'promise'?  "!:"
  private articlesDatas !: ArticlesList;

  constructor() { }

  ngOnInit(): void {
  }

}
