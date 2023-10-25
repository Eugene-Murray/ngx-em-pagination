import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  constructor() { }

  filterDataByValue(valueFilter: string, allData: any[]): any[] {
    return allData.filter((d) => {
      if (valueFilter) {
        return d.title.toLowerCase().includes(valueFilter.toLowerCase()) ||
        d.subTitle.toLowerCase().includes(valueFilter.toLowerCase());
      }
      return false;
    });
  }
}
