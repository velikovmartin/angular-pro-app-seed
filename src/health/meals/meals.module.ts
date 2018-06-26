import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// containers
import { MealsComponent } from './containers/meals/meals.component';
export const ROUTES: Routes = [
    { path: '', component: MealsComponent }
];

@NgModule({
    declarations: [
        MealsComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES)
    ],
    exports: [],
    providers: [],
})
export class MealsModule {}