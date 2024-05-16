import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, throwError, of } from 'rxjs';
import { map, catchError, timeout } from 'rxjs/operators';

export interface Exercise {
  id?: string;
  name: string;
  muscleGroups: muscleGroup[];
  description: string;
}

export enum muscleGroup
{
  UpperBac,
  LowerBack,
  Chest,
  Triceps,
  Biceps,
  Shoulders,
  Quadriceps ,
  Hamstrings,
  Calves,
  ForeArms
}

@Injectable({
  providedIn: 'root'
})

export class ExerciseService {
  constructor(
    private http: HttpClient,
  ) {}

  nullExercise: Exercise = { 
    id: "-1",
    name:"",
    muscleGroups:[],
    description:""
  };

  getExerciseList() 
  {
    return this.http.get<Exercise[]>('http://localhost:3000/exercises');
  }

  postExercise(exercise: Exercise)
  {
    this.http.post('http://localhost:3000/exercises', exercise).subscribe({complete: console.info});
  }

  getExerciseById(id: string)
  {
    return this.http.get<Exercise>('http://localhost:3000/exercises/' + id).pipe(
      catchError(error => {
        if (error.status === 404) {
          // Handle 404 error (Not Found)
          return of(this.nullExercise);
        }
        // Handle other errors
        return throwError(error);
      }));
  }

  deleteExerciseById(id: string)
  {
    console.log("Deleting exercise " + id);
    this.http.delete<Exercise>('http://localhost:3000/exercises/' + id)
  }
}
