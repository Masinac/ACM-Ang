import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "src/app/products/product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product.list.component.css']
})

export class ProductListComponent implements OnInit {
    title: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [];

    constructor(private productService: ProductService) {
    }

    ngOnInit() {
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
    }

    toogleImage(): void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

  onRatingClicked(rating: string): void {
    this.title = 'Product List ' + rating;
  }
}
