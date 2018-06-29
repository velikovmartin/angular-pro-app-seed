import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute } from '@angular/router';
import { Meal, MealsService } from './../../../shared/services/meals/meals.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-meal',
    styleUrls: ['meal.component.scss'],
    template:`
        <div class="meal">
            <div class="meal__title">
                <h1>
                    <img src="/img/food.svg">
                    <span *ngIf="meal$ | async as meal; else title;">
                        {{ meal.name ? 'Edit' : 'Create' }} meal
                    </span>
                    <ng-template #title>
                        Loading...
                    </ng-template>
                </h1>
            </div>
            <div>
                <app-meal-form
                   (create)="addMeal($event)">
                </app-meal-form>
            </div>
        </div>
    `
})
export class MealComponent implements OnInit, OnDestroy {

    meal$: Observable<Meal>;
    subscription: Subscription;

    constructor(
        private mealsService: MealsService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.subscription = this.mealsService.meals$.subscribe();
        this.meal$ = this.route.params
            .switchMap(param => this.mealsService.getMeal(param.id));
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
    
    async addMeal(event: Meal) {
        await this.mealsService.addMeal(event);
        this.backToMeals();
    }

    backToMeals() {
        this.router.navigate(['meals']);
    }
}
