import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from './produto';
import { ProdutoService } from './produto.service';

@Component({
    templateUrl: './produto-info.component.html'
})
export class ProdutoInfoComponent implements OnInit {

  produto!: Produto;

  constructor(private activatedRoute: ActivatedRoute, private produtoService: ProdutoService) { }


  ngOnInit(): void {
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      const numericId = id ? parseInt(id, 10) : null; // ou Number(id)

      if (numericId !== null) {
          this.produtoService.retrieveById(numericId).subscribe({
          next: produto => this.produto = produto,
          error: err => console.log('Error', err)
          });
      } else {
          console.log('Invalid ID');
      }


      
  }

  

}