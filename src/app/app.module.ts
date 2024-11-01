import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFilterComponent } from './Components/search-filter/search-filter.component';
import { ModalAddComponent } from './Components/modal-add/modal-add.component';
import { DeleteModalComponent } from './Components/delete-modal/delete-modal.component';
import { ItemTableComponent } from './Components/item-table/item-table.component';
import { PaginationComponent } from './Components/pagination/pagination.component';
import { IndexComponent } from './pages/index/index.component';
import { EditItensComponent } from './Components/edit-itens/edit-itens.component';

import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    SearchFilterComponent,
    ModalAddComponent,
    DeleteModalComponent,
    ItemTableComponent,
    PaginationComponent,
    IndexComponent,
    EditItensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
