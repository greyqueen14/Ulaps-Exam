import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import { CountdownModule } from 'ngx-countdown';
import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component';
import { AppRoutingModule, RoutingComponents} from './app-routing.module';
import { PersonalityComponent } from './Assessments/Personality.component';
import { CountDownComponent } from './Countdown.component';
import { SkillsComponent } from './Assessments/Skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RoutingComponents,
    PersonalityComponent,
    CountDownComponent,
    SkillsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatIconModule,
    AppRoutingModule,
    MatTabsModule,
    MatDividerModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
