import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CadastroData } from 'src/app/data/cadastroData';
import { CadastroService } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-edit-itens',
  templateUrl: './edit-itens.component.html',
  styleUrls: ['./edit-itens.component.css']
})
export class EditItensComponent implements OnInit {
  @Input() itemId!: number; 
  @Input() itemData!: CadastroData; 
  @Output() edit = new EventEmitter<CadastroData>(); 

  update: CadastroData;

  constructor(private updateService: CadastroService) {
    this.update = {
      id: 0,
      title: '',
      description: '',
      price: 0,
      category: '',
    };
  }

  ngOnInit(): void {
    if (this.itemData) {
      this.update = { ...this.itemData }; 
    }
  }

  editItem() {
    if (this.itemData) {
      this.updateService.updateProduct(this.itemId, this.update).subscribe({
        next: (updatedProduct) => {
          this.edit.emit(updatedProduct); 
          console.log("Produto atualizado:", updatedProduct); 
        },
        error: (err) => console.error("Erro ao atualizar o produto:", err)
      });
    }
  }
}
