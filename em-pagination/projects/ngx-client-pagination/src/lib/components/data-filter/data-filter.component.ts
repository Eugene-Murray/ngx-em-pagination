import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FilterService } from '../../services/filter.service';


@Component({
  selector: 'ngx-client-pagination-filter',
  templateUrl: './data-filter.component.html',
  styleUrls: ['./data-filter.component.scss']
})
export class DataFilterComponent {

  @Input() data: unknown[] = [];
  @Output() filteredData = new EventEmitter<unknown[]>();

  constructor(private filterService: FilterService) { }

  onFilterChange($event: any): void {
    const target = $event.target as HTMLInputElement;
    let filteredData = undefined;
    if(target.value !== '') {
      filteredData = this.filterService.filterDataByValue(target.value, this.data);
    } else {
      filteredData = this.data;
    }
    this.filteredData.emit(filteredData);
  }
}
