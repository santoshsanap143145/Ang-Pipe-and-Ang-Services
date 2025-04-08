import { NgModule } from '@angular/core';
import { ProductsDashboardComponent } from './products-dashboard/products-dashboard.component';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductsDashboardComponent,
    ProductCardComponent,
    ProductFormComponent
  ],
  imports : [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports : [
    ProductsDashboardComponent
  ]
})
export class ProductsModule {}
