import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../_models/produto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url = "http://localhost:3000/produtos";

  constructor(private http: HttpClient) {}

  postProduct(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.url, produto);
  }

  getProduct(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url);
  }
}
