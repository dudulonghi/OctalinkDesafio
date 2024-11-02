import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {

  @Output() confirmDelete = new EventEmitter<void>();
  @Output() cancelDelete = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {}

  onConfirm(): void {
    this.confirmDelete.emit();
  }

  onCancel(): void {
    this.cancelDelete.emit();
  }
}
