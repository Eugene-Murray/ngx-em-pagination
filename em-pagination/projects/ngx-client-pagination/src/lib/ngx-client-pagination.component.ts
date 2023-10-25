import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgxClientPaginationService } from './ngx-client-pagination.service';

@Component({
  selector: 'ngx-client-pagination',
  templateUrl: './ngx-client-pagination.component.html',
  styleUrls: ['./ngx-client-pagination.component.scss']
})
export class NgxClinetPaginationComponent implements OnInit, OnChanges {
  @Input() filteredData: any[] = [];
  @Output() pagedData: EventEmitter<any[]> = new EventEmitter();
  public currentPage: number = 0;
  public pageCount: number = 0;

  constructor(private paginationService: NgxClientPaginationService) { }

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
    this.pagedData.emit(this.filteredData);
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
