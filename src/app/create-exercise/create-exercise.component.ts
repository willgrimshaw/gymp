import { Component, OnInit } from '@angular/core';
import { ExerciseService, Exercise, muscleGroup } from '../exercise.service';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray, FormControlName } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-exercise',
  templateUrl: './create-exercise.component.html',
  styleUrl: './create-exercise.component.css'
})
export class CreateExerciseComponent implements OnInit {
  exerciseForm!: FormGroup;
  subscription!: Subscription;
  selectedMuscleGroups: string[] = [];
  muscleGroups = Object.values(muscleGroup);

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.exerciseForm = this.fb.group({
      name:'',
      muscleGroups: this.fb.array([]),
      description:''
    })  
    
    const control = this.exerciseForm.controls['muscleGroups'];
    this.subscription = control.valueChanges.subscribe(value => {
      this.selectedMuscleGroups = this.muscleGroups.map((muscleGroup, index) =>
        control.value[index] ? value : null
      )
      .filter(contactNo => !!contactNo);
      alert("changed");
    });
  }
  
  get MuscleGroupsArray()
  {
    return this.exerciseForm.controls["muscleGroups"] as FormArray;
  }

  addMuscleGroup(muscleGroup: muscleGroup)
  {
    this.MuscleGroupsArray.push(this.fb.control(muscleGroup));
  }

  removeMuscleGroup(muscleGroup: muscleGroup)
  {
    this.MuscleGroupsArray
  }

  onSubmit()
  {
    alert(this.selectedMuscleGroups);
    alert(this.exerciseForm.get('muscleGroups')?.value);
  }
}
