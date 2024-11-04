import { Component, OnInit, ViewChild } from '@angular/core';
import { CadastroData } from 'src/app/data/cadastroData';
import { TableData } from 'src/app/interface/interface__table';
import { CadastroService } from 'src/app/services/cadastro.service';
import { NotificationComponent } from '../notifications/notifications.component';
import { ModalCadastroComponent } from '../modal-cadastro/modal-cadastro.component';

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.css']
})
export class ItemTableComponent implements OnInit {
  headers: string[] = ['ID', 'Nome', 'Descrição', 'Preço', 'Categorias', 'Ações'];
  excludedCategories: string[] = ['motorcycle', 'groceries', 'kitchen-accessories'];
  data: TableData[] = [];
  paginatedData: TableData[] = [];
  currentPage: number = 0;
  pageSize: number = 6;
  totalPages: number = 0;
  allProducts: TableData[] = [];
  selectedProductId: number = 0;
  showConfirmDelete: boolean = false;
  productIdToDelete!: number;
  isLoading: boolean = false;
  quant:number = 0;
  remainingData: TableData[] = [];
  excessItems: any[] = [];
  selectedItem: any = null;
  createdProducts: TableData[] = [];

  @ViewChild('notification') notification!: NotificationComponent;
  @ViewChild(ModalCadastroComponent) modalCadastro!: ModalCadastroComponent;

  constructor(private service: CadastroService) {}

  ngOnInit(): void {
    this.getPageData(this.quant);
  }
  showNotification(message: string) {
    this.notification.showNotification(message, 'success'); 
  }
  getPageData(page: number) {
  this.isLoading = true;
  if (this.excessItems.length > 0) {
    const neededItems = this.pageSize - this.data.length;
    const itemsToAdd = this.excessItems.slice(0, neededItems);
    this.data = [...this.data, ...itemsToAdd];
    this.excessItems = this.excessItems.slice(neededItems); 

    if (this.data.length === this.pageSize) {
      this.updatePaginatedData();
      this.isLoading = false;
      return;
    }
  }
  this.service.getPaginatedProducts(page, this.pageSize).subscribe({
    next: (res) => {
      if (res.products.length === 0) {
        this.updatePaginatedData();
        this.isLoading = false;
        return;
      }
      const filteredProducts = res.products.filter((item: any) =>
        !this.excludedCategories.includes(item.category)
      );
      const neededItems = this.pageSize - this.data.length;
      const itemsToAdd = filteredProducts.slice(0, neededItems);
      this.data = [...this.data, ...itemsToAdd];
      if (filteredProducts.length > neededItems) {
        this.excessItems = filteredProducts.slice(neededItems);
      }
      if (this.data.length < this.pageSize) {
        this.currentPage++;
        this.getPageData(this.currentPage);
      } else {
        this.updatePaginatedData();
        this.totalPages = Math.ceil(res.total / this.pageSize);
        this.isLoading = false;
      }
    },
    error: (err) => {
      console.error("Erro ao buscar os dados:", err);
      this.isLoading = false;
    }
  });
}

  updatePaginatedData() {
    this.paginatedData = this.data.slice(0, this.pageSize);
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.data = [];
      this.getPageData(this.currentPage);
    }
  }

  previousPage() {
    if (this.currentPage <= 0) return;  
    this.isLoading = true;
    this.currentPage -= 1

    const minId = this.data.length ? Math.min(...this.data.map(item => item.id)) : null;
    if (minId === null) {
      this.isLoading = false;
      return;
    }
    let collectedItems: TableData[] = [];
  
    const fetchPreviousData = (lowestId: number) => {
      this.service.getPaginatedProducts(this.currentPage, this.pageSize).subscribe({
        next: (res) => {
          console.log("current dentro do previus", this.currentPage);
          console.log("quant dentro do previus", this.quant);
          const newProducts = res.products
            .filter((product: any) =>
              !this.excludedCategories.includes(product.category) &&
              product.id < lowestId &&
              !collectedItems.some(existingItem => existingItem.id === product.id)
            )
            .map((product: any) => ({
              id: product.id,
              title: product.title,
              description: product.description,
              price: product.price,
              category: product.category,
            }));
  
          collectedItems = [...collectedItems, ...newProducts];
          if (collectedItems.length < this.pageSize && this.currentPage > 1) {
            this.currentPage--;
            fetchPreviousData(lowestId); 
          } else {
            collectedItems.sort((a, b) => a.id - b.id); 
            this.data = [...collectedItems, ...this.data].slice(0, this.pageSize); 
            this.updatePaginatedData();
            this.isLoading = false;
          }
        },
        error: (error) => {
          console.error("Erro ao buscar os dados:", error);
          this.isLoading = false;
        }
      });
    };
  
    fetchPreviousData(minId);
  }
  
  onSearchTextChange(searchText: string) {
    if (!searchText) {
      this.updatePaginatedData();
    } else {
      this.service.getAllProducts().subscribe({
        next: (res) => {
          this.paginatedData = res.products
            .filter((item: any) =>
              !this.excludedCategories.includes(item.category) &&
              (
                item.title.toLowerCase().includes(searchText.toLowerCase()) ||
                item.description.toLowerCase().includes(searchText.toLowerCase()) ||
                item.category.toLowerCase().includes(searchText.toLowerCase()) ||
                item.price.toString().includes(searchText)
              )
            )
            .map((item: any) => ({
              id: item.id,
              title: item.title,
              description: item.description,
              price: item.price,
              category: item.category,
            }));
        },
        error: (err) => console.error("Erro ao buscar todos os produtos:", err)
      });
    }
  }

  removeItemFromList(productId: number) {
    this.paginatedData = this.paginatedData.filter(item => item.id !== productId);
  }

  onProductDeleted(productId: number): void {
    this.paginatedData = this.paginatedData.filter(item => item.id !== productId);
  }


  closeEditModal() {
    this.selectedItem = null;
  }

  openEditModal(itemData: CadastroData): void {
    this.modalCadastro.openModalWithData(itemData); 
  }

  onProductUpdated(updatedProduct: CadastroData): void {
    const index = this.data.findIndex(item => item.id === updatedProduct.id);
    if (index !== -1) {
      this.data[index] = updatedProduct;
      this.updatePaginatedData();
    }
  }
}
