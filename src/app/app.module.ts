import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { ExerciseDetailsComponent } from './exercise-details/exercise-details.component';

import { HttpClientModule } from '@angular/common/http';
import { CreateExerciseComponent } from './create-exercise/create-exercise.component';

@NgModule({
  declarations: [
    AppComponent,
    ExercisesComponent,
    TopBarComponent,
    ExerciseListComponent,
    ExerciseDetailsComponent,
    CreateExerciseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
