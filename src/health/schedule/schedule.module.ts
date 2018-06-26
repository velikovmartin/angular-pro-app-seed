import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// containers
import { ScheduleComponent } from './containers/schedule/schedule.component';

export const ROUTES: Routes = [
    { path: '', component: ScheduleComponent }
];

@NgModule({
    declarations: [
        ScheduleComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES)
    ],
    exports: [],
    providers: [],
})
export class ScheduleModule {}