import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.scss'],
})
export class ProductsDashboardComponent implements OnInit {
  productsArr: Array<Iproduct> = [];
  constructor(
    private _productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productsArr = this._productsService.fetchAllProducts()
  }
}
