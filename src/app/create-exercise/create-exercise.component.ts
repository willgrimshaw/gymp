import { Component, OnInit } from '@angular/core';
import { ExerciseService, muscleGroup } from '../exercise.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown'; 
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-exercise',
  templateUrl: './create-exercise.component.html',
  styleUrl: './create-exercise.component.css'
})
export class CreateExerciseComponent implements OnInit {
  exerciseForm!: FormGroup;
  dropdownList!: string[];
  selectedItems = [];
  dropdownSettings!:IDropdownSettings;

  constructor(
    private fb: FormBuilder,
    private exerciseService: ExerciseService,
    private _snackBar: MatSnackBar 
  ) {}

  ngOnInit() {
    this.dropdownList = Object.keys(muscleGroup).filter(x => isNaN(parseInt(x)));
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: false
    };

    
    this.exerciseForm = this.fb.group({
      name: ['', Validators.required],
      muscleGroups: [],
      description:''
    })  
  }

  onSubmit()
  {
    this.exerciseService.postExercise(this.exerciseForm.value);
    var message = "Exercise '" + this.exerciseForm.value['name'] + "' successfully created.";
    this._snackBar.open(message, 'Close', {
      duration: 2000, // Duration in milliseconds
    });
    this.exerciseForm.reset();
  }
}
