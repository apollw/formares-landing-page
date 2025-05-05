// frontend/src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs';

export interface ContentBlock {
  id?: string;
  title: string;
  body:  string;
  img: string;
  section: string; // e.g. 'about', 'hero'…
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private base = '/api/content';
  constructor(private http: HttpClient) {}
  /** Busca todos ou filtra por seção */
  getAll(): Observable<ContentBlock[]> {
    return this.http.get<ContentBlock[]>(this.base);
  }
  getBySection(section: string): Observable<ContentBlock[]> {
    return this.http.get<ContentBlock[]>(`${this.base}?section=${section}`);
  }
}
