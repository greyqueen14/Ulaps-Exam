import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Assessments',
  templateUrl: './Assessments.component.html',
  styleUrls: ['./Assessments.component.css']


})
export class AssessmentComponent {
  fillblanks1: string;
  fillblanks2: string;
  fillblanks3: string;
  fillblanks4: string;
  fillblanks5: string;

  choices1: string[] = ['is study', 'studying', 'is studying', 'are studying'];
  choices2: string[] = ['opens', 'open', 'opened', 'will opened'];
  choices3: string[] = ['as', 'as good', 'good as', 'as good as'];
  choices4: string[] = ['to climb mountains', 'climb mountains', 'to climb', 'climbing mountains'];
  choices5: string[] = ['sent', 'sends', 'send', 'to send'];


}
