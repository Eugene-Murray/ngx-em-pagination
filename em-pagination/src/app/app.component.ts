import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'em-pagination';
  allData: any[] = [];
  filteredData: any[] = [];
  pagedData: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService
        .getContent().subscribe((content) => {
        this.allData = content;
        this.filteredData = this.allData;
      });
  }

  onFilteredData($event: any): void {
    this.filteredData = $event;
  }

  onPagedData(pagedData: any[]): void {
    this.pagedData = pagedData;
  }
}
