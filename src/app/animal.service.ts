import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Animal } from './models/animal.model';
import { environment } from 'src/environments/environment';
import { AnimalParams } from './models/animalParams.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) { }

  insert(animal: Animal): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}api/animals`, animal);
  }

  getAverageWeight(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}api/animals/averageWeight`)
  }

  getHowManyCanBeSold(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}api/animals/howManyCanBeSold`)
  }

  getCurrentValue(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}api/animals/currentValueOfFullFarmStock`);
  }

  getCustomCurrentValue(params: AnimalParams): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}api/animals/currentValue?cow=${params.cow}&pig=${params.pig}&chicken=${params.chicken}`);
  }
}
