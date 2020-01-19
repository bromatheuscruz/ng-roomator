import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-current-value',
  templateUrl: './current-value.component.html',
  styleUrls: ['./current-value.component.css']
})
export class CurrentValueComponent implements OnInit {

  constructor(private animalService: AnimalService) { }

  currentValue: any;
  
  ngOnInit() {
    this.animalService.getCurrentValue().subscribe(({currentValue}) => this.currentValue = currentValue);
  }

}
