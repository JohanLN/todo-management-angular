import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiEndpoint } from '../constants/constants';
import { ITodo } from '../models/todo.models';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private httpClient: HttpClient) {}

  getAllTodo(status?: string): Observable<ITodo[]> {
    let queryString = '';

    if (status) {
      queryString = status = `filter=${status}`;
    }

    return this.httpClient.get<ITodo[]>(
      `${apiEndpoint.TodoEnpoint.getAllTodo}?${queryString}`
    );
  }

  addTodo(data: ITodo): Observable<ITodo> {
    return this.httpClient.post<ITodo>(
      `${apiEndpoint.TodoEnpoint.addTodo}`,
      data
    );
  }

  updateTodo(id: number, data: ITodo): Observable<ITodo> {
    return this.httpClient.put<ITodo>(
      `${apiEndpoint.TodoEnpoint.addTodo}/${id}`,
      data
    );
  }

  deleteTodo(id: number) {
    return this.httpClient.delete<ITodo>(
      `${apiEndpoint.TodoEnpoint.deleteTodo}/${id}`
    );
  }
}
