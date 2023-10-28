import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ClientPaginationService } from '../../services/client-pagination.service';

@Component({
  selector: 'ngx-client-pagination',
  templateUrl: './client-pagination.component.html',
  styleUrls: ['./client-pagination.component.scss']
})
export class ClientPaginationComponent implements OnInit, OnChanges {
  @Input() filteredData: any[] = [];
  @Output() pagedData: EventEmitter<any[]> = new EventEmitter();
  public currentPage: number = 0;
  public pageCount: number = 0;

  constructor(private paginationService: ClientPaginationService) { }

  ngOnInit(): void {
    this.paginationService.pageCount$.subscribe((pageCount) => {
      this.pageCount = pageCount;
    });
    this.paginationService.currentPage$.subscribe((currentPage) => {
      this.currentPage = currentPage;
    });

    this.paginationService.pagedData$.subscribe((pagedData) => {
      this.pagedData.emit(pagedData);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.paginationService.setFilteredData(this.filteredData);
    this.paginationService.getFirstPage();
  }

  onBack(): void {
    this.paginationService.back();
  }

  onForward(): void {
    this.paginationService.forward();
  }

  onFirst(): void {
    this.paginationService.getFirstPage();
  }

  onLast(): void {
    this.paginationService.getLastPage();
  }
}