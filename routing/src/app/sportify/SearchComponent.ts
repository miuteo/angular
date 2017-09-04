import {Component, OnInit} from "@angular/core";
import {SpotifyService} from "./spotifyService"
import {ActivatedRoute, Router} from "@angular/router";



@Component({
  selector: 'search',
  template:`
    <h1>Search</h1>
    <p>
      <input type="text" #newquery
             [value]="query"
             (keydown.enter)="submit(newquery.value)"
            >
      <button (click)="submit(newquery.value)">Search</button>
    </p>
    <div  *ngIf="results">
      <div *ngIf="!results.length">
        No tracks were found with the term '{{query}}'
      </div>
    </div>

    <div *ngIf="results">
      <h1>Results</h1>
      <div class="row">
        <div clss="col-sm-6 col-md-4" *ngFor="let t of results">
          <div class="thumbnail">
            <div class="content">
              <img src="{{t.album.images[0].url}}" class="img-responsive">
              <div class="caption">
                <h3>
                  <a [routerLink]="['/artists',t.artists[0].id]">
                    {{t.artists[0].name}}
                  </a>
                </h3>
                <br>
                <p>
                  <a [routerLink]="['/tracks',t.id]">
                    {{t.name}}
                  </a>
                </p>
              </div>
              <div class="attribution">
                <h4>
                  <a [routerLink]="['/albums',t.album.id]">
                    {{t.album.name}}
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  `
})
export class SearchComponent implements OnInit{
  query:string;
  results: Object;

  constructor(private spotify: SpotifyService,
              private router: Router,
              private route: ActivatedRoute){
    this.route
      .queryParams
      .subscribe(params =>{this.query = params['query']||'';});


  }

  submit(query: String){
    this.router.navigate(['search'],{queryParams:{query: query}})
      .then(() =>this.search());
  }
  search():void{
    console.log(`this.query=`,this.query);
    if(!this.query)return;

    this.spotify
      .searchByTrack(this.query)
      .subscribe((res:any)=>this.renderResults(res));
  }

  renderResults(res:any) :void{
    this.results = null;
    if(res && res.tracks && res.tracks.item){
      this.results = res.tracks.items;
    }
  }

  ngOnInit(): void{
    this.search();
  }
}
