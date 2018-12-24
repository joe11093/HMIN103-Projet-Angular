import { Injectable,EventEmitter, Output, isDevMode } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, of, throwError, Subject } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class ServicesService {

  @Output() change: EventEmitter<null> = new EventEmitter();
  subject: Subject<Observable<any>> = new Subject();

  constructor(private httpClient: HttpClient) { }

  getAllServices(): Observable<any>{
    let observable: Observable<any>;
      observable = this.httpClient.get("http://localhost:8800/services/list");
      console.log("from function getAllServices in services.service")
      console.log(observable);
      return observable;
  }

  //send service to NodeJS
  insertService(name, description): Observable<any> {

      const httpOptions = {
      headers: new HttpHeaders({'Content-Type':  'application/json'})};
       let result=this.httpClient.post("http://localhost:8800/services/insert", {"name": name, "description": description}, httpOptions);

       return result;
  }

  //get service with id
  getServiceWithId(id): Observable<any>{
      console.log("Dans getServiceWithId  "+id);

      let observable: Observable<any>;
      observable = this.httpClient.get<any>("http://localhost:8800/services/display/"+id);
      this.subject.next(observable);
      console.log("from function getServiceWithId in services.service")
      //console.log("observable: "+observable);
      return observable;
  }

  //delete service 
  deleteService(id): Observable<any>{
    console.log("id Service : "+id);    

    let observable: Observable<any>;

    observable=this.httpClient.get("http://localhost:8800/services/delete/"+id);
          this.subject.next(observable);

    console.log("deleteGood End");

        return observable;
  }
}