import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/common/product';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list-grid.component.html',
	styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

	products: Product[];
        currentCategoryId: number;
        searchMode: boolean;

	constructor(private productService: ProductService,
		                private route: ActivatedRoute) { }

	ngOnInit() {
		this.route.paramMap.subscribe(() => {
			this.listProducts();
		});
	}

	listProducts() {

                //check to see if this route has a parameter for this keyword because if it does have a keyword for the parameter this means we are performing a search
                this.searchMode = this.route.snapshot.paramMap.has('keyword');

                if (this.searchMode) {
                        this.handleSearchProducts();
                } else {
                        this.handleListProducts();
                }
        }


        handleSearchProducts() {
                const theKeyword: string = this.route.snapshot.paramMap.get('keyword');

                //search for products using a keyword

                this.productService.searchProducts(theKeyword).subscribe(
                        data => {
                                this.products = data; 
                        }
                )
        }


        handleListProducts() {

                const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

		if (hasCategoryId) {
			this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
		} else {
			this.currentCategoryId = 1;
		}

		this.productService.getProductList(this.currentCategoryId).subscribe(
			data => {
				this.products = data;
			}
		)
        }
}
