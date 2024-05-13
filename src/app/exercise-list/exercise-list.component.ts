import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ExerciseService, Exercise } from '../exercise.service';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.css'
})
export class ExerciseListComponent implements OnInit {
  constructor(private exerciseService: ExerciseService) {}

  exercises!: Observable<Exercise[]>;

  ngOnInit() {
    this.exercises = this.exerciseService.getExerciseList();
  }
}
