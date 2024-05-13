import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { map, tap } from 'rxjs/operators';

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
    private http: HttpClient,
  ) {}

  nullExercise: Exercise = { 
    id:-1,
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
    this.http.post<Exercise[]>('http://localhost:3000/exercises', exercise);
  }

  getExerciseById(id: number)
  {
    return this.http.get<Exercise>('http://localhost:3000/exercises/' + id).pipe(
      map(x => x || this.nullExercise)
    );
    return this.getExerciseList().pipe(
      map(x => x.find(y => y.id == id) || this.nullExercise)  
    )
  }

  async getExerciseByIdAsync(id: number) 
  {
    return await firstValueFrom(this.getExerciseById(id));
  }
}
