import { Injectable,EventEmitter, Output, isDevMode} from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError, Subject } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MemberService {
  
 /* public membre: Object;
  public loginResponseValue;
  */

  public isLoggedIn: boolean = false;
  public message = "test message";
  user;
  @Output() change: EventEmitter<null> = new EventEmitter();
  subject: Subject<Observable<any>> = new Subject(); 

 

  constructor(private httpClient: HttpClient){}


getAllMembers(): Observable<any>{
  let observable: Observable<any>;
    observable = this.httpClient.get("http://localhost:8800/members/list");
    console.log("from function getAllMembre in member.service");
    //console.log(observable);
    return observable;
}

getMember(email: string): Observable<any>{
	let observable: Observable<any>
	observable = this.httpClient.get("http://localhost:8800/getMember/"+email);
	return observable;
}

//send member to NodeJS
insertMember(emailInput, firstNameInput, lastNameInput, passwordInput, addressInput, cityInput, phoneNumberInput): Observable<any> {

    const httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json'
     })};

     return this.httpClient.post("http://localhost:8800/members/insert", {"email": emailInput, "firstName": firstNameInput, "lastName": lastNameInput, "password": passwordInput, "address": addressInput, "city": cityInput, "phone": phoneNumberInput}, httpOptions);

}


/* not working
//send login info(username and password)to NodeJS
login(emailInput, passwordInput): Observable<any> {

    //node_res = this.httpClient.post("http://localhost:8800/members/login", {"email": emailInput,"password": passwordInput}, httpOptions).pipe(map((res: Response) => console.log(res))).subscribe();

    let node_res;
    

    const httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json'
     })};


     node_res = this.httpClient.post("http://localhost:8800/members/login", {"email": emailInput,"password": passwordInput}, httpOptions).pipe(map((res: string) => {

     console.log("res: " + res);
     if(res == "1"){
      console.log("res == 1");
      return true;
     }
     else{
      console.log("res else");

     }

     })).subscribe();
    return false;
}
*/

 public login(mail: string, password: string): Observable <any> {
        var obs: Observable<any> = this.httpClient.get<any>("http://localhost:8800/members/login/" + mail + "/" + password);
        this.subject.next(obs); 
        return obs;
    }
}
