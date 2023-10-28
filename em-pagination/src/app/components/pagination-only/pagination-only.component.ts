import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Content } from 'src/app/models/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pagination-only',
  templateUrl: './pagination-only.component.html',
  styleUrls: ['./pagination-only.component.scss']
})
export class PaginationOnlyComponent {
  data$: Observable<Content[]> = this.dataService.getContent() ?? [];

  constructor(private dataService: DataService) { }
}
