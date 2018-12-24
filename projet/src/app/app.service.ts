import { Injectable,EventEmitter, Output, isDevMode} from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError, Subject } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AppService {
	
	public isLoggedIn: boolean = false;
  user;
	@Output() change: EventEmitter<null> = new EventEmitter();
 	subject: Subject<Observable<any>> = new Subject(); 
  	constructor(private httpClient: HttpClient) { }

  	 public login(mail: string, password: string): Observable <any> {
        var obs: Observable<any> = this.httpClient.get<any>("http://localhost:8800/members/login/" + mail + "/" + password);
        this.subject.next(obs); 
        return obs;
    }

    public logout(){
      this.isLoggedIn = false;
    }

    public displayUser(){
      console.log(JSON.stringify(this.user));
    }
}
