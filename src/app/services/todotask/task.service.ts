import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseModel, Task } from '../../model/interface/itask';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  apiUrl: string = "https://freeapi.miniprojectideas.com/api/JWT/";

  constructor(private http: HttpClient) { }

  getAllTaskList(): Observable<ApiResponseModel> {
    return this.http.get<ApiResponseModel>(this.apiUrl + "GetAllTaskList");
  }

  AddNewTask(taskObj: Task): Observable<ApiResponseModel> {
    return this.http.post<ApiResponseModel>(this.apiUrl + "CreateNewTask", taskObj);
  }

  EditTask(taskObj: Task): Observable<ApiResponseModel> {
    return this.http.put<ApiResponseModel>(this.apiUrl + "UpdateTask", taskObj);
  }

  DeleteTask(itemId: number): Observable<ApiResponseModel> {
    return this.http.delete<ApiResponseModel>(this.apiUrl + "DeleteTask/?itemId=" + itemId);
  }
}