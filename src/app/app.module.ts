import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFilterComponent } from './Components/search-filter/search-filter.component';
import { ModalAddComponent } from './Components/modal-add/modal-add.component';
import { DeleteModalComponent } from './Components/delete-modal/delete-modal.component';
import { ItemTableComponent } from './Components/item-table/item-table.component';
import { PaginationComponent } from './Components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFilterComponent,
    ModalAddComponent,
    DeleteModalComponent,
    ItemTableComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
