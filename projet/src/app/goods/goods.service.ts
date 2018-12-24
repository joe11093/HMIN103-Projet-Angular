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
export class GoodsService {
  @Output() change: EventEmitter<null> = new EventEmitter();
  subject: Subject<Observable<any>> = new Subject();

  searchResult;

  constructor(private httpClient: HttpClient) { }

  getAllGoods(): Observable<any>{
    let observable: Observable<any>;
      observable = this.httpClient.get("http://localhost:8800/goods/list");
      console.log("from function getAllGoods in goods.service")
      console.log(observable);
      return observable;
  }

  //send good to NodeJS
  insertGood(name, description, price, id, type, toRent, toBuy, keywords, date): Observable<any> {

      console.log("Name: " + name + ", toRent: " + toRent);
      const httpOptions = {
      headers: new HttpHeaders({'Content-Type':  'application/json'})};
       let result=this.httpClient.post("http://localhost:8800/goods/insert", {"name": name, "description": description,"price": price, "owner_id": id, "type": type, "toRenet": toRent, "toBuy": toBuy, "keywords": keywords, "date": date}, httpOptions);

       return result;
  }

  //get good with id
  getGoodWithId(id): Observable<any>{
      console.log("Dans getGoodWithId");

      let observable: Observable<any>;
      observable = this.httpClient.get<any>("http://localhost:8800/goods/display/"+id);
      this.subject.next(observable);
      //console.log("from function getGoodWithId in goods.service")
      //console.log("observable: "+observable);
      return observable;
  }
  
  deleteGood(id): Observable<any>{
    console.log("id Good : "+id);    

    let observable: Observable<any>;

    observable=this.httpClient.get("http://localhost:8800/goods/delete/"+id);
          this.subject.next(observable);

    console.log("deleteGood End");

        return observable;
  }

  getTypes(): Observable<any>{
  var obs: Observable<any> = this.httpClient.get<any>("http://localhost:8800/goods/types");
        this.subject.next(obs); 
        return obs;

  }

  searchGoods(type, maxprice, toBuy, toRent, keywords): Observable<any>{
    var baseUrl = "http://localhost:8800/goods/search/";
    var paramsUrl = "" + type + "/" + maxprice + "/" + toBuy + "/" + toRent + "/" + keywords;

    console.log("URL: " + baseUrl + paramsUrl);
    var obs: Observable<any> = this.httpClient.get<any>(""+baseUrl+paramsUrl);
    this.subject.next(obs); 
    return obs;
  }
}

