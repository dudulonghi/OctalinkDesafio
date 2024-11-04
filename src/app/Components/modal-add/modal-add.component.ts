import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { CadastroData } from 'src/app/data/cadastroData';
import { NotificationComponent } from '../notifications/notifications.component';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.css']
})
export class ModalAddComponent {
  @Output() productAdded = new EventEmitter<CadastroData>();
  showModal: boolean = false;

  @ViewChild('notification') notification!: NotificationComponent;

  constructor() {}

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  onProductAdded(product: CadastroData) {
    console.log('Produto adicionado:', product);
    this.notification.showNotification('Item adicionado com sucesso!', 'success');
  }
}
