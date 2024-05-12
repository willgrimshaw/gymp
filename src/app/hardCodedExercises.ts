  export interface Exercise {
    id: number;
    name: string;
    muscleGroups: muscleGroup[];
    description: string;
  }

  export enum muscleGroup
  {
    UpperBack,
    LowerBack,
    Chest,
    Triceps,
    Biceps,
    Shoulders,
    Quadriceps,
    Hamstrings,
    Calves,
    ForeArms
  }
  
  export const exercises = [
    {
      id: 1,
      name: 'Dead lift',
      muscleGroups: [muscleGroup.LowerBack, muscleGroup.Hamstrings],
      description: 'Lift big weights.'
    },
    {
      id: 2,
      name: 'Squat',
      muscleGroups: [muscleGroup.Quadriceps, muscleGroup.Hamstrings],
      description: 'Leg exercise.'
    },
    {
      id: 3,
      name: 'Bench press',
      muscleGroups: [muscleGroup.Chest, muscleGroup.Triceps],
      description: 'Dorrito.'
    }
  ];
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */