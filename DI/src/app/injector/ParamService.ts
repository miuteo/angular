export class ParamService{
  constructor(private phrase:string){
    console.log(`ParamService is crated with phrase:`,this.phrase);
  }

  getValue(): string{
    return this.phrase;
  }
}
