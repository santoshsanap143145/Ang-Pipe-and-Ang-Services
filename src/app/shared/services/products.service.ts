import { Injectable } from '@angular/core';
import { Iproduct, ProductsStatus } from '../models/product';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  productArr: Array<Iproduct> = [
    {
      pname: 'Laptop',
      pdetails:
        'A lightweight 14-inch laptop featuring a full HD display, Intel i5 processor, 8GB RAM, and 512GB SSD. Perfect for students and professionals who need performance and portability.',
      pid: '101',
      pstatus: ProductsStatus.Delivered,
    },
    {
      pname: 'Smartphone',
      pdetails:
        'This smartphone offers a 6.5-inch AMOLED display, 128GB storage, 5000mAh battery, and a high-resolution camera for crystal-clear photos, gaming, and daily use without lag.',
      pid: '102',
      pstatus: ProductsStatus.InProgress,
    },
    {
      pname: 'Wireless Earbuds',
      pdetails:
        'Compact wireless earbuds with advanced Bluetooth 5.2, noise cancellation, and 24-hour battery life. Designed for music lovers and fitness enthusiasts who demand clarity and comfort.',
      pid: '103',
      pstatus: ProductsStatus.Dispatched,
    },
    {
      pname: 'Gaming Mouse',
      pdetails:
        'Ergonomic gaming mouse with customizable RGB lighting, 6 programmable buttons, and ultra-fast response time. Ideal for competitive gamers who value precision and style.',
      pid: '104',
      pstatus: ProductsStatus.InProgress,
    },
  ];

  constructor(private _snakbar: SnackbarService) {}

  fetchAllProducts(): Array<Iproduct> {
    // get API Call to fetch all data

    return this.productArr;
  }

  createProd(prodObj: Iproduct) {
    // post API call to post the product obj
    this.productArr.push(prodObj);

    this._snakbar.openSnackBar(
      `The New Product ${prodObj.pname} is added successfully !!!`
    );
  }

  updateProdStatus(updateStatus: ProductsStatus, prodId: string) {
    let objIndex = this.productArr.findIndex((p) => p.pid === prodId);
    this.productArr[objIndex].pstatus = updateStatus
    this._snakbar.openSnackBar(
      `The Status of ${this.productArr[objIndex].pname} is updated to ${updateStatus} !!!`
    );
  }
}
