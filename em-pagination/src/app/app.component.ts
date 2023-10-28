import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { Content } from './models/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'em-pagination';
  data$: Observable<Content[]> = this.dataService.getContent() ?? [];

  constructor(private dataService: DataService) { }
}
