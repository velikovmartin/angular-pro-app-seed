import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// containers
import { WorkoutsComponent } from './containers/workouts/workouts.component';

export const ROUTES: Routes = [
    { path: '', component: WorkoutsComponent }
];

@NgModule({
    declarations: [
        WorkoutsComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES)
    ],
    exports: [],
    providers: [],
})
export class WorkoutsModule {}