import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CrudJsonUserService } from '../../../services/crudJson/crud-json-user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud-json',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crud-json.component.html',
  styleUrl: './crud-json.component.scss'
})
export class CrudJsonComponent {

  userForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: CrudJsonUserService) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    this.userService.addUser(this.userForm.value).subscribe((response) => {
      console.log('User added:', response);
      this.userForm.reset();
    });
  }

  get f() {
    return this.userForm.controls;
  }
}
