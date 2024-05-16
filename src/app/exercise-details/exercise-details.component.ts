import { Component, OnInit } from '@angular/core';
import { ExerciseService, Exercise, muscleGroup } from '../exercise.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationPopupComponent } from '../confirmation-popup/confirmation-popup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.component.html',
  styleUrl: './exercise-details.component.css'
})
export class ExerciseDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private exerciseService: ExerciseService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  exerciseId!: string;
  exercise$!: Observable<Exercise>;

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    this.exerciseId = String(routeParams.get('exerciseId'));
    this.exercise$ = this.exerciseService.getExerciseById(this.exerciseId);
  }
  
  getMuscleGroupList(muscleGroups: muscleGroup[])
  {
    return muscleGroups.map(x => muscleGroup[x])
  }

  delete()
  {
    const dialogRef = this.dialog.open(ConfirmationPopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // User clicked confirm
        console.log('Confirmed');
        // Call your action here
        this.exerciseService.deleteExerciseById(this.exerciseId)
        
        // Get the current URL segments
        const currentUrlSegments = this.router.url.split('/');
        // Remove the last segment (current component)
        currentUrlSegments.pop();
        // Construct the parent URL
        const parentUrl = currentUrlSegments.join('/');
        // Navigate to the parent URL
        this.router.navigateByUrl(parentUrl);
        
      } else {
        // User clicked cancel or clicked outside the dialog
        console.log('Canceled');
      }
    });
  }
}
