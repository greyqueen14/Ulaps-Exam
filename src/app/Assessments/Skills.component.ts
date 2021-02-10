import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Skills',
  templateUrl: './Skills.component.html',
  styleUrls: ['./Assessments.component.css']


})
export class SkillsComponent {
  skill1: string;
  skill2: string;
  skill3: string;
  skill4: string;
  skill5: string;

  ch1: string[] = ['1', '2', '5', '7'];
  ch2: string[] = ['Expansion slot', 'North Bridge', 'PCI Bus', 'South Bridge'];
  ch3: string[] = ['True', 'False'];
  ch4: string[] = [' The hard drive is malfunctioning', ' The hard drive is not read correctly by the BIOS.', 'The hard drive is not compatible with the computer.', ' The computer motherboard is damaged.'];
  ch5: string[] = ['Computer virus', 'Trojan horse', 'Malware', 'Dishonest Adware'];

}
