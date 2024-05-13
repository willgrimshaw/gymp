import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Exercise {
  id?: string;
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
      map(x => x || this.nullExercise)
    );
  }

  async getExerciseByIdAsync(id: string) 
  {
    return await firstValueFrom(this.getExerciseById(id));
  }
}
