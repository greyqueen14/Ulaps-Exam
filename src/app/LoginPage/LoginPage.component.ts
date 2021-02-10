import { Component, OnInit}  from "@angular/core";
import { resetFakeAsyncZone } from "@angular/core/testing";
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-LoginPage',
  templateUrl: './LoginPage.component.html',
  styleUrls: ['./LoginPage.component.css']
})

export class LoginPageComponent{
  emailControl: string;
  password: string;

  constructor(private router: Router){
  }

  public onlogInUSer(){
    if(this.emailControl=='applicant@ulaps.dev' && this.password=='123456'){
      this.router.navigate(['./HomeNav']);

    }
    else{
        alert('not user');
    }
  }
}





//   constructor(){

//   }

//   ngOnInit(){

//   }
// }
//   username = new FormControl('', [Validators.required]);

//   getErrorMessage() {

//     if (this.username.hasError('required')) {
//       return 'You must enter a value';
//     }


//     return this.username.hasError('email') ? 'Not a valid email' : '';
//   }
