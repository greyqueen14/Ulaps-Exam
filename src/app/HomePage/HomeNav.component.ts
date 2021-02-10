import { Component, }  from "@angular/core";
import { resetFakeAsyncZone } from "@angular/core/testing";
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-HomeNav',
  templateUrl: './HomeNav.component.html',
  styleUrls: ['./HomeNav.component.css']
})

export class HomeNavComponent{
  constructor(private router: Router){
  }

  public onHome(){
      this.router.navigate(['./HomeNav']);
  }
  public onAssessment(){
    if (confirm('Once you start the assessment the timer will start')) {
      return this.router.navigate(['./AssessmentPage']);;
  } else {
      return false;
  }
}


}

