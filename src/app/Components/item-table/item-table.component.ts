import { Component, OnInit } from '@angular/core';
import { TableData } from 'src/app/interface/interface__table';
import { CadastroService } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.css']
})
export class ItemTableComponent implements OnInit {
  headers: string[] = ['ID', 'Imagem', 'Nome', 'Descrição', 'Preço', 'Categorias', 'Ações'];
  excludedCategories: string[] = ['motorcycle', 'groceries', 'kitchen-accessories'];
  data: TableData[] = [];
  paginatedData: TableData[] = [];
  currentPage: number = 0;
  pageSize: number = 6;

  totalPages: number = 0;

  constructor(private service: CadastroService) { }

  ngOnInit(): void {
    this.getPageData(this.currentPage); 
  }

  getPageData(page: number) {
    this.service.getPaginatedProducts(page, this.pageSize).subscribe({
      next: (res) => {
        this.data = res.products
          .filter((item: any) => !this.excludedCategories.includes(item.category))
          .map((item: any) => ({
            id: item.id,
            image: item.images[0], 
            title: item.title,
            description: item.description,
            price: item.price,
            category: item.category,
          }));
  
        this.updatePaginatedData(); 
        this.totalPages = Math.ceil(res.total / this.pageSize);
      },
      error: (err) => console.error("Erro ao buscar os dados:", err)
    });
  }

  updatePaginatedData() {
    this.paginatedData = this.data;
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
}
