import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-custom-current-value',
  templateUrl: './custom-current-value.component.html',
  styleUrls: ['./custom-current-value.component.css']
})
export class CustomCurrentValueComponent implements OnInit {

  constructor(private animalService: AnimalService, private formBuilder: FormBuilder) { }

  customCurrentValue: any;
  form: FormGroup;

  ngOnInit() {
    this.form = this.formBuilder.group({
      cowValue: [0],
      pigValue: [0],
      chickenValue: [0]
    });

    this.requestCustomCurrentValue();
  }

  onSubmit() {
    this.requestCustomCurrentValue();
  }

  requestCustomCurrentValue() {
    this.animalService.getCustomCurrentValue({
      cow: this.form.controls.cowValue.value,
      chicken: this.form.controls.chickenValue.value,
      pig: this.form.controls.pigValue.value
    }).subscribe(({ currentValue }) => this.customCurrentValue = currentValue);
  }

}
