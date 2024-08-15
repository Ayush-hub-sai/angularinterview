import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Student } from '../../../model/class/student';

@Component({
  selector: 'app-crud-with-localstorage',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './crud-with-localstorage.component.html',
  styleUrl: './crud-with-localstorage.component.scss'
})
export class CrudWithLocalstorageComponent {
  @ViewChild('studentAddModal') studentAddModal!: ElementRef;

  studentObj: Student = new Student();
  studentList: Student[] = [];

  ngOnInit(): void {
    this.loadStudentRecord();
  }

  loadStudentRecord() {
    const studentRecord = localStorage.getItem("studentRecord");
    if (studentRecord != null) {
      this.studentList = JSON.parse(studentRecord);
    }
  }

  openModal() {
    if (this.studentAddModal != null) {
      this.studentAddModal.nativeElement.style.display = "block";
    }
  }

  closeModal() {
    if (this.studentAddModal != null) {
      this.studentObj = new Student();
      this.studentAddModal.nativeElement.style.display = "none";
      this.loadStudentRecord();
    }
  }

  saveStudent() {
    const studentArray = localStorage.getItem("studentRecord");
    if (studentArray != null) {
      const oldStdArr = JSON.parse(studentArray);
      const newlastStudent = oldStdArr[oldStdArr.length - 1];
      this.studentObj.id = newlastStudent.id + 1;
      debugger;
      oldStdArr.push(this.studentObj);
      localStorage.setItem("studentRecord", JSON.stringify(oldStdArr));
    } else {
      const newStdArr = [];
      this.studentObj.id = 1;
      newStdArr.push(this.studentObj);
      localStorage.setItem("studentRecord", JSON.stringify(newStdArr));
    }
    this.refresh();
  }

  editStudentRecord(student: Student) {
    this.studentObj = student;
    this.openModal();
  }

  updateStudent() {
    const studentIndex = this.studentList.findIndex(student => student.id === this.studentObj.id);
    if (studentIndex !== -1) {
      this.studentList[studentIndex] = this.studentObj;
      localStorage.setItem("studentRecord", JSON.stringify(this.studentList));
      this.refresh();
    }
  }

  deleteStudentRecord(student: Student) {
    this.studentList = this.studentList.filter(std => std.id !== student.id);
    if (this.studentList.length == 0) {
      localStorage.removeItem("studentRecord")
    } else {
      localStorage.setItem("studentRecord", JSON.stringify(this.studentList));
      this.loadStudentRecord();
    }
  }

  refresh() {
    this.studentObj = new Student();
    this.closeModal()
    this.loadStudentRecord();
  }

}
