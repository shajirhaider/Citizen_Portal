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
  MatNativeDateModule
  
} from '@angular/material';

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
    MatNativeDateModule
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
    MatNativeDateModule
  ],
})
export class MaterialModule { }