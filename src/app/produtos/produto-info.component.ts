import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from './produto';
import { ProdutoService } from './produto.service';

@Component({
    templateUrl: './produto-info.component.html'
})
export class ProdutoInfoComponent implements OnInit {

    produto: Produto;

    constructor(private activatedRoute: ActivatedRoute, private produtoService: ProdutoService) { }
    
    ngOnInit(): void { 
        this.produtoService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
            next: produto => this.produto = produto,
            error: err => console.log('Error', err)
        });
    }

    save(): void {
        this.produtoService.save(this.produto).subscribe({
            next: produto => console.log('Saved with success', produto),
            error: err => console.log('Error', err)
        });
    }

}