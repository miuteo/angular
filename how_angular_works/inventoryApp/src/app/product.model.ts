export class Product{
  constructor(
    public sku: string,
    public name: string,
    public imageUrl: string,
    public department : String[],
    public price: number
  ){

  }
}
