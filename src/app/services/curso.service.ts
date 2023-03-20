import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { Curso } from '../models/curso';
import { HttpClient } from '@angular/common/http';
import { BASE_ENDPOINT } from '../config/app';
import { Alumno } from '../models/alumno';
import { Observable } from 'rxjs';
import { Examen } from '../models/examen';

@Injectable({
  providedIn: 'root'
})
export class CursoService extends CommonService<Curso> {

  protected baseEndpoint = BASE_ENDPOINT + '/courses';

  constructor(http: HttpClient) {
    super(http);
  }

  asignarAlumnos(curso: Curso, alumnos: Alumno[]): Observable<Curso> {
    return this.http.put<Curso>(`${this.baseEndpoint}/asign-student/${curso.id}`,
     alumnos,
     {headers: this.cabeceras});
  }

  eliminarAlumno(curso: Curso, alumno: Alumno): Observable<Curso> {
    return this.http.put<Curso>(`${this.baseEndpoint}/delete-student/${curso.id}`,
    alumno,
    {headers: this.cabeceras});
  }

  asignarExamenes(curso: Curso, examenes: Examen[]): Observable<Curso> {
    return this.http.put<Curso>(`${this.baseEndpoint}/asign-exam/${curso.id}`,
    examenes,
    {headers: this.cabeceras});
  }

  eliminarExamen(curso: Curso, examen: Examen): Observable<Curso> {
    return this.http.put<Curso>(`${this.baseEndpoint}/${curso.id}/eliminar-examen`,
    examen,
    {headers: this.cabeceras});
  }

  obtenerCursoPorAlumnoId(alumno: Alumno): Observable<Curso> {
    return this.http.get<Curso>(`${this.baseEndpoint}/student-course/${alumno.id}`);
  }
}
