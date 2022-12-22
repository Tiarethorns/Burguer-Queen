import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogInViewComponent } from './log-in-view/log-in-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { KitchenViewComponent } from './kitchen-view/kitchen-view.component';
import { WaitersViewComponent } from './waiters-view/waiters-view.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing/app-routing.module'
import { MatTableModule } from '@angular/material/table';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent, LogInViewComponent, KitchenViewComponent, WaitersViewComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    AppRoutingModule,
    MatTableModule,
   
    
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
   provideFirestore(()=>getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
