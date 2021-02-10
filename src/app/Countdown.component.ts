import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-countdown',
  templateUrl: './Countdown.component.html',
  styleUrls: ['./Countdown.component.css']
})
export class CountDownComponent {
  constructor(private router: Router){
  }

  onTimerFinished(event){
    if (event.action == "done") {
      alert('Time\'s Up! Your answer will be automatically submitted');
      return this.router.navigate(['./EndPage']);
    }

}
}
