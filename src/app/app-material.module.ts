import { NgModule } from '@angular/core';
import {
  MatButtonModule, 
  MatCheckboxModule ,
  MatOptionModule,   
  MatAutocompleteModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatListModule,
  MatRadioModule,
  MatSelectModule,
  MatSnackBarModule,
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
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatSnackBarModule,
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule ,  
    MatOptionModule, 
    MatAutocompleteModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatSnackBarModule,
  ],
})
export class MaterialModule { }