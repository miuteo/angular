export class Article{
   title: String;
   link: String;
   votes: number;

   constructor(title : String,link : String, votes? :number){
     this.title = title;
     this.link = link;
     this.votes = votes || 0;
   }

  voteUp(): boolean{
    this.votes++;
    return false;
  }
  voteDown(): boolean{
    this.votes--;
    return false;
  }
  domain():string{
     try{
       const link : string = this.link.split('//')[1];
       return link.split('/')[0]
     }catch (err){
       return null;
     }
  }
}
