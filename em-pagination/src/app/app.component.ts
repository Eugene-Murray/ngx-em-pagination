import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'em-pagination';

  filteredData = [{
    id: 1,
    name: 'John',
  }, 
  { 
    id: 2,
    name: 'John',
   },
   { 
    id: 2,
    name: 'John',
   },
   { 
    id: 2,
    name: 'John',
   },
   { 
    id: 2,
    name: 'John',
   }]
}
