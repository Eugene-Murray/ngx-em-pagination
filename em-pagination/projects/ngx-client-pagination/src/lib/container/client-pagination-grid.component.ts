import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Config } from '../model/interfaces';
import { ClientPaginationService } from '../services/client-pagination.service';

@Component({
  selector: 'ngx-client-pagination-grid',
  templateUrl: './client-pagination-grid.component.html',
  styleUrls: ['./client-pagination-grid.component.scss']
})
export class ClientPaginationGridComponent implements OnInit, OnChanges {
  @Input() data: any[] | null = [];
  @Input() config: Config = {
    showFilter: true,
    showPaginationTop: true,
    showPaginationBottom: true,
    gridColumnNames: [],
    gridFields: []
  };

  filteredData: unknown[] = [];

  constructor(public paginationService: ClientPaginationService) {}

  ngOnInit(): void {
    this.paginationService.getFirstPage();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.filteredData?.length === 0) {
      this.filteredData = this.data ?? [];
      this.paginationService.getFirstPage();
    }
  }

  onFilteredData($event: any): void {
    this.filteredData = $event;
  }
}
