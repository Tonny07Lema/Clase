import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Servicio } from '../entidades';
import { HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  endpoint=environment.backEndServer + 'api/servicio/';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private httpClient:HttpClient) { }

  registrar(servicio:Servicio): Observable<any> {
    let finalUrl = this.endpoint+'create';
    return this.httpClient.post<Servicio>(finalUrl,JSON.stringify(servicio),this.httpOptions);
  }
  listar(id:Number): Observable<any> {
    let finalUrl = this.endpoint+'findAll/'+id;
    return this.httpClient.get<Servicio>(finalUrl);
  }
  eliminar(id:Number): Observable<any> {
    let finalUrl = this.endpoint+'delete/'+id;
    return this.httpClient.get(finalUrl);
  }
  actualizar(servicio:Servicio): Observable<any> {
    let finalUrl = this.endpoint+'update';
    return this.httpClient.post<Servicio>(finalUrl,JSON.stringify(servicio),this.httpOptions);
  }
}
