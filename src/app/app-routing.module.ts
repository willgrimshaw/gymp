import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercisesComponent } from './exercises/exercises.component';
import { ExerciseDetailsComponent } from './exercise-details/exercise-details.component';
import { CreateExerciseComponent } from './create-exercise/create-exercise.component';

const routes: Routes = [
  { path: 'exercises', component: ExercisesComponent },
  { path: 'exercises/:exerciseId', component: ExerciseDetailsComponent },
  { path: 'createExercise', component: CreateExerciseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }