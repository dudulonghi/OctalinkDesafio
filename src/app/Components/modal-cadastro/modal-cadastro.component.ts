import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroData } from 'src/app/data/cadastroData';
import { CadastroService } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-modal-cadastro',
  templateUrl: './modal-cadastro.component.html',
  styleUrls: ['./modal-cadastro.component.css']
})
export class ModalCadastroComponent implements OnInit {
  @Output() productAdded = new EventEmitter<CadastroData>();
  addProductForm: FormGroup;
  showModal: boolean = false;

  constructor(private fb: FormBuilder, private service: CadastroService) {
    this.addProductForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      priceNet: [0, [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      discount: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
    });
  }

  ngOnInit(): void {}

  openModal() {
    this.showModal = true;
  }

  openModalWithData(productData: CadastroData) {
    this.addProductForm.patchValue(productData); 
    this.showModal = true; 
  }

  closeModal() {
    this.showModal = false;
  }

  onSubmit() {
    if (this.addProductForm.valid) {
      const productData: CadastroData = this.addProductForm.value;
        if (!productData.id) {
        this.service.addProduct(productData).subscribe({
          next: (newProduct) => {
            this.productAdded.emit(newProduct); 
            this.closeModal();
            this.addProductForm.reset();
          },
          error: (err) => console.error("Erro ao adicionar o produto:", err)
        });
      } else {
        this.service.updateProduct(productData.id, productData).subscribe({
          next: () => {
            this.closeModal();
            this.addProductForm.reset();
          },
          error: (err) => console.error("Erro ao atualizar o produto:", err)
        });
      }
    }
  }
  
}