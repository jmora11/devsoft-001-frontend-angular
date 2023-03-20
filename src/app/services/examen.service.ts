import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { Examen } from '../models/examen';
import { BASE_ENDPOINT } from '../config/app';
import { HttpClient } from '@angular/common/http';
import { Asignatura } from '../models/asignatura';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamenService extends CommonService<Examen> {

  protected baseEndpoint = BASE_ENDPOINT + '/exams';

  constructor(http: HttpClient) {
    super(http);
  }

  public findAllAsignatura(): Observable<Asignatura[]> {
    return this.http.get<Asignatura[]>(`${this.baseEndpoint}/asignatures/all`);
  }

  public filtrarPorNombre(nombre: string): Observable<Examen[]> {
    return this.http.get<Examen[]>(`${this.baseEndpoint}/filter/${nombre}`);
  }

  public editarExamen(e: Examen): Observable<Examen> {
    return this.http.put<Examen>(`${this.baseEndpoint}/update-exam/${e.id}`, e,
      { headers: this.cabeceras });
  }
}
