import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

export interface Exercise {
  id: number;
  name: string;
  muscleGroups: muscleGroup[];
  description: string;
}

export enum muscleGroup
{
  UpperBack,
  LowerBack,
  Chest,
  Triceps,
  Biceps,
  Shoulders,
  Quadriceps,
  Hamstrings,
  Calves,
  ForeArms
}

@Injectable({
  providedIn: 'root'
})

export class ExerciseService {
  constructor(
    private http: HttpClient
  ) {}

    //myObservable = new Observable((observer) => 
    //  {
    //    console.log("Observer begin");
    //  }); 
  
    getExercises() 
    {
      return this.http.get<Exercise[]>('/assets/exercises.json');
    }

}
