import { Component, OnInit } from '@angular/core';
import { Produto } from './produto';
import { ProdutoService } from './produto.service';

@Component({
    templateUrl: './produto-list.component.html'
})
export class ProdutoListComponent implements OnInit { 

    filteredProdutos: Produto[] = [];

    _produtos: Produto[] = [];
    
    _filterBy!: string;

    constructor(private produtoService: ProdutoService) { }

    ngOnInit(): void { 
        this.retrieveAll();
    }

    retrieveAll(): void { 
        this.produtoService.retrieveAll().subscribe({
            next: produtos => {
                this._produtos = produtos;
                this.filteredProdutos = this._produtos;
            },
            error: err => console.log('Error', err) 
        })
    }

    deleteById(produtoId: number): void { 
        this.produtoService.deleteById(produtoId).subscribe({
            next: () => { 
                console.log('Deleted with success');
                this.retrieveAll();
            },
            error: err => console.log('Error', err)
        })
    }

    set filter(value: string) { 
        this._filterBy = value;

        this.filteredProdutos = this._produtos.filter((produto: Produto) => produto.title.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter() { 
        return this._filterBy;
    }

    

}