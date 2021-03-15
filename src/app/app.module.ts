import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
