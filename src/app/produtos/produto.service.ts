import { Produto } from './produto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ProdutoService { 

    private produtosUrl: string = 'https://fakestoreapi.com/products';

    constructor(private httpClient: HttpClient) { }

    retrieveAll(): Observable<Produto[]> {
        return this.httpClient.get<Produto[]>(this.produtosUrl);
    }

    retrieveById(id: number): Observable<Produto> { 
        return this.httpClient.get<Produto>(`${this.produtosUrl}/${id}`);
    }

    

    

}

