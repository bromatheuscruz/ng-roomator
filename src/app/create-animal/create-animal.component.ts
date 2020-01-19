import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimalService } from '../animal.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-animal',
  templateUrl: './create-animal.component.html',
  styleUrls: ['./create-animal.component.css']
})
export class CreateAnimalComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private animalService: AnimalService,
    private toastrService: ToastrService) { }

  animalTypes: Array<string> = [ "COW", "CHICKEN", "PIG" ];
  form: FormGroup;

  ngOnInit() {
    this.form = this.formBuilder.group({
      type: [null, Validators.required],
      weight: [null, [Validators.required, Validators.min(0.00)]]
    })
  }

  onSubmit() {
    
    if (!this.form.invalid) {
      this.animalService.insert({
        type: this.form.controls.type.value,
        weight: this.form.controls.weight.value
      }).subscribe(_ => { 
        this.toastrService.success("Animal created") 
        this.form.reset();
      });
    } else {
      this.toastrService.error("Invalid animal")
    }
  }

}
