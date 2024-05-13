import { Component, OnInit } from '@angular/core';
import { ExerciseService, Exercise, muscleGroup } from '../exercise.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.component.html',
  styleUrl: './exercise-details.component.css'
})
export class ExerciseDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private exerciseService: ExerciseService
  ) {}

  exercise$!: Observable<Exercise>;

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const exerciseIdFromRoute = String(routeParams.get('exerciseId'));
    this.exercise$ = this.exerciseService.getExerciseById(exerciseIdFromRoute);
  }
  
  getMuscleGroupList(muscleGroups: muscleGroup[])
  {
    return muscleGroups.map(x => muscleGroup[x])
  }
}
