import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Content } from 'src/app/models/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pagination-grid',
  templateUrl: './pagination-grid.component.html',
  styleUrls: ['./pagination-grid.component.scss']
})
export class PaginationGridComponent {
  data$: Observable<Content[]> = this.dataService.getContent() ?? [];

  constructor(private dataService: DataService) { }
}
