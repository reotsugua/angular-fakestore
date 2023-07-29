import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutolistComponent } from './produtolist/produtolist.component';
import { ProdutoInfoComponent } from './produto-info/produto-info.component';



@NgModule({
  declarations: [
    ProdutolistComponent,
    ProdutoInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProdutoModule { }
