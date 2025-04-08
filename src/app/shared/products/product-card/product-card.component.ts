import { Component, Input, OnInit } from '@angular/core';
import { Iproduct, ProductsStatus } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() prodObj !: Iproduct;
  productStatus = ProductsStatus
  constructor(private _productService: ProductsService) { }

  ngOnInit(): void {
  }

  statusUpdateOnClick(updateStatus: ProductsStatus){
    this._productService.updateProdStatus(updateStatus, this.prodObj.pid)
  }
}
