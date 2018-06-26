import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

// third-party modules
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule  } from 'angularfire2/database';

export const ROUTES: Routes = [
    {
        path: 'auth',
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'full' },
            { path: 'login', loadChildren: './login/login.module#LoginModule' },
            { path: 'register', loadChildren: './register/register.module#RegisterModule' },
        ]
    }
]

export const firebaseConfig: FirebaseAppConfig = {
    apiKey: "AIzaSyA0HNx0iJATcurQwZeYatEM9loGbfx4q1M",
    authDomain: "fitness-app-98cdb.firebaseapp.com",
    databaseURL: "https://fitness-app-98cdb.firebaseio.com",
    projectId: "fitness-app-98cdb",
    storageBucket: "fitness-app-98cdb.appspot.com",
    messagingSenderId: "199541300294"
  };


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        SharedModule.forRoot()
    ],
    exports: []
})
export class AuthModule {}