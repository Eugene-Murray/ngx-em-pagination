import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterService } from '../../services/filter.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() allData: any[] = [];
  @Output() filteredData = new EventEmitter<any[]>();

  constructor(private filterService: FilterService) { }

  ngOnInit() {
  }

  onFilterChange($event: any): void {
    const target = $event.target as HTMLInputElement;
    let filteredData = undefined;
    if(target.value !== '') {
      filteredData = this.filterService.filterDataByValue(target.value, this.allData);
      // if (filteredData.length === 0) {
      //   filteredData = [];
      // }
    } else {
      filteredData = this.allData;
    }
    this.filteredData.emit(filteredData);
  }
}
