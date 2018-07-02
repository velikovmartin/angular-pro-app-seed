import { SharedModule } from './../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// components
import { WorkoutFormComponent } from './components/workout-form/workout-form.component';

// containers
import { WorkoutsComponent } from './containers/workouts/workouts.component';
import { WorkoutComponent } from './containers/workout/workout.component';

export const ROUTES: Routes = [
    { path: '', component: WorkoutsComponent },
    { path: 'new', component: WorkoutComponent },
    { path: ':id', component: WorkoutComponent },
];

@NgModule({
    declarations: [
        WorkoutsComponent,
        WorkoutComponent,
        WorkoutFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        SharedModule
    ],
    exports: [],
    providers: [],
})
export class WorkoutsModule {}