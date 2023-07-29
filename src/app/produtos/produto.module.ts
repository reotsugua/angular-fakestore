import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutolistComponent } from './produto-list.component';
import { ProdutoInfoComponent } from './produto-info.component';



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
