import { Component, EventEmitter, OnInit, Output, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroData } from 'src/app/data/cadastroData';
import { UpdateCadastroData } from 'src/app/interface/update';
import { CadastroService } from 'src/app/services/cadastro.service';
import { NotificationComponent } from '../notifications/notifications.component';

@Component({
  selector: 'app-modal-cadastro',
  templateUrl: './modal-cadastro.component.html',
  styleUrls: ['./modal-cadastro.component.css']
})
export class ModalCadastroComponent implements OnInit {
  @Output() productAdded = new EventEmitter<CadastroData>();
  @Output() productUpdated = new EventEmitter<CadastroData>();
  @Input() productData?: CadastroData;

  @ViewChild('notification') notification!: NotificationComponent;

  addProductForm: FormGroup;
  showModal: boolean = false;
  isEditMode: boolean = false;

  constructor(private fb: FormBuilder, private service: CadastroService, ) {
    this.addProductForm = this.fb.group({
      id: [null],
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      priceNet: [0, [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      discountPercentage: [0, Validators.required],
      discount: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
    });
  }

  ngOnInit(): void {
    if (this.productData) {
      this.setEditMode(this.productData);
    }
  }

  openModal() {
    this.isEditMode = false;
    this.showModal = true;
  }

  openModalWithData(productData: CadastroData) {
    this.setEditMode(productData);
    this.showModal = true;
  }

  setEditMode(productData: CadastroData) {
    this.isEditMode = true;
    this.addProductForm.patchValue(productData);
  }

  closeModal() {
    this.showModal = false;
    this.addProductForm.reset();
  }

    onSubmit() {
      if (this.addProductForm.valid) {
        
          const productData: CadastroData = this.addProductForm.value;
          if (this.isEditMode) {
              if (productData.id) {
                  const { id, ...update } = productData;
                  
                  this.service.updateProduct(productData.id, update).subscribe({
                      next: (updatedProduct) => {
                          this.productUpdated.emit(updatedProduct);                    
                          this.closeModal();
                      },
                      error: (err) => {
                          console.error("Erro ao atualizar o produto:", err);
                          console.log('Erro ao atualizar o produto.', 'error');
                      }
                  });
              } else {
                  console.error('ID do produto não está definido para atualização');
              }
          } else  {
          this.service.addProduct(productData).subscribe({
            next: (newProduct) => {
              this.productAdded.emit(newProduct);
              this.closeModal();
              console.log('Produto adicionado com sucesso!', 'success');
            },
            error: (err) => {
              console.error("Erro ao adicionar o produto:", err);
              console.log('Erro ao adicionar o produto.', 'error');
            }
          });
        }
      }
    }
}
