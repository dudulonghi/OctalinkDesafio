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
    return this.http.get(`${this.baseURL}?limit=${pageSize}&skip=${skip}`);
  }

  //esse para o search, porque se eu utilizar o da tabela, carrega so os 6
  getAllProducts(): Observable<any> {
    return this.http.get<CadastroData>(`https://dummyjson.com/products?limit=200`);
  }

  searchProducts(searchTerm: string): Observable<any> {
    return this.http.get(`${this.baseURL}/search?q=${searchTerm}`);
  }

  addProduct(productData: CadastroData): Observable<CadastroData> {
    return this.http.post<CadastroData>(`${this.baseURL}/add`, productData);
  }

  updateProduct(id: number, productData: CadastroData): Observable<CadastroData> {
    return this.http.put<CadastroData>(`${this.baseURL}/${id}`, productData);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
