import { Component } from '@angular/core';
import { ExerciseService, Exercise, muscleGroup } from '../exercise.service';

@Component({
  selector: 'app-create-exercise',
  templateUrl: './create-exercise.component.html',
  styleUrl: './create-exercise.component.css'
})
export class CreateExerciseComponent {
  constructor(private exerciseService: ExerciseService) {}



  addTestExercise()
  {
    var testExercise: Exercise = { 
      id:-1,
      name:"",
      muscleGroups:[],
      description:""
    };

    this.exerciseService.postExercise(testExercise);
  }
}
