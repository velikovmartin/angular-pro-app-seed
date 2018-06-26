import { RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// third-party modules
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MealsService } from './services/meals/meals.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule,
        AngularFireDatabaseModule
    ]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                MealsService
            ]
        }
    }
}