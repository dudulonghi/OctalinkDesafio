import { Injectable, OnInit } from '@angular/core';
import { CadastroData } from '../data/cadastroData';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interface/apiResponde';
import { UpdateCadastroData } from '../interface/update';

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
    return this.http.get(`${this.baseURL}?limit=${pageSize}&skip=${skip}`);
  }

  getAllProducts(): Observable<any> {
    return this.http.get<CadastroData>(`https://dummyjson.com/products?limit=200`);
  }

  searchProducts(searchTerm: string): Observable<any> {
    return this.http.get(`${this.baseURL}/search?q=${searchTerm}`);
  }

  addProduct(productData: CadastroData): Observable<CadastroData> {
    return this.http.post<CadastroData>(`${this.baseURL}/add`, productData);
  }

  updateProduct(id: number, productData: UpdateCadastroData): Observable<CadastroData> {
    return this.http.put<CadastroData>(`https://dummyjson.com/products/${id}`, productData);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
