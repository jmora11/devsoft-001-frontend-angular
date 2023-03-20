import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Examen } from '../models/examen';
import { Generic } from '../models/generic';

export abstract class CommonService<E extends Generic> {

  protected baseEndpoint: string;

  protected cabeceras: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(protected http: HttpClient) { }

  public listar(): Observable<E[]> {
    return this.http.get<E[]>(this.baseEndpoint);
  }

  public listarPaginas(page: string, size: string): Observable<any> {
    const params = new HttpParams()
    .set('page', page)
    .set('size', size);
    return this.http.get<any>(`${this.baseEndpoint}/page`, { params });
  }

  public ver(id: number): Observable<E> {
    return this.http.get<E>(`${this.baseEndpoint}/find/${id}`);
  }

  public crear(e: E): Observable<E> {
    console.log('Event', e);
    return this.http.post<E>(`${this.baseEndpoint}/add`, e,
      { headers: this.cabeceras });
  }

  public editar(e: E): Observable<E> {
    return this.http.put<E>(`${this.baseEndpoint}/update/${e.id}`, e,
      { headers: this.cabeceras });
  }

  public eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseEndpoint}/delete/${id}`);
  }

  public editarExamen(e: E): Observable<E> {
    return this.http.put<E>(`${this.baseEndpoint}/update-exam/${e.id}`, e,
      { headers: this.cabeceras });
  }
}
