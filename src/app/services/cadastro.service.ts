import { Injectable, OnInit } from '@angular/core';
import { CadastroData } from '../data/cadastroData';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interface/apiResponde';

@Injectable({
  providedIn: 'root'
})
export class CadastroService implements OnInit{

  private baseURL:string = "https://dummyjson.com/products"

  constructor(private http:HttpClient) { 
    this.baseURL = this.baseURL
  }

  ngOnInit(): void {
      
  }

  getPaginatedProducts(page: number, pageSize: number): Observable<any> {
    const skip = page * pageSize; 
    return this.http.get(`https://dummyjson.com/products?limit=${pageSize}&skip=${skip}`);
  }
}
