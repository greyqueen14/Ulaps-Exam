import { Component, }  from "@angular/core";
import { Router } from '@angular/router';


@Component({
  selector: 'app-HomePage',
  templateUrl: './HomePage.component.html',
  styleUrls: ['./HomePage.component.css']
})

export class HomePageComponent{
  constructor(private router: Router){
  }

  public onHome(){
      this.router.navigate(['./HomeNav']);
  }
  public onAssessment(){
      this.router.navigate(['./AssessmentPage']);

}
}
