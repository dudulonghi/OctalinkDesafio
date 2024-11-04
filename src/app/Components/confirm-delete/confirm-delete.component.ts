import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {
  @Output() confirmDelete = new EventEmitter<void>();
  @Output() cancelDelete = new EventEmitter<void>();
  
  @Input() showNotification!: (message: string, type: 'success' | 'error') => void;

  constructor() { }

  ngOnInit(): void {}

  onConfirm(): void {
    this.confirmDelete.emit();
    if (this.showNotification) {
      this.showNotification("Produto deletado com sucesso!", "success");
    }
  }

  onCancel(): void {
    this.cancelDelete.emit();
  }
  
}
