import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { DataTableComponent } from './data-table/data-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableRoutingModule } from './table-routing.module';
import { MatIconModule } from "@angular/material/icon";
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    DataTableComponent
  ],
  imports: [
    TableRoutingModule,
    CommonModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSortModule,
    MatButtonModule
  ],

})
export class TableModule { }
