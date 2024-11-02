import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CadastroService } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

  @Input() productId!: number; 
  @Output() productDeleted = new EventEmitter<number>();  
  verifyModalDel: boolean = false;
  showConfirm: boolean = false; 

  constructor(private cadastroService: CadastroService) { }

  ngOnInit(): void {}

  confirmDelete(): void {
    this.showConfirm = true; 
  }

  cancelDelete(): void {
    this.showConfirm = false;
  }

  deleteProduct(): void {
    if (this.productId) {
      this.cadastroService.deleteProduct(this.productId).subscribe(
        response => {
          console.log("Produto excluído com sucesso:", response);
          this.productDeleted.emit(this.productId);
          this.showConfirm = false; 
        },
        error => {
          console.error("Erro ao excluir o produto:", error);
        }
      );
    } else {
      console.warn("Nenhum ID de produto fornecido para exclusão.");
    }
  }
}
