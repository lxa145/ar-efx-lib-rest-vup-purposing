import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { DynamicFormBuilderComponent } from './dynamic-form-builder.component';
import { FieldBuilderComponent } from 'src/app/formularios/field-builder/field-builder.component';
import { TextBoxComponent } from 'src/app/formularios/campos/textbox';
import { DropDownComponent } from 'src/app/formularios/campos/dropdown';
import { FileComponent } from 'src/app/formularios/campos/file';
import { CheckBoxComponent } from 'src/app/formularios/campos/checkbox';
import { RadioComponent } from 'src/app/formularios/campos/radio';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DynamicFormBuilderComponent,
    FieldBuilderComponent,
    TextBoxComponent,
    DropDownComponent,
    CheckBoxComponent,
    FileComponent,
    RadioComponent
  ],
  exports: [DynamicFormBuilderComponent],
  providers: []
})
export class DynamicFormBuilderModule { }
