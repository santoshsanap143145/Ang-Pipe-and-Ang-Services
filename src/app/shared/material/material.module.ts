import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

const MatModArr = [
  MatButtonModule,
  MatSnackBarModule,
  MatIconModule,
  MatCardModule,
  MatDividerModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MatModArr
  ],
  exports: [
    ...MatModArr
  ],
})
export class MaterialModule {}
