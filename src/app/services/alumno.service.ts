import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno';
import { CommonService } from './common.service';
import { BASE_ENDPOINT } from '../config/app';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService extends CommonService<Alumno> {

  protected baseEndpoint = BASE_ENDPOINT + '/students';

  constructor(http: HttpClient) {
    super(http);
   }

   public crearConFoto(alumno: Alumno, archivo: File): Observable<Alumno> {
     const formData = new FormData();
     formData.append('archivo', archivo);
     formData.append('name', alumno.name);
     formData.append('lastName', alumno.lastName);
     formData.append('email', alumno.email);
     return this.http.post<Alumno>(this.baseEndpoint + '/add/photo',
      formData);
   }

   public editarConFoto(alumno: Alumno, archivo: File): Observable<Alumno> {
    const formData = new FormData();
    formData.append('archivo', archivo);
    formData.append('name', alumno.name);
    formData.append('lastName', alumno.lastName);
    formData.append('email', alumno.email);
    return this.http.put<Alumno>(`${this.baseEndpoint}/update/photo/${alumno.id}`,
     formData);
  }

  public filtrarPorNombre(nombre: string): Observable<Alumno[]> {
    console.log('name', nombre);
    return this.http.get<Alumno[]>(`${this.baseEndpoint}/filter/${nombre}`);
  }
}
