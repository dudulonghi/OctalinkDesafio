
import { Component, OnInit } from '@angular/core';
import { CadastroData } from 'src/app/data/cadastroData';
import { TableData } from 'src/app/interface/interface__table';
import { CadastroService } from 'src/app/services/cadastro.service';

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

  constructor(private service: CadastroService) {}

  ngOnInit(): void {
    this.getPageData(this.currentPage); 
  }

  getPageData(page: number) {
    this.service.getPaginatedProducts(page, this.pageSize).subscribe({
      next: (res) => {
        const filteredProducts = res.products.filter((item: any) => 
          !this.excludedCategories.includes(item.category)
        );
          if (filteredProducts.length === 0) {
          this.currentPage++;
          this.getPageData(this.currentPage); 
        } else {
          this.data = filteredProducts.map((item: any) => ({
            id: item.id,
            title: item.title,
            description: item.description,
            price: item.price,
            category: item.category,
          }));
  
          this.updatePaginatedData();
          this.totalPages = Math.ceil(res.total / this.pageSize);
        }
      },
      error: (err) => console.error("Erro ao buscar os dados:", err)
    });
  }

  updatePaginatedData() {
    this.paginatedData = this.data;
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
  

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.getPageData(this.currentPage); 
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.getPageData(this.currentPage);
    }
  }

  
  updateItem(updatedData: CadastroData) {
    const index = this.paginatedData.findIndex(item => item.id === updatedData.id);
    if (index !== -1) {
      this.paginatedData[index] = updatedData;
    }
  }
  removeItemFromList(productId: number) {
    this.paginatedData = this.paginatedData.filter(item => item.id !== productId);
  }
  
}
