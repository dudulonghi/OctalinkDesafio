import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroService } from 'src/app/services/cadastro.service';
import { CadastroData } from 'src/app/data/cadastroData';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.css']
})
export class ModalAddComponent {
  @Output() productAdded = new EventEmitter<CadastroData>();
  showModal: boolean = false;

  constructor() {
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
  onProductAdded(product: CadastroData) {
    console.log('Produto adicionado:', product);
  }
}
