import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'radio',
    template: `
      <div [formGroup]="form">
        <div class="custom-control custom-radio" *ngFor="let opt of field.options">

        <input class="custom-control-input" type="radio" [value]="opt.key" [name]="field.nameradio" style="z-index:1">
          <label class="custom-control-label">
            {{opt.label}}
          </label>
        </div>
    </div> 
      
    `
})
export class RadioComponent implements OnInit{
    @Input() field:any = {};
    @Input() form:FormGroup;

    ngOnInit() {
        //console.log(this.field)
    }
}