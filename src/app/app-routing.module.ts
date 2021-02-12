import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentComponent } from './Assessments/Assessments.component';
import { HomeNavComponent } from './HomePage/HomeNav.component';
import { HomePageComponent } from './HomePage/HomePage.component';
import { LoginPageComponent } from './LoginPage/LoginPage.component';
import { EndComponent } from './End.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent},
  { path: 'HomeNav', component: HomeNavComponent},
  { path: 'HomePage', component: HomePageComponent},
  { path: 'AssessmentPage', component: AssessmentComponent},
  { path: 'EndPage', component: EndComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
  LoginPageComponent,
  HomeNavComponent,
  HomePageComponent,
  AssessmentComponent,
  EndComponent

]
