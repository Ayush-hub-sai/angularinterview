import { Component, inject, OnInit } from '@angular/core';
import { TaskService } from '../../../services/todotask/task.service';
import { ApiResponseModel, ITask, Task } from '../../../model/interface/itask';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-crud-api',
  standalone: true,
  imports: [FormsModule, DatePipe],
  providers: [DatePipe],
  templateUrl: './crud-api.component.html',
  styleUrl: './crud-api.component.scss'
})
export class CrudApiComponent implements OnInit {

  taskService = inject(TaskService);
  datePipe = inject(DatePipe);
  taskList: ITask[] = [];
  taskObj: Task;

  constructor() {
    this.taskObj = new Task(this.datePipe);
  }

  ngOnInit(): void {
    this.loadAllTask();
  }

  loadAllTask() {
    this.taskService.getAllTaskList().subscribe((res: ApiResponseModel) => {
      this.taskList = res.data;
    });
  }

  createNewTask() {
    this.taskService.AddNewTask(this.taskObj).subscribe({
      next: (res: ApiResponseModel) => {
        if (res.result) {
          this.refresh();
        }
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => { }
    });
  }

  onEdit(task: Task) {
    this.taskObj = { ...task };
    this.taskObj.dueDate = this.datePipe.transform(new Date(task.dueDate), 'yyyy-MM-dd') || '';
  }

  updateTask() {
    this.taskService.EditTask(this.taskObj).subscribe(() => {
      this.refresh();
    });
  }

  onDelete(task: Task) {
    const isConfirm = confirm("Are you sure want to delete");

    if (isConfirm) {
      this.taskService.DeleteTask(task.itemId).subscribe(() => {
        this.refresh();
      });
    } else {
      console.log("Api Call Error");
    }
  }

  refresh() {
    this.taskObj = new Task(this.datePipe);
    this.loadAllTask();
  }
}
