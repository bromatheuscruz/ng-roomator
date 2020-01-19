import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-average-weight',
  templateUrl: './average-weight.component.html',
  styleUrls: ['./average-weight.component.css']
})
export class AverageWeightComponent implements OnInit {

  constructor(private animalService: AnimalService) { }

  animals: [] = [];

  ngOnInit() {
    this.animalService.getAverageWeight().subscribe(response => {
      this.animals = response;
    })
  }

}
