import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const ROUTES: Routes = [
    { path: 'schedule', loadChildren: './schedule/schedule.module#ScheduleModule'},
    { path: 'meals', loadChildren: './meals/meals.module#MealsModule'},
    { path: 'workouts', loadChildren: './workouts/workouts.module#WorkoutsModule'}
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES)
    ],
    exports: [],
    providers: [],
})
export class HealthModule {}