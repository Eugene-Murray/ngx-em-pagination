import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  constructor() { }

  filterDataByValue(valueFilter: string, allData: any[]): unknown[] {
    return allData.filter((d) => {
      if (valueFilter && d?.hasOwnProperty('title') && d?.hasOwnProperty('subTitle')) {
        return d.title.toLowerCase().includes(valueFilter.toLowerCase()) ||
        d?.subTitle?.toLowerCase().includes(valueFilter.toLowerCase());
      }
      return false;
    });
  }
}
