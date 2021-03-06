import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';

const routes: Routes = [
	{ path: 'products/:id', component: ProductDetailsComponent },
	{ path: 'category/:id', component: ProductListComponent },
	{ path: 'employees', component: EmployeeListComponent},
	{ path: 'category', component: ProductListComponent },
	{ path: 'products', component: ProductListComponent },
	{ path: 'weather', component: WeatherDetailsComponent},
	{ path: 'search/:keyword', component: ProductListComponent },
	{ path: '', redirectTo: '/products', pathMatch: 'full' },	
	{ path: '**', redirectTo: '/products', pathMatch: 'full' }
];

@NgModule({
	declarations: [
		AppComponent,
		ProductListComponent,
		EmployeeListComponent,
		ProductCategoryMenuComponent,
		SearchComponent,
		ProductDetailsComponent,
		WeatherDetailsComponent
	],
	imports: [
		RouterModule.forRoot(routes),
		BrowserModule,
		HttpClientModule,
		NgbModule
	],
	providers: [ProductService],
	bootstrap: [AppComponent]
})
export class AppModule { }
