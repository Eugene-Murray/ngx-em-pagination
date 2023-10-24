import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgxClientPaginationService {
  private filteredData: unknown[] = [];
  private pagedSubject = new BehaviorSubject<any[]>([]);
  private pageCountSubject = new BehaviorSubject<number>(0);
  private currentPageSubject = new BehaviorSubject<number>(1);
  private pageSize: number = 9;
  private currentPage: number = 1;
  private pageCount: number = 0;

  public pagedData$ = this.pagedSubject.asObservable();
  public pageCount$ = this.pageCountSubject.asObservable();
  public currentPage$ = this.currentPageSubject.asObservable();

  constructor() { }

  setFilteredData(filteredData: any[]): void {
    this.filteredData = filteredData;
    this.pageCount = Math.ceil(this.filteredData.length / this.pageSize);
    this.pageCountSubject.next(this.pageCount);
    this.currentPageSubject.next(1);
  }

  getFirstPage(): void {
    if (!this.filteredData || this.filteredData.length === 0) { return; }
    this.currentPage = 1;
    const startIndex = 0;
    const endIndex = this.getEndIndex(startIndex);
    const page = this.filteredData.slice(startIndex, endIndex);
    this.pagedSubject.next(page);
    this.currentPageSubject.next(1);
  }

  getLastPage(): void {
    if (!this.filteredData || this.filteredData.length === 0) { return; }
    this.currentPage = this.pageCount;
    const startIndex = this.filteredData.length - this.pageSize;
    const endIndex = this.getEndIndex(startIndex);
    const page = this.filteredData.slice(startIndex, endIndex);
    this.pagedSubject.next(page);
    this.currentPageSubject.next(this.pageCount);
  }

  forward(): void {
    if (!this.filteredData || this.filteredData.length === 0) { return; }
    this.currentPage = this.currentPage + 1;
    const startIndex = this.getStartIndex();
    const endIndex = this.getEndIndex(startIndex);
    const pagedVessels = this.filteredData.slice(startIndex, endIndex);
    this.pagedSubject.next(pagedVessels);
    this.currentPageSubject.next(this.currentPage);
  }

  back(): void {
    if (!this.filteredData || this.filteredData.length === 0) { return; }
    this.currentPage = this.currentPage - 1;
    const startIndex = this.getStartIndex();
    const endIndex = this.getEndIndex(startIndex);
    const pagedVessels = this.filteredData.slice(startIndex, endIndex);
    this.pagedSubject.next(pagedVessels);
    this.currentPageSubject.next(this.currentPage);
  }

  private getStartIndex(): number {
    return (this.currentPage - 1) * this.pageSize;
  }

  private getEndIndex(startIndex: number): number {
    return Math.min(startIndex + this.pageSize, this.filteredData.length);
  }
}
