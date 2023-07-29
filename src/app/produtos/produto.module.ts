import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoListComponent } from './produto-list.component';
import { ProdutoInfoComponent } from './produto-info.component';
import { StarModule } from '../shared/component/star/star.module';
import { AppPipeModule } from '../shared/pipe/app-pipe.module';



@NgModule({
  declarations: [
    ProdutoListComponent,
    ProdutoInfoComponent
  ],
  imports: [
    CommonModule,
    StarModule,
    AppPipeModule,
    RouterModule.forChild([
      {path: 'produtos', component: ProdutoListComponent},
      {path: 'produtos/info/:id', component: ProdutoInfoComponent}
    ])

  ]
})
export class ProdutoModule { }
