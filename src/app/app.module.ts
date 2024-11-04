import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFilterComponent } from './Components/search-filter/search-filter.component';
import { ModalAddComponent } from './Components/modal-add/modal-add.component';
import { DeleteModalComponent } from './Components/delete-modal/delete-modal.component';
import { ItemTableComponent } from './Components/item-table/item-table.component';
import { IndexComponent } from './pages/index/index.component';
import { EditItensComponent } from './Components/edit-itens/edit-itens.component';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalCadastroComponent } from './Components/modal-cadastro/modal-cadastro.component';
import { ConfirmDeleteComponent } from './Components/confirm-delete/confirm-delete.component';
import { NotificationComponent } from './Components/notifications/notifications.component';
import { LoadingComponent } from './Components/loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    SearchFilterComponent,
    ModalAddComponent,
    DeleteModalComponent,
    ItemTableComponent,
    IndexComponent,
    EditItensComponent,
    ModalCadastroComponent,
    ConfirmDeleteComponent,
    NotificationComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
