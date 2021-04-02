import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../common/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductCategory } from '../common/product-category';

@Injectable({
	providedIn: 'root'
})
export class ProductService {




	private baseUrl = 'http://localhost:8082/api/products';
	private categoryUrl = 'http://localhost:8082/api/product-category';


	constructor(private httpClient: HttpClient) { }

	getProductList(theCategoryId: number): Observable<Product[]> {

		//build URL based on category id

		const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

		return this.getProducts(searchUrl);
	}

	getProductCategories(): Observable<ProductCategory[]> {
		return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
			map(response => response._embedded.productCategory)
		);
	}

	searchProducts(theKeyword: string): Observable<Product[]> {

		const searchProduct: string = `${this.baseUrl}/search/findByNameContainingIgnoreCase?name=${theKeyword}`;
		return this.getProducts(searchProduct);
	}

	private getProducts(searchProduct: string): Observable<Product[]> {
		return this.httpClient.get<GetResponseProducts>(searchProduct).pipe(
			map(response => response._embedded.products)
		);
	}

	getProduct(theProductId: number): Observable<Product> {
		const productUrl:string = `${this.baseUrl}/${theProductId}`;
		return this.httpClient.get<Product>(productUrl);
	}
}

interface GetResponseProducts {
	_embedded: {
		products: Product[];
	},
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
	}
}

interface GetResponseProductCategory {
	_embedded: {
		productCategory: ProductCategory[];
	}
}