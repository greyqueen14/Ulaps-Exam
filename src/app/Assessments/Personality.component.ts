import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Personality',
  templateUrl: './Personality.component.html',
  styleUrls: ['./Assessments.component.css']


})
export class PersonalityComponent {
  num1: string;
  num2: string;
  num3: string;
  num4: string;
  num5: string;

  level1: string[] = ['INACCURATE', 'NEUTRAL', 'ACCURATE'];

  constructor(private router: Router){
  }

 public onHome(){
  return this.router.navigate(['./HomeNav']);

}
public onEnd() {
  if (window.confirm('Click "Ok" if you\'re done. "Cancel" if not')) {
    return this.router.navigate(['./EndPage']);
  }
  else {
    return false;
  }
}
}
