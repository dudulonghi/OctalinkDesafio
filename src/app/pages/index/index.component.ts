import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemTableComponent } from 'src/app/Components/item-table/item-table.component';
import { CadastroData } from 'src/app/data/cadastroData';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  @ViewChild(ItemTableComponent) itemTable!: ItemTableComponent;
  products: CadastroData[] = [];
  
  constructor() {}

  ngOnInit(): void {}

  onSearchTextChanged(searchText: string) {
    this.itemTable.onSearchTextChange(searchText); 
  }

  onProductAdded() {
    this.itemTable.getPageData(this.itemTable.currentPage);
  }

  addProductLocally(product: CadastroData) {
    this.products.push(product); 
  }
  
}
