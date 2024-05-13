import { Component } from '@angular/core';
import { ExerciseService, Exercise, muscleGroup } from '../exercise.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-exercise',
  templateUrl: './create-exercise.component.html',
  styleUrl: './create-exercise.component.css'
})
export class CreateExerciseComponent {
  constructor(private exerciseService: ExerciseService) {}

  exerciseForm = new FormGroup({
    name: new FormControl(''),
    muscleGroup: new FormControl(''),
    description: new FormControl('')
  });

  addExercise()
  {
    // unused
    var testExercise: Exercise = { 
      name:"test",
      muscleGroups:[],
      description:"test"
    };

    var exercise = this.exerciseForm.value;
    this.exerciseService.postExercise(testExercise);
  }
}
