import {Http, RequestOptions, RequestOptionsArgs,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Inject, Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";


export var O_AUTH_TOKEN : string = 'BQAJfvxZhqXzUIokpwPtEUcplRYH954-yCAzlccbjNQzTCYgnztOnCoE0LMbL6VL9qMCSU3cwUniwdr4aNmQeYdmn0aszYqDN-uUAX4h1mAeFadp-CmuuV8XIfmEAi7cuIj_TlhfuvI';
@Injectable()
export class SpotifyService{
  static BASE_URL: string = 'https://api.spotify.com/v1';
  constructor(public http: Http,
              @Inject(O_AUTH_TOKEN) private token: string){

  }

  query(URL: string,params?: Array<string>): Observable<any[]>{
    let queryURL = `${SpotifyService.BASE_URL}/${URL}`;
    if(params){

      queryURL =`${queryURL}?${params.join('&')}`
    }

    let headers :Headers= new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer `+this.token);
    let options = new RequestOptions({headers:headers});

    return this.http.request(queryURL,options).map(res =>res.json());
  }
  search(query:string,type: string):Observable<any[]>{
    return this.query(`search`,[
      `q=${query}`,
      `type=${type}`
    ]);
  }




  searchTrack(query: string){
    return this.search(query,'track');
  }
  getTrack(id:string){
    return this.query(`tracks/${id}`);
  }
}

export var sporifyServiceInjectables :Array<any> = [
  {provide:SpotifyService,useClass:SpotifyService},
  {provide:O_AUTH_TOKEN, useValue:O_AUTH_TOKEN}
];
