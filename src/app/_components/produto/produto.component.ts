import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../_service/produto.service';
import { Produto } from '../../_models/produto';

@Component({
  selector: 'app-produto',
  standalone: false,
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent implements OnInit{

  newProduct: Produto = {nome: '', preco: 0, descricao: ''};
  products: Produto[] = [];

  constructor(private produtoService: ProdutoService) {}
  
  ngOnInit(): void {
    this.listProdutct;
  }

  addProduct(){
    this.produtoService.postProduct(this.newProduct).subscribe(produto => {
      this.products.push(produto);
      this.newProduct = {nome: '', preco: 0, descricao: ''};
    });
  }

  listProdutct(){
    this.produtoService.getProduct().subscribe(produtos => {
      this.products = produtos;
    });
  }

}
