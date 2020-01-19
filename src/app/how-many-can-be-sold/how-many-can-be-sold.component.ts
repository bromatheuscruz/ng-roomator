import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-how-many-can-be-sold',
  templateUrl: './how-many-can-be-sold.component.html',
  styleUrls: ['./how-many-can-be-sold.component.css']
})
export class HowManyCanBeSoldComponent implements OnInit {

  constructor(private animalService: AnimalService) { }

  animals: [] = [];

  ngOnInit() {
    this.animalService.getHowManyCanBeSold().subscribe(response => this.animals = response);
  }

}
