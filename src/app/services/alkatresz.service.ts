import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AlkatreszDto} from '../models/alkatresz.dto';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlkatreszService {
  private apiUrl ='localhost:9090/api/alkatresz';
  constructor(private http: HttpClient) { }

  getAllAlkatresz():Observable<AlkatreszDto[]> {
    return this.http.get<AlkatreszDto[]>(`${this.apiUrl}/findall`)
  }
}
