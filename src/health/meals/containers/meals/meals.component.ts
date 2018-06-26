import { Store } from './../../../../store';
import { Subscription } from 'rxjs/Subscription';
import { Meal } from './../../../shared/services/meals/meals.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { MealsService } from '../../../shared/services/meals/meals.service';

@Component({
    selector: 'app-meals',
    styleUrls: ['meals.component.scss'],
    template:`
        <div>
            {{ meals$ | async | json}}
        </div>
    `
})
export class MealsComponent implements OnInit, OnDestroy {

    meals$: Observable<Meal[]>;
    subscription: Subscription;
    
    constructor(
        private store: Store,
        private mealsService: MealsService
    ) { }

    ngOnInit(): void { 
        this.meals$ = this.store.select<Meal[]>('meals');
        this.subscription = this.mealsService.meals$.subscribe();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
