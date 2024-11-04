import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CadastroData } from 'src/app/data/cadastroData';

@Component({
  selector: 'app-edit-itens',
  templateUrl: './edit-itens.component.html',
  styleUrls: ['./edit-itens.component.css']
})
export class EditItensComponent {
  @Input() itemId!: number;
  @Input() itemData!: CadastroData;
  @Output() editClicked = new EventEmitter<CadastroData>();

  editItem() {
    this.editClicked.emit(this.itemData);
  }
  
}
