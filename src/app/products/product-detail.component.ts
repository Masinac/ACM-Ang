import { Component, OnInit } from '@angular/core';
import { IProduct } from "src/app/products/product";

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail'
  product: IProduct;

  constructor() { }

  ngOnInit() {
  }

}
