import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Iproduct, ProductsStatus } from '../../models/product';
import { UuidService } from '../../services/uuid.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @ViewChild('prodForm') prodForm !: NgForm
  constructor(private _uuidService: UuidService, private _productService : ProductsService) { }

  ngOnInit(): void {
  }

  addOnClick(){
    if(this.prodForm.valid){
      let newProdObj: Iproduct = this.prodForm.value
      newProdObj.pstatus = ProductsStatus.InProgress
      newProdObj.pid = this._uuidService.uuid()
      console.log(newProdObj)
      this.prodForm.reset()
      this._productService.createProd(newProdObj)
    }
  }
}
