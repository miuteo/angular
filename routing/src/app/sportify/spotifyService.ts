import {Http, RequestOptions, RequestOptionsArgs,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Inject, Injectable} from '@angular/core';



@Injectable()
export class SpotifyService{
  constructor(public http: Http){

  }

  searchByTrack(query: string){
    let params: string =[
      `q=${query}`,
      `type=track`,
      ].join('&');

    let queryURL: string = `https://api.spotify.com/v1/search?${params}`;

    let headers :Headers= new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer BQBljKiNBtrKSAse56bNRHS_jagHdElniFrKIe6GYyS94EGt8kjHjBz5JkLrWBpHrbNgFpGF_fRJB7eepI34FKeBnS2HhvllIrB25DACTyrSPpvU5Y9p4FLPUwHtVwwkCOh048wxNjg`);

    let options = new RequestOptions({headers:headers});

    return this.http.request(queryURL,options).map(res =>res.json());
  }
}

export var sporifyServiceInjectables :Array<any> = [
  {provide:SpotifyService,useClass:SpotifyService}
];
