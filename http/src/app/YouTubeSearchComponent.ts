import {Component, ElementRef, EventEmitter, Inject, Injectable, OnInit} from "@angular/core";
import {Http,Response } from "@angular/http";
import {SearchResult} from "./SearchResult";
import { Observable } from 'rxjs/Rx';



export var YOUTUBE_API_KEY: string = 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk';
export var YOUTUBE_API_URL: string =
  'https://www.googleapis.com/youtube/v3/search';

@Injectable()
export class YouTubeService{
  constructor(private http: Http,
              @Inject(YOUTUBE_API_KEY) private apiKey: string,
              @Inject(YOUTUBE_API_URL) private apiURL:string){

  }
  search(query : string) : Observable<SearchResult[]> {
    let params: string = [
        `q=${query}`,
        `key=${this.apiKey}`,
        `part=snippet`,
        `type=video`,
        `maxResults=10`
      ].join('&')
    let queryURL: string = `${this.apiURL}?${params}`;


    return this.http.get(queryURL)
      .map((response: Response) => {
          return (<any>response.json()).items.map(
            item =>{
              console.log(`raw item`,item);
              return new SearchResult({
                id: item.id.videoId,
                title: item.snippet.title,
                description: item.snippet.description,
                thumbnailUrl: item.snippet.thumbnails.high.url
              })
            }
          )
      })
  }
}
export var youTubeServiceInjectables :Array<any> = [
  {provide:YouTubeService,useClass:YouTubeService},
  {provide:YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
  {provide: YOUTUBE_API_URL,useValue: YOUTUBE_API_URL}
];

@Component({
  outputs: ['loading', 'results'],
  selector: 'search-box',
  template: `
    <input type="text" class="form-control" placeholder="Search" autofocus>
  `
})
export class SearchBox implements OnInit{
  loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(public youtube: YouTubeService,
              private el: ElementRef){
  }

  ngOnInit():void{
    Observable.fromEvent(this.el.nativeElement,'keyup')
      .map((e:any)=> e.target.value)
      .filter((text:string)=>text.length>1)
      .debounceTime(250)
      .do(()=>this.loading.next(true))
      .map((query:string)=>this.youtube.search(query))
      .switch()
      .subscribe(
        (results: SearchResult[]) =>{
          this.loading.next(false);
          this.results.next(results);
        },
        (err: any)=>{
          console.log(err);
          this.loading.next(false);
        },()=>{
          this.loading.next(false);
        }
      )
  }
}
@Component({
  inputs: ['result'],
  selector: 'search-result',
  template: `
    <div class="col-sm-6 col-md-3">
      <div class="thumbnail">
        <img src="{{result.thumbnailUrl}}">
        <div class="caption">
          <h3>{{result.title}}</h3>
          <p>{{result.description}}</p>
          <p><a href="{{result.videoUrl}}"
                class="btn btn-default" role="button">Watch</a></p>
        </div>
      </div>
    </div>
  `
})
export class SearchResultComponent{
  result: SearchResult;
}

@Component({
  selector: 'youtube-search',
  template: `
    <div class="container">
      <div class="page-header">
        <h1>Youtube Search
        <img style="float:right"
             *ngIf="loading"
             ng-src='./app/images/loading.gif'/>
        </h1>
      </div>
    
      <div class="row">
        <div class="input-group input-group-lg col-md-12">
             <search-box
                (loading)="loading = $event"
                (results)="updateResults($event)"></search-box>
        </div>
      </div>
      
      <div class="row">
        <search-result
        *ngFor="let result of results"
        [result]="result"></search-result>
      </div>
    </div>
  `

})
export class YouTubeSearchComponent{
  results: SearchResult[];
  loadingGif:"";
  updateResults(results: SearchResult[]){
    this.results = results;
  }
}
