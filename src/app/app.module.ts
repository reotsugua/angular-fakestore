import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ProdutoModule } from './produtos/produto.module';
import { CoreModule } from './core/core.module';
import { Error404Component } from './core/component/error-404/error-404.component';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component
  ],
  imports: [
    CoreModule,
    ProdutoModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'produtos', pathMatch: 'full'}, 
      {path: '**', component: Error404Component}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
