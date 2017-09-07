import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {SpotifyService} from "./spotifyService";

@Component({
  selector: 'track',
  template: `
    <div *ngIf="track">
      <h1>{{track.name}}</h1>
      <p>
        <img src="{{track.album.images[1].url}}">
      </p>
      <p>
        <audio controls src="{{track.preview_url}}"></audio>
      </p>
      <p><button  (click)="back()">Back</button></p>
    </div>
  `
})
export class TrackComponent implements OnInit{
  id: string;
  track: Object;
  constructor(private spotify: SpotifyService,
              private router: Router,
              private route: ActivatedRoute){

  }

  search(){
    if(!this.id)return;

    this.spotify
      .getTrack(this.id)
      .subscribe((res:any)=>this.renderResults(res));
  }
  renderResults(res:any) :void{
    this.track = null;
    console.log(`res=`,res)
    if(res){
      this.track = res;

    }
  }
  back(){
      this.router.navigate(['/search']);
  }
  ngOnInit(): void{
    this.route.params.subscribe(params=>{
      this.id=params['id'];
      console.log(`paramid=`,this.id)
    });

    this.search();
  }
}
