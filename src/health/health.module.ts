import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// shared modules
import { SharedModule } from './shared/shared.module';

// guards
import { AuthGuard } from './../auth/shared/guards/auth.guard';

export const ROUTES: Routes = [
    { path: 'schedule', canActivate: [AuthGuard], loadChildren: './schedule/schedule.module#ScheduleModule'},
    { path: 'meals', canActivate: [AuthGuard], loadChildren: './meals/meals.module#MealsModule'},
    { path: 'workouts', canActivate: [AuthGuard], loadChildren: './workouts/workouts.module#WorkoutsModule'}
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        SharedModule.forRoot()
    ],
    exports: [],
    providers: [],
})
export class HealthModule {}