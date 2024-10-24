import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar'; // For pop-up alert
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule
import { MatCheckboxModule } from '@angular/material/checkbox'; // Import MatCheckboxModule
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule
import { MatTableModule } from '@angular/material/table'; // Import MatTableModule
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-logic-building',
  standalone: true,
  imports: [
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatTableModule,
    ReactiveFormsModule,
    MatButtonModule
  ], // Add all necessary Angular Material modules and ReactiveFormsModule
  templateUrl: './logic-building.component.html',
  styleUrls: ['./logic-building.component.scss']
})
export class LogicBuildingComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['select', 'arid', 'rid', 'policyNumber', 'outstanding', 'paymentValue'];
  formGroupData!: FormGroup;

  data = [
    { arid: 1, rid: 101, policyNumber: 'PN1001', outstanding: 5, paymentValue: 0 },
    { arid: 2, rid: 101, policyNumber: 'PN1001', outstanding: 7, paymentValue: 0 },
    { arid: 3, rid: 101, policyNumber: 'PN1001', outstanding: 6, paymentValue: 0 },
    { arid: 4, rid: 102, policyNumber: 'PN1001', outstanding: 8, paymentValue: 0 },
    { arid: 5, rid: 102, policyNumber: 'PN1001', outstanding: 9, paymentValue: 0 },
    { arid: 6, rid: 103, policyNumber: 'PN1001', outstanding: 1, paymentValue: 0 },
    { arid: 7, rid: 103, policyNumber: 'PN1001', outstanding: 75, paymentValue: 0 }
  ];

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.initializeForm();
    this.dataSource.data = this.data;
  }

  initializeForm() {
    const formControls = this.data.reduce((controls, item) => {
      controls[item.arid] = new FormControl(false); // Checkboxes
      controls['paymentValue' + item.arid] = new FormControl(0, Validators.min(0)); // Payment input fields
      return controls;
    }, {} as { [key: string]: FormControl });

    this.formGroupData = this.fb.group(formControls);
  }

  onCheckboxChange(row: any, isChecked: boolean) {
    const matchingRows = this.data.filter(item => item.rid === row.rid);
    console.log(matchingRows);
    
    matchingRows.forEach(matchingRow => {
      if (isChecked) {
        console.log(this.formGroupData.value);
        
        this.formGroupData.get(matchingRow.arid.toString())?.setValue(true);
        // this.validatePayment(matchingRow);
      } else {
        this.formGroupData.get(matchingRow.arid.toString())?.setValue(false);
      }
    });
  }

  validatePayment(row: any) {
    const paymentValue = this.formGroupData.get('paymentValue' + row.arid)?.value;
    const outstanding = row.outstanding;

    // If payment value is less than the outstanding balance, show alert
    if (paymentValue < outstanding) {
      this.snackBar.open(`Payment for ARID ${row.arid} is less than the outstanding balance.`, 'OK', {
        duration: 3000,
      });
    }
  }

  onSubmit() {
    // Trigger validation on submit
    const selectedRows = this.data.filter(row => this.formGroupData.get(row.arid.toString())?.value === true);
    let isValid = true;

    selectedRows.forEach(row => {
      const paymentValue = this.formGroupData.get('paymentValue' + row.arid)?.value;
      if (paymentValue < row.outstanding) {
        isValid = false;
        this.snackBar.open(`Payment for ARID ${row.arid} is less than the outstanding balance.`, 'OK', {
          duration: 3000,
        });
      }
    });

    if (isValid) {
      this.snackBar.open('All selected payments are valid.', 'OK', {
        duration: 3000,
      });
    }
  }
}
