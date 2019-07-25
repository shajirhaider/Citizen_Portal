import { NgModule } from '@angular/core';
import {
  MatButtonModule, 
  MatCheckboxModule ,
  MatOptionModule,   
  MatAutocompleteModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatDatepickerModule,
  MatListModule,
  MatRadioModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatNativeDateModule,
  MatExpansionModule,
  MatTabsModule
  
} from '@angular/material';

import {DragDropModule} from '@angular/cdk/drag-drop';
@NgModule({
  imports: [
    MatButtonModule, 
    MatCheckboxModule ,
    MatOptionModule,   
    MatAutocompleteModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatDatepickerModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,    
    MatSortModule,
    MatNativeDateModule,
    DragDropModule,
    MatExpansionModule,
    MatTabsModule
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule ,  
    MatOptionModule, 
    MatAutocompleteModule,
    MatFormFieldModule,
    MatGridListModule,
    MatDatepickerModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule, 
    MatSortModule,
    MatNativeDateModule,
    DragDropModule,
    MatExpansionModule,
    MatTabsModule
  ],
})
export class MaterialModule { }