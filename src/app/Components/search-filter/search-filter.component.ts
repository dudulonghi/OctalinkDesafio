import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent {
  @Output() searchTextChanged = new EventEmitter<string>();

  onSearchTextChange(event: any) {
    this.searchTextChanged.emit(event.target.value);
  }
}
