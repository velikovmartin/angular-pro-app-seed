import { RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// third-party modules
import { AngularFireDatabaseModule } from 'angularfire2/database';

// components
import { ListItemComponent } from "./components/list-item/list-item.component";

// services
import { MealsService } from './services/meals/meals.service';
import { WorkoutsService } from './services/workouts/workouts.service';

// pipes
import { JoinPipe } from './pipes/join.pipe';
import { WorkoutPipe } from './pipes/workout.pipe';

@NgModule({
    declarations: [
        ListItemComponent,
        JoinPipe,
        WorkoutPipe
    ],
    imports: [
        CommonModule,
        RouterModule,
        AngularFireDatabaseModule,
    ],
    exports: [
        ListItemComponent,
        JoinPipe,
        WorkoutPipe
    ]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                MealsService,
                WorkoutsService
            ]
        }
    }
}