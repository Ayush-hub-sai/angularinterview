import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logic-building',
  standalone: true,
  imports: [],
  templateUrl: './logic-building.component.html',
  styleUrl: './logic-building.component.scss'
})
export class LogicBuildingComponent implements OnInit {

  contact_details: string = "contact_details"

  ngOnInit(): void {
    this.formatTheContactDetails()
  }

  formatTheContactDetails() {
    console.log(this.contact_details.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));

    this.contact_details = this.contact_details
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  // formatTheContactDetails() {
  //   let result = '';
  //   let capitalizeNext = true;

  //   for (let i = 0; i < this.contact_details.length; i++) {
  //     const currentChar = this.contact_details[i];

  //     if (currentChar === '_') {
  //       result += ' '; // Replace underscore with space
  //       capitalizeNext = true; // Next character should be capitalized
  //     } else {
  //       if (capitalizeNext && currentChar >= 'a' && currentChar <= 'z') {
  //         result += String.fromCharCode(currentChar.charCodeAt(0) - 32); // Convert to uppercase
  //       } else {
  //         result += currentChar;
  //       }
  //       capitalizeNext = false; // Reset capitalization flag
  //     }
  //   }

  //   this.contact_details = result;
  //   console.log(this.contact_details);

  // }





}
