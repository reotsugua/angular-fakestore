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

    save(produto: Produto): Observable<Produto> { 
        if(produto.id) { 
            return this.httpClient.put<Produto>(`${this.produtosUrl}/${produto.id}`, produto);
        } else { 
            return this.httpClient.post<Produto>(`${this.produtosUrl}`, produto);
        }
    }

    deleteById(id: number): Observable<any> {
        return this.httpClient.delete<any>(`${this.produtosUrl}/${id}`);
    }

}

