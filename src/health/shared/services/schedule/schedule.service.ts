import { Observable } from 'rxjs/Observable';
import { Store } from 'store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';

@Injectable()
export class ScheduleService {

    private date$ = new BehaviorSubject(new Date);

    schedule$: Observable<any[]> = this.date$.do((next: any) => this.store.set('date', next));

    constructor(
        private store: Store
    ) {}
}