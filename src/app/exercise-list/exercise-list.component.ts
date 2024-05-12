import { Component, OnInit } from '@angular/core';
import { exercises } from '../hardCodedExercises';

import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.css'
})
export class ExerciseListComponent implements OnInit {
  constructor(private exerciseService: ExerciseService) {}

  //exercises!: Observable<Exercise[]>;

  exercises = this.exerciseService.getExercises()

  ngOnInit() {
    window.alert(JSON.stringify(exercises));
  }
}
