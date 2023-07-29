import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ProdutoModule } from './produtos/produto.module';
import { CoreModule } from './core/core.module';
import { Error404Compoennt } from './core/component/error-404/error-404.component';

@NgModule({
  declarations: [
    AppComponent,
    Error404Compoennt
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'produtos', pathMatch: 'full'
      }, 
      {
        path: '**', component: Error404Compoennt
      }
    ]),
    ProdutoModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
